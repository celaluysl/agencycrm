
"use client";

import React from "react";

export default function Page() {
  return (
    <div className="flex-1 flex flex-col">
      

<div className="px-8 py-6 space-y-6">
<div className="flex flex-wrap gap-4">
<div className="flex-1 min-w-[300px] bg-white dark:bg-gray-900 p-4 rounded-xl border-2 border-primary/20 dark:border-primary/40 flex items-center gap-4">
<div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg">
<span className="material-symbols-outlined text-primary">key</span>
</div>
<div>
<p className="text-[10px] font-bold text-primary uppercase tracking-wider mb-0.5">Hedef Anahtar Kelime</p>
<h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">Hedef: <span className="text-primary">SEO Ajansı</span></h3>
</div>
</div>
<div className="flex-1 min-w-[300px] bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-800 flex items-center gap-4">
<div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
<span className="material-symbols-outlined text-gray-500">language</span>
</div>
<div>
<p className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-0.5">Hedeflenen URL</p>
<h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 truncate max-w-[250px]">https://ajansiniz.com/seo-hizmetleri</h3>
</div>
<button className="ml-auto p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
<span className="material-symbols-outlined text-sm text-gray-400">open_in_new</span>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
<p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Toplam Link Bütçesi</p>
<div className="flex items-end gap-2">
<span className="text-2xl font-bold text-gray-900 dark:text-white">45.000 TL</span>
</div>
</div>
<div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
<p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Harcanan</p>
<div className="flex items-end gap-2">
<span className="text-2xl font-bold text-primary">12.450 TL</span>
<span className="text-gray-400 text-sm font-medium pb-1">(%27.6)</span>
</div>
</div>
<div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
<p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Kalan Limit</p>
<div className="flex items-end gap-2">
<span className="text-2xl font-bold text-success">32.550 TL</span>
</div>
</div>
<div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
<p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-2">Bütçe Sağlık Durumu</p>
<div className="space-y-2">
<div className="w-full bg-gray-100 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
<div className="bg-success h-full" style={{ "width": "45%" }}></div>
</div>
<div className="flex justify-between text-[10px] font-bold uppercase tracking-wider">
<span className="text-success">Güvenli</span>
<span className="text-gray-400">Limit: %15</span>
</div>
</div>
</div>
</div>
<div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-800 flex flex-wrap items-center gap-6">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-gray-400">filter_alt</span>
<span className="text-sm font-bold text-gray-700 dark:text-gray-300">Filtrele:</span>
</div>
<div className="flex flex-col gap-1">
<label className="text-[10px] font-bold text-gray-400 uppercase">Kategori Uyumluluğu</label>
<select className="text-sm bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-lg px-3 py-1.5 focus:ring-primary">
<option>İlgili Kategoriler (SEO/Dijital)</option>
<option>Tüm Kategoriler</option>
</select>
</div>
<div className="flex flex-col gap-1">
<label className="text-[10px] font-bold text-gray-400 uppercase">DR Aralığı</label>
<select className="text-sm bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-lg px-3 py-1.5 focus:ring-primary">
<option>Tümü</option>
<option>30 - 50 DR</option>
<option>50 - 70 DR</option>
<option>70+ DR</option>
</select>
</div>
<div className="flex flex-col gap-1">
<label className="text-[10px] font-bold text-gray-400 uppercase">Trafik Alt Limiti</label>
<input className="text-sm bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-lg px-3 py-1.5 w-32 focus:ring-primary" placeholder="Örn: 5000" type="number" />
</div>
<div className="flex flex-col gap-1">
<label className="text-[10px] font-bold text-gray-400 uppercase">Max Fiyat (TL)</label>
<input className="text-sm bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-lg px-3 py-1.5 w-32 focus:ring-primary" placeholder="Örn: 2500" type="number" />
</div>
<div className="ml-auto">
<button className="bg-primary text-white text-sm font-bold px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Envanterde Ara
                    </button>
</div>
</div>
<div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
<div className="p-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
<h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
<span className="material-symbols-outlined text-primary">list_alt</span>
                        Yayıncı Envanteri (SEO Odaklı Yayıncılar)
                    </h3>
<span className="text-xs text-gray-500 italic">Son güncelleme: Bugün, 10:15</span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50 dark:bg-gray-800/50">
<th className="px-6 py-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-left">Yayıncı Adı</th>
<th className="px-6 py-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-center">DR</th>
<th className="px-6 py-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-center">Aylık Trafik</th>
<th className="px-6 py-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-center">Spam Score</th>
<th className="px-6 py-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-center">Fiyat (TL/USD)</th>
<th className="px-6 py-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-right">İşlem</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 dark:divide-gray-800">
<tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
<td className="px-6 py-4">
<div className="flex flex-col">
<span className="text-sm font-bold text-gray-900 dark:text-white">teknolojihaberleri.com</span>
<span className="text-[10px] text-gray-400 uppercase tracking-tight">Teknoloji / Haber</span>
</div>
</td>
<td className="px-6 py-4 text-center">
<span className="px-2 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 rounded font-bold text-sm">68</span>
</td>
<td className="px-6 py-4 text-center">
<span className="text-sm text-gray-600 dark:text-gray-400 font-medium">125,400</span>
</td>
<td className="px-6 py-4 text-center">
<span className="text-sm font-bold text-success">1%</span>
</td>
<td className="px-6 py-4 text-center">
<div className="flex flex-col">
<span className="text-sm font-bold text-gray-900 dark:text-white">1,250 TL</span>
<span className="text-[10px] text-gray-400 font-medium">~38.5 USD</span>
</div>
</td>
<td className="px-6 py-4 text-right">
<button className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-blue-700 transition-colors">
                                    Satın Al
                                </button>
</td>
</tr>
<tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
<td className="px-6 py-4">
<div className="flex flex-col">
<span className="text-sm font-bold text-gray-900 dark:text-white">kurumsalblog.com.tr</span>
<span className="text-[10px] text-gray-400 uppercase tracking-tight">İş Dünyası / SEO</span>
</div>
</td>
<td className="px-6 py-4 text-center">
<span className="px-2 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 rounded font-bold text-sm">74</span>
</td>
<td className="px-6 py-4 text-center">
<span className="text-sm text-gray-600 dark:text-gray-400 font-medium">210,500</span>
</td>
<td className="px-6 py-4 text-center">
<span className="text-sm font-bold text-success">0%</span>
</td>
<td className="px-6 py-4 text-center">
<div className="flex flex-col">
<span className="text-sm font-bold text-gray-900 dark:text-white">3,200 TL</span>
<span className="text-[10px] text-gray-400 font-medium">~98.5 USD</span>
</div>
</td>
<td className="px-6 py-4 text-right">
<button className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-blue-700 transition-colors">
                                    Satın Al
                                </button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-4 bg-gray-50 dark:bg-gray-800/50 flex items-center justify-between border-t border-gray-200 dark:border-gray-800">
<p className="text-sm text-gray-500 dark:text-gray-400">Toplam <span className="font-bold">2,148</span> yayıncı listeleniyor</p>
<div className="flex items-center gap-2">
<button className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-900 text-gray-600 dark:text-gray-400 disabled:opacity-50" disabled>
<span className="material-symbols-outlined text-sm">chevron_left</span>
</button>
<button className="px-3 py-1 rounded-lg bg-primary text-white text-sm font-bold">1</button>
<button className="px-3 py-1 rounded-lg hover:bg-white dark:hover:bg-gray-900 text-sm font-medium text-gray-600 dark:text-gray-400">2</button>
<button className="px-3 py-1 rounded-lg hover:bg-white dark:hover:bg-gray-900 text-sm font-medium text-gray-600 dark:text-gray-400">3</button>
<span className="text-gray-400 px-1">...</span>
<button className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-900 text-gray-600 dark:text-gray-400">
<span className="material-symbols-outlined text-sm">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
<footer className="mt-auto px-8 py-6 text-center text-gray-400 text-xs">
            © 2024 AgenciFlow SEO Departmanı - Backlink Envanter ve Bütçe Kontrolü Sistemi.
        </footer>

    </div>
  );
}
