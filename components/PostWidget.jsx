import React, {useEffect, useState} from 'react'
import { getCategoryPosts } from '../services';

const PostWidget = ({category}) => {
  const [posts, setPosts] = useState([])
  
  useEffect(async () => {
   const data = await getCategoryPosts(category)
   setPosts(data)
  }, [category])
  return (
    <div className='flex flex-row w-full h-fit'>
      {posts.map( post => (

        <div className='basis-1/3 p-4 flex flex-row'>
          <span><img src={post.featuredImage.url} alt="" className='h-28 w-28 object-fill m-2'/></span>
          <span className='px-3 mt-3 text-center w-full'>
            <h2>{post.title}</h2>
          </span>
        </div>
      ))}
    </div>
  )
}

export default PostWidget