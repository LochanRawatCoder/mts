import Navbar from '../components/navbar'
import '../styles/globals.css'
import React, { useEffect, useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import { useRouter } from 'next/router'
function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [progress, setProgress] = useState(0)
  useEffect(()=>{
    router.events.on('routeChangeStart', ()=>
    setProgress(40)
    )
    router.events.on('routeChangeComplete', ()=>
    setProgress(100)
    )
  },[])
  return <>
    <LoadingBar
        color='#212129'
        progress={progress}
        waitingTime = {400}
        onLoaderFinished={() => setProgress(0)}
      />
  <Component {...pageProps} />
  <Navbar />
  </>
}

export default MyApp
