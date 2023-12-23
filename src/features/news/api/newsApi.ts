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
  async getNewsItems(pageParam: number, newsCount: number): Promise<NewsItemType[]> {
    const newsIds = await newsApi.getNewsIDs()
    const startIndex = pageParam
    const endIndex = pageParam + newsCount

    const getNewsPromises = newsIds
      .slice(startIndex, endIndex)
      .map(newsId => newsApi.getNewsItem(newsId))
    const newsItems = await Promise.all(getNewsPromises)

    return newsItems
  },
}
