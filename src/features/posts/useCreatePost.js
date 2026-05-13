import { createPost as createPostApi } from '@/services/apiPosts';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

export function useCreatePost() {
  const { mutate: createPost, isPending } = useMutation({
    mutationFn: createPostApi,
    onSuccess: () => {
      toast.success('Post created successfully!');
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createPost, isPending };
}
