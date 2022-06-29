import Head from 'next/head';
import { PostCard, PostWidget } from '../components';
import { getPosts } from '../services';

const index = ({posts}) => {
  return (
    <div className='container flex flex-col'>
        <Head>
          <title>Loudr</title>
          <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
        </Head>
        <div className="container px-6 lg:px-32 mx-auto">
          <PostWidget category={{"categories": "Fashion"}} />
          {posts.map((post) => <PostCard post={post.node} key={post.node.slug} />)}
          <PostWidget category={{"categories": "Tech"}} />
              
        </div>
    </div>
  )
};

export default index

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: {posts}
  }
}