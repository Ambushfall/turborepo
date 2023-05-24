'use client'
import Image, { ImageProps } from 'next/image'
import styles from 'styles/page.module.css'
const { grid, card } = styles

export const Gallery = ({ images, onClick }: { images: Array<string> | undefined, onClick?: ImageProps["onClick"] }) => {
  return (
    <>
      <div className={grid}>
        {images &&
          images.map((el: string) => (
            <Image
              className={card}
              width={150}
              height={150}
              alt={'alt'}
              src={`/midj/${el}`}
              key={el}
              onClick={onClick ? onClick : undefined}
            />
          ))}
      </div>
    </>
  )
}
