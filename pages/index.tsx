import { Helmet } from 'react-helmet'
import * as _ from 'midash'
import Link from 'next/link'
import code from '../lib/code.json'

const data = _.groupBy(code, x => x.code.toString()[0])
const groups = Object.entries(data).map(([ key, list ]) => {
  const message = ['Informational', 'Success', 'Redirection', 'Client Error', 'Server Error']
  return {
    code: key.padEnd(3, 'x'),
    name: message[Number(key) - 1],
    list: list.sort((x, y) => x.code - y.code)
  }
})

function Home() {
  return (
    <div className="p-4 page">
      <Helmet
        title="Home | Hello next.js!"
        meta={[{ property: 'og:title', content: 'Home' }]}
      />
      <h1>HTTP 状态码速查大全</h1>
      <p>
        <code>http.devtool.tech</code> 是关于 HTTP 状态码的一个网站，可通过 <code>http.devtool.tech/code</code> 进行快速导航。
      </p>
      <p>
        可通过 <a href="https://apifox.cn/a1shanyue"><code>Apifox</code></a> 探索发现各种开放 API，找到大部分状态码，可通过 <a href="https://github.com/shfshanyue/httpstatus"><code>Github</code></a> 仓库找到源码。
      </p>
      <div>
        {/* <a href="https://github.com/shfshanyue/httpstatus" className="mr-4 no-underline">★ Github Star</a> */}
        {/* <a href="https://apifox.cn/a1shanyue" className="no-underline">Apifox</a> */}
      </div>
      <div>
        {
          groups.map(group => (
            <section key={group.code}>
              <h2 className="mt-6 mb-4 text-2xl">
                <span>{group.code}</span>
                <span>{' '}</span>
                <span>{group.name}</span>
              </h2>
              <div className="grid grid-cols-2 gap-y-2">
                {
                  group.list.map(x => (
                    <Link href={`/${x.code}`} key={x.code}>
                      <a className="font-mono text-lg decoration-orange-200">
                        <span>{x.code}</span>
                        <span>{' '}</span>
                        <span>{x.phrase}</span>
                      </a>
                    </Link>
                  ))
                }
              </div>
            </section>
          ))
        }
      </div>
    </div>
  )
}

export default Home
