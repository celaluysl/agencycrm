
"use client";

import React from "react";

export default function Page() {
  return (
    <div className="flex-1 flex flex-col flex-1 flex flex-col overflow-y-auto custom-scrollbar">
      

<div className="p-8 space-y-6">
<section className="bg-white dark:bg-[#1a2432] p-4 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm flex flex-wrap items-center gap-4">
<div className="flex flex-col gap-1 flex-1 min-w-[200px]">
<label className="text-[10px] font-bold text-[#617289] uppercase">Tarih Aralığı</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#617289]">calendar_today</span>
<input className="w-full pl-9 pr-3 py-2 text-xs font-medium border-gray-200 dark:border-gray-700 dark:bg-gray-800 rounded-lg focus:ring-primary focus:border-primary" type="text" value="01 Eki 2023 - 31 Eki 2023" />
</div>
</div>
<div className="flex flex-col gap-1 flex-1 min-w-[150px]">
<label className="text-[10px] font-bold text-[#617289] uppercase">Kategori</label>
<select className="w-full py-2 text-xs font-medium border-gray-200 dark:border-gray-700 dark:bg-gray-800 rounded-lg focus:ring-primary focus:border-primary">
<option>Tüm Kategoriler</option>
<option>Maaş</option>
<option>Yazılım</option>
<option>Ofis</option>
<option>Backlink</option>
</select>
</div>
<div className="flex flex-col gap-1 flex-1 min-w-[200px]">
<label className="text-[10px] font-bold text-[#617289] uppercase">Müşteri Bazlı Filtreleme</label>
<select className="w-full py-2 text-xs font-medium border-gray-200 dark:border-gray-700 dark:bg-gray-800 rounded-lg focus:ring-primary focus:border-primary">
<option>Tüm Müşteriler</option>
<option>Acme Corp</option>
<option>Global Tech</option>
<option>Luna Agency</option>
</select>
</div>
<div className="flex items-end h-full mt-4">
<button className="bg-primary text-white px-6 py-2 rounded-lg text-xs font-bold hover:bg-blue-700 transition-colors shadow-sm">
                        Uygula
                    </button>
</div>
</section>
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white dark:bg-[#1a2432] p-6 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm flex flex-col gap-1">
<p className="text-[#617289] text-[10px] font-bold uppercase tracking-wider">Aylık Toplam Gelir</p>
<p className="text-2xl font-bold text-success">₺1.240.000</p>
<div className="mt-2 flex items-center gap-1 text-[10px] text-success font-bold">
<span className="material-symbols-outlined text-xs">trending_up</span> +14% geçen aya göre
                    </div>
</div>
<div className="bg-white dark:bg-[#1a2432] p-6 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm flex flex-col gap-1">
<p className="text-[#617289] text-[10px] font-bold uppercase tracking-wider">Aylık Toplam Gider</p>
<p className="text-2xl font-bold text-danger">₺842.500</p>
<div className="mt-2 flex items-center gap-1 text-[10px] text-danger font-bold">
<span className="material-symbols-outlined text-xs">trending_up</span> +5.2% geçen aya göre
                    </div>
</div>
<div className="bg-white dark:bg-[#1a2432] p-6 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm flex flex-col gap-1">
<p className="text-[#617289] text-[10px] font-bold uppercase tracking-wider">Bekleyen Tahsilat</p>
<p className="text-2xl font-bold">₺156.200</p>
<div className="mt-2 flex items-center gap-1 text-[10px] text-warning font-bold">
<span className="material-symbols-outlined text-xs">schedule</span> 8 Gecikmiş Fatura
                    </div>
</div>
<div className="bg-white dark:bg-[#1a2432] p-6 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm flex flex-col gap-1">
<p className="text-[#617289] text-[10px] font-bold uppercase tracking-wider">Net Kâr (Ekim)</p>
<p className="text-2xl font-bold text-primary">₺397.500</p>
<div className="mt-2 flex items-center gap-1 text-[10px] text-primary font-bold">
<span className="material-symbols-outlined text-xs">equalizer</span> %32 Kâr Marjı
                    </div>
</div>
</section>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
<div className="lg:col-span-8 bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 overflow-hidden shadow-sm">
<div className="px-6 py-5 border-b border-[#f0f2f4] dark:border-gray-800 flex justify-between items-center">
<h3 className="font-bold text-base flex items-center gap-2">
<span className="material-symbols-outlined text-primary">history</span>
                            İşlem Geçmişi
                        </h3>
<div className="flex gap-2">
<button className="flex items-center gap-1 text-xs font-bold text-[#617289] hover:text-primary transition-colors">
<span className="material-symbols-outlined text-sm">download</span> Excel İndir
                            </button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50/50 dark:bg-gray-800/50">
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Tarih</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Açıklama</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Kategori</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Tutar / KDV</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Yöntem</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider text-center">Durum</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 dark:divide-gray-800">
<tr>
<td className="px-6 py-4 text-xs font-medium">24.10.2023</td>
<td className="px-6 py-4">
<p className="text-sm font-bold">Ahrefs Yıllık Abonelik</p>
<p className="text-[10px] text-[#617289]">Yazılım Hizmet Bedeli</p>
</td>
<td className="px-6 py-4"><span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded text-[10px] font-bold uppercase">Yazılım</span></td>
<td className="px-6 py-4">
<p className="text-sm font-bold">₺24.500</p>
<p className="text-[10px] text-[#617289]">%20 KDV Dahil</p>
</td>
<td className="px-6 py-4 text-xs font-semibold">Kredi Kartı</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">ÖDENDİ</span>
</td>
</tr>
<tr>
<td className="px-6 py-4 text-xs font-medium">23.10.2023</td>
<td className="px-6 py-4">
<p className="text-sm font-bold">Ofis Kirası - Ekim</p>
<p className="text-[10px] text-[#617289]">Merkez Ofis Ödemesi</p>
</td>
<td className="px-6 py-4"><span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-[#617289] rounded text-[10px] font-bold uppercase">Ofis</span></td>
<td className="px-6 py-4">
<p className="text-sm font-bold">₺45.000</p>
<p className="text-[10px] text-[#617289]">Stopaj Dahil</p>
</td>
<td className="px-6 py-4 text-xs font-semibold">EFT/Havale</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex px-2 py-0.5 rounded text-[10px] font-bold bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">BEKLEMEDE</span>
</td>
</tr>
<tr>
<td className="px-6 py-4 text-xs font-medium">22.10.2023</td>
<td className="px-6 py-4">
<p className="text-sm font-bold">Maaş Ödemeleri</p>
<p className="text-[10px] text-[#617289]">24 Personel Toplam</p>
</td>
<td className="px-6 py-4"><span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded text-[10px] font-bold uppercase">Maaş</span></td>
<td className="px-6 py-4">
<p className="text-sm font-bold">₺620.000</p>
<p className="text-[10px] text-[#617289]">Sigorta ve Vergi Dahil</p>
</td>
<td className="px-6 py-4 text-xs font-semibold">FAST</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">ÖDENDİ</span>
</td>
</tr>
<tr>
<td className="px-6 py-4 text-xs font-medium">21.10.2023</td>
<td className="px-6 py-4">
<p className="text-sm font-bold">Backlink Hizmet Alımı</p>
<p className="text-[10px] text-[#617289]">Müşteri: Global Tech</p>
</td>
<td className="px-6 py-4"><span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded text-[10px] font-bold uppercase">Backlink</span></td>
<td className="px-6 py-4">
<p className="text-sm font-bold">₺12.800</p>
<p className="text-[10px] text-[#617289]">%20 KDV</p>
</td>
<td className="px-6 py-4 text-xs font-semibold">Kredi Kartı</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">İPTAL</span>
</td>
</tr>
<tr>
<td className="px-6 py-4 text-xs font-medium">20.10.2023</td>
<td className="px-6 py-4">
<p className="text-sm font-bold">Sunucu Yenileme (AWS)</p>
<p className="text-[10px] text-[#617289]">Altyapı Hizmetleri</p>
</td>
<td className="px-6 py-4"><span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded text-[10px] font-bold uppercase">Yazılım</span></td>
<td className="px-6 py-4">
<p className="text-sm font-bold">₺18.450</p>
<p className="text-[10px] text-[#617289]">KDV Muaf</p>
</td>
<td className="px-6 py-4 text-xs font-semibold">Kredi Kartı</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">ÖDENDİ</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="lg:col-span-4 space-y-6">
<div className="bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm p-6">
<h3 className="font-bold text-sm mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-xl">account_balance_wallet</span>
                            Banka Bakiyeleri
                        </h3>
<div className="space-y-4">
<div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
<div className="flex items-center gap-3">
<div className="size-8 rounded bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-600 flex items-center justify-center font-bold text-blue-600 text-xs">G</div>
<div>
<p className="text-xs font-bold">Garanti BBVA</p>
<p className="text-[9px] text-[#617289]">Ticari Hesap</p>
</div>
</div>
<p className="text-sm font-bold">₺845.200</p>
</div>
<div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
<div className="flex items-center gap-3">
<div className="size-8 rounded bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-600 flex items-center justify-center font-bold text-red-600 text-xs">A</div>
<div>
<p className="text-xs font-bold">Akbank</p>
<p className="text-[9px] text-[#617289]">Yatırım Hesabı</p>
</div>
</div>
<p className="text-sm font-bold">₺1.210.400</p>
</div>
<div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
<div className="flex items-center gap-3">
<div className="size-8 rounded bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-600 flex items-center justify-center font-bold text-blue-800 text-xs">I</div>
<div>
<p className="text-xs font-bold">İş Bankası</p>
<p className="text-[9px] text-[#617289]">Maaş Ödeme</p>
</div>
</div>
<p className="text-sm font-bold">₺34.150</p>
</div>
</div>
<button className="w-full mt-4 text-center py-2 text-[10px] font-bold text-primary hover:underline uppercase tracking-wider">
                            Tüm Hesap Hareketleri
                        </button>
</div>
<div className="bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm p-6">
<h3 className="font-bold text-sm mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-xl">pie_chart</span>
                            Departman Gider Dağılımı
                        </h3>
<div className="flex flex-col items-center">
<div className="relative size-40 mb-6">
<svg className="size-full -rotate-90" viewBox="0 0 36 36">
<circle className="stroke-purple-500 fill-none" cx="18" cy="18" r="15.915" strokeDasharray="60 100" strokeDashoffset="0" strokeWidth="6"></circle>
<circle className="stroke-blue-500 fill-none" cx="18" cy="18" r="15.915" strokeDasharray="25 100" strokeDashoffset="-60" strokeWidth="6"></circle>
<circle className="stroke-yellow-500 fill-none" cx="18" cy="18" r="15.915" strokeDasharray="10 100" strokeDashoffset="-85" strokeWidth="6"></circle>
<circle className="stroke-gray-300 fill-none" cx="18" cy="18" r="15.915" strokeDasharray="5 100" strokeDashoffset="-95" strokeWidth="6"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-lg font-bold">₺842k</span>
<span className="text-[9px] text-[#617289] font-bold">TOPLAM</span>
</div>
</div>
<div className="w-full space-y-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="size-2 rounded-full bg-purple-500"></span>
<span className="text-xs font-medium">Maaşlar</span>
</div>
<span className="text-xs font-bold">%60</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="size-2 rounded-full bg-blue-500"></span>
<span className="text-xs font-medium">Yazılım &amp; Altyapı</span>
</div>
<span className="text-xs font-bold">%25</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="size-2 rounded-full bg-yellow-500"></span>
<span className="text-xs font-medium">Reklam &amp; Backlink</span>
</div>
<span className="text-xs font-bold">%10</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="size-2 rounded-full bg-gray-300"></span>
<span className="text-xs font-medium">Ofis &amp; Diğer</span>
</div>
<span className="text-xs font-bold">%5</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

    </div>
  );
}
