import 'styles/styles.scss'
import type { AppProps } from 'next/app'
import { applyLayout } from 'components/layout/main/main.component'

export default function MyApp({ Component, pageProps, router }: AppProps) {
  if (router.pathname == '/login')
    return <Component {...pageProps} />

  return applyLayout(<Component {...pageProps} />)
}