import { useRouter } from 'next/router'
// import React from 'react'

export default function SearchOption({title, Icon, selected}) {
    const router = useRouter()
    function selectTab(title) {
        router.push(`/search?term= ${router.query.term}&searchType=${title === "images" ? "image" : ""}`)
    }
    return (
    <div onClick={()=>selectTab(title)}
     className={`flex items-center space-x-2 border-b-4 border-transparent hover:text-green-700 cursor-pointer hover:border-green-700 pb-2 ${selected && "text-blue-500 border-blue-500"}`}>
        <Icon className="h-4"/>
        <p>{title}</p>
    </div>
  )
}
