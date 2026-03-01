"use client";

import React from "react";
import { cn } from "@/lib/utils";

const employees = [
    {
        id: "1",
        name: "Mert Aydın",
        initials: "MA",
        role: "Senior Developer",
        department: "Yazılım",
        baseSalary: "₺42.500,00",
        bonus: "+₺5.000,00",
        deductions: "-₺1.200,00",
        netPay: "₺46.300,00",
        statusText: "ÖDENDİ",
        statusBadge: "success",
        departmentTheme: "blue",
    },
    {
        id: "2",
        name: "Selin Kaya",
        initials: "SK",
        role: "Art Director",
        department: "Tasarım",
        baseSalary: "₺38.000,00",
        bonus: "₺0,00",
        deductions: "-₺850,00",
        netPay: "₺37.150,00",
        statusText: "Banka Talimatı Hazırlandı",
        statusBadge: "primary",
        departmentTheme: "purple",
    },
    {
        id: "3",
        name: "Can Özkan",
        initials: "ÇÖ",
        role: "Account Manager",
        department: "Müşteri İlişkileri",
        baseSalary: "₺32.000,00",
        bonus: "+₺8.500,00",
        deductions: "₺0,00",
        netPay: "₺40.500,00",
        statusText: "BEKLEMEDE",
        statusBadge: "warning",
        departmentTheme: "orange",
    },
    {
        id: "4",
        name: "Aslı Demir",
        initials: "AD",
        role: "SEO Specialist",
        department: "Pazarlama",
        baseSalary: "₺28.500,00",
        bonus: "+₺2.000,00",
        deductions: "-₺400,00",
        netPay: "₺30.100,00",
        statusText: "ÖDENDİ",
        statusBadge: "success",
        departmentTheme: "green",
    },
    {
        id: "5",
        name: "Burak Koç",
        initials: "BK",
        role: "Copywriter",
        department: "İçerik",
        baseSalary: "₺24.000,00",
        bonus: "₺0,00",
        deductions: "₺0,00",
        netPay: "₺24.000,00",
        statusText: "Banka Talimatı Hazırlandı",
        statusBadge: "primary",
        departmentTheme: "gray",
    },
];

export function PayrollTable() {
    return (
        <>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50/50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800">
                            <th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">
                                Personel İsmi
                            </th>
                            <th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">
                                Departman
                            </th>
                            <th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">
                                Temel Maaş
                            </th>
                            <th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">
                                Prim / Bonus
                            </th>
                            <th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">
                                Kesintiler
                            </th>
                            <th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">
                                Net Ödeme
                            </th>
                            <th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider text-center">
                                Durum
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                        {employees.map((emp) => (
                            <tr key={emp.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors text-[#111418] dark:text-white">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className={cn(
                                                "size-8 rounded-full flex items-center justify-center font-bold text-xs",
                                                emp.departmentTheme === "blue" &&
                                                "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
                                                emp.departmentTheme === "purple" &&
                                                "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
                                                emp.departmentTheme === "orange" &&
                                                "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
                                                emp.departmentTheme === "green" &&
                                                "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
                                                emp.departmentTheme === "gray" &&
                                                "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                                            )}
                                        >
                                            {emp.initials}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold">{emp.name}</p>
                                            <p className="text-[10px] text-[#617289]">{emp.role}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span
                                        className={cn(
                                            "px-2 py-1 rounded text-[10px] font-bold uppercase",
                                            emp.departmentTheme === "blue" &&
                                            "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
                                            emp.departmentTheme === "purple" &&
                                            "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
                                            emp.departmentTheme === "orange" &&
                                            "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
                                            emp.departmentTheme === "green" &&
                                            "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
                                            emp.departmentTheme === "gray" &&
                                            "bg-gray-100 text-[#617289] dark:bg-gray-800 dark:text-gray-400"
                                        )}
                                    >
                                        {emp.department}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-xs font-semibold">{emp.baseSalary}</td>
                                <td
                                    className={cn(
                                        "px-6 py-4 text-xs font-semibold",
                                        emp.bonus !== "₺0,00" ? "text-success" : "text-[#617289]"
                                    )}
                                >
                                    {emp.bonus}
                                </td>
                                <td
                                    className={cn(
                                        "px-6 py-4 text-xs font-semibold",
                                        emp.deductions !== "₺0,00" ? "text-danger" : "text-[#617289]"
                                    )}
                                >
                                    {emp.deductions}
                                </td>
                                <td className="px-6 py-4 text-sm font-bold">{emp.netPay}</td>
                                <td className="px-6 py-4 text-center">
                                    <span
                                        className={cn(
                                            "inline-flex px-2 py-0.5 rounded text-[10px] font-bold uppercase",
                                            emp.statusBadge === "success" &&
                                            "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
                                            emp.statusBadge === "primary" &&
                                            "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
                                            emp.statusBadge === "warning" &&
                                            "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
                                        )}
                                    >
                                        {emp.statusText}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="px-6 py-4 bg-gray-50/30 dark:bg-gray-800/20 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                <p className="text-xs text-[#617289] font-medium">
                    Toplam {employees.length} personel listeleniyor.
                </p>
                <div className="flex gap-2">
                    <button className="px-3 py-1 border border-gray-200 dark:border-gray-700 rounded text-xs font-bold hover:bg-gray-50 dark:hover:bg-gray-800 text-[#111418] dark:text-white transition-colors">
                        Önceki
                    </button>
                    <button className="px-3 py-1 border border-gray-200 dark:border-gray-700 rounded text-xs font-bold hover:bg-gray-50 dark:hover:bg-gray-800 text-[#111418] dark:text-white transition-colors">
                        Sonraki
                    </button>
                </div>
            </div>
        </>
    );
}
