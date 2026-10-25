"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AuthErrorPage() {
  return (
    <main className="flex min-h-svh items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 text-center shadow-xl">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-destructive/10 text-2xl text-destructive">
          !
        </div>
        <h1 className="text-2xl font-bold text-foreground">تعذّر تسجيل الدخول</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          حدثت مشكلة أثناء تأكيد الحساب. يرجى إعادة المحاولة أو العودة إلى صفحة تسجيل الدخول.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button asChild className="w-full sm:w-auto">
            <Link href="/login">تسجيل الدخول</Link>
          </Button>
          <Button variant="outline" asChild className="w-full sm:w-auto">
            <Link href="/">العودة للرئيسية</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
