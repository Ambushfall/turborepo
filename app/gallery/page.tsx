import React from 'react';
import styles from '../page.module.css'
import { Gallery } from './Gallery';

const { container, main, title } = styles




const GalleryPage = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/image/`)
    const imageFilenames = await response.json()

    return (
        <div className={container}>
            <div className={main}>
                <Title Name='Gallery' Title={'Proof of Concept'} />
                <Gallery images={imageFilenames} />
            </div>
        </div>
    );
};

const Title = ({ Name, Title }: { Name: string, Title: String }) => {
    return (
        <h1 className={title}>
            {Name} {Title}
        </h1>
    )
}

export default GalleryPage;