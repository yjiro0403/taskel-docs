import { NextResponse, NextRequest } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

let locales = ['en', 'ja']
let defaultLocale = 'ja'

function getLocale(request: NextRequest) {
    const headers = { 'accept-language': request.headers.get('accept-language') || undefined }
    const languages = new Negotiator({ headers }).languages()
        .filter((lang) => lang !== '*')

    return match(languages, locales, defaultLocale)
}

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    // Skip public files and next internal paths
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.includes('.')
    ) {
        return
    }

    // Check if there is any supported locale in the pathname
    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )

    if (pathnameIsMissingLocale) {
        const locale = getLocale(request)
        return NextResponse.redirect(
            new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
        )
    }
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next|api|favicon.ico).*)',
    ],
}
