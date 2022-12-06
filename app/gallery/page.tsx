import { promises as fs } from 'fs'
import path from 'path'
import React from 'react';
import Image from 'next/image'
import styles from '../page.module.css'

const { container, main, title, grid, card } = styles




const GalleryPage = async () => {
    const imageDirectory = path.join(process.cwd(), '/public/midj');
    const imageFilenames = await fs.readdir(imageDirectory)
    // console.log(imageFilenames)

    return (
        <div className={container}>
            <div className={main}>
                <Title Name='Gallery' Title={'Proof of Concept'} />
                <Gallery images={imageFilenames} />

            </div>
        </div>
    );
};

const Gallery = ({ images }: { images: Array<string>; }) => {
    return <div className={grid}>
        {images.map((el: string) => <Image className={card} width={150} height={150} alt={'alt'} src={`/midj/${el}`} key={el} />)}
    </div>
}

const Title = ({ Name, Title }: { Name: string, Title: String }) => {
    return (
        <h1 className={title}>
            {Name} {Title}
        </h1>
    )
}

export default GalleryPage;