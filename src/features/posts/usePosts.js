import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../../services/apiPosts';

export function usePosts() {
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
    onError: (err) => {
      console.error(err);
    },
  });

  return { posts, isLoading, error };
}
