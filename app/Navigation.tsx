'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HomeSVG } from "./components/homeSVG";
const Navigation = ({ urls }: { urls: Array<string>; }) => {

    const [isOpen, setIsOpen] = useState(false);

    function onClickHandler() {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <HomeSVG handleChange={onClickHandler} />
            <div className={`${isOpen ? "fixed" : "hidden"} bg-slate-100  antialiased text-slate-300 selection:bg-blue-600 selection:text-white`}>
                <div className='flex flex-col relative w-screen'>
                    <div id='menu' className='min-h-screen z-10 bg-gray-900 text-slate-300 w-64 fixed left-0 h-screen '>
                        <div id='logo' className='my-4 px-6'>
                            <h1 className='text-lg md:text-2xl font-bold text-white'>Ambushfall<span className='text-blue-500'>POC</span>.</h1>
                            <p className='text-slate-500 text-sm'>Nav Menu</p>
                        </div>
                        <div id='profile' className='px-6 py-6'>
                            <p className='text-slate-500'>Welcome back,</p>
                            <a href='#' className='inline-flex space-x-2 items-center'>
                                <span>
                                    {/* user Image example 
                      <img className='rounded-full w-8 h-8' 
                      src='https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80' 
                      alt=''/> */}
                                </span>
                                <span className='text-sm md:text-base font-bold'>
                                    {/* User Name Example
                      
                      Edward Tompson */}
                                </span>
                            </a>
                        </div>
                        {/* <ul>
                        {urls.map((el: string) => <li key={`li${el}`} >
                            <Link className={linkStyle} href={`/${el}`} key={el}>{el}</Link>
                        </li>)}
                    </ul> */}
                        {/* Navigation Items Example  */}
                        <div id='nav' className='w-full'>
                            <NavLink href="/" NavItemName="Home" NavItemDescription="HomePage" pathToSvg='/vercel.svg' isActive={true}/>
                            {urls.map((el: string) => <NavLink key={`key${el}`} href={`/${el}`} NavItemName={el} NavItemDescription={`Project Showcase: ${el}`} pathToSvg='/vercel.svg' isActive={false} />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
function NavLink({ href, NavItemName, NavItemDescription, pathToSvg, isActive }: { href: string, NavItemName: string, NavItemDescription: string, pathToSvg: string, isActive?: boolean }) {
    return (
        <Link href={href} className={`${isActive ? 'bg-blue-800' : ''} w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3  hover:bg-white/5 transition ease-linear duration-150`}>
            <div>
                <Image src={pathToSvg} alt="Logo" width={72} height={16} />
            </div>
            <div className='flex flex-col'>
                <span className='text-lg font-bold leading-5 text-white'>{NavItemName}</span>
                <span className='text-sm text-white/50 hidden md:block'>{NavItemDescription}</span>
            </div>
        </Link>
    )
}

export default Navigation