import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const referer = request.headers.get("referer");
  const isSameSiteNavigation = referer ? new URL(referer).origin === request.nextUrl.origin : false;

  if (!isSameSiteNavigation) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/projects"
};
