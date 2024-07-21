'use server';

import createClient from "../lib/supabaseServer";
import { USER_ROLES } from "../types/roles";

export interface Credentials {
  email: string;
  password: string;
  full_name: string
}

export async function registerWithEmailAndPasword({ email, password, full_name }: Credentials) {

  const supabase = await createClient();

  const response = await supabase.auth.signUp({ password, email });

  const { data: { user, session } } = response;

  if (user !== null && session !== null) {
    const { data, error } = await supabase.from("users").insert({
      email: user?.email,
      name: full_name,
      role: USER_ROLES.USER,
      created_at: new Date().toISOString(),
      auth_id: user?.id
    })

    if (error) {
      throw new Error("An error occurred while creating a user")
    }
  }

  return JSON.stringify(response)
}

export async function loginWithEmailAndPasword({ email, password }: Credentials) {

  const supabase = await createClient();

  const response = await supabase.auth.signInWithPassword({ password, email });

  return JSON.stringify(response)
}

export async function logOut({ email, password }: Credentials) {

  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  return JSON.stringify(error)
}