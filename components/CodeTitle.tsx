import Link from 'next/link'
import { Helmet } from 'react-helmet'

export default function CodeTitle ({ code, title }: Record<string, string>) {
  return (
    <>
      <Helmet
        title={`HTTP 状态码 ${code} ${title} 详解`}
      />
      <div className="my-4 text-center">
        <Link href="/">
          <a className="no-underline">← 返回 http.devtool.tech</a>
        </Link>
      </div>
      <h1 className="text-center">
        <span className="mr-4">{code}</span>
        <span className="font-mono">{title}</span>
      </h1>
      <img src={`https://http.cat/${code}`} className="mx-auto" />
    </>
  )
}