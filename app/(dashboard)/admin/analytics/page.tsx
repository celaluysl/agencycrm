"use client";

import React from "react";
import { KpiCard } from "@/components/shared/kpi-card";
import { ClientHealthTable, ClientHealthRecord } from "@/components/admin/analytics/client-health-table";
import { PaymentRegularity } from "@/lib/calculations/client-health";

const mockClients: ClientHealthRecord[] = [
    {
        id: "1",
        clientName: "TechCorp Solutions",
        segment: "VIP",
        serviceDurationMonths: 24,
        paymentRegularity: "regular",
        operationalScores: [
            { service: "SEO", score: 92 },
            { service: "SEM", score: 88 }
        ],
        initials: "TC",
    },
    {
        id: "2",
        clientName: "GreenLeaf E-Ticaret",
        segment: "Riskli",
        serviceDurationMonths: 6,
        paymentRegularity: "delayed",
        operationalScores: [
            { service: "SEO", score: 45 },
            { service: "SEM", score: 32 }
        ],
        initials: "GL",
    },
    {
        id: "3",
        clientName: "Moda Mania",
        segment: "Yeni Kazanılan",
        serviceDurationMonths: 1,
        paymentRegularity: "pending",
        operationalScores: [
            { service: "SEO", score: 0 },
            { service: "SEM", score: 76 }
        ],
        initials: "MM",
    },
];

