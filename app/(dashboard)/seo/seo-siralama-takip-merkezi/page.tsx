
"use client";

import React from "react";

export default function Page() {
  return (
    <div className="flex-1 flex flex-col">
      

<div className="px-8 py-6 space-y-6">
<nav className="flex items-center gap-2 text-sm">
<a className="text-gray-500 hover:text-primary transition-colors" href="#">SEO Merkezi</a>
<span className="material-symbols-outlined text-gray-400 text-base">chevron_right</span>
<span className="text-gray-900 dark:text-white font-medium">Sıralama Takibi</span>
</nav>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
<p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Ortalama Sıra</p>
<div className="flex items-end gap-2">
<span className="text-2xl font-bold text-gray-900 dark:text-white">14.2</span>
<span className="text-green-600 dark:text-green-400 text-sm font-bold pb-1 flex items-center">
<span className="material-symbols-outlined text-sm">arrow_upward</span> 1.2%
                        </span>
</div>
</div>
<div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
<p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">İlk 3 Anahtar Kelime</p>
<div className="flex items-end gap-2">
<span className="text-2xl font-bold text-gray-900 dark:text-white">45</span>
<span className="text-green-600 dark:text-green-400 text-sm font-bold pb-1 flex items-center">
<span className="material-symbols-outlined text-sm">arrow_upward</span> 5%
                        </span>
</div>
</div>
<div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
<p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Yükselen</p>
<div className="flex items-end gap-2">
<span className="text-2xl font-bold text-gray-900 dark:text-white">12</span>
<span className="text-green-600 dark:text-green-400 text-sm font-bold pb-1 flex items-center">
<span className="material-symbols-outlined text-sm">arrow_upward</span> 3%
                        </span>
</div>
</div>
<div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
<p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Düşen</p>
<div className="flex items-end gap-2">
<span className="text-2xl font-bold text-gray-900 dark:text-white">5</span>
<span className="text-red-600 dark:text-red-400 text-sm font-bold pb-1 flex items-center">
<span className="material-symbols-outlined text-sm">arrow_downward</span> 2%
                        </span>
</div>
</div>
</div>
<div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
<div className="p-4 border-b border-gray-200 dark:border-gray-800 flex flex-wrap items-center justify-between gap-4">
<div className="flex items-center gap-3">
<button className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
<span className="material-symbols-outlined">tune</span>
</button>
<div className="relative">
<button className="px-4 py-2 flex items-center gap-2 text-sm font-medium border border-gray-200 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300">
<span className="material-symbols-outlined text-sm">calendar_today</span>
                                Son 30 Gün
                                <span className="material-symbols-outlined text-sm">expand_more</span>
</button>
</div>
<div className="h-8 w-px bg-gray-200 dark:bg-gray-700"></div>
<div className="flex items-center gap-2">
<span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Grup:</span>
<select className="text-sm bg-transparent border-none focus:ring-0 p-0 pr-8 font-medium text-gray-700 dark:text-gray-300 cursor-pointer">
<option>Tüm Kelimeler</option>
<option>Marka Terimleri</option>
<option>Ürün Sayfaları</option>
<option>Blog Yazıları</option>
</select>
</div>
</div>
<button className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-blue-700">
<span className="material-symbols-outlined text-sm">refresh</span>
                        Verileri Yenile
                    </button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50 dark:bg-gray-800/50">
<th className="px-6 py-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
<input className="rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" />
</th>
<th className="px-6 py-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Anahtar Kelime &amp; Hedef URL</th>
<th className="px-6 py-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-center">Mevcut Sıra</th>
<th className="px-6 py-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-center">Günlük Değişim</th>
<th className="px-6 py-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-center">Aranma Hacmi</th>
<th className="px-6 py-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Eğilim</th>
<th className="px-6 py-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-right">İşlemler</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 dark:divide-gray-800">
<tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors group">
<td className="px-6 py-4">
<input className="rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" />
</td>
<td className="px-6 py-4">
<div className="flex flex-col">
<span className="text-sm font-bold text-gray-900 dark:text-white">kurumsal erp yazılımı</span>
<div className="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
<span className="material-symbols-outlined text-xs">link</span>
<span className="truncate max-w-[200px]">agenciflow.com/solutions/enterprise</span>
</div>
</div>
</td>
<td className="px-6 py-4 text-center">
<span className="text-lg font-bold text-gray-900 dark:text-white">3</span>
</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
<span className="material-symbols-outlined text-xs">arrow_upward</span> 2
                                </span>
</td>
<td className="px-6 py-4 text-center">
<span className="text-sm text-gray-600 dark:text-gray-400 font-medium">12.5k</span>
</td>
<td className="px-6 py-4">
<svg className="h-8 w-32" viewBox="0 0 100 25">
<path className="sparkline-bg" d="M0 25 L0 15 L10 18 L20 12 L30 14 L40 8 L50 10 L60 5 L70 9 L80 4 L90 6 L100 2 L100 25 Z"></path>
<path className="sparkline-path" d="M0 15 L10 18 L20 12 L30 14 L40 8 L50 10 L60 5 L70 9 L80 4 L90 6 L100 2"></path>
</svg>
</td>
<td className="px-6 py-4 text-right">
<button className="text-gray-400 hover:text-gray-900 dark:hover:text-white opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
<tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors group">
<td className="px-6 py-4">
<input className="rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" />
</td>
<td className="px-6 py-4">
<div className="flex flex-col">
<span className="text-sm font-bold text-gray-900 dark:text-white">ajans yönetim platformu</span>
<div className="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
<span className="material-symbols-outlined text-xs">link</span>
<span className="truncate max-w-[200px]">agenciflow.com/homepage</span>
</div>
</div>
</td>
<td className="px-6 py-4 text-center">
<span className="text-lg font-bold text-gray-900 dark:text-white">12</span>
</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-bold bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">
<span className="material-symbols-outlined text-xs">arrow_downward</span> 4
                                </span>
</td>
<td className="px-6 py-4 text-center">
<span className="text-sm text-gray-600 dark:text-gray-400 font-medium">8.4k</span>
</td>
<td className="px-6 py-4">
<svg className="h-8 w-32" viewBox="0 0 100 25">
<path className="sparkline-bg" d="M0 25 L0 5 L15 8 L30 6 L45 12 L60 18 L75 14 L100 20 L100 25 Z"></path>
<path className="sparkline-path" d="M0 5 L15 8 L30 6 L45 12 L60 18 L75 14 L100 20" style={{ "stroke": "#ef4444" }}></path>
</svg>
</td>
<td className="px-6 py-4 text-right">
<button className="text-gray-400 hover:text-gray-900 dark:hover:text-white opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
<tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors group">
<td className="px-6 py-4">
<input className="rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" />
</td>
<td className="px-6 py-4">
<div className="flex flex-col">
<span className="text-sm font-bold text-gray-900 dark:text-white">en iyi seo raporlama aracı 2024</span>
<div className="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
<span className="material-symbols-outlined text-xs">link</span>
<span className="truncate max-w-[200px]">agenciflow.com/blog/seo-reporting</span>
</div>
</div>
</td>
<td className="px-6 py-4 text-center">
<span className="text-lg font-bold text-gray-900 dark:text-white">7</span>
</td>
<td className="px-6 py-4 text-center">
<span className="text-sm text-gray-400 font-bold px-2 py-1">—</span>
</td>
<td className="px-6 py-4 text-center">
<span className="text-sm text-gray-600 dark:text-gray-400 font-medium">2.1k</span>
</td>
<td className="px-6 py-4">
<svg className="h-8 w-32" viewBox="0 0 100 25">
<path className="sparkline-bg" d="M0 25 L0 10 L25 10 L50 8 L75 12 L100 10 L100 25 Z"></path>
<path className="sparkline-path" d="M0 10 L25 10 L50 8 L75 12 L100 10"></path>
</svg>
</td>
<td className="px-6 py-4 text-right">
<button className="text-gray-400 hover:text-gray-900 dark:hover:text-white opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
<tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors group">
<td className="px-6 py-4">
<input className="rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" />
</td>
<td className="px-6 py-4">
<div className="flex flex-col">
<span className="text-sm font-bold text-gray-900 dark:text-white">otomatik ajans faturalandırma</span>
<div className="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
<span className="material-symbols-outlined text-xs">link</span>
<span className="truncate max-w-[200px]">agenciflow.com/features/billing</span>
</div>
</div>
</td>
<td className="px-6 py-4 text-center">
<span className="text-lg font-bold text-gray-900 dark:text-white">1</span>
</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
<span className="material-symbols-outlined text-xs">arrow_upward</span> 1
                                </span>
</td>
<td className="px-6 py-4 text-center">
<span className="text-sm text-gray-600 dark:text-gray-400 font-medium">4.8k</span>
</td>
<td className="px-6 py-4">
<svg className="h-8 w-32" viewBox="0 0 100 25">
<path className="sparkline-bg" d="M0 25 L0 8 L20 10 L40 5 L60 7 L80 2 L100 2 L100 25 Z"></path>
<path className="sparkline-path" d="M0 8 L20 10 L40 5 L60 7 L80 2 L100 2"></path>
</svg>
</td>
<td className="px-6 py-4 text-right">
<button className="text-gray-400 hover:text-gray-900 dark:hover:text-white opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-4 bg-gray-50 dark:bg-gray-800/50 flex items-center justify-between border-t border-gray-200 dark:border-gray-800">
<p className="text-sm text-gray-500 dark:text-gray-400"><span className="font-bold">148</span> sonuçtan <span className="font-bold">1</span> ile <span className="font-bold">10</span> arası gösteriliyor</p>
<div className="flex items-center gap-2">
<button className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-900 text-gray-600 dark:text-gray-400 disabled:opacity-50" disabled>
<span className="material-symbols-outlined text-sm">chevron_left</span>
</button>
<button className="px-3 py-1 rounded-lg bg-primary text-white text-sm font-bold">1</button>
<button className="px-3 py-1 rounded-lg hover:bg-white dark:hover:bg-gray-900 text-sm font-medium text-gray-600 dark:text-gray-400">2</button>
<button className="px-3 py-1 rounded-lg hover:bg-white dark:hover:bg-gray-900 text-sm font-medium text-gray-600 dark:text-gray-400">3</button>
<span className="text-gray-400 px-1">...</span>
<button className="px-3 py-1 rounded-lg hover:bg-white dark:hover:bg-gray-900 text-sm font-medium text-gray-600 dark:text-gray-400">15</button>
<button className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-900 text-gray-600 dark:text-gray-400">
<span className="material-symbols-outlined text-sm">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
<footer className="mt-auto px-8 py-6 text-center text-gray-400 text-xs">
            © 2024 AgenciFlow ERP/CRM. Tüm SEO verileri Google Search Console API aracılığıyla senkronize edilmiştir.
        </footer>

    </div>
  );
}
