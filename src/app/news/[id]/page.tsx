import React from 'react'

import { NewsDetails, newsApi } from '@/features'
import { PageWrapper } from '@/shared'

type ParamsType = {
  id: string
}

export async function generateMetadata({ params }: { params: ParamsType }) {
  return {
    description: 'News item',
    title: params.id,
  }
}

const NewsItem = async ({ params: { id } }: { params: ParamsType }) => {
  const newsItem = await newsApi.getNewsItem(+id)

  return (
    <PageWrapper>
      {newsItem && (
        <section className={'relative mt-32 mx-auto max-w-screen-xl'}>
          <h1 className={'max-w-screen-md mb-4 text-2xl sm:text-4xl font-semibold'}>
            {newsItem?.title}
          </h1>
          <NewsDetails item={newsItem} />
        </section>
      )}
    </PageWrapper>
  )
}

export default NewsItem
