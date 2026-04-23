import Post from './Post';
import { usePosts } from './usePosts';

function Posts() {
  const { posts, isLoading, error } = usePosts();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Something went wrong. Try again later.</p>;

  return (
    <div className="grow">
      <ul className="space-y-5">
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </ul>
    </div>
  );
}

export default Posts;
