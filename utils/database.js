import mongoose from "mongoose";
let isConnected=false ; //track connection

export const connectToDB=async()=>{
    mongoose.set('strictQuery',true);
    if(isConnected){
        console.log("is Connected");
        return;
    }
    
    try{
        await mongoose.connect(process.env.MONGODB_URI,{dbName:"share_prompt",useNewUrlParser:true,UseUnifiedToplogy:true})
        isConnected=true;
        console.log("is Connected");
    }catch(error){
        console.log("error incoming");    
    }
}
// Gx66dZwdSZIDqFoE