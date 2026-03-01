
"use client";

import React from "react";

export default function Page() {
  return (
    <div className="flex-1 flex flex-col flex-1 flex flex-col overflow-y-auto custom-scrollbar">
      

<div className="p-8 space-y-6">
<section className="bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 p-6 rounded-xl shadow-sm">
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary text-2xl mt-1">description</span>
<div className="flex-1">
<h3 className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">Yönetici Özeti</h3>
<p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                            2023 yılı finansal performansı, operasyonel verimlilik artışı sayesinde beklentilerin %12 üzerinde seyretmektedir. Özellikle SEO ve SEM projelerinde elde edilen yüksek karlılık marjı, personel giderlerindeki artışı kompanse etmiştir. Cari dönemde net kar marjı %34 seviyesine ulaşarak yıllık hedefin üzerine çıkmıştır. Önümüzdeki çeyrekte Sosyal Medya departmanı idari giderlerinin optimize edilmesi planlanmaktadır.
                        </p>
</div>
</div>
</section>
<section className="bg-white dark:bg-[#1a2432] p-6 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm">
<div className="flex justify-between items-center mb-8">
<h3 className="font-bold text-base flex items-center gap-2">
<span className="material-symbols-outlined text-primary">timeline</span>
                        12 Aylık Gelir, Gider ve Net Kar Trendi
                    </h3>
<div className="flex gap-4">
<div className="flex items-center gap-2">
<span className="size-3 rounded-full bg-success"></span>
<span className="text-xs font-medium">Gelir</span>
</div>
<div className="flex items-center gap-2">
<span className="size-3 rounded-full bg-danger"></span>
<span className="text-xs font-medium">Gider</span>
</div>
<div className="flex items-center gap-2">
<span className="size-3 rounded-full bg-primary"></span>
<span className="text-xs font-medium">Net Kar</span>
</div>
</div>
</div>
<div className="h-[300px] w-full relative chart-grid border-l border-b border-gray-200 dark:border-gray-700 flex items-end px-4 gap-2">
<div className="flex-1 flex flex-col justify-end gap-1 group relative">
<div className="w-full bg-success/30 h-32 rounded-t-sm" title="Gelir"></div>
<div className="w-full bg-danger/30 h-24 rounded-t-sm" title="Gider"></div>
<div className="w-full bg-primary h-8 rounded-t-sm" title="Net Kar"></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-[#617289]">Oca</span>
</div>
<div className="flex-1 flex flex-col justify-end gap-1 group relative">
<div className="w-full bg-success/30 h-36 rounded-t-sm"></div>
<div className="w-full bg-danger/30 h-28 rounded-t-sm"></div>
<div className="w-full bg-primary h-10 rounded-t-sm"></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-[#617289]">Şub</span>
</div>
<div className="flex-1 flex flex-col justify-end gap-1 group relative">
<div className="w-full bg-success/30 h-44 rounded-t-sm"></div>
<div className="w-full bg-danger/30 h-28 rounded-t-sm"></div>
<div className="w-full bg-primary h-16 rounded-t-sm"></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-[#617289]">Mar</span>
</div>
<div className="flex-1 flex flex-col justify-end gap-1 group relative">
<div className="w-full bg-success/30 h-40 rounded-t-sm"></div>
<div className="w-full bg-danger/30 h-32 rounded-t-sm"></div>
<div className="w-full bg-primary h-12 rounded-t-sm"></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-[#617289]">Nis</span>
</div>
<div className="flex-1 flex flex-col justify-end gap-1 group relative">
<div className="w-full bg-success/30 h-52 rounded-t-sm"></div>
<div className="w-full bg-danger/30 h-34 rounded-t-sm"></div>
<div className="w-full bg-primary h-24 rounded-t-sm"></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-[#617289]">May</span>
</div>
<div className="flex-1 flex flex-col justify-end gap-1 group relative">
<div className="w-full bg-success/30 h-48 rounded-t-sm"></div>
<div className="w-full bg-danger/30 h-30 rounded-t-sm"></div>
<div className="w-full bg-primary h-18 rounded-t-sm"></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-[#617289]">Haz</span>
</div>
<div className="flex-1 flex flex-col justify-end gap-1 group relative">
<div className="w-full bg-success/30 h-56 rounded-t-sm"></div>
<div className="w-full bg-danger/30 h-36 rounded-t-sm"></div>
<div className="w-full bg-primary h-28 rounded-t-sm"></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-[#617289]">Tem</span>
</div>
<div className="flex-1 flex flex-col justify-end gap-1 group relative">
<div className="w-full bg-success/30 h-60 rounded-t-sm"></div>
<div className="w-full bg-danger/30 h-38 rounded-t-sm"></div>
<div className="w-full bg-primary h-32 rounded-t-sm"></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-[#617289]">Ağu</span>
</div>
<div className="flex-1 flex flex-col justify-end gap-1 group relative">
<div className="w-full bg-success/30 h-64 rounded-t-sm"></div>
<div className="w-full bg-danger/30 h-40 rounded-t-sm"></div>
<div className="w-full bg-primary h-36 rounded-t-sm"></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-[#617289]">Eyl</span>
</div>
<div className="flex-1 flex flex-col justify-end gap-1 group relative">
<div className="w-full bg-success/30 h-68 rounded-t-sm"></div>
<div className="w-full bg-danger/30 h-42 rounded-t-sm"></div>
<div className="w-full bg-primary h-40 rounded-t-sm"></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-[#617289]">Eki</span>
</div>
<div className="flex-1 flex flex-col justify-end gap-1 group relative">
<div className="w-full bg-success/30 h-72 rounded-t-sm"></div>
<div className="w-full bg-danger/30 h-44 rounded-t-sm"></div>
<div className="w-full bg-primary h-44 rounded-t-sm"></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-[#617289]">Kas</span>
</div>
<div className="flex-1 flex flex-col justify-end gap-1 group relative">
<div className="w-full bg-success/30 h-80 rounded-t-sm"></div>
<div className="w-full bg-danger/30 h-48 rounded-t-sm"></div>
<div className="w-full bg-primary h-52 rounded-t-sm"></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-[#617289]">Ara</span>
</div>
</div>
<div className="mt-12 grid grid-cols-3 gap-8">
<div className="flex flex-col border-l-4 border-l-success pl-4">
<p className="text-[10px] font-bold text-[#617289] uppercase">Yıllık Toplam Gelir</p>
<p className="text-xl font-bold">₺14.850.000</p>
</div>
<div className="flex flex-col border-l-4 border-l-danger pl-4">
<p className="text-[10px] font-bold text-[#617289] uppercase">Yıllık Toplam Gider</p>
<p className="text-xl font-bold">₺9.800.000</p>
</div>
<div className="flex flex-col border-l-4 border-l-primary pl-4">
<p className="text-[10px] font-bold text-[#617289] uppercase">Yıllık Net Kar</p>
<p className="text-xl font-bold">₺5.050.000</p>
</div>
</div>
</section>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
<div className="lg:col-span-8 space-y-6">
<div className="bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 overflow-hidden shadow-sm">
<div className="px-6 py-4 border-b border-[#f0f2f4] dark:border-gray-800 flex justify-between items-center">
<h3 className="font-bold text-sm flex items-center gap-2">
<span className="material-symbols-outlined text-success">award_star</span>
                                En Karlı 10 Proje (Top 10)
                            </h3>
<span className="text-[10px] font-bold text-[#617289] bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">2023 VERİLERİ</span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead className="bg-gray-50/50 dark:bg-gray-800/50">
<tr>
<th className="px-6 py-3 text-[10px] font-bold text-[#617289] uppercase">Proje Adı</th>
<th className="px-6 py-3 text-[10px] font-bold text-[#617289] uppercase">Departman</th>
<th className="px-6 py-3 text-[10px] font-bold text-[#617289] uppercase text-right">Gelir</th>
<th className="px-6 py-3 text-[10px] font-bold text-[#617289] uppercase text-right">Maliyet</th>
<th className="px-6 py-3 text-[10px] font-bold text-[#617289] uppercase text-right">Kar %</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 dark:divide-gray-800">
<tr>
<td className="px-6 py-3 text-xs font-bold">Global Tech SEO Optimisation</td>
<td className="px-6 py-3 text-xs">SEO</td>
<td className="px-6 py-3 text-xs text-right">₺450.000</td>
<td className="px-6 py-3 text-xs text-right">₺85.000</td>
<td className="px-6 py-3 text-xs text-right font-bold text-success">%81.1</td>
</tr>
<tr>
<td className="px-6 py-3 text-xs font-bold">Luna Agency Creative Ads</td>
<td className="px-6 py-3 text-xs">SEM</td>
<td className="px-6 py-3 text-xs text-right">₺320.000</td>
<td className="px-6 py-3 text-xs text-right">₺62.000</td>
<td className="px-6 py-3 text-xs text-right font-bold text-success">%80.6</td>
</tr>
<tr>
<td className="px-6 py-3 text-xs font-bold">E-Commerce Retargeting Campaign</td>
<td className="px-6 py-3 text-xs">Sosyal Medya</td>
<td className="px-6 py-3 text-xs text-right">₺280.000</td>
<td className="px-6 py-3 text-xs text-right">₺65.000</td>
<td className="px-6 py-3 text-xs text-right font-bold text-success">%76.8</td>
</tr>
<tr>
<td className="px-6 py-3 text-xs font-bold">Bank Of World Social Strategy</td>
<td className="px-6 py-3 text-xs">Sosyal Medya</td>
<td className="px-6 py-3 text-xs text-right">₺1.200.000</td>
<td className="px-6 py-3 text-xs text-right">₺310.000</td>
<td className="px-6 py-3 text-xs text-right font-bold text-success">%74.2</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 overflow-hidden shadow-sm">
<div className="px-6 py-4 border-b border-[#f0f2f4] dark:border-gray-800 flex justify-between items-center bg-red-50/30 dark:bg-red-900/10">
<h3 className="font-bold text-sm flex items-center gap-2 text-danger">
<span className="material-symbols-outlined">warning</span>
                                Verimsiz / Zarar Eden Projeler (Aşırı Efor)
                            </h3>
<span className="text-[10px] font-bold text-danger">KRİTİK ANALİZ</span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead className="bg-gray-50/50 dark:bg-gray-800/50">
<tr>
<th className="px-6 py-3 text-[10px] font-bold text-[#617289] uppercase">Proje Adı</th>
<th className="px-6 py-3 text-[10px] font-bold text-[#617289] uppercase">Sebep</th>
<th className="px-6 py-3 text-[10px] font-bold text-[#617289] uppercase text-right">Efor/Saat</th>
<th className="px-6 py-3 text-[10px] font-bold text-[#617289] uppercase text-right">Maliyet</th>
<th className="px-6 py-3 text-[10px] font-bold text-[#617289] uppercase text-right">Zarar %</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 dark:divide-gray-800">
<tr className="hover:bg-red-50/20 dark:hover:bg-red-900/5">
<td className="px-6 py-3 text-xs font-bold">Mobile App UI Redesign</td>
<td className="px-6 py-3 text-xs">Scope Creep</td>
<td className="px-6 py-3 text-xs text-right">450s</td>
<td className="px-6 py-3 text-xs text-right">₺120.000</td>
<td className="px-6 py-3 text-xs text-right font-bold text-danger">-%18.5</td>
</tr>
<tr className="hover:bg-red-50/20 dark:hover:bg-red-900/5">
<td className="px-6 py-3 text-xs font-bold">Small Business SEO Pack</td>
<td className="px-6 py-3 text-xs">Yetersiz Bütçe</td>
<td className="px-6 py-3 text-xs text-right">120s</td>
<td className="px-6 py-3 text-xs text-right">₺35.000</td>
<td className="px-6 py-3 text-xs text-right font-bold text-danger">-%12.2</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<div className="lg:col-span-4 space-y-6">
<div className="bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm p-6">
<h3 className="font-bold text-sm mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-xl">pie_chart</span>
                            Departman Bazlı Gider Analizi
                        </h3>
<div className="flex flex-col items-center">
<div className="relative size-48 mb-8">
<svg className="size-full -rotate-90" viewBox="0 0 36 36">
<circle className="stroke-blue-500 fill-none" cx="18" cy="18" r="15.915" strokeDasharray="40 100" strokeDashoffset="0" strokeWidth="5"></circle>
<circle className="stroke-emerald-500 fill-none" cx="18" cy="18" r="15.915" strokeDasharray="25 100" strokeDashoffset="-40" strokeWidth="5"></circle>
<circle className="stroke-purple-500 fill-none" cx="18" cy="18" r="15.915" strokeDasharray="20 100" strokeDashoffset="-65" strokeWidth="5"></circle>
<circle className="stroke-orange-500 fill-none" cx="18" cy="18" r="15.915" strokeDasharray="15 100" strokeDashoffset="-85" strokeWidth="5"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-xs text-[#617289] font-bold uppercase">Toplam Bütçe</span>
<span className="text-xl font-extrabold">₺9.8M</span>
</div>
</div>
<div className="w-full space-y-3">
<div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
<div className="flex items-center gap-3">
<span className="size-3 rounded-full bg-blue-500"></span>
<span className="text-xs font-semibold">SEO Departmanı</span>
</div>
<span className="text-xs font-bold">%40</span>
</div>
<div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
<div className="flex items-center gap-3">
<span className="size-3 rounded-full bg-emerald-500"></span>
<span className="text-xs font-semibold">SEM / Performance</span>
</div>
<span className="text-xs font-bold">%25</span>
</div>
<div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
<div className="flex items-center gap-3">
<span className="size-3 rounded-full bg-purple-500"></span>
<span className="text-xs font-semibold">Sosyal Medya</span>
</div>
<span className="text-xs font-bold">%20</span>
</div>
<div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
<div className="flex items-center gap-3">
<span className="size-3 rounded-full bg-orange-500"></span>
<span className="text-xs font-semibold">İdari &amp; Ofis</span>
</div>
<span className="text-xs font-bold">%15</span>
</div>
</div>
</div>
</div>
<div className="bg-primary/5 dark:bg-primary/10 rounded-xl border border-primary/20 p-5">
<h4 className="text-xs font-bold text-primary uppercase mb-3">Karlılık Verimlilik Skoru</h4>
<div className="flex items-center justify-between mb-4">
<span className="text-2xl font-bold">8.4<span className="text-sm font-normal text-gray-500">/10</span></span>
<span className="px-2 py-0.5 bg-success text-white text-[10px] font-bold rounded">MÜKEMMEL</span>
</div>
<div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[84%]"></div>
</div>
<p className="text-[10px] text-[#617289] mt-3 italic">* Bu skor proje kar marjı ve efor dengesi baz alınarak hesaplanmıştır.</p>
</div>
</div>
</div>
</div>

    </div>
  );
}
