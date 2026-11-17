import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Passes the requested path to the 404 page. Unmatched URLs are rendered as
 * /_not-found, so the page cannot read the address from the router.
 */
export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);
  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
