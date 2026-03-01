import { cn } from "@/lib/utils";
import { ArrowDownIcon, ArrowUpIcon, MinusIcon } from "lucide-react";

interface KpiCardProps {
    title: string;
    value: string | number;
    changeText?: string;
    trend?: "up" | "down" | "neutral";
    icon?: React.ReactNode;
    className?: string;
}

export function KpiCard({
    title,
    value,
    changeText,
    trend = "neutral",
    icon,
    className,
}: KpiCardProps) {
    const trendColor = {
        up: "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-500/10",
        down: "text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-500/10",
        neutral: "text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-500/10",
    }[trend];

    const TrendIcon = {
        up: ArrowUpIcon,
        down: ArrowDownIcon,
        neutral: MinusIcon,
    }[trend];

    return (
        <div
            className={cn(
                "flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-[#1a2432]",
                className
            )}
        >
            <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {title}
                </span>
                {icon && (
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                        {icon}
                    </div>
                )}
            </div>
            <div className="flex flex-col gap-1">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {value}
                </h3>
                {changeText && (
                    <div className="flex items-center gap-2">
                        <div
                            className={cn(
                                "flex items-center gap-1 rounded-md px-1.5 py-0.5 text-xs font-medium",
                                trendColor
                            )}
                        >
                            <TrendIcon className="h-3 w-3" />
                            {changeText}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
