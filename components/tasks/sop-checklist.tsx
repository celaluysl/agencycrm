"use client";

import { useEffect, useMemo, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SopChecklistItem {
  id: string;
  label: string;
  done: boolean;
}

interface SopChecklistProps {
  items: SopChecklistItem[];
  onChange?: (items: SopChecklistItem[]) => void;
}

export function SopChecklist({ items, onChange }: SopChecklistProps) {
  const [localItems, setLocalItems] = useState(items);

  useEffect(() => {
    setLocalItems(items);
  }, [items]);

  const completedCount = useMemo(
    () => localItems.filter((item) => item.done).length,
    [localItems]
  );

  const progress = localItems.length
    ? Math.round((completedCount / localItems.length) * 100)
    : 0;

  const toggleItem = (id: string) => {
    setLocalItems((current) => {
      const nextItems = current.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      );

      onChange?.(nextItems);
      return nextItems;
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
            SOP Kontrol Listesi
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Görev tamamlanmadan önce zorunlu adımları kontrol et.
          </p>
        </div>
        <div className="min-w-44 space-y-2">
          <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
            <span>
              {completedCount}/{localItems.length} tamamlandı
            </span>
            <span>%{progress}</span>
          </div>
          <div className="h-2 rounded-full bg-muted">
            <div
              className="h-2 rounded-full bg-primary transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {localItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => toggleItem(item.id)}
            className={cn(
              "flex w-full items-start gap-3 rounded-2xl border p-4 text-left transition-colors",
              item.done
                ? "border-emerald-200 bg-emerald-50 dark:border-emerald-900/40 dark:bg-emerald-900/10"
                : "border-border bg-background hover:border-primary/40"
            )}
          >
            <CheckCircle2
              className={cn(
                "mt-0.5 size-5 shrink-0 transition-colors",
                item.done ? "text-emerald-500" : "text-muted-foreground"
              )}
            />
            <span
              className={cn(
                "text-sm transition-all",
                item.done && "text-muted-foreground line-through"
              )}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
