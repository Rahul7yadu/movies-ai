import { MovieData } from "@/lib/types";
const apiKey = process.env.API_KEY
type Data = {
    Response: MovieData,
    error: Error | null,
}

type TmdbError = {
    success: boolean,
    status_code: number,
    status_message: string,
}

export const getMoviesByQueryAndPage = async (query: string, page: number) => {

    try {
        const response = await fetch(`${process.env.BASE_URL}/movie/${query}?api_key=${process.env.API_KEY}&page=${page}`)
        if (!response.ok) {
            const errors: TmdbError = await response.json()
            throw new Error(errors.status_message)
        }
        const data: MovieData = await response.json();
        return data;
    } catch (error) {
        throw new Error(error as string)
}
}


export const getCast = async({type,id}:{type:"movie"|"tv",id:string})=>{
 const url = type === 'movie' ? 
 `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}` :
  `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${apiKey}`

   const response = await  fetch(url)

   return await response.json()
   
}