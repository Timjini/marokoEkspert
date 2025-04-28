// middleware.ts
import { NextResponse } from 'next/server';

export function middleware(request: Request) {
  const url = new URL(request.url);
  const lang = url.searchParams.get('lang') || 'en';
  const response = NextResponse.next();
  response.cookies.set('lang', lang);

  return response;
}

export const config = {
  matcher: '/:path*',
};
