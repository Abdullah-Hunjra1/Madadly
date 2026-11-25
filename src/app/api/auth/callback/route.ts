import { scalekit } from "@/src/lib/scalekit";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const code = searchParams.get('code');
    const redirectUri = `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback`;
    if (!code) {
        return NextResponse.json({ error: 'Authorization code not found' }, { status: 400 });
    }
    const session = await scalekit.authenticateWithCode(code, redirectUri);
    const response = NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}`);
    response.cookies.set('access_token', session.accessToken, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7, // 7 days,
        secure: true, // Set to true in production
        path: '/',
    });
    return response;
}