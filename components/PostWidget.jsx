import React, { useEffect, useState } from 'react'
import { getCategoryPosts } from '../services'
import Link from 'next/dist/client/link'

const PostWidget = ({ category }) => {
  const [posts, setPosts] = useState([])

  useEffect(async () => {
    const data = await getCategoryPosts(category)
    setPosts(data)
  }, [category])
  return (
    <div className="mb-8 h-fit w-full rounded-lg shadow-lg">
      <span className="h-fit pl-3 text-xs uppercase text-slate-500">
        {category}
      </span>
      <div className="flex flex-col lg:flex-row">
        {posts.map((post) => (
          <div
            className="flex flex-row px-4 pb-4 pt-2 lg:basis-1/3"
            key={post.slug}
          >
            <span className="my-auto">
              <img
                src={post.featuredImage.url}
                alt=""
                className="h-24 w-28 object-cover p-2"
              />
            </span>
            <span className="mt-3 w-full px-3 text-left">
              <h2 className="text-xl font-bold">
                <Link href={`/post/${post.slug}`}>{post.title}</Link>
              </h2>
              <span className="text-sm">
                {post.excerpt.split(' ').slice(0, 13).join(' ').concat('...')}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostWidget
