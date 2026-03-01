
"use client";

import React from "react";

export default function Page() {
  return (
    <div className="flex-1 flex flex-col flex-1 overflow-y-auto">
      
<div className="max-w-7xl mx-auto p-8 space-y-8 pb-20">

<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-white dark:bg-background-dark border border-[#dbe0e6] rounded-xl p-6 shadow-sm">
<div className="flex justify-between items-start mb-4">
<p className="text-[#617289] text-sm font-medium">Toplam Yönetilen Hesap</p>
<span className="material-symbols-outlined text-primary">account_tree</span>
</div>
<div className="flex items-end gap-2">
<p className="text-[#111418] dark:text-white text-3xl font-black">24</p>
<span className="text-green-600 text-xs font-bold mb-1">+2 Bu ay</span>
</div>
<p className="text-[#617289] text-xs mt-2">6 farklı platform üzerinde</p>
</div>
<div className="bg-white dark:bg-background-dark border border-[#dbe0e6] rounded-xl p-6 shadow-sm">
<div className="flex justify-between items-start mb-4">
<p className="text-[#617289] text-sm font-medium">Aylık Toplam İçerik Üretimi</p>
<span className="material-symbols-outlined text-primary">post_add</span>
</div>
<div className="flex items-end gap-2">
<p className="text-[#111418] dark:text-white text-3xl font-black">412</p>
<span className="text-[#111418] dark:text-white text-xs font-bold mb-1">/ 450 Hedef</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5 mt-3">
<div className="bg-primary h-1.5 rounded-full" style={{ "width": "91.5%" }}></div>
</div>
</div>
<div className="bg-white dark:bg-background-dark border border-[#dbe0e6] rounded-xl p-6 shadow-sm">
<div className="flex justify-between items-start mb-4">
<p className="text-[#617289] text-sm font-medium">Genel Portföy Sağlığı</p>
<span className="material-symbols-outlined text-green-500">favorite</span>
</div>
<div className="flex items-end gap-2">
<p className="text-[#111418] dark:text-white text-3xl font-black">%94</p>
</div>
<p className="text-[#617289] text-xs mt-2">Dönüşüm ve etkileşim bazlı skor</p>
</div>
</section>
<section className="space-y-4">
<div className="bg-white dark:bg-background-dark border border-[#dbe0e6] rounded-xl p-4 shadow-sm">
<div className="flex flex-wrap items-center gap-4">
<div className="flex-1 min-w-[200px]">
<label className="block text-[11px] font-bold text-[#617289] uppercase mb-1">Sektör Filtrele</label>
<select className="w-full border-[#dbe0e6] rounded-lg text-sm bg-gray-50 dark:bg-gray-800 focus:ring-primary">
<option>Tüm Sektörler</option>
<option>E-Ticaret</option>
<option>Turizm</option>
<option>Lojistik</option>
<option>Sağlık</option>
</select>
</div>
<div className="flex-1 min-w-[200px]">
<label className="block text-[11px] font-bold text-[#617289] uppercase mb-1">Kanal</label>
<select className="w-full border-[#dbe0e6] rounded-lg text-sm bg-gray-50 dark:bg-gray-800 focus:ring-primary">
<option>Tüm Kanallar</option>
<option>Instagram</option>
<option>LinkedIn</option>
<option>Twitter (X)</option>
<option>Facebook</option>
</select>
</div>
<div className="flex-1 min-w-[200px]">
<label className="block text-[11px] font-bold text-[#617289] uppercase mb-1">Onay Durumu</label>
<select className="w-full border-[#dbe0e6] rounded-lg text-sm bg-gray-50 dark:bg-gray-800 focus:ring-primary">
<option>Hepsi</option>
<option>Aktif İş Ortaklığı</option>
<option>Onay Bekliyor</option>
<option>Sözleşme Yenileme</option>
</select>
</div>
<div className="pt-4">
<button className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-[#111418] dark:text-white p-2.5 rounded-lg transition-colors">
<span className="material-symbols-outlined text-xl leading-none">filter_list_off</span>
</button>
</div>
</div>
</div>
<div className="bg-white dark:bg-background-dark border border-[#dbe0e6] rounded-xl overflow-hidden shadow-sm">
<table className="w-full text-left border-collapse">
<thead className="bg-gray-50 dark:bg-gray-800/50 border-b border-[#dbe0e6]">
<tr>
<th className="px-6 py-4 text-xs font-bold text-[#617289] uppercase tracking-wider">Müşteri &amp; Sektör</th>
<th className="px-6 py-4 text-xs font-bold text-[#617289] uppercase tracking-wider">Hesaplar</th>
<th className="px-6 py-4 text-xs font-bold text-[#617289] uppercase tracking-wider">Paylaşım Hedefi</th>
<th className="px-6 py-4 text-xs font-bold text-[#617289] uppercase tracking-wider">Ort. Etkileşim</th>
<th className="px-6 py-4 text-xs font-bold text-[#617289] uppercase tracking-wider">Sağlık Durumu</th>
<th className="px-6 py-4 text-xs font-bold text-[#617289] uppercase tracking-wider text-right">İşlem</th>
</tr>
</thead>
<tbody className="divide-y divide-[#dbe0e6]">
<tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/20 transition-colors">
<td className="px-6 py-5">
<div className="flex flex-col">
<span className="text-sm font-bold text-[#111418] dark:text-white">TechNova E-Ticaret</span>
<span className="text-[11px] text-[#617289]">Teknoloji &amp; Perakende</span>
</div>
</td>
<td className="px-6 py-5">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5">
<span className="text-[10px] font-bold text-pink-600 bg-pink-50 px-1 rounded">IG</span>
<span className="text-xs font-medium text-[#111418] dark:text-white">@technovaretail</span>
</div>
<div className="flex items-center gap-1.5">
<span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-1 rounded">LI</span>
<span className="text-xs font-medium text-[#111418] dark:text-white">/company/technova</span>
</div>
</div>
</td>
<td className="px-6 py-5">
<div className="space-y-1.5">
<div className="flex justify-between items-center text-[11px]">
<span className="font-bold text-[#111418] dark:text-white">18 / 20</span>
<span className="text-[#617289]">%90</span>
</div>
<div className="w-32 bg-gray-100 rounded-full h-1.5">
<div className="bg-primary h-1.5 rounded-full" style={{ "width": "90%" }}></div>
</div>
</div>
</td>
<td className="px-6 py-5">
<div className="flex items-center gap-2">
<span className="text-sm font-bold text-[#111418] dark:text-white">%4.2</span>
<span className="material-symbols-outlined text-green-500 text-sm">trending_up</span>
</div>
</td>
<td className="px-6 py-5">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-green-100 text-green-700">KRİTİK DEĞİL</span>
</td>
<td className="px-6 py-5 text-right">
<button className="text-[#617289] hover:text-primary transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
<tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/20 transition-colors">
<td className="px-6 py-5">
<div className="flex flex-col">
<span className="text-sm font-bold text-[#111418] dark:text-white">Luxe Otel Grubu</span>
<span className="text-[11px] text-[#617289]">Turizm &amp; Konaklama</span>
</div>
</td>
<td className="px-6 py-5">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5">
<span className="text-[10px] font-bold text-pink-600 bg-pink-50 px-1 rounded">IG</span>
<span className="text-xs font-medium text-[#111418] dark:text-white">@luxehotels</span>
</div>
<div className="flex items-center gap-1.5">
<span className="text-[10px] font-bold text-blue-400 bg-blue-50 px-1 rounded">FB</span>
<span className="text-xs font-medium text-[#111418] dark:text-white">/luxehotelsresorts</span>
</div>
</div>
</td>
<td className="px-6 py-5">
<div className="space-y-1.5">
<div className="flex justify-between items-center text-[11px]">
<span className="font-bold text-[#111418] dark:text-white">12 / 30</span>
<span className="text-red-600 font-bold">%40</span>
</div>
<div className="w-32 bg-gray-100 rounded-full h-1.5">
<div className="bg-red-500 h-1.5 rounded-full" style={{ "width": "40%" }}></div>
</div>
</div>
</td>
<td className="px-6 py-5">
<div className="flex items-center gap-2">
<span className="text-sm font-bold text-[#111418] dark:text-white">%2.8</span>
<span className="material-symbols-outlined text-red-500 text-sm">trending_down</span>
</div>
</td>
<td className="px-6 py-5">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-yellow-100 text-yellow-700 uppercase">İLGİ GEREKİYOR</span>
</td>
<td className="px-6 py-5 text-right">
<button className="text-[#617289] hover:text-primary transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
<tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/20 transition-colors">
<td className="px-6 py-5">
<div className="flex flex-col">
<span className="text-sm font-bold text-[#111418] dark:text-white">Global Lojistik A.Ş.</span>
<span className="text-[11px] text-[#617289]">Taşımacılık &amp; B2B</span>
</div>
</td>
<td className="px-6 py-5">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5">
<span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-1 rounded">LI</span>
<span className="text-xs font-medium text-[#111418] dark:text-white">/company/globallogistics</span>
</div>
<div className="flex items-center gap-1.5">
<span className="text-[10px] font-bold text-gray-800 bg-gray-50 px-1 rounded">X</span>
<span className="text-xs font-medium text-[#111418] dark:text-white">@globallogistics</span>
</div>
</div>
</td>
<td className="px-6 py-5">
<div className="space-y-1.5">
<div className="flex justify-between items-center text-[11px]">
<span className="font-bold text-[#111418] dark:text-white">10 / 12</span>
<span className="text-[#617289]">%83</span>
</div>
<div className="w-32 bg-gray-100 rounded-full h-1.5">
<div className="bg-primary h-1.5 rounded-full" style={{ "width": "83%" }}></div>
</div>
</div>
</td>
<td className="px-6 py-5">
<div className="flex items-center gap-2">
<span className="text-sm font-bold text-[#111418] dark:text-white">%1.5</span>
<span className="material-symbols-outlined text-gray-400 text-sm">trending_flat</span>
</div>
</td>
<td className="px-6 py-5">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-green-100 text-green-700">STABİL</span>
</td>
<td className="px-6 py-5 text-right">
<button className="text-[#617289] hover:text-primary transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</section>
<section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="lg:col-span-2 space-y-4">
<h3 className="text-[#111418] dark:text-white text-xl font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-primary">priority_high</span>
                        Dikkat Gereken Bildirimler
                    </h3>
<div className="bg-red-50 dark:bg-red-900/10 border border-red-200 rounded-xl p-4 flex items-start gap-4">
<div className="p-2 bg-red-100 dark:bg-red-900/20 rounded-lg text-red-600">
<span className="material-symbols-outlined">error</span>
</div>
<div>
<p className="text-sm font-bold text-red-800 dark:text-red-400">Hedef Paylaşım Oranı Düştü</p>
<p className="text-xs text-red-700 dark:text-red-300 mt-1">Luxe Otel Grubu için haftalık 7 paylaşım hedefinin sadece 2 tanesi tamamlandı. Gecikme riski mevcut.</p>
</div>
</div>
</div>
<div className="space-y-4">
<h3 className="text-[#111418] dark:text-white text-xl font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-primary">pending_actions</span>
                        Onay Bekleyen İşler
                    </h3>
<div className="bg-white dark:bg-background-dark border border-[#dbe0e6] rounded-xl p-4 space-y-3">
<div className="flex items-center justify-between py-2 border-b border-gray-50 dark:border-gray-800">
<div className="flex flex-col">
<span className="text-xs font-bold text-[#111418] dark:text-white">Haziran Bülteni Tasarımı</span>
<span className="text-[10px] text-[#617289]">Global Lojistik A.Ş.</span>
</div>
<span className="text-[10px] font-bold px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded">MÜŞTERİDE</span>
</div>
<div className="flex items-center justify-between py-2 border-b border-gray-50 dark:border-gray-800">
<div className="flex flex-col">
<span className="text-xs font-bold text-[#111418] dark:text-white">Reels Kurgusu Onayı</span>
<span className="text-[10px] text-[#617289]">TechNova E-Ticaret</span>
</div>
<span className="text-[10px] font-bold px-2 py-0.5 bg-blue-100 text-blue-700 rounded">İÇ ONAYDA</span>
</div>
</div>
</div>
</section>
<footer className="pt-8">
<details className="group bg-white dark:bg-background-dark border border-[#dbe0e6] rounded-xl shadow-sm overflow-hidden" open>
<summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors border-b border-[#dbe0e6]">
<h3 className="text-[#111418] dark:text-white text-lg font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-green-500">check_circle</span>
                            Tamamlanan İşler &amp; Arşiv (Son 5)
                        </h3>
<span className="material-symbols-outlined transition-transform group-open:rotate-180 text-[#617289]">expand_more</span>
</summary>
<div className="divide-y divide-[#dbe0e6]">
<div className="px-6 py-4 flex items-center justify-between bg-gray-50/30 dark:bg-gray-800/10">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-green-500">task_alt</span>
<div>
<p className="text-sm font-bold text-[#111418] dark:text-white line-through opacity-60">Mayıs Performans Analizi Sunuldu</p>
<p className="text-[11px] text-[#617289]">TechNova E-Ticaret • 14 Haz 2024</p>
</div>
</div>
<span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded uppercase">TAMAMLANDI</span>
</div>
<div className="px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-green-500">task_alt</span>
<div>
<p className="text-sm font-bold text-[#111418] dark:text-white line-through opacity-60">Influencer Brifing Dokümanı</p>
<p className="text-[11px] text-[#617289]">Luxe Otel Grubu • 12 Haz 2024</p>
</div>
</div>
<span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded uppercase">TAMAMLANDI</span>
</div>
<div className="px-6 py-4 flex items-center justify-between bg-gray-50/30 dark:bg-gray-800/10">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-green-500">task_alt</span>
<div>
<p className="text-sm font-bold text-[#111418] dark:text-white line-through opacity-60">Bio Optimizasyonu</p>
<p className="text-[11px] text-[#617289]">Global Lojistik A.Ş. • 10 Haz 2024</p>
</div>
</div>
<span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded uppercase">TAMAMLANDI</span>
</div>
</div>
</details>
</footer>
</div>

    </div>
  );
}
