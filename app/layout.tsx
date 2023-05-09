import 'styles/output.css'
import GradientBG from 'components/gradientBackground'
import { AnalyticsWrapper } from 'components/analytics'
import { NavLinkTailwind } from 'components/navbar/NavLinkTailwind'
import data from 'json/paths.json'
import { Metadata, ResolvingMetadata } from 'next'
import { getImages } from 'utils'
import { Footer } from './Footer'

export async function generateMetadata (
  req: any,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const imagez = await getImages()
  const mappedimages = imagez
    ? imagez
        .flatMap((e: string) => [`/midj/${e}`])
        .sort((a, b) => a.length - b.length)
    : ['']

  const title = 'ExperimentalApp',
    author = 'Ambushfall',
    description = 'Next 13 Experiment using AppDir and Server Components',
    site = 'Next 13 ExperimentalApp'

  return {
    title: {
      default: 'Next 13 ExperimentalApp',
      template: '%s | Ambushfall'
    },
    description: 'Learning Project :D',
    generator: 'Next.js',
    applicationName: title,
    referrer: 'origin-when-cross-origin',
    keywords: [
      'Next.js',
      'React',
      'Typescript',
      'Server Components',
      'Beta',
      'AppDir'
    ],
    authors: [{ name: author, url: 'https://github.com/Ambushfall/' }],
    themeColor: [
      { media: '(prefers-color-scheme: dark)', color: '#000000' },
      { media: '(prefers-color-scheme: light)', color: '#ffffff' }
    ],
    colorScheme: 'dark light',
    viewport: 'width=device-width, initial-scale=1',
    creator: author,
    publisher: 'Vercel',
    robots: 'index, follow',
    icons: [...mappedimages],
    formatDetection: {
      email: false,
      address: false,
      telephone: false
    },
    openGraph: {
      images: [...mappedimages],
      type: 'website',
      title: title,
      description: description,
      siteName: site,
      url: process.env.NEXT_PUBLIC_HOST
    },
    twitter: {
      card: 'summary_large_image',
      site: site,
      creator: author,
      images: mappedimages[Math.floor(Math.random() * 11)],
      title: title,
      description: description
    }
  }
}

export default async function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  const filterDirectories = data['hrefs']
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx.  Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className='drawer'>
          <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
          <div className='drawer-content flex flex-col'>
            <div className='w-full navbar bg-transparent'>
              <div className='flex-none lg:hidden'>
                <label
                  htmlFor='my-drawer-3'
                  className='btn btn-square btn-ghost'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    className='inline-block w-6 h-6 stroke-current'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16M4 18h16'
                    ></path>
                  </svg>
                </label>
              </div>
              <div className='flex-1 px-2 mx-2'></div>
              <div className='flex-none hidden lg:block'>
                <ul className='menu menu-horizontal'>
                  <NavLinkTailwind href='/' NavItemName='Home' />
                  {filterDirectories?.map((item: string, index: number) => (
                    <NavLinkTailwind
                      key={index}
                      href={`/${item}`}
                      NavItemName={item}
                    />
                  ))}
                </ul>
              </div>
            </div>

            {/* 
            Content Goes here 
            */}
            <GradientBG />
            {children}
            <AnalyticsWrapper />
            <Footer />
          </div>
          <div className='drawer-side'>
            <label htmlFor='my-drawer-3' className='drawer-overlay'></label>
            <ul className='menu p-4 w-80 bg-base-100'>
              <NavLinkTailwind href='/' NavItemName='Home' />
              {filterDirectories?.map((el: string) => (
                <NavLinkTailwind
                  key={`sidebar${el}`}
                  href={`/${el}`}
                  NavItemName={el}
                />
              ))}
            </ul>
          </div>
        </div>
      </body>
    </html>
  )
}
