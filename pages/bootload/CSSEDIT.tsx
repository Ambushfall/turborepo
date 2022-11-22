import styles from '../../app/page.module.css'

export default function CSSEDIT() {
    return (
        <div className={styles.container}>
            <style id='STYLEDIV' contentEditable style={{display: 'inline'}}>{styles.main}
            </style>
            <main className={styles.main}>
                <p>Hello</p>
            </main>
        </div>
    )
}