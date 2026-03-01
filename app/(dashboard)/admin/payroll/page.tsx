import { PayrollTable } from "@/components/admin/payroll-table";
import { SalaryDistributionChart } from "@/components/admin/salary-distribution-chart";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
    title: "Maaş ve Personel Ödemeleri | AgenciFlow",
};

export default function PayrollPage() {
    return (
        <div className="p-8 space-y-6">
            {/* KPI Cards */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="rounded-xl shadow-sm text-[#111418] dark:text-white">
                    <CardContent className="p-6 flex flex-col gap-1">
                        <p className="text-[#617289] text-[10px] font-bold uppercase tracking-wider">
                            Aylık Toplam Maaş Gideri
                        </p>
                        <p className="text-2xl font-bold">₺842.500,00</p>
                        <div className="mt-2 flex items-center gap-1 text-[10px] text-success font-bold">
                            <span className="material-symbols-outlined text-xs">trending_up</span>{" "}
                            +3.2% geçen aya göre
                        </div>
                    </CardContent>
                </Card>

                <Card className="rounded-xl shadow-sm text-[#111418] dark:text-white">
                    <CardContent className="p-6 flex flex-col gap-1">
                        <p className="text-[#617289] text-[10px] font-bold uppercase tracking-wider">
                            Prim ve Bonuslar
                        </p>
                        <p className="text-2xl font-bold text-success">₺64.200,00</p>
                        <div className="mt-2 flex items-center gap-1 text-[10px] text-[#617289] font-bold">
                            <span className="material-symbols-outlined text-xs">emoji_events</span>{" "}
                            12 Personel hak kazandı
                        </div>
                    </CardContent>
                </Card>

                <Card className="rounded-xl shadow-sm text-[#111418] dark:text-white">
                    <CardContent className="p-6 flex flex-col gap-1">
                        <p className="text-[#617289] text-[10px] font-bold uppercase tracking-wider">
                            SGK ve Vergi Yükü
                        </p>
                        <p className="text-2xl font-bold text-danger">₺218.400,00</p>
                        <div className="mt-2 flex items-center gap-1 text-[10px] text-danger font-bold">
                            <span className="material-symbols-outlined text-xs">info</span> Son ödeme:
                            26 Ekim
                        </div>
                    </CardContent>
                </Card>

                <Card className="rounded-xl shadow-sm text-[#111418] dark:text-white">
                    <CardContent className="p-6 flex flex-col gap-1">
                        <p className="text-[#617289] text-[10px] font-bold uppercase tracking-wider">
                            Toplam Yan Haklar
                        </p>
                        <p className="text-2xl font-bold text-primary">₺42.150,00</p>
                        <div className="mt-2 flex items-center gap-1 text-[10px] text-primary font-bold">
                            <span className="material-symbols-outlined text-xs">add_home</span> Yemek,
                            Yol ve Özel Sağlık
                        </div>
                    </CardContent>
                </Card>
            </section>

            {/* Main Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-9 bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 overflow-hidden shadow-sm">
                    <div className="px-6 py-5 border-b border-[#f0f2f4] dark:border-gray-800 flex justify-between items-center">
                        <h3 className="font-bold text-base flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">groups</span>
                            Personel Ödeme Listesi (Ekim 2023)
                        </h3>
                        <div className="flex gap-2">
                            <button className="flex items-center gap-1 text-xs font-bold text-[#617289] hover:text-primary transition-colors">
                                <span className="material-symbols-outlined text-sm">filter_list</span>{" "}
                                Filtrele
                            </button>
                            <button className="flex items-center gap-1 text-xs font-bold text-[#617289] hover:text-primary transition-colors ml-4">
                                <span className="material-symbols-outlined text-sm">download</span> Excel
                                İndir
                            </button>
                        </div>
                    </div>
                    <PayrollTable />
                </div>

                <div className="lg:col-span-3 space-y-6">
                    <div className="bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm p-6">
                        <h3 className="font-bold text-sm mb-4 flex items-center gap-2 uppercase tracking-wide">
                            <span className="material-symbols-outlined text-primary text-xl">
                                file_download
                            </span>
                            Hızlı İşlemler
                        </h3>
                        <div className="space-y-3">
                            <button className="w-full flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg group hover:bg-primary hover:text-white transition-all text-[#111418] dark:text-white">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-xl">description</span>
                                    <span className="text-xs font-bold">Bordro İndir (Zip)</span>
                                </div>
                                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                                    chevron_right
                                </span>
                            </button>
                            <button className="w-full flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg group hover:bg-success hover:text-white transition-all text-[#111418] dark:text-white">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-xl">task_alt</span>
                                    <span className="text-xs font-bold">Toplu Ödeme Onayı</span>
                                </div>
                                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                                    chevron_right
                                </span>
                            </button>
                            <button className="w-full flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg group hover:bg-primary hover:text-white transition-all text-[#111418] dark:text-white">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-xl">send</span>
                                    <span className="text-xs font-bold">Bordroları Gönder</span>
                                </div>
                                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                                    chevron_right
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm p-6">
                        <h3 className="font-bold text-sm mb-6 flex items-center gap-2 uppercase tracking-wide">
                            <span className="material-symbols-outlined text-primary text-xl">
                                pie_chart
                            </span>
                            Maaş Dağılımı
                        </h3>
                        <SalaryDistributionChart />
                    </div>
                </div>
            </div>
        </div>
    );
}
