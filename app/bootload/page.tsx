'use client'
import styles from '../page.module.css'

export default function Page() {
    return <div className={styles.container}>
        <main className={styles.main}>
            <Text></Text>
        </main>
    </div>
}


const Text:Function = () => {
    const str = `To Leave the server open User Settings > Authorized Apps > Remove all bots > Leave server`;
    return str.split('>').map((value, index) => <h1 key={index} className={styles.title}>{value}</h1>)
}