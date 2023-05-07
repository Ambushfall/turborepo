import { getImages } from '@utils/getImages';
import { NextResponse, NextRequest } from 'next/server';
// import data from 'manifest.json'


export async function GET(request: NextRequest) {
    const images = await getImages()
    return NextResponse.json(images)
}
