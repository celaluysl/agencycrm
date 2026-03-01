
"use client";

import React from "react";

export default function Page() {
  return (
    <div className="flex-1 flex flex-col">
      

<div className="p-8 space-y-6">
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white dark:bg-[#1a2432] p-6 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm flex flex-col gap-1">
<p className="text-[#617289] text-[10px] font-bold uppercase tracking-wider">Aylık Kesilen Fatura</p>
<p className="text-2xl font-bold">₺1.450.000</p>
<div className="mt-2 flex items-center gap-1 text-[10px] text-success font-bold">
<span className="material-symbols-outlined text-xs">arrow_upward</span> %12 artış
                    </div>
</div>
<div className="bg-white dark:bg-[#1a2432] p-6 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm flex flex-col gap-1">
<p className="text-[#617289] text-[10px] font-bold uppercase tracking-wider">Toplam Tahsil Edilen</p>
<p className="text-2xl font-bold text-success">₺1.120.500</p>
<div className="mt-2 flex items-center gap-1 text-[10px] text-success font-bold">
<span className="material-symbols-outlined text-xs">check_circle</span> 42 Fatura
                    </div>
</div>
<div className="bg-white dark:bg-[#1a2432] p-6 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm flex flex-col gap-1">
<p className="text-[#617289] text-[10px] font-bold uppercase tracking-wider">Bekleyen Ödemeler</p>
<p className="text-2xl font-bold text-warning">₺329.500</p>
<div className="mt-2 flex items-center gap-1 text-[10px] text-warning font-bold">
<span className="material-symbols-outlined text-xs">schedule</span> 15 Açık Fatura
                    </div>
</div>
<div className="bg-white dark:bg-[#1a2432] p-6 rounded-xl border border-red-200 dark:border-red-900 shadow-sm flex flex-col gap-1 bg-red-50/30">
<p className="text-danger text-[10px] font-bold uppercase tracking-wider">Gecikmiş Faturalar (Kritik)</p>
<p className="text-2xl font-bold text-danger">₺94.200</p>
<div className="mt-2 flex items-center gap-1 text-[10px] text-danger font-bold">
<span className="material-symbols-outlined text-xs">warning</span> 4 Fatura Acil
                    </div>
</div>
</section>
<section className="bg-white dark:bg-[#1a2432] p-4 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm flex flex-wrap items-center gap-4">
<div className="flex flex-col gap-1 flex-1 min-w-[150px]">
<label className="text-[10px] font-bold text-[#617289] uppercase">Durum Bazlı Filtre</label>
<select className="w-full py-2 text-xs font-medium border-gray-200 dark:border-gray-700 dark:bg-gray-800 rounded-lg focus:ring-primary focus:border-primary">
<option>Tüm Durumlar</option>
<option>Ödendi</option>
<option>Beklemede</option>
<option>Gecikti</option>
<option>İptal</option>
</select>
</div>
<div className="flex flex-col gap-1 flex-1 min-w-[200px]">
<label className="text-[10px] font-bold text-[#617289] uppercase">Müşteri Seçimi</label>
<select className="w-full py-2 text-xs font-medium border-gray-200 dark:border-gray-700 dark:bg-gray-800 rounded-lg focus:ring-primary focus:border-primary">
<option>Tüm Müşteriler</option>
<option>Acme Corp</option>
<option>Global Tech Solution</option>
<option>Luna Digital Agency</option>
<option>NexGen Software</option>
</select>
</div>
<div className="flex flex-col gap-1 flex-1 min-w-[200px]">
<label className="text-[10px] font-bold text-[#617289] uppercase">Tarih Aralığı</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#617289]">calendar_today</span>
<input className="w-full pl-9 pr-3 py-2 text-xs font-medium border-gray-200 dark:border-gray-700 dark:bg-gray-800 rounded-lg focus:ring-primary focus:border-primary" type="text" value="01 Eki 2023 - 31 Eki 2023" />
</div>
</div>
<div className="flex items-end h-full mt-4">
<button className="bg-primary text-white px-6 py-2 rounded-lg text-xs font-bold hover:bg-blue-700 transition-colors shadow-sm">
                        Filtreleri Uygula
                    </button>
</div>
</section>
<div className="bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 overflow-hidden shadow-sm">
<div className="px-6 py-5 border-b border-[#f0f2f4] dark:border-gray-800 flex justify-between items-center">
<h3 className="font-bold text-base flex items-center gap-2">
<span className="material-symbols-outlined text-primary">receipt</span>
                            Fatura Listesi
                        </h3>
<div className="flex gap-3">
<button className="flex items-center gap-1 text-xs font-bold text-[#617289] hover:text-primary transition-colors">
<span className="material-symbols-outlined text-sm">file_download</span> Toplu İndir
                            </button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse min-w-[1000px]">
<thead>
<tr className="bg-gray-50/50 dark:bg-gray-800/50">
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Fatura No</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Müşteri Adı</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Kesim Tarihi</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Son Ödeme</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Tutar (KDV Dahil)</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Durum</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider text-right">Aksiyonlar</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 dark:divide-gray-800">
<tr>
<td className="px-6 py-4 text-xs font-bold">#FAT-2023-084</td>
<td className="px-6 py-4">
<p className="text-sm font-semibold">Acme Corp</p>
<p className="text-[10px] text-[#617289]">Kurumsal Danışmanlık Hizmeti</p>
</td>
<td className="px-6 py-4 text-xs">15.10.2023</td>
<td className="px-6 py-4 text-xs">30.10.2023</td>
<td className="px-6 py-4">
<p className="text-sm font-bold">₺42.500</p>
<p className="text-[10px] text-[#617289]">%20 KDV Dahil</p>
</td>
<td className="px-6 py-4">
<span className="inline-flex px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">ÖDENDİ</span>
</td>
<td className="px-6 py-4">
<div className="flex justify-end gap-2">
<button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-[#617289]" title="PDF İndir">
<span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
</button>
<button className="p-2 opacity-30 cursor-not-allowed text-[#617289]" title="Ödendi Olarak İşaretle">
<span className="material-symbols-outlined text-[18px]">check_circle</span>
</button>
</div>
</td>
</tr>
<tr>
<td className="px-6 py-4 text-xs font-bold">#FAT-2023-085</td>
<td className="px-6 py-4">
<p className="text-sm font-semibold">Global Tech Solution</p>
<p className="text-[10px] text-[#617289]">Yazılım Geliştirme - Faz 2</p>
</td>
<td className="px-6 py-4 text-xs">20.10.2023</td>
<td className="px-6 py-4 text-xs">04.11.2023</td>
<td className="px-6 py-4">
<p className="text-sm font-bold">₺125.000</p>
<p className="text-[10px] text-[#617289]">%20 KDV Dahil</p>
</td>
<td className="px-6 py-4">
<span className="inline-flex px-2 py-0.5 rounded text-[10px] font-bold bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">BEKLEMEDE</span>
</td>
<td className="px-6 py-4">
<div className="flex justify-end gap-2">
<button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-[#617289]" title="PDF İndir">
<span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
</button>
<button className="p-2 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg text-primary" title="Hatırlatıcı Gönder">
<span className="material-symbols-outlined text-[18px]">notifications_active</span>
</button>
<button className="p-2 hover:bg-green-50 dark:hover:bg-green-900/30 rounded-lg text-success" title="Ödendi Olarak İşaretle">
<span className="material-symbols-outlined text-[18px]">check_circle</span>
</button>
</div>
</td>
</tr>
<tr className="bg-red-50/20">
<td className="px-6 py-4 text-xs font-bold">#FAT-2023-079</td>
<td className="px-6 py-4">
<p className="text-sm font-semibold text-danger">Luna Digital Agency</p>
<p className="text-[10px] text-[#617289]">SEO ve İçerik Yönetimi</p>
</td>
<td className="px-6 py-4 text-xs">05.10.2023</td>
<td className="px-6 py-4 text-xs font-bold text-danger">20.10.2023</td>
<td className="px-6 py-4">
<p className="text-sm font-bold text-danger">₺18.200</p>
<p className="text-[10px] text-[#617289]">%20 KDV Dahil</p>
</td>
<td className="px-6 py-4">
<span className="inline-flex px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">GECİKTİ</span>
</td>
<td className="px-6 py-4">
<div className="flex justify-end gap-2">
<button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-[#617289]" title="PDF İndir">
<span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
</button>
<button className="p-2 bg-primary text-white rounded-lg hover:bg-blue-700" title="Hatırlatıcı Gönder">
<span className="material-symbols-outlined text-[18px]">notifications_active</span>
</button>
<button className="p-2 hover:bg-green-50 dark:hover:bg-green-900/30 rounded-lg text-success" title="Ödendi Olarak İşaretle">
<span className="material-symbols-outlined text-[18px]">check_circle</span>
</button>
</div>
</td>
</tr>
<tr>
<td className="px-6 py-4 text-xs font-bold">#FAT-2023-086</td>
<td className="px-6 py-4">
<p className="text-sm font-semibold">NexGen Software</p>
<p className="text-[10px] text-[#617289]">SaaS Altyapı Desteği</p>
</td>
<td className="px-6 py-4 text-xs">22.10.2023</td>
<td className="px-6 py-4 text-xs">06.11.2023</td>
<td className="px-6 py-4">
<p className="text-sm font-bold">₺31.400</p>
<p className="text-[10px] text-[#617289]">%20 KDV Dahil</p>
</td>
<td className="px-6 py-4">
<span className="inline-flex px-2 py-0.5 rounded text-[10px] font-bold bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400 uppercase tracking-tight">İPTAL</span>
</td>
<td className="px-6 py-4">
<div className="flex justify-end gap-2">
<button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-[#617289]" title="PDF İndir">
<span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
</button>
</div>
</td>
</tr>
<tr>
<td className="px-6 py-4 text-xs font-bold">#FAT-2023-082</td>
<td className="px-6 py-4">
<p className="text-sm font-semibold">Creative Studio</p>
<p className="text-[10px] text-[#617289]">Branding Projesi</p>
</td>
<td className="px-6 py-4 text-xs">10.10.2023</td>
<td className="px-6 py-4 text-xs">25.10.2023</td>
<td className="px-6 py-4">
<p className="text-sm font-bold">₺55.000</p>
<p className="text-[10px] text-[#617289]">%20 KDV Dahil</p>
</td>
<td className="px-6 py-4">
<span className="inline-flex px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">ÖDENDİ</span>
</td>
<td className="px-6 py-4">
<div className="flex justify-end gap-2">
<button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-[#617289]" title="PDF İndir">
<span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-4 border-t border-[#f0f2f4] dark:border-gray-800 flex justify-between items-center bg-gray-50/30 dark:bg-gray-800/20">
<p className="text-[11px] text-[#617289] font-medium">Toplam 128 faturadan 5 tanesi gösteriliyor</p>
<div className="flex gap-1">
<button className="size-8 flex items-center justify-center rounded border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 text-[#617289]">
<span className="material-symbols-outlined text-sm">chevron_left</span>
</button>
<button className="size-8 flex items-center justify-center rounded bg-primary text-white text-xs font-bold">1</button>
<button className="size-8 flex items-center justify-center rounded border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 text-[#617289] text-xs font-bold">2</button>
<button className="size-8 flex items-center justify-center rounded border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 text-[#617289] text-xs font-bold">3</button>
<button className="size-8 flex items-center justify-center rounded border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 text-[#617289]">
<span className="material-symbols-outlined text-sm">chevron_right</span>
</button>
</div>
</div>
</div>
</div>

    </div>
  );
}
