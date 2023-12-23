'use client'
import { useCallback, useState } from 'react'

import { commentsApi } from '@/features'
import { useQuery } from '@tanstack/react-query'

export const useQueryComments = (commentsId: number) => {
  const [showMore, setShowMore] = useState(false)

  const {
    data: comments,
    isFetching,
    isLoading,
    isSuccess,
    refetch,
  } = useQuery({
    queryFn: async () => await commentsApi.getComments(commentsId),
    queryKey: ['comments', commentsId],
  })

  const updateCommentsCallback = () => {
    refetch()
  }

  const onShowMoreCallback = useCallback(() => {
    setShowMore(!showMore)
  }, [showMore])

  const loadingStatus = isLoading || isFetching

  return {
    comments,
    isSuccess,
    loadingStatus,
    onShowMoreCallback,
    refetch,
    setShowMore,
    showMore,
    updateCommentsCallback,
  }
}
