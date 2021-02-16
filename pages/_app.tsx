import { AppProps } from 'next/dist/next-server/lib/router/router'
import { LangProvider } from 'src/app/providers'
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }: AppProps) {
 
  return <LangProvider>
            <Component {...pageProps} key={router?.route}/>
          </LangProvider>
}

export default MyApp
