'use client'
import React, { useEffect, useState } from 'react'

import { Comments, NewsItemType, useQueryComments } from '@/features'
import { GoBack, PagePanel, PostInfo, Preloader } from '@/shared'
import Link from 'next/link'

type Props = {
  item: NewsItemType
}

export const NewsDetails: React.FC<Props> = ({ item }) => {
  const { isSuccess, loadingStatus, updateCommentsCallback } = useQueryComments(item)

  return (
    <>
      <article>
        <div className={'mt-4 flex-col items-start gap-4'}>
          <PostInfo item={item} />
          <Link
            className={
              'text-xl hover:text-indigo-700 text-indigo-600 transition ease-in duration-200 text-center text-base font-semibold'
            }
            href={item?.url ?? ''}
            target={'_blank'}
          >
            Read article
          </Link>
          {!loadingStatus && (
            <>
              <PagePanel
                buttonText={'Update comments'}
                loadingStatus={loadingStatus}
                titleText={`Total comments: ${item?.kids ? item?.kids?.length : 0}`}
                updateDataCallback={updateCommentsCallback}
              />
              {item?.kids && item?.kids.map(comment => <Comments item={comment} key={comment} />)}
            </>
          )}
        </div>
        {loadingStatus && <Preloader isFullScreen={false} />}
      </article>
      <GoBack />
    </>
  )
}
