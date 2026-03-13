"use client";

import { motion } from "framer-motion";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { cn } from "@/lib/utils";

export type ProductivityChartDatum = {
  label: string;
  timeSpent: number;
  valueProduced: number;
};

type ProductivityChartProps = {
  data: ProductivityChartDatum[];
  className?: string;
};

type TooltipProps = {
  active?: boolean;
  payload?: Array<{
    dataKey?: string;
    value?: number;
    color?: string;
  }>;
  label?: string;
};

function CustomTooltip({ active, payload, label }: TooltipProps) {
  if (!active || !payload?.length) {
    return null;
  }

  const timeSpent = payload.find((entry) => entry.dataKey === "timeSpent");
  const valueProduced = payload.find((entry) => entry.dataKey === "valueProduced");

  return (
    <div className="min-w-44 rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-xl backdrop-blur dark:border-slate-700 dark:bg-slate-950/90">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
        {label}
      </p>
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-4 text-sm">
          <span className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            Üretilen değer
          </span>
          <span className="font-semibold text-slate-950 dark:text-white">
            {valueProduced?.value ?? 0}
          </span>
        </div>
        <div className="flex items-center justify-between gap-4 text-sm">
          <span className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-400 dark:bg-slate-500" />
            Harcanan süre
          </span>
          <span className="font-semibold text-slate-950 dark:text-white">
            {timeSpent?.value ?? 0} saat
          </span>
        </div>
      </div>
    </div>
  );
}

export function ProductivityChart({ data, className }: ProductivityChartProps) {
  const maxValue = Math.max(...data.map((item) => Math.max(item.timeSpent, item.valueProduced)));

  return (
    <motion.div
      className={cn("rounded-2xl bg-slate-50 p-4 dark:bg-slate-900/70", className)}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 12, right: 8, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="productivityValueFill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#136dec" stopOpacity={0.22} />
                <stop offset="100%" stopColor="#136dec" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#cbd5e1" opacity={0.4} />
            <XAxis
              dataKey="label"
              axisLine={false}
              tickLine={false}
              tickMargin={12}
              tick={{ fontSize: 12, fill: "#64748b", fontWeight: 600 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickMargin={10}
              domain={[0, maxValue + Math.ceil(maxValue * 0.1)]}
              tick={{ fontSize: 12, fill: "#64748b" }}
            />
            <Tooltip
              cursor={{ stroke: "#94a3b8", strokeDasharray: "4 4" }}
              content={<CustomTooltip />}
            />
            <Line
              type="monotone"
              dataKey="valueProduced"
              stroke="#136dec"
              strokeWidth={4}
              dot={{ r: 4, fill: "#136dec", stroke: "#ffffff", strokeWidth: 2 }}
              activeDot={{ r: 6, fill: "#136dec", stroke: "#ffffff", strokeWidth: 2 }}
              animationDuration={500}
            />
            <Line
              type="monotone"
              dataKey="timeSpent"
              stroke="#94a3b8"
              strokeWidth={3}
              strokeDasharray="10 6"
              dot={{ r: 3.5, fill: "#94a3b8", stroke: "#ffffff", strokeWidth: 2 }}
              activeDot={{ r: 5, fill: "#94a3b8", stroke: "#ffffff", strokeWidth: 2 }}
              animationDuration={650}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
