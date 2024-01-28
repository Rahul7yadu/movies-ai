import { TvData, } from "@/lib/types"
import { TCard } from "@/components/Card"
import MyPagination from "@/components/Pagination"
import Sidebar from "@/components/Sidebar"
const Page = async ({ searchParams }: {
  searchParams?: {
    query?: string,
    page?: string | number,
  }
}) => {
  const query = searchParams?.query || 'popular'
  const page = searchParams?.page || '1'

  const response = await fetch(`${process.env.BASE_URL}/tv/${query}?api_key=${process.env.API_KEY}&page=${page}`)
  const data: TvData = await response.json()
  return (
    <div className="flex flex-col">
      <div className="flex">
        <Sidebar />
        <div className="flex flex-wrap justify-center gap-4 p-4">
          {data.results.map((Data, id) => <TCard Data={Data} key={id} />)}
        </div>
      </div>
      <MyPagination currentPage={Number(page)} totalPage={data.total_pages} />
    </div>
  )
}
export default Page