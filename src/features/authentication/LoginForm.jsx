import { useState } from 'react';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import Input from '../../ui/Input';
import LinkButton from '../../ui/LinkButton';
import PasswordInput from '../../ui/PasswordInput';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;

    console.log(email, password);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-medium">Login</h2>

      <div className="my-5 flex flex-col gap-3">
        <Input
          type="email"
          placeholder="Email"
          autoComplete="username"
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordInput
          placeholder="Password"
          autoComplete="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="primary">Login</Button>
      </div>

      <p className="text-slate-500">
        Don&apos;t have an account yet?{' '}
        <LinkButton to="/register">Sign Up</LinkButton>
      </p>
    </Form>
  );
}

export default LoginForm;
