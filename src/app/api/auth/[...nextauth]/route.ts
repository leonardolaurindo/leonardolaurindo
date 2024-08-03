// app/api/auth/[...nextauth]/route.ts
import { AuthOptions } from "next-auth"
import NextAuth from "next-auth"
import { authOptions } from "@/manager/auth"

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }