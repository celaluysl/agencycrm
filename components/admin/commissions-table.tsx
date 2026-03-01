"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/shared/data-table";
import { StatusBadge } from "@/components/shared/status-badge";
import { Button } from "@/components/ui/button";
import { FilterBar } from "@/components/shared/filter-bar";
import { useState } from "react";
import { ArrowUpDown, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export type CommissionRecord = {
    id: string;
    employeeName: string;
    department: string;
    dealName: string;
    amount: number;
    paymentDate: string;
    status: "earned" | "approved" | "paid";
};

const columns: ColumnDef<CommissionRecord>[] = [
    {
        accessorKey: "employeeName",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="px-0 font-bold text-[#617289]"
                >
                    Personel
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            const record = row.original;
            return (
                <div>
                    <p className="text-sm font-bold">{record.employeeName}</p>
                    <p className="text-[10px] text-gray-500">{record.department}</p>
                </div>
            );
        },
    },
    {
        accessorKey: "dealName",
        header: "Satış/Proje",
        cell: ({ row }) => <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{row.getValue("dealName")}</span>,
    },
    {
        accessorKey: "amount",
        header: "Prim Tutarı",
        cell: ({ row }) => {
            const val: number = row.getValue("amount");
            return <span className="text-sm font-bold text-success">₺{val.toLocaleString("tr-TR")}</span>;
        },
    },
    {
        accessorKey: "paymentDate",
        header: "Ödeme Tarihi",
        cell: ({ row }) => {
            return (
                <span className={`text-[11px] font-bold ${row.original.status === "approved" ? "text-primary" : "text-gray-500"}`}>
                    {row.getValue("paymentDate")}
                </span>
            );
        },
    },
    {
        accessorKey: "status",
        header: "Durum",
        cell: ({ row }) => {
            const status: string = row.getValue("status");
            let statusProps = { status: "default" as any, label: status };

            if (status === "earned") {
                statusProps = { status: "info", label: "Kazanıldı (Beklemede)" };
            } else if (status === "approved") {
                statusProps = { status: "warning", label: "Onaylandı" };
            } else if (status === "paid") {
                statusProps = { status: "success", label: "Ödendi" };
            }

            return (
                <StatusBadge
                    status={statusProps.status}
                    label={statusProps.label}
                    size="sm"
                    dot={true}
                />
            );
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const record = row.original;
            return (
                <div className="flex justify-end gap-2">
                    {record.status === "earned" && (
                        <Button variant="ghost" size="sm" className="h-8 flex items-center gap-1 text-green-600 hover:text-green-700 hover:bg-green-50 dark:hover:bg-green-900/30">
                            <CheckCircle2 className="h-4 w-4" />
                            <span className="text-[10px] uppercase font-bold">Onayla</span>
                        </Button>
                    )}
                </div>
            );
        }
    }
];

interface CommissionsTableProps {
    data: CommissionRecord[];
}

export function CommissionsTable({ data }: CommissionsTableProps) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredData = data.filter((item) =>
        item.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.dealName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-white dark:bg-[#1a2432] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <h3 className="font-bold text-base flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">emoji_events</span>
                    Prim Hakediş Listesi
                </h3>
                <div className="flex gap-2 w-full md:w-auto">
                    <Button variant="default" size="sm" className="flex items-center gap-2 h-9 text-xs bg-success hover:bg-green-700 text-white">
                        <CheckCircle2 className="h-4 w-4" /> Toplu Onay
                    </Button>
                </div>
            </div>

            <FilterBar
                searchValue={searchTerm}
                onSearchChange={setSearchTerm}
                placeholder="Personel veya proje ara..."
            />

            <DataTable columns={columns} data={filteredData} />
        </div>
    );
}
