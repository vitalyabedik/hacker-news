import React from 'react'

import Link from 'next/link'

export const Header: React.FC = () => {
  return (
    <header className={'min-h-full bg-gray-800'}>
      <nav className={'max-w-7xl mx-auto'}>
        <div className={'px-4 sm:px-6 lg:px-8'}>
          <div className={'w-40 text-white hover:opacity-60'}>
            <Link className={'flex gap-4 h-16 items-center'} href={'/'}>
              <div className={'flex py-1 px-2 border-2'}>Y</div>
              <div className={'text-xl tracking-tight'}>Hacker News</div>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
