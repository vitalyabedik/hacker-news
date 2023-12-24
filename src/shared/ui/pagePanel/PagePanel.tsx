import React, { memo } from 'react'

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
      <div className={'flex max-w-lg gap-8 mt-8'}>
        <h1 className={'text-3xl font-semibold'}>{titleText}</h1>
        <button
          className={`flex items-center gap-2 py-2 px-4 ${
            loadingStatus ? 'bg-gray-600' : 'bg-indigo-600'
          } ${
            !loadingStatus && 'hover:bg-indigo-700'
          } text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg`}
          disabled={loadingStatus}
          onClick={updateDataCallback}
          type={'button'}
        >
          <Image
            alt={'update icon'}
            className={`${loadingStatus && 'animate-spin'}`}
            height={16}
            src={'/update.svg'}
            width={16}
          />
          {buttonText}
        </button>
      </div>
    )
  }
)
