import React from 'react'

type VariantType = 'default' | 'small'

type Props = {
  isFullScreen?: boolean
  variant?: VariantType
}

export const Preloader: React.FC<Props> = ({ isFullScreen = true, variant = 'default' }) => {
  const preloaderSize = variant === 'default' ? '40' : '20'
  const isFullScreenHeight = isFullScreen ? 'h-screen' : 'mt-16'
  const hasMarginTop = variant === 'small' ? 'mt-8' : ''

  return (
    <div className={`flex items-center justify-center ${isFullScreenHeight} ${hasMarginTop}`}>
      <div
        className={`w-${preloaderSize} h-${preloaderSize} border-t-4 border-b-4 border-indigo-500 rounded-full animate-spin`}
      ></div>
    </div>
  )
}
