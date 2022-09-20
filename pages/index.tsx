import { Helmet } from 'react-helmet'
import * as _ from 'midash'
import Link from 'next/link'
import Image from 'next/future/image'

import code from '../lib/code.json'
import ApifoxImage from '../assets/apifox.webp'

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
        title="HTTP 状态码速查大全"
      />
      <h1>HTTP 状态码速查大全</h1>
      <p>
        <code>http.devtool.tech</code> 是关于 HTTP 状态码的一个网站，可通过 <code>http.devtool.tech/code</code> 进行快速导航。
      </p>
      <p>
        本工具由 <a href="https://apifox.cn/a1shanyue"><code>Apifox</code></a> 重度使用者开发，可通过 <a href="https://apifox.cn/a1shanyue"><code>Apifox</code></a> 探索发现各种开放 API，找到大部分状态码。该项目可通过 <a href="https://github.com/shfshanyue/httpstatus"><code>Github</code></a> 仓库找到源码。
      </p>
      <div>
        {/* <a href="https://github.com/shfshanyue/httpstatus" className="mr-4 no-underline">★ Github Star</a> */}
        {/* <a href="https://apifox.cn/a1shanyue" className="no-underline">Apifox</a> */}
      </div>
      <div className="grid grid-cols-1 border-t border-b sm:grid-cols-2">
        <div className="grid place-items-center">
          <div className="text-center sm:ml-16">
            <h3 className="my-2 text-center h3 not-prose">API Hub</h3>
            <div className="mb-2">发现更多公开 API 项目</div>
            <a href="https://apifox.cn/a1shanyue" target="_blank" className="inline-block no-underline app-button">打开 Apifox</a>
          </div>
        </div>
        <Image width={500} className="w-[320px] sm:ml-0 mx-auto rounded-lg border my-4" src={ApifoxImage} alt="API Hub" placeholder="blur" />
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2">
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
