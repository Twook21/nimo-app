import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/auth'; 

export async function GET() {
  try {
    const user = await getCurrentUser(); 
    
    if (!user) {
      return NextResponse.json(
        { error: 'Tidak terautentikasi' },
        { status: 401 }
      );
    }

    return NextResponse.json({ user });

  } catch (error) {
    console.error('API /me error:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    );
  }
}