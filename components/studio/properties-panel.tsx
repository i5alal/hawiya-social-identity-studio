'use client'

export type ActiveProps = {
  hasSelection: boolean
  type: string | null
  fill: string
  fontFamily: string
  fontSize: number
}

const FONTS = ['Noto Kufi Arabic', 'Arial', 'Tahoma', 'Georgia', 'Times New Roman']

const SWATCHES = ['#12091F', '#5A2D8C', '#8B5CC4', '#E8B043', '#F3ECFF', '#ffffff', '#000000', '#E45858']

type PropertiesPanelProps = {
  props: ActiveProps
  onFillChange: (color: string) => void
  onFontSizeChange: (value: number) => void
  onFontFamilyChange: (value: string) => void
  onBackgroundChange: (color: string) => void
}

export function PropertiesPanel({
  props,
  onFillChange,
  onFontSizeChange,
  onFontFamilyChange,
  onBackgroundChange,
}: PropertiesPanelProps) {
  const isText = props.type === 'textbox' || props.type === 'i-text'

  return (
    <aside className="flex w-72 shrink-0 flex-col gap-6 overflow-y-auto border-r border-border bg-sidebar p-4">
      <div>
        <h2 className="text-sm font-bold">الخصائص</h2>
        <p className="mt-1 text-xs text-muted-foreground">
          {props.hasSelection ? 'عدّل العنصر المحدد' : 'حدّد عنصراً على اللوحة لتعديله'}
        </p>
      </div>

      {props.hasSelection && (
        <>
          <section className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-muted-foreground">اللون</label>
            <div className="grid grid-cols-8 gap-1.5">
              {SWATCHES.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => onFillChange(c)}
                  aria-label={`لون ${c}`}
                  className="size-6 rounded-md ring-1 ring-border transition-transform hover:scale-110"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
            <div className="mt-1 flex items-center gap-2">
              <input
                type="color"
                value={props.fill}
                onChange={(e) => onFillChange(e.target.value)}
                className="h-8 w-10 cursor-pointer rounded border border-border bg-transparent"
                aria-label="اختيار لون مخصص"
              />
              <span className="text-xs text-muted-foreground">{props.fill.toUpperCase()}</span>
            </div>
          </section>

          {isText && (
            <>
              <section className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-muted-foreground">الخط</label>
                <select
                  value={props.fontFamily}
                  onChange={(e) => onFontFamilyChange(e.target.value)}
                  className="rounded-lg border border-border bg-input px-3 py-2 text-sm outline-none focus:border-primary"
                >
                  {FONTS.map((f) => (
                    <option key={f} value={f}>
                      {f}
                    </option>
                  ))}
                </select>
              </section>

              <section className="flex flex-col gap-2">
                <label className="flex items-center justify-between text-xs font-semibold text-muted-foreground">
                  <span>حجم الخط</span>
                  <span className="text-foreground">{props.fontSize}px</span>
                </label>
                <input
                  type="range"
                  min={8}
                  max={200}
                  value={props.fontSize}
                  onChange={(e) => onFontSizeChange(Number(e.target.value))}
                  className="accent-accent"
                />
              </section>
            </>
          )}
        </>
      )}

      <div className="mt-auto border-t border-border pt-4">
        <label className="text-xs font-semibold text-muted-foreground">لون خلفية اللوحة</label>
        <div className="mt-2 grid grid-cols-8 gap-1.5">
          {SWATCHES.map((c) => (
            <button
              key={`bg-${c}`}
              type="button"
              onClick={() => onBackgroundChange(c)}
              aria-label={`خلفية ${c}`}
              className="size-6 rounded-md ring-1 ring-border transition-transform hover:scale-110"
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
      </div>
    </aside>
  )
}
