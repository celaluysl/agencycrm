"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type PerformanceBadgeItem = {
  name: string;
  description: string;
  icon: ReactNode;
  unlocked: boolean;
  progress: number;
  accentClass: string;
};

type PerformanceBadgesProps = {
  items: PerformanceBadgeItem[];
  className?: string;
};

export function PerformanceBadges({ items, className }: PerformanceBadgesProps) {
  return (
    <div className={cn("grid gap-4", items.length > 3 ? "sm:grid-cols-2" : "grid-cols-1", className)}>
      {items.map((item, index) => (
        <motion.div
          key={item.name}
          className={cn(
            "rounded-2xl border p-4 transition-transform",
            item.accentClass,
            item.unlocked ? "shadow-sm" : "grayscale"
          )}
          initial={{ opacity: 0, y: 14, scale: item.unlocked ? 0.96 : 1 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: item.unlocked ? [0, -1.5, 1.5, 0] : 0,
          }}
          transition={{
            duration: item.unlocked ? 0.5 : 0.35,
            delay: index * 0.05,
            ease: "easeOut",
          }}
        >
          <div className="mb-4 flex items-start justify-between gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 shadow-sm dark:bg-slate-900/60">
              {item.icon}
            </div>
            <Badge
              variant="outline"
              className="border-white/60 bg-white/80 px-2 py-1 text-[11px] font-bold uppercase tracking-wide text-slate-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300"
            >
              {item.unlocked ? "Acik" : `%${item.progress}`}
            </Badge>
          </div>

          <h3 className="text-base font-bold">{item.name}</h3>
          <p className="mt-1 text-sm leading-6 opacity-80">{item.description}</p>

          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide opacity-75">
              <span>{item.unlocked ? "Tamamlandi" : "Ilerleme"}</span>
              <span>%{item.unlocked ? 100 : item.progress}</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/70 dark:bg-slate-900/60">
              <motion.div
                className={cn(
                  "h-full rounded-full",
                  item.unlocked ? "bg-primary" : "bg-slate-500"
                )}
                initial={{ width: 0 }}
                animate={{ width: `${item.unlocked ? 100 : item.progress}%` }}
                transition={{ duration: 0.55, delay: 0.1 + index * 0.05, ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
