import { PropsWithChildren } from 'react'

import { HeadMeta } from '../headMeta'

type Props = {
  title?: string
}

export const PageWrapper = (props: PropsWithChildren<Props>) => {
  const { children, title } = props

  return (
    <>
      <HeadMeta title={title} />
      <main className={'mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8'}>{children}</main>
    </>
  )
}
