import styles from './page.module.css'
import Link from 'next/link';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Image from 'next/image';

type linkObj = {
  href: string,
  target?: string | undefined,
  rel?: string | undefined,
  className?: string | undefined,
  h2Text: string | undefined,
  pText: string | undefined,
}

type JSONApiAmbush = {
  Name? : string | undefined,
  Auth : boolean | undefined,
  '$schema'?:[]
}

const docsLink: linkObj = { href: "/leaveserver", h2Text: "Leave Cherry's", pText: "Find a simple way to stop getting scammed." }
const cssLink: linkObj = { href: "/CSSEDIT", h2Text: "CSS Live Editor", pText: "Try out editing CSS Live in browser" }
const JSONAPI : linkObj = { href: "/api/hello", h2Text: "JSON Api Route", pText: "Directly Route to the Test JSON Api"}

const linkObjs:Array<linkObj> = [docsLink, JSONAPI,cssLink]



export default async function Home() {
  const api:JSONApiAmbush = { '$schema': [], Auth: false, Name: 'Ambushfall' }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <HeadingTitle {...api} />
        <GridItemLinks {...linkObjs} />
        <Loading />
      </main>
    </div>
  )
}

function HeadingTitle(props: JSONApiAmbush) {
  const {Name, Auth} = props
  console.log(props)
  return (
    <h1 className={styles.title}>
      {Name} {Auth}
    </h1>
  )
}

const Loading = () => {
  return (<Image src="/loading.svg" alt="Vercel Logo" width={150} height={150} />)
}


function GridItemLinks(links: Array<linkObj>) {
  return (
    <div className={styles.grid}>
      {Object.values(links).map((value, i) => <Link key={i} href={value.href} className={styles.card}>
        <h2>{value.h2Text} &rarr;</h2>
        <p>{value.pText}</p>
      </Link>
      )}
    </div>
  )
}