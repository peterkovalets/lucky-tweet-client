import { Container } from './container';
import { Logo } from './logo';
import { Skeleton } from './skeleton';

function HeaderSkeleton() {
  return (
    <header className="border-b border-slate-200 bg-slate-50 py-4">
      <Container>
        <nav className="flex items-center justify-between">
          <Logo />
          <Skeleton className="size-9 rounded-full" />
        </nav>
      </Container>
    </header>
  );
}

export { HeaderSkeleton };
