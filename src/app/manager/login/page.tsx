'use client'

import { useState, useEffect } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useCustomToast } from "@/components/ui/toast-wrapper"

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const { showSuccess, showError } = useCustomToast();
    const { status } = useSession()

    useEffect(() => {
        if (status === 'authenticated') {
            router.push('/manager')
        }
    }, [status, router])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await signIn('credentials', {
            redirect: false,
            email,
            password,
        });
        if (result?.error) {
            showError({ description: "Falha no login. Verifique suas credenciais." });
        } else {
            showSuccess({ description: "Login realizado com sucesso!" });
            router.push('/manager');
        }
    }

    if (status === 'loading') return <div>Carregando...</div>
    if (status === 'authenticated') return null // Será redirecionado pelo useEffect

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                        />
                        <Input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Senha"
                            required
                        />
                        <Button type="submit" className="w-full">Entrar</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}