import React from 'react'
import Parser from "html-react-parser"
import PaginationButtons from './PaginationButtons'


export default function SearchResaults({results}) {
  return (
    <div className='w-full mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52'>                                   
        <p className='text-gray-600 text-sm mb-5 mt-3'>About {results.searchInformation.formattedTotalResults}</p>
        {results.items?.map((results)=>(
            <div key={results.link} className="max-w-xl mb-8">
                <div className='group'>
                   <a className='text-sm truncate' href={results.link}>{results.formattedUrl}</a>
                   <a className='group-hover:underline decoration-blue-800' href={results.link}>
                      <h2 className='truncate text-xl font-md text-blue-800'>{results.title}</h2>
                   </a>
                </div>
                <p className='text-gray-600'>{Parser(results.htmlSnippet)}</p>
                {/* <p>{Parser(results.htmlSnippet)}</p> */}

            </div>
        ))}
        <PaginationButtons/>

    </div>
  )
}
