"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export interface ProjectCardProps {
    name: string;
    type: string;
    startDate: string;
    endDate: string;
    progress: number;
    status: "active" | "completed" | "on_hold";
    description?: string;
}

export function ProjectCard({
    name,
    type,
    startDate,
    endDate,
    progress,
    status,
    description,
}: ProjectCardProps) {
    let statusColor = "bg-primary text-primary-foreground";
    let statusLabel = "Aktif";

    if (status === "completed") {
        statusColor = "bg-green-500 text-white";
        statusLabel = "Tamamlandı";
    } else if (status === "on_hold") {
        statusColor = "bg-orange-500 text-white";
        statusLabel = "Beklemede";
    }

    return (
        <div className="bg-white dark:bg-[#1a2432] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm p-5 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-3">
                <div>
                    <h3 className="font-bold text-base text-gray-900 dark:text-gray-100">{name}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{type}</p>
                </div>
                <Badge className={statusColor} variant="default">{statusLabel}</Badge>
            </div>

            {description && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {description}
                </p>
            )}

            <div className="grid grid-cols-2 gap-4 mb-4 text-[11px] bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg">
                <div>
                    <p className="text-gray-500 font-medium mb-1 uppercase tracking-wider">Başlangıç</p>
                    <p className="font-bold text-gray-800 dark:text-gray-200">{startDate}</p>
                </div>
                <div>
                    <p className="text-gray-500 font-medium mb-1 uppercase tracking-wider">Teslim / Bitiş</p>
                    <p className="font-bold text-gray-800 dark:text-gray-200">{endDate}</p>
                </div>
            </div>

            <div className="space-y-1.5">
                <div className="flex justify-between items-end">
                    <p className="text-xs font-bold text-gray-700 dark:text-gray-300">İlerleme</p>
                    <span className="text-xs font-bold text-primary">%{progress}</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
                    <motion.div
                        className={`h-full rounded-full ${status === "completed" ? "bg-green-500" : "bg-primary"}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    />
                </div>
            </div>
        </div>
    );
}
