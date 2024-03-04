// set up provider just as google authentication
//nextjs api routes backend endpoints 
import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import User from "@models/user"
import {connectToDB} from "@utils/database";

// console.log({
//     clientId:process.env.GOOGLE_ID,
//             clientSecret:process.env.GOOGLE_CLIENT_SECRET,
// })
const handlers = NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        })
    ],

    // callbacks:{
        //async session function 
    async session({session}){
        //get data every single time to running and existing session
    const sessionUser=await User.findOne({
    email:session.user.email
    })
    session.user.id=sessionUser._id.toString();
    return session;
    },


    //async signInfunction 
    async signIn({profile}){
    try{
    //call connectToDB function
        await connectToDB();

    //check if user exist
    const userExists=await User.findOne({
    email:profile.email
    })

    //if not create new user
    if(!userExists){
    await User.create({
            email:profile.email,
            userName:profile.name.replace(" ","").toLowerCase(),
            image:profile.picture
        })
    }
        return true;
    }catch(error){
        console.log(error);
        return false;
    }

        //Every next js route is serverless route means its a lambda func which open up only when it gets called
        //so everytime it gets called it spin up connection to database ---great bcoz we dont have to keep out server running constatly..but 
        //we do have to make connection to database... so we will go to utils
        //serverless->lamda
    }
    // }

})

export {handlers as GET,handlers as POST};