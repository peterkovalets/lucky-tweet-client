import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TagItem } from './tag-item';

const fakeTags = ['javascript', 'java', 'react'];

function PopularTags() {
  const tags = fakeTags;

  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle className="text-xl">Popular tags</CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <ul>
          {tags.map((tag) => (
            <TagItem tag={tag} key={tag} />
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export { PopularTags };
