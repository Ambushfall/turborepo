import { NextResponse } from 'next/server';
import data from '../../manifest.json'

export function GET() {
  return NextResponse.json({ data })
}