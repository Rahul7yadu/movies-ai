import AiSummary from "@/components/AiSummary"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const base_image_url = "https://image.tmdb.org/t/p/w500"
const page = async ({params}:{params:{peopleId:string}}) => {
  
  const response = await fetch(`${process.env.BASE_URL}person/${params.peopleId}?api_key=${process.env.API_KEY}`)
  if(!response.ok){
    throw new Error(response.statusText)
  }
  const Data:peopleData = await response.json()
  return (
    <Card>
      <CardHeader>
        <CardTitle>
        {Data.name}
        </CardTitle>
      </CardHeader>
    <CardContent className="flex gap-4 flex-col sm:flex-row">
      <Image src={`${base_image_url}${Data.profile_path}`} alt="profile image" width={350} height={450}/>
      <AiSummary Data={Data}/>
    </CardContent>
    <CardFooter className="flex flex-col ">
      <CardDescription className=" flex  justify-start gap-6">
      <div>
      Gender : {Data.gender===2?"male":"female"}
      </div>
      <div>
      BirthDate : {Data.birthday}
      </div>
      <div>
      known for : {Data.known_for_department}
      </div>
      </CardDescription>
      {Data.biography}
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