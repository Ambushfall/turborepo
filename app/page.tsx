import styles from '@app/page.module.css'
import Link from 'next/link';


/**
 * Typedefs test cache
 */
type linkObj = {
  href: string,
  target?: string | undefined,
  rel?: string | undefined,
  className?: string | undefined,
  h2Text: string | undefined,
  pText: string | undefined,
}

type JSONApiAmbush = {
  Name?: string | undefined,
  Auth: boolean | undefined,
  '$schema'?: []
}


/**
 * Constants and destructures
*/

const { container, main, title, grid, card } = styles

const api: JSONApiAmbush = { '$schema': [], Auth: false, Name: 'Ambushfall' };
const cssLink: linkObj = { href: "/editor", h2Text: "CSS Live Editor", pText: "Try out editing CSS Live in browser" };
const JSONAPI: linkObj = { href: "/api/todos", h2Text: "JSON Api Route", pText: "Directly Route to the Test JSON Api" };


/**
 * Initialize Link objects to create Cards, add more objects for more cards
 */
const linkObjs: Array<linkObj> = [JSONAPI, cssLink]



export default function Home() {
  return (
    <div className={container}>
      <main className={main}>
        <HeadingTitle {...api} />
        <GridItemLinks {...linkObjs} />
      </main>
    </div>
  )
}

function HeadingTitle(props: JSONApiAmbush) {
  const { Name, Auth } = props
  // console.log(props)
  return (
    <h1 className={title}>
      {Name} {Auth}
    </h1>
  )
}


function GridItemLinks(links: Array<linkObj>) {
  return (
    <div className={grid}>
      {Object.values(links).map((value, i) => <Link key={i} href={value.href} className={card}>
        <h2>{value.h2Text} &rarr;</h2>
        <p>{value.pText}</p>
      </Link>
      )}
    </div>
  )
}
