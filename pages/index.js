import Head from 'next/head';
import { Navigation, PostCard, PostWidget } from '../components';
import { getPosts } from '../services';

const index = ({posts}) => {
  return (
    <div className='container flex flex-col'>
        <Head>
          <title>Loudr</title>
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
        </Head>
        <div className="container flex flex-col lg:flex-row justify-around mx-auto px-10">
              <div className='lg:basis-1/2 mb-8'>
                {posts.map((post) => <PostCard post={post.node} key={post.node.slug} />)}
              </div>
              <div className="lg:basis-1/4">
                  <PostWidget></PostWidget>
              </div>
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