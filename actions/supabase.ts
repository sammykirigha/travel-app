'use server';

import createClient from "../lib/supabaseServer";

export interface Credentials {
  email: string;
  password: string
}

export async function registerWithEmailAndPasword({ email, password}: Credentials) {

  const supabase = await createClient();

  // const response = await supabase.auth.signUp({
  //   email,
  //   password,
  // })

  const response = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: 'http://localhost:3000/',
    },
  });

  return JSON.stringify(response)
}