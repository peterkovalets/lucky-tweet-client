import { Error } from '@/components/ui/error';
import { PostDetails } from '@/features/posts/post-details';
import { PostDetailsSkeleton } from '@/features/posts/post-details-skeleton';
import { usePost } from '@/features/posts/usePost';

function PostPage() {
  const { post, isLoading, error } = usePost();

  if (isLoading) return <PostDetailsSkeleton />;

  if (error) return <Error title="Error 404" content="Post not found 😢" />;

  return <PostDetails post={post} />;
}

export { PostPage };
