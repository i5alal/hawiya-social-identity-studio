import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-primary/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-20 left-1/4 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 sm:py-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-accent" />
          استوديو الهوية للمنصات الاجتماعية
        </span>

        <h1 className="mt-8 text-balance text-5xl font-extrabold leading-tight sm:text-7xl">
          هوية{' '}
          <span className="text-accent" aria-hidden="true">
            ✨
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
          صمّم هوية بصرية متناسقة لكل منصاتك الاجتماعية في مكان واحد. محرّر احترافي، هوية علامتك الجاهزة، مقاسات دقيقة، وتصدير فوري بجودة عالية.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            nativeButton={false}
            render={<Link href="/studio" />}
            size="lg"
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto"
          >
            ابدأ مجاناً
            <ArrowLeft className="size-4" />
          </Button>
          <Button
            nativeButton={false}
            render={<a href="#features" />}
            size="lg"
            variant="outline"
            className="w-full border-border bg-transparent hover:bg-card sm:w-auto"
          >
            اكتشف الميزات
          </Button>
        </div>
      </div>
    </section>
  )
}
