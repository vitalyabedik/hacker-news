import React from 'react'

import { CustomLink } from '@/shared'

export const GoBack: React.FC = () => {
  return (
    <div className={'absolute -top-24'}>
      <CustomLink href={'/news'} text={'Go back'} variant={'colored'} />
    </div>
  )
}
