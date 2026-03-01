
"use client";

import React from "react";

export default function Page() {
  return (
    <div className="flex-1 flex flex-col">
      

<div className="p-8 space-y-6">
<div className="bg-blue-50 dark:bg-blue-900/10 border-l-4 border-l-primary p-4 rounded-r-lg">
<div className="flex gap-3">
<span className="material-symbols-outlined text-primary">info</span>
<p className="text-sm text-blue-900 dark:text-blue-200">
<span className="font-bold">%10 prim kuralı:</span> Fatura ayın 10'una kadar ödenirse 11'inde hakediş gerçekleşir.
                    </p>
</div>
</div>
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white dark:bg-[#1a2432] p-6 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm flex flex-col gap-1">
<p className="text-[#617289] text-[10px] font-bold uppercase tracking-wider">Aylık Toplam Prim Hakedişi</p>
<p className="text-2xl font-bold text-success">₺18.450,00</p>
<div className="mt-2 flex items-center gap-1 text-[10px] text-success font-bold">
<span className="material-symbols-outlined text-xs">trending_up</span> +12% geçen aya göre
                    </div>
</div>
<div className="bg-white dark:bg-[#1a2432] p-6 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm flex flex-col gap-1">
<p className="text-[#617289] text-[10px] font-bold uppercase tracking-wider">Zamanında Ödenen Fatura Sayısı</p>
<p className="text-2xl font-bold text-[#111418] dark:text-white">14 / 18</p>
<div className="mt-2 flex items-center gap-1 text-[10px] text-primary font-bold">
<span className="material-symbols-outlined text-xs">timer</span> %78 Zamanında Ödeme Oranı
                    </div>
</div>
<div className="bg-white dark:bg-[#1a2432] p-6 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm flex flex-col gap-1">
<p className="text-[#617289] text-[10px] font-bold uppercase tracking-wider">Bekleyen Primler</p>
<p className="text-2xl font-bold text-warning">₺4.200,00</p>
<div className="mt-2 flex items-center gap-1 text-[10px] text-warning font-bold">
<span className="material-symbols-outlined text-xs">hourglass_empty</span> 4 Fatura Tahsilat Bekliyor
                    </div>
</div>
<div className="bg-white dark:bg-[#1a2432] p-6 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm flex flex-col gap-1">
<p className="text-[#617289] text-[10px] font-bold uppercase tracking-wider">Bu Ayki Toplam Satış Hacmi</p>
<p className="text-2xl font-bold text-primary">₺245.000,00</p>
<div className="mt-2 flex items-center gap-1 text-[10px] text-primary font-bold">
<span className="material-symbols-outlined text-xs">shopping_cart</span> Hedef: ₺300.000
                    </div>
</div>
</section>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
<div className="lg:col-span-9 bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 overflow-hidden shadow-sm">
<div className="px-6 py-5 border-b border-[#f0f2f4] dark:border-gray-800 flex justify-between items-center">
<h3 className="font-bold text-base flex items-center gap-2">
<span className="material-symbols-outlined text-primary">list_alt</span>
                            Hakediş Listesi (Ekim 2023)
                        </h3>
<div className="flex gap-2">
<div className="relative">
<input className="pl-8 pr-4 py-1.5 border border-gray-200 dark:border-gray-700 rounded-lg text-xs bg-transparent focus:ring-primary focus:border-primary" placeholder="Müşteri Ara..." type="text" />
<span className="material-symbols-outlined absolute left-2.5 top-1.5 text-gray-400 text-sm">search</span>
</div>
<button className="flex items-center gap-1 text-xs font-bold text-[#617289] hover:text-primary transition-colors border border-gray-200 dark:border-gray-700 px-3 py-1.5 rounded-lg">
<span className="material-symbols-outlined text-sm">filter_list</span> Filtrele
                            </button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50/50 dark:bg-gray-800/50">
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Müşteri</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Hizmet Kalemi</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Satış Tutarı</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider text-center">Fatura Ödeme Tarihi</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Prim Tutarı (%10)</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider text-center">Durum</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 dark:divide-gray-800">
<tr>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary font-bold text-xs uppercase">NK</div>
<p className="text-sm font-bold">Nova Kozmetik</p>
</div>
</td>
<td className="px-6 py-4 text-xs font-medium">SEO &amp; Sosyal Medya</td>
<td className="px-6 py-4 text-xs font-semibold">₺45.000,00</td>
<td className="px-6 py-4 text-center">
<div className="flex flex-col items-center">
<span className="text-xs font-medium">08.10.2023</span>
<span className="text-[9px] text-success font-bold uppercase tracking-tighter">Zamanında</span>
</div>
</td>
<td className="px-6 py-4">
<span className="text-sm font-bold text-success bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded">₺4.500,00</span>
</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">HAKEDİŞ ONAYLANDI</span>
</td>
</tr>
<tr>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-700 font-bold text-xs uppercase">LT</div>
<p className="text-sm font-bold">Lumina Teknoloji</p>
</div>
</td>
<td className="px-6 py-4 text-xs font-medium">Web Tasarım &amp; UI</td>
<td className="px-6 py-4 text-xs font-semibold">₺72.000,00</td>
<td className="px-6 py-4 text-center">
<div className="flex flex-col items-center">
<span className="text-xs font-medium">12.10.2023</span>
<span className="text-[9px] text-warning font-bold uppercase tracking-tighter">Geç Ödeme</span>
</div>
</td>
<td className="px-6 py-4">
<span className="text-sm font-bold text-[#617289]">₺7.200,00</span>
</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">HAKEDİŞ ONAYLANDI</span>
</td>
</tr>
<tr>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-700 font-bold text-xs uppercase">AY</div>
<p className="text-sm font-bold">Aras Yapı</p>
</div>
</td>
<td className="px-6 py-4 text-xs font-medium">Google Ads Yönetimi</td>
<td className="px-6 py-4 text-xs font-semibold">₺28.000,00</td>
<td className="px-6 py-4 text-center">
<span className="text-xs font-medium text-gray-400">-</span>
</td>
<td className="px-6 py-4">
<span className="text-sm font-bold text-[#617289]">₺2.800,00</span>
</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex px-2 py-0.5 rounded text-[10px] font-bold bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">FATURA BEKLENİYOR</span>
</td>
</tr>
<tr>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-700 font-bold text-xs uppercase">EG</div>
<p className="text-sm font-bold">Elite Gıda</p>
</div>
</td>
<td className="px-6 py-4 text-xs font-medium">Brand Identity</td>
<td className="px-6 py-4 text-xs font-semibold">₺15.000,00</td>
<td className="px-6 py-4 text-center">
<div className="flex flex-col items-center">
<span className="text-xs font-medium">05.10.2023</span>
<span className="text-[9px] text-success font-bold uppercase tracking-tighter">Zamanında</span>
</div>
</td>
<td className="px-6 py-4">
<span className="text-sm font-bold text-success bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded">₺1.500,00</span>
</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">HAKEDİŞ ONAYLANDI</span>
</td>
</tr>
<tr>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 font-bold text-xs uppercase">MV</div>
<p className="text-sm font-bold">Mavi Vadi</p>
</div>
</td>
<td className="px-6 py-4 text-xs font-medium">Content Marketing</td>
<td className="px-6 py-4 text-xs font-semibold">₺32.000,00</td>
<td className="px-6 py-4 text-center">
<span className="text-xs font-medium text-gray-400">-</span>
</td>
<td className="px-6 py-4">
<span className="text-sm font-bold text-[#617289]">₺3.200,00</span>
</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex px-2 py-0.5 rounded text-[10px] font-bold bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">FATURA BEKLENİYOR</span>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-4 bg-gray-50/30 dark:bg-gray-800/20 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
<p className="text-xs text-[#617289] font-medium">Toplam 14 tamamlanmış satış hakedişi gösteriliyor.</p>
<div className="flex gap-2">
<button className="px-3 py-1 border border-gray-200 dark:border-gray-700 rounded text-xs font-bold hover:bg-gray-50 dark:hover:bg-gray-800">Önceki</button>
<button className="px-3 py-1 border border-gray-200 dark:border-gray-700 rounded text-xs font-bold hover:bg-gray-50 dark:hover:bg-gray-800">Sonraki</button>
</div>
</div>
</div>
<div className="lg:col-span-3 space-y-6">
<div className="bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm p-6">
<h3 className="font-bold text-sm mb-4 flex items-center gap-2 uppercase tracking-wide">
<span className="material-symbols-outlined text-primary text-xl">calendar_month</span>
                            Prim Ödeme Takvimi
                        </h3>
<div className="space-y-4">
<div className="flex items-center gap-4 p-3 bg-green-50 dark:bg-green-900/10 rounded-lg border border-green-100 dark:border-green-800/30">
<div className="flex flex-col items-center bg-white dark:bg-gray-800 px-2 py-1 rounded shadow-sm">
<span className="text-[10px] font-bold text-primary uppercase">Kas</span>
<span className="text-lg font-bold leading-none">11</span>
</div>
<div className="flex flex-col">
<p className="text-xs font-bold text-green-800 dark:text-green-300">Ödeme Günü</p>
<p className="text-[10px] text-[#617289]">Ekim ayı primleri ödenecek</p>
</div>
</div>
<div className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg opacity-60">
<div className="flex flex-col items-center bg-white dark:bg-gray-800 px-2 py-1 rounded shadow-sm">
<span className="text-[10px] font-bold text-[#617289] uppercase">Ara</span>
<span className="text-lg font-bold leading-none text-[#617289]">11</span>
</div>
<div className="flex flex-col">
<p className="text-xs font-bold text-gray-600 dark:text-gray-400">Sonraki Ödeme</p>
<p className="text-[10px] text-[#617289]">Kasım ayı prim hakedişleri</p>
</div>
</div>
</div>
</div>
<div className="bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm p-6">
<h3 className="font-bold text-sm mb-6 flex items-center gap-2 uppercase tracking-wide">
<span className="material-symbols-outlined text-primary text-xl">military_tech</span>
                            Performans Rozetleri
                        </h3>
<div className="grid grid-cols-3 gap-4">
<div className="flex flex-col items-center gap-1 group">
<div className="size-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-600 border-2 border-yellow-200 dark:border-yellow-700/50 group-hover:scale-110 transition-transform cursor-pointer">
<span className="material-symbols-outlined text-2xl">workspace_premium</span>
</div>
<span className="text-[9px] font-bold text-center">Hızlı Kapatıcı</span>
</div>
<div className="flex flex-col items-center gap-1 group">
<div className="size-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 border-2 border-blue-200 dark:border-blue-700/50 group-hover:scale-110 transition-transform cursor-pointer">
<span className="material-symbols-outlined text-2xl">stars</span>
</div>
<span className="text-[9px] font-bold text-center">Ayın Satışçısı</span>
</div>
<div className="flex flex-col items-center gap-1 group opacity-40">
<div className="size-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400 border-2 border-gray-200 dark:border-gray-700 group-hover:scale-110 transition-transform cursor-pointer">
<span className="material-symbols-outlined text-2xl">diamond</span>
</div>
<span className="text-[9px] font-bold text-center">Milyon Kulübü</span>
</div>
<div className="flex flex-col items-center gap-1 group">
<div className="size-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 border-2 border-green-200 dark:border-green-700/50 group-hover:scale-110 transition-transform cursor-pointer">
<span className="material-symbols-outlined text-2xl">handshake</span>
</div>
<span className="text-[9px] font-bold text-center">Güven Ustası</span>
</div>
<div className="flex flex-col items-center gap-1 group opacity-40">
<div className="size-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400 border-2 border-gray-200 dark:border-gray-700 group-hover:scale-110 transition-transform cursor-pointer">
<span className="material-symbols-outlined text-2xl">trending_up</span>
</div>
<span className="text-[9px] font-bold text-center">Rekor Kırıcı</span>
</div>
<div className="flex flex-col items-center gap-1 group">
<div className="size-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 border-2 border-purple-200 dark:border-purple-700/50 group-hover:scale-110 transition-transform cursor-pointer">
<span className="material-symbols-outlined text-2xl">verified</span>
</div>
<span className="text-[9px] font-bold text-center">Lider Satışçı</span>
</div>
</div>
</div>
<div className="bg-primary rounded-xl p-6 text-white shadow-lg shadow-primary/20">
<h4 className="font-bold text-sm mb-2">Kasım Hedefi</h4>
<p className="text-[11px] mb-4 opacity-90">Bu ayki hedefine ulaşmak için sadece 2 büyük satış kaldı!</p>
<button className="w-full bg-white text-primary rounded-lg py-2 text-xs font-bold hover:bg-blue-50 transition-colors">Hedefleri Gör</button>
</div>
</div>
</div>
</div>

    </div>
  );
}
