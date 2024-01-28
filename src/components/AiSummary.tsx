"use client"
import { Input } from "./ui/input"
import { FormEvent, useState } from "react"
import { Button } from "./ui/button"
import Markdown from "react-markdown"
import { SendHorizonalIcon } from "lucide-react"
import { TvResults, MovieResults } from "@/lib/types"
import { useTheme } from "next-themes"
const AiSummary = ({ Data }: { Data: any }) => {
  const [input, setInput] = useState('')
  const [answer, setAnswer] = useState('')
  const [loading, setLoading] = useState(false)
  const { theme } = useTheme()

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true)
    e.preventDefault()
    try {

      const res = await fetch('/api/', {
        method: 'POST',
        body: JSON.stringify({ question: input, movie_name: Data.title ? Data.title : Data.name, description: Data })
      })
      const ans = await res.json()
      console.log(ans)
      setAnswer(ans.text)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }

  }
  // const htmlText = 
  return (
    <div className={`w-full border-2 border-border p-4 rounded-md `}>
      <h2 className="text-xl font-bold">Ask your Ai friend About <p className="text-lg ">{Data.title ? Data.title : Data.name}</p></h2>
      <form onSubmit={(e) => submitHandler(e)} className="flex ">
        <Input onChange={(e) => setInput(e.target.value)} value={input} className="bg-background/50" />
        <Button type="submit" disabled={loading} size={"lg"}>
          <SendHorizonalIcon />
        </Button>
      </form >
      <div className=" w-full h-full bg-background/95 supports-[backdrop-filter]:bg-background/50 mt-4">
        {!loading && <Markdown className={' overflow-scroll max-h-96'}>{answer}</Markdown>}
        {loading && <Loading />}
      </div>
    </div>
  )
}
export default AiSummary

const Loading = () => {
  return (
    <div className="w-[400px] h-[400px] animate-pulse text-2xl">
      Generating response...
    </div>
  )
}
type response = TvResults | MovieResults
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

type tv = { "adult": "boolean", "backdrop_path": "string", "created_by": [{ "id": "number", "credit_id": "string", "name": "string", "gender": "number", "profile_path": {} }], "episode_run_time": [], "first_air_date": "string", "genres": [{ "id": "number", "name": "string" }], "homepage": "string", "id": "number", "in_production": "boolean", "languages": ["en"], "last_air_date": "string", "last_episode_to_air": { "id": "number", "name": "string", "overview": "string", "vote_average": "number", "vote_count": "number", "air_date": "string", "episode_number": "number", "episode_type": "string", "production_code": "string", "runtime": {}, "season_number": "number", "show_id": "number", "still_path": {} }, "name": "string", "next_episode_to_air": { "id": "number", "name": "string", "overview": "string", "vote_average": "number", "vote_count": "number", "air_date": "string", "episode_number": "number", "episode_type": "string", "production_code": "string", "runtime": {}, "season_number": "number", "show_id": "number", "still_path": {} }, "networks": [{ "id": "number", "logo_path": "string", "name": "string", "origin_country": "string" }], "number_of_episodes": "number", "number_of_seasons": "number", "origin_country": ["ZA"], "original_language": "string", "original_name": "string", "overview": "string", "popularity": "number", "poster_path": "string", "production_companies": [{ "id": "number", "logo_path": {}, "name": "string", "origin_country": "string" }], "production_countries": [{ "iso_3166_1": "string", "name": "string" }], "seasons": [{ "air_date": "string", "episode_count": "number", "id": "number", "name": "string", "overview": "string", "poster_path": {}, "season_number": "number", "vote_average": "number" }], "spoken_languages": [{ "english_name": "string", "iso_639_1": "string", "name": "string" }], "status": "string", "tagline": "string", "type": "string", "vote_average": "number", "vote_count": "number" }