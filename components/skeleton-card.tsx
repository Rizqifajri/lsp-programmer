import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
  return (
    <div className="flex space-y-3 gap-5">
      <Skeleton className="h-24 w-24 rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-56" />
        <Skeleton className="h-4 w-56" />
      </div>
    </div>
  )
}
