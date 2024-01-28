import Link from "next/link"
import { ModeToggle } from "./theme-toggle"
import Image from "next/image"
import Search from "./Search"
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex w-full justify-between p-4  min-h-14 ">
        <div className="flex justify-between gap-4 w-1/3 ">
          <Link href="/" className=" flex gap-3">
             <Image src='/logo.jpg' alt="logo" width={40} height={40} className="rounded-lg"/>
              <div className="text-lg md:text-2xl hidden md:block">
               movies.Ai
              </div>
          </Link>
          
          <NavLink/>
         
        </div>
        
        <Search/>

          <ModeToggle />
      </div>
    </nav>
  )
}
export default Navbar

const NavLink = ()=>{
  return (
              <div className="md:flex text-lg gap-4 hidden ">

              <Link href='/movies'>
                movies
              </Link>
              <Link href='/tv'>
                Tv
              </Link>
              <Link href='/peoples'>
                People
              </Link>
              </div>
  )
}