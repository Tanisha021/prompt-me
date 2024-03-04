import mongoose,{Schema,model,models} from "mongoose";

const PromptSchema = new Schema({
    creator:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User' //one user will be able to create multiple prompts
    },
    prompt:{
        type:String,
        required:[true,'Prompt is required']
    },
    tag:{
        type:String,
        required:[true,'Tag is required']
    },
});

const Prompt = models.Prompt || model('Prompt',PromptSchema)

export default Prompt