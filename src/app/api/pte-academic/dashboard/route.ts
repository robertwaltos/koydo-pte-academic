import { NextResponse } from 'next/server';
export async function GET() {
  return NextResponse.json({ exam: 'EXAM009', route: 'dashboard', status: 'ok' });
}
