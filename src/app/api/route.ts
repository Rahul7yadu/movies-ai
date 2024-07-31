import { NextResponse ,NextRequest} from "next/server";
import { GoogleGenerativeAI, } from "@google/generative-ai";

export async function POST(Request:NextRequest,Response:NextResponse){

const data  = await Request.json();
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
    const result = await model.generateContentStream(initialPrompt)
    let text2 = "";
    for await (const chunks of result.stream){
        text2+=chunks.text()
        NextResponse.json({text:text2})
               
    }
const chat = model.generateContent(initialPrompt)
const text = (await chat).response.text()
const response = new NextResponse()
response.text()
return NextResponse.json({text})
} catch (error) {
    console.log(error)
return NextResponse.json({text:'an error occured'})

}

  
}
