import { PropsWithChildren } from 'react'

import { NextPage } from 'next'

import { Layout } from './layout'

export const BaseLayout: NextPage<PropsWithChildren> = props => {
  const { children } = props

  return <Layout>{children}</Layout>
}
