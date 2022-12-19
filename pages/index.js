import { PostCard, PostWidget } from '../components'
import { getPosts } from '../services'
import { SuscribeWidget } from '../components'

const index = ({ posts }) => {
  return (
    <div className="container flex flex-col">
      <div className="container mx-auto px-6 lg:px-32">
        <SuscribeWidget />
        <PostWidget category={'Fashion'} />
        {posts.map((post) => (
          <PostCard post={post.node} key={post.node.slug} />
        ))}
        <PostWidget category={'Tech'} />
      </div>
    </div>
  )
}

export default index

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: { posts },
  }
}
