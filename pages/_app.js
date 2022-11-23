import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {store} from '../store'
import {Provider} from 'react-redux'
import { SSRProvider } from 'react-bootstrap';
import Router from 'next/router';
import { useState } from 'react';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true)

  Router.events.on('routeChangeStart', ()=>{
    NProgress.start()
  })

  Router.events.on('routeChangeComplete', ()=>{
    NProgress.done()
  })



  return (
    <SSRProvider>
      <Provider store = {store}>
        
          <Component {...pageProps} />
        
      </Provider>
    </SSRProvider>
  )
}

export default MyApp
