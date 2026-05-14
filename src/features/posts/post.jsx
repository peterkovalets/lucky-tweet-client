import { Link } from 'react-router-dom';
import { formatDate } from '@/utils/helpers';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { DEFAULT_AVATAR_URL } from '@/utils/constants';

function Post({ post }) {
  const {
    id,
    title,
    thumbnailUrl,
    authorUsername,
    authorAvatarUrl,
    createdAt,
  } = post;
  const numViews = 23;
  const numComments = 14;
  const tags = ['Java', 'DevOps'];

  return (
    <li>
      <Link to={`/posts/${id}`} className="block">
        <Card className="transition-shadow hover:ring-foreground/30">
          {thumbnailUrl && (
            <img src={thumbnailUrl} alt={title} className="w-full" />
          )}
          <CardContent className="flex gap-3 py-2">
            <Avatar>
              <AvatarImage
                src={authorAvatarUrl ?? DEFAULT_AVATAR_URL}
                alt={`${authorUsername}'s avatar`}
              />
              <AvatarFallback>{authorUsername}</AvatarFallback>
            </Avatar>
            <div>
              <h5 className="font-medium">{authorUsername}</h5>
              <time className="text-sm text-muted-foreground">
                {formatDate(createdAt)}
              </time>
              <h3 className="mt-1 text-2xl font-bold">{title}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge variant="secondary" key={tag}>
                    #{tag}
                  </Badge>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-5 text-muted-foreground">
                <span className="text-sm">{numViews}</span>
                <span className="text-sm">{numComments}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </li>
  );
}

export { Post };
