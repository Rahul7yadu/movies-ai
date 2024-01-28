import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "./ui/card"
import { MovieResults, TvResults,PeopleResults } from "@/lib/types"
import "./style.css"
import Link from "next/link"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card"
const base_image_url = "https://image.tmdb.org/t/p/w500/"
const MCard = ({ Data }: { Data: MovieResults }) => {
    return (
        <Link href={`/movies/${Data.id}`} >
        <Card className="cursor-pointer card w-60 h-96 border-2 border-border rounded-md relative" >
           <Image src = {`${base_image_url}/${Data.poster_path}`} alt = "movies poster" fill className="-z-10"/>
           <div className="absolute bottom-0 w-full">
            <div className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                

            {Data.title}

                
            </div>
            </div> 
        </Card>
        </Link>
    )
}
export default MCard


export const TCard = async ({ Data }: { Data: TvResults }) => {


    return (
    <Link href={`/tv/${Data.id}`}>
    <Card className="cursor-pointer card w-60 h-96 border-2 border-border rounded-md relative" >
            <Image
                src={`${base_image_url}/${Data.poster_path}`}
                alt="movie-backdrop-image"
                fill
                
            />
           <div className="absolute bottom-0 w-full">
            <div className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                

            {Data.name}

                
            </div>
            </div> 
    </Card>
    </Link>
)
}

export const PCard = ({Data}:{Data:PeopleResults})=>{
 
    
    return (
        <Link href={`/peoples/${Data.id}`}>
        <Card className="cursor-pointer card w-60 h-80 border-2 border-border relative">
           <Image src={`${base_image_url}/${Data.profile_path}`} alt="profile image" fill className="-z-10"/>
        <div className="bottom-0 absolute w-full">
           <div className=" text-2xl bg-slate-50 opacity-80 text-black w-full">
            {Data.name}
            
           </div>
        </div>
        </Card>
        </Link>
    )
}