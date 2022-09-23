import '../styles/globals.scss'
import 'tailwindcss/tailwind.css'
import 'bootstrap/dist/css/bootstrap.min.css';
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
