"use client"
import React from 'react'
import {useState,useEffect} from 'react'
import PromptCard from './PromptCard'

const PromptCardList=({data,handleTagClick})=>{
  return(
    <div className="mt-16 prompt_layout"> 
        {/* will map all the data by fetching from feed */}
        {data.map((post)=>(
          <PromptCard
            key={post._id}
            post={post}
            handleTagClick={handleTagClick}
          />
        ))}
    </div>
  )
}
const Feed = () => {
  const [searchText,setSearchText] = useState('');
  const [posts,setPosts]=useState([])
  const handleSearchChange=(e)=>{
    
  }
  // make get req to our own next.js api
  useEffect(()=>{
    const fetchPost = async()=>{
      const response = await fetch('/api/prompts');
      const data = await response.json();
      setPosts(data)
    }
    fetchPost();
  },[])

  return (
    <section>
      <form className='relative w-full flex-center mt-4'>
          <input type='text' placeholder='Search for tag or username' value={searchText} onChange={handleSearchChange} required className='search_input peer'>
          </input>
      </form>

      <PromptCardList 
      data={posts}
      handleTagClick={()=>{
      }}
    />
    </section>

    
  )
}

export default Feed