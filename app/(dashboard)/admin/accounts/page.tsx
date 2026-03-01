import React from "react";
import { KpiCard } from "@/components/shared/kpi-card";
import { AccountsTable, AccountRecord } from "@/components/admin/accounts-table";

export const metadata = { title: "Cari Hesaplar | AgenciFlow" };

const mockAccountsData: AccountRecord[] = [
    {
        id: "1",
        clientName: "Acme Corp Teknoloji A.Ş.",
        taxNumber: "1234567890",
        totalDebt: 124500,
        totalCredit: 85000,
        netBalance: 39500,
        lastActionDate: "24.10.2023",
        status: "debtor",
    },
    {
        id: "2",
        clientName: "Global Tech Lojistik",
        taxNumber: "0987654321",
        totalDebt: 42000,
        totalCredit: 42000,
        netBalance: 0,
        lastActionDate: "22.10.2023",
        status: "zero",
    },
    {
        id: "3",
        clientName: "Luna Agency Tasarım",
        taxNumber: "5544332211",
        totalDebt: 12800,
        totalCredit: 15000,
        netBalance: 2200,
        lastActionDate: "18.10.2023",
        status: "creditor",
    },
];

export default function AccountsPage() {
    return (
        <div className="flex-1 flex flex-col">
            <div className="p-4 md:p-8 space-y-6">
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <KpiCard
                        title="Toplam Borç"
                        value="₺179.300,00"
                        changeText="Açık borç bakiyesi olan 12 müşteri"
                        trend="neutral"
                    />
                    <KpiCard
                        title="Toplam Alacak"
                        value="₺142.000,00"
                        changeText="Alacaklandırılmış müşteri ödemeleri"
                        trend="neutral"
                    />
                    <KpiCard
                        title="Net Bakiye"
                        value="₺37.300,00"
                        changeText="Borç"
                        trend="down"
                        icon="account_balance_wallet"
                    />
                </section>

                <div className="w-full">
                    <AccountsTable data={mockAccountsData} />
                </div>
            </div>
        </div>
    );
}
