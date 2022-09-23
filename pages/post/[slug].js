import React from 'react'
import { useRouter } from 'next/router'
import { getPosts, getPostDetails } from '../../services'
import {
  PostDetail,
  RelatedPostsWidget,
  Author,
  Loader,
} from '../../components'

const PostDetails = ({ post }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <Loader />
  }

  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="flex flex-col">
        <PostDetail post={post} />
        <Author author={post.author} />
        <RelatedPostsWidget
          categories={post.categories.map((category) => category.slug)}
          slug={post.slug}
        />
      </div>
    </div>
  )
}

export default PostDetails

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug)

  return {
    props: { post: data },
  }
}

export async function getStaticPaths() {
  const posts = await getPosts()

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  }
}
