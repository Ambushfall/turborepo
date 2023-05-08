import { getRepos } from 'utils/getrepos';
import { NextResponse, NextRequest } from 'next/server';


export async function GET(request: NextRequest, {
    params: { userName },
}: {
    params: { userName: string };
}) {
    const data = await getRepos(userName)
    return NextResponse.json(data)
}
