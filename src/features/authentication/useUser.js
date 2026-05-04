import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '@/services/apiAuth';

export function useUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUser,
    retry: false,
    throwOnError: false,
  });

  return { user, isLoading, isAuthenticated: user !== undefined };
}
