import NextAuth from "next-auth"
import PowpaProvider from "next-auth/providers/powpa"

export default NextAuth ({
  // Configure one or more authentication providers
  providers: [
    PowpaProvider({
      clientId: process.env.POWPA_ID,
      clientSecret: process.env.POWPA_SECRET,
    }),
    // ...add more providers here
  ],
}

