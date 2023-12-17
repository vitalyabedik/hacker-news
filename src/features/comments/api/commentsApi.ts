import { CommentsApiType } from '@/features/comments/api/commentsApi.types'
import { baseURL } from '@/shared'

export const commentsApi = {
  async getComments(id: number): Promise<CommentsApiType> {
    const res = await fetch(`${baseURL}item/${id}.json`)

    return await res.json()
  },
}
