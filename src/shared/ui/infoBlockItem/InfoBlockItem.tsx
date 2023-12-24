import React from 'react'

import Image from 'next/image'

type Props = {
  icon: string
  iconSize: number
  isReversed?: boolean
  text: number | string
}

export const InfoBlockItem: React.FC<Props> = ({ icon, iconSize, isReversed = false, text }) => {
  return (
    <div className={`flex ${isReversed && 'flex-row-reverse'} gap-1 items-center`}>
      <Image alt={`${icon}-icon`} height={iconSize} src={`/${icon}.svg`} width={iconSize} />
      <span className={`flex items-center ${!isReversed && 'font-light'} text-md`}>{text}</span>
    </div>
  )
}
