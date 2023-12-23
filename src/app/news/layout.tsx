import { PropsWithChildren } from 'react'

import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  description: 'Hacker News',
  title: 'Hacker News',
}

const Layout: NextPage<PropsWithChildren> = ({ children }) => {
  return <div>{children}</div>
}

export default Layout
