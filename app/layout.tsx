import { Analytics } from '@vercel/analytics/next'
import { Geist, Lora } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const lora = Lora({ subsets: ['latin'], variable: '--font-lora', style: ['normal', 'italic'], weight: ['400', '500', '600'] })

export const metadata: Metadata = {
  title: 'Thethtar Zin — Junior Full Stack Developer',
  description: 'Portfolio of Thethtar Zin, a junior full stack developer based in Yangon, Myanmar.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7f7f5',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${lora.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
