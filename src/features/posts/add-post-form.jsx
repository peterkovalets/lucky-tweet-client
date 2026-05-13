import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Field, FieldError, FieldGroup } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';
import { Button } from '@/components/ui/button';
import { useCreatePost } from './useCreatePost';
import { useNavigate } from 'react-router-dom';

function AddPostForm() {
  const { createPost, isPending } = useCreatePost();
  const form = useForm({
    defaultValues: {
      title: '',
    },
  });
  const [content, setContent] = useState();
  const navigate = useNavigate();

  function onSubmit(data) {
    createPost(
      { ...data, content },
      {
        onSuccess: (newPost) => navigate(`/posts/${newPost.id}`),
      },
    );
  }

  return (
    <Card className="w-4xl">
      <CardTitle className="text-xl text-center">New Post</CardTitle>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="title"
              control={form.control}
              rules={{
                required: 'This field is required',
                minLength: {
                  value: 3,
                  message: 'Title should be at least 3 characters long',
                },
                maxLength: {
                  value: 100,
                  message: 'Title can be 100 characters max',
                },
              }}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <Input
                    {...field}
                    placeholder="Title"
                    aria-invalid={fieldState.invalid}
                    disabled={isPending}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <div data-color-mode="light">
              <MDEditor
                value={content}
                onChange={setContent}
                textareaProps={{
                  placeholder: 'Content',
                  maxLength: 1000,
                  disabled: isPending,
                  required: true,
                }}
                previewOptions={{
                  rehypePlugins: [[rehypeSanitize]],
                }}
                preview="edit"
              />
            </div>
            <div className="flex items-center justify-end">
              <Button type="submit" disabled={isPending}>
                Publish
              </Button>
            </div>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}

export { AddPostForm };
