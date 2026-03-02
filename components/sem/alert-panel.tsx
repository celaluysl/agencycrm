"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type AlertType = "high_cpa" | "budget_exceeded" | "low_quality_score";

export interface SemAlert {
    id: string;
    type: AlertType;
    clientName: string;
    campaignName: string;
    message: string;
    timestamp: string;
}

interface AlertPanelProps {
    alerts: SemAlert[];
    onDismiss?: (id: string) => void;
}

export function CriticalAlertsPanel({ alerts, onDismiss }: AlertPanelProps) {
    const [localAlerts, setLocalAlerts] = useState<SemAlert[]>(alerts);

    const handleDismiss = (id: string) => {
        setLocalAlerts(prev => prev.filter(a => a.id !== id));
        if (onDismiss) onDismiss(id);
    };

    const getAlertConfig = (type: AlertType) => {
        switch (type) {
            case "high_cpa":
                return {
                    icon: "trending_up",
                    title: "Yüksek EBM Tespit Edildi",
                    colorClass: "bg-red-50 dark:bg-red-900/10 border-red-100 dark:border-red-900/30",
                    iconColor: "text-red-500",
                    titleColor: "text-red-800 dark:text-red-400",
                    descColor: "text-red-600 dark:text-red-300",
                    badgeColor: "bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400"
                };
            case "budget_exceeded":
                return {
                    icon: "credit_card_off",
                    title: "Bütçe Aşımı",
                    colorClass: "bg-red-50 dark:bg-red-900/10 border-red-100 dark:border-red-900/30",
                    iconColor: "text-red-500",
                    titleColor: "text-red-800 dark:text-red-400",
                    descColor: "text-red-600 dark:text-red-300",
                    badgeColor: "bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400"
                };
            case "low_quality_score":
                return {
                    icon: "analytics",
                    title: "Düşük Kalite Puanı",
                    colorClass: "bg-yellow-50 dark:bg-yellow-900/10 border-yellow-100 dark:border-yellow-900/30",
                    iconColor: "text-yellow-600",
                    titleColor: "text-yellow-800 dark:text-yellow-400",
                    descColor: "text-yellow-600 dark:text-yellow-300",
                    badgeColor: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/40 dark:text-yellow-400"
                };
        }
    };

    if (localAlerts.length === 0) {
        return (
            <div className="bg-white dark:bg-[#1a2432] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm p-5 space-y-4">
                <h3 className="font-bold text-sm flex items-center gap-2 text-gray-500">
                    <span className="material-symbols-outlined">notifications</span>
                    Kritik Uyarılar
                </h3>
                <div className="flex flex-col items-center justify-center py-6 text-gray-400">
                    <span className="material-symbols-outlined text-4xl mb-2 opacity-20">check_circle</span>
                    <p className="text-xs font-medium">Şu an için kritik bir uyarı bulunmuyor.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-[#1a2432] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm p-5 space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="font-bold text-sm flex items-center gap-2 text-red-500">
                    <span className="material-symbols-outlined">warning</span>
                    Kritik Uyarılar
                </h3>
                <span className="bg-red-100 text-red-600 font-bold text-[10px] px-2 py-0.5 rounded-full">
                    {localAlerts.length} Yeni
                </span>
            </div>

            <div className="space-y-3 overflow-hidden">
                <AnimatePresence initial={false}>
                    {localAlerts.map((alert) => {
                        const config = getAlertConfig(alert.type);
                        return (
                            <motion.div
                                key={alert.id}
                                initial={{ opacity: 0, x: 50, height: 0, marginBottom: 0 }}
                                animate={{ opacity: 1, x: 0, height: "auto", marginBottom: 12 }}
                                exit={{ opacity: 0, x: -50, height: 0, marginBottom: 0 }}
                                transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 25 }}
                                className={`flex gap-3 p-3 border rounded-lg relative overflow-hidden group ${config.colorClass}`}
                            >
                                <div className={`shrink-0 pt-0.5`}>
                                    <span className={`material-symbols-outlined text-lg ${config.iconColor}`}>{config.icon}</span>
                                </div>
                                <div className="flex-1 pr-6">
                                    <div className="flex justify-between items-start mb-1">
                                        <h4 className={`text-xs font-bold ${config.titleColor}`}>{config.title}</h4>
                                    </div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider ${config.badgeColor}`}>
                                            {alert.clientName}
                                        </span>
                                        <span className="text-[10px] text-gray-500 font-medium truncate max-w-[120px]">
                                            {alert.campaignName}
                                        </span>
                                    </div>
                                    <p className={`text-[10px] leading-tight ${config.descColor}`}>
                                        {alert.message}
                                    </p>
                                    <p className="text-[9px] text-gray-400 mt-2 font-medium">
                                        {alert.timestamp}
                                    </p>
                                </div>

                                <button
                                    onClick={() => handleDismiss(alert.id)}
                                    className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity rounded-md hover:bg-black/5 dark:hover:bg-white/5"
                                    title="Gizle"
                                >
                                    <span className="material-symbols-outlined text-sm">close</span>
                                </button>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>
        </div>
    );
}
