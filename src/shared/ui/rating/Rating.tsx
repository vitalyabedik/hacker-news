import React, { memo } from 'react'

import Image from 'next/image'

type Props = {
  icon: string
  text: number | string
}

export const Rating: React.FC<Props> = memo(({ icon, text }) => {
  return (
    <div
      className={
        'text-xl font-semibold rounded-md flex gap-1 items-center justify-center text-center'
      }
    >
      <span className={`flex items-center text-md`}>{text}</span>
      <Image alt={`${icon}-icon`} height={16} src={`/${icon}.svg`} width={16} />
    </div>
  )
})
