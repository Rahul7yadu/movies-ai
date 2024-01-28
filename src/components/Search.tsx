"use client"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { FormEvent, useState } from "react"
import { useSearchParams,useRouter, usePathname} from "next/navigation"
import { SearchIcon } from "lucide-react"

const Search = () => {
const params = useSearchParams()
const router = useRouter()
const pathname = usePathname()
    const [text,setText] = useState(params.get("query")||"")
    const [loading,setLoading] = useState(false)

    const formSubmitHandler = (e: FormEvent<HTMLFormElement>)=>{
          e.preventDefault()
          setLoading(true)
    const searchParams = new URLSearchParams(params)
    if(text.length!==0){
        searchParams.delete("page")
        searchParams.set("query",text)
    }else{
        searchParams.delete("query")
    }
        setLoading(false)
        router.push(`/search?${searchParams.toString()}`)
    }

  return (
    <form onSubmit={(e)=>formSubmitHandler(e)} className="flex ">
        <Input placeholder="search..." onChange={(e)=>setText(e.target.value)} value={text}/>
        <Button type="submit" disabled={loading}>search</Button>
    </form>
  )
}
export default Search