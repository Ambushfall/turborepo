import 'server-only';
import { promises as fs } from 'fs'
import path from 'path'


export const getImages = async () => {
    // .........

    try {
        const imageDirectory = path.join(process.cwd(), '/public/midj');
        const imageFilenames = await fs.readdir(imageDirectory)

        return imageFilenames
    } catch (error: any) {
        
    }
}