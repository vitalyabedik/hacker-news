import React from 'react'

import { NewsItemType } from '@/features'
import { formatDate, formatTime } from '@/shared'
import Image from 'next/image'
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
            <div>{item?.score}</div>
            <Image alt={'star icon'} height={16} src={'/star.svg'} width={16} />
          </div>
          <div>
            <p className={'font-semibold text-md md:truncate'}>{item?.title}</p>
            <div className={'mt-2 sm:flex sm:justify-between'}>
              <div className={'flex gap-4 flex-wrap'}>
                <div className={'flex gap-1 items-center'}>
                  <Image alt={'author icon'} height={16} src={'/author.svg'} width={16} />
                  <span className={'flex items-center text-md'}>{item?.by}</span>
                </div>
                <div className={'flex gap-1 items-center'}>
                  <Image alt={'calendar icon'} height={16} src={'/calendar.svg'} width={16} />
                  <span className={'flex items-center font-light text-md'}>{formatedDate}</span>
                </div>
                <div className={'flex gap-1 items-center'}>
                  <Image alt={'clock icon'} height={16} src={'/clock.svg'} width={16} />
                  <span className={'flex items-center font-light text-md'}>{formatedTime}</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </li>
  )
}
