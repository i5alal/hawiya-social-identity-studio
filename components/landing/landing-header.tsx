import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold">
          <span>هوية</span>
          <span className="text-accent" aria-hidden="true">
            ✨
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#features" className="transition-colors hover:text-foreground">
            الميزات
          </a>
          <Link href="/studio" className="transition-colors hover:text-foreground">
            الاستوديو
          </Link>
        </nav>

        <Button
          nativeButton={false}
          render={<Link href="/studio" />}
          className="bg-accent text-accent-foreground hover:bg-accent/90"
        >
          ابدأ مجاناً
        </Button>
      </div>
    </header>
  )
}
