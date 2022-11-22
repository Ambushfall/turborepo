import styles from '../app/page.module.css'
import '../app/globals.css'

export default function bonjour(){
    return (<>
        <div className={styles.container}>
          <main className={styles.main}>
            <p>Hello</p>
          </main>
        </div>
        </>
      )
}