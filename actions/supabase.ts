'use server';

import { NextRequest, NextResponse } from "next/server";
import { supabaseServerClient } from "../lib/supabaseServer";

export async function registerWithEmailAndPasword({
  email,
}: {
  email: string;
}) {

  const supabase = await supabaseServerClient();

  const response = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: 'http://localhost:3000/',
    },
  });

  return JSON.stringify(response)
}