import type { Metadata } from 'next'

import React from 'react'

import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  description: 'Hacker News',
  title: 'Hacker News',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={'en'}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
