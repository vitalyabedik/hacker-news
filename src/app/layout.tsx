import type { Metadata } from 'next'

import React from 'react'

import { TanstackProvider } from '@/app/providers'
import { BaseLayout, Toast } from '@/shared'

import './globals.css'

export const metadata: Metadata = {
  description: 'Hacker News',
  title: 'Hacker News',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={'en'}>
      <body className={`h-screen bg-slate-950`}>
        <TanstackProvider>
          <BaseLayout>{children}</BaseLayout>
          <Toast />
        </TanstackProvider>
      </body>
    </html>
  )
}
