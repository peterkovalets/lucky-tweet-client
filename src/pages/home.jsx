import { Button } from '@/components/ui/button';
import { Posts } from '../features/posts/posts';
import { PopularTags } from '../features/tags/popular-tags';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="grid grid-cols-[1fr_auto] items-start gap-4">
      <div>
        <Button size="lg" asChild>
          <Link to="posts/new">Add Post</Link>
        </Button>
        <div className="mt-4">
          <Posts />
        </div>
      </div>
      <PopularTags />
    </div>
  );
}

export { Home };
