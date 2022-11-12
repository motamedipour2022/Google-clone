import React from 'react'
import Header from "../../components/Header"

export default function signIn() {
  return (
    <>
        <Header/>
        <div className=''>

        </div>
    </>
  )
}

export async function getServerSideProps() {
    const providers = await getProviders();
    return {
        porps : { providers },
    };
}
