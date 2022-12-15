'use client'
import Link from "next/link";
import { useState } from "react";



const Navigation = ({ urls }: { urls: Array<string>; }) => {
  const linkStyle = `text-base font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out dark:text-white dark:hover:text-gray-200`


  const [isOpen, setIsOpen] = useState(false);

  return (
    // <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //   <div className="flex justify-between items-center border-b-2 border-gray-100 py-6">
    <>
      <div>
        {/* <Link href={'/'} className={linkStyle}>Home</Link> */}
        <button
          className="md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className={`${isOpen ? "fixed" : "hidden"} md:fixed fixed w-52 z-10 left-5 top-5 space-x-8 h-full`}>
        <ul>
          {urls.map((el: string) => <li key={`li${el}`} >
            <Link className={linkStyle} href={`/${el}`} key={el}>{el}</Link>
          </li>)}
        </ul>
      </div>
    </>
    //   </div>
    // </div>
  )
}


function backupOldNavi(urls: any) {
  const linkStyle = `text-base font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out dark:text-white dark:hover:text-gray-200`


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center border-b-2 border-gray-100 py-6">
        <div>
          <Link href={'/'} className={linkStyle}>Home</Link>
        </div>
        <nav className="hidden md:flex space-x-8">
          <>
            {urls.map((el: string) => <Link className={linkStyle} href={`/${el}`} key={el}>{el}</Link>)}
          </>
        </nav>

      </div>
    </div>
  )
}

export default Navigation;
