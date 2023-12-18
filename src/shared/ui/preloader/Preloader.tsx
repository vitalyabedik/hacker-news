import React from 'react'

export const Preloader: React.FC = () => {
  return (
    <div className={'flex items-center justify-center h-screen'}>
      <div
        className={'w-40 h-40 border-t-4 border-b-4 border-indigo-500 rounded-full animate-spin'}
      ></div>
    </div>
  )
}
