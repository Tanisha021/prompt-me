import { Schema,model,models } from "mongoose";

const UserSchema= new Schema({
    email:{
        type:String,
        unique:[true,"Email already exist"],
        required:[true,"Email is required"]
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
      },    
    image:{
        type:String,
    }

});

// would do this for always on always running backend server
// const User = model("User,UserSchema");
// export default User;

//The 'Models' object is provided by mongoose library and stores all registered models
//If a model named "USer" alreaddy exists in "models" object,it assigns that existing model to the "user variable"
//This prevernts redefigning the model and ensures that the existing model is reused

//if a model named "User" does not exist in the "models" object ,the "model" funcition from mONGOOSE IS CALLeed to create new model
//The newly created model is then assigned to "user" Variable

const User =models.User || model("User",UserSchema);
export default User;
