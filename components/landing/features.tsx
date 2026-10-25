import { PenTool, Palette, LayoutGrid, Download } from 'lucide-react'

const features = [
  {
    icon: PenTool,
    title: 'محرر تصميم',
    description:
      'لوحة تصميم تفاعلية بالسحب والإفلات لإضافة النصوص والأشكال والصور وترتيبها بحرية كاملة.',
  },
  {
    icon: Palette,
    title: 'Brand Kit',
    description:
      'احفظ ألوان علامتك وخطوطك وشعارك في مكان واحد واستخدمها بنقرة واحدة في كل تصميم.',
  },
  {
    icon: LayoutGrid,
    title: 'مقاسات المنصات',
    description:
      'مقاسات جاهزة لكل منصة: منشور وستوري إنستغرام، غلاف X، وغلاف LinkedIn — بضغطة زر.',
  },
  {
    icon: Download,
    title: 'تصدير فوري',
    description:
      'صدّر تصاميمك بصيغة PNG أو JPG بجودة عالية وجاهزة للنشر مباشرة على منصاتك.',
  },
]

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-bold sm:text-4xl">
          كل ما تحتاجه لبناء هويتك
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          أدوات مصممة خصيصاً لصنّاع المحتوى العربي لإنتاج تصاميم متناسقة واحترافية بسرعة.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/60"
          >
            <div className="flex size-12 items-center justify-center rounded-xl bg-primary/15 text-accent transition-colors group-hover:bg-primary/25">
              <feature.icon className="size-6" />
            </div>
            <h3 className="mt-5 text-lg font-bold">{feature.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
