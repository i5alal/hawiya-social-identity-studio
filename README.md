# 🎨 Hawiya - Social Identity Studio

> منصة ذكاء اصطناعي متكاملة لإنشاء هويات بصرية متسقة عبر منصات التواصل الاجتماعي

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Supabase](https://img.shields.io/badge/Supabase-Auth%20%26%20DB-green)](https://supabase.com/)
[![Fabric.js](https://img.shields.io/badge/Fabric.js-Canvas-orange)](http://fabricjs.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

## ✨ نظرة عامة

**Hawiya** (هُوية) هي منصة إبداعية متقدمة تمكّنك من تصميم هوية بصرية متكاملة لعلامتك التجارية عبر Instagram, X (Twitter), LinkedIn, Facebook, وYouTube. صمّم، عاين، وصدّر تصاميمك بسهولة مع دعم كامل للغة العربية (RTL).

### 🎯 المشكلة
- صعوبة الحفاظ على هوية بصرية موحدة عبر المنصات المختلفة
- الحاجة لتصميم كل منصة بمقاساتها الخاصة يدوياً
- عدم توفر أدوات تدعم اللغة العربية بشكل كامل
- تكلفة الاشتراكات المتعددة في أدوات التصميم

### 💡 الحل
منصة واحدة توفر:
- محرر تصميم قوي مبني على Fabric.js
- قوالب جاهزة للمنصات الرئيسية
- نظام Brand Kit موحد للألوان والخطوط
- معاينة مباشرة لكل منصة
- تصدير بصيغ متعددة (PNG, JPG, PDF)
- نظام تجريبي مجاني + اشتراكات مرنة

## 🚀 الميزات الرئيسية

### 🎨 محرر التصميم
- **Canvas متقدم**: محرر Fabric.js كامل مع Undo/Redo
- **عناصر متنوعة**: نصوص، أشكال، دوائر، gradients
- **Brand Kit**: ألوان وخطوط موحدة عبر جميع التصاميم
- **قوالب سريعة**: Luxury, Minimal, Bold, Quote templates
- **مقاسات محددة مسبقاً**:
  - Instagram: Post (1080×1080), Story (1080×1350)
  - X/Twitter: Header (1500×500)
  - LinkedIn: Cover (1584×396)
  - YouTube: Thumbnail (1280×720)
  - Facebook: Cover (820×312)

### 👁 معاينة مباشرة
- معاينة تصميمك داخل إطار كل منصة
- محاكاة واجهة Instagram/X/LinkedIn
- تحديث تلقائي مع كل تعديل

### 💾 التصدير والحفظ
- **تصدير PNG**: دقة عالية (Quality: 1.0, Multiplier: 2)
- **تصدير JPG**: جودة 92% للنشر المباشر
- **تصدير PDF**: هوية كاملة (قريباً)
- حفظ المشاريع كـ canvas_json في Supabase

### 🔐 المصادقة والبيانات
- Supabase Auth للمستخدمين
- RLS policies لحماية البيانات
- مزامنة تلقائية للمشاريع والـ Brand Kit

### 💳 نظام الاشتراكات
- **تجريبي مجاني**: 2 تصاميم + معاينة غير محدودة
- **Starter Plan**: 10 مشاريع + HD exports
- **Pro Plan**: غير محدود + AI + PDF exports

## 📁 هيكل المشروع

```
hawiya-social-identity-studio/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── signup/
│   │       └── page.tsx
│   ├── dashboard/
│   │   └── page.tsx                 # لوحة التحكم
│   ├── studio/
│   │   └── page.tsx                 # محرر Fabric.js الرئيسي
│   ├── brand-kit/
│   │   └── page.tsx                 # إدارة الألوان والخطوط
│   ├── templates/
│   │   └── page.tsx                 # معرض القوالب
│   ├── billing/
│   │   └── page.tsx                 # الاشتراكات والدفع
│   ├── layout.tsx
│   └── page.tsx                     # الصفحة الرئيسية
├── components/
│   ├── editor/
│   │   ├── FabricCanvas.tsx        # Canvas wrapper
│   │   ├── Toolbar.tsx             # أدوات التحرير
│   │   ├── LayersPanel.tsx         # قائمة الطبقات
│   │   ├── PropertiesPanel.tsx     # خصائص العنصر المحدد
│   │   ├── PreviewFrame.tsx        # معاينة المنصة
│   │   └── ExportPanel.tsx         # لوحة التصدير
│   ├── brand-kit/
│   │   ├── ColorPicker.tsx
│   │   └── FontSelector.tsx
│   └── ui/                         # shadcn/ui components
├── lib/
│   ├── supabase/
│   │   ├── client.ts
│   │   ├── server.ts
│   │   └── middleware.ts
│   ├── fabric/
│   │   ├── canvas-manager.ts       # إدارة Canvas state
│   │   ├── history.ts              # Undo/Redo logic
│   │   └── templates.ts            # القوالب المحددة
│   └── utils/
│       ├── export.ts               # Export utilities
│       └── platform-presets.ts     # مقاسات المنصات
├── actions/
│   ├── projects.ts                 # Server Actions للمشاريع
│   ├── brand-kit.ts                # Server Actions للـ Brand Kit
│   └── billing.ts                  # Server Actions للاشتراكات
├── types/
│   ├── database.types.ts           # Supabase types
│   ├── canvas.types.ts
│   └── platform.types.ts
├── public/
│   └── fonts/
│       ├── NotoKufiArabic.woff2
│       └── SpaceGrotesk.woff2
├── supabase/
│   ├── migrations/
│   │   └── 20240101000000_init.sql
│   └── seed.sql
├── .env.local
├── next.config.js
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🛠 التقنيات المستخدمة

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS + shadcn/ui
- **Canvas**: Fabric.js 5.3
- **Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth
- **Payments**: Stripe (قريباً)
- **Deployment**: Vercel
- **Fonts**: Noto Kufi Arabic, Space Grotesk

## ⚙️ الإعداد المحلي

### المتطلبات
- Node.js 18+ 
- npm/yarn/pnpm
- حساب Supabase
- حساب Stripe (للاشتراكات)

### خطوات التثبيت

1. **استنساخ المشروع**
```bash
git clone https://github.com/i5alal/hawiya-social-identity-studio.git
cd hawiya-social-identity-studio
```

2. **تثبيت الحزم**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **إعداد Supabase**

أنشئ مشروع جديد في [Supabase](https://supabase.com) ونفّذ:

```sql
-- في SQL Editor على Supabase
-- نسخ محتوى supabase/migrations/20240101000000_init.sql
```

4. **ملف البيئة (.env.local)**
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Stripe (optional)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_key
STRIPE_SECRET_KEY=your_stripe_secret
STRIPE_WEBHOOK_SECRET=your_webhook_secret

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

5. **تشغيل المشروع**
```bash
npm run dev
```

افتح [http://localhost:3000](http://localhost:3000)

## 🗄️ قاعدة البيانات (Schema)

### جداول رئيسية

```sql
-- users (من Supabase Auth)
-- يتم ربطها تلقائياً

-- brand_kits
CREATE TABLE brand_kits (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users NOT NULL,
  name TEXT NOT NULL,
  primary_color TEXT DEFAULT '#5A2D8C',
  secondary_color TEXT DEFAULT '#E8B043',
  background_color TEXT DEFAULT '#12091F',
  font_primary TEXT DEFAULT 'Noto Kufi Arabic',
  font_secondary TEXT DEFAULT 'Space Grotesk',
  logo_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- projects
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users NOT NULL,
  brand_kit_id UUID REFERENCES brand_kits,
  title TEXT NOT NULL,
  platform TEXT NOT NULL, -- 'instagram_post', 'x_header', etc.
  width INTEGER NOT NULL,
  height INTEGER NOT NULL,
  canvas_json JSONB NOT NULL,
  thumbnail_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- subscriptions
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users UNIQUE NOT NULL,
  plan_type TEXT NOT NULL CHECK (plan_type IN ('free', 'starter', 'pro')),
  trial_used INTEGER DEFAULT 0,
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

### RLS Policies
```sql
-- Enable RLS
ALTER TABLE brand_kits ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- Policies للقراءة والكتابة (مثال)
CREATE POLICY "Users can view own brand_kits"
  ON brand_kits FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own brand_kits"
  ON brand_kits FOR INSERT
  WITH CHECK (auth.uid() = user_id);
```

## 🎨 استخدام المحرر

### البدء السريع

1. **إنشاء Brand Kit**
   - اذهب إلى `/brand-kit`
   - اختر ألوانك الرئيسية والثانوية
   - حدد الخطوط المفضلة

2. **إنشاء مشروع جديد**
   - اذهب إلى `/studio`
   - اختر المنصة والمقاس
   - ابدأ التصميم!

3. **إضافة عناصر**
   - **نص**: انقر T واكتب
   - **مستطيل**: انقر ▭
   - **دائرة**: انقر ◯
   - **Gradient**: انقر ◈

4. **استخدام القوالب**
   - انقر على "قوالب سريعة"
   - اختر: Luxury / Minimal / Bold / Quote

5. **التصدير**
   - **معاينة**: شاهد تصميمك في إطار المنصة
   - **حفظ**: احفظ المشروع في Supabase
   - **تصدير PNG**: دقة عالية
   - **تصدير JPG**: للنشر المباشر

## 📊 خطة التطوير (Roadmap)

### المرحلة 1: MVP (3-4 أسابيع) ✅
- [x] إعداد Next.js + Supabase
- [x] محرر Fabric.js أساسي
- [x] Brand Kit management
- [x] نظام التجربة المجانية
- [x] تصدير PNG/JPG
- [x] معاينة المنصات

### المرحلة 2: التحسينات (4-6 أسابيع)
- [ ] تكامل Stripe للاشتراكات
- [ ] AI لإنشاء تصاميم تلقائية
- [ ] مكتبة قوالب موسعة
- [ ] تصدير PDF للهوية الكاملة
- [ ] Carousel designer لـ Instagram
- [ ] Scheduling للنشر التلقائي

### المرحلة 3: التوسع (2-3 أشهر)
- [ ] تكامل API مع المنصات للنشر المباشر
- [ ] Team collaboration features
- [ ] Advanced AI suggestions
- [ ] Mobile app (React Native)
- [ ] White-label solution

## 🤝 المساهمة

نرحب بالمساهمات! يرجى:

1. Fork المشروع
2. إنشاء فرع جديد (`git checkout -b feature/amazing-feature`)
3. Commit تغييراتك (`git commit -m 'Add amazing feature'`)
4. Push للفرع (`git push origin feature/amazing-feature`)
5. فتح Pull Request

## 📝 الترخيص

هذا المشروع مرخص تحت MIT License - انظر [LICENSE](LICENSE) للتفاصيل.

## 📧 التواصل

- **المطور**: YOUSSIF
- **GitHub**: [@i5alal](https://github.com/i5alal)
- **Portfolio**: [youssif.design](https://youssif.design)

---

**صُنع بـ ❤️ للمبدعين العرب**
