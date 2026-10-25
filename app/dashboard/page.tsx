import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-10 text-foreground">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-muted-foreground">لوحة التحكم</p>
            <h1 className="mt-1 text-2xl font-bold">مرحباً بك في هوية</h1>
          </div>
          <div className="flex items-center gap-3">
            <Button asChild variant="outline">
              <Link href="/studio">فتح الاستوديو</Link>
            </Button>
            <Button asChild>
              <Link href="/">الرئيسية</Link>
            </Button>
          </div>
        </header>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-5">
            <p className="text-sm text-muted-foreground">المشاريع</p>
            <h2 className="mt-3 text-3xl font-bold">0</h2>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5">
            <p className="text-sm text-muted-foreground">التصاميم الجاهزة</p>
            <h2 className="mt-3 text-3xl font-bold">4</h2>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5">
            <p className="text-sm text-muted-foreground">التصديرات المتبقية</p>
            <h2 className="mt-3 text-3xl font-bold">3</h2>
          </div>
        </section>
      </div>
    </main>
  )
}
