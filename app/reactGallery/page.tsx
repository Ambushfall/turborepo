'use client'
import PhotoAlbum from "react-photo-album";
import NextJsImage from "./NextJsImage";
import useSWR from 'swr';


interface PhotoProps {
  src: string,
  width: number,
  height: number
}

// @ts-ignore
const fetcher = (...args: any) => fetch(...args).then((res) => res.json())


export default function ReactImageGallery() {
  const { data, error } = useSWR('/api/image', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>


  const photos: Array<PhotoProps> = []
  data.forEach((e: string) => photos.push({ src: `/midj/${e}`, width: 150, height: 150 }))
  console.log(photos)

  return (
    <>
      <PhotoAlbum layout="columns" onClick={(e)=>console.log(e)} photos={photos} renderPhoto={NextJsImage} />
    </>
  )
}
