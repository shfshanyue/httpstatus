export default function CodeTitle ({ code, title }: Record<string, string>) {
  return (
    <>
      <h1 className="text-center">
        <span className="mr-4">{code}</span>
        <span className="font-mono">{title}</span>
      </h1>
      <img src={`https://http.cat/${code}`} className="mx-auto" />
    </>
  )
}