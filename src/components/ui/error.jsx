import { useNavigate } from 'react-router-dom';
import { Button } from './button';

function Error({ title, content }) {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <h2 className="text-4xl font-semibold">{title}</h2>
      <h3 className="mt-2 mb-6 text-3xl font-semibold text-muted-foreground">
        {content}
      </h3>
      <Button variant="link" onClick={() => navigate(-1)}>
        &larr; Go back
      </Button>
    </div>
  );
}

export { Error };
