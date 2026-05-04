import { Container } from './container';
import { Logo } from './logo';
import { Button } from './button';
import { useUser } from '@/features/authentication/useUser';
import { Link } from 'react-router-dom';

function Header() {
  const { user, isLoading, isAuthenticated } = useUser();

  if (isLoading) return <p>Loading...</p>;

  return (
    <header className="border-b border-slate-200 bg-slate-50 py-4">
      <Container>
        <nav className="flex items-center justify-between">
          <Logo />
          {isAuthenticated ? (
            <div className="flex items-center gap-x-4">
              <p>{user.username}</p>
              <Button size="lg" asChild>
                <Link to="logout">Sign Out</Link>
              </Button>
            </div>
          ) : (
            <Button size="lg" asChild>
              <Link to="register">Sign Up</Link>
            </Button>
          )}
        </nav>
      </Container>
    </header>
  );
}

export { Header };
