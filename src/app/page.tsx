import React from 'react'

import { CustomLink, PageWrapper } from '@/shared'

export default function Home() {
  return (
    <PageWrapper>
      <div className={'mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'}>
        <div className={'text-center'}>
          <h1 className={'text-4xl font-bold tracking-tight sm:text-6xl'}>
            Welcome to Hacker News
          </h1>
          <p className={'mt-6 text-lg leading-8'}>
            Discover the latest in technology, startups, and programming on Hacker News. Join the
            vibrant community, engage in discussions, and stay informed with insightful articles and
            news.
          </p>
          <div className={'flex items-center justify-center mt-4'}>
            <CustomLink href={'/news'} text={'GET STARTED'} variant={'colored'} />
            <CustomLink
              href={'https://github.com/HackerNews/API'}
              target={'_blank'}
              text={'DOCUMENTATION'}
              variant={'bordered'}
            />
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
