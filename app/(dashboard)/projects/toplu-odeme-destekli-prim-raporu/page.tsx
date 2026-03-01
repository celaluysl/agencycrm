
"use client";

import React from "react";

export default function Page() {
  return (
    <div className="flex-1 flex flex-col flex-1 flex flex-col overflow-y-auto custom-scrollbar relative">
      

<div className="p-8 space-y-6 pb-24">
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-white dark:bg-[#1a2432] p-6 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm flex flex-col gap-1">
<p className="text-[#617289] text-[10px] font-bold uppercase tracking-wider">Kesinleşen Ödenecek Prim (11.11.2023)</p>
<p className="text-2xl font-bold text-primary">₺14.800,00</p>
<div className="mt-2 flex items-center gap-1 text-[10px] text-[#617289] font-bold">
<span className="material-symbols-outlined text-xs">event_available</span> 11 Kasım'da kesinleşen tutar
                        </div>
</div>
<div className="bg-white dark:bg-[#1a2432] p-6 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm flex flex-col gap-1">
<p className="text-[#617289] text-[10px] font-bold uppercase tracking-wider">Ödeme Durumu: Hazır</p>
<p className="text-2xl font-bold text-success">₺104.250,00</p>
<div className="mt-2 flex items-center gap-1 text-[10px] text-success font-bold">
<span className="material-symbols-outlined text-xs">task_alt</span> 8 Kalem için ödeme onayı verildi
                        </div>
</div>
<div className="bg-white dark:bg-[#1a2432] p-6 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm flex flex-col gap-1">
<p className="text-[#617289] text-[10px] font-bold uppercase tracking-wider">Bu Ay Ödenen Toplam Prim</p>
<p className="text-2xl font-bold text-[#111418] dark:text-white">₺0,00</p>
<div className="mt-2 flex items-center gap-1 text-[10px] text-[#617289] font-bold">
<span className="material-symbols-outlined text-xs">payments</span> Henüz ödeme yapılmadı
                        </div>
</div>
</section>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
<div className="lg:col-span-12 bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 overflow-hidden shadow-sm">
<div className="px-6 py-5 border-b border-[#f0f2f4] dark:border-gray-800 flex justify-between items-center bg-white dark:bg-[#1a2432] sticky left-0">
<h3 className="font-bold text-base flex items-center gap-2">
<span className="material-symbols-outlined text-success">check_circle</span>
                                Onaylı Prim Hakedişleri (Ödemeye Hazır)
                            </h3>
<div className="flex gap-3 items-center">
<div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-2">
<span className="material-symbols-outlined text-sm text-[#617289]">calendar_month</span>
<select className="bg-transparent border-none text-xs font-bold text-[#617289] focus:ring-0 py-1.5 pl-1 pr-8">
<option value="10">Ekim 2023</option>
<option value="11">Kasım 2023</option>
<option value="12">Aralık 2023</option>
<option value="01">Ocak 2024</option>
<option value="02">Şubat 2024</option>
</select>
</div>
<div className="relative group">
<button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-xs font-bold hover:bg-blue-700 transition-all shadow-md">
<span className="material-symbols-outlined text-sm">description</span>
                                        BANKA ÖDEME DOSYASI OLUŞTUR
                                        <span className="material-symbols-outlined text-sm">expand_more</span>
</button>
<div className="dropdown-menu absolute right-0 mt-2 w-56 bg-white dark:bg-[#1a2432] border border-[#dbe0e6] dark:border-gray-700 rounded-xl shadow-xl z-30 overflow-hidden">
<div className="p-2 flex flex-col">
<button className="flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors group/item text-left">
<div className="size-8 rounded bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-success">
<span className="material-symbols-outlined text-xl">table_view</span>
</div>
<div>
<p className="text-xs font-bold text-[#111418] dark:text-white leading-tight">Excel (XLSX)</p>
<p className="text-[9px] text-[#617289]">Standart muhasebe formatı</p>
</div>
</button>
<button className="flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors group/item text-left">
<div className="size-8 rounded bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-xl">data_object</span>
</div>
<div>
<p className="text-xs font-bold text-[#111418] dark:text-white leading-tight">Banka CSV Formatı</p>
<p className="text-[9px] text-[#617289]">Toplu ödeme yükleme dosyası</p>
</div>
</button>
</div>
</div>
</div>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50/50 dark:bg-gray-800/50">
<th className="px-6 py-4 w-10">
<input defaultChecked className="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
</th>
<th className="px-4 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Satışçı İsmi</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Ödeme Dönemi</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Müşteri / Proje</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Hizmet Kalemi</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Ödeme Tarihi</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Prim (%10)</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider text-center">Durum</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 dark:divide-gray-800">
<tr className="highlight-earned hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors">
<td className="px-6 py-4">
<input defaultChecked className="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
</td>
<td className="px-4 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary font-bold text-xs">YK</div>
<div>
<p className="text-sm font-bold">Yavuz Kara</p>
<p className="text-[10px] text-[#617289]">Sr. Satış Temsilcisi</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<p className="text-xs font-semibold">Ekim 2023</p>
</td>
<td className="px-6 py-4">
<p className="text-xs font-bold">Lojistik Global A.Ş.</p>
<p className="text-[10px] text-[#617289]">Proje No: #2341</p>
</td>
<td className="px-6 py-4"><span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-[#617289] rounded text-[10px] font-bold uppercase">Yıllık Danışmanlık</span></td>
<td className="px-6 py-4 text-xs font-semibold">
<div className="flex flex-col">
<span>11.11.2023</span>
<span className="text-[9px] text-success font-bold uppercase italic">Bugün</span>
</div>
</td>
<td className="px-6 py-4">
<div className="flex flex-col">
<p className="text-sm font-bold text-success">₺12.000,00</p>
<span className="inline-flex items-center w-fit px-1.5 py-0.5 rounded bg-success/10 text-success text-[9px] font-bold mt-1 uppercase">Hak Edildi</span>
</div>
</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">ONAYLANDI</span>
</td>
</tr>
<tr className="highlight-earned hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors">
<td className="px-6 py-4">
<input defaultChecked className="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
</td>
<td className="px-4 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 font-bold text-xs">AS</div>
<div>
<p className="text-sm font-bold">Aslı Soylu</p>
<p className="text-[10px] text-[#617289]">Inside Sales</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<p className="text-xs font-semibold">Ekim 2023</p>
</td>
<td className="px-6 py-4">
<p className="text-xs font-bold">E-Ticaret Devleri</p>
<p className="text-[10px] text-[#617289]">Proje No: #3119</p>
</td>
<td className="px-6 py-4"><span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-[#617289] rounded text-[10px] font-bold uppercase">Entegrasyon Destek</span></td>
<td className="px-6 py-4 text-xs font-semibold">
<div className="flex flex-col">
<span>11.11.2023</span>
<span className="text-[9px] text-success font-bold uppercase italic">Bugün</span>
</div>
</td>
<td className="px-6 py-4">
<div className="flex flex-col">
<p className="text-sm font-bold text-success">₺2.800,00</p>
<span className="inline-flex items-center w-fit px-1.5 py-0.5 rounded bg-success/10 text-success text-[9px] font-bold mt-1 uppercase">Hak Edildi</span>
</div>
</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">ONAYLANDI</span>
</td>
</tr>
<tr className="highlight-earned hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors">
<td className="px-6 py-4">
<input className="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
</td>
<td className="px-4 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 font-bold text-xs">ME</div>
<div>
<p className="text-sm font-bold">Mert Erkan</p>
<p className="text-[10px] text-[#617289]">Key Account Mgr.</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<p className="text-xs font-semibold">Ekim 2023</p>
</td>
<td className="px-6 py-4">
<p className="text-xs font-bold">Teknoloji Parkı</p>
<p className="text-[10px] text-[#617289]">Proje No: #4402</p>
</td>
<td className="px-6 py-4"><span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-[#617289] rounded text-[10px] font-bold uppercase">Altyapı Yenileme</span></td>
<td className="px-6 py-4 text-xs font-semibold">
<div className="flex flex-col">
<span>11.11.2023</span>
<span className="text-[9px] text-success font-bold uppercase italic">Bugün</span>
</div>
</td>
<td className="px-6 py-4">
<div className="flex flex-col">
<p className="text-sm font-bold text-success">₺7.500,00</p>
<span className="inline-flex items-center w-fit px-1.5 py-0.5 rounded bg-success/10 text-success text-[9px] font-bold mt-1 uppercase">Hak Edildi</span>
</div>
</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">ONAYLANDI</span>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-4 bg-gray-50/30 dark:bg-gray-800/20 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
<p className="text-xs text-[#617289] font-medium">Bu dönem için ödenmeye hazır 12 prim kalemi listeleniyor.</p>
<div className="flex gap-2">
<button className="px-3 py-1 border border-gray-200 dark:border-gray-700 rounded text-xs font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Önceki</button>
<button className="px-3 py-1 border border-gray-200 dark:border-gray-700 rounded text-xs font-bold bg-primary text-white hover:bg-blue-700 transition-colors">Sonraki</button>
</div>
</div>
</div>
</div>
</div>
<div className="fixed bottom-0 left-64 right-0 bg-white/95 dark:bg-[#1a2432]/95 backdrop-blur-md border-t border-primary/20 p-4 z-40 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] transition-all transform animate-in slide-in-from-bottom duration-300">
<div className="max-w-7xl mx-auto flex items-center justify-between px-4">
<div className="flex items-center gap-6">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-lg">check_box</span>
</div>
<div className="flex flex-col">
<span className="text-[10px] font-bold text-[#617289] uppercase tracking-tighter">Seçili Kalem</span>
<span className="text-sm font-bold text-[#111418] dark:text-white">2 Hakediş Seçildi</span>
</div>
</div>
<div className="h-8 w-px bg-gray-200 dark:bg-gray-700"></div>
<div className="flex flex-col">
<span className="text-[10px] font-bold text-[#617289] uppercase tracking-tighter">Ödenecek Toplam</span>
<span className="text-lg font-bold text-success leading-none">₺14.800,00</span>
</div>
</div>
<div className="flex items-center gap-3">
<button className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-xs font-bold text-[#617289] hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            Seçimi Temizle
                        </button>
<button className="flex items-center gap-2 px-6 py-2 bg-success text-white rounded-lg text-xs font-bold hover:bg-green-700 transition-all shadow-md">
<span className="material-symbols-outlined text-sm">rocket_launch</span>
                            ÖDEME TALİMATI GÖNDER
                        </button>
</div>
</div>
</div>

    </div>
  );
}
