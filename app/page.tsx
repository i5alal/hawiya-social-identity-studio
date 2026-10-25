import { LandingHeader } from '@/components/landing/landing-header'
import { Hero } from '@/components/landing/hero'
import { Features } from '@/components/landing/features'
import { LandingFooter } from '@/components/landing/landing-footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <LandingHeader />
      <Hero />
      <Features />
      <LandingFooter />
    </main>
  )
}
