import { useMutation } from '@tanstack/react-query';
import { login as loginApi } from '@/services/apiAuth';
import { toast } from 'react-toastify';

export function useLogin() {
  const { mutate: login, isPending } = useMutation({
    mutationFn: loginApi,
    onSuccess: (user) => {
      toast.success('Signed in successfully!');
    },
    onError: (err) => {
      toast.error('Something went wrong! Try again later.'); // TEMP
    },
  });

  return { login, isPending };
}
