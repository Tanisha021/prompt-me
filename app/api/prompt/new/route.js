import { connectToDB } from "@utils/database"
import Prompt from "@models/prompt";

//my api endpoint
export const POST =async(req) =>{
    const {userId,prompt,tag} = await req.json() //passes thorugh post req from create-post/page.jsx

    try{
        await connectToDB();
        const newPrompt = new Prompt({
            creator:userId,
            prompt,
            tag
        })
        await newPrompt.save()
        return new Response(JSON.stringify(newPrompt),{status:201})
    }catch(error){
        return new Response("Failed to create a new prompt",{status:500}) //server error
    }
}