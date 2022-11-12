import React from 'react'
import Header from "../../components/Header"
import { getProviders } from "next-auth/react"

export default function signIn() {
  return (
    <>
        <Header/>
        <div className=''>

        </div>
    </>
  )
}

export async function getServerSideProps(context) {
    const providers = await getProviders();
  
    return {
      props: {
        providers,
      },
    };
}
