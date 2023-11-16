import React from 'react'
import { auth } from '~/auth'
import { CustomLink } from '~/components/CustomLink'
import Header from '~/components/Header'
import { SessionData } from '~/components/SessionData'

export const runtime = 'edge'

const Page = async () => {
  const session = await auth()
  return (
    <div className="space-y-2">
      <Header />
      <h1 className="text-3xl font-bold">React Server Component Usage</h1>
      <p>
        This page is server-rendered as a{' '}
        <CustomLink href="https://nextjs.org/docs/app/building-your-application/rendering/server-components">
          React Server Component
        </CustomLink>
        . It gets the session data on the server using{' '}
        <CustomLink href="https://nextjs.authjs.dev#auth">
          <code>auth()</code>
        </CustomLink>{' '}
        method.
      </p>
      {/* <SessionData session={session} /> */}
    </div>
  )
}

export default Page
