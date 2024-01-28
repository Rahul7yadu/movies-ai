import MCard from "@/components/Card"
import MyPagination from "@/components/Pagination"
import { getMoviesByQueryAndPage } from "@/actions/helper"
import Sidebar from "@/components/Sidebar"
export default async function Home({ searchParams }: {
  searchParams?: {
    query?: string,
    page?:  number|string,
  }
}) {
  
  const query = searchParams?.query || 'popular'
  const page = searchParams?.page || '1'

  const movieData =  await getMoviesByQueryAndPage(query,Number(page))


  return (
    <div className="flex flex-col gap-8">
      <div className="flex relative ">
      <Sidebar/>
      <div className="flex flex-wrap gap-6 justify-center" >
        {movieData&&movieData.results.length>0?movieData.results.map((movieData, idx) => <MCard key={idx} Data={movieData} />):<div>No movies found</div>}
      </div>  
      </div>
       <MyPagination totalPage={movieData.total_pages} currentPage={Number(page)} />
    </div>
  )
}
