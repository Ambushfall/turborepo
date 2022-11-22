import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';

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

const docsLink = { href: "https://beta.nextjs.org/docs", h2Text: "Documentation", pText: "Find in-depth information about Next.js 13" }
const infoLink = { href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app", h2Text: "Powered by{' '}", pText: "infoLink" }


const linkObjs:Array<linkObj> = [docsLink, infoLink,docsLink,docsLink]



export default async function Home() {
  const api = await (await fetch('https://ambushfall.github.io/TestSon/Data/api.json')).json();


  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <HeadingTitle {...api} />
        <HeadingDescription />
        <GridItemLinks {...linkObjs} />
      </main>
      <Footer />
    </div>
  )
}

function HeadingTitle(props: JSONApiAmbush) {
  const {Name, Auth} = props
  console.log(props)
  return (
    <h1 className={styles.title}>
      {Name} is {Auth}
    </h1>
  )
}


function HeadingDescription() {
  return (
    <p className={styles.description}>
      Get started by editing{' '}
      <code className={styles.code}>app/page.tsx</code>
    </p>
  )
}

function Footer() {
  return (<footer className={styles.footer}>
    <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by{' '}
      <span className={styles.logo}>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </span>
    </a>
  </footer>)
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