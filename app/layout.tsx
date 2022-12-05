import './globals.css'
import GradientBG from './gradientBackground'
import Navigation from './navigation'
import { promises as fs } from 'fs'
import path from 'path'
import { AnalyticsWrapper } from './components/analytics';


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const reg = /^([^.]+)$/g;
  const postsDirectory = path.join(process.cwd(), '/app')
  const filenames = await fs.readdir(postsDirectory)
  const filterDirectories = filenames.filter((e) => e.match(reg) ? e !=='components' : false)
  console.log(filterDirectories)

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Navigation urls={filterDirectories} />
        <GradientBG />
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
