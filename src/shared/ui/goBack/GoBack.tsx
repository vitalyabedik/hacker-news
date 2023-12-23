import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

export const GoBack: React.FC = () => {
  return (
    <Link
      className={
        'absolute -top-24 flex items-center gap-2 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg'
      }
      href={'/news'}
    >
      Go back
      <Image alt={'back icon'} height={18} src={'/right.svg'} width={18} />
    </Link>
  )
}
