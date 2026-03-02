import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const mockPortfolios = [
  {
    id: "1",
    client: { name: "Acme Corp", industry: "B2B Yazılım", logo: "https://i.pravatar.cc/150?u=a" },
    platforms: ["google_ads", "linkedin_ads"],
    budget: { total: 50000, spend: 45000, currency: "₺" },
    health: "critical", // critical, warning, good
    roas: "2.4",
    activeCampaigns: 4
  },
  {
    id: "2",
    client: { name: "TechNova", industry: "E-Ticaret", logo: "https://i.pravatar.cc/150?u=b" },
    platforms: ["google_ads", "meta_ads", "tiktok_ads"],
    budget: { total: 120000, spend: 54000, currency: "₺" },
    health: "good",
    roas: "4.8",
    activeCampaigns: 12
  },
  {
    id: "3",
    client: { name: "Luxe Otel Grubu", industry: "Turizm", logo: "https://i.pravatar.cc/150?u=c" },
    platforms: ["google_ads", "meta_ads"],
    budget: { total: 75000, spend: 68000, currency: "₺" },
    health: "warning",
    roas: "3.1",
    activeCampaigns: 6
  }
];

export default function SemPortfolioPage() {
  const getHealthBadge = (health: string) => {
    switch (health) {
      case "critical": return <Badge className="bg-red-50 text-red-600 border-red-200 text-[10px] px-2 py-0">KRİTİK</Badge>;
      case "warning": return <Badge className="bg-yellow-50 text-yellow-600 border-yellow-200 text-[10px] px-2 py-0">UYARI</Badge>;
      case "good": return <Badge className="bg-green-50 text-green-600 border-green-200 text-[10px] px-2 py-0">SAĞLIKLI</Badge>;
      default: return null;
    }
  };

  const getPlatformIcon = (platform: string) => {
    // We would normally use actual brand icons here (e.g. from react-icons/fa)
    // Using material-symbols as placeholder for now, colored by brand
    switch (platform) {
      case "google_ads": return <div key={platform} className="p-1 rounded bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center w-6 h-6"><span className="material-symbols-outlined text-[14px]">search</span></div>;
      case "meta_ads": return <div key={platform} className="p-1 rounded bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center w-6 h-6"><span className="material-symbols-outlined text-[14px]">groups</span></div>;
      case "linkedin_ads": return <div key={platform} className="p-1 rounded bg-sky-50 text-sky-600 border border-sky-100 flex items-center justify-center w-6 h-6"><span className="material-symbols-outlined text-[14px]">work</span></div>;
      case "tiktok_ads": return <div key={platform} className="p-1 rounded bg-black/5 text-black border border-black/10 dark:bg-white/5 dark:text-white dark:border-white/10 flex items-center justify-center w-6 h-6"><span className="material-symbols-outlined text-[14px]">play_circle</span></div>;
      default: return null;
    }
  };

  return (
    <div className="flex-1 p-4 md:p-8 space-y-6 max-w-7xl mx-auto w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold dark:text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">folder_supervised</span>
            SEM Müşteri Portföyü
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Müşterilerinizin tüm reklam hesaplarını ve kümülatif bütçe harcamalarını tek ekrandan takip edin.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white font-bold text-xs rounded-lg transition-colors">
            <span className="material-symbols-outlined text-sm">person_add</span>
            Müşteri Ekle
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-[#1a2432] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden flex flex-col">
        <div className="p-4 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/30 flex justify-between items-center">
          <h3 className="font-bold text-sm flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">analytics</span>
            Aktif Kampanya Portföyü
          </h3>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">search</span>
            <input
              type="text"
              placeholder="Müşteri Ara..."
              className="pl-9 pr-4 py-1.5 text-xs border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:ring-1 focus:ring-primary outline-none w-64"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-white dark:bg-[#1a2432] border-b border-gray-100 dark:border-gray-800">
              <tr>
                <th className="px-6 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Müşteri</th>
                <th className="px-6 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Platformlar</th>
                <th className="px-6 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-left">Bütçe Durumu (Aylık)</th>
                <th className="px-6 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Kampanya</th>
                <th className="px-6 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Ort. ROAS</th>
                <th className="px-6 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Hesap Sağlığı</th>
                <th className="px-6 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-right">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {mockPortfolios.map((item) => {
                const percent = Math.round((item.budget.spend / item.budget.total) * 100);
                const isOverBudget = percent >= 90;

                return (
                  <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img src={item.client.logo} alt={item.client.name} className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700 object-cover" />
                        <div>
                          <p className="text-sm font-bold text-gray-900 dark:text-gray-100">{item.client.name}</p>
                          <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">{item.client.industry}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-1.5">
                        {item.platforms.map(p => getPlatformIcon(p))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1 w-full max-w-[180px]">
                        <div className="flex justify-between items-end text-xs font-medium">
                          <span className={isOverBudget ? "text-red-500 font-bold" : "text-gray-700 dark:text-gray-300"}>
                            {item.budget.currency}{(item.budget.spend).toLocaleString('tr-TR')}
                          </span>
                          <span className="text-[10px] text-gray-400">/ {item.budget.currency}{(item.budget.total).toLocaleString('tr-TR')}</span>
                        </div>
                        <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-1.5">
                          <div
                            className={`h-1.5 rounded-full ${isOverBudget ? 'bg-red-500' : percent > 75 ? 'bg-yellow-500' : 'bg-green-500'}`}
                            style={{ width: `${Math.min(percent, 100)}%` }}
                          ></div>
                        </div>
                        <span className={`text-[9px] font-bold text-right ${isOverBudget ? 'text-red-500' : 'text-gray-400'}`}>%{percent} Harcandı</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{item.activeCampaigns}</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-sm font-black text-gray-900 dark:text-gray-100 font-mono">{item.roas}x</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      {getHealthBadge(item.health)}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-1.5 text-gray-400 hover:text-primary transition-colors hover:bg-primary/5 rounded-md" title="Detayları Görüntüle">
                        <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
