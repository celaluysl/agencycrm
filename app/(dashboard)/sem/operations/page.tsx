import React from "react";
import { ActiveTimerWidget } from "@/components/sem/active-timer";
import { TaskList } from "@/components/sem/task-list";
import { KpiCard } from "@/components/shared/kpi-card";
import { CriticalAlertsPanel, SemAlert } from "@/components/sem/alert-panel";

export default function SemOperationsPage() {
    const mockAlerts: SemAlert[] = [
        {
            id: "1",
            type: "budget_exceeded",
            clientName: "Global Lojistik",
            campaignName: "Yurtdışı Nakliye",
            message: "Hesapta kampanya durduruldu. Kredi kartından ödeme çekilemedi.",
            timestamp: "10 dk önce"
        },
        {
            id: "2",
            type: "low_quality_score",
            clientName: "Luxe Otel Grubu",
            campaignName: "Erken Rezervasyon",
            message: "Seçili 12 anahtar kelimenin kalite puanı 3'ün altına düştü. TBM maliyetleri artıyor.",
            timestamp: "1 saat önce"
        },
        {
            id: "3",
            type: "high_cpa",
            clientName: "Acme Corp",
            campaignName: "B2B Yazılım Lead",
            message: "Haftalık dönüşüm maliyeti (CPA) hedef hedefin %40 üzerine çıktı.",
            timestamp: "2 saat önce"
        }
    ];

    return (
        <div className="flex-1 p-4 md:p-8 space-y-6 max-w-7xl mx-auto w-full">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold dark:text-white flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">campaign</span>
                        SEM Operasyon Merkezi
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Günlük reklam yönetimi, optimizasyon görevleri ve kampanya bütçe takibi.
                    </p>
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white font-bold text-xs rounded-lg transition-colors">
                        <span className="material-symbols-outlined text-sm">add</span>
                        Yeni Görev
                    </button>
                </div>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <KpiCard
                    title="Toplam Harcama"
                    value="₺342,500"
                    trend="up"
                    changeText="+12K (Aylık)"
                    icon={<span className="material-symbols-outlined">payments</span>}
                />
                <KpiCard
                    title="Ortalama TBM"
                    value="₺4.20"
                    trend="down"
                    changeText="-₺0.15"
                    icon={<span className="material-symbols-outlined">touch_app</span>}
                />
                <KpiCard
                    title="Dönüşüm Oranı"
                    value="%2.8"
                    trend="up"
                    changeText="+0.4%"
                    icon={<span className="material-symbols-outlined">trending_up</span>}
                />
                <KpiCard
                    title="Ortalama ROAS"
                    value="4.5x"
                    trend="up"
                    changeText="+0.2x"
                    icon={<span className="material-symbols-outlined">monitoring</span>}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Left Column (Main Task List) */}
                <div className="lg:col-span-2 space-y-6">
                    <TaskList />

                    {/* Customer Ad Status Table (Simplified) */}
                    <div className="bg-white dark:bg-[#1a2432] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden flex flex-col">
                        <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
                            <h3 className="font-bold text-sm flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">group</span>
                                Müşteri Kampanya Durumları
                            </h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-gray-50/50 dark:bg-gray-800/30 border-b border-gray-100 dark:border-gray-800">
                                    <tr>
                                        <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase">Müşteri</th>
                                        <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase text-right">Bütçe Tüketimi</th>
                                        <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase text-center">Durum</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                                        <td className="px-4 py-3 text-sm font-bold">Acme Corp</td>
                                        <td className="px-4 py-3 text-right">
                                            <div className="flex flex-col items-end">
                                                <span className="text-xs font-bold text-red-500">%92</span>
                                                <div className="w-20 bg-gray-200 rounded-full h-1 mt-1">
                                                    <div className="bg-red-500 h-1 rounded-full w-[92%]"></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-center">
                                            <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-50 text-red-600 border border-red-200">Kritik</span>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                                        <td className="px-4 py-3 text-sm font-bold">TechNova</td>
                                        <td className="px-4 py-3 text-right">
                                            <div className="flex flex-col items-end">
                                                <span className="text-xs font-bold text-green-500">%45</span>
                                                <div className="w-20 bg-gray-200 rounded-full h-1 mt-1">
                                                    <div className="bg-green-500 h-1 rounded-full w-[45%]"></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-center">
                                            <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-50 text-green-600 border border-green-200">Normal</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Right Column (Timer & Alerts) */}
                <div className="lg:col-span-1 space-y-6">
                    <ActiveTimerWidget />

                    {/* Critical Alerts Panel */}
                    <CriticalAlertsPanel alerts={mockAlerts} />
                </div>

            </div>
        </div>
    );
}
