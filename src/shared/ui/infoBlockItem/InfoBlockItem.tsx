import React, { memo } from 'react'

import Image from 'next/image'

type Props = {
  fontSize?: string
  icon: string
  iconSize: number
  isReversed?: boolean
  text: number | string
}

export const InfoBlockItem: React.FC<Props> = memo(
  ({ fontSize = 'md', icon, iconSize, isReversed = false, text }) => {
    return (
      <div className={`flex ${isReversed && 'flex-row-reverse'} gap-1 items-center`}>
        <Image alt={`${icon}-icon`} height={iconSize} src={`/${icon}.svg`} width={iconSize} />
        <span className={`flex items-center ${!isReversed && 'font-light'} text-${fontSize}`}>
          {text}
        </span>
      </div>
    )
  }
)
