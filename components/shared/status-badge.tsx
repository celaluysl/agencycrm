import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const badgeVariants = cva(
    "inline-flex items-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            status: {
                success:
                    "bg-green-100 text-green-700 hover:bg-green-100/80 dark:bg-green-500/10 dark:text-green-400",
                warning:
                    "bg-orange-100 text-orange-700 hover:bg-orange-100/80 dark:bg-orange-500/10 dark:text-orange-400",
                destructive:
                    "bg-red-100 text-red-700 hover:bg-red-100/80 dark:bg-red-500/10 dark:text-red-400",
                info: "bg-blue-100 text-blue-700 hover:bg-blue-100/80 dark:bg-blue-500/10 dark:text-blue-400",
                default:
                    "bg-gray-100 text-gray-700 hover:bg-gray-100/80 dark:bg-gray-800 dark:text-gray-300",
            },
            size: {
                sm: "px-2 py-0.5 text-xs",
                md: "px-2.5 py-0.5 text-sm",
                lg: "px-3 py-1 text-base",
            },
            dot: {
                true: "pl-1.5",
                false: "",
            },
        },
        defaultVariants: {
            status: "default",
            size: "sm",
            dot: false,
        },
    }
);

interface StatusBadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
    label: string;
}

export function StatusBadge({
    className,
    status = "default",
    size,
    dot = true,
    label,
    ...props
}: StatusBadgeProps) {
    return (
        <div
            className={cn(badgeVariants({ status, size, dot }), className)}
            {...props}
        >
            {dot && (
                <span
                    className={cn(
                        "mr-1.5 h-1.5 w-1.5 rounded-full shrink-0",
                        status === "success" && "bg-green-500",
                        status === "warning" && "bg-orange-500",
                        status === "destructive" && "bg-red-500",
                        status === "info" && "bg-blue-500",
                        status === "default" && "bg-gray-500"
                    )}
                    aria-hidden="true"
                />
            )}
            <span>{label}</span>
        </div>
    );
}
