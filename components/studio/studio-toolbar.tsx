'use client'

import {
  Type,
  Square,
  Circle,
  Undo2,
  Redo2,
  Trash2,
  type LucideIcon,
} from 'lucide-react'
import { cn } from '@/lib/utils'

type ToolButtonProps = {
  icon: LucideIcon
  label: string
  onClick: () => void
  disabled?: boolean
}

function ToolButton({ icon: Icon, label, onClick, disabled }: ToolButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={label}
      aria-label={label}
      className={cn(
        'flex w-full flex-col items-center gap-1 rounded-lg py-2.5 text-xs font-medium transition-colors',
        'text-muted-foreground hover:bg-primary/20 hover:text-foreground',
        'disabled:pointer-events-none disabled:opacity-40',
      )}
    >
      <Icon className="size-5" />
      <span>{label}</span>
    </button>
  )
}

type StudioToolbarProps = {
  onAddText: () => void
  onAddRect: () => void
  onAddCircle: () => void
  onUndo: () => void
  onRedo: () => void
  onDelete: () => void
  canUndo: boolean
  canRedo: boolean
  hasSelection: boolean
}

export function StudioToolbar({
  onAddText,
  onAddRect,
  onAddCircle,
  onUndo,
  onRedo,
  onDelete,
  canUndo,
  canRedo,
  hasSelection,
}: StudioToolbarProps) {
  return (
    <aside className="flex w-20 shrink-0 flex-col gap-1 border-l border-border bg-sidebar p-2">
      <p className="px-1 pb-1 pt-2 text-center text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
        إضافة
      </p>
      <ToolButton icon={Type} label="نص" onClick={onAddText} />
      <ToolButton icon={Square} label="مستطيل" onClick={onAddRect} />
      <ToolButton icon={Circle} label="دائرة" onClick={onAddCircle} />

      <div className="my-2 h-px bg-border" />

      <ToolButton icon={Undo2} label="تراجع" onClick={onUndo} disabled={!canUndo} />
      <ToolButton icon={Redo2} label="إعادة" onClick={onRedo} disabled={!canRedo} />
      <ToolButton icon={Trash2} label="حذف" onClick={onDelete} disabled={!hasSelection} />
    </aside>
  )
}
