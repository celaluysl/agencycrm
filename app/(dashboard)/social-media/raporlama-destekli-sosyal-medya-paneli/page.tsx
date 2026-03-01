
"use client";

import React from "react";

export default function Page() {
  return (
    <div className="flex-1 flex flex-col #fcfcfd] dark:">
      
<div className="max-w-6xl mx-auto p-8 space-y-8 pb-20">

<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
<div className="bg-white dark:bg-[#1a232e] border border-[#dbe0e6] rounded-xl p-5 shadow-sm">
<div className="flex justify-between items-start mb-1">
<p className="text-[#617289] text-sm font-medium">Toplam Etkileşim</p>
<span className="material-symbols-outlined text-primary/40 text-lg">favorite</span>
</div>
<div className="flex items-end gap-2">
<p className="text-[#111418] dark:text-white text-xl font-black">428.402</p>
<span className="text-green-600 text-[10px] font-bold mb-1">+12.4%</span>
</div>
<p className="text-[#617289] text-[10px] mt-1">Son 30 gün verisi</p>
</div>
<div className="bg-white dark:bg-[#1a232e] border border-[#dbe0e6] rounded-xl p-5 shadow-sm">
<div className="flex justify-between items-start mb-1">
<p className="text-[#617289] text-sm font-medium">Takipçi Artışı</p>
<span className="material-symbols-outlined text-primary/40 text-lg">person_add</span>
</div>
<div className="flex items-end gap-2">
<p className="text-[#111418] dark:text-white text-xl font-black">+12.500</p>
<span className="text-green-600 text-[10px] font-bold mb-1">+5.2%</span>
</div>
<p className="text-[#617289] text-[10px] mt-1">Net kazanılan takipçi</p>
</div>
<div className="bg-white dark:bg-[#1a232e] border border-[#dbe0e6] rounded-xl p-5 shadow-sm">
<div className="flex justify-between items-start mb-1">
<p className="text-[#617289] text-sm font-medium">Ort. Etkileşim</p>
<span className="material-symbols-outlined text-primary/40 text-lg">insights</span>
</div>
<div className="flex items-end gap-2">
<p className="text-[#111418] dark:text-white text-xl font-black">4.2%</p>
<span className="text-red-600 text-[10px] font-bold mb-1">-0.3%</span>
</div>
<p className="text-[#617289] text-[10px] mt-1">Hesap ortalaması</p>
</div>
<div className="bg-white dark:bg-[#1a232e] border border-[#dbe0e6] rounded-xl p-5 shadow-sm">
<div className="flex justify-between items-start mb-1">
<p className="text-[#617289] text-sm font-medium">Yayınlanan Post</p>
<span className="material-symbols-outlined text-primary/40 text-lg">grid_on</span>
</div>
<div className="flex items-end gap-2">
<p className="text-[#111418] dark:text-white text-xl font-black">156</p>
<span className="text-green-600 text-[10px] font-bold mb-1">94% Verim</span>
</div>
<p className="text-[#617289] text-[10px] mt-1">Bu ay planlanan</p>
</div>
<div className="bg-white dark:bg-[#1a232e] border border-[#dbe0e6] rounded-xl p-5 shadow-sm ring-2 ring-primary/5">
<div className="flex justify-between items-start mb-1">
<p className="text-[#617289] text-sm font-medium">Raporlama Verimi</p>
<span className="material-symbols-outlined text-primary text-lg">assessment</span>
</div>
<div className="flex items-end gap-2">
<p className="text-[#111418] dark:text-white text-xl font-black">85%</p>
<span className="text-primary text-[10px] font-bold mb-1">Hedef: 20</span>
</div>
<p className="text-[#617289] text-[10px] mt-1">17/20 Tamamlandı</p>
</div>
</section>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="lg:col-span-2 space-y-8">
<div className="space-y-4">
<h3 className="text-[#111418] dark:text-white text-xl font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-primary">calendar_view_week</span>
                            Haftalık Paylaşım Durumu (Özet)
                        </h3>
<div className="bg-white dark:bg-[#1a232e] border border-[#dbe0e6] rounded-xl overflow-hidden shadow-sm">
<table className="w-full text-left border-collapse">
<thead className="bg-gray-50 dark:bg-gray-800/50 border-b border-[#dbe0e6]">
<tr>
<th className="px-6 py-3 text-xs font-bold text-[#617289] uppercase tracking-wider">Müşteri / Platform</th>
<th className="px-6 py-3 text-xs font-bold text-[#617289] uppercase tracking-wider">İçerik Türü</th>
<th className="px-6 py-3 text-xs font-bold text-[#617289] uppercase tracking-wider">Durum</th>
<th className="px-6 py-3 text-xs font-bold text-[#617289] uppercase tracking-wider">Tarih</th>
</tr>
</thead>
<tbody className="divide-y divide-[#dbe0e6]">
<tr>
<td className="px-6 py-4">
<p className="text-sm font-bold text-[#111418] dark:text-white">TrendStore E-Ticaret</p>
<p className="text-[11px] text-[#617289]">Instagram / Carousel</p>
</td>
<td className="px-6 py-4">
<span className="text-xs font-medium text-[#111418] dark:text-white">İndirim Duyurusu</span>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-yellow-100 text-yellow-800">ONAY BEKLİYOR</span>
</td>
<td className="px-6 py-4">
<p className="text-xs font-medium text-[#111418] dark:text-white">18 Haz 2024</p>
</td>
</tr>
<tr>
<td className="px-6 py-4">
<p className="text-sm font-bold text-[#111418] dark:text-white">Elite Gayrimenkul</p>
<p className="text-[11px] text-[#617289]">LinkedIn / Image</p>
</td>
<td className="px-6 py-4">
<span className="text-xs font-medium text-[#111418] dark:text-white">Haftalık Rapor</span>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-primary/10 text-primary">PLANLANDI</span>
</td>
<td className="px-6 py-4">
<p className="text-xs font-medium text-[#111418] dark:text-white">19 Haz 2024</p>
</td>
</tr>
<tr>
<td className="px-6 py-4">
<p className="text-sm font-bold text-[#111418] dark:text-white">CosmoCare</p>
<p className="text-[11px] text-[#617289]">TikTok / Video</p>
</td>
<td className="px-6 py-4">
<span className="text-xs font-medium text-[#111418] dark:text-white">Ürün Tanıtımı</span>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400">TASLAK</span>
</td>
<td className="px-6 py-4">
<p className="text-xs font-medium text-[#111418] dark:text-white">20 Haz 2024</p>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between">
<h3 className="text-[#111418] dark:text-white text-xl font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-primary">assignment</span>
                                Sosyal Medya Görev Listesi
                            </h3>
<button className="px-4 py-2 bg-primary hover:bg-primary/90 text-white text-xs font-bold rounded-lg transition-all flex items-center gap-2">
<span className="material-symbols-outlined text-sm">add</span>
                                Yeni Görev
                            </button>
</div>
<div className="bg-white dark:bg-[#1a232e] border border-[#dbe0e6] rounded-xl overflow-hidden shadow-sm">
<table className="w-full text-left border-collapse">
<thead className="bg-gray-50 dark:bg-gray-800/50 border-b border-[#dbe0e6]">
<tr>
<th className="px-6 py-3 text-xs font-bold text-[#617289] uppercase tracking-wider">Görev / Müşteri</th>
<th className="px-6 py-3 text-xs font-bold text-[#617289] uppercase tracking-wider">Öncelik</th>
<th className="px-6 py-3 text-xs font-bold text-[#617289] uppercase tracking-wider">Son Tarih</th>
<th className="px-6 py-3 text-xs font-bold text-[#617289] uppercase tracking-wider">Durum</th>
<th className="px-6 py-3 text-xs font-bold text-[#617289] uppercase tracking-wider text-right">Eylem</th>
</tr>
</thead>
<tbody className="divide-y divide-[#dbe0e6]">
<tr>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<input className="rounded text-primary focus:ring-primary border-gray-300" type="checkbox" />
<div>
<p className="text-sm font-bold text-[#111418] dark:text-white">Görsel Tasarımı (Post)</p>
<p className="text-[11px] text-[#617289]">TrendStore • Babalar Günü</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400">YÜKSEK</span>
</td>
<td className="px-6 py-4 text-xs font-medium text-[#111418] dark:text-white">Bugün 17:00</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400">İŞLEMDE</span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-primary text-[11px] font-bold hover:underline">Detay</button>
</td>
</tr>
<tr>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<input className="rounded text-primary focus:ring-primary border-gray-300" type="checkbox" />
<div>
<p className="text-sm font-bold text-[#111418] dark:text-white">Story Planlama</p>
<p className="text-[11px] text-[#617289]">Elite Gayrimenkul • Proje Lansmanı</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400">ORTA</span>
</td>
<td className="px-6 py-4 text-xs font-medium text-[#111418] dark:text-white">Yarın</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400">BEKLEMEDE</span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-primary text-[11px] font-bold hover:underline">Detay</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<div className="space-y-6">
<div className="space-y-3">
<h3 className="text-[#111418] dark:text-white text-lg font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-primary">timer</span>
                            Aktif Görevlerim
                        </h3>
<div className="bg-white dark:bg-[#1a232e] border border-[#dbe0e6] rounded-xl p-4 space-y-3 shadow-sm">
<div className="p-3 rounded-lg border border-primary/20 bg-primary/5 dark:bg-primary/10">
<div className="flex items-start justify-between mb-2">
<div>
<p className="text-[10px] font-bold text-primary uppercase tracking-wide">TRENDSTORE</p>
<p className="text-sm font-bold text-[#111418] dark:text-white">Görsel Tasarımı</p>
</div>
<span className="text-lg font-black text-primary active-timer">00:24:15</span>
</div>
<button className="w-full flex items-center justify-center gap-1.5 py-1.5 bg-red-500 hover:bg-red-600 text-white text-[11px] font-bold rounded-lg transition-colors">
<span className="material-symbols-outlined text-[16px] font-bold">stop</span> DURDUR
                                </button>
</div>
</div>
</div>
<div className="space-y-3">
<h3 className="text-[#111418] dark:text-white text-lg font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-primary">pending_actions</span>
                            Müşteri Onayı Bekleyenler
                        </h3>
<div className="bg-white dark:bg-[#1a232e] border border-[#dbe0e6] rounded-xl p-4 space-y-3 shadow-sm">
<div className="flex flex-col gap-3 p-2 rounded-lg bg-gray-50 dark:bg-gray-800/30 border border-gray-100 dark:border-gray-800">
<div className="flex items-start gap-3">
<div className="size-12 rounded bg-cover bg-center bg-gray-200 shrink-0" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAdhJnP5cP9jMNiYBaurv71n2W1T0Qanje2TcfVynIlmSioTW3KZGDcXhenyBd3rCtyHVm788lgVspUXH3Ow_iX5Zu9UeZ-fjh0UdFCEc29Nq2vGSoMSbH_H3YGD_WT0tKM8k8IB61o1s7eAEosMBBxLt67-wRaIrcQNmJC7oN5oYQ9azBqpKiNjz1_620dG06GOiEo2MqUL9WvIusKl4Ci7kwJlAqnqkoyPLNQFF8SIMD0UknG-i-pSkkes1pTfxTcID9R7MmOG3GK')" }}></div>
<div className="flex-1">
<p className="text-xs font-bold text-[#111418] dark:text-white">Ürün Tanıtım Görseli</p>
<p className="text-[10px] text-[#617289]">CosmoCare • Facebook</p>
</div>
</div>
<div className="flex gap-2">
<button className="flex-1 text-[10px] font-bold text-[#617289] bg-white border border-[#dbe0e6] py-1 rounded hover:bg-gray-100">REVİZYON</button>
<button className="flex-1 text-[10px] font-bold text-white bg-green-500 py-1 rounded hover:bg-green-600">HATIRLAT</button>
</div>
</div>
</div>
</div>
<div className="space-y-3">
<h3 className="text-[#111418] dark:text-white text-lg font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-primary">speed</span>
                            Yaklaşan Raporlar
                        </h3>
<div className="bg-white dark:bg-[#1a232e] border border-[#dbe0e6] rounded-xl p-4 space-y-3 shadow-sm">
<div className="p-3 rounded-lg border border-red-200 bg-red-50 dark:bg-red-900/10 dark:border-red-900/30">
<div className="flex items-center gap-2 mb-1">
<span className="material-symbols-outlined text-red-600 text-lg">priority_high</span>
<p className="text-xs font-bold text-red-800 dark:text-red-400 uppercase tracking-tight">Gecikme Uyarısı</p>
</div>
<p className="text-sm font-bold text-[#111418] dark:text-white">CosmoCare Aylık Rapor</p>
<p className="text-[11px] text-red-600 font-semibold mt-0.5">Teslime 1 Gün Kaldı</p>
</div>
<div className="p-3 rounded-lg border border-yellow-200 bg-yellow-50 dark:bg-yellow-900/10 dark:border-yellow-900/30">
<div className="flex items-center gap-2 mb-1">
<span className="material-symbols-outlined text-yellow-600 text-lg">schedule</span>
<p className="text-xs font-bold text-yellow-800 dark:text-yellow-400 uppercase tracking-tight">Hazırlanıyor</p>
</div>
<p className="text-sm font-bold text-[#111418] dark:text-white">TrendStore Performans</p>
<p className="text-[11px] text-[#617289] font-medium mt-0.5">Teslime 3 Gün Kaldı</p>
</div>
</div>
</div>
<div className="bg-primary/5 dark:bg-primary/10 border border-primary/10 rounded-xl p-4">
<p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Hızlı İşlemler</p>
<div className="grid grid-cols-2 gap-2">
<button className="flex flex-col items-center justify-center p-2 bg-white dark:bg-[#1a232e] rounded-lg border border-[#dbe0e6] hover:border-primary transition-all group">
<span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">auto_fix</span>
<span className="text-[10px] font-bold mt-1">AI Metin</span>
</button>
<button className="flex flex-col items-center justify-center p-2 bg-white dark:bg-[#1a232e] rounded-lg border border-[#dbe0e6] hover:border-primary transition-all group">
<span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">schedule_send</span>
<span className="text-[10px] font-bold mt-1">Zamanla</span>
</button>
</div>
</div>
</div>
</div>
<div className="pt-4">
<details className="group bg-white dark:bg-[#1a232e] border border-[#dbe0e6] rounded-xl shadow-sm overflow-hidden" open>
<summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors border-b border-[#dbe0e6]">
<h3 className="text-[#111418] dark:text-white text-lg font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-green-500">check_circle</span>
                            Tamamlanan Görevler (Son 5 İş)
                        </h3>
<span className="material-symbols-outlined transition-transform group-open:rotate-180 text-[#617289]">expand_more</span>
</summary>
<div className="divide-y divide-[#dbe0e6]">
<div className="px-6 py-4 flex items-center justify-between bg-gray-50/30 dark:bg-gray-800/10">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-green-500 text-xl">task_alt</span>
<div>
<p className="text-sm font-bold text-[#111418] dark:text-white line-through opacity-60">Instagram Akış Planlaması Bitti</p>
<p className="text-[11px] text-[#617289]">TrendStore • 15 Haz 2024</p>
</div>
</div>
<span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded uppercase">TAMAMLANDI</span>
</div>
<div className="px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-green-500 text-xl">task_alt</span>
<div>
<p className="text-sm font-bold text-[#111418] dark:text-white line-through opacity-60">Influencer Listesi Hazırlandı</p>
<p className="text-[11px] text-[#617289]">CosmoCare • 14 Haz 2024</p>
</div>
</div>
<span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded uppercase">TAMAMLANDI</span>
</div>
</div>
</details>
</div>
</div>

    </div>
  );
}
