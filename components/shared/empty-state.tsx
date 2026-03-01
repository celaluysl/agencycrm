import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
    title: string;
    description: string;
    icon?: ReactNode;
    actionLabel?: string;
    onAction?: () => void;
    className?: string;
}

export function EmptyState({
    title,
    description,
    icon,
    actionLabel,
    onAction,
    className,
}: EmptyStateProps) {
    return (
        <div
            className={cn(
                "flex flex-col items-center justify-center p-8 text-center rounded-xl border border-dashed border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-[#1a2432]/50 min-h-[300px]",
                className
            )}
        >
            {icon && (
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                    {icon}
                </div>
            )}
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                {title}
            </h3>
            <p className="mb-6 max-w-sm text-sm text-gray-500 dark:text-gray-400">
                {description}
            </p>
            {actionLabel && onAction && (
                <Button onClick={onAction} variant="default">
                    {actionLabel}
                </Button>
            )}
        </div>
    );
}
