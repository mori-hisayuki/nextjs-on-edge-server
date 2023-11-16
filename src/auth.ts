import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import { Provider } from '@auth/core/providers'
import type { NextAuthConfig } from 'next-auth'

// export const {
//   handlers: { GET, POST },
//   auth
// } = NextAuth({
//   providers: [
//     GitHub({
//       clientId: process.env.GITHUB_ID!,
//       clientSecret: process.env.GITHUB_SECRET!
//     })
//   ]
// })

if (!process.env.GITHUB_CLIENT_ID || !process.env.GITHUB_CLIENT_SECRET) {
  throw new Error('Missing Github OAuth credentials')
}

if (!process.env.NEXTAUTH_SECRET) {
  throw new Error('Missing NEXTAUTH_SECRET')
}
export const config: NextAuthConfig = {
  trustHost: true,
  theme: {
    logo: 'https://next-auth.js.org/img/logo/logo-sm.png'
  },
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl
      if (pathname === '/middleware-example') return !!auth
      return true
    }
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth(config)
