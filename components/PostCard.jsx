import React from 'react'
import Link from 'next/dist/client/link'
import moment from 'moment'

const PostCard = ({ post }) => {
  return (
    <div className="mb-8 flex flex-col rounded-lg p-4 pb-12 shadow-lg lg:flex-row-reverse lg:p-11">
      <div className="relative mb-6 basis-1/2 overflow-hidden pb-80 shadow-md">
        <img
          src={post.featuredImage.url}
          alt=""
          className="absolute h-80 w-full rounded-t-lg object-cover object-top shadow-lg lg:rounded-lg"
        />
      </div>
      <div className="m-3 basis-1/2">
        <h1 className="mb-8 cursor-pointer text-center text-3xl font-semibold transition duration-300 hover:text-orange-400">
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h1>
        <div className=" mb-4 flex flex-row justify-center text-center">
          <span className="flex flex-row">
            <img
              src={post.author.photo.url}
              height="30px"
              width="30px"
              alt=""
              className="rounded-full"
            />
            <p className="ml-2 inline text-gray-400">{post.author.name}</p>
          </span>
          <span className="ml-6 flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 inline h-6 w-6 text-orange-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-gray-400">
              {moment(post.createdAt).format('MMMM DD, YYYY')}
            </p>
          </span>
        </div>
        <p className="mb-6 px-4 text-center lg:px-14">{post.excerpt}</p>
        <div className="text-center">
          <Link href={`/post/${post.slug}`}>
            <span className="trasition transform cursor-pointer font-bold duration-200 hover:pt-4 hover:text-orange-400">
              Continue Reading...
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PostCard
