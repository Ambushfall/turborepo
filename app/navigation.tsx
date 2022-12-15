'use client'
import Link from "next/link";
import { useState } from "react";



const Navigation = ({ urls }: { urls: Array<string>; }) => {
  const linkStyle = `text-base font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out dark:text-white dark:hover:text-gray-200`


  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center border-b-2 border-gray-100 py-6">
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
        <aside className={`${isOpen ? "flex" : "hidden"} md:flex space-x-8 h-full`}>
          <>
            {urls.map((el: string) => <Link className={linkStyle} href={`/${el}`} key={el}>{el}</Link>)}
          </>
        </aside>

      </div>
    </div>
  )
}

// function OffCanvasMenu() {
//   // Use React's useState hook to manage the menu's open/closed state
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center border-b-2 border-gray-100 py-6">
//           <div>
            // <button
            //   className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
            //   onClick={() => setIsOpen(!isOpen)}
            // >
            //   <svg
            //     className="fill-current h-3 w-3"
            //     viewBox="0 0 20 20"
            //     xmlns="http://www.w3.org/2000/svg"
            //   >
            //     <title>Menu</title>
            //     <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            //   </svg>
            // </button>

//             {/* The menu itself, which is hidden by default */}
//             <nav
//               className={`${isOpen ? "block" : "hidden"} md:block md:flex md:items-center w-full md:w-auto`}>
//               <>
//                 <Link href={'/'} className={linkStyle}>Home</Link>
//                 {urls.map((el: string) => <Link className={linkStyle} href={`/${el}`} key={el}>{el}</Link>)}
//               </>
//             </nav>
//           </div>
//         </div>
//       </div>
//       {/* The menu trigger button */}

//     </>
//   );
// }

function backup(urls:any) {
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
