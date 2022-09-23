import React from 'react'
import Image from 'next/image'

const Author = ({ author }) => {
  return (
    <div className="relative mt-20 mb-8 rounded-lg p-12 text-center shadow-lg">
      <div className="absolute left-0 right-2 -top-14">
        <Image
          src={author.photo.url}
          alt={author.name}
          className="rounded-full align-middle"
          height="100px"
          width="100px"
        />
      </div>
      <h3 className="my-4 text-xl font-bold">{author.name}</h3>
      <p>{author.bio}</p>
    </div>
  )
}

export default Author
