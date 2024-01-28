import MCard from "@/components/Card"
import { TCard,PCard }from "@/components/Card"
import MyPagination from "@/components/Pagination"
import { MovieResults, TvResults, PeopleResults } from "@/lib/types"

const page = async ({ searchParams }: {
    searchParams: {
        query: string,
        page:string
    }
}) => {
    const page = searchParams.page||"1"

    const response = await fetch(`${process.env.BASE_URL}search/multi?query=${searchParams.query}${page&&`&page=${page}`}&api_key=${process.env.API_KEY}`)

    const data:SearchResponse = await response.json() 
    console.log(data)
    return (
        <div className="flex flex-col gap-8">

        <div className="flex flex-wrap gap-4 justify-center">{data.results.map((result)=>{
            
            switch(result.media_type){
                case "movie" : return <MCard Data={result as MovieResults}/>
                case "tv" : return <TCard Data={result as TvResults}/>
                case "person":return <PCard Data={result as PeopleResults}/>
                default: return <MCard Data={result as MovieResults}/>
            }
            
        })}</div>
        <MyPagination currentPage={data.page} totalPage={data.total_pages}/>
        </div>
    )
}
export default page

type SearchResponse = {
    page: 1,
    results:Results

    total_pages: 1,
    total_results: 19
}



type Results = Array<{media_type:"person"|"movie"|"tv"}&(MovieResults|TvResults|PeopleResults) >
   



