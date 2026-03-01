"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { cn } from "@/lib/utils";

interface DistributionData {
    name: string;
    value: number;
    color: string;
}

interface SalaryDistributionChartProps {
    data: DistributionData[];
    totalAmountText: string;
    className?: string;
}

export function SalaryDistributionChart({
    data,
    totalAmountText,
    className,
}: SalaryDistributionChartProps) {
    return (
        <div className={cn("bg-white dark:bg-[#1a2432] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 flex flex-col items-center", className)}>
            <h3 className="font-bold text-sm mb-6 flex items-center gap-2 uppercase tracking-wide w-full">
                <span className="material-symbols-outlined text-primary text-xl">pie_chart</span>
                Maaş Dağılımı
            </h3>

            <div className="relative h-48 w-full mb-6">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            innerRadius={55}
                            outerRadius={80}
                            paddingAngle={2}
                            dataKey="value"
                            stroke="none"
                            isAnimationActive={true}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip
                            formatter={(value: any) => `₺${Number(value).toLocaleString("tr-TR")}`}
                            contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)" }}
                        />
                    </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-xl font-bold">{totalAmountText}</span>
                    <span className="text-[10px] text-gray-500 font-bold">TOPLAM</span>
                </div>
            </div>

            <div className="w-full space-y-2">
                {data.map((item) => {
                    const totalValue = data.reduce((acc, curr) => acc + curr.value, 0);
                    const percentage = Math.round((item.value / totalValue) * 100);

                    return (
                        <div key={item.name} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="size-2 rounded-full" style={{ backgroundColor: item.color }} />
                                <span className="text-sm font-medium">{item.name}</span>
                            </div>
                            <span className="text-sm font-bold">%{percentage}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
