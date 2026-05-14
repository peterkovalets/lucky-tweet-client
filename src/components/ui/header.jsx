import { Container } from './container';
import { Logo } from './logo';
import { Button } from './button';
import { useUser } from '@/features/authentication/useUser';
import { Link } from 'react-router-dom';
import { DropdownMenuAvatar } from './dropdown-menu-avatar';
import { HeaderSkeleton } from './header-skeleton';

function Header() {
  const { isLoading, isAuthenticated } = useUser();

  if (isLoading) return <HeaderSkeleton />;

  return (
    <header className="border-b border-slate-200 bg-slate-50 py-4">
      <Container>
        <nav className="flex items-center justify-between">
          <Logo />
          {isAuthenticated ? (
            <DropdownMenuAvatar />
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
