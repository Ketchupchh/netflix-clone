import './globals.scss'

import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { WindowContextProvider } from '@/components/lib/context/window-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Netflix - Watch TV Shows Online, Watch Movies Online',
  description: 'Watch Netflix movies &amp; TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='flex min-h-screen flex-col items-center'>
          <WindowContextProvider>
            {children}
          </WindowContextProvider>
        </main>
      </body>
    </html>
  )
}
