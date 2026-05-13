import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DEFAULT_AVATAR_URL } from '@/utils/constants';
import { Link } from 'react-router-dom';

function ProfileDetails({ user }) {
  return (
    <div className="flex items-center gap-8">
      <Avatar className="w-32 h-32">
        <AvatarImage
          src={user.avatarUrl ?? DEFAULT_AVATAR_URL}
          alt={`${user.username}'s avatar`}
        />
        <AvatarFallback>{user.username}'s avatar</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl">{user.username}</h1>
        <div className="flex gap-2">
          <Link
            to={`/users/${user.username}/following`}
            className="hover:underline"
          >
            0 following
          </Link>
          <Link
            to={`/users/${user.username}/followers`}
            className="hover:underline"
          >
            0 followers
          </Link>
        </div>
      </div>
    </div>
  );
}

export { ProfileDetails };
