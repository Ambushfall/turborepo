import { getImages } from '@utils/getImages';
import { NextResponse } from 'next/server';

/**
 * Uses Util function to query public/midj folder for a list of all image names
 * @function getImages
 * @returns Promise<string[] | undefined> in JSON Format
 * 
 */
export async function GET(): Promise<NextResponse> {
    const images = await getImages()
    return NextResponse.json(images)
}
