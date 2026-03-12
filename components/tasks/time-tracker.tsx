"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Clock3, Pause, Play, Plus, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export type TimerState = "idle" | "running" | "paused";

export interface TimeTrackerProps {
  /** Initial elapsed seconds (e.g. previously tracked time). */
  initialSeconds?: number;
  /** Called every second while running, with total elapsed seconds. */
  onTick?: (totalSeconds: number) => void;
  /** Called when the timer is stopped/reset. */
  onReset?: () => void;
  /** Called when the user saves a manual entry (value in minutes). */
  onManualAdd?: (minutes: number) => void;
  className?: string;
}

function formatHHMMSS(totalSeconds: number): string {
  const safe = Math.max(0, Math.floor(totalSeconds));
  const h = Math.floor(safe / 3600);
  const m = Math.floor((safe % 3600) / 60);
  const s = safe % 60;
  return [h, m, s].map((v) => String(v).padStart(2, "0")).join(":");
}

export function TimeTracker({
  initialSeconds = 0,
  onTick,
  onReset,
  onManualAdd,
  className,
}: TimeTrackerProps) {
  const [timerState, setTimerState] = useState<TimerState>("idle");
  const [elapsed, setElapsed] = useState(initialSeconds);
  const [manualInput, setManualInput] = useState("");
  const [manualError, setManualError] = useState("");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Sync initial seconds if prop changes (e.g. task switch)
  useEffect(() => {
    setElapsed(initialSeconds);
    setTimerState("idle");
  }, [initialSeconds]);

  const clearTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startTicking = useCallback(() => {
    clearTimer();
    intervalRef.current = setInterval(() => {
      setElapsed((prev) => {
        const next = prev + 1;
        onTick?.(next);
        return next;
      });
    }, 1000);
  }, [clearTimer, onTick]);

  useEffect(() => {
    if (timerState === "running") {
      startTicking();
    } else {
      clearTimer();
    }
    return clearTimer;
  }, [timerState, startTicking, clearTimer]);

  const handleStartPause = () => {
    setTimerState((prev) => {
      if (prev === "running") return "paused";
      return "running";
    });
  };

  const handleReset = () => {
    clearTimer();
    setTimerState("idle");
    setElapsed(0);
    onReset?.();
  };

  const handleManualAdd = () => {
    const raw = manualInput.trim();
    const value = Number(raw);

    if (!raw || !Number.isFinite(value) || !Number.isInteger(value) || value <= 0) {
      setManualError("Geçerli bir pozitif tam sayı girin.");
      return;
    }

    setManualError("");
    const addedSeconds = value * 60;
    setElapsed((prev) => prev + addedSeconds);
    onManualAdd?.(value);
    setManualInput("");
  };

  const isRunning = timerState === "running";
  const isPaused = timerState === "paused";
  const hasTime = elapsed > 0;

  return (
    <div className={cn("rounded-2xl border bg-background p-4 space-y-4", className)}>
      {/* Header */}
      <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground">
        <Clock3 className="size-4" />
        Zaman Takibi
        {isRunning && (
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.4, repeat: Infinity }}
            className="ml-auto flex items-center gap-1 text-emerald-500 font-semibold normal-case tracking-normal"
          >
            <span className="size-2 rounded-full bg-emerald-500 inline-block" />
            Sayılıyor
          </motion.span>
        )}
        {isPaused && (
          <span className="ml-auto flex items-center gap-1 text-amber-500 font-semibold normal-case tracking-normal">
            <span className="size-2 rounded-full bg-amber-500 inline-block" />
            Duraklatıldı
          </span>
        )}
      </div>

      {/* Timer display */}
      <div>
        <AnimatePresence mode="wait">
          <motion.p
            key={isRunning ? "running" : isPaused ? "paused" : "idle"}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className={cn(
              "text-4xl font-black tracking-tight tabular-nums transition-colors",
              isRunning && "text-emerald-600 dark:text-emerald-400",
              isPaused && "text-amber-600 dark:text-amber-400"
            )}
          >
            {formatHHMMSS(elapsed)}
          </motion.p>
        </AnimatePresence>
        <p className="mt-1 text-xs text-muted-foreground">
          {Math.floor(elapsed / 60)} dakika kayıt
        </p>
      </div>

      {/* Controls */}
      <div className="flex gap-2">
        <Button
          size="sm"
          className={cn(
            "flex-1",
            isRunning && "bg-amber-500 hover:bg-amber-600 text-white"
          )}
          onClick={handleStartPause}
          aria-label={isRunning ? "Zamanlayıcıyı duraklat" : "Zamanlayıcıyı başlat"}
        >
          {isRunning ? (
            <>
              <Pause className="size-4" />
              Duraklat
            </>
          ) : (
            <>
              <Play className="size-4" />
              {isPaused ? "Devam Et" : "Başlat"}
            </>
          )}
        </Button>

        <Button
          size="sm"
          variant="outline"
          onClick={handleReset}
          disabled={!hasTime && timerState === "idle"}
          aria-label="Zamanlayıcıyı sıfırla"
        >
          <RotateCcw className="size-4" />
          Sıfırla
        </Button>
      </div>

      {/* Manual time entry */}
      <div className="space-y-2 border-t pt-4">
        <label className="text-xs uppercase tracking-wide text-muted-foreground">
          Manuel Süre Ekle (dk)
        </label>
        <div className="flex gap-2">
          <Input
            type="number"
            min="1"
            step="1"
            value={manualInput}
            onChange={(e) => {
              setManualInput(e.target.value);
              setManualError("");
            }}
            onKeyDown={(e) => e.key === "Enter" && handleManualAdd()}
            placeholder="15"
            className={cn(manualError && "border-destructive focus-visible:ring-destructive")}
            aria-label="Manuel süre (dakika)"
          />
          <Button
            variant="outline"
            onClick={handleManualAdd}
            aria-label="Süre ekle"
          >
            <Plus className="size-4" />
          </Button>
        </div>
        {manualError && (
          <p className="text-xs text-destructive">{manualError}</p>
        )}
      </div>
    </div>
  );
}
