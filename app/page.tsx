import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';


export default async function Home() {
  const api = await (await fetch('https://ambushfall.github.io/TestSon/Data/api.json')).json();
  console.log(api);


  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <HeadingTitle {...api} />
        <HeadingDescription />
        <GridItemLinks />

      </main>
      <Footer />
    </div>
  )
}

function HeadingTitle(props: any) {
  console.log(props)
  return (
    <h1 className={styles.title}>
      {props?.Name} is {props.Auth}
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

function GridItemLinks() {
  return (
    <div className={styles.grid}>
      <Link href="https://beta.nextjs.org/docs" className={styles.card}>
        <h2>Documentation &rarr;</h2>
        <p>Find in-depth information about Next.js 13</p>
      </Link>

      <Link
        href="https://github.com/vercel/next.js/tree/canary/examples" className={styles.card}>
        <h2>Examples &rarr;</h2>
        <p>Explore the Next.js 13 playground.</p>
      </Link>

      <Link
        href="https://vercel.com/templates/next.js/app-directory?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.card}>
        <h2>Deploy &rarr;</h2>
        <p>Deploy your Next.js site to a public URL with Vercel.</p>
      </Link>
    </div>
  )
}