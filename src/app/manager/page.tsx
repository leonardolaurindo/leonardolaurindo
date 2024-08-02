'use client'

import { useSession } from 'next-auth/react'
import { useQuery } from '@tanstack/react-query'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import PaymentsLineChart from "@/components/manager/dashboard/PaymentsLineChart"

async function fetchDashboardData(role: string) {
    const response = await fetch(`/api/manager/dashboard?role=${role}`)
    if (!response.ok) {
        throw new Error('Failed to fetch dashboard data')
    }
    return response.json()
}

export default function DashboardPage() {
    const { data: session, status } = useSession()
    const router = useRouter()
    const role = session?.user?.role || 'USER'

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/manager/login')
        }
    }, [status, router])

    const { data, isLoading, error } = useQuery({
        queryKey: ['dashboardData', role],
        queryFn: () => fetchDashboardData(role),
        enabled: status === "authenticated"
    })

    if (status === "loading") return <div>Carregando...</div>
    if (status === "unauthenticated") return null // Será redirecionado pelo useEffect

    if (isLoading) return <div>Carregando dados do dashboard...</div>
    if (error) return <div>Erro ao carregar os dados do dashboard</div>

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {role === 'ADMIN' ? (
                    <>
                        <Card>
                            <CardHeader>
                                <CardTitle>Total de Clientes</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-3xl font-bold">{data?.clientCount || 0}</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Pagamentos Pendentes</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-3xl font-bold">{data?.pendingPayments || 0}</p>
                            </CardContent>
                        </Card>
                    </>
                ) : (
                    <>
                        <Card>
                            <CardHeader>
                                <CardTitle>Meus Clientes</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-3xl font-bold">{data?.userClientCount || 0}</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Meus Pagamentos Pendentes</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-3xl font-bold">{data?.userPendingPayments || 0}</p>
                            </CardContent>
                        </Card>
                    </>
                )}
                <Card>
                    <CardHeader>
                        <CardTitle>Atendimentos Hoje</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold">{data?.todayAppointments || 0}</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Publicações Ativas</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold">{data?.activeBlogs || 0}</p>
                    </CardContent>
                </Card>
            </div>
            {data?.paymentsData && (
                <div className="mt-6">
                    <PaymentsLineChart data={data.paymentsData} />
                </div>
            )}
        </div>
    )
}