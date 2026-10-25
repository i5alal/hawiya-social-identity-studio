'use client'

import { useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
import { PropertiesPanel, type ActiveProps } from '@/components/studio/properties-panel'
import { SizeSelector } from '@/components/studio/size-selector'
import { PLATFORM_SIZES, type PlatformSize } from '@/lib/platform-sizes'
import { cn } from '@/lib/utils'

export type StudioEditorProps = {
  isAuthenticated?: boolean
  initialProject?: {
    id: string
    name: string
    canvas_json: unknown
    preset_id: string | null
  } | null
}

type CanvasItem = {
  id: string
  type: 'text' | 'rect' | 'circle'
  label: string
  x: number
  y: number
  width?: number
  height?: number
  fill?: string
  fontSize?: number
  fontFamily?: string
}

export function StudioEditor({ isAuthenticated = false, initialProject }: StudioEditorProps) {
  const [activeSize, setActiveSize] = useState<PlatformSize>(PLATFORM_SIZES[0])
  const [background, setBackground] = useState('#12091F')
  const [items, setItems] = useState<CanvasItem[]>([
    { id: 'item-1', type: 'text', label: 'هوية', x: 120, y: 120, fill: '#F3ECFF', fontSize: 52, fontFamily: 'Noto Kufi Arabic' },
    { id: 'item-2', type: 'rect', label: 'لوحة', x: 70, y: 200, width: 240, height: 120, fill: '#5A2D8C' },
    { id: 'item-3', type: 'circle', label: 'حلقة', x: 340, y: 120, width: 120, height: 120, fill: '#E8B043' },
  ])
  const [selectedId, setSelectedId] = useState<string>('item-1')

  const selectedItem = useMemo(
    () => items.find((item) => item.id === selectedId) ?? null,
    [items, selectedId],
  )

  const activeProps: ActiveProps = {
    hasSelection: !!selectedItem,
    type: selectedItem?.type ?? null,
    fill: selectedItem?.fill ?? '#F3ECFF',
    fontFamily: selectedItem?.fontFamily ?? 'Noto Kufi Arabic',
    fontSize: selectedItem?.fontSize ?? 32,
  }

  const addText = () => {
    const id = `text-${Date.now()}`
    setItems((current) => [
      ...current,
      {
        id,
        type: 'text',
        label: 'نص جديد',
        x: 160,
        y: 160,
        fill: '#F3ECFF',
        fontSize: 34,
        fontFamily: 'Noto Kufi Arabic',
      },
    ])
    setSelectedId(id)
  }

  const addRect = () => {
    const id = `rect-${Date.now()}`
    setItems((current) => [
      ...current,
      {
        id,
        type: 'rect',
        label: 'مستطيل',
        x: 180,
        y: 220,
        width: 220,
        height: 120,
        fill: '#8B5CC4',
      },
    ])
    setSelectedId(id)
  }

  const addCircle = () => {
    const id = `circle-${Date.now()}`
    setItems((current) => [
      ...current,
      {
        id,
        type: 'circle',
        label: 'دائرة',
        x: 260,
        y: 180,
        width: 120,
        height: 120,
        fill: '#E8B043',
      },
    ])
    setSelectedId(id)
  }

  const updateSelected = (update: Partial<CanvasItem>) => {
    if (!selectedId) return
    setItems((current) =>
      current.map((item) => (item.id === selectedId ? { ...item, ...update } : item)),
    )
  }

  const handleFillChange = (color: string) => {
    updateSelected({ fill: color })
  }

  const handleFontSizeChange = (value: number) => {
    updateSelected({ fontSize: value })
  }

  const handleFontFamilyChange = (value: string) => {
    updateSelected({ fontFamily: value })
  }

  const handleBackgroundChange = (color: string) => {
    setBackground(color)
  }

  const removeSelected = () => {
    if (!selectedId) return
    setItems((current) => current.filter((item) => item.id !== selectedId))
    setSelectedId('')
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="flex items-center justify-between border-b border-border bg-sidebar px-4 py-3">
        <div>
          <p className="text-xs text-muted-foreground">هوية / استوديو</p>
          <h1 className="text-lg font-bold">محرر الهوية</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            {isAuthenticated ? 'متصل' : 'زائر'}
          </Button>
          <Button size="sm">حفظ المشروع</Button>
        </div>
      </div>

      <SizeSelector sizes={PLATFORM_SIZES} activeId={activeSize.id} onSelect={setActiveSize} />

      <div className="flex min-h-[calc(100vh-138px)] overflow-hidden">
        <PropertiesPanel
          props={activeProps}
          onFillChange={handleFillChange}
          onFontSizeChange={handleFontSizeChange}
          onFontFamilyChange={handleFontFamilyChange}
          onBackgroundChange={handleBackgroundChange}
        />

        <section className="flex flex-1 flex-col bg-background p-4">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold">{activeSize.label}</p>
              <p className="text-xs text-muted-foreground">{activeSize.width}×{activeSize.height}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">تراجع</Button>
              <Button variant="outline" size="sm">إعادة</Button>
            </div>
          </div>

          <div className="flex flex-1 items-center justify-center overflow-auto rounded-2xl border border-border bg-card p-6">
            <div
              className="relative overflow-hidden rounded-xl border border-border shadow-2xl"
              style={{
                width: activeSize.width / 3,
                height: activeSize.height / 3,
                backgroundColor: background,
              }}
            >
              {items.map((item) => {
                const isSelected = item.id === selectedId
                if (item.type === 'text') {
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelectedId(item.id)}
                      className={cn(
                        'absolute flex items-center justify-center rounded-md border px-2 py-1 text-center',
                        isSelected ? 'border-accent ring-2 ring-accent/40' : 'border-transparent',
                      )}
                      style={{
                        left: item.x,
                        top: item.y,
                        color: item.fill,
                        fontSize: item.fontSize,
                        fontFamily: item.fontFamily,
                        background: 'transparent',
                      }}
                    >
                      {item.label}
                    </button>
                  )
                }

                if (item.type === 'rect') {
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelectedId(item.id)}
                      className={cn(
                        'absolute rounded-md border',
                        isSelected ? 'border-accent ring-2 ring-accent/40' : 'border-transparent',
                      )}
                      style={{
                        left: item.x,
                        top: item.y,
                        width: item.width,
                        height: item.height,
                        backgroundColor: item.fill,
                      }}
                    />
                  )
                }

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedId(item.id)}
                    className={cn(
                      'absolute rounded-full border',
                      isSelected ? 'border-accent ring-2 ring-accent/40' : 'border-transparent',
                    )}
                    style={{
                      left: item.x,
                      top: item.y,
                      width: item.width,
                      height: item.height,
                      backgroundColor: item.fill,
                    }}
                  />
                )
              })}
            </div>
          </div>
        </section>

        <aside className="flex w-20 shrink-0 flex-col gap-1 border-l border-border bg-sidebar p-2">
          <p className="px-1 pb-1 pt-2 text-center text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
            إضافة
          </p>
          <button type="button" onClick={addText} className="flex w-full flex-col items-center gap-1 rounded-lg py-2.5 text-xs font-medium text-muted-foreground hover:bg-primary/20 hover:text-foreground">
            نص
          </button>
          <button type="button" onClick={addRect} className="flex w-full flex-col items-center gap-1 rounded-lg py-2.5 text-xs font-medium text-muted-foreground hover:bg-primary/20 hover:text-foreground">
            مستطيل
          </button>
          <button type="button" onClick={addCircle} className="flex w-full flex-col items-center gap-1 rounded-lg py-2.5 text-xs font-medium text-muted-foreground hover:bg-primary/20 hover:text-foreground">
            دائرة
          </button>
          <div className="my-2 h-px bg-border" />
          <button type="button" onClick={() => {}} className="flex w-full flex-col items-center gap-1 rounded-lg py-2.5 text-xs font-medium text-muted-foreground disabled:pointer-events-none disabled:opacity-40">
            تراجع
          </button>
          <button type="button" onClick={() => {}} className="flex w-full flex-col items-center gap-1 rounded-lg py-2.5 text-xs font-medium text-muted-foreground disabled:pointer-events-none disabled:opacity-40">
            إعادة
          </button>
          <button type="button" onClick={removeSelected} disabled={!selectedId} className="flex w-full flex-col items-center gap-1 rounded-lg py-2.5 text-xs font-medium text-muted-foreground hover:bg-primary/20 hover:text-foreground disabled:pointer-events-none disabled:opacity-40">
            حذف
          </button>
        </aside>
      </div>
    </main>
  )
}
