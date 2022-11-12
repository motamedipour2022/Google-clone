import React from 'react'
import Header from "../../components/Header"
import  getProviders  from "react"

export default function signIn() {
  return (
    <>
        <Header/>
        <div className=''>

        </div>
    </>
  )
}
function Login({ providers }) {
    return (
        <div>
           

            {Object.keys(providers).map((provider) => {
                <button>Login With {provider.name}</button>
            })}
        </div>
    )
}
export default Login;

export async function getServerSideProps() {
    const providers = await getProviders();
  
    return {
      props: {
        providers,
      },
    };
}

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        SpotifyProvider({
            clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
            authorization: LOGIN_URL,
        }),
        // ...add more providers here
    ],
})
