import Image from 'next/image'
import styles from 'styles/page.module.css'
import { GithubSVG } from 'components/svg/github'
import Link from 'next/link'

export const Footer = () => (
  <footer className={styles.footer}>
    <ul>
      <Link
        href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
        target='_blank'
        rel='noopener noreferrer'
      >
        Created using and Deployed on{' '}
        <span className={styles.logo}>
          <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
        </span>
      </Link>
      <Link
        href='https://github.com/ambushfall'
        target='_blank'
        rel='noopener noreferrer'
      >
        Created by Ambushfall
        <span className={styles.logo}>
          <GithubSVG />
        </span>
      </Link>
    </ul>
  </footer>
)
