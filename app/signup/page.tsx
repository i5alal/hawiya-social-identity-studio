import Link from "next/link"
import { redirect } from "next/navigation"
import { signUpAction } from "@/app/auth/actions"
import { createClient } from "@/lib/supabase/server"
import { Button } from "@/components/ui/button"

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; success?: string; next?: string }>
}) {
  const { error, success, next } = await searchParams
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (user) redirect(next || "/dashboard")

  return (
    <main className="flex min-h-svh items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-xl">
        <div className="mb-8 text-center">
          <Link href="/" className="text-2xl font-bold text-foreground">
            {"هوية "}<span className="text-accent">{"✨"}</span>
          </Link>
          <h1 className="mt-6 text-xl font-bold text-foreground">إنشاء حساب</h1>
          <p className="mt-2 text-sm text-muted-foreground">ابدأ رحلتك في تصميم هوية علامتك</p>
        </div>

        {error ? (
          <div className="mb-4 rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
            {error}
          </div>
        ) : null}

        {success ? (
          <div className="mb-4 rounded-lg border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-accent">
            تم إنشاء الحساب! تحقق من بريدك لتأكيد الحساب ثم سجّل الدخول.
          </div>
        ) : null}

        <form action={signUpAction} className="flex flex-col gap-4">
          <input type="hidden" name="next" value={next || "/dashboard"} />
          <div className="flex flex-col gap-2">
            <label htmlFor="displayName" className="text-sm font-medium text-foreground">
              الاسم
            </label>
            <input
              id="displayName"
              name="displayName"
              type="text"
              placeholder="اسمك"
              className="rounded-lg border border-input bg-secondary px-4 py-2.5 text-foreground outline-none focus:border-ring focus:ring-2 focus:ring-ring/40"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              البريد الإلكتروني
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              dir="ltr"
              placeholder="you@example.com"
              className="rounded-lg border border-input bg-secondary px-4 py-2.5 text-left text-foreground outline-none focus:border-ring focus:ring-2 focus:ring-ring/40"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm font-medium text-foreground">
              كلمة المرور
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              minLength={6}
              dir="ltr"
              placeholder="••••••••"
              className="rounded-lg border border-input bg-secondary px-4 py-2.5 text-left text-foreground outline-none focus:border-ring focus:ring-2 focus:ring-ring/40"
            />
          </div>
          <Button
            type="submit"
            size="lg"
            className="mt-2 w-full bg-accent text-accent-foreground hover:bg-accent/90"
          >
            إنشاء الحساب
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          {"لديك حساب بالفعل؟ "}
          <Link href="/login" className="font-medium text-accent hover:underline">
            سجّل الدخول
          </Link>
        </p>
      </div>
    </main>
  )
}
