'use client'

import { type PlatformSize } from '@/lib/platform-sizes'
import { cn } from '@/lib/utils'

type SizeSelectorProps = {
  sizes: PlatformSize[]
  activeId: string
  onSelect: (size: PlatformSize) => void
}

export function SizeSelector({ sizes, activeId, onSelect }: SizeSelectorProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto border-b border-border bg-sidebar px-4 py-2.5">
      <span className="shrink-0 text-xs font-semibold text-muted-foreground">المقاس:</span>
      {sizes.map((s) => {
        const active = s.id === activeId
        return (
          <button
            key={s.id}
            type="button"
            onClick={() => onSelect(s)}
            className={cn(
              'flex shrink-0 flex-col items-start rounded-lg border px-3 py-1.5 text-right transition-colors',
              active
                ? 'border-accent bg-primary/25 text-foreground'
                : 'border-border text-muted-foreground hover:border-primary/50 hover:text-foreground',
            )}
          >
            <span className="text-xs font-semibold">{s.label}</span>
            <span className="text-[10px] opacity-70">{s.width}×{s.height}</span>
          </button>
        )
      })}
    </div>
  )
}
