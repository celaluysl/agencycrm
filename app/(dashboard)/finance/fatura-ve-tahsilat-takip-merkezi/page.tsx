
"use client";

import React from "react";

export default function Page() {
  return (
    <div className="flex-1 flex flex-col">
      

<div className="p-8 space-y-6">
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white dark:bg-[#1a2432] p-6 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm flex flex-col gap-1">
<p className="text-[#617289] text-[10px] font-bold uppercase tracking-wider">Toplam Kesilen Fatura</p>
<p className="text-2xl font-bold">₺2.450.000</p>
<div className="mt-2 flex items-center gap-1 text-[10px] text-primary font-bold">
<span className="material-symbols-outlined text-xs">description</span> 124 Adet Fatura
                    </div>
</div>
<div className="bg-white dark:bg-[#1a2432] p-6 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm flex flex-col gap-1">
<p className="text-[#617289] text-[10px] font-bold uppercase tracking-wider">Tahsil Edilen</p>
<p className="text-2xl font-bold text-success">₺1.840.200</p>
<div className="mt-2 flex items-center gap-1 text-[10px] text-success font-bold">
<span className="material-symbols-outlined text-xs">check_circle</span> %75 Tahsilat Oranı
                    </div>
</div>
<div className="bg-white dark:bg-[#1a2432] p-6 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm flex flex-col gap-1">
<p className="text-[#617289] text-[10px] font-bold uppercase tracking-wider">Bekleyen Tahsilat</p>
<p className="text-2xl font-bold text-warning">₺453.600</p>
<div className="mt-2 flex items-center gap-1 text-[10px] text-warning font-bold">
<span className="material-symbols-outlined text-xs">schedule</span> 18 Bekleyen İşlem
                    </div>
</div>
<div className="bg-white dark:bg-[#1a2432] p-6 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm flex flex-col gap-1">
<p className="text-[#617289] text-[10px] font-bold uppercase tracking-wider">Geciken Ödemeler</p>
<p className="text-2xl font-bold text-danger">₺156.200</p>
<div className="mt-2 flex items-center gap-1 text-[10px] text-danger font-bold">
<span className="material-symbols-outlined text-xs">priority_high</span> 5 Kritik Gecikme
                    </div>
</div>
</section>
<section className="bg-white dark:bg-[#1a2432] p-4 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm flex flex-wrap items-center gap-4">
<div className="flex flex-col gap-1 flex-1 min-w-[200px]">
<label className="text-[10px] font-bold text-[#617289] uppercase">Tarih Aralığı</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#617289]">calendar_today</span>
<input className="w-full pl-9 pr-3 py-2 text-xs font-medium border-gray-200 dark:border-gray-700 dark:bg-gray-800 rounded-lg focus:ring-primary focus:border-primary" type="text" value="01 Eki 2023 - 31 Eki 2023" />
</div>
</div>
<div className="flex flex-col gap-1 flex-1 min-w-[200px]">
<label className="text-[10px] font-bold text-[#617289] uppercase">Müşteri</label>
<select className="w-full py-2 text-xs font-medium border-gray-200 dark:border-gray-700 dark:bg-gray-800 rounded-lg focus:ring-primary focus:border-primary">
<option>Tüm Müşteriler</option>
<option>Acme Corp</option>
<option>Global Tech</option>
<option>Luna Agency</option>
</select>
</div>
<div className="flex flex-col gap-1 flex-1 min-w-[150px]">
<label className="text-[10px] font-bold text-[#617289] uppercase">Fatura Durumu</label>
<select className="w-full py-2 text-xs font-medium border-gray-200 dark:border-gray-700 dark:bg-gray-800 rounded-lg focus:ring-primary focus:border-primary">
<option>Tüm Durumlar</option>
<option>Ödendi</option>
<option>Bekliyor</option>
<option>Gecikti</option>
</select>
</div>
<div className="flex items-end h-full mt-4">
<button className="bg-primary text-white px-6 py-2 rounded-lg text-xs font-bold hover:bg-blue-700 transition-colors shadow-sm">
                        Filtrele
                    </button>
</div>
</section>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
<div className="lg:col-span-9 bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 overflow-hidden shadow-sm">
<div className="px-6 py-5 border-b border-[#f0f2f4] dark:border-gray-800 flex justify-between items-center">
<h3 className="font-bold text-base flex items-center gap-2">
<span className="material-symbols-outlined text-primary">receipt_long</span>
                            Faturalar
                        </h3>
<div className="flex gap-2">
<button className="flex items-center gap-1 text-xs font-bold text-[#617289] hover:text-primary transition-colors">
<span className="material-symbols-outlined text-sm">download</span> Dışa Aktar
                            </button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50/50 dark:bg-gray-800/50">
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Fatura No</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Müşteri Adı</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Kesim / Son Ödeme</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Tutar / KDV</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Durum</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider text-right">Aksiyonlar</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 dark:divide-gray-800">
<tr>
<td className="px-6 py-4 text-xs font-bold text-primary">#INV-2023-084</td>
<td className="px-6 py-4">
<p className="text-sm font-bold">Acme Corp</p>
<p className="text-[10px] text-[#617289]">Kurumsal Danışmanlık</p>
</td>
<td className="px-6 py-4">
<p className="text-xs font-medium">12.10.2023</p>
<p className="text-[10px] text-[#617289]">S.Ö: 26.10.2023</p>
</td>
<td className="px-6 py-4">
<p className="text-sm font-bold">₺45.200</p>
<p className="text-[10px] text-[#617289]">%20 KDV Dahil</p>
</td>
<td className="px-6 py-4">
<span className="inline-flex px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">ÖDENDİ</span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-2">
<button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-[#617289] hover:text-primary" title="PDF İndir">
<span className="material-symbols-outlined text-sm">download</span>
</button>
<button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-[#617289] hover:text-primary" title="Hatırlatıcı Gönder">
<span className="material-symbols-outlined text-sm">forward_to_inbox</span>
</button>
<button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-[#617289] hover:text-success" title="Ödendi İşaretle">
<span className="material-symbols-outlined text-sm">check_circle</span>
</button>
</div>
</td>
</tr>
<tr>
<td className="px-6 py-4 text-xs font-bold text-primary">#INV-2023-085</td>
<td className="px-6 py-4">
<p className="text-sm font-bold">Global Tech</p>
<p className="text-[10px] text-[#617289]">Yazılım Geliştirme</p>
</td>
<td className="px-6 py-4">
<p className="text-xs font-medium">20.10.2023</p>
<p className="text-[10px] text-danger font-bold">S.Ö: 03.11.2023</p>
</td>
<td className="px-6 py-4">
<p className="text-sm font-bold">₺128.500</p>
<p className="text-[10px] text-[#617289]">%20 KDV Dahil</p>
</td>
<td className="px-6 py-4">
<span className="inline-flex px-2 py-0.5 rounded text-[10px] font-bold bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">BEKLİYOR</span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-2">
<button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-[#617289] hover:text-primary" title="PDF İndir">
<span className="material-symbols-outlined text-sm">download</span>
</button>
<button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-[#617289] hover:text-primary" title="Hatırlatıcı Gönder">
<span className="material-symbols-outlined text-sm">forward_to_inbox</span>
</button>
<button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-[#617289] hover:text-success" title="Ödendi İşaretle">
<span className="material-symbols-outlined text-sm">check_circle</span>
</button>
</div>
</td>
</tr>
<tr>
<td className="px-6 py-4 text-xs font-bold text-primary">#INV-2023-086</td>
<td className="px-6 py-4">
<p className="text-sm font-bold">Luna Agency</p>
<p className="text-[10px] text-[#617289]">SEO Hizmetleri</p>
</td>
<td className="px-6 py-4">
<p className="text-xs font-medium">15.10.2023</p>
<p className="text-[10px] text-danger font-bold">S.Ö: 25.10.2023</p>
</td>
<td className="px-6 py-4">
<p className="text-sm font-bold">₺12.400</p>
<p className="text-[10px] text-[#617289]">%20 KDV Dahil</p>
</td>
<td className="px-6 py-4">
<span className="inline-flex px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">GECİKTİ</span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-2">
<button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-[#617289] hover:text-primary" title="PDF İndir">
<span className="material-symbols-outlined text-sm">download</span>
</button>
<button className="p-1.5 bg-primary/10 rounded text-primary hover:bg-primary hover:text-white transition-colors" title="Hatırlatıcı Gönder">
<span className="material-symbols-outlined text-sm font-bold">forward_to_inbox</span>
</button>
<button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-[#617289] hover:text-success" title="Ödendi İşaretle">
<span className="material-symbols-outlined text-sm">check_circle</span>
</button>
</div>
</td>
</tr>
<tr>
<td className="px-6 py-4 text-xs font-bold text-primary">#INV-2023-087</td>
<td className="px-6 py-4">
<p className="text-sm font-bold">Stellar Design</p>
<p className="text-[10px] text-[#617289]">Branding Projesi</p>
</td>
<td className="px-6 py-4">
<p className="text-xs font-medium">25.10.2023</p>
<p className="text-[10px] text-[#617289]">S.Ö: 08.11.2023</p>
</td>
<td className="px-6 py-4">
<p className="text-sm font-bold">₺78.000</p>
<p className="text-[10px] text-[#617289]">%20 KDV Dahil</p>
</td>
<td className="px-6 py-4">
<span className="inline-flex px-2 py-0.5 rounded text-[10px] font-bold bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">BEKLİYOR</span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-2">
<button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-[#617289] hover:text-primary" title="PDF İndir">
<span className="material-symbols-outlined text-sm">download</span>
</button>
<button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-[#617289] hover:text-primary" title="Hatırlatıcı Gönder">
<span className="material-symbols-outlined text-sm">forward_to_inbox</span>
</button>
<button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-[#617289] hover:text-success" title="Ödendi İşaretle">
<span className="material-symbols-outlined text-sm">check_circle</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-4 bg-gray-50/50 dark:bg-gray-800/50 border-t border-[#f0f2f4] dark:border-gray-800 flex justify-between items-center">
<p className="text-xs text-[#617289]">Toplam 124 kayıttan 1-10 arası gösteriliyor</p>
<div className="flex gap-2">
<button className="p-1.5 rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-[#617289] disabled:opacity-50">
<span className="material-symbols-outlined text-sm">chevron_left</span>
</button>
<button className="p-1.5 rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-[#617289]">
<span className="material-symbols-outlined text-sm">chevron_right</span>
</button>
</div>
</div>
</div>
<div className="lg:col-span-3 space-y-6">
<button className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-blue-700 text-white rounded-xl py-4 text-sm font-bold transition-all shadow-lg shadow-primary/20">
<span className="material-symbols-outlined text-lg">add_circle</span>
                        Hızlı Fatura Oluştur
                    </button>
<div className="bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm p-6">
<h3 className="font-bold text-sm mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-xl">event_upcoming</span>
                            Yaklaşan Tahsilatlar
                        </h3>
<div className="space-y-4">
<div className="flex items-start justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
<div>
<p className="text-xs font-bold">Acme Corp</p>
<p className="text-[10px] text-[#617289]">28 Ekim - #INV-088</p>
</div>
<p className="text-sm font-bold text-primary">₺24.500</p>
</div>
<div className="flex items-start justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
<div>
<p className="text-xs font-bold">TechFlow</p>
<p className="text-[10px] text-[#617289]">30 Ekim - #INV-089</p>
</div>
<p className="text-sm font-bold text-primary">₺18.900</p>
</div>
<div className="flex items-start justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
<div>
<p className="text-xs font-bold">Aria Ltd</p>
<p className="text-[10px] text-[#617289]">01 Kasım - #INV-090</p>
</div>
<p className="text-sm font-bold text-primary">₺45.000</p>
</div>
</div>
<button className="w-full mt-4 text-center py-2 text-[10px] font-bold text-primary hover:underline uppercase tracking-wider">
                            Tümünü Gör
                        </button>
</div>
<div className="bg-primary/5 rounded-xl border border-primary/20 p-6">
<div className="flex items-center gap-3 mb-4">
<div className="size-10 rounded-lg bg-primary text-white flex items-center justify-center">
<span className="material-symbols-outlined">trending_up</span>
</div>
<div>
<h4 className="text-sm font-bold">Tahsilat Performansı</h4>
<p className="text-[10px] text-[#617289]">Bu ay geçen aya göre</p>
</div>
</div>
<p className="text-2xl font-bold text-primary">+12.5%</p>
<p className="text-[10px] text-[#617289] mt-1 italic">Nakit akışınız stabil bir trend izliyor.</p>
</div>
</div>
</div>
</div>

    </div>
  );
}
