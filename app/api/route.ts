import { NextResponse } from 'next/server';
import data from '../../public/manifest.json'

export function GET() {
  return NextResponse.json({ data })
}