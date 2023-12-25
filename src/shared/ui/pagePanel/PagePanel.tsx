import React, { memo } from 'react'

import { CustomButton } from '@/shared'
import Image from 'next/image'

type Props = {
  buttonText: string
  loadingStatus: boolean
  titleText: string
  updateDataCallback: () => void
}

export const PagePanel: React.FC<Props> = memo(
  ({ buttonText, loadingStatus, titleText, updateDataCallback }) => {
    return (
      <div className={'flex flex-wrap justify-start gap-4 mt-8'}>
        <h1 className={'text-3xl font-semibold'}>{titleText}</h1>
        <CustomButton callback={updateDataCallback} disabled={loadingStatus}>
          <Image
            alt={'update-icon'}
            className={`${loadingStatus && 'animate-spin'}`}
            height={16}
            src={'/update.svg'}
            width={16}
          />
          <span>{buttonText}</span>
        </CustomButton>
      </div>
    )
  }
)
