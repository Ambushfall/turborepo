import './globals.css'
import GradientBG from './components/gradientBackground'
import { AnalyticsWrapper } from './components/analytics';
import { NavLinkTailwind } from './components/NavLinkTailwind';
import { getDirs } from '@utils/getDirs';


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  const filterDirectories = await getDirs()
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body >

        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            <div className="w-full navbar bg-transparent">
              <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
              </div>
              <div className="flex-1 px-2 mx-2"></div>
              <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal">
                  <NavLinkTailwind href='/' NavItemName='Home' />
                  {filterDirectories?.map((el: string) => <NavLinkTailwind key={`horizontal${el}`} href={`/${el}`} NavItemName={el} />)}
                </ul>
              </div>
            </div>

            {/* 
            Content Goes here 
            */}
            <GradientBG />
            {children}
            <AnalyticsWrapper />
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-base-100">
              <NavLinkTailwind href='/' NavItemName='Home' />
              {filterDirectories?.map((el: string) => <NavLinkTailwind key={`sidebar${el}`} href={`/${el}`} NavItemName={el} />)}
            </ul>
          </div>
        </div>
      </body>
    </html>
  )
}
