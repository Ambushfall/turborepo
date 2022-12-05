import { promises as fs } from 'fs'
import Link from 'next/link'
import path from 'path'

const Test = ({ urls }) => {
    return (
        <>
            {urls.map(el => <Link href={`/${el}`} key={el}>{el}</Link>)}
        </>
    )
}




export async function getStaticProps() {
    const regEx = new RegExp(/^([^.]+)$/g)
    const postsDirectory = path.join(process.cwd(), '/app')
    const filenames = await fs.readdir(postsDirectory)
    const filterDirectories = filenames.filter((e) => regEx.test(e) ? e : false)
    // console.log(filterDirectories)
    return {
        props: {
            urls: filterDirectories,
        },
    }
}

export default Test