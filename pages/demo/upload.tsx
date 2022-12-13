import { useCallback } from "react"

export default function FileUpload () {
  const handleUpload = useCallback((e: any) => {
    const files = e.target.files
    const file: File = files[0]
    fetch('/api/upload-jpeg?cors=true', {
      method: 'POST',
      body: file,
      headers: {
        'content-type': 'image/jpeg'
      }
    })
  }, [])

  return (
    <div>
      <input type="file" onChange={handleUpload} accept="image/jpeg" />
    </div>
  )
}