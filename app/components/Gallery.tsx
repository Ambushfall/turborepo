'use client'
import Image from 'next/image';
import styles from '@app/page.module.css';
const { grid, card } = styles;


export const Gallery = ({ images }: {
    images: Array<string> | undefined;
}) => {

    return <>
        <div className={grid}>
            {images && images.map((el: string) => <Image onClick={(e) => console.log(e)} className={card} width={150} height={150} alt={'alt'} src={`/midj/${el}`} key={el} />)}
        </div>
        </>
};
