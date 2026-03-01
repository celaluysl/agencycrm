import React from "react";
import { KpiCard } from "@/components/shared/kpi-card";
import { CommissionsTable, CommissionRecord } from "@/components/admin/commissions-table";

export const metadata = { title: "Prim ve Hakediş Yönetimi | AgenciFlow" };

const mockCommissionsData: CommissionRecord[] = [
    {
        id: "1",
        employeeName: "Can Özkan",
        department: "Müşteri İlişkileri",
        dealName: "Acme Corp - Kurumsal SEO Projesi",
        amount: 8500,
        paymentDate: "30.10.2023",
        status: "earned",
    },
    {
        id: "2",
        employeeName: "Mert Aydın",
        department: "Yazılım",
        dealName: "Global Tech - E-Ticaret Geliştirme",
        amount: 5000,
        paymentDate: "24.10.2023",
        status: "approved",
    },
    {
        id: "3",
        employeeName: "Aslı Demir",
        department: "Pazarlama",
        dealName: "Luna Agency - Ads Yönetimi",
        amount: 2000,
        paymentDate: "15.10.2023",
        status: "paid",
    },
];

export default function CommissionsPage() {
    return (
        <div className="flex-1 flex flex-col">
            <div className="p-4 md:p-8 space-y-6">
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <KpiCard
                        title="Kazanılan Toplam Prim (Bekleyen)"
                        value="₺8.500,00"
                        changeText="Onay bekleyen 1 paket"
                        trend="neutral"
                        icon="monetization_on"
                    />
                    <KpiCard
                        title="Onaylı Ödenecek (Bu Ay)"
                        value="₺5.000,00"
                        changeText="Ödemesi beklenen"
                        trend="up"
                        icon="verified"
                    />
                    <KpiCard
                        title="Toplam Ödenen (Bu Yıl)"
                        value="₺124.200,00"
                        changeText="Tamamlanmış prim ödemeleri"
                        trend="up"
                        icon="paid"
                    />
                </section>

                <div className="w-full">
                    <CommissionsTable data={mockCommissionsData} />
                </div>
            </div>
        </div>
    );
}
