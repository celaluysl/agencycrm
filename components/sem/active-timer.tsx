"use client";

import React, { useState, useEffect } from "react";
import useSWR from "swr";

// Local storage key for demo purposes
const TIMER_STORAGE_KEY = "agenciflow_sem_active_timer";

const fetcher = async () => {
    // Simulate fetching timer data from an API
    // In a real scenario, this would check the backend for active timers
    const stored = localStorage.getItem(TIMER_STORAGE_KEY);
    if (stored) {
        return JSON.parse(stored);
    }
    return {
        active: false,
        isPaused: false,
        startTime: null,
        elapsedSeconds: 0,
        taskId: null,
        taskName: null,
        project: null
    };
};

export function ActiveTimerWidget() {
    const { data, mutate } = useSWR('active-timer', fetcher, {
        refreshInterval: 1000,
    });

    const [counter, setCounter] = useState(0);

    // Recalculate local counter state
    useEffect(() => {
        if (data?.active && data?.startTime && !data?.isPaused) {
            const interval = setInterval(() => {
                setCounter((data.elapsedSeconds || 0) + Math.floor((Date.now() - data.startTime) / 1000));
            }, 1000);
            return () => clearInterval(interval);
        } else if (data?.isPaused) {
            setCounter(data.elapsedSeconds || 0);
        } else {
            setCounter(0);
        }
    }, [data?.active, data?.startTime, data?.isPaused, data?.elapsedSeconds]);

    const handleStart = (taskId: string, taskName: string, project: string) => {
        const newTimerState = {
            active: true,
            isPaused: false,
            startTime: Date.now(),
            elapsedSeconds: 0,
            taskId,
            taskName,
            project
        };
        localStorage.setItem(TIMER_STORAGE_KEY, JSON.stringify(newTimerState));
        mutate(newTimerState);
    };

    const handlePause = () => {
        if (!data || !data.active || data.isPaused || !data.startTime) return;
        const newElapsedSeconds = (data.elapsedSeconds || 0) + Math.floor((Date.now() - data.startTime) / 1000);
        const pausedState = {
            ...data,
            isPaused: true,
            startTime: null,
            elapsedSeconds: newElapsedSeconds
        };
        localStorage.setItem(TIMER_STORAGE_KEY, JSON.stringify(pausedState));
        mutate(pausedState);
    };

    const handleResume = () => {
        if (!data || !data.active || !data.isPaused) return;
        const resumedState = {
            ...data,
            isPaused: false,
            startTime: Date.now()
        };
        localStorage.setItem(TIMER_STORAGE_KEY, JSON.stringify(resumedState));
        mutate(resumedState);
    };

    const handleStop = () => {
        // Stop the timer and clear local storage mock
        const stoppedState = {
            active: false,
            isPaused: false,
            startTime: null,
            elapsedSeconds: 0,
            taskId: null,
            taskName: null,
            project: null
        };
        localStorage.setItem(TIMER_STORAGE_KEY, JSON.stringify(stoppedState));
        mutate(stoppedState);
    };

    const formatTime = (totalSeconds: number) => {
        const h = Math.floor(totalSeconds / 3600);
        const m = Math.floor((totalSeconds % 3600) / 60);
        const s = totalSeconds % 60;
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    // Give a default mock task to start if not active
    const startDemoTimer = () => {
        handleStart("SEM-042", "Google Ads Kampanya Optimizasyonu", "E-Ticaret Müşterisi");
    };

    if (!data) return <div className="animate-pulse h-24 bg-gray-100 dark:bg-gray-800 rounded-xl"></div>;

    return (
        <div className="bg-white dark:bg-[#1a2432] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm p-5 relative overflow-hidden">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-sm flex items-center gap-2">
                    <span className={`material-symbols-outlined ${data.active && !data.isPaused ? 'text-green-500 animate-pulse' : data.isPaused ? 'text-yellow-500' : 'text-gray-400'}`}>
                        timer
                    </span>
                    {data.active && !data.isPaused ? 'Aktif Görev Zamanlayıcı' : data.isPaused ? 'Zamanlayıcı Duraklatıldı' : 'Zamanlayıcı Beklemede'}
                </h3>

                {data.active && (
                    <span className="text-xl font-black text-gray-900 dark:text-gray-100 font-mono tracking-wider tabular-nums">
                        {formatTime(counter)}
                    </span>
                )}
            </div>

            {data.active ? (
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 relative">
                    <div className="absolute -left-[1px] top-1/2 -translate-y-1/2 w-[3px] h-3/4 bg-primary rounded-r-md"></div>
                    <div className="flex justify-between items-end">
                        <div>
                            <p className="text-[10px] uppercase font-bold text-primary mb-1 tracking-wider">{data.project}</p>
                            <p className="font-semibold text-sm text-gray-900 dark:text-gray-100 leading-tight">{data.taskName}</p>
                            <p className="text-[11px] text-gray-500 mt-1">Görev ID: {data.taskId}</p>
                        </div>

                        <div className="flex gap-2">
                            {data.isPaused ? (
                                <button
                                    onClick={handleResume}
                                    className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 hover:bg-green-100 dark:bg-green-500/10 dark:hover:bg-green-500/20 text-green-600 font-bold text-xs rounded-md transition-colors"
                                >
                                    <span className="material-symbols-outlined text-[16px]">play_arrow</span>
                                    Devam
                                </button>
                            ) : (
                                <button
                                    onClick={handlePause}
                                    className="flex items-center gap-1.5 px-3 py-1.5 bg-yellow-50 hover:bg-yellow-100 dark:bg-yellow-500/10 dark:hover:bg-yellow-500/20 text-yellow-600 font-bold text-xs rounded-md transition-colors"
                                >
                                    <span className="material-symbols-outlined text-[16px]">pause</span>
                                    Duraklat
                                </button>
                            )}
                            <button
                                onClick={handleStop}
                                className="flex items-center gap-1.5 px-3 py-1.5 bg-red-50 hover:bg-red-100 dark:bg-red-500/10 dark:hover:bg-red-500/20 text-red-600 font-bold text-xs rounded-md transition-colors"
                            >
                                <span className="material-symbols-outlined text-[16px]">stop</span>
                                Durdur
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-lg p-4">
                    <div className="text-sm text-gray-500 relative flex items-center gap-3">
                        <div className="size-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-gray-400 text-sm">hourglass_disabled</span>
                        </div>
                        <p className="text-xs">Şu anda çalışan bir görev yok.</p>
                    </div>
                    <button
                        onClick={startDemoTimer}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-primary hover:bg-primary/90 text-white font-bold text-xs rounded-md transition-colors"
                    >
                        <span className="material-symbols-outlined text-[16px]">play_arrow</span>
                        Başlat
                    </button>
                </div>
            )}
        </div>
    );
}
