import NextAuth from "next-auth"
import PowpaProvider from "next-auth/providers/powpa"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    PowpaProvider({
      clientId: process.env.POWPA_ID,
      clientSecret: process.env.POWPA_SECRET,
    }),
    pages:{
        signIn
    }
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)