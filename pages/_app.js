import '../styles/globals.scss'
import Layout from '../components/Layout'
import { AppProvider } from '../context/GlobalContext'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  const animation = {
    key: router.route,

    transition: {
      duration: 0.1,
      ease: "easeOut"
    },

    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
      transition: {
        ease: 'easeOut'
      }
    },
  }

  return (
    <AppProvider>
      <AnimatePresence exitBeforeEnter>
        <motion.div {...animation}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </motion.div>
      </AnimatePresence>
    </AppProvider>
  )
}

export default MyApp
