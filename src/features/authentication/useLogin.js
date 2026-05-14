import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '@/services/apiAuth';
import { toast } from 'sonner';

export function useLogin() {
  const queryClient = useQueryClient();

  const { mutate: login, isPending } = useMutation({
    mutationFn: loginApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
      toast.success('Signed in successfully!');
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { login, isPending };
}
