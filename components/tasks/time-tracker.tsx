"use client";

import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, Square, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function formatTime(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return [
    h > 0 ? String(h).padStart(2, "0") : null,
    String(m).padStart(2, "0"),
    String(s).padStart(2, "0"),
  ]
    .filter(Boolean)
    .join(":");
}

interface TimeTrackerProps {
  initialSeconds?: number;
  onTimeChange?: (seconds: number) => void;
}

export function TimeTracker({ initialSeconds = 0, onTimeChange }: TimeTrackerProps) {
  const [elapsed, setElapsed] = useState(initialSeconds);
  const [running, setRunning] = useState(false);
  const [manualEntry, setManualEntry] = useState("");
  const [showManual, setShowManual] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setElapsed((prev) => {
          const next = prev + 1;
          onTimeChange?.(next);
          return next;
        });
      }, 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running, onTimeChange]);

  const handleStop = () => {
    setRunning(false);
    setElapsed(0);
    onTimeChange?.(0);
  };

  const handleManualSubmit = () => {
    const parts = manualEntry.split(":").map(Number);
    let totalSeconds = 0;
    if (parts.length === 3) totalSeconds = parts[0] * 3600 + parts[1] * 60 + parts[2];
    else if (parts.length === 2) totalSeconds = parts[0] * 60 + parts[1];
    else if (parts.length === 1) totalSeconds = parts[0] * 60;
    if (!isNaN(totalSeconds) && totalSeconds >= 0) {
      setElapsed(totalSeconds);
      onTimeChange?.(totalSeconds);
    }
    setManualEntry("");
    setShowManual(false);
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Timer display */}
      <div className={`flex items-center justify-between p-3 rounded-xl border transition-colors
        ${running
          ? "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800"
          : "bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-800"
        }`}
      >
        <div className="flex items-center gap-2">
          <Clock className={`h-4 w-4 ${running ? "text-emerald-600 dark:text-emerald-400 animate-pulse" : "text-muted-foreground"}`} />
          <span className={`text-xl font-black tabular-nums tracking-wider ${running ? "text-emerald-700 dark:text-emerald-300" : "text-[#111418] dark:text-white"}`}>
            {formatTime(elapsed)}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          {!running ? (
            <Button
              size="icon"
              className="h-8 w-8 bg-emerald-600 hover:bg-emerald-700 text-white"
              onClick={() => setRunning(true)}
            >
              <Play className="h-3.5 w-3.5" />
            </Button>
          ) : (
            <Button
              size="icon"
              variant="outline"
              className="h-8 w-8 border-amber-300 text-amber-600 hover:bg-amber-50 dark:border-amber-700 dark:text-amber-400"
              onClick={() => setRunning(false)}
            >
              <Pause className="h-3.5 w-3.5" />
            </Button>
          )}
          <Button
            size="icon"
            variant="outline"
            className="h-8 w-8 border-rose-300 text-rose-600 hover:bg-rose-50 dark:border-rose-700 dark:text-rose-400"
            onClick={handleStop}
          >
            <Square className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>

      {/* Manual entry */}
      {!showManual ? (
        <button
          onClick={() => setShowManual(true)}
          className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors text-left pl-1"
        >
          + Manuel süre gir
        </button>
      ) : (
        <div className="flex items-center gap-2">
          <Input
            value={manualEntry}
            onChange={(e) => setManualEntry(e.target.value)}
            placeholder="SS:DD veya DD (dakika)"
            className="h-8 text-xs"
            onKeyDown={(e) => { if (e.key === "Enter") handleManualSubmit(); if (e.key === "Escape") setShowManual(false); }}
            autoFocus
          />
          <Button size="sm" className="h-8 text-xs" onClick={handleManualSubmit}>
            Kaydet
          </Button>
          <Button size="sm" variant="ghost" className="h-8 text-xs" onClick={() => setShowManual(false)}>
            İptal
          </Button>
        </div>
      )}
    </div>
  );
}
