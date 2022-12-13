import React from 'react'
import { Helmet } from 'react-helmet'
import Link from 'next/link'

export default function About() {
  return (
    <div className="p-4 text-center">
      <Helmet
        title="About | Hello next.js!"
        meta={[{ property: 'og:title', content: 'About' }]}
      />
      <h1>
        About Page
      </h1>
      <Link href="/">
        Back to home
      </Link>
    </div>
  )
}
