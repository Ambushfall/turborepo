
import Image from 'next/image'
import styles from '../page.module.css'


export default function Paeg() {
    return (<>
        <div className={styles.container}>
                <main className={styles.main}>
                    <Image alt='Test' src={'/frame5.svg'} width={150} height={150} />
                </main>
            </div>
    </>)
}
