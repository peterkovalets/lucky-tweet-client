import { LinkButton } from './link-button';

function Error({ title, content }) {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-semibold">{title}</h2>
      <h3 className="mb-6 mt-2 text-3xl font-semibold text-slate-700">
        {content}
      </h3>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export { Error };
