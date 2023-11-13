import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { cn } from '~/lib/utils'

type Props = React.LinkHTMLAttributes<HTMLAnchorElement> & { href: string }

export const CustomLink: React.FC<Props> = ({ href, children, className, ...rest }) => {
  const isInternalLink = href.startsWith('/')
  const isAnchorLink = href.startsWith('#')

  if (isInternalLink || isAnchorLink) {
    return (
      <Link href={href} className={className} {...rest}>
        {children}
      </Link>
    )
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn('items-center underline', className)}
      {...rest}
    >
      {children}
      <ExternalLink className=" ml-0.5 inline-block h-4 w-4" />
    </Link>
  )
}
