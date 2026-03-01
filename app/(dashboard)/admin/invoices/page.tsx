import React from "react";
import { KpiCard } from "@/components/shared/kpi-card";
import { InvoicesTable, InvoiceRecord } from "@/components/admin/invoices-table";

export const metadata = { title: "Faturalar | AgenciFlow" };

const mockInvoicesData: InvoiceRecord[] = [
    {
        id: "1",
        invoiceNo: "FAT-2023-00892",
        clientName: "Acme Corp Teknoloji A.Ş.",
        amount: 24500,
        issueDate: "24.10.2023",
        dueDate: "24.11.2023",
        status: "pending",
    },
    {
        id: "2",
        invoiceNo: "FAT-2023-00750",
        clientName: "Global Tech Lojistik",
        amount: 65000,
        issueDate: "05.10.2023",
        dueDate: "05.11.2023",
        status: "overdue",
    },
    {
        id: "3",
        invoiceNo: "FAT-2023-00810",
        clientName: "Luna Agency Tasarım",
        amount: 12800,
        issueDate: "15.10.2023",
        dueDate: "15.11.2023",
        status: "paid",
    },
];

export default function InvoicesPage() {
    return (
        <div className="flex-1 flex flex-col">
            <div className="p-4 md:p-8 space-y-6">
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <KpiCard
                        title="Ödenecek Toplam (Bekleyen)"
                        value="₺24.500,00"
                        changeText="Vadesi gelmemiş 1 fatura"
                        trend="neutral"
                        icon="pending_actions"
                    />
                    <KpiCard
                        title="Gecikmiş Toplam"
                        value="₺65.000,00"
                        changeText="Vadesi geçmiş 1 fatura"
                        trend="down"
                        icon="warning"
                    />
                    <KpiCard
                        title="Tahsil Edilen (Bu Ay)"
                        value="₺12.800,00"
                        changeText="Ödenmiş 1 fatura"
                        trend="up"
                        icon="check_circle"
                    />
                </section>

                <div className="w-full">
                    <InvoicesTable data={mockInvoicesData} />
                </div>
            </div>
        </div>
    );
}
