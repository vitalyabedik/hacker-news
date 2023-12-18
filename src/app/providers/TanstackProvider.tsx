'use client'
import React from 'react'

import { queryClient } from '@/shared'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

type Props = {
  children: React.ReactNode
}

export const TanstackProvider: React.FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
