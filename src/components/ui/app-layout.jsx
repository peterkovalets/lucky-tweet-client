import { Outlet } from 'react-router-dom';
import { Container } from './container';
import { Footer } from './footer';
import { Header } from './header';
import { Main } from './main';

function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
      <Footer />
    </div>
  );
}

export { AppLayout };
