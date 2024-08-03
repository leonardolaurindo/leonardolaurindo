"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal, ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export type User = {
    id: string
    name: string
    email: string
    role: 'ADMIN' | 'USER'
    createdAt: string
}

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Nome
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "role",
        header: "Função",
    },
    {
        accessorKey: "createdAt",
        header: "Data de Criação",
        cell: ({ row }) => {
            const date = new Date(row.getValue("createdAt"))
            return date.toLocaleDateString()
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const user = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Abrir menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Ações</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(user.id)}>
                            Copiar ID do usuário
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Editar usuário</DropdownMenuItem>
                        <DropdownMenuItem>Excluir usuário</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]