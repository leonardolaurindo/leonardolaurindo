'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SessionProvider } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Providers from './providers'
import { Toaster } from '@/components/ui/toaster'

interface ManagerLayoutProps {
    children: ReactNode
}

const navItems = [
    { href: '/manager', label: 'Dashboard' },
    { href: '/manager/clients', label: 'Clientes' },
    { href: '/manager/payments', label: 'Pagamentos' },
    { href: '/manager/blogs', label: 'Blogs' },
    { href: '/manager/appointments', label: 'Atendimentos' },
]

export default function ManagerLayout({ children }: ManagerLayoutProps) {
    const pathname = usePathname()

    // Se a rota atual for a página de login, retorne apenas o children
    if (pathname === '/manager/login') {
        return <>{children}</>
    }

    return (
        <Providers>
            <div className="flex h-screen bg-gray-100">
                {/* Sidebar */}
                <Card className="w-64 h-full">
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-4">Painel Admin</h2>
                        <nav>
                            <ul className="space-y-2">
                                {navItems.map((item) => (
                                    <li key={item.href}>
                                        <Button
                                            asChild
                                            variant={pathname === item.href ? "default" : "ghost"}
                                            className="w-full justify-start"
                                        >
                                            <Link href={item.href}>
                                                {item.label}
                                            </Link>
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </Card>

                {/* Main content */}
                <div className="flex-1 overflow-x-hidden overflow-y-auto">
                    <main className="p-6">
                        {children}
                    </main>
                </div>
            </div>
            <Toaster />
        </Providers>
    )
}