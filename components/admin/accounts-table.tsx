"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/shared/data-table";
import { StatusBadge } from "@/components/shared/status-badge";
import { Button } from "@/components/ui/button";
import { FilterBar } from "@/components/shared/filter-bar";
import { useState } from "react";
import { ArrowUpDown, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export type AccountRecord = {
    id: string;
    clientName: string;
    taxNumber: string;
    totalDebt: number;
    totalCredit: number;
    netBalance: number;
    lastActionDate: string;
    status: "debtor" | "creditor" | "zero";
};

const columns: ColumnDef<AccountRecord>[] = [
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
            return (
                <div>
                    <p className="text-sm font-bold">{record.clientName}</p>
                    <p className="text-[10px] text-gray-500">VN: {record.taxNumber}</p>
                </div>
            );
        },
    },
    {
        accessorKey: "totalDebt",
        header: "Toplam Borç",
        cell: ({ row }) => {
            const val: number = row.getValue("totalDebt");
            return <span className="text-sm font-medium">₺{val.toLocaleString("tr-TR")}</span>;
        },
    },
    {
        accessorKey: "totalCredit",
        header: "Toplam Alacak",
        cell: ({ row }) => {
            const val: number = row.getValue("totalCredit");
            return <span className="text-sm font-medium">₺{val.toLocaleString("tr-TR")}</span>;
        },
    },
    {
        accessorKey: "netBalance",
        header: "Net Bakiye",
        cell: ({ row }) => {
            const val: number = row.getValue("netBalance");
            const status: string = row.original.status;

            let textColor = "text-gray-500";
            let suffix = "";

            if (status === "debtor") {
                textColor = "text-red-600";
                suffix = " (B)";
            } else if (status === "creditor") {
                textColor = "text-blue-600";
                suffix = " (A)";
            } else {
                textColor = "text-green-600";
            }

            return (
                <span className={`text-sm font-bold ${textColor}`}>
                    ₺{Math.abs(val).toLocaleString("tr-TR")}{suffix}
                </span>
            );
        },
    },
    {
        accessorKey: "lastActionDate",
        header: "Son İşlem",
        cell: ({ row }) => {
            return <span className="text-[11px] font-medium text-gray-500">{row.getValue("lastActionDate")}</span>;
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            return (
                <div className="flex justify-end">
                    <Link href={`#`} className="text-primary hover:text-blue-700 p-2">
                        <span className="material-symbols-outlined text-sm">visibility</span>
                    </Link>
                </div>
            );
        }
    }
];

interface AccountsTableProps {
    data: AccountRecord[];
}

export function AccountsTable({ data }: AccountsTableProps) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredData = data.filter((item) =>
        item.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.taxNumber.includes(searchTerm)
    );

    return (
        <div className="bg-white dark:bg-[#1a2432] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <h3 className="font-bold text-base flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">groups</span>
                    Müşteri Cari Hesap Listesi
                </h3>
                <Badge variant="secondary" className="px-2 py-1 text-[10px] uppercase font-bold text-[#617289]">
                    Toplam {filteredData.length} Kayıt
                </Badge>
            </div>

            <FilterBar
                searchValue={searchTerm}
                onSearchChange={setSearchTerm}
                placeholder="Müşteri adı veya vergi no ile ara..."
            />

            <DataTable columns={columns} data={filteredData} />
        </div>
    );
}
