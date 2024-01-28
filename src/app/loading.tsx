import MySkeleton from "@/components/Skeleton"

const loading = () => {
  return (
    <div className="flex justify-center p-4 gap-6 flex-wrap">

      {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((val,idx)=><MySkeleton key={idx}/>) }
    </div>
  )
}
export default loading