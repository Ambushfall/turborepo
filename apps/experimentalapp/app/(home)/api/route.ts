import { NextResponse, NextRequest } from 'next/server';
import data from 'json/manifest.json'

export function GET(request: NextRequest) {
  let forwarded = request.headers.get('x-forwarded-for');
  let ip = typeof forwarded === 'string' ? forwarded.split(/, /)[0] : request.ip;
  
  console.log("Client IP:", ip);
  return NextResponse.json(data)
}
