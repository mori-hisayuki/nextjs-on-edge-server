import { Avatar, AvatarFallback, AvatarImage } from './ui/Avatar'
import { Button } from './ui/Button'
import { auth } from 'auth'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from './ui/DropDownMenu'
import { SignIn, SignOut } from './AuthComponents'

export default async function UserButton() {
  const session = await auth()
  if (!session?.user) return <SignIn />
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            {session.user.image && (
              <AvatarImage src={session.user.image} alt={session.user.name ?? ''} />
            )}
            <AvatarFallback>{session.user.email}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{session.user.name}</p>
            <p className="text-muted-foreground text-xs leading-none">
              {session.user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuItem>
          <SignOut />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
