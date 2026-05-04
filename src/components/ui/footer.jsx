import { Container } from './container';

function Footer() {
  return (
    <footer className="bg-slate-950 py-4 text-slate-50">
      <Container>
        <p>LuckyTweet {new Date().getFullYear()}</p>
      </Container>
    </footer>
  );
}

export { Footer };
