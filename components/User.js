import {useSession, signIn, signOut} from "next-auth/react"

export default function User({className}) {
  const {data: session} = useSession();
  if(session){
    return(
      <>
         <img onClick={signOut} src={session.user.image} alt="user" className={`h-13 w-13 rounded-full hover:bg-gray-200 p-1 ${className}`}/>
      </>

    )
  }
  return (
    <>
    <button className={`bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-110 hover:shadow-xl ${className}`} onClick={signIn}>Sign in</button>    
    </>


  )
}
