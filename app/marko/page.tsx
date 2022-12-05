
import Image from 'next/image'
// import GradientBG from './hero'
import styles from '../page.module.css'


export default function Page() {
    return (<>
        <ComponentOne />
        <ComponentTwo />
    </>)
}


const ComponentOne = () => {
    return (
        <>
            <div className={styles.container}>
                <main className={styles.main}>
                    <Image alt='Test' src={'/frame5.svg'} width={150} height={150} />
                </main>
            </div>
        </>
    )
}

const ComponentTwo = () => {
    return (
        <>
            {/* <GradientBG/> */}
        </>
    )
}

const ComponentThree = () => {
    return (
        <>
            <Image alt='Test' src={'/frame5.svg'} width={150} height={150} />
        </>
    )
}

