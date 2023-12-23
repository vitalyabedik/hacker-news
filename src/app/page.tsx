import React from 'react'

import { PageWrapper } from '@/shared'
import Link from 'next/link'

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
            <Link
              className={
                'py-2 px-4 mr-4 cursor-pointer uppercase bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
              }
              href={'/news'}
              type={'button'}
            >
              Get started
            </Link>
            <Link
              className={
                'py-2 px-4 cursor-pointer uppercase border-2 border-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
              }
              href={'https://github.com/HackerNews/API'}
              target={'_blank'}
              type={'button'}
            >
              Documentation
            </Link>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
