'use client'
import React from 'react'

import { NewsList, useQueryNews } from '@/features'
import { LinearProgressBar, PagePanel, PageWrapper, Preloader } from '@/shared'

const News: React.FC = () => {
  const { isUpdatedNews, status, updateNewsCallback } = useQueryNews()

  if (status === 'pending') {
    return <LinearProgressBar />
  }

  return (
    <PageWrapper>
      <PagePanel
        buttonText={'Update news'}
        loadingStatus={isUpdatedNews}
        titleText={'Top news'}
        updateDataCallback={updateNewsCallback}
      />
      {!isUpdatedNews && <NewsList />}
      {isUpdatedNews && <Preloader isFullScreen />}
    </PageWrapper>
  )
}

export default News
