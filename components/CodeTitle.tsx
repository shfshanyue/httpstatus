import Link from 'next/link'
import Image from 'next/image'
import { Helmet } from 'react-helmet'

export default function CodeTitle ({ code, title }: Record<string, string>) {
  return (
    <>
      <Helmet
        title={`HTTP 状态码 ${code} ${title} 详解`}
      />
      <div className="my-4 text-center">
        <Link href="/" className="no-underline">
          ← 返回 http.devtool.tech
        </Link>
      </div>
      <h1 className="text-center">
        <span className="mr-4">{code}</span>
        <span className="font-mono">{title}</span>
      </h1>
      <Image width={750} height={600} src={`https://http.cat/${code}`} alt={code} className="mx-auto" placeholder='blur' blurDataURL='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzUwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDc1MCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI3NTAiIGhlaWdodD0iNjAwIiBmaWxsPSIjRTVFN0VCIi8+Cjwvc3ZnPgo=' />
    </>
  )
}