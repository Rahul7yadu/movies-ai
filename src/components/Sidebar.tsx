"use client"

import { useRouter, usePathname } from "next/navigation"
import { Button } from "./ui/button"
import NavLink from "./NavLinks"
import {
  Sheet,
  SheetContent,
 
  SheetTrigger,
} from "@/components/ui/sheet"
import { ReactNode, useState } from "react"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import { SidebarCloseIcon } from "lucide-react"

const Sidebar = () => {
  const router = useRouter()
  const pathname = usePathname()


const TvFilters = (
    <Collapsible>
      <div className="flex flex-col gap-4">
        <Button onClick={() => router.push(pathname + '?' + 'query=airing_today')}>Airing Today</Button>
        <Button onClick={() => router.push(pathname + '?' + 'query=on_the_air')}>on the Air</Button>
        <Button onClick={() => router.push(pathname + '?' + 'query=popular')}>popular</Button>
        <Button onClick={() => router.push(pathname + '?' + 'query=top_rated')}>top rated</Button>
      </div>
</Collapsible>)

  const MovieFilters = (
    <Collapsible>
      <div className="flex flex-col gap-4 bg-transparent">

        <Button onClick={() => router.push(pathname + '?' + 'query=now_playing')}>now playing</Button>
        <Button onClick={() => router.push(pathname + '?' + 'query=top_rated')}>Top Rated</Button>
        <Button onClick={() => router.push(pathname + '?' + 'query=popular')}>popular</Button>
        <Button onClick={() => router.push(pathname + '?' + 'query=upcoming')}>upcomming</Button>
      </div>
  </Collapsible>
  )



  return (
    <div className="sticky top-16 h-screen w-20 ">
      <SideNav pathname={pathname} />
      {pathname.includes("/tv")&&TvFilters }
      {pathname.includes("/movies")&&MovieFilters}
    </div>
  )

}
export default Sidebar


const Collapsible = ({ children }: { children: ReactNode }) => {
const [open,setOpen] = useState(false)
  return (

    <Sheet onOpenChange={(open)=>setOpen(open)}>
      <SheetTrigger className="m-6 p-2">
        {!open?<HamburgerMenuIcon className="w-5 h-5 text-center" />:<SidebarCloseIcon className="w-10 h-10" />}
        </SheetTrigger>
      <SheetContent className="backdrop-blur-sm bg-background/50" onClick={()=>setOpen(open=>!open)}>
        {children}
      </SheetContent>
    </Sheet>
  )
}

const SideNav = ({ pathname }: { pathname: string }) => {
  return (

    <div className="sm:hidden">
      <div className="w-full bg-slate-50/30">
        <NavLink pathName={pathname} />
      </div>
    </div>
  )
}