import type { Metadata } from "next"
import { StudioEditor } from "@/components/studio/studio-editor"
import { createClient } from "@/lib/supabase/server"

export const metadata: Metadata = {
  title: "الاستوديو — هوية",
  description: "محرر تصميم هوية بصرية لمنصات التواصل الاجتماعي.",
}

export default async function StudioPage({
  searchParams,
}: {
  searchParams: Promise<{ project?: string }>
}) {
  const { project: projectId } = await searchParams
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  let initialProject: {
    id: string
    name: string
    canvas_json: unknown
    preset_id: string | null
  } | null = null

  if (user && projectId) {
    const { data } = await supabase
      .from("projects")
      .select("id, name, canvas_json, preset_id")
      .eq("id", projectId)
      .eq("user_id", user.id)
      .maybeSingle()
    initialProject = data ?? null
  }

  return <StudioEditor isAuthenticated={!!user} initialProject={initialProject} />
}
