import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DEFAULT_AVATAR_URL } from '@/utils/constants';
import { formatDate } from '@/utils/helpers';
import Markdown from 'react-markdown';
import { Link } from 'react-router-dom';

function PostDetails({ post }) {
  const {
    title,
    content,
    authorUsername,
    authorAvatarUrl,
    edited,
    createdAt,
    updatedAt,
  } = post;

  return (
    <article>
      <header className="flex items-center gap-3">
        <Avatar>
          <AvatarImage
            src={authorAvatarUrl ?? DEFAULT_AVATAR_URL}
            alt={`${authorUsername}'s avatar`}
          />
          <AvatarFallback>${authorUsername}'s avatar</AvatarFallback>
        </Avatar>
        <Link to={`/users/${authorUsername}`}>{authorUsername}</Link>
        <time className="text-sm text-slate-500">{formatDate(createdAt)}</time>
        {edited && (
          <time className="text-sm text-slate-500">
            (edited on {formatDate(updatedAt)})
          </time>
        )}
      </header>

      <h1 className="mt-4 text-2xl font-medium">{title}</h1>

      <div className="mt-5">
        <Markdown>{content}</Markdown>
      </div>
    </article>
  );
}

export { PostDetails };
