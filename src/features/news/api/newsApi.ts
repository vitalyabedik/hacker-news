import { baseURL } from '@/shared'

import { GetNewsIDsResponseType, NewsItemType } from './newsApi.types'

export const newsApi = {
  async getNewsIDs(): Promise<GetNewsIDsResponseType> {
    const res = await fetch(`${baseURL}newstories.json`)

    return await res.json()
  },
  async getNewsItem(newsId: number): Promise<NewsItemType> {
    const res = await fetch(`${baseURL}item/${newsId}.json`)

    return await res.json()
  },
  async getNewsItems(newsIds: number[], newsCount: number = 100): Promise<NewsItemType[]> {
    const getNews = newsIds.slice(0, newsCount).map(async newsId => {
      return await newsApi.getNewsItem(newsId)
    })

    return await Promise.all(getNews)
  },
}
