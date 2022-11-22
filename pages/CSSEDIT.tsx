import styles from '../app/page.module.css'
import '../app/globals.css'

export default function CSSEDIT() {
    return (
        <div className={styles.container}>
            <style id='STYLEDIV' contentEditable style={{display: 'inline', position:"absolute", top:"60%", left:"43%", minWidth:"500px", minHeight:"500px"}}>{styles.main}
            </style>
            <main className={styles.main}>
                <p>Hello</p>
            </main>
        </div>
    )
}
