import type { Metadata } from 'next'

import React from 'react'

import { TanstackProvider } from '@/app/providers'
import { BaseLayout } from '@/shared'

import './globals.css'

export const metadata: Metadata = {
  description: 'Hacker News',
  title: 'Hacker News',
}

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang={'en'}>
      <body className={`h-screen bg-slate-950`}>
        <TanstackProvider>
          <BaseLayout>{children}</BaseLayout>
        </TanstackProvider>
      </body>
    </html>
  )
}
