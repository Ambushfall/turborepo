import 'styles/globals.css'
import 'styles/secondary.css'

export default async function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  //   const filterDirectories = data['hrefs']
  return (
    <html lang='en'>
      {/*
        <head />  will contain the components returned by the nearest parent
        head.tsx.  Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='h-full'>{children}</body>
    </html>
  )
}
