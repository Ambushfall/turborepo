
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { promises as fs } from 'fs'
import path from 'path'


type FileNames = string[]


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<FileNames>
) {

    const imageDirectory = path.join(process.cwd(), '/public/midj');
    const imageFilenames = await fs.readdir(imageDirectory)
    res.status(200).json(imageFilenames);
}
