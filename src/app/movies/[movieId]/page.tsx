import Image from "next/image"
import AiSummary from "@/components/AiSummary"
import { Card, CardContent, CardFooter, CardHeader ,CardDescription,CardTitle} from "@/components/ui/card"
import { LinkIcon } from "lucide-react"
import dynamic from "next/dynamic"
import Link from "next/link"
import {formatCurrency} from "@/lib/helper"
import { Separator } from "@/components/ui/separator"
import { Suspense } from "react"
import Cast from "@/components/Cast"
const base_image_url = "https://image.tmdb.org/t/p/original"

const MovieInfo = async ({ params }: { params: { movieId: string } }) => {

  const fetchResponse = await fetch(`https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${process.env.API_KEY}`)
  const Data: Response = await fetchResponse.json()
  return (
    <div className="flex flex-col">
      <div className="flex w-full lg:flex-row flex-col justify-center relative gap-4">
        <Image src={`${base_image_url}/${Data.backdrop_path}`}
          alt="backdrop image"
          width={1000} height={720} className=" -z-10 " />
      <AiSummary Data={Data} />
      </div>
      <MovieDataSection Data={Data} />
      <Suspense fallback={<div className="text-xl border-border border-4">"....Loading"</div>}>
        <Cast id={Data.id.toString()} type="movie"/>
      </Suspense>
    </div>
  )
}
export default MovieInfo


const MovieDataSection = ({ Data }: { Data: Response }) => {
  return (<section className="flex justify-between flex-wrap bg-background opacity-90 w-full">
    <Card className="bg-foreground text-background w-full">
      <CardHeader>
        <CardTitle>
        {Data.original_title}
        </CardTitle>
        <CardDescription>
        {Data.tagline}
        </CardDescription>
      </CardHeader>
      <CardContent>
      <Image src={`${base_image_url}${Data.poster_path}`} alt="poster" width="300" height="600" />
        {Data.overview}
     <Separator className="my-2 h-2 w-full"/> 
      </CardContent>
      <CardFooter className="flex gap-4 flex-wrap">
        <Link href={Data.homepage}>
        <LinkIcon color="blue"/>
        </Link>
        <div>
          Average Vote : {Data.vote_average}
        </div>
        <Separator orientation="vertical" className="w-1 h-4"/>
        <div>
        Total_Budget :  {Data.budget} 
        </div>
        <Separator orientation="vertical" className="w-1 h-4"/>
         <div className="flex gap-2 ">
        Genre : {Data.genres.map((genre)=><div key={genre.id}><p >{genre.name}</p></div>)}
        </div>
        <Separator orientation="vertical" className="w-1 h-4"/>
        <div>
          Release Date : {Data.release_date}
        </div>
        <Separator orientation="vertical" className="w-1 h-4"/>
        <div>
          popularity : {Data.popularity}
        </div>
        <Separator orientation="vertical" className="w-1 h-4"/>
        <div>
          Total Revenue : {formatCurrency(Data.revenue)} 
        </div>
        <div>

        </div>
      </CardFooter>
    </Card>
  </section>)
}

const MovieBanner = ({ Data }: { Data: Response }) => {

  return (
    <div className="border-2 border-border max-w-fit w-1/3 h-32">
      <Image src={`${base_image_url}${Data.poster_path}`} alt="poster" width="300" height="600" />
    </div>
  )
}

type Response = {
  adult: boolean,
  backdrop_path: string
  belongs_to_collection: string
  budget: number
  genres: Array<{ id: number, name: string }>

  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: Array<{ id: number, logo_path: string, name: string, origin_country: string }>

  production_countries: Array<{ iso_3166_1: string, name: string }>

  release_date: string
  revenue: number
  runtime: number
  spoken_languages: Array<{ english_name: string, iso_639_1: string, name: string }>

  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}