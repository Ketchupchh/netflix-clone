import { HomeHeader } from '@/components/home/home-header'
import type { Metadata } from 'next'

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
    <>
      <HomeHeader />
      {children}
    </>
  )
}
