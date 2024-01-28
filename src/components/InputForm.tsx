"use client"
import { useState ,FormEvent} from "react";


const InputForm = () => {

    const [text,setText] = useState('')
    const [output,setOutput] = useState(['initial text'])
    const [loading,setLoading] = useState(false)
    const formHandler = async (e:FormEvent<HTMLFormElement>)=>{
        setLoading(true);
            e.preventDefault();
            const res = await fetch('/api',{
                method:'POST',
                body:JSON.stringify({
                    text
                })
            })
            setLoading(false)
            console.log(res)
           const data = await res.json()
           console.log(data)
            setOutput(prev=>[...prev,data.text])
        }


  return (
    <div className="w-full bg-slate-300 h-screen flex flex-col justify-center items-center">
    <div className="w-full flex-1 text-center">
        {output.map((text)=><p>{text}</p>)}
    </div>
    <form onSubmit={(e)=>formHandler(e)} className="flex-1">
        <input onChange={(e)=>setText(e.target.value)}/>
        <button type="submit" disabled={loading} className="bg-slate-700 active:scale-75 hover:scale-105 disabled:opacity-70 disabled:bg-slate-50">submit</button>
    </form >
    </div>
  )
}
export default InputForm