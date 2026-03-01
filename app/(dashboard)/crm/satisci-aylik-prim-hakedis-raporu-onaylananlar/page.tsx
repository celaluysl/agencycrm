
"use client";

import React from "react";

export default function Page() {
  return (
    <div className="flex-1 flex flex-col">
      

<div className="p-8 space-y-6">
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
<p className="text-[#617289] text-[10px] font-bold uppercase tracking-wider">Satışçı Bazlı Prim Dağılımı</p>
<p className="text-2xl font-bold text-[#111418] dark:text-white">₺119.050,00</p>
<div className="mt-2 flex items-center gap-1 text-[10px] text-[#617289] font-bold">
<span className="material-symbols-outlined text-xs">analytics</span> Onaylanmış toplam hak ediş
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
<button className="flex items-center gap-2 px-3 py-1.5 bg-primary text-white rounded-lg text-xs font-bold hover:bg-blue-700 transition-colors shadow-sm">
<span className="material-symbols-outlined text-sm">download</span> Excel İndir
                            </button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50/50 dark:bg-gray-800/50">
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Satışçı İsmi</th>
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
<span>08.10.2023</span>
<span className="text-[9px] text-success font-bold uppercase italic">Vadeden Önce</span>
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
<span>05.10.2023</span>
<span className="text-[9px] text-success font-bold uppercase italic">Vadeden Önce</span>
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

    </div>
  );
}
