'use client'

import { useSession } from 'next-auth/react'
import { Button } from './ui/Button'
import { Input } from './ui/Input'
import { useState } from 'react'
import { CustomLink } from './CustomLink'
import { SessionData } from './SessionData'

const UpdateForm = () => {
  const { data: session, update } = useSession()
  const [name, setName] = useState(session?.user?.name ?? '')

  if (!session?.user) return null
  return (
    <>
      <h2 className="text-xl font-bold">Updating the session</h2>
      <form
        onSubmit={async () => {
          if (session) {
            const newSession = await update({
              ...session,
              user: { ...session.user, name }
            })
            // console.log({ newSession })
          }
        }}
        className="flex w-full max-w-sm items-center space-x-2"
      >
        <Input
          type="text"
          placeholder={session.user.name ?? ''}
          value={name}
          onChange={e => {
            setName(e.target.value)
          }}
        />
        <Button type="submit">Update</Button>
      </form>
    </>
  )
}

export default function ClientExample() {
  const { data: session, status } = useSession()
  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold">Client Side Rendering Usage</h1>
      <p>
        This page fetches session data client side using the{' '}
        <CustomLink href="https://nextjs.authjs.dev/react#usesession">
          <code>useSession</code>
        </CustomLink>{' '}
        React Hook.
      </p>
      <p>
        It needs the{' '}
        <CustomLink href="https://react.devreference/nextjs/react/use-client">
          <code>use client</code>
        </CustomLink>{' '}
        directive at the top of the file to enable client side rendering, and the{' '}
        <CustomLink href="https://nextjs.authjs.dev/react#sessionprovider">
          <code>SessionProvider</code>
        </CustomLink>{' '}
        component in{' '}
        <strong>
          <code>client-example/page.tsx</code>
        </strong>{' '}
        to provide the session data.
      </p>

      {status === 'loading' ? <div>Loading...</div> : <SessionData session={session} />}
      <UpdateForm />
    </div>
  )
}
