import styles from 'styles/page.module.css'
import Link from 'next/link'
import data from 'json/paths.json'

export const metadata = {
  title: 'Home'
}

/**
 * Typedefs test cache v2
 */
type linkObj = {
  href: string
  target?: string | undefined
  rel?: string | undefined
  className?: string | undefined
  h2Text: string | undefined
  pText: string | undefined
  regular?: boolean
}

type JSONApiAmbush = {
  Name?: string | undefined
  Auth: boolean | undefined
  $schema?: []
}

/**
 * Constants and destructures
 */

const { container, main, title, grid, card } = styles

const api: JSONApiAmbush = { $schema: [], Auth: false, Name: 'Ambushfall' }
const cssLink: linkObj = {
    href: '/editor',
    h2Text: 'CSS Live',
    pText: 'Try out editing CSS Live in browser'
  },
  JSONAPI: linkObj = {
    href: '/api',
    h2Text: 'JSON Api Route',
    pText: 'Directly Route to the Test JSON Api'
  },
  DOCS: linkObj = {
    href: '/docs',
    h2Text: 'Docs',
    pText: 'Nextra Implemented Docs'
  },
  download: linkObj = {
    href: '/api/download?file=MMGC.exe',
    h2Text: 'Download MM',
    pText: 'DL Mouse Mover',
    regular: true
  }

/**
 * Initialize Link objects to create Cards, add more objects for more cards
 */
const linkObjs: Array<linkObj> = [JSONAPI, cssLink, DOCS, download]

export default async function Home () {
  const pathnames: Array<string> = data['hrefs']
  pathnames.forEach(e => {
    const obj: linkObj = {
      href: `/${e}`,
      h2Text: `${e} route`,
      pText: `Test ${e} route`
    }
    const index = linkObjs.findIndex(x => x.href == obj.href)
    index === -1 ? linkObjs.push(obj) : false
  })

  return (
    <div className={'px-8 py-0'}>
      <section className='min-h-[88vh] flex-1 flex flex-col justify-center items-center px-0 py-16'>
        <HeadingTitle {...api} />
        <GridItemLinks {...linkObjs} />
      </section>
    </div>
  )
}

function HeadingTitle (props: JSONApiAmbush) {
  const { Name, Auth } = props
  // console.log(props)
  return (
    <h1
      className='
    text-6xl font-extrabold 
    text-transparent bg-clip-text
    bg-gradient-to-b from-[#ffffff] to-[#aaaaaa]
    dark:invert-0
    invert
    text-center
    tracking-tight'
    >
      {Name} {Auth}
    </h1>
  )
}

function GridItemLinks (links: Array<linkObj>) {
  return (
    <div className='box-border flex flex-wrap items-center justify-center border-0 border-solid border-gray-200 max-w-[1200px]'>
      {Object.values(links).map((value, i) =>
        value.regular ? (
          <a key={i} href={value.href} className={card}>
            <h2>{value.h2Text} &rarr;</h2>
            <p>{value.pText}</p>
          </a>
        ) : (
          <Link key={i} href={value.href} className={card}>
            <h2>{value.h2Text} &rarr;</h2>
            <p>{value.pText}</p>
          </Link>
        )
      )}
    </div>
  )
}
