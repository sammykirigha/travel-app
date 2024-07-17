import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { type CookieOptions, createServerClient, serializeCookieHeader } from '@supabase/ssr';

export async function GET(req: any, res: any) {
  const { searchParams, origin } = new URL(req.url);
  const code = searchParams.get('code');
  // if "next" is in param, use it as the redirect URL
  const next = searchParams.get('next') ?? '/';

  if (code) {
    const cookieStore = cookies();
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
            getAll() {
              return Object.keys(req.cookies).map((name) => ({ name, value: req.cookies[name] || '' }))
            },
            setAll(cookiesToSet) {
              res.setHeader(
                'Set-Cookie',
                cookiesToSet.map(({ name, value, options }) => serializeCookieHeader(name, value, options))
              )
            },
          },
      }
    );
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(`${origin}`); // changed
    }
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}