"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/shared/data-table";
import { StatusBadge } from "@/components/shared/status-badge";
import { Button } from "@/components/ui/button";
import { FilterBar } from "@/components/shared/filter-bar";
import { useState } from "react";
import { ArrowUpDown, Link as LinkIcon, BellRing } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export type InvoiceRecord = {
    id: string;
    invoiceNo: string;
    clientName: string;
    amount: number;
    issueDate: string;
    dueDate: string;
    status: "paid" | "pending" | "overdue";
};

const columns: ColumnDef<InvoiceRecord>[] = [
    {
        accessorKey: "invoiceNo",
        header: "Fatura No",
        cell: ({ row }) => <span className="text-xs font-bold text-gray-700 dark:text-gray-300">{row.getValue("invoiceNo")}</span>,
    },
    {
        accessorKey: "clientName",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="px-0 font-bold text-[#617289]"
                >
                    Müşteri
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => <span className="text-sm font-semibold">{row.getValue("clientName")}</span>,
    },
    {
        accessorKey: "amount",
        header: "Tutar",
        cell: ({ row }) => {
            const val: number = row.getValue("amount");
            return <span className="text-sm font-bold">₺{val.toLocaleString("tr-TR")}</span>;
        },
    },
    {
        accessorKey: "issueDate",
        header: "Kesim Tarihi",
        cell: ({ row }) => <span className="text-[11px] font-medium text-gray-500">{row.getValue("issueDate")}</span>,
    },
    {
        accessorKey: "dueDate",
        header: "Vade Tarihi",
        cell: ({ row }) => {
            const isOverdue = row.original.status === "overdue";
            return (
                <span className={`text-[11px] font-medium ${isOverdue ? 'text-red-500' : 'text-gray-500'}`}>
                    {row.getValue("dueDate")}
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

            if (status === "paid") {
                statusProps = { status: "success", label: "ÖDENDİ" };
            } else if (status === "pending") {
                statusProps = { status: "warning", label: "BEKLEMEDE" };
            } else if (status === "overdue") {
                statusProps = { status: "destructive", label: "GECİKMİŞ" };
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
                    {record.status !== "paid" && (
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-500 hover:text-blue-700" title="Hatırlatıcı Gönder">
                            <BellRing className="h-4 w-4" />
                        </Button>
                    )}
                </div>
            );
        }
    }
];

interface InvoicesTableProps {
    data: InvoiceRecord[];
}

export function InvoicesTable({ data }: InvoicesTableProps) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredData = data.filter((item) =>
        item.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.invoiceNo.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-white dark:bg-[#1a2432] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <h3 className="font-bold text-base flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">receipt_long</span>
                    Fatura Listesi
                </h3>
                <Badge variant="secondary" className="px-2 py-1 text-[10px] uppercase font-bold text-[#617289]">
                    Toplam {filteredData.length} Fatura
                </Badge>
            </div>

            <FilterBar
                searchValue={searchTerm}
                onSearchChange={setSearchTerm}
                placeholder="Müşteri adı veya fatura no ara..."
            />

            <DataTable columns={columns} data={filteredData} />
        </div>
    );
}
