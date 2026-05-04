import { Controller, useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRegister } from './useRegister';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import { Link } from 'react-router-dom';

function RegisterForm() {
  const { register: registerAccount, isPending } = useRegister();
  const form = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
  });

  function onSubmit(data) {
    registerAccount(data, {
      onSettled: () => form.reset(),
    });
  }

  return (
    <Card className="w-md">
      <CardHeader>
        <CardTitle className="text-xl text-center">Sign Up</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="username"
              control={form.control}
              rules={{
                required: 'This field is required',
                minLength: {
                  value: 6,
                  message: 'Username should be at least 6 characters long',
                },
                maxLength: {
                  value: 30,
                  message: 'Username can be 30 characters max',
                },
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: 'Username should contain only latin characters',
                },
              }}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="username">
                    Username <span className="text-destructive">*</span>
                  </FieldLabel>
                  <Input
                    {...field}
                    placeholder="john"
                    id="username"
                    aria-invalid={fieldState.invalid}
                    disabled={isPending}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="email"
              control={form.control}
              rules={{
                required: 'This field is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Email is not valid',
                },
              }}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="email">
                    Email <span className="text-destructive">*</span>
                  </FieldLabel>
                  <Input
                    {...field}
                    type="email"
                    placeholder="john@gmail.com"
                    id="email"
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
              rules={{
                required: 'This field is required',
                minLength: {
                  value: 6,
                  message: 'Password should have at least 6 characters',
                },
              }}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="password">
                    Password <span className="text-destructive">*</span>
                  </FieldLabel>
                  <Input
                    {...field}
                    type="password"
                    id="password"
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
              name="passwordConfirm"
              control={form.control}
              rules={{
                required: 'This field is required',
                validate: (value, values) =>
                  value === values.password || 'Passwords do not match',
              }}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="passwordConfirm">
                    Confirm Password <span className="text-destructive">*</span>
                  </FieldLabel>
                  <Input
                    {...field}
                    type="password"
                    id="passwordConfirm"
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
              Create account
            </Button>
            <p>
              Already have an account?{' '}
              <Link to="/login" className="text-primary">
                Login
              </Link>
            </p>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}

export { RegisterForm };
