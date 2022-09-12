import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import AppProps from 'next/app'
import Router from 'next/router'
import { MDXProvider } from '@mdx-js/react'

import { initGA, logPageView } from '../lib/ga'
import '../styles/index.css'

function MyApp({ Component, pageProps }: any) {
  useEffect(() => {
    if (process.env.gaId) {
      initGA()
      logPageView()
      Router.events.on('routeChangeComplete', logPageView)
    }
  }, [])

  const meta = [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    }
  ]

  const components = {
    wrapper: (props: any) => <article className="markdown-body page rounded !my-6 bg-white" {...props} />,
    // h1: (props: any) => <h1 className="pb-2 my-4 border-b border-gray-300" {...props} />,
    // h2: (props: any) => <h2 className="my-3" {...props} />,
    // h3: (props: any) => <h3 className="my-2" {...props} />,
    // p: (props: any) => <p className="my-2" {...props} />,
    // inlineCode: (props: any) => <code className="font-mono text-blue-500 bg-gray-100" {...props} />,
  }

  if (process.env.baiduToken) {
    meta.push({
      name: 'baidu-site-verification',
      content: process.env.baiduToken
    })
  }

  return (
    <MDXProvider components={components}>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        title="HTTP 状态码速查大全"
        meta={meta}
      />
      <Component {...pageProps} />
    </MDXProvider>
  )
}

export default MyApp
