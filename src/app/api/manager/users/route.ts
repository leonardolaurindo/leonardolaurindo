import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { name, email, role, password } = body

        // Verificar se o usuário já existe
        const existingUser = await prisma.user.findUnique({
            where: { email },
        })

        if (existingUser) {
            return NextResponse.json({ error: 'Usuário já existe' }, { status: 400 })
        }

        // Hash da senha
        const hashedPassword = await hash(password, 10)

        // Criar novo usuário
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                role,
                password: hashedPassword,
            },
        })

        // Remover a senha do objeto retornado
        const { password: _, ...userWithoutPassword } = newUser

        return NextResponse.json(userWithoutPassword, { status: 201 })
    } catch (error) {
        console.error('Erro ao criar usuário:', error)
        return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 })
    }
}

export async function GET() {
    try {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                createdAt: true,
            },
        })
        return NextResponse.json(users)
    } catch (error) {
        console.error('Erro ao buscar usuários:', error)
        return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 })
    }
}