
"use client";

import React from "react";

export default function Page() {
  return (
    <div className="flex-1 flex flex-col flex-1 overflow-y-auto p-4 md:p-8 space-y-8">
      
{/*  PageHeading  */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div className="flex flex-col gap-2">
<h1 className="text-3xl font-black tracking-tight text-[#111418] dark:text-white">Kişisel Performans Paneli</h1>
<p className="text-[#617289] dark:text-gray-400">Hoş geldin Caner! Bu ayki verimlilik skorun geçen aya göre <span className="text-green-600 font-bold">%12 daha yüksek.</span></p>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center justify-center rounded-lg bg-white dark:bg-gray-800 border border-[#dbe0e6] dark:border-gray-700 px-4 py-2 text-sm font-bold shadow-sm">
                        Son 30 Gün
                    </button>
<button className="flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white shadow-sm">
                        Raporu Paylaş
                    </button>
</div>
</div>
{/*  Stats (KPI Cards)  */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-gray-900 border border-[#dbe0e6] dark:border-gray-800 shadow-sm">
<p className="text-[#617289] dark:text-gray-400 text-sm font-semibold uppercase tracking-wider">Tamamlanan Görev</p>
<div className="flex items-baseline gap-2">
<p className="text-3xl font-black text-[#111418] dark:text-white">124</p>
<p className="text-green-600 text-sm font-bold">+12%</p>
</div>
</div>
<div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-gray-900 border border-[#dbe0e6] dark:border-gray-800 shadow-sm">
<p className="text-[#617289] dark:text-gray-400 text-sm font-semibold uppercase tracking-wider">Ort. Bitirme Süresi</p>
<div className="flex items-baseline gap-2">
<p className="text-3xl font-black text-[#111418] dark:text-white">4.2 Saat</p>
<p className="text-red-500 text-sm font-bold">-0.5saat</p>
</div>
</div>
<div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-gray-900 border border-[#dbe0e6] dark:border-gray-800 shadow-sm">
<p className="text-[#617289] dark:text-gray-400 text-sm font-semibold uppercase tracking-wider">Memnuniyet Skoru</p>
<div className="flex items-baseline gap-2">
<p className="text-3xl font-black text-[#111418] dark:text-white">4.8/5</p>
<p className="text-green-600 text-sm font-bold">+0.2</p>
</div>
</div>
<div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-gray-900 border border-[#dbe0e6] dark:border-gray-800 shadow-sm">
<p className="text-[#617289] dark:text-gray-400 text-sm font-semibold uppercase tracking-wider">Hedef Gerçekleşme</p>
<div className="flex items-baseline gap-2">
<p className="text-3xl font-black text-[#111418] dark:text-white">%92</p>
<p className="text-green-600 text-sm font-bold">+5%</p>
</div>
</div>
</div>
{/*  Productivity Chart (Visual Placeholder)  */}
<div className="bg-white dark:bg-gray-900 rounded-xl border border-[#dbe0e6] dark:border-gray-800 p-6 shadow-sm">
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-bold tracking-tight">Haftalık Verimlilik: Harcanan Süre vs. Üretilen Değer</h2>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<span className="size-3 rounded-full bg-primary"></span>
<span className="text-xs font-medium text-[#617289] dark:text-gray-400">Üretilen Değer</span>
</div>
<div className="flex items-center gap-2">
<span className="size-3 rounded-full bg-gray-300"></span>
<span className="text-xs font-medium text-[#617289] dark:text-gray-400">Harcanan Süre</span>
</div>
</div>
</div>
<div className="h-64 w-full relative">
{/*  Simple SVG Line Chart Placeholder  */}
<svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 200">
{/*  Value Line  */}
<path d="M0,150 L166,120 L332,160 L498,80 L664,100 L830,40 L1000,60" fill="none" stroke="#136dec" strokeWidth="4"></path>
{/*  Time Line  */}
<path d="M0,170 L166,160 L332,175 L498,150 L664,165 L830,155 L1000,160" fill="none" stroke="#d1d5db" strokeDasharray="8,4" strokeWidth="3"></path>
{/*  Fill Area  */}
<path d="M0,150 L166,120 L332,160 L498,80 L664,100 L830,40 L1000,60 L1000,200 L0,200 Z" fill="url(#grad1)" opacity="0.1"></path>
<defs>
<linearGradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{ "stopColor": "#136dec", "stopOpacity": "1" }}></stop>
<stop offset="100%" style={{ "stopColor": "#136dec", "stopOpacity": "0" }}></stop>
</linearGradient>
</defs>
</svg>
<div className="flex justify-between mt-4 text-xs font-medium text-[#617289] dark:text-gray-500">
<span>Pazartesi</span>
<span>Salı</span>
<span>Çarşamba</span>
<span>Perşembe</span>
<span>Cuma</span>
<span>Cumartesi</span>
<span>Pazar</span>
</div>
</div>
</div>
{/*  Bottom Grid (Effort and Badges)  */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
{/*  Effort Distribution  */}
<div className="bg-white dark:bg-gray-900 rounded-xl border border-[#dbe0e6] dark:border-gray-800 p-6 shadow-sm">
<h2 className="text-lg font-bold mb-6">Müşteri Bazlı Efor Dağılımı</h2>
<div className="flex items-center gap-8">
<div className="relative size-40 shrink-0">
{/*  SVG Donut Chart  */}
<svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 36 36">
<circle cx="18" cy="18" fill="transparent" r="16" stroke="#f3f4f6" strokeWidth="4"></circle>
<circle cx="18" cy="18" fill="transparent" r="16" stroke="#136dec" strokeDasharray="45 100" strokeLinecap="round" strokeWidth="4"></circle>
<circle cx="18" cy="18" fill="transparent" r="16" stroke="#10b981" strokeDasharray="25 100" strokeDashoffset="-45" strokeLinecap="round" strokeWidth="4"></circle>
<circle cx="18" cy="18" fill="transparent" r="16" stroke="#f59e0b" strokeDasharray="20 100" strokeDashoffset="-70" strokeLinecap="round" strokeWidth="4"></circle>
<circle cx="18" cy="18" fill="transparent" r="16" stroke="#ef4444" strokeDasharray="10 100" strokeDashoffset="-90" strokeLinecap="round" strokeWidth="4"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-xl font-bold">160s</span>
<span className="text-[10px] text-gray-500 font-medium">Toplam</span>
</div>
</div>
<div className="flex flex-col gap-3 flex-1">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="size-2 rounded-full bg-primary"></span>
<span className="text-sm font-medium">Acme Corp</span>
</div>
<span className="text-sm font-bold">%45</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="size-2 rounded-full bg-green-500"></span>
<span className="text-sm font-medium">Global Tech</span>
</div>
<span className="text-sm font-bold">%25</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="size-2 rounded-full bg-amber-500"></span>
<span className="text-sm font-medium">StartupX</span>
</div>
<span className="text-sm font-bold">%20</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="size-2 rounded-full bg-red-500"></span>
<span className="text-sm font-medium">Diğer</span>
</div>
<span className="text-sm font-bold">%10</span>
</div>
</div>
</div>
</div>
{/*  Badges & Achievements  */}
<div className="bg-white dark:bg-gray-900 rounded-xl border border-[#dbe0e6] dark:border-gray-800 p-6 shadow-sm">
<h2 className="text-lg font-bold mb-6">Rozetler ve Başarılar</h2>
<div className="grid grid-cols-3 gap-4">
<div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20">
<div className="size-12 rounded-full bg-primary flex items-center justify-center text-white shadow-lg">
<span className="material-symbols-outlined text-3xl">bolt</span>
</div>
<p className="text-xs font-bold text-center">Hızlı Teslimat</p>
</div>
<div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-green-50 border border-green-200">
<div className="size-12 rounded-full bg-green-600 flex items-center justify-center text-white shadow-lg">
<span className="material-symbols-outlined text-3xl">verified</span>
</div>
<p className="text-xs font-bold text-center">SOP Şampiyonu</p>
</div>
<div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200">
<div className="size-12 rounded-full bg-amber-500 flex items-center justify-center text-white shadow-lg">
<span className="material-symbols-outlined text-3xl">star</span>
</div>
<p className="text-xs font-bold text-center">Ayın Yıldızı</p>
</div>
<div className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-800 opacity-50">
<div className="size-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
<span className="material-symbols-outlined text-3xl">lock</span>
</div>
<p className="text-xs font-medium text-center">Hatası Kapalı</p>
</div>
<div className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-800 opacity-50">
<div className="size-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
<span className="material-symbols-outlined text-3xl">lock</span>
</div>
<p className="text-xs font-medium text-center">Analiz Dehası</p>
</div>
<div className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-800 opacity-50">
<div className="size-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
<span className="material-symbols-outlined text-3xl">lock</span>
</div>
<p className="text-xs font-medium text-center">Takım Lideri</p>
</div>
</div>
</div>
</div>
{/*  Bottom Table (Growth Areas)  */}
<div className="bg-white dark:bg-gray-900 rounded-xl border border-[#dbe0e6] dark:border-gray-800 overflow-hidden shadow-sm mb-8">
<div className="p-6 border-b border-[#dbe0e6] dark:border-gray-800">
<h2 className="text-xl font-bold">Gelişim Alanları ve Verimlilik Önerileri</h2>
<p className="text-sm text-[#617289] dark:text-gray-400 mt-1">Yapay zeka destekli performans analizi ve iyileştirme tavsiyeleri.</p>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="bg-gray-50 dark:bg-gray-800/50 text-xs font-bold uppercase tracking-wider text-[#617289] dark:text-gray-400">
<th className="px-6 py-4">Görev Türü</th>
<th className="px-6 py-4">Harcanan Süre (%)</th>
<th className="px-6 py-4">Efor Verimliliği</th>
<th className="px-6 py-4">İyileştirme Önerisi</th>
</tr>
</thead>
<tbody className="divide-y divide-[#dbe0e6] dark:divide-gray-800">
<tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
<td className="px-6 py-4">
<span className="text-sm font-bold">Revizyon Talepleri</span>
</td>
<td className="px-6 py-4 text-sm font-medium">%28</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="h-2 w-24 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-red-500 w-[40%]"></div>
</div>
<span className="text-xs font-bold text-red-500">Düşük</span>
</div>
</td>
<td className="px-6 py-4">
<p className="text-sm text-[#111418] dark:text-gray-300">Müşteri onay formlarını optimize ederek ilk seferde onay oranını artır.</p>
</td>
</tr>
<tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
<td className="px-6 py-4">
<span className="text-sm font-bold">Teknik Analiz</span>
</td>
<td className="px-6 py-4 text-sm font-medium">%42</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="h-2 w-24 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-green-500 w-[85%]"></div>
</div>
<span className="text-xs font-bold text-green-500">Yüksek</span>
</div>
</td>
<td className="px-6 py-4">
<p className="text-sm text-[#111418] dark:text-gray-300">Harika gidiyorsun! Bu alandaki SOP'lerini ekip arkadaşlarınla paylaş.</p>
</td>
</tr>
<tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
<td className="px-6 py-4">
<span className="text-sm font-bold">Raporlama</span>
</td>
<td className="px-6 py-4 text-sm font-medium">%15</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="h-2 w-24 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-amber-500 w-[60%]"></div>
</div>
<span className="text-xs font-bold text-amber-500">Orta</span>
</div>
</td>
<td className="px-6 py-4">
<p className="text-sm text-[#111418] dark:text-gray-300">Looker Studio şablonlarını güncelleyerek manuel veri girişini azalt.</p>
</td>
</tr>
</tbody>
</table>
</div>
</div>

    </div>
  );
}
