import type {NextFetchEvent, NextRequest} from 'next/server'
import {NextResponse} from 'next/server'
import {cdnDomain} from '../../data/portfolio'
import parser from 'ua-parser-js'

// RegExp for public files
const PUBLIC_FILE = /\.(.*)$/
const csp = `
  default-src 'self';
  script-src 'self' 'unsafe-eval';
  child-src 'self' https://${cdnDomain};
  style-src 'self' *.googleapis.com 'unsafe-inline' 'unsafe-eval';
  font-src 'self' fonts.gstatic.com;
  img-src 'self' data: https: blob: https://www.googletagmanager.com https://${cdnDomain};
  media-src 'self' https://${cdnDomain};
  worker-src 'self' *.youtube.com *.google.com *.twitter.com;
  connect-src *;
  object-src 'none';
  form-action 'self';
  frame-ancestors 'none';
  base-uri 'none';
`

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const response = NextResponse.next()
  response.headers.set('Content-Security-Policy', csp.replace(/\n/g, ''))

  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload'
  )
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-DNS-Prefetch-Control', 'on')
  response.headers.set(
    'Permissions-Policy',
    'geolocation=(self), microphone=()'
  )

  // https://github.com/vercel/examples/blob/main/edge-functions/user-agent-based-rendering/pages/_middleware.ts
  // Clone the URL
  const url = req.nextUrl.clone()

  // Skip public files
  if (PUBLIC_FILE.test(url.pathname)) return

  // Parse user agent
  const ua = parser(req.headers.get('user-agent')!)

  url.pathname = ua.device.type === 'mobile' ? `mobile` : `desktop`

  return NextResponse.rewrite(url)
}
