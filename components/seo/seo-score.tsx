"use client";

import React, { useEffect, useState } from "react";

interface SeoScoreProps {
  score: number; // 0-100
  size?: number;
  strokeWidth?: number;
  label?: string;
}

export function SeoScore({ score, size = 120, strokeWidth = 10, label = "SEO Skoru" }: SeoScoreProps) {
  const [animated, setAnimated] = useState(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (animated / 100) * circumference;

  const color = score > 80 ? "#10b981" : score >= 50 ? "#f59e0b" : "#ef4444";
  const bgColor = score > 80 ? "#d1fae5" : score >= 50 ? "#fef3c7" : "#fee2e2";
  const label_color = score > 80 ? "text-emerald-600" : score >= 50 ? "text-amber-500" : "text-rose-500";

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(score);
    }, 100);
    return () => clearTimeout(timer);
  }, [score]);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: "rotate(-90deg)" }}>
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={bgColor}
            strokeWidth={strokeWidth}
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 1s ease-in-out" }}
          />
        </svg>
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`text-2xl font-black ${label_color}`}>{score}</span>
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">/100</span>
        </div>
      </div>
      <span className="text-xs font-semibold text-muted-foreground">{label}</span>
    </div>
  );
}
