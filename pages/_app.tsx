import Footer from '~components/common/Footer'
import Header from '~components/common/Header'
import '../styles/globals.scss'

function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  )
}

function MyApp({ Component, pageProps }) {
  return (
    <SafeHydrate>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </SafeHydrate>
  )
}

export default MyApp
