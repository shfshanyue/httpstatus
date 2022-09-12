import { Helmet } from 'react-helmet'
import Link from 'next/link'

function Home() {
  return (
    <div className="p-4">
      <Helmet
        title="Home | Hello next.js!"
        meta={[{ property: 'og:title', content: 'Home' }]}
      />
      <section className="text-center">
        <nav>
          <ul className="flex justify-center gap-4 p-0 list-none">
            <li>
              <Link href="/">
                <a className="decoration-current">home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="decoration-current">about</a>
              </Link>
            </li>
          </ul>
        </nav>
        <h1 className="max-w-xs mx-auto mt-0 text-2xl font-bold leading-tight sm:max-w-lg sm:text-4xl">
          Next.js 脚手架首页
        </h1>
        <div className="content">
          <p>
            Author: 山月
          </p>
          <p>
            这是主页内容
          </p>
          <input type="text" className="app-input" />
          <div className="flex justify-center gap-2 mt-8 cta">
            <a href="#" className="app-button">read more</a>
            <a href="#" className="app-button">subscribe</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
