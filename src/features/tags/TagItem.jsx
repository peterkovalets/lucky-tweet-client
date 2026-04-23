import { Link } from 'react-router-dom';

function TagItem({ tag }) {
  return (
    <li className="text-lg">
      <Link
        to={`/tags/${tag}`}
        className="block p-2 pl-4 transition-colors duration-300 hover:bg-slate-200"
      >
        # {tag}
      </Link>
    </li>
  );
}

export default TagItem;
