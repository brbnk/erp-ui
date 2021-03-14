import 'styles/styles.scss'
import type { AppProps } from 'next/app'
import { getLayout } from 'components/layout/main/main.component'

export default function MyApp({ Component, pageProps }: AppProps) {
  return getLayout(<Component {...pageProps} />)
}