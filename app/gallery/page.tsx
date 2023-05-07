import { promises as fs } from 'fs'
import path from 'path'

import styles from '@app/page.module.css'
import { Gallery } from '@components/Gallery';
import { twtitle } from '@tw/styles';


const { container, main, title } = styles

// export const revalidate = 10;
export const dynamic = 'force-static';


export default async function Page() {

    const imageDirectory = path.join(process.cwd(), '/public/midj');

    /* Reads the content of the midj dir and returns an array of strings */
    const imageFilenames = await fs.readdir(imageDirectory)

    return (
        <>
            <div className={container}>
                <div className={main}>
                    <Title Name='Gallery' Title={'Proof of Concept'} />
                    <Gallery images={imageFilenames} />
                </div>
            </div>
        </>
    );
};

const Title = ({ Name, Title }: { Name: string, Title: String }) => {
    return (
        <h1 className={twtitle}>
            {Name} {Title}
        </h1>
    )
}