import '../styles/globals.css'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { Provider } from "react-redux"
import store from "../redux/store"

export function reportWebVitals(metric: NextWebVitalsMetric) {
  switch (metric.name) {
    case 'Next.js-hydration':
      // handle hydration results
      console.log('hydrating', `${Number(metric.value)} ms`)
      break
    case 'Next.js-route-change-to-render':
      // handle route-change to render results
      break
    case 'Next.js-render':
      // handle render results
      break
    default:
      break
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}
export default MyApp
