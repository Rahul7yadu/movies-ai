import Image from "next/image"
import AiSummary from "@/components/AiSummary"
import { Card, CardContent, CardFooter, CardHeader ,CardDescription,CardTitle} from "@/components/ui/card"
import {  LinkIcon } from "lucide-react"
import Link from "next/link"
const base_image_url = "https://image.tmdb.org/t/p/original"

const MovieInfo = async ({ params }: { params: { tvId: string } }) => {

  const fetchResponse = await fetch(`https://api.themoviedb.org/3/tv/${params.tvId}?api_key=${process.env.API_KEY}`)
  const Data:tv= await fetchResponse.json()
  
  
  return (
    <div className="flex flex-col">
      <div className="flex w-full flex-col sm:flex-row">
        <Image src={`${base_image_url}/${Data.backdrop_path}`}
          alt="backdrop image"
         width={1000} height={720}  className=" -z-10 " />
      <AiSummary Data={Data} />
      </div>
      <MovieDataSection Data={Data} />
    </div>
  )
}
export default MovieInfo


const MovieDataSection = ({ Data }: { Data: tv }) => {
  return (<section className="flex justify-between flex-wrap bg-background opacity-90 w-full">
    <Card className="bg-foreground text-background w-full">
      <CardHeader>
        <CardTitle>
        {Data.original_name}
        </CardTitle>
        <CardDescription>
        {Data.tagline}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {Data.overview}
      </CardContent>
      <CardFooter className="flex gap-4 flex-wrap">
        <Link href={Data.homepage}>
          <LinkIcon />
        </Link>
      
         <div className="flex gap-2 ">
        Genre : {Data.genres.map((genre)=><div key={genre.id}><p >{genre.name}</p></div>)}
        </div>
        <div>
          popularity : {Data.popularity}
        </div>
        Total Seasons: {Data.seasons.length}
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

  episode_run_time: Array<number>
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


type tv = {"adult":"boolean","backdrop_path":"string","created_by":[{"id":"number","credit_id":"string","name":"string","gender":"number","profile_path":{}}],"episode_run_time":[],"first_air_date":"string","genres":[{"id":"number","name":"string"}],"homepage":"string","id":"number","in_production":"boolean","languages":["en"],"last_air_date":"string","last_episode_to_air":{"id":"number","name":"string","overview":"string","vote_average":"number","vote_count":"number","air_date":"string","episode_number":"number","episode_type":"string","production_code":"string","runtime":{},"season_number":"number","show_id":"number","still_path":{}},"name":"string","next_episode_to_air":{"id":"number","name":"string","overview":"string","vote_average":"number","vote_count":"number","air_date":"string","episode_number":"number","episode_type":"string","production_code":"string","runtime":{},"season_number":"number","show_id":"number","still_path":{}},"networks":[{"id":"number","logo_path":"string","name":"string","origin_country":"string"}],"number_of_episodes":"number","number_of_seasons":"number","origin_country":["ZA"],"original_language":"string","original_name":"string","overview":"string","popularity":"number","poster_path":"string","production_companies":[{"id":"number","logo_path":{},"name":"string","origin_country":"string"}],"production_countries":[{"iso_3166_1":"string","name":"string"}],"seasons":[{"air_date":"string","episode_count":"number","id":"number","name":"string","overview":"string","poster_path":{},"season_number":"number","vote_average":"number"}],"spoken_languages":[{"english_name":"string","iso_639_1":"string","name":"string"}],"status":"string","tagline":"string","type":"string","vote_average":"number","vote_count":"number"}