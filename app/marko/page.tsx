
import Image from 'next/image'
// import GradientBG from './hero'


export default function Page() {
    return (<>
        <ComponentOne />
        <ComponentTwo />
        {/* <ComponentThree /> */}
    </>)
}


const ComponentOne = () => {
    return (
        <>
            <div className='py-0 p-8'>
                <main className='min-h-screen flex flex-col justify-center items-center p-16 flex-1'>
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

