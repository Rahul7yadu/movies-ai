import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import Link from "next/link"
import { getCast } from "@/actions/helper"
const base_image_url = "https://image.tmdb.org/t/p/w500"
type CastProps = {
    type: "movie" | "tv",
    id: string,
}
const apiKey = process.env.API_KEY
const Cast = async ({ type, id }: CastProps) => {
    
    const data = await getCast({type,id})

    return (
<div>
<h2 className="text-xl text-white text-center mb-2 border-b-2">Cast</h2>
        <div className="flex overflow-x-scroll relative">
            {data.cast.map((c: any) => {
                return (
                    <Card key={c.id} className="w-60 h-40 mr-4 ">
                        <CardContent>
                          {c.profile_path ? 
                           <Image src={`${base_image_url}/${c.profile_path}`}
                            width={300} height={300}  alt="profile image0"  />
                            :<Image src={'/not-found.jpg'} width={300} height={300} alt="not found"/>}
                        </CardContent>
                        <CardHeader>
                            <Link href={`/peoples/${c.id}`}>
                            <CardTitle>
                        {c.name}
                            </CardTitle>
                            </Link>
                        </CardHeader>
                    </Card>

                )})
            }
            
        </div>
</div>
    )
}
export default Cast