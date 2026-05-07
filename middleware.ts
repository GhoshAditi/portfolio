import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const acceptHeader = request.headers.get('accept')
  
  // Content negotiation for AI agents requesting Markdown
  if (acceptHeader && acceptHeader.includes('text/markdown')) {
    // If requesting the home page, rewrite to AGENT.md
    if (request.nextUrl.pathname === '/') {
      return NextResponse.rewrite(new URL('/AGENT.md', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/',
}
