import React from 'react'
import Link from 'next/dist/client/link'

const PostCard = ({ post }) => {
  return (
    <div className='shadow-lg rounded-lg p-0 lg:p-7 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
        <img src={post.featuredImage.url} alt="" className="object-top absolute h-80 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
      </div>
        <h1 className="text-3xl font-semibold cursor-pointer hover:text-orange-400 text-center mb-8 transition duration-300">{post.title}</h1>
        <p>{post.excerpt}</p>
        
    </div>
  )
}

export default PostCard