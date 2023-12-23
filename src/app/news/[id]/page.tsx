import React from 'react'

import { NewsDetails, newsApi } from '@/features'
import { PageWrapper } from '@/shared'

export async function generateMetadata({ params }: { params: { id: string } }) {
  return {
    description: 'News item',
    title: params.id,
  }
}

const NewsItem = async ({ params: { id } }: { params: { id: string } }) => {
  const newsItem = await newsApi.getNewsItem(+id)

  return (
    <PageWrapper>
      {newsItem && (
        <section className={'relative mt-32 mx-auto max-w-screen-xl'}>
          <div className={'flex-col'}>
            <h1 className={'max-w-screen-md mb-4 text-2xl sm:text-4xl font-semibold'}>
              {newsItem?.title}
            </h1>
          </div>
          <NewsDetails item={newsItem} />
        </section>
      )}
    </PageWrapper>
  )
}

export default NewsItem