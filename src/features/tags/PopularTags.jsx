import TagItem from './TagItem';

const fakeTags = ['javascript', 'java', 'react'];

function PopularTags() {
  const tags = fakeTags;

  return (
    <div className="w-96 space-y-3 rounded-md bg-slate-50 py-4">
      <h4 className="ml-4 text-xl font-medium">Popular tags</h4>
      <ul>
        {tags.map((tag) => (
          <TagItem tag={tag} key={tag} />
        ))}
      </ul>
    </div>
  );
}

export default PopularTags;
