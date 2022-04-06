import Head from 'next/head'

const index = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <Head>
            <title>Loudr</title>
            <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        </Head>
    </div>
  )
}

export default index