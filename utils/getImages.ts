import { promises as fs } from 'fs'
import path from 'path'

type ImageArray = string[] | undefined;

/**
 * 
 * 
 * @returns {Promise<ImageArray>}
 */
export const getImages = async (): Promise<ImageArray> => {
    try {
        /* Grabs path to public/midj */
        const imageDirectory = path.join(process.cwd(), '/public/midj');

        /* Reads the content of the midj dir and returns an array of strings */
        const imageFilenames: ImageArray = await fs.readdir(imageDirectory)

        return imageFilenames
    } catch (error: any) {
        console.warn(error)
    }
}