"use client";

import React from "react";
import { HelpCircle } from "lucide-react";

interface Metric {
  key: "lcp" | "cls" | "fid" | "ttfb" | "inp";
  label: string;
  value: string;
  unit: string;
  status: "good" | "needs_improvement" | "poor";
  description: string;
  good: string;
  poor: string;
}

interface CoreWebVitalsProps {
  metrics: Metric[];
}

const STATUS_CONFIG = {
  good: {
    label: "İyi",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    border: "border-emerald-200 dark:border-emerald-800",
    text: "text-emerald-700 dark:text-emerald-400",
    dot: "bg-emerald-500",
    badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400",
  },
  needs_improvement: {
    label: "Geliştirilebilir",
    bg: "bg-amber-50 dark:bg-amber-900/20",
    border: "border-amber-200 dark:border-amber-800",
    text: "text-amber-700 dark:text-amber-400",
    dot: "bg-amber-500",
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400",
  },
  poor: {
    label: "Zayıf",
    bg: "bg-rose-50 dark:bg-rose-900/20",
    border: "border-rose-200 dark:border-rose-800",
    text: "text-rose-700 dark:text-rose-400",
    dot: "bg-rose-500",
    badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-400",
  },
};

export function CoreWebVitals({ metrics }: CoreWebVitalsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {metrics.map((metric) => {
        const config = STATUS_CONFIG[metric.status];
        return (
          <div
            key={metric.key}
            className={`rounded-2xl border p-5 flex flex-col gap-3 ${config.bg} ${config.border}`}
          >
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <div className={`w-2 h-2 rounded-full ${config.dot}`} />
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {metric.key.toUpperCase()}
                  </span>
                </div>
                <span className="text-sm font-semibold text-[#111418] dark:text-white mt-0.5">
                  {metric.label}
                </span>
              </div>
              {/* Tooltip */}
              <div className="group relative cursor-help">
                <HelpCircle className="h-4 w-4 text-muted-foreground" />
                <div className="absolute right-0 top-full mt-1 hidden group-hover:block w-56 bg-gray-900 text-white text-xs p-3 rounded-xl shadow-xl z-10">
                  <p className="font-semibold mb-1">{metric.label}</p>
                  <p className="opacity-75 leading-relaxed">{metric.description}</p>
                  <div className="mt-2 pt-2 border-t border-white/10 flex flex-col gap-0.5 text-[10px]">
                    <span className="text-emerald-400">✅ İyi: {metric.good}</span>
                    <span className="text-rose-400">❌ Zayıf: {metric.poor}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-end gap-1.5">
              <span className={`text-3xl font-black ${config.text}`}>{metric.value}</span>
              <span className="text-xs font-bold text-muted-foreground mb-1">{metric.unit}</span>
            </div>

            <span className={`self-start text-xs font-bold px-2 py-0.5 rounded-full ${config.badge}`}>
              {config.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
