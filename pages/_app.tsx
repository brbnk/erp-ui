import 'styles/styles.scss'
import type { AppProps } from 'next/app'
import { applyLayout } from 'common/components/layout/main/Main'

export default function MyApp({ Component, pageProps, router }: AppProps) {
  if (router.pathname == '/login')
    return <Component {...pageProps} />

  return applyLayout(<Component {...pageProps} />)
}