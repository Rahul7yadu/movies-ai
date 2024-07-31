import { Skeleton } from "./ui/skeleton"

const MySkeleton = () => {
  return (
    <div className="border-border max-w-fit ">
        <Skeleton className="w-60 h-96" />

    </div>
  )
}


export const BigSkeleton = ()=>{

  return (
    <div className="border-red-500 border-2 max-w-fit">
      <Skeleton className="w-screen h-screen"/>
    </div>
  )
}
export default MySkeleton