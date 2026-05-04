import { Controller, useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import { Link } from 'react-router-dom';
import { useLogin } from '@/features/authentication/useLogin';

function LoginForm() {
  const { login, isPending } = useLogin();
  const form = useForm({
    defaultValues: { username: '', password: '' },
  });

  function onSubmit(data) {
    login(data, { onSettled: () => form.reset() });
  }

  return (
    <Card className="w-md">
      <CardHeader>
        <CardTitle className="text-xl text-center">Sign In</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="username"
              control={form.control}
              rules={{ required: 'This field is required' }}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="username">
                    Username <span className="text-destructive">*</span>
                  </FieldLabel>
                  <Input
                    {...field}
                    id="username"
                    placeholder="john"
                    autoComplete="username"
                    disabled={isPending}
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="password"
              control={form.control}
              rules={{ required: 'This field is required' }}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="password">
                    Password <span className="text-destructive">*</span>
                  </FieldLabel>
                  <Input
                    {...field}
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    disabled={isPending}
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Button type="submit" disabled={isPending}>
              Login
            </Button>
            <p>
              Don't have an account yet?{' '}
              <Link to="/register" className="text-primary">
                Sign Up
              </Link>
            </p>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}

export { LoginForm };
