import React from 'react'

// import { getProviders } from "next-auth/client"
import Header from "../../components/Header"
import getProviders from "../auth/providers"

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



