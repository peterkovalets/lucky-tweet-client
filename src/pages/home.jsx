import { Posts } from '../features/posts/posts';
import { PopularTags } from '../features/tags/popular-tags';

function Home() {
  return (
    <div className="grid grid-cols-[1fr_auto] items-start gap-8">
      <Posts />
      <PopularTags />
    </div>
  );
}

export { Home };
