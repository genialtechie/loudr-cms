import React from 'react'
import moment from 'moment'
import parse from 'html-react-parser'

const PostDetail = ({ post }) => {
  return (
    <div className="mb-8 list-disc rounded-lg pb-8 shadow-lg lg:p-8">
      <h1 className="mb-10 text-center text-3xl font-bold lg:text-4xl">
        {post.title}
      </h1>
      <div className="relative mx-auto mb-6 w-4/5 overflow-hidden shadow-md">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="h-full w-full rounded-lg object-top"
        />
      </div>
      <div className="px-4 lg:px-0">
        <div className="mb-8 flex w-full flex-row justify-center">
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
        </div>
      </div>
      {parse(post.content.html)}
    </div>
  )
}

export default PostDetail
