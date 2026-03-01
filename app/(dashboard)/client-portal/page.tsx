
"use client";

import React from "react";

export default function Page() {
  return (
    <div className="flex-1 flex flex-col">
      <div className="max-w-6xl mx-auto p-8 space-y-8 pb-20">

<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white dark:bg-background-dark border border-[#dbe0e6] rounded-xl p-6 shadow-sm">
<p className="text-[#617289] text-sm font-medium mb-1">Toplam Organik Trafik</p>
<div className="flex items-end gap-2">
<p className="text-[#111418] dark:text-white text-2xl font-black">425.800</p>
<span className="text-green-600 text-[10px] font-bold mb-1">+12.4%</span>
</div>
<p className="text-[#617289] text-xs mt-1">Son 30 gün</p>
</div>
<div className="bg-white dark:bg-background-dark border border-[#dbe0e6] rounded-xl p-6 shadow-sm">
<p className="text-[#617289] text-sm font-medium mb-1">Ortalama Sıralama</p>
<div className="flex items-end gap-2">
<p className="text-[#111418] dark:text-white text-2xl font-black">14.2</p>
<span className="text-green-600 text-[10px] font-bold mb-1">-1.5</span>
</div>
<p className="text-[#617289] text-xs mt-1">Geçen aya göre artış</p>
</div>
<div className="bg-white dark:bg-background-dark border border-[#dbe0e6] rounded-xl p-6 shadow-sm">
<p className="text-[#617289] text-sm font-medium mb-1">Teknik Sağlık Skoru</p>
<div className="flex items-end gap-2">
<p className="text-[#111418] dark:text-white text-2xl font-black">92/100</p>
<span className="text-blue-600 text-[10px] font-bold mb-1">Mükemmel</span>
</div>
<p className="text-[#617289] text-xs mt-1">Denetim: 2 saat önce</p>
</div>
<div className="bg-white dark:bg-background-dark border border-[#dbe0e6] rounded-xl p-6 shadow-sm">
<p className="text-[#617289] text-sm font-medium mb-1">Toplam Anahtar Kelime</p>
<div className="flex items-end gap-2">
<p className="text-[#111418] dark:text-white text-2xl font-black">1.240</p>
<span className="text-green-600 text-[10px] font-bold mb-1">+45</span>
</div>
<p className="text-[#617289] text-xs mt-1">İlk 10'daki kelimeler</p>
</div>
</section>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="lg:col-span-2 space-y-8">
<div className="space-y-4">
<div className="flex items-center justify-between">
<h3 className="text-[#111418] dark:text-white text-xl font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-primary">checklist</span>
                                SEO Görev Listesi
                            </h3>
<button className="px-4 py-2 bg-primary hover:bg-primary/90 text-white text-xs font-bold rounded-lg transition-all flex items-center gap-2">
<span className="material-symbols-outlined text-sm">add</span>
                                Yeni Görev
                            </button>
</div>
<div className="bg-white dark:bg-background-dark border border-[#dbe0e6] rounded-xl overflow-hidden shadow-sm">
<table className="w-full text-left border-collapse">
<thead className="bg-gray-50 dark:bg-gray-800/50 border-b border-[#dbe0e6]">
<tr>
<th className="px-6 py-3 text-xs font-bold text-[#617289] uppercase tracking-wider">Görev / Müşteri</th>
<th className="px-6 py-3 text-xs font-bold text-[#617289] uppercase tracking-wider">Öncelik</th>
<th className="px-6 py-3 text-xs font-bold text-[#617289] uppercase tracking-wider">Son Tarih</th>
<th className="px-6 py-3 text-xs font-bold text-[#617289] uppercase tracking-wider">Durum</th>
<th className="px-6 py-3 text-xs font-bold text-[#617289] uppercase tracking-wider">İşlem</th>
</tr>
</thead>
<tbody className="divide-y divide-[#dbe0e6]">
<tr>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<input className="rounded text-primary focus:ring-primary border-gray-300" type="checkbox" />
<div>
<p className="text-sm font-bold text-[#111418] dark:text-white">Meta Tag Optimizasyonu</p>
<p className="text-[11px] text-[#617289]">TechNova E-Ticaret</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400">YÜKSEK</span>
</td>
<td className="px-6 py-4 text-xs font-medium">Bugün</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400">İŞLEMDE</span>
</td>
<td className="px-6 py-4">
<button className="text-primary text-[11px] font-bold hover:underline">Detay</button>
</td>
</tr>
<tr>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<input className="rounded text-primary focus:ring-primary border-gray-300" type="checkbox" />
<div>
<p className="text-sm font-bold text-[#111418] dark:text-white">Backlink Profil Analizi</p>
<p className="text-[11px] text-[#617289]">Luxe Otel Grubu</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400">ORTA</span>
</td>
<td className="px-6 py-4 text-xs font-medium">Yarın</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400">BEKLEMEDE</span>
</td>
<td className="px-6 py-4">
<button className="text-primary text-[11px] font-bold hover:underline">Detay</button>
</td>
</tr>
<tr>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<input className="rounded text-primary focus:ring-primary border-gray-300" type="checkbox" />
<div>
<p className="text-sm font-bold text-[#111418] dark:text-white">İçerik Stratejisi Planlama</p>
<p className="text-[11px] text-[#617289]">Global Lojistik A.Ş.</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400">DÜŞÜK</span>
</td>
<td className="px-6 py-4 text-xs font-medium">15 Haz</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400">BEKLEMEDE</span>
</td>
<td className="px-6 py-4">
<button className="text-primary text-[11px] font-bold hover:underline">Detay</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="space-y-4">
<h3 className="text-[#111418] dark:text-white text-xl font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-primary">monitoring</span>
                            Müşteri Performans Durumları
                        </h3>
<div className="bg-white dark:bg-background-dark border border-[#dbe0e6] rounded-xl overflow-hidden shadow-sm">
<table className="w-full text-left border-collapse">
<thead className="bg-gray-50 dark:bg-gray-800/50 border-b border-[#dbe0e6]">
<tr>
<th className="px-6 py-3 text-xs font-bold text-[#617289] uppercase tracking-wider">Müşteri</th>
<th className="px-6 py-3 text-xs font-bold text-[#617289] uppercase tracking-wider">Organik Trafik Trendi</th>
<th className="px-6 py-3 text-xs font-bold text-[#617289] uppercase tracking-wider">Anahtar Kelime Artışı</th>
<th className="px-6 py-3 text-xs font-bold text-[#617289] uppercase tracking-wider">Teknik Durum</th>
</tr>
</thead>
<tbody className="divide-y divide-[#dbe0e6]">
<tr>
<td className="px-6 py-4">
<p className="text-sm font-bold text-[#111418] dark:text-white">TechNova E-Ticaret</p>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2 text-green-600 font-bold text-xs">
<span className="material-symbols-outlined text-sm">trending_up</span>
                                                +18%
                                            </div>
</td>
<td className="px-6 py-4 text-xs font-bold text-green-600">
                                            +24 Kelime
                                        </td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-20 bg-gray-200 rounded-full h-1.5">
<div className="bg-green-500 h-1.5 rounded-full" style={{ "width": "95%" }}></div>
</div>
<span className="text-xs font-bold">95/100</span>
</div>
</td>
</tr>
<tr>
<td className="px-6 py-4">
<p className="text-sm font-bold text-[#111418] dark:text-white">Luxe Otel Grubu</p>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2 text-red-600 font-bold text-xs">
<span className="material-symbols-outlined text-sm">trending_down</span>
                                                -5%
                                            </div>
</td>
<td className="px-6 py-4 text-xs font-bold text-red-600">
                                            -12 Kelime
                                        </td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-20 bg-gray-200 rounded-full h-1.5">
<div className="bg-yellow-500 h-1.5 rounded-full" style={{ "width": "68%" }}></div>
</div>
<span className="text-xs font-bold">68/100</span>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<div className="space-y-6">
<div className="space-y-3">
<h3 className="text-[#111418] dark:text-white text-lg font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-primary">timer</span>
                            Aktif SEO Görevlerim
                        </h3>
<div className="bg-white dark:bg-background-dark border border-[#dbe0e6] rounded-xl p-4 space-y-3 shadow-sm">
<div className="p-3 rounded-lg border border-primary/20 bg-primary/5 dark:bg-primary/10">
<div className="flex items-start justify-between mb-2">
<div>
<p className="text-[10px] font-bold text-primary uppercase tracking-wide">TEKNOVA E-TİCARET</p>
<p className="text-sm font-bold text-[#111418] dark:text-white">Meta Tag Optimizasyonu</p>
</div>
<span className="text-lg font-black text-primary active-timer">00:42:15</span>
</div>
<div className="flex gap-2">
<button className="flex-1 flex items-center justify-center gap-1.5 py-1.5 bg-red-500 hover:bg-red-600 text-white text-[11px] font-bold rounded-lg transition-colors">
<span className="material-symbols-outlined text-[16px] font-bold">stop</span> DURDUR
                                    </button>
</div>
</div>
<div className="p-3 rounded-lg border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/30">
<div className="flex items-start justify-between mb-2">
<div>
<p className="text-[10px] font-bold text-[#617289] uppercase tracking-wide">LUXE OTEL GRUBU</p>
<p className="text-sm font-bold text-[#111418] dark:text-white">Backlink Profil Analizi</p>
</div>
<span className="text-lg font-black text-[#617289] active-timer">00:00:00</span>
</div>
<div className="flex gap-2">
<button className="flex-1 flex items-center justify-center gap-1.5 py-1.5 bg-primary hover:bg-primary/90 text-white text-[11px] font-bold rounded-lg transition-colors">
<span className="material-symbols-outlined text-[16px] font-bold">play_arrow</span> BAŞLAT
                                    </button>
</div>
</div>
</div>
</div>
<div className="space-y-3">
<h3 className="text-[#111418] dark:text-white text-lg font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-primary">assessment</span>
                            SEO Rapor Durumları
                        </h3>
<div className="bg-white dark:bg-background-dark border border-[#dbe0e6] rounded-xl p-4 space-y-3 shadow-sm">
<div className="flex items-center justify-between p-2 rounded-lg bg-red-50 dark:bg-red-900/10 border border-red-100">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-red-600">event_busy</span>
<div>
<p className="text-sm font-bold text-[#111418] dark:text-white">Luxe Otel Grubu</p>
<p className="text-[11px] text-red-600 font-semibold">1 Gün Gecikti</p>
</div>
</div>
<button className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-[10px] font-bold rounded-lg transition-colors">HAZIRLA</button>
</div>
<div className="flex items-center justify-between p-2 rounded-lg bg-blue-50 dark:bg-blue-900/10 border border-blue-100">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-blue-600">schedule</span>
<div>
<p className="text-sm font-bold text-[#111418] dark:text-white">Global Lojistik</p>
<p className="text-[11px] text-blue-600 font-semibold">3 Gün Kaldı</p>
</div>
</div>
</div>
</div>
</div>
<div className="space-y-3">
<h3 className="text-[#111418] dark:text-white text-lg font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-red-500">priority_high</span>
                            Kritik SEO Uyarıları
                        </h3>
<div className="space-y-3">
<div className="bg-red-50 dark:bg-red-900/10 border border-red-200 rounded-xl p-4">
<div className="flex gap-3">
<span className="material-symbols-outlined text-red-600 text-xl">error</span>
<div>
<p className="text-xs font-bold text-red-800 dark:text-red-400">404 Hatası Artışı</p>
<p className="text-[11px] text-red-700 dark:text-red-300">TechNova sitesinde 404 hataları %30 arttı.</p>
</div>
</div>
</div>
<div className="bg-orange-50 dark:bg-orange-900/10 border border-orange-200 rounded-xl p-4">
<div className="flex gap-3">
<span className="material-symbols-outlined text-orange-600 text-xl">warning</span>
<div>
<p className="text-xs font-bold text-orange-800 dark:text-orange-400">Sıralama Kaybı</p>
<p className="text-[11px] text-orange-700 dark:text-orange-300">Luxe Otel Grubu 'butik otel' kelimesinde 5 sıra geriledi.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="pt-4">
<details className="group bg-white dark:bg-background-dark border border-[#dbe0e6] rounded-xl shadow-sm overflow-hidden" open>
<summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors border-b border-[#dbe0e6]">
<h3 className="text-[#111418] dark:text-white text-lg font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-green-500">check_circle</span>
                            Tamamlanan Görevler (Son 5 İş)
                        </h3>
<span className="material-symbols-outlined transition-transform group-open:rotate-180 text-[#617289]">expand_more</span>
</summary>
<div className="divide-y divide-[#dbe0e6]">
<div className="px-6 py-4 flex items-center justify-between bg-gray-50/30 dark:bg-gray-800/10">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-green-500 text-xl">task_alt</span>
<div>
<p className="text-sm font-bold text-[#111418] dark:text-white line-through opacity-60">Anahtar Kelime Araştırması Tamamlandı</p>
<p className="text-[11px] text-[#617289]">Global Lojistik A.Ş. • 12 Haz 2024</p>
</div>
</div>
<span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded uppercase">TAMAMLANDI</span>
</div>
<div className="px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-green-500 text-xl">task_alt</span>
<div>
<p className="text-sm font-bold text-[#111418] dark:text-white line-through opacity-60">Sitemap.xml Güncellemesi</p>
<p className="text-[11px] text-[#617289]">TechNova E-Ticaret • 11 Haz 2024</p>
</div>
</div>
<span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded uppercase">TAMAMLANDI</span>
</div>
<div className="px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-green-500 text-xl">task_alt</span>
<div>
<p className="text-sm font-bold text-[#111418] dark:text-white line-through opacity-60">Görsel Alt Text Optimizasyonu</p>
<p className="text-[11px] text-[#617289]">Luxe Otel Grubu • 10 Haz 2024</p>
</div>
</div>
<span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded uppercase">TAMAMLANDI</span>
</div>
<div className="px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-green-500 text-xl">task_alt</span>
<div>
<p className="text-sm font-bold text-[#111418] dark:text-white line-through opacity-60">Robots.txt Düzenlemesi</p>
<p className="text-[11px] text-[#617289]">Global Lojistik A.Ş. • 09 Haz 2024</p>
</div>
</div>
<span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded uppercase">TAMAMLANDI</span>
</div>
<div className="px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-green-500 text-xl">task_alt</span>
<div>
<p className="text-sm font-bold text-[#111418] dark:text-white line-through opacity-60">404 Yönlendirme Kontrolü</p>
<p className="text-[11px] text-[#617289]">TechNova E-Ticaret • 08 Haz 2024</p>
</div>
</div>
<span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded uppercase">TAMAMLANDI</span>
</div>
</div>
</details>
</div>
</div>

    </div>
  );
}
