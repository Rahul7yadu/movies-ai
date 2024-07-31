"use client"
import { useEffect, useState } from "react"
type CastProps = {
    type:"movie"|"tv",
    id:string,
}
const apiKey = process.env.NEXT_PUBLIC_API_KEY
const CastClient = ({type,id}:CastProps) => {
    const url = type==='movie'?`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`:`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${apiKey}`

const [data,setData] = useState();

const fetchData = async()=>{
    const response = await fetch(url)
    const data = await response.json();
    return data;
}

console.log(data)

    useEffect(()=>{
        setTimeout(()=>
            fetchData().then(data=>setData(data)),4000)
    },[])
  return (
    <div>{JSON.stringify(data)}</div>
  )
}
export default CastClient