import React from 'react'
import { useRouter } from 'next/router'
import { getCategories, getAllCategoryPosts } from '../../services'
import { PostCard, Loader } from '../../components'

const CategoryPosts = ({ posts }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <Loader />
  }

  return (
    <div className="container mx-auto px-6 lg:px-32">
      {posts.map((post) => (
        <PostCard post={post.node} key={post.node.slug} />
      ))}
    </div>
  )
}

export default CategoryPosts

export async function getStaticProps({ params }) {
  const posts = (await getAllCategoryPosts(params.slug)) || []

  return {
    props: { posts },
  }
}

export async function getStaticPaths() {
  const categories = await getCategories()
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  }
}
