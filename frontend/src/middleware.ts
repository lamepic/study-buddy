import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const access_token = request.cookies.get("access_token")?.value;

  if (!access_token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
}

export const config = {
  matcher: ["/dashboard", "/flashcard/:path*", "/note/:path", "/topic/:path*"],
};
