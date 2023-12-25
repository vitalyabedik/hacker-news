'use client'
import React, { memo } from 'react'

import { CommentsApiType } from '@/features'
import { PostInfo } from '@/shared'
import he from 'he'

type Props = {
  comments: CommentsApiType
  showMore: boolean
  showMoreComments: () => void
}

export const Comment: React.FC<Props> = memo(({ comments, showMore, showMoreComments }) => {
  const decodedText = comments?.text ? he.decode(comments.text) : ''

  return (
    <div className={'max-w-lg mt-8 p-4 bg-gray-800 overflow-hidden shadow rounded-2xl'}>
      {comments && <PostInfo item={comments} variant={'comments'} />}
      <div className={'mt-4'}>{decodedText}</div>
      {comments?.kids && (
        <div
          className={
            'flex justify-start mt-2 text-md hover:text-indigo-700 text-indigo-600 transition ease-in duration-200 text-center text-base font-semibold cursor-pointer'
          }
          onClick={showMoreComments}
        >
          {!showMore ? `Show more comments` : 'Hide comments'}
        </div>
      )}
    </div>
  )
})
