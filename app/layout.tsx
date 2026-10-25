import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Noto_Kufi_Arabic } from 'next/font/google'
import './globals.css'

const notoKufi = Noto_Kufi_Arabic({
  subsets: ['arabic', 'latin'],
  variable: '--font-noto-kufi',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'هوية — استوديو الهوية للمنصات الاجتماعية',
  description:
    'هوية استوديو تصميم عربي متكامل لصناعة هوية بصرية متناسقة عبر منصات التواصل: محرر تصميم، Brand Kit، مقاسات جاهزة، وتصدير فوري.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#12091F',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${notoKufi.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
