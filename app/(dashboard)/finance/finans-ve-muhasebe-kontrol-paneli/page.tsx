
"use client";

import React from "react";

export default function Page() {
  return (
    <div className="flex-1 flex flex-col flex-1 flex flex-col overflow-y-auto custom-scrollbar">
      

<div className="p-8 space-y-6">
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white dark:bg-[#1a2432] p-6 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm flex flex-col gap-1">
<div className="flex justify-between items-start mb-2">
<span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">payments</span>
<span className="text-success text-xs font-bold bg-success/10 px-2 py-1 rounded">+15.2%</span>
</div>
<p className="text-[#617289] text-xs font-semibold uppercase tracking-wider">Toplam Gelir</p>
<p className="text-2xl font-bold">₺1.420.000</p>
</div>
<div className="bg-white dark:bg-[#1a2432] p-6 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm flex flex-col gap-1">
<div className="flex justify-between items-start mb-2">
<span className="material-symbols-outlined text-danger bg-danger/10 p-2 rounded-lg">shopping_cart</span>
<span className="text-danger text-xs font-bold bg-danger/10 px-2 py-1 rounded">+8.4%</span>
</div>
<p className="text-[#617289] text-xs font-semibold uppercase tracking-wider">Toplam Gider</p>
<p className="text-2xl font-bold">₺845.600</p>
</div>
<div className="bg-white dark:bg-[#1a2432] p-6 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm flex flex-col gap-1">
<div className="flex justify-between items-start mb-2">
<span className="material-symbols-outlined text-warning bg-warning/10 p-2 rounded-lg">pending</span>
</div>
<p className="text-[#617289] text-xs font-semibold uppercase tracking-wider">Bekleyen Tahsilat</p>
<p className="text-2xl font-bold">₺312.400</p>
<p className="text-[10px] text-[#617289]">14 Bekleyen Fatura</p>
</div>
<div className="bg-white dark:bg-[#1a2432] p-6 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm flex flex-col gap-1">
<div className="flex justify-between items-start mb-2">
<span className="material-symbols-outlined text-danger bg-danger/10 p-2 rounded-lg">priority_high</span>
</div>
<p className="text-[#617289] text-xs font-semibold uppercase tracking-wider">Vadesi Geçmiş Ödemeler</p>
<p className="text-2xl font-bold text-danger">₺128.000</p>
<p className="text-[10px] text-danger font-bold">Hemen İşlem Gerekli</p>
</div>
</section>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
<div className="lg:col-span-8 bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 overflow-hidden shadow-sm">
<div className="px-6 py-5 border-b border-[#f0f2f4] dark:border-gray-800 flex justify-between items-center">
<h3 className="font-bold text-base flex items-center gap-2">
<span className="material-symbols-outlined text-primary">bar_chart</span>
                            Nakit Akış Grafiği (Gelir vs Gider)
                        </h3>
<div className="flex gap-2">
<div className="flex items-center gap-1.5">
<span className="size-2 rounded-full bg-primary"></span>
<span className="text-[10px] font-bold text-[#617289]">GELİR</span>
</div>
<div className="flex items-center gap-1.5 ml-2">
<span className="size-2 rounded-full bg-danger"></span>
<span className="text-[10px] font-bold text-[#617289]">GİDER</span>
</div>
</div>
</div>
<div className="p-8 h-[360px] flex flex-col">
<div className="flex-1 flex items-end justify-between gap-4">
<div className="flex flex-col items-center flex-1 gap-2">
<div className="w-full flex justify-center gap-1 items-end h-full">
<div className="bg-primary/80 w-4 rounded-t" style={{ "height": "60%" }}></div>
<div className="bg-danger/80 w-4 rounded-t" style={{ "height": "40%" }}></div>
</div>
<span className="text-[10px] font-bold text-[#617289]">Haz</span>
</div>
<div className="flex flex-col items-center flex-1 gap-2">
<div className="w-full flex justify-center gap-1 items-end h-full">
<div className="bg-primary/80 w-4 rounded-t" style={{ "height": "75%" }}></div>
<div className="bg-danger/80 w-4 rounded-t" style={{ "height": "45%" }}></div>
</div>
<span className="text-[10px] font-bold text-[#617289]">Tem</span>
</div>
<div className="flex flex-col items-center flex-1 gap-2">
<div className="w-full flex justify-center gap-1 items-end h-full">
<div className="bg-primary/80 w-4 rounded-t" style={{ "height": "65%" }}></div>
<div className="bg-danger/80 w-4 rounded-t" style={{ "height": "55%" }}></div>
</div>
<span className="text-[10px] font-bold text-[#617289]">Ağu</span>
</div>
<div className="flex flex-col items-center flex-1 gap-2">
<div className="w-full flex justify-center gap-1 items-end h-full">
<div className="bg-primary/80 w-4 rounded-t" style={{ "height": "90%" }}></div>
<div className="bg-danger/80 w-4 rounded-t" style={{ "height": "50%" }}></div>
</div>
<span className="text-[10px] font-bold text-[#617289]">Eyl</span>
</div>
<div className="flex flex-col items-center flex-1 gap-2">
<div className="w-full flex justify-center gap-1 items-end h-full">
<div className="bg-primary/80 w-4 rounded-t" style={{ "height": "85%" }}></div>
<div className="bg-danger/80 w-4 rounded-t" style={{ "height": "60%" }}></div>
</div>
<span className="text-[10px] font-bold text-[#617289]">Eki</span>
</div>
<div className="flex flex-col items-center flex-1 gap-2">
<div className="w-full flex justify-center gap-1 items-end h-full">
<div className="bg-primary w-4 rounded-t shadow-lg" style={{ "height": "95%" }}></div>
<div className="bg-danger w-4 rounded-t shadow-lg" style={{ "height": "65%" }}></div>
</div>
<span className="text-[10px] font-bold text-[#111418] dark:text-white">Kas</span>
</div>
</div>
</div>
</div>
<div className="lg:col-span-4 space-y-6">
<div className="bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm">
<div className="px-5 py-4 border-b border-[#f0f2f4] dark:border-gray-800">
<h3 className="font-bold text-sm flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-xl">event_upcoming</span>
                                Yaklaşan Faturalar
                            </h3>
</div>
<div className="p-4 space-y-3">
<div className="flex items-center justify-between p-3 rounded-lg border border-gray-100 dark:border-gray-800">
<div>
<p className="text-xs font-bold">Cloud Server Ödemesi</p>
<p className="text-[10px] text-[#617289]">Vade: 18 Kasım 2023</p>
</div>
<p className="text-sm font-bold">₺8.400</p>
</div>
<div className="flex items-center justify-between p-3 rounded-lg border border-gray-100 dark:border-gray-800">
<div>
<p className="text-xs font-bold">Ofis Kirası</p>
<p className="text-[10px] text-[#617289]">Vade: 20 Kasım 2023</p>
</div>
<p className="text-sm font-bold">₺45.000</p>
</div>
</div>
</div>
<div className="bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm">
<div className="px-5 py-4 border-b border-[#f0f2f4] dark:border-gray-800">
<h3 className="font-bold text-sm flex items-center gap-2">
<span className="material-symbols-outlined text-warning text-xl">rule</span>
                                Onay Bekleyen Talepler
                            </h3>
</div>
<div className="p-4 space-y-3">
<div className="p-3 rounded-lg bg-orange-50/50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/20">
<div className="flex justify-between items-start mb-2">
<p className="text-xs font-bold text-orange-800 dark:text-orange-400">Backlink Alımı - TechHub</p>
<span className="text-xs font-bold">₺4.200</span>
</div>
<div className="flex items-center gap-2 mt-3">
<button className="flex-1 py-1.5 text-[10px] font-bold bg-success text-white rounded">Onayla</button>
<button className="flex-1 py-1.5 text-[10px] font-bold bg-gray-200 dark:bg-gray-700 rounded">Reddet</button>
</div>
</div>
<div className="p-3 rounded-lg bg-orange-50/50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/20">
<div className="flex justify-between items-start mb-2">
<p className="text-xs font-bold text-orange-800 dark:text-orange-400">Yazılım Lisans Yenileme</p>
<span className="text-xs font-bold">₺12.150</span>
</div>
<div className="flex items-center gap-2 mt-3">
<button className="flex-1 py-1.5 text-[10px] font-bold bg-success text-white rounded">Onayla</button>
<button className="flex-1 py-1.5 text-[10px] font-bold bg-gray-200 dark:bg-gray-700 rounded">Reddet</button>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 overflow-hidden shadow-sm flex flex-col">
<div className="px-6 py-5 border-b border-[#f0f2f4] dark:border-gray-800 flex justify-between items-center">
<h3 className="font-bold text-base flex items-center gap-2">
<span className="material-symbols-outlined text-primary">group</span>
                        Müşteri Ödeme Durumları
                    </h3>
<div className="flex gap-2">
<div className="relative">
<input className="pl-8 pr-4 py-1.5 text-xs rounded-lg border border-[#dbe0e6] dark:bg-gray-800 dark:border-gray-700 focus:ring-primary focus:border-primary outline-none" placeholder="Müşteri ara..." type="text" />
<span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-sm text-[#617289]">search</span>
</div>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50/50 dark:bg-gray-800/50">
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Müşteri Adı</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Son Fatura Tarihi</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Fatura Tutarı</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Vade Tarihi</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider text-center">Durum</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">İşlem</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 dark:divide-gray-800">
<tr>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">AL</div>
<span className="text-sm font-bold">Apex Logistics</span>
</div>
</td>
<td className="px-6 py-4 text-sm">12 Kasım 2023</td>
<td className="px-6 py-4 text-sm font-bold">₺24.500</td>
<td className="px-6 py-4 text-sm">27 Kasım 2023</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-success/10 text-success uppercase">Ödendi</span>
</td>
<td className="px-6 py-4">
<button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-[#617289]">
<span className="material-symbols-outlined text-xl">visibility</span>
</button>
</td>
</tr>
<tr>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">NF</div>
<span className="text-sm font-bold">Nova Fashion</span>
</div>
</td>
<td className="px-6 py-4 text-sm">05 Kasım 2023</td>
<td className="px-6 py-4 text-sm font-bold">₺18.900</td>
<td className="px-6 py-4 text-sm">20 Kasım 2023</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-warning/10 text-warning uppercase">Bekliyor</span>
</td>
<td className="px-6 py-4">
<button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-[#617289]">
<span className="material-symbols-outlined text-xl">visibility</span>
</button>
</td>
</tr>
<tr>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">CC</div>
<span className="text-sm font-bold">CyberCore Tech</span>
</div>
</td>
<td className="px-6 py-4 text-sm">28 Ekim 2023</td>
<td className="px-6 py-4 text-sm font-bold">₺32.000</td>
<td className="px-6 py-4 text-sm text-danger font-bold">12 Kasım 2023</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-danger/10 text-danger uppercase">Gecikti</span>
</td>
<td className="px-6 py-4">
<button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-danger">
<span className="material-symbols-outlined text-xl">mail</span>
</button>
</td>
</tr>
<tr>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">GL</div>
<span className="text-sm font-bold">GreenLeaf Organic</span>
</div>
</td>
<td className="px-6 py-4 text-sm">14 Kasım 2023</td>
<td className="px-6 py-4 text-sm font-bold">₺12.400</td>
<td className="px-6 py-4 text-sm">29 Kasım 2023</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-warning/10 text-warning uppercase">Bekliyor</span>
</td>
<td className="px-6 py-4">
<button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-[#617289]">
<span className="material-symbols-outlined text-xl">visibility</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-4 border-t border-[#f0f2f4] dark:border-gray-800 flex items-center justify-between">
<p className="text-xs text-[#617289]">Toplam 48 müşteri kaydı gösteriliyor.</p>
<div className="flex gap-1">
<button className="px-3 py-1 text-[10px] font-bold bg-gray-100 dark:bg-gray-800 rounded">1</button>
<button className="px-3 py-1 text-[10px] font-bold text-[#617289]">2</button>
<button className="px-3 py-1 text-[10px] font-bold text-[#617289]">3</button>
</div>
</div>
</div>
</div>

    </div>
  );
}
