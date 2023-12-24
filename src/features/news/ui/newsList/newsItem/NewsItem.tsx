import React from 'react'

import { NewsItemType } from '@/features'
import { PostInfo, Rating } from '@/shared'
import Link from 'next/link'

type Props = {
  item: NewsItemType
}

export const NewsItem: React.FC<Props> = ({ item }) => {
  return (
    <li>
      <Link className={'block'} href={`/news/${item?.id}`}>
        <article
          className={'flex items-center gap-4 px-4 py-4 hover:bg-gray-700 transition duration-300'}
        >
          <Rating icon={'star'} text={item?.score} />

          <div>
            <p className={'font-semibold text-md md:truncate'}>{item?.title}</p>
            <div className={'mt-2 sm:flex sm:justify-between'}>
              <PostInfo item={item} variant={'default'} />
            </div>
          </div>
        </article>
      </Link>
    </li>
  )
}
