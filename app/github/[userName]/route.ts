import { getRepos } from '@utils/.';
import { NextResponse, NextRequest } from 'next/server';


export async function GET(request: NextRequest, {
    params: { userName },
}: {
    params: { userName: string };
}) {
    return NextResponse.json(await getRepos(userName))
}
