import Head from 'next/head';
import { Navigation, PostCard, PostWidget } from '../components';

const posts = [
  {title: 'What is a Dapp?', excerpt: 'what is a dapp by haleem bello decentralized economy is something'},
  {title: 'What is a Dapp?', excerpt: 'what is a dapp by haleem bello decentralized economy is something'}
];

const index = () => {
  return (
    <div className='container flex flex-col'>
        <Head>
          <title>Loudr</title>
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        </Head>
        <Navigation></Navigation>
        <div className="container flex flex-col lg:flex-row justify-around mx-auto px-10">
              <div className='lg:basis-1/2 mb-8'>
                {posts.map((post, index) => <PostCard post={post} key={post.title} />
                )}
              </div>
              <div className="lg:basis-1/4">
                  <PostWidget></PostWidget>
              </div>
        </div>
    </div>
  )
};

export default index