export default function AnalyticsPage() {
    return (
        <div className="flex-1 flex flex-col">
            <div className="p-4 md:p-8 space-y-6">

                {/* VIP / Risk / New Customers Segments */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* VIP Card */}
                    <div className="bg-white dark:bg-[#1a2432] p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm border-l-4 border-l-yellow-500">
                        <div className="flex justify-between items-center mb-4">
                            <span className="material-symbols-outlined text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded-lg">star</span>
                            <span className="text-yellow-600 text-xs font-bold bg-yellow-100 dark:bg-yellow-900/30 px-2 py-1 rounded">24 Müşteri</span>
                        </div>
                        <h3 className="text-sm font-bold">En Değerli Müşteriler (VIP)</h3>
                        <p className="text-2xl font-bold mt-1">₺2.1M <span className="text-xs font-normal text-[#617289]">Yıllık Değer</span></p>
                    </div>

                    {/* Risk Card */}
                    <div className="bg-white dark:bg-[#1a2432] p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm border-l-4 border-l-red-500">
                        <div className="flex justify-between items-center mb-4">
                            <span className="material-symbols-outlined text-red-500 bg-red-100 dark:bg-red-900/30 p-2 rounded-lg">warning</span>
                            <span className="text-red-600 text-xs font-bold bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded">8 Müşteri</span>
                        </div>
                        <h3 className="text-sm font-bold">Riskli Müşteriler</h3>
                        <p className="text-2xl font-bold mt-1">12% <span className="text-xs font-normal text-[#617289]">Churn Riski</span></p>
                    </div>

                    {/* New Wins Card */}
                    <div className="bg-white dark:bg-[#1a2432] p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm border-l-4 border-l-green-500">
                        <div className="flex justify-between items-center mb-4">
                            <span className="material-symbols-outlined text-green-500 bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">new_releases</span>
                            <span className="text-green-600 text-xs font-bold bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">12 Müşteri</span>
                        </div>
                        <h3 className="text-sm font-bold">Yeni Kazanılanlar</h3>
                        <p className="text-2xl font-bold mt-1">₺480k <span className="text-xs font-normal text-[#617289]">Yeni Ciro</span></p>
                    </div>
                </section>

                {/* Health Table */}
                <div className="w-full">
                    <ClientHealthTable data={mockClients} />
                </div>

                {/* Cross-Sell & Profit/Loss UI */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* AI Cross Sell Fırsatları */}
                    <div className="bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 overflow-hidden shadow-sm flex flex-col p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-base flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">psychology</span>
                                Cross-Sell Fırsat Haritası (AI)
                            </h3>
                            <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded">YENİ FIRSATLAR</span>
                        </div>

                        <div className="space-y-4">
                            <div className="p-4 border border-[#f0f2f4] dark:border-gray-800 rounded-xl bg-gray-50/50 dark:bg-gray-800/30 flex items-center gap-4">
                                <div className="size-10 rounded-lg bg-white dark:bg-gray-700 flex items-center justify-center border border-gray-100 dark:border-gray-600">
                                    <span className="material-symbols-outlined text-primary">auto_graph</span>
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-bold">CyberCore Güvenlik</p>
                                    <p className="text-[10px] text-[#617289]">Mevcut: SEO • <span className="text-primary font-bold">Öneri: LinkedIn Ads</span></p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs font-bold text-green-500">88% Uyum</p>
                                    <button className="text-[10px] font-bold text-white bg-primary hover:bg-blue-600 px-3 py-1 rounded mt-1 transition-all shadow-sm">Teklif Oluştur</button>
                                </div>
                            </div>

                            <div className="p-4 border border-[#f0f2f4] dark:border-gray-800 rounded-xl bg-gray-50/50 dark:bg-gray-800/30 flex items-center gap-4">
                                <div className="size-10 rounded-lg bg-white dark:bg-gray-700 flex items-center justify-center border border-gray-100 dark:border-gray-600">
                                    <span className="material-symbols-outlined text-primary">video_library</span>
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-bold">Artisans Home</p>
                                    <p className="text-[10px] text-[#617289]">Mevcut: SEM • <span className="text-primary font-bold">Öneri: İçerik Üretimi</span></p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs font-bold text-green-500">74% Uyum</p>
                                    <button className="text-[10px] font-bold text-white bg-primary hover:bg-blue-600 px-3 py-1 rounded mt-1 transition-all shadow-sm">Teklif Oluştur</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Proje Bazlı Kar/Zarar */}
                    <div className="bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 overflow-hidden shadow-sm flex flex-col p-6">
                        <h3 className="font-bold text-base flex items-center gap-2 mb-6">
                            <span className="material-symbols-outlined text-primary">balance</span>
                            Proje Bazlı Kar/Zarar
                        </h3>

                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between items-end mb-2">
                                    <div>
                                        <p className="text-xs font-bold">Global SEO Mastery</p>
                                        <p className="text-[10px] text-green-500 font-bold uppercase tracking-widest">En Yüksek Kar</p>
                                    </div>
                                    <p className="text-sm font-bold text-green-500">62% Marj</p>
                                </div>
                                <div className="w-full bg-gray-100 dark:bg-gray-800 h-2.5 rounded-full overflow-hidden">
                                    <div className="bg-green-500 h-full w-[62%]"></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between items-end mb-2">
                                    <div>
                                        <p className="text-xs font-bold">Fashion App Development</p>
                                        <p className="text-[10px] text-[#617289] font-bold uppercase tracking-widest">Normal Karlılık</p>
                                    </div>
                                    <p className="text-sm font-bold">28% Marj</p>
                                </div>
                                <div className="w-full bg-gray-100 dark:bg-gray-800 h-2.5 rounded-full overflow-hidden">
                                    <div className="bg-primary h-full w-[28%]"></div>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                                <div className="flex justify-between items-end mb-2">
                                    <div>
                                        <p className="text-xs font-bold">TechSupport Portal</p>
                                        <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest">Zarar / Aşırı Efor</p>
                                    </div>
                                    <p className="text-sm font-bold text-red-500">-8% Marj</p>
                                </div>
                                <div className="w-full bg-gray-100 dark:bg-gray-800 h-2.5 rounded-full overflow-hidden">
                                    <div className="bg-red-500 h-full w-[10%]"></div>
                                </div>
                                <p className="text-[10px] text-[#617289] mt-2 italic">Aşırı revizyon ve beklenmeyen efor maliyeti.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
