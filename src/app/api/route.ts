import { NextResponse ,NextRequest} from "next/server";
import { GoogleGenerativeAI, } from "@google/generative-ai";

export async function POST(Request:NextRequest){

const data  = await Request.json();
console.log(data)
const description =  JSON.stringify(data.description)
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);
// ...
const model = genAI.getGenerativeModel({ model: "gemini-pro"});




const initialPrompt = `Generate a response about the movie or TV show based on the available information. If the large language model doesn't have information about the specific movie or TV show, provide a response based on the provided description. Include relevant details such as plot, characters, and any notable aspects. If the information is not available, you may creatively generate a response using the given description.

Movie/TV Show Title: ${data.movie_name}
Description: ${description}

Question: ${data.question}
`
try {
const chat = model.generateContent(initialPrompt)
const text = (await chat).response.text()

return NextResponse.json({text})
} catch (error) {
    console.log()
return NextResponse.json({text:'an error occured'})

}

  
}
