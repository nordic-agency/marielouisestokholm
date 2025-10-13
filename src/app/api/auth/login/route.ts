import { NextRequest, NextResponse } from 'next/server';

// Den kode der skal bruges for at komme ind
const ACCESS_CODE = 'movement2024';

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json();

    if (code === ACCESS_CODE) {
      // Opret en cookie der varer i 24 timer
      const response = NextResponse.json({ success: true });
      response.cookies.set('authenticated', 'true', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 24 * 60 * 60, // 24 timer
      });
      
      return response;
    } else {
      return NextResponse.json({ success: false }, { status: 401 });
    }
         } catch {
           return NextResponse.json({ success: false }, { status: 500 });
         }
}
