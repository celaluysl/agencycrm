"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type SemTask = {
    id: string;
    clientName: string;
    title: string;
    priority: "high" | "medium" | "low";
    deadline: string;
    status: "todo" | "in_progress" | "review" | "done";
    completed: boolean;
};

const mockTasks: SemTask[] = [
    { id: "1", clientName: "Acme Corp", title: "Google Ads Reklam Metinlerini Güncelle", priority: "high", deadline: "Bugün 17:00", status: "in_progress", completed: false },
    { id: "2", clientName: "TechNova E-Ticaret", title: "A/B Testi Sonuç Raporu Hazırla", priority: "medium", deadline: "Yarın 12:00", status: "todo", completed: false },
    { id: "3", clientName: "Luxe Otel Grubu", title: "Düşük Dönüşümlü Kelimeler Analizi", priority: "low", deadline: "12 Eki 2024", status: "todo", completed: false },
    { id: "4", clientName: "Global Lojistik", title: "Yeni Retargeting Kampanyası Başlat", priority: "high", deadline: "Dün", status: "review", completed: false },

    // Completed ones
    { id: "5", clientName: "Acme Corp", title: "Haftalık Bütçe Optimizasyonu", priority: "medium", deadline: "01 Eki 2024", status: "done", completed: true },
    { id: "6", clientName: "TechNova E-Ticaret", title: "Anahtar Kelime Eşleme Türü İncelemesi", priority: "low", deadline: "28 Eyl 2024", status: "done", completed: true },
];

export function TaskList() {
    const [tasks, setTasks] = useState<SemTask[]>(mockTasks);
    const [selectedTasks, setSelectedTasks] = useState<string[]>([]);
    const [showCompleted, setShowCompleted] = useState(false);

    const activeTasks = tasks.filter(t => !t.completed);
    const completedTasks = tasks.filter(t => t.completed);

    const toggleTaskSelection = (id: string) => {
        setSelectedTasks(prev =>
            prev.includes(id) ? prev.filter(taskId => taskId !== id) : [...prev, id]
        );
    };

    const getPriorityBadge = (priority: "high" | "medium" | "low") => {
        const maps = {
            high: { label: "YÜKSEK", className: "bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800" },
            medium: { label: "ORTA", className: "bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-800" },
            low: { label: "DÜŞÜK", className: "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800" },
        };
        const mapped = maps[priority];

        return (
            <Badge variant="outline" className={cn("text-[9px] px-1.5 py-0 font-bold", mapped.className)}>
                {mapped.label}
            </Badge>
        );
    };

    const isWarningDeadline = (deadline: string) => {
        return deadline.toLowerCase().includes("bugün") || deadline.toLowerCase().includes("dün");
    };

    return (
        <div className="bg-white dark:bg-[#1a2432] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden flex flex-col">
            <div className="p-4 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/30 flex justify-between items-center">
                <h3 className="font-bold text-base flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">task_alt</span>
                    Günlük Operasyon Görevleri
                </h3>

                <div className="flex gap-2">
                    {selectedTasks.length > 0 && (
                        <button className="text-[11px] font-bold text-white bg-green-500 hover:bg-green-600 px-3 py-1.5 rounded-md flex items-center gap-1 transition-colors">
                            <span className="material-symbols-outlined text-sm">done_all</span>
                            Tamamla ({selectedTasks.length})
                        </button>
                    )}
                </div>
            </div>

            {/* Active Tasks Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-white dark:bg-[#1a2432] border-b border-gray-100 dark:border-gray-800">
                        <tr>
                            <th className="px-6 py-3 w-12 text-center">
                                <input type="checkbox" className="rounded text-primary focus:ring-primary border-gray-300 dark:border-gray-700 dark:bg-gray-800" />
                            </th>
                            <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Görev & Müşteri</th>
                            <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Öncelik</th>
                            <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-right">Son Tarih</th>
                            <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Durum</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                        {activeTasks.map((task) => (
                            <tr
                                key={task.id}
                                className={cn(
                                    "group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors",
                                    selectedTasks.includes(task.id) && "bg-primary/5 dark:bg-primary/10"
                                )}
                            >
                                <td className="px-6 py-4 text-center">
                                    <input
                                        type="checkbox"
                                        checked={selectedTasks.includes(task.id)}
                                        onChange={() => toggleTaskSelection(task.id)}
                                        className="rounded text-primary focus:ring-primary border-gray-300 dark:border-gray-700 dark:bg-gray-800 cursor-pointer"
                                    />
                                </td>
                                <td className="px-4 py-4">
                                    <div className="flex flex-col">
                                        <p className="text-sm font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors cursor-pointer">{task.title}</p>
                                        <p className="text-[11px] text-gray-500 font-medium tracking-wide uppercase mt-0.5">{task.clientName}</p>
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-center align-middle">
                                    {getPriorityBadge(task.priority)}
                                </td>
                                <td className="px-4 py-4 text-right">
                                    <span className={cn(
                                        "inline-flex items-center gap-1.5 text-xs font-bold",
                                        isWarningDeadline(task.deadline) ? "text-red-500" : "text-gray-600 dark:text-gray-400"
                                    )}>
                                        {isWarningDeadline(task.deadline) && <span className="material-symbols-outlined text-[14px]">error</span>}
                                        {task.deadline}
                                    </span>
                                </td>
                                <td className="px-4 py-4 text-center">
                                    <select
                                        value={task.status}
                                        onChange={(e) => { }}
                                        className={cn(
                                            "text-[10px] font-bold uppercase rounded-md px-2 py-1 outline-none border cursor-pointer",
                                            task.status === "in_progress" ? "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800" :
                                                task.status === "review" ? "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-800" :
                                                    "bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700"
                                        )}
                                    >
                                        <option value="todo">BEKLİYOR</option>
                                        <option value="in_progress">İŞLEMDE</option>
                                        <option value="review">ONAYDA</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Completed Tasks Accordion */}
            <div className="border-t border-gray-200 dark:border-gray-800">
                <button
                    onClick={() => setShowCompleted(!showCompleted)}
                    className="w-full p-3 bg-gray-50 dark:bg-gray-800/30 flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                    <span className={cn(
                        "material-symbols-outlined text-gray-500 transition-transform duration-200",
                        showCompleted ? "rotate-90" : "rotate-0"
                    )}>
                        chevron_right
                    </span>
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                        Tamamlanan Görevler ({completedTasks.length})
                    </span>
                </button>

                {showCompleted && (
                    <div className="overflow-x-auto pb-4">
                        <table className="w-full text-left border-collapse opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                                {completedTasks.map((task) => (
                                    <tr key={task.id} className="bg-gray-50 dark:bg-gray-800/20">
                                        <td className="px-6 py-3 w-12 text-center text-green-500">
                                            <span className="material-symbols-outlined text-lg">check_circle</span>
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="flex flex-col">
                                                <p className="text-[13px] font-bold text-gray-900 dark:text-gray-100 line-through">{task.title}</p>
                                                <p className="text-[10px] text-gray-500 font-medium tracking-wide uppercase mt-0.5">{task.clientName}</p>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-center align-middle">
                                            {getPriorityBadge(task.priority)}
                                        </td>
                                        <td className="px-4 py-3 text-right">
                                            <span className="text-[11px] font-semibold text-gray-500">
                                                {task.deadline}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-center">
                                            <Badge variant="outline" className="text-[9px] px-1.5 py-0 rounded border-green-200 text-green-600 bg-green-50 uppercase">Tamamlandı</Badge>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

        </div>
    );
}
