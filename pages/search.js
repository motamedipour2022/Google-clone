import Head from 'next/head';
import SearchHeader from '../components/SearchHeader';
import SearchResaults from '../components/SearchResaults';
import ImageResualt from '../components/ImageResualt';
import Response from '../Response';
import {useRouter} from "next/router";

export default function search({results}) {  
  console.log(results); 
  const router = useRouter()
  return (
    <div>
        <Head>
            <title>{router.query.term} - Search resault</title>
        </Head>

        {/* search header */}
            <SearchHeader/>

        {/* search resault */}
        {router.query.searchType === "image" ? (
            <ImageResualt results={results}/>
        ) : (
          <SearchResaults results={results}/>
        )}
        
        
    </div>
  )
}

export async function getServerSideProps(context) {
  const startIndex = context.query.start || "1"
  const mockData = false;
  const data = mockData ? Response : await fetch (
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${context.query.searchType && "&searchType=image"}&start=${startIndex}`

  ).then((response)=>response.json())
  return {
    props:{
      results: data
    }
  }
}
