'use client'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { NewsItemType, newsApi } from '@/features'
import { useInfiniteQuery } from '@tanstack/react-query'

export const useQueryNews = () => {
  const [isUpdatedNews, setIsUpdatedNews] = useState(false)
  const newsCount = 10

  const { inView, ref } = useInView()

  const {
    data: news,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
    isFetching,
    isFetchingNextPage,
    isFetchingPreviousPage,
    isLoading,
    refetch,
    status,
  } = useInfiniteQuery<NewsItemType[], Error>({
    getNextPageParam: (_, allPages) => {
      if (allPages.length <= 10) {
        const nextPage = allPages.length * newsCount

        return nextPage
      }
    },
    getPreviousPageParam: firstPage => firstPage ?? undefined,
    initialPageParam: 0,
    queryFn: async ({ pageParam }) => {
      const res = await newsApi.getNewsItems(pageParam as number, newsCount)

      return res
    },
    queryKey: ['news'],
  })

  const updateNewsCallback = () => {
    setIsUpdatedNews(true)
    refetch().finally(() => {
      setIsUpdatedNews(false)
    })
  }

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [fetchNextPage, inView])

  const dataStatus = {
    disabled: !hasPreviousPage || isFetchingPreviousPage,
    fetching: isFetching && !isFetchingNextPage,
    loading: isLoading || isFetching,
  }

  return {
    dataStatus,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    isUpdatedNews,
    news,
    ref,
    status,
    updateNewsCallback,
  }
}
