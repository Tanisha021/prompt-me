'use client';
import {useState} from 'react'
import {useSession} from 'next-auth/react' //allow us to know which user is currently logged in
import { useRouter } from 'next/navigation';
import Form from '@components/Form';
const EditPrompt = () => {
    const router = useRouter();
    const {data:session} = useSession();

    const [submitting,setSubmitting] = useState(false);
    const [post,setPost]=useState({
        prompt:' ',
        tag:''
    });

    

    const CreatePrompt = async(e)=>{
        e.preventDefault();
        setSubmitting(true)
        try{
            const respose = await fetch('/api/prompt/new',{
                method:'POST',
                body:JSON.stringify({
                    prompt:post.prompt,
                    userId: session?.user.id,
                    tag:post.tag
                })
            })
            
            if(respose.ok){
                router.push('/')
            }
        }catch(error){
            console.log(error);
        }finally{
            setSubmitting(false)
        }
    }

  return (
    <Form
    type="Create"
    post={post}
    setPost={setPost}
    submitting={submitting}
    handleSubmit={CreatePrompt}
    
    />
  )
}

export default EditPrompt;