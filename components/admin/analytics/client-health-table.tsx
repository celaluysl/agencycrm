"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/shared/data-table";
import { Button } from "@/components/ui/button";
import { FilterBar } from "@/components/shared/filter-bar";
import { useState } from "react";
import { ArrowUpDown } from "lucide-react";
import { PaymentRegularity, calculateClientHealthScore } from "@/lib/calculations/client-health";

export type ClientHealthRecord = {
    id: string;
    clientName: string;
    segment: "VIP" | "Riskli" | "Yeni Kazanılan" | "Normal";
    serviceDurationMonths: number;
    paymentRegularity: PaymentRegularity;
    operationalScores: { service: string; score: number }[];
    initials: string;
};

const columns: ColumnDef<ClientHealthRecord>[] = [
    {
        accessorKey: "clientName",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="px-0 font-bold text-[#617289]"
                >
                    Müşteri Adı
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            const record = row.original;
            let bgColor = "bg-primary/10 text-primary";

            if (record.segment === "Riskli") {
                bgColor = "bg-orange-100 text-orange-600";
            } else if (record.segment === "Yeni Kazanılan") {
                bgColor = "bg-blue-100 text-blue-600";
            }

            return (
                <div className="flex items-center gap-3">
                    <div className={`size-8 rounded flex items-center justify-center font-bold text-xs ${bgColor}`}>
                        {record.initials}
                    </div>
                    <div>
                        <p className="text-sm font-bold">{record.clientName}</p>
                        <p className="text-[10px] text-[#617289]">{record.segment} Segment</p>
                    </div>
                </div>
            );
        },
    },
    {
        accessorKey: "serviceDurationMonths",
        header: "Hizmet Süresi",
        cell: ({ row }) => {
            const val: number = row.getValue("serviceDurationMonths");
            return <span className="text-sm font-medium">{val} Ay</span>;
        },
    },
    {
        accessorKey: "paymentRegularity",
        header: "Ödeme Düzeni",
        cell: ({ row }) => {
            const status: PaymentRegularity = row.getValue("paymentRegularity");

            let badgeState = { label: "DÜZENLİ", classes: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" };

            if (status === "pending") {
                badgeState = { label: "BEKLEMEDE", classes: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" };
            } else if (status === "delayed") {
                badgeState = { label: "GECİKMELİ", classes: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" };
            }

            return (
                <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold ${badgeState.classes}`}>
                    {badgeState.label}
                </span>
            );
        },
    },
    {
        accessorKey: "operationalScores",
        header: "Operasyonel Başarı",
        cell: ({ row }) => {
            const ops: { service: string; score: number }[] = row.getValue("operationalScores");

            return (
                <div className="flex gap-4">
                    {ops.map((op, idx) => {
                        let textColor = "text-green-500";
                        if (op.score < 50) textColor = "text-red-500";
                        else if (op.score < 75) textColor = "text-orange-500";
                        else if (op.score < 85) textColor = "text-blue-500";

                        return (
                            <div key={idx}>
                                <p className="text-[9px] text-[#617289] font-bold">{op.service}</p>
                                <p className={`text-xs font-bold ${textColor}`}>
                                    {op.score === 0 ? "--" : `${op.score}/100`}
                                </p>
                            </div>
                        );
                    })}
                </div>
            );
        },
    },
    {
        accessorKey: "healthScore",
        header: () => <div className="text-center w-full">Sağlık Puanı</div>,
        cell: ({ row }) => {
            const record = row.original;
            const opScoresNum = record.operationalScores.filter(s => s.score > 0).map(s => s.score);
            const score = calculateClientHealthScore({
                operationalScores: opScoresNum,
                paymentRegularity: record.paymentRegularity,
                serviceDurationMonths: record.serviceDurationMonths,
            });

            let barColor = "bg-green-500";
            let textColor = "text-green-500";

            if (score < 50) {
                barColor = "bg-red-500";
                textColor = "text-red-500";
            } else if (score < 80) {
                barColor = "bg-blue-500";
                textColor = "text-blue-500";
            }

            return (
                <div className="flex flex-col items-center gap-1 justify-center w-full min-w-24">
                    <div className="w-24 bg-gray-100 dark:bg-gray-800 h-1.5 rounded-full overflow-hidden flex self-center">
                        <div className={`${barColor} h-full transition-all duration-500`} style={{ width: `${score}%` }}></div>
                    </div>
                    <span className={`text-xs font-bold ${textColor}`}>{score}</span>
                </div>
            );
        },
    }
];

interface ClientHealthTableProps {
    data: ClientHealthRecord[];
}

export function ClientHealthTable({ data }: ClientHealthTableProps) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredData = data.filter((item) =>
        item.clientName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm p-6 overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <h3 className="font-bold text-base flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">analytics</span>
                    Müşteri Sağlık Skoru Tablosu
                </h3>
            </div>

            <FilterBar
                searchValue={searchTerm}
                onSearchChange={setSearchTerm}
                placeholder="Müşteri ara..."
            />

            <DataTable columns={columns} data={filteredData} />
        </div>
    );
}
