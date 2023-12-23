import { PropsWithChildren } from 'react'

import { Header } from '@/widgets'
import { NextPage } from 'next'

export const Layout: NextPage<PropsWithChildren> = props => {
  const { children } = props

  return (
    <div>
      <Header />
      <div className={'bg-slate-950 text-white'}>{children}</div>
    </div>
  )
}
