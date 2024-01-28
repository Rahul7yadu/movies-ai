"use client"

import { Button } from "@/components/ui/button"

const Error = ({
    error,
    reset,
  }: {
    error: Error & { digest?: string }
    reset: () => void
  }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
    <div >An Error Ocurred : {error.message}</div>
    <Button onClick={()=>reset()}>Relod</Button>
    </div>
  )
}
export default Error