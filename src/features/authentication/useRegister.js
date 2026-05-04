import { useMutation } from '@tanstack/react-query';
import { register as registerApi } from '@/services/apiAuth';
import { toast } from 'react-toastify';

export function useRegister() {
  const { mutate: register, isPending } = useMutation({
    mutationFn: registerApi,
    onSuccess: (user) => {
      toast.success('Account created successfully!');
    },
    onError: (err) => {
      toast.error('Something went wrong! Try again later.'); // TEMP
    },
  });

  return { register, isPending };
}
