import React, { useEffect, useState } from 'react'
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment, FaShareAlt } from "react-icons/fa";
import { data } from 'react-router-dom';

const PostPage = () => {

const [posts,setPosts]=useState([]);

useEffect(()=>{
  fetch('http://localhost:3000/posts')
  .then((data)=>data.json())
  .then((data=>setPosts(data)))
  .catch(err=>console.log(err));
})

  return (
    <div className='max-w-md mx-auto space-y-6'>
      {posts.length>0?(
        <div>
          
      {posts.map((post) => (
        <div key={post.id} className='bg-white shadow-md rounded-lg overflow-hidden'>
          <div className='flex py-4'>
            <img className='w-10 h-10 rounded-full' src={post.user.profile_pic} alt={post.user.username} />
            <div className='ml-4'>
              <p className='font-semibold'>{post.user.username}</p>
              <p className='text-gray-700 text-xs'>{post.timestamp}</p>
            </div>
          </div>
          <img src={post.image} alt="" className='w-full' />
          <div className='p-3'>
            <p>
              <span className='font-semibold'>{post.user.username}</span>{post.caption}
            </p>
          </div>
          <div className='flex gap-6'>
            <p> <span className='text-2xl flex justify-center'><AiOutlineLike /></span>
              {post.likes} Likes
            </p>
            <p><span className='text-2xl flex justify-center'><FaRegComment /></span>
              {post.comments.length} Comments</p>
            <p><span className='text-2xl flex justify-center'><FaShareAlt /></span>
              {post.shares} Shares</p>
          </div>
        </div>
      ))}
        </div>
      ) :(
        <div>
          Loading....
        </div>
      ) }
    </div>
  )
}

export default PostPage;