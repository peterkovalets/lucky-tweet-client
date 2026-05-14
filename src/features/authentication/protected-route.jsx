import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from './useUser';

function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading, error } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !error && !isAuthenticated)
      navigate('/login', { replace: true });
  }, [isAuthenticated, isLoading, error, navigate]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong. Try again later.</p>;

  return children;
}

export { ProtectedRoute };
