import './globals.css'
import GradientBG from './gradientBackground'
import Navigation from './navigation'
import { promises as fs } from 'fs'
import path from 'path'



// eslint-disable-next-line
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


    const regEx = new RegExp(/^([^.]+)$/g)
    const postsDirectory = path.join(process.cwd(), '/app')
    const filenames = await fs.readdir(postsDirectory)
    const filterDirectories = filenames.filter((e) => regEx.test(e) ? e : false)

  
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Navigation urls={filterDirectories}/>
        <GradientBG/>
        {children}
        </body>
    </html>
  )
}
