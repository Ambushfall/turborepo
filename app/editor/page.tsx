'use client'
import styles from 'styles/page.module.css'


export default function CSSEDIT() {
    return (
        <div className={styles.container}>
            <style id='STYLEDIV' className={styles.main} contentEditable>
                Write CSS here
            </style>
        </div>
    )

}
