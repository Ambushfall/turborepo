import 'styles/globals.css'
import 'styles/secondary.css'
import { Libre_Baskerville } from 'next/font/google'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import localFont from 'next/font/local'


const myFont = localFont({
  src: '../../styles/cursive.ttf',
  display: 'swap',
  variable: '--cursive-latin'
})

const Baskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  preload: true,
  style: 'normal',
  variable: '--libre-baskerville'
})

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
      <body className={`h-full ${Baskerville.variable} ${myFont.variable}`}>{children}</body>
    </html>
  )
}
