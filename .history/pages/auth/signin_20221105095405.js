import React from 'react'
import Header from "../../components/Header"
import  getProviders  from "../auth/"

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

export async function getServerSideProps() {
    const providers = await getProviders();
  
    return {
      props: {
        providers,
      },
    };
}


