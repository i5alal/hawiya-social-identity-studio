export function LandingFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:px-6">
        <p className="flex items-center gap-2">
          <span className="font-bold text-foreground">هوية</span>
          <span className="text-accent" aria-hidden="true">
            ✨
          </span>
        </p>
        <p>© {new Date().getFullYear()} هوية — استوديو الهوية للمنصات الاجتماعية</p>
      </div>
    </footer>
  )
}
