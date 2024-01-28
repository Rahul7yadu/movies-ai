"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
const LandingPage = () => {
    const { theme } = useTheme()
    return (
        <div className=" flex flex-col items-center  ">
            <Intro />
            <div className="flex flex-col sm:flex-row gap-6 mt-10">

                <Link href={'/movies'}>
                    <Button className=" p-10 opacity-90 text-lg bg-green-800" >
                        Movies
                    </Button>
                </Link>
                <Link href='/tv'>
                    <Button className=" p-10 opacity-90 text-lg bg-red-800">
                        Tv shows
                    </Button>
                </Link>
                <Link href='/peoples'>
                    <Button className=" p-10 opacity-90 text-lg bg-blue-800">
                       Peoples 
                    </Button>
                </Link>
            </div>
            <Image src='/cinema.jpg' alt="background Image" fill className={`dark:opacity-30 -z-10 `}  />
        </div>
    )
}
export default LandingPage


const Intro = () => {

    return (
        <div className="sm:w-1/2 w-full p-2 text-center text-white dark:text-white">
            <div className="text-2xl text-foreground font-bold text-white dark:text-white">
                Welcome to Movies.Ai - Your Ultimate Entertainment Companion!

            </div >
            <div>

       Discover Movies , Televesion Shows , Peoples 
       <div className="text-2xl animate-pulse">Chat with Ai </div>
       🎬🤖✨
            </div>
        </div>
    )
}