import React from 'react'
import Link from 'next/dist/client/link'
import moment from 'moment'

const PostCard = ({ post }) => {
  return (
    <div className='shadow-lg rounded-lg flex flex-col lg:flex-row-reverse p-4 lg:p-11 pb-12 mb-8'>
      <div className='relative overflow-hidden basis-1/2 shadow-md pb-80 mb-6'>
        <img src={post.featuredImage.url} alt="" className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg" />
      </div>
      <div className='basis-1/2' >
        <h1 className="text-3xl font-semibold cursor-pointer hover:text-orange-400 text-center mb-8 transition duration-300">
          <Link href={`/posts/${post.slug}`}>
            {post.title}
          </Link>
        </h1>
        <div className="flex flex-row text-center justify-center mb-4">
          <span className='flex flex-row'>
            <img src={post.author.photo.url} height="30px" width="30px" alt="" className="rounded-full" />
            <p className='inline ml-2 text-gray-400'>{post.author.name}</p>
          </span>
          <span className="flex flex-row ml-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className='text-gray-400'>{moment(post.createdAt).format('MMMM DD, YYYY') }</p>
          </span>
        </div>
        <p className='text-center px-4 lg:px-14 mb-6'>{post.excerpt}</p>
        <div className="text-center">
          <Link href={`/posts/${post.slug}`}>
            <span className='trasition duration-200 transform hover:text-orange-400 font-bold cursor-pointer hover:pt-4'>Continue Reading...</span>
          </Link>
        </div>
      </div>
        
    </div>
  )
}

export default PostCard