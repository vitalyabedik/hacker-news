'use client'
import React, { memo, useEffect, useState } from 'react'

import { useQueryComments } from '@/features'
import { Preloader } from '@/shared'

import { Comment } from './comment'

type Props = {
  item: number
}

export const Comments: React.FC<Props> = memo(({ item }) => {
  const { comments, isSuccess, loadingStatus, onShowMoreCallback, setShowMore, showMore } =
    useQueryComments(item)

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
