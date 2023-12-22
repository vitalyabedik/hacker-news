import Head from 'next/head'

type Props = {
  title?: string
}

export const HeadMeta = (props: Props) => {
  const { title } = props

  const description = title ? `Hacker News ${title.toLowerCase()}` : 'Demo Hacker News'

  return (
    <Head>
      <title>{title ?? 'Hacker News'}</title>
      <meta content={description} name={'description'} />
      <link href={'/favicon.svg'} rel={'icon'} />
    </Head>
  )
}
