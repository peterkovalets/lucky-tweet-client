import { Skeleton } from '@/components/ui/skeleton';

function ProfileDetailsSkeleton() {
  return (
    <div className="flex items-center gap-8">
      <Skeleton className="h-32 w-32 rounded-full" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-7 w-40" />
        <div className="flex gap-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-20" />
        </div>
      </div>
    </div>
  );
}

export { ProfileDetailsSkeleton };
