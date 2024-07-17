'use server';

import createClient from "../lib/supabaseServer";

export interface Credentials {
  email: string;
  password: string
}

export async function registerWithEmailAndPasword({ email, password}: Credentials) {

  const supabase = await createClient();

  const response = await supabase.auth.signUp({password, email});

  return JSON.stringify(response)
}

export async function loginWithEmailAndPasword({ email, password}: Credentials) {

  const supabase = await createClient();

  const response = await supabase.auth.signInWithPassword({password, email});

  return JSON.stringify(response)
}

export async function logOut({ email, password}: Credentials) {

  const supabase = await createClient();

  const {error} = await supabase.auth.signOut();

  return JSON.stringify(error)
}