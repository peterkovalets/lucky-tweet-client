import { Link } from 'react-router-dom';
import { HiOutlineChatBubbleLeft, HiOutlineEye } from 'react-icons/hi2';
import { formatDate } from '../../utils/helpers';

function Post({ post }) {
  const { id, title, imageUrl, createdAt, author } = post;
  const numViews = 23;
  const numComments = 14;
  const tags = ['Java', 'DevOps'];

  return (
    <li>
      <Link to={`/posts/${id}`}>
        <div className="overflow-hidden rounded-md border-2 border-slate-200 bg-slate-50 transition-colors duration-300 hover:border-slate-400">
          {imageUrl && <img src={imageUrl} alt={title} className="w-full" />}
          <div className="flex gap-3 p-6">
            <div>
              <img
                src={author.avatarUrl}
                alt={author.name}
                className="mt-2 rounded-full"
              />
            </div>
            <div>
              <h5 className="font-medium">{author}</h5>
              <time className="text-sm text-slate-500">
                {formatDate(createdAt)}
              </time>
              <h3 className="mt-1 text-2xl font-bold">{title}</h3>
              <ul className="mt-2 flex gap-5">
                {tags.map((tag) => (
                  <li className="text-sm text-slate-500" key={tag}>
                    #{tag}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center gap-5 text-slate-500">
                <div className="flex items-center gap-1">
                  <HiOutlineChatBubbleLeft className="h-5 w-5" />
                  <span className="text-sm">{numViews}</span>
                </div>
                <div className="flex items-center gap-1">
                  <HiOutlineEye className="h-5 w-5" />
                  <span className="text-sm">{numComments}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default Post;
