
"use client";

import React from "react";

export default function Page() {
  return (
    <div className="flex-1 flex flex-col flex-1 flex flex-col overflow-y-auto custom-scrollbar">
      

<div className="p-8 space-y-6">
<section className="bg-white dark:bg-[#1a2432] p-4 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm flex flex-wrap items-center gap-4">
<div className="flex flex-col gap-1 flex-1 min-w-[300px]">
<label className="text-[10px] font-bold text-[#617289] uppercase">Müşteri Arama</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#617289]">search</span>
<input className="w-full pl-9 pr-3 py-2 text-xs font-medium border-gray-200 dark:border-gray-700 dark:bg-gray-800 rounded-lg focus:ring-primary focus:border-primary" placeholder="Müşteri adı veya vergi numarası ile ara..." type="text" />
</div>
</div>
<div className="flex flex-col gap-1 w-48">
<label className="text-[10px] font-bold text-[#617289] uppercase">Bakiye Durumu</label>
<select className="w-full py-2 text-xs font-medium border-gray-200 dark:border-gray-700 dark:bg-gray-800 rounded-lg focus:ring-primary focus:border-primary">
<option>Tümü</option>
<option>Sadece Borçlu</option>
<option>Sadece Alacaklı</option>
<option>Bakiyesi Sıfır</option>
</select>
</div>
<div className="flex items-end h-full mt-4">
<button className="bg-primary text-white px-6 py-2 rounded-lg text-xs font-bold hover:bg-blue-700 transition-colors shadow-sm">
                        Filtrele
                    </button>
</div>
</section>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
<div className="lg:col-span-8 space-y-6">
<div className="bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 overflow-hidden shadow-sm">
<div className="px-6 py-5 border-b border-[#f0f2f4] dark:border-gray-800 flex justify-between items-center">
<h3 className="font-bold text-base flex items-center gap-2">
<span className="material-symbols-outlined text-primary">groups</span>
                            Müşteri Listesi
                        </h3>
<span className="text-[10px] font-bold text-[#617289] uppercase tracking-wider">Toplam 142 Kayıt</span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50/50 dark:bg-gray-800/50">
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Müşteri Adı</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider text-right">Toplam Borç</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider text-right">Toplam Alacak</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider text-right">Net Bakiye</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Son İşlem</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 dark:divide-gray-800">
<tr className="hover:bg-blue-50/30 dark:hover:bg-blue-900/10 cursor-pointer transition-colors border-l-2 border-l-primary">
<td className="px-6 py-4">
<p className="text-sm font-bold">Acme Corp Teknoloji A.Ş.</p>
<p className="text-[10px] text-[#617289]">VN: 1234567890</p>
</td>
<td className="px-6 py-4 text-right text-sm font-medium">₺124.500,00</td>
<td className="px-6 py-4 text-right text-sm font-medium">₺85.000,00</td>
<td className="px-6 py-4 text-right text-sm font-bold text-danger">₺39.500,00 (B)</td>
<td className="px-6 py-4 text-[11px] font-medium text-[#617289]">24.10.2023</td>
</tr>
<tr className="hover:bg-blue-50/30 dark:hover:bg-blue-900/10 cursor-pointer transition-colors border-l-2 border-l-transparent">
<td className="px-6 py-4">
<p className="text-sm font-bold">Global Tech Lojistik</p>
<p className="text-[10px] text-[#617289]">VN: 0987654321</p>
</td>
<td className="px-6 py-4 text-right text-sm font-medium">₺42.000,00</td>
<td className="px-6 py-4 text-right text-sm font-medium">₺42.000,00</td>
<td className="px-6 py-4 text-right text-sm font-bold text-success">₺0,00</td>
<td className="px-6 py-4 text-[11px] font-medium text-[#617289]">22.10.2023</td>
</tr>
<tr className="hover:bg-blue-50/30 dark:hover:bg-blue-900/10 cursor-pointer transition-colors border-l-2 border-l-transparent">
<td className="px-6 py-4">
<p className="text-sm font-bold">Luna Agency Tasarım</p>
<p className="text-[10px] text-[#617289]">VN: 5544332211</p>
</td>
<td className="px-6 py-4 text-right text-sm font-medium">₺12.800,00</td>
<td className="px-6 py-4 text-right text-sm font-medium">₺15.000,00</td>
<td className="px-6 py-4 text-right text-sm font-bold text-primary">₺2.200,00 (A)</td>
<td className="px-6 py-4 text-[11px] font-medium text-[#617289]">18.10.2023</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 overflow-hidden shadow-sm">
<div className="px-6 py-5 border-b border-[#f0f2f4] dark:border-gray-800 flex justify-between items-center">
<div className="flex items-center gap-3">
<h3 className="font-bold text-base flex items-center gap-2">
<span className="material-symbols-outlined text-primary">analytics</span>
                                Cari Ekstre: Acme Corp
                            </h3>
<span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[10px] font-bold text-[#617289]">01.10.2023 - 31.10.2023</span>
</div>
<button className="flex items-center gap-1 text-xs font-bold text-[#617289] hover:text-primary transition-colors">
<span className="material-symbols-outlined text-sm">print</span> PDF Yazdır
                        </button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50/50 dark:bg-gray-800/50">
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Tarih</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">İşlem / Belge No</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider text-right">Borç</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider text-right">Alacak</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider text-right">Bakiye</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 dark:divide-gray-800">
<tr>
<td className="px-6 py-4 text-xs font-medium">24.10.2023</td>
<td className="px-6 py-4">
<p className="text-xs font-bold uppercase">Satış Faturası</p>
<p className="text-[10px] text-[#617289]">FAT-2023-00892</p>
</td>
<td className="px-6 py-4 text-right text-xs font-bold">₺24.500,00</td>
<td className="px-6 py-4 text-right text-xs font-medium">-</td>
<td className="px-6 py-4 text-right text-xs font-bold">₺39.500,00 (B)</td>
</tr>
<tr>
<td className="px-6 py-4 text-xs font-medium">15.10.2023</td>
<td className="px-6 py-4">
<p className="text-xs font-bold uppercase">Tahsilat (Banka)</p>
<p className="text-[10px] text-[#617289]">Garanti BBVA - Dekont: 4412</p>
</td>
<td className="px-6 py-4 text-right text-xs font-medium">-</td>
<td className="px-6 py-4 text-right text-xs font-bold text-success">₺50.000,00</td>
<td className="px-6 py-4 text-right text-xs font-bold">₺15.000,00 (B)</td>
</tr>
<tr>
<td className="px-6 py-4 text-xs font-medium">05.10.2023</td>
<td className="px-6 py-4">
<p className="text-xs font-bold uppercase">Satış Faturası</p>
<p className="text-[10px] text-[#617289]">FAT-2023-00750</p>
</td>
<td className="px-6 py-4 text-right text-xs font-bold">₺65.000,00</td>
<td className="px-6 py-4 text-right text-xs font-medium">-</td>
<td className="px-6 py-4 text-right text-xs font-bold">₺65.000,00 (B)</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<div className="lg:col-span-4 space-y-6">
<div className="bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm p-6">
<h3 className="font-bold text-sm mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-xl">fact_check</span>
                            Cari Mutabakat
                        </h3>
<p className="text-[11px] text-[#617289] mb-4">Seçilen müşteri ile bakiye doğrulaması yapmak için resmi mutabakat mektubu gönderin.</p>
<div className="space-y-3 mb-6">
<div className="flex justify-between text-[11px]">
<span className="text-[#617289]">Son Mutabakat:</span>
<span className="font-bold">12 Eylül 2023</span>
</div>
<div className="flex justify-between text-[11px]">
<span className="text-[#617289]">Durum:</span>
<span className="text-success font-bold">Onaylandı</span>
</div>
</div>
<button className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-blue-700 text-white rounded-lg py-3 text-xs font-bold transition-all shadow-md">
<span className="material-symbols-outlined text-sm">send</span>
                            MUTABAKAT GÖNDER
                        </button>
</div>
<div className="bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm p-6">
<h3 className="font-bold text-sm mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-xl">speed</span>
                            Ödeme Performans Skoru
                        </h3>
<div className="flex flex-col items-center">
<div className="relative size-32 mb-6">
<svg className="size-full -rotate-90" viewBox="0 0 36 36">
<circle className="stroke-gray-100 dark:stroke-gray-800 fill-none" cx="18" cy="18" r="15.915" strokeWidth="4"></circle>
<circle className="stroke-success fill-none" cx="18" cy="18" r="15.915" strokeDasharray="88 100" strokeDashoffset="0" strokeLinecap="round" strokeWidth="4"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-2xl font-bold">88%</span>
<span className="text-[9px] text-success font-bold uppercase">Yüksek Skor</span>
</div>
</div>
<div className="w-full space-y-4">
<p className="text-[11px] text-[#617289] text-center leading-relaxed">Müşterinin son 12 ay içindeki faturaları vadesinde ödeme oranı.</p>
<div className="pt-4 border-t border-gray-50 dark:border-gray-800">
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] font-bold text-[#617289]">Ortalama Tahsilat Süresi</span>
<span className="text-xs font-bold">4.2 Gün</span>
</div>
<div className="w-full bg-gray-100 dark:bg-gray-800 h-1.5 rounded-full overflow-hidden">
<div className="bg-success h-full w-[15%]"></div>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-[10px] font-bold text-[#617289]">Gecikmiş Fatura Sayısı</span>
<span className="text-xs font-bold text-danger">0</span>
</div>
</div>
</div>
</div>
<div className="bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm p-5">
<h3 className="font-bold text-sm mb-3">Müşteri Notu</h3>
<textarea className="w-full h-24 text-[11px] bg-gray-50 dark:bg-gray-800 border-none rounded-lg p-3 focus:ring-1 focus:ring-primary" placeholder="Finansal notlar ekleyin..."></textarea>
<button className="w-full mt-2 py-2 text-[10px] font-bold text-primary hover:underline uppercase tracking-wider">Notu Kaydet</button>
</div>
</div>
</div>
</div>

    </div>
  );
}
