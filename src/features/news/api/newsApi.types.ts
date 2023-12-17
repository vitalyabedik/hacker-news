export type GetNewsIDsResponseType = number[]

export type NewsItemType = {
  by: string
  descendants: number
  id: number
  kids?: number[]
  score: number
  time: number
  title: string
  type: string
  url: string
}
