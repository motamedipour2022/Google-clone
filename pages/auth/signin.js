import React from "react";
import Header from "../../components/Header";
import { getProviders, signIn} from "next-auth/react";

export default function signin({providers}) {
  return (
    <>
        <Header/>
        <div className="mt-40">
            {Object.values(providers).map(provider =>(
              <div key={provider.name} className="flex flex-col items-center">
                <img className="h-35 object-cover" src="https://www.upsara.com/do.php?img=26386"/>
                <p className="text-sm italic my-10 text-center">Search anythings you need</p>
                <button className="bg-blue-300 rounded-lg  p-3 hover:bg-red-300" onClick={()=>signIn(provider.id, {callbackUrl: "/" })}>
                  Sign in with {provider.name}</button>
              </div>
            ))}
        </div>
        
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
          props : { providers },    
  };
}


