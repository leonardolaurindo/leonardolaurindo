'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'


const formSchema = z.object({
    name: z.string().min(4, { message: 'O nome do usuário deve ter pelo menos 2 caracteres' }),
    email: z.string().email({ message: 'Email inválido' }),
    role: z.enum(['ADMIN', 'USER'], { required_error: 'Selecione um tipo de usuário' }),
    password: z.string().min(8, { message: 'A senha deve ter pelo menos 8 caracteres' }),
});

type FormData = z.infer<typeof formSchema>

interface NewUserModalProps {
    isOpen: boolean,
    onClose: () => void,
    onSuccess: () => void
}

export function NewUserModal({ isOpen, onClose, onSuccess }: NewUserModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const queryClient = useQueryClient();

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            role: "USER",
            password: "",
        },
    });

    const createUser = useMutation({
        mutationFn: async (data: FormData) => {
            const response = await fetch('/api/manager/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })
            if (!response.ok) throw new Error('Falha ao criar usuário');
            return response.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] })
            onSuccess()
            form.reset()
        },
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        try {
            await createUser.mutateAsync(data);
        } catch (error) {
            console.error('Erro ao criar usuário: ', error)
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Criar Novo Usuário</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nome</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="email" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="role"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Função</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Selecione uma função" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="ADMIN">Administrador</SelectItem>
                                            <SelectItem value="USER">Usuário</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Senha</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="password" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Criando...' : 'Criar Usuário'}
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}