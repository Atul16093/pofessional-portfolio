import type { Metadata } from 'next'
import { ThemeProviderWrapper } from '@/components/providers/ThemeProvider'
import { OWNER_NAME, OWNER_TITLE } from '@/lib/constants'
import '@/theme/styles.css'

export const metadata: Metadata = {
  title: `${OWNER_NAME} | ${OWNER_TITLE}`,
  description:
    'Full-Stack Software Engineer (Backend-Focused) specializing in scalable systems, real-time infrastructure, and high-performance solutions.',
  viewport: 'width=device-width, initial-scale=1',
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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap"
          rel="preload"
          as="style"
        />
      </head>
      <body>
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </body>
    </html>
  )
}
