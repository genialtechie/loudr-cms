import React from 'react'

const PostCard = ({ post }) => {
  return (
    <div className='mb-8'>
        {post.title}
        {post.excerpt}
    </div>
  )
}

export default PostCard