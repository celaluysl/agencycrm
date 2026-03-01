"use client";

import React from "react";
import Link from "next/link";

export interface ServiceMetric {
    label: string;
    value: string;
    trend?: "up" | "down" | "neutral";
    trendValue?: string;
}

export interface ServiceCardProps {
    title: string;
    icon: string;
    href: string;
    isActive: boolean;
    metrics: ServiceMetric[];
    lastUpdate: string;
}

export function ServiceCard({
    title,
    icon,
    href,
    isActive,
    metrics,
    lastUpdate,
}: ServiceCardProps) {
    return (
        <Link href={href} className="block group">
            <div className="bg-white dark:bg-[#1a2432] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm p-5 hover:shadow-md transition-all hover:border-primary/50 relative overflow-hidden h-full">
                {/* Top Section */}
                <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 rounded-lg ${isActive ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-500'}`}>
                        <span className="material-symbols-outlined text-2xl">{icon}</span>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${isActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                            {isActive ? "Aktif" : "Pasif"}
                        </span>
                        <span className="text-[10px] text-gray-400 mt-1">Son G.: {lastUpdate}</span>
                    </div>
                </div>

                {/* Title */}
                <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors">
                    {title}
                </h3>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3">
                    {metrics.map((metric, idx) => (
                        <div key={idx} className="bg-gray-50 dark:bg-gray-800/50 p-2.5 rounded-lg">
                            <p className="text-[10px] text-gray-500 font-medium mb-1 uppercase tracking-wider">{metric.label}</p>
                            <div className="flex items-end gap-1.5">
                                <p className="font-bold text-sm text-gray-900 dark:text-gray-100">{metric.value}</p>
                                {metric.trend && metric.trendValue && (
                                    <span className={`text-[10px] font-bold flex items-center ${metric.trend === 'up' ? 'text-green-500' :
                                            metric.trend === 'down' ? 'text-red-500' : 'text-gray-500'
                                        }`}>
                                        <span className="material-symbols-outlined text-[10px] mr-0.5">
                                            {metric.trend === 'up' ? 'trending_up' :
                                                metric.trend === 'down' ? 'trending_down' : 'trending_flat'}
                                        </span>
                                        {metric.trendValue}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom hover arrow */}
                <div className="mt-4 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 transform duration-300">
                    <span className="material-symbols-outlined text-primary text-xl">arrow_forward</span>
                </div>
            </div>
        </Link>
    );
}
