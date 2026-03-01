"use client";

import React from "react";

export function SalaryDistributionChart() {
    return (
        <div className="flex flex-col items-center">
            <div className="relative size-40 mb-6">
                <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                    <circle
                        className="stroke-blue-500 fill-none"
                        cx="18"
                        cy="18"
                        r="15.915"
                        strokeDasharray="45 100"
                        strokeDashoffset="0"
                        strokeWidth="6"
                    ></circle>
                    <circle
                        className="stroke-purple-500 fill-none"
                        cx="18"
                        cy="18"
                        r="15.915"
                        strokeDasharray="20 100"
                        strokeDashoffset="-45"
                        strokeWidth="6"
                    ></circle>
                    <circle
                        className="stroke-orange-500 fill-none"
                        cx="18"
                        cy="18"
                        r="15.915"
                        strokeDasharray="15 100"
                        strokeDashoffset="-65"
                        strokeWidth="6"
                    ></circle>
                    <circle
                        className="stroke-green-500 fill-none"
                        cx="18"
                        cy="18"
                        r="15.915"
                        strokeDasharray="10 100"
                        strokeDashoffset="-80"
                        strokeWidth="6"
                    ></circle>
                    <circle
                        className="stroke-gray-300 fill-none"
                        cx="18"
                        cy="18"
                        r="15.915"
                        strokeDasharray="10 100"
                        strokeDashoffset="-90"
                        strokeWidth="6"
                    ></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-base font-bold text-[#111418] dark:text-white">₺842k</span>
                    <span className="text-[9px] text-[#617289] font-bold">EKİM</span>
                </div>
            </div>

            <div className="w-full space-y-2">
                {/* Yazılım */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-blue-500"></span>
                        <span className="text-xs font-medium text-[#111418] dark:text-white">
                            Yazılım
                        </span>
                    </div>
                    <span className="text-xs font-bold text-[#111418] dark:text-white">%45</span>
                </div>
                {/* Tasarım */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-purple-500"></span>
                        <span className="text-xs font-medium text-[#111418] dark:text-white">
                            Tasarım
                        </span>
                    </div>
                    <span className="text-xs font-bold text-[#111418] dark:text-white">%20</span>
                </div>
                {/* Müşteri İlişk. */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-orange-500"></span>
                        <span className="text-xs font-medium text-[#111418] dark:text-white">
                            Müşteri İlişk.
                        </span>
                    </div>
                    <span className="text-xs font-bold text-[#111418] dark:text-white">%15</span>
                </div>
                {/* Pazarlama */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-green-500"></span>
                        <span className="text-xs font-medium text-[#111418] dark:text-white">
                            Pazarlama
                        </span>
                    </div>
                    <span className="text-xs font-bold text-[#111418] dark:text-white">%10</span>
                </div>
                {/* Diğer */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-gray-300"></span>
                        <span className="text-xs font-medium text-[#111418] dark:text-white">
                            Diğer
                        </span>
                    </div>
                    <span className="text-xs font-bold text-[#111418] dark:text-white">%10</span>
                </div>
            </div>
        </div>
    );
}
