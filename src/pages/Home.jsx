import Posts from '../features/posts/Posts';
import PopularTags from '../features/tags/PopularTags';

function Home() {
  return (
    <div className="grid grid-cols-[1fr_auto] items-start gap-8">
      <Posts />
      <PopularTags />
    </div>
  );
}

export default Home;
