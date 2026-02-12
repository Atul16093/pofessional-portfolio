import type { Metadata, Viewport } from 'next'
import { Roboto } from 'next/font/google'
import { ThemeProviderWrapper } from '@/components/providers/ThemeProvider'
import { OWNER_NAME, OWNER_TITLE } from '@/lib/constants'
import '@/theme/styles.css'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: `${OWNER_NAME} | ${OWNER_TITLE}`,
  description:
    'Full-Stack Software Engineer (Backend-Focused) specializing in scalable systems, real-time infrastructure, and high-performance solutions.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    title: `${OWNER_NAME} | ${OWNER_TITLE}`,
    description:
      'Full-Stack Software Engineer (Backend-Focused) specializing in scalable systems, real-time infrastructure, and high-performance solutions.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </body>
    </html>
  )
}
