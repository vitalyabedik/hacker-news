import React from 'react'

import './LinearProgressBar.css'

export const LinearProgressBar = () => {
  return (
    <div className={'relative w-full'}>
      <div className={`absolute left-0 h-1 bg-indigo-500 animate-progress-bar`}></div>
    </div>
  )
}
