import '../styles/globals.css'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { createTheme } from 'styled-breakpoints';
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from 'next/router'
import useStore from '@/hooks/useStore'
import Head from 'next/head'

const title = 'Line of controls'
const url = 'http://localhost:3000/'
const description = 'Kashmir description'
const keywords = 'Kashmir keywords'
const author = 'Buried Signals'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const theme = createTheme({
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1440px',
});

function App({ Component, pageProps }) {
  // Router
  const router = useRouter();
  // Handlers
  const onExitComplete = () => {
    switch (router.pathname) {
      case "/":
        useStore.setState({ backgroundImage: 'bg-home.jpg' })
        break;
      case "/about":
        useStore.setState({ backgroundImage: 'bg-about.jpg' })
        break;
      case "/map":
        useStore.setState({ backgroundImage: 'bg-map.jpg' })
        break;
      default:
        useStore.setState({ backgroundImage: null })
        break;
    }
  }
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='language' content='english' />
        <meta httpEquiv='content-type' content='text/html' />
        <meta name='author' content={ author } />
        <meta name='designer' content={ author } />
        <meta name='publisher' content={ author } />
        <title>{ title }</title>
        <meta name='description' content={ description } />
        <meta name='keywords' content={ keywords } />
        <meta name='robots' content='index,follow' />
        <meta name='distribution' content='web' />
        <meta property='og:title' content={ title } />
        <meta property='og:type' content='site' />
        <meta property='og:url' content={ url } />
        <meta property='og:image' content={ url + 'img/img-meta.png' } />
        <meta property='og:site_name' content={ title } />
        <meta property='og:description' content={ description } />
        <link rel='apple-touch-icon' href='/icons/apple-touch-icon.png' />
        <link rel='apple-touch-icon' sizes='16x16' href='/icons/favicon-16x16.png' />
        <link rel='apple-touch-icon' sizes='32x32' href='/icons/favicon-32x32.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='mask-icon' color='#000000' href='/icons/safari-pinned-tab.svg' />
        <link rel='apple-touch-startup-image' href='/startup.png' /> 
        <meta name='viewport' content='width=device-width, minimum-scale=1, initial-scale=1.0' />
        <meta name='theme-color' content='#000' />
        <link rel='shortcut icon' href='/icons/favicon.ico' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@buriedsignals' />
        <meta name='twitter:title' content={ title } />
        <meta name='twitter:description' content={ description } />
        <meta name='twitter:creator' content='@buriedsignals' />
        <meta name='twitter:image:src' content={ url +'img/img-meta.png' } />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
      <AnimatePresence exitBeforeEnter onExitComplete={ onExitComplete }>
        <motion.div key={ router.pathname } initial="initial" animate="animate" exit="exit">
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      </ThemeProvider>
    </>
  )
}

export default App
