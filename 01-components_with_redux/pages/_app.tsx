import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from "react-redux"
import store from "../redux/store"
import { useState, useEffect } from "react"

// as const for readonly not fix it
const layoutStatusInterface = ['mobile', 'tablet', 'labtop'] as const
type LayoutStatusInterface = typeof layoutStatusInterface[number]

function MyApp({ Component, pageProps }: AppProps) {

  const [layoutStatus, setLayoutStatus] = useState<LayoutStatusInterface>('mobile')

  useEffect(() => {
    window.addEventListener('resize', (event: UIEvent) => {
      checkWindowSizeAndUpdateLayout(event)
    })
  }, [])

  const checkWindowSizeAndUpdateLayout = (event: UIEvent) => {
    setLayoutStatus('labtop')
    console.log('resize', event)
    console.log('innerHeight', window.innerHeight)
    console.log('innerWidth', window.innerWidth)
  }

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
export default MyApp
