import React, { memo } from 'react'

import { CommentsApiType, NewsItemType } from '@/features'
import { InfoBlockItem, formatDate, formatTime } from '@/shared'

type PostInfoVariantType = 'comments' | 'default' | 'title'

type Props = {
  item: CommentsApiType | NewsItemType
  variant?: PostInfoVariantType
}

export const PostInfo: React.FC<Props> = memo(({ item, variant = 'title' }) => {
  const formatedDate = formatDate(item?.time ?? '')
  const formatedTime = formatTime(item?.time ?? '')

  const isTitle = variant === 'title'
  const iconSize = isTitle ? 24 : 16
  const fontSize = isTitle ? 'xl' : 'md'

  return (
    <div className={`flex gap-x-4 gap-y-1.5 flex-wrap ${isTitle && 'mb-4'}`}>
      <InfoBlockItem fontSize={fontSize} icon={'author'} iconSize={iconSize} text={item?.by} />
      <InfoBlockItem
        fontSize={fontSize}
        icon={'calendar'}
        iconSize={iconSize}
        text={formatedDate}
      />
      <InfoBlockItem fontSize={fontSize} icon={'clock'} iconSize={iconSize} text={formatedTime} />
      {variant !== 'default' && (
        <InfoBlockItem
          fontSize={fontSize}
          icon={'message'}
          iconSize={iconSize}
          text={`${item?.kids?.length ?? 0} comments`}
        />
      )}
    </div>
  )
})
