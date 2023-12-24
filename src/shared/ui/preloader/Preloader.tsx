import React, { memo } from 'react'

type VariantType = 'default' | 'small'

type Props = {
  isFullScreen?: boolean
  variant?: VariantType
}

export const Preloader: React.FC<Props> = memo(({ isFullScreen = false, variant = 'default' }) => {
  const preloaderSize = variant === 'default' ? 'w-40 h-40' : 'w-20 h-20'
  const isFullScreenHeight = isFullScreen ? 'h-screen' : 'mt-16'
  const hasMarginTop = variant === 'small' ? 'mt-8' : ''

  return (
    <div className={`flex items-center justify-center ${isFullScreenHeight} ${hasMarginTop}`}>
      <div
        className={`${preloaderSize} border-t-4 border-b-4 border-indigo-500 rounded-full animate-spin`}
      ></div>
    </div>
  )
})
