import React from 'react'

import { CommentsApiType, NewsItemType } from '@/features'
import { formatDate, formatTime } from '@/shared'
import Image from 'next/image'

type PostInfoVariantType = 'comment' | 'title'

type Props = {
  item: CommentsApiType | NewsItemType
  variant?: PostInfoVariantType
}

export const PostInfo: React.FC<Props> = ({ item, variant = 'title' }) => {
  const formatedDate = formatDate(item.time ?? '')
  const formatedTime = formatTime(item.time ?? '')

  const iconSize = variant === 'title' ? 24 : 16
  const fontSize = variant === 'title' ? 'xl' : 'md'

  return (
    <div className={'flex gap-4 flex-wrap mb-4'}>
      <div className={'flex gap-1 items-center'}>
        <Image alt={'author icon'} height={iconSize} src={'/author.svg'} width={iconSize} />
        <p className={`flex items-center text-${fontSize}`}>{item?.by}</p>
      </div>
      <div className={'flex gap-1 items-center'}>
        <Image alt={'calendar icon'} height={iconSize} src={'/calendar.svg'} width={iconSize} />
        <p className={`flex items-center font-light text-${fontSize}`}>{formatedDate}</p>
      </div>
      <div className={'flex gap-1 items-center'}>
        <Image alt={'clock icon'} height={iconSize} src={'/clock.svg'} width={iconSize} />
        <p className={`flex items-center font-light text-${fontSize}`}>{formatedTime}</p>
      </div>
    </div>
  )
}
