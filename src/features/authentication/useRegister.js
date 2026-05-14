import { useMutation, useQueryClient } from '@tanstack/react-query';
import { register as registerApi } from '@/services/apiAuth';
import { toast } from 'sonner';

export function useRegister() {
  const queryClient = useQueryClient();

  const { mutate: register, isPending } = useMutation({
    mutationFn: registerApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
      toast.success('Account created successfully!');
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { register, isPending };
}
