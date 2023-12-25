import React from 'react'

import Link from 'next/link'

type VariantType = 'bordered' | 'colored' | 'default'

type Props = {
  href: string
  target?: string
  text: string
  variant?: VariantType
}

export const CustomLink: React.FC<Props> = ({ href, target, text, variant = 'default' }) => {
  const isBordered =
    variant === 'bordered' && 'border-2 border-indigo-600 hover:bg-indigo-700 text-white px-4'
  const isColored = variant === 'colored' && 'bg-indigo-600 hover:bg-indigo-700 text-white px-4'
  const isDefault = variant === 'default' && 'text-xl text-indigo-600 hover:text-indigo-700'

  return (
    <Link
      className={`py-2 mr-4 cursor-pointer ${isDefault} ${isColored} ${isBordered} focus:ring-indigo-500 focus:ring-offset-indigo-200  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg `}
      href={href}
      target={target}
    >
      {text}
    </Link>
  )
}
