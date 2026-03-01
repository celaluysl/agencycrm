import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface LoadingSkeletonProps {
    variant: "card" | "table" | "list";
    count?: number;
    className?: string;
}

export function LoadingSkeleton({ variant, count = 1, className }: LoadingSkeletonProps) {
    const items = Array.from({ length: count });

    if (variant === "card") {
        return (
            <div className={cn("grid gap-4 md:grid-cols-2 lg:grid-cols-4", className)}>
                {items.map((_, i) => (
                    <div key={i} className="flex flex-col gap-4 rounded-xl border p-6 shadow-sm border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1a2432]">
                        <div className="flex items-center justify-between">
                            <Skeleton className="h-4 w-[100px]" />
                            <Skeleton className="h-10 w-10 rounded-lg" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Skeleton className="h-8 w-[150px]" />
                            <Skeleton className="h-4 w-[80px]" />
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    if (variant === "table") {
        return (
            <div className={cn("rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1a2432]", className)}>
                <div className="p-4 flex gap-4 border-b border-gray-200 dark:border-gray-800">
                    <Skeleton className="h-4 w-[120px]" />
                    <Skeleton className="h-4 w-[150px]" />
                    <Skeleton className="h-4 w-[100px]" />
                    <Skeleton className="h-4 w-[80px]" />
                </div>
                <div>
                    {items.map((_, i) => (
                        <div key={i} className="p-4 flex gap-4 border-b last:border-0 border-gray-200 dark:border-gray-800">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // List Variant
    return (
        <div className={cn("flex flex-col gap-4", className)}>
            {items.map((_, i) => (
                <div key={i} className="flex items-center gap-4 rounded-lg border p-4 bg-white dark:border-gray-800 dark:bg-[#1a2432]">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2 flex-1">
                        <Skeleton className="h-4 w-[250px]" />
                        <Skeleton className="h-4 w-[200px]" />
                    </div>
                </div>
            ))}
        </div>
    );
}
