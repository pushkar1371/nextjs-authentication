import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  const isPublicPath = path === '/Login' || path === '/signup' || path === '/verifyemail'

  const token = request.cookies.get('token')?.value || ''

  if(isPublicPath && token) {
    return NextResponse.redirect(new URL('/', request.nextUrl))
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/Login', request.nextUrl))
  }

  //if no if statement satisfy the route will be allowed.
    
}

 
// See "Matching Paths" below to learn more
//only this path will get middleware attached
export const config = {
  matcher: [
    '/',
    '/profile',
    '/Login',
    '/signup',
    '/verifyemail'
  ]
}