import { NextResponse, NextRequest } from 'next/server';
import data from 'json/manifest.json'

export function GET(request: NextRequest) {

  return NextResponse.json(data)
}
