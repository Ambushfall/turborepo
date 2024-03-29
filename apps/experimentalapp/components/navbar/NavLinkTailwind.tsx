'use client';
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import { toPascalCase } from 'helpers/toPascalCase'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

/**
 * 
 * @param href string path example: ('about' or 'gallery')
 * @returns {JSX.Element}
 */
export function NavLinkTailwind({ href }: { href: string; }) {
    const segment = useSelectedLayoutSegments();

    const isActive = href === `/${segment}`
    const isHome = href === '/' ? true : false
    // console.log(href)

    return (
        <Link href={href} className={classNames(isActive ? 'bg-gray-900 text-white dark:bg-gray-400 dark:text-black' : 'dark:text-gray-400 dark:hover:bg-gray-800 text-black hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-2xl font-medium')} aria-current={isActive ? 'page' : undefined}>
            {isHome ? 'Home' : toPascalCase(href).split('/').join('')}
        </Link>
    );
}
