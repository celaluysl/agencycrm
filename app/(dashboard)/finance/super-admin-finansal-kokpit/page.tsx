
"use client";

import React from "react";

export default function Page() {
  return (
    <div className="flex-1 flex flex-col">
      

<div className="p-8 space-y-6">
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white dark:bg-[#1a2432] p-6 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm flex flex-col gap-1">
<div className="flex justify-between items-start mb-2">
<span className="material-symbols-outlined text-green-500 bg-green-500/10 p-2 rounded-lg">percent</span>
<span className="text-[#07883b] text-xs font-bold bg-[#07883b]/10 px-2 py-1 rounded">+2.4%</span>
</div>
<p className="text-[#617289] text-xs font-semibold uppercase tracking-wider">Net Kar Marjı</p>
<p className="text-2xl font-bold">24.8%</p>
</div>
<div className="bg-white dark:bg-[#1a2432] p-6 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm flex flex-col gap-1">
<div className="flex justify-between items-start mb-2">
<span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">event_upcoming</span>
<span className="text-primary text-xs font-bold bg-primary/10 px-2 py-1 rounded">Tahmin</span>
</div>
<p className="text-[#617289] text-xs font-semibold uppercase tracking-wider">Gelecek Ay Tahmini Tahsilat</p>
<p className="text-2xl font-bold">₺845.000</p>
</div>
<div className="bg-white dark:bg-[#1a2432] p-6 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm flex flex-col gap-1">
<div className="flex justify-between items-start mb-2">
<span className="material-symbols-outlined text-red-500 bg-red-500/10 p-2 rounded-lg">person_remove</span>
<span className="text-red-500 text-xs font-bold bg-red-500/10 px-2 py-1 rounded">-0.5%</span>
</div>
<p className="text-[#617289] text-xs font-semibold uppercase tracking-wider">Churn Rate (Kayıp Oranı)</p>
<p className="text-2xl font-bold">3.2%</p>
</div>
<div className="bg-white dark:bg-[#1a2432] p-6 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm flex flex-col gap-1">
<div className="flex justify-between items-start mb-2">
<span className="material-symbols-outlined text-orange-500 bg-orange-500/10 p-2 rounded-lg">diamond</span>
<span className="text-[#07883b] text-xs font-bold bg-[#07883b]/10 px-2 py-1 rounded">Yüksek</span>
</div>
<p className="text-[#617289] text-xs font-semibold uppercase tracking-wider">LTV (Müşteri Yaşam Boyu Değeri)</p>
<p className="text-2xl font-bold">₺142.200</p>
</div>
</section>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
<div className="lg:col-span-8 bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm flex flex-col overflow-hidden">
<div className="px-6 py-5 border-b border-[#f0f2f4] dark:border-gray-800 flex justify-between items-center">
<h3 className="font-bold text-base flex items-center gap-2">
<span className="material-symbols-outlined text-primary">bar_chart</span>
                            Nakit Akışı: Gelir vs. Gider
                        </h3>
<div className="flex gap-4">
<div className="flex items-center gap-1.5">
<span className="size-2 rounded-full bg-primary"></span>
<span className="text-[10px] font-bold text-[#617289] uppercase">Gelir</span>
</div>
<div className="flex items-center gap-1.5">
<span className="size-2 rounded-full bg-red-400"></span>
<span className="text-[10px] font-bold text-[#617289] uppercase">Gider</span>
</div>
</div>
</div>
<div className="p-8">
<div className="bar-chart-container relative">
<div className="absolute -left-2 inset-y-0 flex flex-col justify-between text-[10px] font-bold text-[#617289] pb-6">
<span>₺1M</span>
<span>₺750k</span>
<span>₺500k</span>
<span>₺250k</span>
<span>0</span>
</div>
<div className="ml-12 flex-1 flex items-end justify-between h-full border-b border-gray-100 dark:border-gray-800 pb-2">
<div className="flex flex-col items-center gap-2 w-16">
<div className="bar-group">
<div className="w-4 bg-primary rounded-t-sm" style={{ "height": "75%" }}></div>
<div className="w-4 bg-red-400 rounded-t-sm" style={{ "height": "55%" }}></div>
</div>
<span className="text-[10px] font-bold text-[#617289]">Tem</span>
</div>
<div className="flex flex-col items-center gap-2 w-16">
<div className="bar-group">
<div className="w-4 bg-primary rounded-t-sm" style={{ "height": "85%" }}></div>
<div className="w-4 bg-red-400 rounded-t-sm" style={{ "height": "60%" }}></div>
</div>
<span className="text-[10px] font-bold text-[#617289]">Ağu</span>
</div>
<div className="flex flex-col items-center gap-2 w-16">
<div className="bar-group">
<div className="w-4 bg-primary rounded-t-sm" style={{ "height": "65%" }}></div>
<div className="w-4 bg-red-400 rounded-t-sm" style={{ "height": "48%" }}></div>
</div>
<span className="text-[10px] font-bold text-[#617289]">Eyl</span>
</div>
<div className="flex flex-col items-center gap-2 w-16">
<div className="bar-group">
<div className="w-4 bg-primary rounded-t-sm" style={{ "height": "95%" }}></div>
<div className="w-4 bg-red-400 rounded-t-sm" style={{ "height": "70%" }}></div>
</div>
<span className="text-[10px] font-bold text-[#617289]">Eki</span>
</div>
<div className="flex flex-col items-center gap-2 w-16">
<div className="bar-group">
<div className="w-4 bg-primary rounded-t-sm" style={{ "height": "80%" }}></div>
<div className="w-4 bg-red-400 rounded-t-sm" style={{ "height": "58%" }}></div>
</div>
<span className="text-[10px] font-bold text-[#617289]">Kas</span>
</div>
</div>
</div>
<div className="mt-8 grid grid-cols-4 gap-4 text-center border-t border-gray-100 dark:border-gray-800 pt-6">
<div>
<p className="text-[10px] text-[#617289] font-bold uppercase">Maaşlar</p>
<p className="text-sm font-bold">₺420.000</p>
</div>
<div>
<p className="text-[10px] text-[#617289] font-bold uppercase">Ofis &amp; Gider</p>
<p className="text-sm font-bold">₺65.500</p>
</div>
<div>
<p className="text-[10px] text-[#617289] font-bold uppercase">Yazılım/SaaS</p>
<p className="text-sm font-bold">₺28.400</p>
</div>
<div>
<p className="text-[10px] text-[#617289] font-bold uppercase">Tahakkuk Vergi</p>
<p className="text-sm font-bold text-red-500">₺112.000</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-4 flex flex-col gap-6">
<div className="bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm overflow-hidden flex flex-col h-1/2">
<div className="px-5 py-4 border-b border-[#f0f2f4] dark:border-gray-800">
<h3 className="font-bold text-sm flex items-center gap-2">
<span className="material-symbols-outlined text-orange-500 text-lg">pending_actions</span>
                            Tahsilat Bekleyen En Yüksek 5 Fatura
                        </h3>
</div>
<div className="p-4 space-y-3 overflow-y-auto">
<div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
<div>
<p className="text-xs font-bold">TechVibe Solutions</p>
<p className="text-[10px] text-[#617289]">Fatura: #TR-9821</p>
</div>
<p className="text-sm font-bold text-primary">₺85.000</p>
</div>
<div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
<div>
<p className="text-xs font-bold">Global Logistics Inc.</p>
<p className="text-[10px] text-[#617289]">Fatura: #TR-9755</p>
</div>
<p className="text-sm font-bold text-primary">₺62.400</p>
</div>
<div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
<div>
<p className="text-xs font-bold">Aydınlı Gıda A.Ş.</p>
<p className="text-[10px] text-[#617289]">Fatura: #TR-9642</p>
</div>
<p className="text-sm font-bold text-primary">₺48.000</p>
</div>
</div>
</div>
<div className="bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm overflow-hidden flex flex-col h-1/2">
<div className="px-5 py-4 border-b border-[#f0f2f4] dark:border-gray-800">
<h3 className="font-bold text-sm flex items-center gap-2 text-red-600">
<span className="material-symbols-outlined text-lg">schedule</span>
                            Yaklaşan Büyük Ödemeler
                        </h3>
</div>
<div className="p-4 space-y-3">
<div className="flex items-center gap-3 p-3 border-l-4 border-l-red-500 bg-red-50 dark:bg-red-900/10 rounded-r-lg">
<div className="flex-1">
<p className="text-xs font-bold text-red-700 dark:text-red-400">KDV Ödemesi (Ekim)</p>
<p className="text-[10px] text-red-600/70">Son Gün: 26 Ekim</p>
</div>
<p className="text-sm font-bold text-red-700 dark:text-red-400">₺154.200</p>
</div>
<div className="flex items-center gap-3 p-3 border-l-4 border-l-orange-500 bg-orange-50 dark:bg-orange-900/10 rounded-r-lg">
<div className="flex-1">
<p className="text-xs font-bold text-orange-700 dark:text-orange-400">SGK İşveren Payı</p>
<p className="text-[10px] text-orange-600/70">Son Gün: 31 Ekim</p>
</div>
<p className="text-sm font-bold text-orange-700 dark:text-orange-400">₺98.400</p>
</div>
</div>
</div>
</div>
</div>
<div className="bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm overflow-hidden flex flex-col">
<div className="px-6 py-5 border-b border-[#f0f2f4] dark:border-gray-800 flex justify-between items-center">
<h3 className="font-bold text-base flex items-center gap-2">
<span className="material-symbols-outlined text-primary">analytics</span>
                    Departman Bazlı Karlılık Analizi
                </h3>
<div className="flex gap-2">
<button className="px-3 py-1 text-xs font-bold border border-gray-200 dark:border-gray-700 rounded-lg">Aylık</button>
<button className="px-3 py-1 text-xs font-bold bg-primary text-white rounded-lg">Yıllık</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50/50 dark:bg-gray-800/50">
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Departman</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider text-right">Üretilen Ciro</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider text-right">Personel Maliyeti</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider text-right">Operasyonel Gider</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider text-right">Net Karlılık</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Verimlilik</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 dark:divide-gray-800">
<tr>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<span className="size-2 rounded-full bg-blue-500"></span>
<span className="text-sm font-bold">SEO Departmanı</span>
</div>
</td>
<td className="px-6 py-4 text-right text-sm font-bold">₺1.240.000</td>
<td className="px-6 py-4 text-right text-sm">₺450.000</td>
<td className="px-6 py-4 text-right text-sm">₺45.000</td>
<td className="px-6 py-4 text-right text-sm font-bold text-green-600">₺745.000</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="flex-1 bg-gray-100 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
<div className="bg-green-500 h-full w-[60%]"></div>
</div>
<span className="text-[11px] font-bold">%60</span>
</div>
</td>
</tr>
<tr>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<span className="size-2 rounded-full bg-purple-500"></span>
<span className="text-sm font-bold">SEM &amp; Reklam</span>
</div>
</td>
<td className="px-6 py-4 text-right text-sm font-bold">₺1.850.000</td>
<td className="px-6 py-4 text-right text-sm">₺320.000</td>
<td className="px-6 py-4 text-right text-sm">₺120.000</td>
<td className="px-6 py-4 text-right text-sm font-bold text-green-600">₺1.410.000</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="flex-1 bg-gray-100 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[76%]"></div>
</div>
<span className="text-[11px] font-bold">%76</span>
</div>
</td>
</tr>
<tr>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<span className="size-2 rounded-full bg-pink-500"></span>
<span className="text-sm font-bold">Sosyal Medya</span>
</div>
</td>
<td className="px-6 py-4 text-right text-sm font-bold">₺680.000</td>
<td className="px-6 py-4 text-right text-sm">₺380.000</td>
<td className="px-6 py-4 text-right text-sm">₺30.000</td>
<td className="px-6 py-4 text-right text-sm font-bold text-orange-600">₺270.000</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="flex-1 bg-gray-100 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
<div className="bg-orange-500 h-full w-[40%]"></div>
</div>
<span className="text-[11px] font-bold">%40</span>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

    </div>
  );
}
