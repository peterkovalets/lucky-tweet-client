import { useMutation } from '@tanstack/react-query';
import { login as loginApi } from '@/services/apiAuth';
import { toast } from 'react-toastify';

export function useLogin() {
  const { mutate: login, isPending } = useMutation({
    mutationFn: loginApi,
    onSuccess: () => {
      toast.success('Signed in successfully!');
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { login, isPending };
}
