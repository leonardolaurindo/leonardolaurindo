import { Toaster } from "@/components/ui/toaster"
import Providers from "../providers"

export default function LoginLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Providers>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                {children}
            </div>
            <Toaster />
        </Providers>
    )
}