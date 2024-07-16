'use server';

import { type CookieOptions, createServerClient, serializeCookieHeader} from '@supabase/ssr';
import { NextApiRequest, NextApiResponse } from 'next';
import { cookies } from 'next/headers';

export async function supabaseServerClient() {
  const cookieStore = cookies();
  let req:NextApiRequest;
  let res:NextApiResponse

  return createServerClient(
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
}