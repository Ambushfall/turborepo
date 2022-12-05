import Link from "next/link";


const Navigation = ({ urls }: { urls: Array<string>; }) => {
  const linkStyle = `text-base font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out dark:text-white dark:hover:text-gray-200`

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
