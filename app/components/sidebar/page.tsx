'use client'

import Link from "next/link";
import { useState } from "react";

const Navigation = ({ urls }: { urls: Array<string>; }) => {
    const linkStyle = `text-base font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out dark:text-white dark:hover:text-gray-200`


    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className={`${isOpen ? "fixed" : "hidden"} bg-slate-100  antialiased text-slate-300 selection:bg-blue-600 selection:text-white`}>
            <div className='flex flex-col relative w-screen'>
                <div id='menu' className='min-h-screen z-10 bg-gray-900 text-slate-300 w-64 fixed left-0 h-screen '>
                    <div id='logo' className='my-4 px-6'>
                        <h1 className='text-lg md:text-2xl font-bold text-white'>Ambushfall<span className='text-blue-500'>POC</span>.</h1>
                        <p className='text-slate-500 text-sm'>Nav Menu</p>
                    </div>
                    <div id='profile' className='px-6 py-10'>
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
                    <div id='nav' className='w-full px-6'>
                        {urls.map((el:string) => {
                            return (
                                <NavLink key={`key${el}`} href={`/${el}`} NavItemName={el} NavItemDescription={`Project Showcase: ${el}`} SVG={<SVG/>} isActive={true}/>
                            )
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}

const SVG = () => <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6'>
<path strokeLinecap='round' strokeLinejoin='round' d='M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z' />
</svg>

function NavLink({ href, NavItemName, NavItemDescription, SVG, isActive }: { href: string, NavItemName: string, NavItemDescription: string, SVG: JSX.Element, isActive?: boolean }) {
    return (
        <Link href={href} className={`${isActive ? 'bg-blue-800' : ''} w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3  hover:bg-white/5 transition ease-linear duration-150`}>
            <div>
                {SVG}
            </div>
            <div className='flex flex-col'>
                <span className='text-lg font-bold leading-5 text-white'>{NavItemName}</span>
                <span className='text-sm text-white/50 hidden md:block'>{NavItemDescription}</span>
            </div>
        </Link>
    )
}

export default Navigation