import { baseURL } from '@/shared'

import { GetNewsIDsResponseType, NewsItemType } from './newsApi.types'

export const newsApi = {
  async getNews(newsId: number): Promise<NewsItemType> {
    const res = await fetch(`${baseURL}item/${newsId}.json`)

    return await res.json()
  },
  async getNewsIDs(): Promise<GetNewsIDsResponseType> {
    const res = await fetch(`${baseURL}newstories.json`)

    return await res.json()
  },
}
