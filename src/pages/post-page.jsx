import { Error } from '@/components/ui/error';
import { PostDetails } from '@/features/posts/post-details';
import { usePost } from '@/features/posts/usePost';

function PostPage() {
  const { post, isLoading, error } = usePost();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <Error title="Error 404" content="Post not found 😢" />;

  return <PostDetails post={post} />;
}

export { PostPage };
