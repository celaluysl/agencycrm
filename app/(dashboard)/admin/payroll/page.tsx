import React from "react";
import { KpiCard } from "@/components/shared/kpi-card";
import { PayrollTable } from "@/components/admin/payroll-table";
import { SalaryDistributionChart } from "@/components/admin/salary-distribution-chart";
import { PayrollPerson } from "@/components/admin/payroll-table";

const mockPayrollData: PayrollPerson[] = [
    {
        id: "1",
        name: "Mert Aydın",
        role: "Senior Developer",
        department: "Yazılım",
        initials: "MA",
        colorClass: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400",
        basicSalary: 42500,
        bonus: 5000,
        deductions: 1200,
        netPay: 46300,
        status: "paid",
    },
    {
        id: "2",
        name: "Selin Kaya",
        role: "Art Director",
        department: "Tasarım",
        initials: "SK",
        colorClass: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400",
        basicSalary: 38000,
        bonus: 0,
        deductions: 850,
        netPay: 37150,
        status: "bank_ready",
    },
    {
        id: "3",
        name: "Can Özkan",
        role: "Account Manager",
        department: "Müşteri İlişkileri",
        initials: "ÇÖ",
        colorClass: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400",
        basicSalary: 32000,
        bonus: 8500,
        deductions: 0,
        netPay: 40500,
        status: "pending",
    },
    {
        id: "4",
        name: "Aslı Demir",
        role: "SEO Specialist",
        department: "Pazarlama",
        initials: "AD",
        colorClass: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400",
        basicSalary: 28500,
        bonus: 2000,
        deductions: 400,
        netPay: 30100,
        status: "paid",
    },
    {
        id: "5",
        name: "Burak Koç",
        role: "Copywriter",
        department: "İçerik",
        initials: "BK",
        colorClass: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300",
        basicSalary: 24000,
        bonus: 0,
        deductions: 0,
        netPay: 24000,
        status: "bank_ready",
    },
];

const distributionData = [
    { name: "Yazılım", value: 379125, color: "#3b82f6" }, // blue-500
    { name: "Tasarım", value: 168500, color: "#a855f7" }, // purple-500
    { name: "Müşteri İlişk.", value: 126375, color: "#f97316" }, // orange-500
    { name: "Pazarlama", value: 84250, color: "#22c55e" }, // green-500
    { name: "Diğer", value: 84250, color: "#d1d5db" }, // gray-300
];

export default function PayrollPage() {
    return (
        <div className="flex-1 flex flex-col">
            <div className="p-4 md:p-8 space-y-6">
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <KpiCard
                        title="Aylık Toplam Maaş Gideri"
                        value="₺842.500,00"
                        changeText="+3.2% geçen aya göre"
                        trend="up"
                    />
                    <KpiCard
                        title="Prim ve Bonuslar"
                        value="₺64.200,00"
                        changeText="12 Personel hak kazandı"
                        trend="up"
                    />
                    <KpiCard
                        title="SGK ve Vergi Yükü"
                        value="₺218.400,00"
                        changeText="Son ödeme: 26 Ekim"
                        trend="down"
                    />
                    <KpiCard
                        title="Toplam Yan Haklar"
                        value="₺42.150,00"
                        changeText="Yemek, Yol ve Özel Sağlık"
                        trend="neutral"
                    />
                </section>

                <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
                    <div className="xl:col-span-8 2xl:col-span-9">
                        <PayrollTable data={mockPayrollData} />
                    </div>

                    <div className="xl:col-span-4 2xl:col-span-3 space-y-6">
                        <div className="bg-white dark:bg-[#1a2432] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm p-6">
                            <h3 className="font-bold text-sm mb-4 flex items-center gap-2 uppercase tracking-wide">
                                <span className="material-symbols-outlined text-primary text-xl">
                                    file_download
                                </span>
                                Hızlı İşlemler
                            </h3>
                            <div className="space-y-3">
                                <button className="w-full flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg group hover:bg-primary hover:text-white transition-all">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-xl">
                                            description
                                        </span>
                                        <span className="text-xs font-bold">Bordro İndir (Zip)</span>
                                    </div>
                                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                                        chevron_right
                                    </span>
                                </button>
                                <button className="w-full flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg group hover:bg-success hover:text-white transition-all text-gray-700 dark:text-gray-300">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-xl">
                                            task_alt
                                        </span>
                                        <span className="text-xs font-bold">Toplu Ödeme Onayı</span>
                                    </div>
                                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                                        chevron_right
                                    </span>
                                </button>
                                <button className="w-full flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg group hover:bg-primary hover:text-white transition-all text-gray-700 dark:text-gray-300">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-xl">
                                            send
                                        </span>
                                        <span className="text-xs font-bold">Bordroları Gönder</span>
                                    </div>
                                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                                        chevron_right
                                    </span>
                                </button>
                            </div>
                        </div>

                        <SalaryDistributionChart
                            data={distributionData}
                            totalAmountText="₺842k"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
