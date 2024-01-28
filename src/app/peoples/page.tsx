import { PCard } from "@/components/Card";
import { PeopleData } from "@/lib/types";
import Sidebar from "@/components/Sidebar";

const baseUrl = process.env.BASE_URL+'person/popular'
const api_key = process.env.API_KEY
const page = async () => {
    const response = await fetch(`${baseUrl}?api_key=${api_key}`)
    const data:PeopleData = await response.json();
    console.log(data)
  return (
    <div className="flex ">
      <Sidebar/>
    <div className="grid justify-items-center items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 p-4">{
        data.results.map((person)=><PCard Data={person} key={person.id}/>)
    }</div>
    </div>
  )
}
export default page


type People = {"page":"number","results":[{"adult":"boolean","gender":"number","id":"number","known_for_department":"string","name":"string","original_name":"string","popularity":"number","profile_path":"string","known_for":[string]}],"total_pages":"number","total_results":"number"}
