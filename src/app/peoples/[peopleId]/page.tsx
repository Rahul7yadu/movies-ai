import AiSummary from "@/components/AiSummary"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card"
import Image from "next/image"

const base_image_url = "https://image.tmdb.org/t/p/original"
const page = async ({params}:{params:{peopleId:string}}) => {
  
  const response = await fetch(`${process.env.BASE_URL}person/${params.peopleId}?api_key=${process.env.API_KEY}`)
  const Data:peopleData = await response.json()
  return (
    <Card>
      <CardHeader>
        {Data.name}
      </CardHeader>
    <CardContent className="flex gap-4 flex-col sm:flex-row">
      <Image src={`${base_image_url}${Data.profile_path}`} alt="profile image" width={350} height={450}/>
      <CardDescription >
       <div>
        Gender : {Data.gender===2?"male":"female"}
       </div>
       <div>BirthDate : {Data.birthday}</div>
        known for : {Data.known_for_department}
      </CardDescription>
      <AiSummary Data={Data}/>
    </CardContent>
    <CardFooter>
      <CardDescription>
      {Data.biography}
      </CardDescription>
    </CardFooter>
    
    </Card>
  )
}
export default page


type peopleData  = {
  adult: boolean,
  also_known_as: [ string],
  biography: string,
  birthday: string,
  deathday: string|null,
  gender: number,
  homepage: string,
  id: number,
  imdb_id: string,
  known_for_department: string,
  name: string,
  place_of_birth: string,
  popularity: number,
  profile_path: string
}