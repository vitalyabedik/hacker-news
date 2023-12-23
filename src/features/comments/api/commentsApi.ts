import { baseURL } from '@/shared'

import { CommentsApiType } from './commentsApi.types'

export const commentsApi = {
  async getComments(id: number): Promise<CommentsApiType> {
    const res = await fetch(`${baseURL}item/${id}.json`)

    return await res.json()
  },
}
