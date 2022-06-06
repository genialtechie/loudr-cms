import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css'
import {Layout} from '../components'
import { SSRProvider } from 'react-bootstrap';

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  )
}

export default MyApp
