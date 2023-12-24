'use client'
import React, { memo } from 'react'

import { useQueryComments } from '@/features'

import { Comment } from './comment'

type Props = {
  item: number
}

export const Comments: React.FC<Props> = memo(({ item }) => {
  const { comments, loadingStatus, onShowMoreCallback, showMore } = useQueryComments(item)

  return (
    <>
      {!loadingStatus && comments && (
        <Comment comments={comments} showMore={showMore} showMoreComments={onShowMoreCallback} />
      )}
      {comments?.kids &&
        showMore &&
        comments?.kids?.map(comment => (
          <div className={'ml-8'} key={comment}>
            <Comments item={comment} key={comment} />
          </div>
        ))}
    </>
  )
})
