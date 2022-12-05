import '../styles/globals.scss'
import Layout from '../components/Layout'
import { AppProvider } from '../context/GlobalContext'

function MyApp({ Component, pageProps }) {

  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  )
}

export default MyApp
