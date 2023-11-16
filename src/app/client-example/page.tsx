import { SessionProvider } from 'next-auth/react'
import React from 'react'
import { auth } from '~/auth'
import ClientExample from '~/components/ClientExample'

export const runtime = 'edge'

const Page = async () => {
  const session = await auth()
  // TODO: Look into https://react.dev/reference/react/experimental_taintObjectReference
  // filter out sensitive data before passing to client.
  if (session?.user) {
    session.user = {
      id: session.user.id,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image
    }
  }

  return (
    <SessionProvider session={session}>
      <ClientExample />
    </SessionProvider>
  )
}

export default Page
