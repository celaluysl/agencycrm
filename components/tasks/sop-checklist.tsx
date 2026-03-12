"use client";

import React, { useState } from "react";
import { CheckCircle2, Circle } from "lucide-react";

export interface SopItem {
  id: string;
  label: string;
  done: boolean;
}

interface SopChecklistProps {
  items: SopItem[];
  onChange?: (items: SopItem[]) => void;
}

export function SopChecklist({ items, onChange }: SopChecklistProps) {
  const [list, setList] = useState<SopItem[]>(items);

  const toggle = (id: string) => {
    const updated = list.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    );
    setList(updated);
    onChange?.(updated);
  };

  const doneCount = list.filter((i) => i.done).length;
  const pct = list.length > 0 ? Math.round((doneCount / list.length) * 100) : 0;

  return (
    <div className="flex flex-col gap-3">
      {/* Progress bar */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ease-out ${
              pct === 100 ? "bg-emerald-500" : "bg-primary"
            }`}
            style={{ width: `${pct}%` }}
          />
        </div>
        <span className={`text-xs font-black tabular-nums shrink-0 ${pct === 100 ? "text-emerald-600 dark:text-emerald-400" : "text-muted-foreground"}`}>
          {doneCount}/{list.length} — %{pct}
        </span>
      </div>

      {/* Checklist items */}
      <div className="flex flex-col gap-1.5">
        {list.map((item) => (
          <button
            key={item.id}
            onClick={() => toggle(item.id)}
            className={`flex items-center gap-3 p-2.5 rounded-xl text-left transition-all group
              ${item.done
                ? "bg-emerald-50 dark:bg-emerald-900/20"
                : "bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
          >
            <span className="shrink-0 transition-transform group-active:scale-90">
              {item.done ? (
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
              ) : (
                <Circle className="h-5 w-5 text-gray-400 dark:text-gray-600" />
              )}
            </span>
            <span
              className={`text-sm font-medium transition-all duration-300 ${
                item.done
                  ? "line-through text-gray-400 dark:text-gray-600"
                  : "text-[#111418] dark:text-white"
              }`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
