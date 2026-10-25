"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export type SaveProjectResult =
  | { ok: true; id: string }
  | { ok: false; error: "unauthenticated" | "db"; message?: string }

export async function saveProject(input: {
  id?: string | null
  name: string
  canvasJson: unknown
  presetId?: string | null
}): Promise<SaveProjectResult> {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) return { ok: false, error: "unauthenticated" }

  const name = input.name?.trim() || "تصميم بدون عنوان"
  const now = new Date().toISOString()

  if (input.id) {
    const { data, error } = await supabase
      .from("projects")
      .update({
        name,
        canvas_json: input.canvasJson,
        preset_id: input.presetId ?? null,
        updated_at: now,
      })
      .eq("id", input.id)
      .eq("user_id", user.id)
      .select("id")
      .single()

    if (error) return { ok: false, error: "db", message: error.message }
    revalidatePath("/dashboard")
    return { ok: true, id: data.id }
  }

  const { data, error } = await supabase
    .from("projects")
    .insert({
      user_id: user.id,
      name,
      canvas_json: input.canvasJson,
      preset_id: input.presetId ?? null,
      updated_at: now,
    })
    .select("id")
    .single()

  if (error) return { ok: false, error: "db", message: error.message }
  revalidatePath("/dashboard")
  return { ok: true, id: data.id }
}

export type ExportCreditResult =
  | { ok: true; quality: "high" | "low"; remaining: number; isPro: boolean }
  | { ok: false; error: "unauthenticated" | "limit" | "db"; message?: string }

export async function consumeExportCredit(): Promise<ExportCreditResult> {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return { ok: false, error: "unauthenticated" }

  let { data: credit, error } = await supabase
    .from("credits")
    .select("free_exports_used, free_exports_limit, is_pro")
    .eq("user_id", user.id)
    .maybeSingle()

  if (error) return { ok: false, error: "db", message: error.message }

  if (!credit) {
    const { data: inserted, error: insErr } = await supabase
      .from("credits")
      .insert({ user_id: user.id })
      .select("free_exports_used, free_exports_limit, is_pro")
      .single()
    if (insErr) return { ok: false, error: "db", message: insErr.message }
    credit = inserted
  }

  if (credit.is_pro) {
    return { ok: true, quality: "high", remaining: Infinity, isPro: true }
  }

  const used = credit.free_exports_used ?? 0
  const limit = credit.free_exports_limit ?? 3

  if (used >= limit) {
    return { ok: false, error: "limit" }
  }

  const { error: updErr } = await supabase
    .from("credits")
    .update({ free_exports_used: used + 1, updated_at: new Date().toISOString() })
    .eq("user_id", user.id)

  if (updErr) return { ok: false, error: "db", message: updErr.message }

  return { ok: true, quality: "low", remaining: limit - (used + 1), isPro: false }
}
