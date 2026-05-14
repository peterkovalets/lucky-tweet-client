import { Post } from './post';
import { PostsSkeleton } from './posts-skeleton';
import { usePosts } from './usePosts';

function Posts() {
  const { posts, isLoading, error } = usePosts();

  if (isLoading) return <PostsSkeleton />;

  if (error) return <p>Something went wrong. Try again later.</p>;

  return (
    <div className="grow">
      <ul className="space-y-5">
        {posts.length !== 0 ? (
          posts.map((post) => <Post post={post} key={post.id} />)
        ) : (
          <p>No posts yet.</p>
        )}
      </ul>
    </div>
  );
}

export { Posts };
