"use server"

import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

export async function signInAction(formData: FormData) {
  const email = String(formData.get("email") || "").trim()
  const password = String(formData.get("password") || "")
  const next = String(formData.get("next") || "/dashboard")

  if (!email || !password) {
    redirect(`/login?error=${encodeURIComponent("الرجاء إدخال البريد وكلمة المرور")}&next=${encodeURIComponent(next)}`)
  }

  const supabase = await createClient()
  const { error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    redirect(`/login?error=${encodeURIComponent(error.message)}&next=${encodeURIComponent(next)}`)
  }

  redirect(next)
}

export async function signUpAction(formData: FormData) {
  const email = String(formData.get("email") || "").trim()
  const password = String(formData.get("password") || "")
  const displayName = String(formData.get("displayName") || "").trim()
  const next = String(formData.get("next") || "/dashboard")

  if (!email || !password) {
    redirect(`/signup?error=${encodeURIComponent("الرجاء إدخال البريد وكلمة المرور")}&next=${encodeURIComponent(next)}`)
  }

  const supabase = await createClient()
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo:
        process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL ??
        `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/auth/callback`,
      data: { display_name: displayName || email.split("@")[0] },
    },
  })

  if (error) {
    redirect(`/signup?error=${encodeURIComponent(error.message)}&next=${encodeURIComponent(next)}`)
  }

  redirect(`/signup?success=1&next=${encodeURIComponent(next)}`)
}

export async function signOutAction() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect("/login")
}
