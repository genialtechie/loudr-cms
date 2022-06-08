import React, {useEffect, useState} from 'react'
import { getCategoryPosts } from '../services';

const PostWidget = ({category}) => {
  const [posts, setPosts] = useState([])
  
  useEffect(async () => {
   const data = await getCategoryPosts(category)
   setPosts(data)
  }, [category])
  return (
    <div className='shadow-lg rounded-lg w-full h-fit mb-8'>
      <span className='text-xs text-slate-500 h-fit pl-3' >{category.categories.toUpperCase()}</span>
      <div className='flex flex-col lg:flex-row'>
        {posts.map( post => (
          <div className='lg:basis-1/3 pb-4 pt-2 px-4 flex flex-row' key={post.slug} >
            <span className='my-auto' ><img src={post.featuredImage.url} alt="" className='h-24 w-28 object-cover p-2'/></span>
            <span className='px-3 mt-3 text-left w-full'>
              <h2 className='text-xl font-bold'>{post.title}</h2>
              <span className='text-sm' >{post.excerpt.split(' ').slice(0, 13).join(' ').concat('...')}</span>
            </span>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default PostWidget