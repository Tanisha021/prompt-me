import { connectToDB } from "@utils/database"
import Prompt from "@models/prompt";
// this route was called by profile component
export const GET = async(request,{params})=>{ //this params get populates when we pass dymanic variable to url--which is id
    try{
        await connectToDB();
        const prompts = await Prompt.find({
            creator:params.id
        }).populate('creator');
        return new Response(JSON.stringify(prompts),{status:200})
    }catch(error){
        return new Response("Failed to fetch prompts",{status:500})
    }
}