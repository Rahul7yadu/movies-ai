"use client"
import { usePathname, useSearchParams } from "next/navigation"
import { Pagination, PaginationContent, PaginationLink, PaginationNext, PaginationPrevious, PaginationEllipsis } from "./ui/pagination"

const MyPagination = ({currentPage,totalPage}:{currentPage:number,totalPage:number}) => {
        const searchParams = useSearchParams()
        const pathName = usePathname()
const createUrl = (page:number)=>{
    let newQuery = pathName+"?"
const params = new URLSearchParams(searchParams)
if(params.get("query")){
    newQuery+=`query=${params.get("query")}&`
}
if(page){
    newQuery+=`page=${page}`
}
return newQuery
}

if(totalPage>500) totalPage = 500 
    return (
            <Pagination className="sticky bottom-0 backdrop-blur-sm bg-background/80">
                <PaginationContent>
                        <PaginationPrevious href={createUrl(currentPage-1)}/>
                        {currentPage>1&&<PaginationLink  href={createUrl(currentPage-1)} >{currentPage-1}</PaginationLink>}
                        <PaginationLink isActive href="/#">{currentPage}</PaginationLink>
                    {  currentPage!=totalPage&&  <PaginationLink href={createUrl(currentPage+1)}>{currentPage+1}</PaginationLink>}
                        {currentPage!=totalPage&&<PaginationEllipsis />}
                        <PaginationLink href={createUrl(totalPage)}>{totalPage}</PaginationLink>
                        {currentPage>=1 && totalPage!=currentPage &&<PaginationNext href={createUrl(currentPage+1)}/>}
                </PaginationContent>
            </Pagination>
        
    )
}
export default MyPagination