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
export default Login;

export async function getServerSideProps() {
    const providers = await getProviders();
  
    return {
      props: {
        providers,
      },
    };
}
