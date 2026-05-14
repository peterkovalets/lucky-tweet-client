import {
  CircleUserIcon,
  BellIcon,
  SettingsIcon,
  LogOutIcon,
} from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useUser } from '@/features/authentication/useUser';
import { useLogout } from '@/features/authentication/useLogout';
import { Link } from 'react-router-dom';
import { DEFAULT_AVATAR_URL } from '@/utils/constants';

function DropdownMenuAvatar() {
  const { user } = useUser();
  const { logout, isPending } = useLogout();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Avatar>
            <AvatarImage
              src={user?.avatarUrl ?? DEFAULT_AVATAR_URL}
              alt={`${user?.username}'s avatar`}
            />
            <AvatarFallback>${user?.username}'s avatar</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <CircleUserIcon />
            <Link to="profile">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SettingsIcon />
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem>
            <BellIcon />
            Notifications
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => logout()} disabled={isPending}>
          <LogOutIcon />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export { DropdownMenuAvatar };
