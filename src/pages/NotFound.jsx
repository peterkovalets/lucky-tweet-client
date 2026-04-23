import LinkButton from '../ui/LinkButton';

function NotFound() {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-semibold">Error 404</h2>
      <h3 className="mb-6 mt-2 text-3xl font-semibold text-slate-700">
        Page not found 😢
      </h3>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default NotFound;
