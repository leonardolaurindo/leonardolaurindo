import { NextResponse } from 'next/server'
import { withAuth } from "next-auth/middleware"

export default withAuth(
    function middleware(req) {
        const path = req.nextUrl.pathname

        // Verifica se o caminho começa com '/manager'
        if (path.startsWith("/manager")) {
            // Se o usuário não estiver autenticado (token é null)
            if (!req.nextauth.token) {
                // Redireciona para a página de login
                // Usamos URL para garantir que a URL seja absoluta
                return NextResponse.redirect(new URL('/manager/login', req.url))
            }

            // Aqui você pode adicionar lógica adicional para verificar permissões específicas
            // Por exemplo, verificar se o usuário tem role de ADMIN para certas rotas

            // Se o usuário estiver autenticado, permite o acesso
            return NextResponse.next()
        }

        // Para todas as outras rotas, permite o acesso
        return NextResponse.next()
    },
    {
        callbacks: {
            // Esta função é chamada para verificar se o usuário está autorizado
            authorized: ({ token }) => !!token,
        },
    }
)

// Define em quais rotas o middleware será aplicado
export const config = { matcher: ["/manager/:path*"] }