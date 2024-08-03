'use client'

import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { DataTable } from '@/components/ui/data-table'
import { columns } from './columns'
import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'
import { useToast } from '@/components/ui/use-toast'
import { NewUserModal } from './new-user-modal'

// Função para buscar usuários da API
async function getUsers() {
    const res = await fetch('/api/manager/users')
    if (!res.ok) throw new Error('Falha ao carregar usuários')
    return res.json()
}

export default function UsersPage() {
    const [isNewUserModalOpen, setIsNewUserModalOpen] = useState(false)
    const { toast } = useToast()

    // Utilizamos o React Query para gerenciar o estado e cache dos dados
    const { data: users, isLoading, error } = useQuery({
        queryKey: ['users'],
        queryFn: getUsers,
    })

    if (isLoading) return <div>Carregando...</div>
    if (error) return <div>Erro ao carregar usuários</div>

    return (
        <div className="container mx-auto py-10">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Gerenciamento de Usuários</h1>
                <Button onClick={() => setIsNewUserModalOpen(true)}>
                    <PlusIcon className="mr-2 h-4 w-4" /> Novo Usuário
                </Button>
            </div>

            <DataTable columns={columns} data={users || []} />

            <NewUserModal
                isOpen={isNewUserModalOpen}
                onClose={() => setIsNewUserModalOpen(false)}
                onSuccess={() => {
                    setIsNewUserModalOpen(false)
                    toast({
                        title: "Usuário criado",
                        description: "O novo usuário foi criado com sucesso.",
                    })
                }}
            />
        </div>
    )
}