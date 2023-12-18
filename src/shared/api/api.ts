import { QueryClient } from '@tanstack/react-query'

export const baseURL = process.env.NEXT_PUBLIC_HACKER_NEWS_API_URL

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
})
