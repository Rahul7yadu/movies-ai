"use client"
import Link from "next/link"
import { Button } from "./ui/button"

 const  NavLink = ({pathName}:{pathName:string})=>{
    return (
                <div className="flex flex-col gap-4">
  
                <Link href='/movies' >
                    <Button className={pathName.includes("/movies")?"text-red-500":""} variant={'ghost'}>
                  movies
                    </Button>
                </Link>
                <Link href='/tv' >
                    <Button className={pathName.includes("/tv")?"text-red-500":""} variant={'ghost'}>
                 Tv 
                    </Button>
                </Link>
                <Link href='/peoples' >
                    <Button variant={'ghost'} className={pathName.includes("/peoples")?"text-red-500":""}>
                  People
                    </Button>
                </Link>
                </div>
    )
  }

export default NavLink