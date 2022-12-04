import './globals.css'
import GradientBG from './gradientBackground'
import Navigation from './navigation'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Navigation/>
        <GradientBG/>
        {children}
        </body>
    </html>
  )
}
