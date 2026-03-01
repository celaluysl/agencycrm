
"use client";

import React from "react";

export default function Page() {
  return (
    <div className="flex-1 flex flex-col flex-1 flex flex-col overflow-y-auto custom-scrollbar">
      

<div className="p-8 space-y-6">
<section className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white dark:bg-[#1a2432] p-6 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm flex flex-col gap-1 border-l-4 border-l-l-primary">
<p className="text-[#617289] text-[10px] font-bold uppercase tracking-wider">Toplam Ajans Alacağı</p>
<p className="text-2xl font-bold">₺2.845.200</p>
<div className="mt-2 flex items-center gap-1 text-[10px] text-success font-bold">
<span className="material-symbols-outlined text-xs">trending_up</span> %8.5 Tahsilat artışı (v.s. Geçen Ay)
                    </div>
</div>
<div className="bg-white dark:bg-[#1a2432] p-6 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm flex flex-col gap-1 border-l-4 border-l-l-success">
<p className="text-[#617289] text-[10px] font-bold uppercase tracking-wider">Aktif Sözleşme Değeri</p>
<p className="text-2xl font-bold">₺14.120.000</p>
<div className="mt-2 flex items-center gap-1 text-[10px] text-[#617289] font-bold">
<span className="material-symbols-outlined text-xs">info</span> 24 Aktif Müşteri Sözleşmesi
                    </div>
</div>
<div className="bg-white dark:bg-[#1a2432] p-6 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm flex flex-col gap-1 border-l-4 border-l-l-warning">
<p className="text-[#617289] text-[10px] font-bold uppercase tracking-wider">Ortalama Tahsilat Süresi</p>
<p className="text-2xl font-bold">18.5 Gün</p>
<div className="mt-2 flex items-center gap-1 text-[10px] text-danger font-bold">
<span className="material-symbols-outlined text-xs">warning</span> Hedeflenen 15 günün üzerinde
                    </div>
</div>
</section>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
<div className="lg:col-span-8 space-y-6">
<div className="bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 overflow-hidden shadow-sm">
<div className="px-6 py-5 border-b border-[#f0f2f4] dark:border-gray-800 flex justify-between items-center">
<h3 className="font-bold text-base flex items-center gap-2">
<span className="material-symbols-outlined text-primary">list_alt</span>
                                Cari Liste Tablosu
                            </h3>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#617289]">search</span>
<input className="pl-9 pr-3 py-1.5 text-xs font-medium border-gray-200 dark:border-gray-700 dark:bg-gray-800 rounded-lg focus:ring-primary focus:border-primary w-64" placeholder="Müşteri ara..." type="text" />
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50/50 dark:bg-gray-800/50">
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Müşteri Adı</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Toplam Borç</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Toplam Alacak</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Bakiye</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Son İşlem</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider text-center">Risk</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 dark:divide-gray-800">
<tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer bg-primary/5">
<td className="px-6 py-4">
<p className="text-sm font-bold">Acme Teknoloji A.Ş.</p>
<p className="text-[10px] text-[#617289]">ID: #C00452</p>
</td>
<td className="px-6 py-4 text-sm font-medium">₺450.000</td>
<td className="px-6 py-4 text-sm font-medium">₺380.000</td>
<td className="px-6 py-4">
<p className="text-sm font-bold text-danger">₺70.000</p>
</td>
<td className="px-6 py-4 text-xs">12.10.2023</td>
<td className="px-6 py-4 text-center">
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">DÜŞÜK</span>
</td>
</tr>
<tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer">
<td className="px-6 py-4">
<p className="text-sm font-bold">Global Pazarlama Ltd.</p>
<p className="text-[10px] text-[#617289]">ID: #C00488</p>
</td>
<td className="px-6 py-4 text-sm font-medium">₺1.200.000</td>
<td className="px-6 py-4 text-sm font-medium">₺950.000</td>
<td className="px-6 py-4">
<p className="text-sm font-bold text-danger">₺250.000</p>
</td>
<td className="px-6 py-4 text-xs">20.10.2023</td>
<td className="px-6 py-4 text-center">
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">ORTA</span>
</td>
</tr>
<tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer">
<td className="px-6 py-4">
<p className="text-sm font-bold">Luna Agency Creative</p>
<p className="text-[10px] text-[#617289]">ID: #C00512</p>
</td>
<td className="px-6 py-4 text-sm font-medium">₺85.000</td>
<td className="px-6 py-4 text-sm font-medium">₺12.000</td>
<td className="px-6 py-4">
<p className="text-sm font-bold text-danger">₺73.000</p>
</td>
<td className="px-6 py-4 text-xs">05.09.2023</td>
<td className="px-6 py-4 text-center">
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">YÜKSEK</span>
</td>
</tr>
<tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer">
<td className="px-6 py-4">
<p className="text-sm font-bold">Pion Altyapı Çözümleri</p>
<p className="text-[10px] text-[#617289]">ID: #C00540</p>
</td>
<td className="px-6 py-4 text-sm font-medium">₺310.000</td>
<td className="px-6 py-4 text-sm font-medium">₺310.000</td>
<td className="px-6 py-4">
<p className="text-sm font-bold text-success">₺0</p>
</td>
<td className="px-6 py-4 text-xs">24.10.2023</td>
<td className="px-6 py-4 text-center">
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">DÜŞÜK</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 overflow-hidden shadow-sm">
<div className="px-6 py-5 border-b border-[#f0f2f4] dark:border-gray-800">
<h3 className="font-bold text-base flex items-center gap-2">
<span className="material-symbols-outlined text-primary">receipt_long</span>
                                Hesap Ekstresi: Acme Teknoloji A.Ş.
                            </h3>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50/50 dark:bg-gray-800/50">
<th className="px-6 py-3 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Tarih</th>
<th className="px-6 py-3 text-[10px] font-bold text-[#617289] uppercase tracking-wider">İşlem Türü</th>
<th className="px-6 py-3 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Açıklama</th>
<th className="px-6 py-3 text-[10px] font-bold text-[#617289] uppercase tracking-wider text-right">Borç</th>
<th className="px-6 py-3 text-[10px] font-bold text-[#617289] uppercase tracking-wider text-right">Alacak</th>
<th className="px-6 py-3 text-[10px] font-bold text-[#617289] uppercase tracking-wider text-right">Bakiye</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-xs">
<tr>
<td className="px-6 py-3">01.10.2023</td>
<td className="px-6 py-3"><span className="px-1.5 py-0.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded">Fatura</span></td>
<td className="px-6 py-3 italic">Ekim Ayı SEO Hizmet Bedeli</td>
<td className="px-6 py-3 text-right">₺45.000</td>
<td className="px-6 py-3 text-right">-</td>
<td className="px-6 py-3 text-right font-semibold">₺45.000</td>
</tr>
<tr>
<td className="px-6 py-3">12.10.2023</td>
<td className="px-6 py-3"><span className="px-1.5 py-0.5 bg-green-50 dark:bg-green-900/20 text-green-600 rounded">Tahsilat</span></td>
<td className="px-6 py-3 italic">Garanti Bankası EFT - #TR92..</td>
<td className="px-6 py-3 text-right">-</td>
<td className="px-6 py-3 text-right">₺20.000</td>
<td className="px-6 py-3 text-right font-semibold">₺25.000</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<div className="lg:col-span-4 space-y-6">
<div className="bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm p-6">
<div className="flex items-center gap-4 mb-6">
<div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-2xl">business</span>
</div>
<div>
<h4 className="font-bold text-base">Cari Kart Detayı</h4>
<p className="text-xs text-[#617289]">Müşteri İletişim &amp; Risk</p>
</div>
</div>
<div className="space-y-4">
<div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg space-y-2">
<div className="flex justify-between items-center">
<span className="text-[10px] font-bold text-[#617289] uppercase">Yetkili</span>
<span className="text-xs font-semibold">Ahmet Yılmaz</span>
</div>
<div className="flex justify-between items-center">
<span className="text-[10px] font-bold text-[#617289] uppercase">E-posta</span>
<span className="text-xs font-semibold">finance@acme.com</span>
</div>
<div className="flex justify-between items-center">
<span className="text-[10px] font-bold text-[#617289] uppercase">Telefon</span>
<span className="text-xs font-semibold">0212 555 1234</span>
</div>
</div>
<div>
<h5 className="text-[10px] font-bold text-[#617289] uppercase mb-3">Ödeme Performansı (6 Ay)</h5>
<div className="flex items-end justify-between h-24 gap-1 px-2">
<div className="w-full bg-blue-100 dark:bg-blue-900/30 rounded-t h-[60%] relative group">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">₺80k</div>
</div>
<div className="w-full bg-blue-200 dark:bg-blue-800/40 rounded-t h-[80%] relative group">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">₺110k</div>
</div>
<div className="w-full bg-blue-400 dark:bg-blue-600/50 rounded-t h-[40%] relative group">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">₺50k</div>
</div>
<div className="w-full bg-blue-500 dark:bg-blue-500/60 rounded-t h-[95%] relative group">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">₺140k</div>
</div>
<div className="w-full bg-blue-600 dark:bg-blue-400/70 rounded-t h-[70%] relative group">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">₺95k</div>
</div>
<div className="w-full bg-primary rounded-t h-[85%] relative group">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">₺120k</div>
</div>
</div>
<div className="flex justify-between mt-2 text-[9px] font-bold text-[#617289] uppercase">
<span>May</span>
<span>Haz</span>
<span>Tem</span>
<span>Ağu</span>
<span>Eyl</span>
<span>Eki</span>
</div>
</div>
<div className="pt-4 border-t border-gray-100 dark:border-gray-800">
<h5 className="text-[10px] font-bold text-[#617289] uppercase mb-2">Risk Değerlendirmesi</h5>
<div className="flex items-center gap-3">
<div className="flex-1 h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden flex">
<div className="h-full bg-success w-[20%]"></div>
<div className="h-full bg-gray-200 dark:bg-gray-700 w-[80%]"></div>
</div>
<span className="text-xs font-bold text-success">Düşük Risk</span>
</div>
<p className="text-[10px] text-[#617289] mt-2 italic">Müşteri ödemelerini ortalama 4 gün gecikme ile düzenli yapmaktadır.</p>
</div>
</div>
</div>
<div className="bg-primary/5 dark:bg-primary/10 rounded-xl border border-primary/20 p-6">
<h4 className="font-bold text-sm mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-xl">quick_reference_all</span>
                            Bekleyen Tahsilat Hatırlatıcı
                        </h4>
<div className="space-y-3">
<div className="flex items-center justify-between text-xs bg-white dark:bg-gray-800 p-2 rounded border border-gray-100 dark:border-gray-700 shadow-sm">
<span className="font-medium">Global Pazarlama</span>
<span className="font-bold text-danger">₺25.000 (3 Gün Geçti)</span>
</div>
<div className="flex items-center justify-between text-xs bg-white dark:bg-gray-800 p-2 rounded border border-gray-100 dark:border-gray-700 shadow-sm">
<span className="font-medium">Luna Agency</span>
<span className="font-bold text-danger">₺12.400 (15 Gün Geçti)</span>
</div>
</div>
</div>
</div>
</div>
</div>

    </div>
  );
}
