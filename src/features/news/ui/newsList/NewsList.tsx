'use client'
import React from 'react'

import { Preloader } from '@/shared'

import { useQueryNews } from '../../hooks'
import { NewsItem } from './newsItem'

export const NewsList: React.FC = () => {
  const { fetchNextPage, hasNextPage, news, ref: buttonRef } = useQueryNews()

  return (
    <section>
      <ul
        className={
          'mx-auto max-w-screen-xl mt-8 grid overflow-hidden bg-gray-800 shadow rounded-2xl'
        }
      >
        {news?.pages?.map(
          itemsPage => itemsPage?.map(item => <NewsItem item={item} key={item?.id} />)
        )}
      </ul>
      {hasNextPage && (
        <div onClick={() => fetchNextPage()} ref={buttonRef}>
          <Preloader isFullScreen={false} variant={'small'} />
        </div>
      )}
    </section>
  )
}
