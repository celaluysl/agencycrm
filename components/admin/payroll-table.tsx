"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/shared/data-table";
import { Badge } from "@/components/ui/badge";
import { StatusBadge } from "@/components/shared/status-badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { FilterBar } from "@/components/shared/filter-bar";
import { useState } from "react";
import { ArrowUpDown } from "lucide-react";

export type PayrollPerson = {
    id: string;
    name: string;
    role: string;
    department: string;
    initials: string;
    colorClass: string;
    basicSalary: number;
    bonus: number;
    deductions: number;
    netPay: number;
    status: "paid" | "pending" | "bank_ready";
};

const columns: ColumnDef<PayrollPerson>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value: boolean | "indeterminate") => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value: boolean | "indeterminate") => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="px-0 font-bold text-[#617289]"
                >
                    Personel İsmi
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            const person = row.original;
            return (
                <div className="flex items-center gap-3">
                    <div
                        className={`size-8 rounded-full flex items-center justify-center font-bold text-xs ${person.colorClass}`}
                    >
                        {person.initials}
                    </div>
                    <div>
                        <p className="text-sm font-bold">{person.name}</p>
                        <p className="text-[10px] text-gray-500">{person.role}</p>
                    </div>
                </div>
            );
        },
    },
    {
        accessorKey: "department",
        header: "Departman",
        cell: ({ row }) => {
            const val: string = row.getValue("department");
            return (
                <Badge variant="secondary" className="px-2 py-1 text-[10px] font-bold uppercase">
                    {val}
                </Badge>
            );
        },
    },
    {
        accessorKey: "basicSalary",
        header: "Temel Maaş",
        cell: ({ row }) => {
            const val: number = row.getValue("basicSalary");
            return <span className="text-xs font-semibold">₺{val.toLocaleString("tr-TR")}</span>;
        },
    },
    {
        accessorKey: "bonus",
        header: "Prim / Bonus",
        cell: ({ row }) => {
            const val: number = row.getValue("bonus");
            return (
                <span className="text-xs font-semibold text-green-600">
                    +{val > 0 ? "₺" : ""}
                    {val.toLocaleString("tr-TR")}
                </span>
            );
        },
    },
    {
        accessorKey: "deductions",
        header: "Kesintiler",
        cell: ({ row }) => {
            const val: number = row.getValue("deductions");
            return (
                <span className="text-xs font-semibold text-red-600">
                    -{val > 0 ? "₺" : ""}
                    {val.toLocaleString("tr-TR")}
                </span>
            );
        },
    },
    {
        accessorKey: "netPay",
        header: "Net Ödeme",
        cell: ({ row }) => {
            const val: number = row.getValue("netPay");
            return <span className="text-sm font-bold">₺{val.toLocaleString("tr-TR")}</span>;
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
            } else if (status === "bank_ready") {
                statusProps = { status: "info", label: "BANKA TALİMATI HAZIR" };
            }

            return (
                <StatusBadge
                    status={statusProps.status}
                    label={statusProps.label}
                    size="sm"
                    dot={false}
                    className="uppercase"
                />
            );
        },
    },
];

interface PayrollTableProps {
    data: PayrollPerson[];
}

export function PayrollTable({ data }: PayrollTableProps) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.department.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-white dark:bg-[#1a2432] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <h3 className="font-bold text-base flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">groups</span>
                    Personel Ödeme Listesi (Ekim 2023)
                </h3>
                <div className="flex gap-2 w-full md:w-auto">
                    <Button variant="outline" size="sm" className="flex items-center gap-2 h-9 text-xs">
                        <span className="material-symbols-outlined text-sm">download</span> Excel İndir
                    </Button>
                </div>
            </div>

            <FilterBar
                searchValue={searchTerm}
                onSearchChange={setSearchTerm}
                placeholder="İsim veya departman ara..."
            />

            <DataTable columns={columns} data={filteredData} />
        </div>
    );
}
