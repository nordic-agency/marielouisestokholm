import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // tillad assets, favicon og selve coming-soon siden
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/coming-soon')
  ) {
    return NextResponse.next()
  }

  // redirect alt andet til /coming-soon
  const url = req.nextUrl.clone()
  url.pathname = '/coming-soon'
  return NextResponse.rewrite(url)
}

// gælder for hele sitet
export const config = {
  matcher: ['/((?!api).*)'], // beskyt alt undtagen api
}