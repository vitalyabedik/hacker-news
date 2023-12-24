import React from 'react'

import { NewsItemType } from '@/features'
import { InfoBlockItem, formatDate, formatTime } from '@/shared'
import Link from 'next/link'

type Props = {
  item: NewsItemType
}

export const NewsItem: React.FC<Props> = ({ item }) => {
  const formatedDate = formatDate(item?.time ?? '')
  const formatedTime = formatTime(item?.time ?? '')

  return (
    <li>
      <Link className={'block'} href={`/news/${item?.id}`}>
        <article
          className={
            'flex items-center gap-4 px-4 py-4 sm:px-6 hover:bg-gray-700 transition duration-300'
          }
        >
          <div
            className={
              'p-3 text-xl font-semibold rounded-md flex gap-1 items-center justify-center text-center'
            }
          >
            <InfoBlockItem icon={'star'} iconSize={16} isReversed text={item?.score} />
          </div>
          <div>
            <p className={'font-semibold text-md md:truncate'}>{item?.title}</p>
            <div className={'mt-2 sm:flex sm:justify-between'}>
              <div className={'flex gap-4 flex-wrap'}>
                <InfoBlockItem icon={'author'} iconSize={16} text={item?.by} />
                <InfoBlockItem icon={'calendar'} iconSize={16} text={formatedDate} />
                <InfoBlockItem icon={'clock'} iconSize={16} text={formatedTime} />
              </div>
            </div>
          </div>
        </article>
      </Link>
    </li>
  )
}
