import { getPost } from '@/services/apiPosts';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export function usePost() {
  const { postId } = useParams();

  const {
    data: post,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['post', postId],
    queryFn: () => getPost(postId),
    retry: false,
  });

  return { post, isLoading, error };
}
