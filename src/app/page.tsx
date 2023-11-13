import Image from 'next/image'
import { CustomLink } from '~/components/CustomLink'
import packageJSON from '../../package.json'

const Home = () => {
  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold">NextAuth.js Example</h1>{' '}
      <p>
        This is an example site to demonstrate how to use{' '}
        <CustomLink href="https://nextjs.authjs.dev">NextAuth.js</CustomLink> for
        authentication. Check out the{' '}
        <CustomLink href="/server-example" className="underline">
          Server
        </CustomLink>{' '}
        and the{' '}
        <CustomLink href="/client-example" className="underline">
          Client
        </CustomLink>{' '}
        examples to see how to secure pages and get session data.
      </p>
      <p>
        Current <CustomLink href="https://nextjs.authjs.dev">NextAuth.js</CustomLink>{' '}
        version: <em>next-auth@{packageJSON.dependencies['next-auth']}</em>
      </p>
    </div>
  )
}

export default Home
