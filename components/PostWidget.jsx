import React, {useEffect, useState} from 'react'
import { getCategoryPosts } from '../services';

const PostWidget = ({category}) => {
  const [posts, setPosts] = useState([])
  
  useEffect(async () => {
   const data = await getCategoryPosts(category)
   setPosts(data)
  }, [category])
  return (
    <div className='shadow-lg rounded-lg flex flex-row w-full h-fit mb-8'>
      <span className='text-sm' >{category.categories.toUpperCase()}</span>
      {posts.map( post => (
        <div className='basis-1/3 p-4 flex flex-row' key={post.slug} >
          <span className='my-auto' ><img src={post.featuredImage.url} alt="" className='h-24 w-28 object-cover p-2'/></span>
          <span className='px-3 mt-3 text-left w-full'>
            <h2 className='text-xl font-bold'>{post.title}</h2>
            <span className='text-sm' >{post.excerpt.split(' ').slice(0, 13).join(' ').concat('...')}</span>
          </span>
        </div>
      ))}
    </div>
  )
}

export default PostWidget