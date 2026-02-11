import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ALLOWED_PATH = "/legal/IntroductionAgreement.pdf";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // allow the PDF and Next.js internals
  if (
    pathname === ALLOWED_PATH ||
    pathname.startsWith("/_next") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml"
  ) {
    return NextResponse.next();
  }

  // If user visits the main domain "/", send them to the PDF
  if (pathname === "/") {
    const url = req.nextUrl.clone();
    url.pathname = ALLOWED_PATH;
    return NextResponse.redirect(url);
  }

  // Block everything else
  return new NextResponse("Not Found", { status: 404 });
}

export const config = {
  matcher: ["/:path*"],
};