import Test, {getStaticProps} from './test'
import Link from "next/link";


const Navigation = async () => {

const linkStyle = `text-base font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out dark:text-white dark:hover:text-gray-200`
const urls = await getStaticProps();

  return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6">
          <div>
            <Link href={'/'}  className="text-lg font-medium text-gray-900 dark:text-white">Home</Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            {/* <Link href='/leaveserver'  className={linkStyle}>asd</Link> */}
            <Test {...urls.props}/>
          </nav>
        </div>
      </div>
  )
}

export default Navigation;
