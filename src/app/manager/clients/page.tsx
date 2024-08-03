'use client'

import { useSession } from 'next-auth/react'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusIcon } from 'lucide-react'

// Função para buscar os clientes da API
async function fetchClients() {
    const response = await fetch('/api/manager/clients')
    if (!response.ok) {
        throw new Error('Falha ao buscar clientes')
    }
    return response.json()
}

export default function ClientsPage() {
    const { data: session, status } = useSession()
    const router = useRouter()

    // Efeito para redirecionar usuários não autenticados
    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/manager/login')
        }
    }, [status, router])

    // Busca os dados dos clientes usando React Query
    const { data: clients, isLoading, error } = useQuery({
        queryKey: ['clients'],
        queryFn: fetchClients,
        enabled: status === "authenticated" && session?.user?.role === "ADMIN"
    })

    // Renderização condicional baseada no status de autenticação e carregamento
    if (status === "loading") return <div>Carregando...</div>
    if (status === "unauthenticated") return null // Será redirecionado pelo useEffect
    if (session?.user?.role !== "ADMIN") return <div>Acesso negado</div>

    if (isLoading) return <div>Carregando clientes...</div>
    if (error) return <div>Erro ao carregar os clientes</div>

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Clientes</h1>
                <Button onClick={() => router.push('/manager/clients/novo')}>
                    <PlusIcon className="mr-2 h-4 w-4" /> Novo Cliente
                </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {clients.map((client: any) => (
                    <Card key={client.id} className="cursor-pointer hover:shadow-lg transition-shadow"
                        onClick={() => router.push(`/manager/clients/${client.id}`)}>
                        <CardHeader>
                            <CardTitle>{client.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-500">{client.email}</p>
                            <p className="text-sm text-gray-500">{client.phone}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}