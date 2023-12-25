'use client'
import React from 'react'

import { Comments, NewsItemType, useQueryComments } from '@/features'
import { CustomLink, GoBack, PagePanel, PostInfo, Preloader } from '@/shared'

type Props = {
  item: NewsItemType
}

export const NewsDetails: React.FC<Props> = ({ item }) => {
  const { loadingStatus, updateCommentsCallback } = useQueryComments(item.id)

  return (
    <>
      <article>
        <div className={'mt-4 flex-col items-start gap-4'}>
          <PostInfo item={item} />
          <CustomLink href={item?.url ?? ''} target={'_blank'} text={'Read article'} />
          {!loadingStatus && (
            <>
              <PagePanel
                buttonText={'Update comments'}
                loadingStatus={loadingStatus}
                titleText={`Comments`}
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
