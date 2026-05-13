import { ProfileDetails } from '@/components/ui/profile-details';
import { useUser } from '@/features/authentication/useUser';

function Profile() {
  const { user } = useUser();

  return <ProfileDetails user={user} />;
}

export { Profile };
