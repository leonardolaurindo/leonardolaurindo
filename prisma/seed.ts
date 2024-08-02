const { PrismaClient } = require('@prisma/client');
const { hash } = require('bcryptjs');

const prisma = new PrismaClient()

async function main() {
    // Criar admin
    const adminPassword = await hash('admin123', 12)
    const admin = await prisma.user.upsert({
        where: { email: 'admin@example.com' },
        update: {},
        create: {
            email: 'admin@example.com',
            name: 'Admin User',
            password: adminPassword,
            role: 'ADMIN',
        },
    })

    // Criar usuário normal
    const userPassword = await hash('user123', 12)
    const user = await prisma.user.upsert({
        where: { email: 'user@example.com' },
        update: {},
        create: {
            email: 'user@example.com',
            name: 'Normal User',
            password: userPassword,
            role: 'USER',
        },
    })

    // Criar clientes para o usuário normal
    const client1 = await prisma.client.create({
        data: {
            name: 'Cliente 1',
            email: 'cliente1@example.com',
            phone: '1234567890',
            userId: user.id,
        },
    })

    const client2 = await prisma.client.create({
        data: {
            name: 'Cliente 2',
            email: 'cliente2@example.com',
            phone: '0987654321',
            userId: user.id,
        },
    })

    // Criar agendamentos
    await prisma.appointment.createMany({
        data: [
            {
                date: new Date('2024-08-03T10:00:00Z'),
                notes: 'Primeira consulta',
                userId: user.id,
                clientId: client1.id,
            },
            {
                date: new Date('2024-08-04T14:00:00Z'),
                notes: 'Acompanhamento',
                userId: user.id,
                clientId: client2.id,
            },
        ],
    })

    // Criar blogs
    await prisma.blog.createMany({
        data: [
            {
                title: 'Primeiro post do blog',
                content: 'Este é o conteúdo do primeiro post do blog.',
                status: 'PUBLISHED',
                userId: user.id,
            },
            {
                title: 'Rascunho de post',
                content: 'Este é um rascunho de post.',
                status: 'DRAFT',
                userId: user.id,
            },
        ],
    })

    console.log('Seed data created successfully')

    // Criar pagamentos de exemplo
    const payments = await Promise.all([
        prisma.payment.create({
            data: {
                amount: 100.00,
                status: "PAID",
                userId: admin.id,
            }
        }),
        prisma.payment.create({
            data: {
                amount: 150.50,
                status: "PENDING",
                userId: user.id,
            }
        }),
        prisma.payment.create({
            data: {
                amount: 75.25,
                status: "CANCELLED",
                userId: admin.id,
            }
        })
    ])

    console.log({ payments })
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });