import { ProfileDetails } from '@/features/authentication/profile-details';
import { useUser } from '@/features/authentication/useUser';

function Profile() {
  const { user } = useUser();

  return <ProfileDetails user={user} />;
}

export { Profile };
