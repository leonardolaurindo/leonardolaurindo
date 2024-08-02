import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../auth/[...nextauth]/route"

const prisma = new PrismaClient()

export async function GET(request: Request) {
    const session = await getServerSession(authOptions)
    if (!session) {
        return NextResponse.json({ error: "Não autorizado" }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const role = searchParams.get("role")

    try {
        let dashboardData: any = {}
        const userId = session.user.id

        // Dados comuns para ambos os roles
        const [todayAppointments, activeBlogs] = await Promise.all([
            prisma.appointment.count({
                where: {
                    date: {
                        gte: new Date(new Date().setHours(0, 0, 0, 0)),
                        lt: new Date(new Date().setHours(23, 59, 59, 999)),
                    },
                    ...(role !== "ADMIN" ? { userId } : {}),
                },
            }),
            prisma.blog.count({ where: { status: "PUBLISHED", ...(role !== "ADMIN" ? { userId } : {}) } }),
        ])

        // Dados específicos por role
        if (role === "ADMIN") {
            const [clientCount, pendingPayments] = await Promise.all([
                prisma.client.count(),
                prisma.payment.count({ where: { status: "PENDING" } }),
            ])
            dashboardData = { clientCount, pendingPayments, todayAppointments, activeBlogs }
        } else {
            const [userClientCount, userPendingPayments] = await Promise.all([
                prisma.client.count({ where: { userId } }),
                prisma.payment.count({ where: { userId, status: "PENDING" } }),
            ])
            dashboardData = { userClientCount, userPendingPayments, todayAppointments, activeBlogs }
        }

        // Dados para o gráfico de pagamentos
        const sixMonthsAgo = new Date()
        sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6)

        const paymentsData = await prisma.payment.groupBy({
            by: ['createdAt'],
            _sum: {
                amount: true
            },
            where: {
                createdAt: {
                    gte: sixMonthsAgo
                },
                ...(role !== "ADMIN" ? { userId } : {})
            },
            orderBy: {
                createdAt: 'asc'
            }
        })

        dashboardData.paymentsData = paymentsData.map(payment => ({
            date: payment.createdAt.toISOString().split('T')[0], // Formato YYYY-MM-DD
            amount: payment._sum.amount || 0
        }))


        return NextResponse.json(dashboardData)
    } catch (error) {
        console.error("Error fetching dashboard data:", error)
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}