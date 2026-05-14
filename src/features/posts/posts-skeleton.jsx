import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

function PostSkeleton() {
  return (
    <li>
      <Card>
        <CardContent className="flex gap-3 py-2">
          <Skeleton className="size-8 shrink-0 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-3 w-24" />
            <Skeleton className="mt-1 h-6 w-3/4" />
            <div className="mt-2 flex gap-2">
              <Skeleton className="h-5 w-14 rounded-full" />
              <Skeleton className="h-5 w-14 rounded-full" />
            </div>
            <div className="mt-5 flex gap-5">
              <Skeleton className="h-3 w-6" />
              <Skeleton className="h-3 w-6" />
            </div>
          </div>
        </CardContent>
      </Card>
    </li>
  );
}

function PostsSkeleton({ count = 3 }) {
  return (
    <div className="grow">
      <ul className="space-y-5">
        {Array.from({ length: count }).map((_, i) => (
          <PostSkeleton key={i} />
        ))}
      </ul>
    </div>
  );
}

export { PostsSkeleton };
