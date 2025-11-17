import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  
  // Tillad assets, favicon og login siden
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/icon') ||
    pathname.startsWith('/login') ||
    pathname.startsWith('/api/auth') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/studio')
  ) {
    return NextResponse.next()
  }

  // Tillad bots og crawlers (social media, search engines) at se siden
  const userAgent = req.headers.get('user-agent') || ''
  const isBot = /bot|crawler|spider|crawling|facebookexternalhit|LinkedInBot|Twitterbot|WhatsApp|Slackbot|SkypeUriPreview|Applebot|Googlebot|Bingbot/i.test(userAgent)
  
  if (isBot) {
    return NextResponse.next()
  }

  // Tjek om brugeren er logget ind
  const isLoggedIn = req.cookies.get('authenticated')?.value === 'true'
  
  if (!isLoggedIn) {
    // Redirect til login siden hvis ikke logget ind
    const url = req.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|icon.svg|favicon.svg).*)'],
}
