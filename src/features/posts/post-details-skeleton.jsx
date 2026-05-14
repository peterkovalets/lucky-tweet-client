import { Skeleton } from '@/components/ui/skeleton';

function PostDetailsSkeleton() {
  return (
    <article>
      <header className="flex items-center gap-3">
        <Skeleton className="size-8 shrink-0 rounded-full" />
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-3 w-32" />
      </header>

      <Skeleton className="mt-4 h-7 w-2/3" />

      <div className="mt-5 space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
      </div>
    </article>
  );
}

export { PostDetailsSkeleton };
