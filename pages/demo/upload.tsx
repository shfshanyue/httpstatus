import { useCallback, useState } from "react"

const isProduction = process.env.NODE_ENV === 'production'

export default function FileUpload() {
  const [src, setSrc] = useState('')

  const handleUpload = useCallback((e: any) => {
    const files = e.target.files
    const file: File = files[0]
    fetch(`${isProduction ? '' : 'http://localhost:8000'}/api/upload-jpeg?cors=true`, {
      method: 'POST',
      body: file,
      headers: {
        'content-type': 'image/jpeg'
      }
    }).then(res => res.json()).then(o => {
      setSrc(o.src)
    })
  }, [])

  return (
    <div>
      <input type="file" onChange={handleUpload} accept="image/jpeg" />
      <ul>
        <li>图片被上传至后端，后端又上传至 OSS：</li>
        <li>
          图片地址：{src}
        </li>
        <li>
          前端代码：https://github.com/shfshanyue/httpstatus/blob/master/pages/demo/upload.tsx
        </li>
        <li>
          后端代码：https://github.com/shfshanyue/httpstatus/tree/master/api
        </li>
      </ul>
      <img src={src} />
    </div>
  )
}