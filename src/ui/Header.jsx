import Container from './Container';
import Logo from './Logo';
import Button from './Button';

function Header() {
  return (
    <header className="border-b border-slate-200 bg-slate-50 py-4">
      <Container>
        <nav className="flex items-center justify-between">
          <Logo />
          <Button to="/register" variant="primary">
            Sign Up
          </Button>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
