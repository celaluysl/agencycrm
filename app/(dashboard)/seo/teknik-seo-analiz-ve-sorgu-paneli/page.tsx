
"use client";

import React from "react";

export default function Page() {
  return (
    <div className="flex-1 flex flex-col max-w-[1440px] mx-auto p-6 lg:p-10">
      
{/*  Page Heading  */}
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
<div className="flex flex-col gap-1">
<h1 className="text-3xl font-black tracking-tight">Teknik SEO Analiz ve Sorgu Paneli</h1>
<p className="text-[#617289] dark:text-gray-400">AgenciFlow - SEO Departmanı Teknik Analiz ve Sorgu Paneli</p>
</div>
<button className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-[#111418] dark:text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2">
<span className="material-symbols-outlined">add</span>
                Yeni Analiz
            </button>
</div>
{/*  Upper Search Area (Input Zone)  */}
<section className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-[#f0f2f4] dark:border-slate-800 mb-8">
<h2 className="text-lg font-bold mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">search</span>
                Manuel SEO Analizi
            </h2>
<div className="flex flex-col lg:flex-row gap-4">
<div className="flex-1 flex flex-col gap-2">
<label className="text-sm font-semibold">Hedef URL</label>
<input className="w-full h-12 rounded-lg border-[#dbe0e6] dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4" placeholder="https://agenciflow.com/blog/seo-tips" type="text" />
</div>
<div className="flex-1 flex flex-col gap-2">
<label className="text-sm font-semibold">Hedef Anahtar Kelime</label>
<input className="w-full h-12 rounded-lg border-[#dbe0e6] dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4" placeholder="Teknik SEO Analizi" type="text" />
</div>
<div className="flex items-end">
<button className="bg-primary text-white h-12 px-8 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all w-full lg:w-auto">
<span className="material-symbols-outlined">analytics</span>
                        Analiz Et
                    </button>
</div>
</div>
</section>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
{/*  Analysis Results (Left 8 Columns)  */}
<div className="lg:col-span-8 space-y-8">
{/*  Section 1: Meta Tags  */}
<div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-[#f0f2f4] dark:border-slate-800">
<h3 className="font-bold text-lg mb-4 border-b pb-2">Bölüm 1: Meta Etiketleri</h3>
<div className="space-y-4">
<div className="flex items-center justify-between p-3 bg-background-light dark:bg-slate-800/50 rounded-lg">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-success">check_circle</span>
<span className="font-medium">SEO Title (65 Karakter)</span>
</div>
<span className="bg-success/10 text-success text-xs font-bold px-3 py-1 rounded-full">Uygundur</span>
</div>
<div className="flex items-center justify-between p-3 bg-background-light dark:bg-slate-800/50 rounded-lg">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-error">cancel</span>
<span className="font-medium">Meta Description (Eksik veya Çok Kısa)</span>
</div>
<span className="bg-error/10 text-error text-xs font-bold px-3 py-1 rounded-full">Hatalı</span>
</div>
<div className="flex items-center justify-between p-3 bg-background-light dark:bg-slate-800/50 rounded-lg">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-success">check_circle</span>
<span className="font-medium">Canonical Etiketi</span>
</div>
<span className="bg-success/10 text-success text-xs font-bold px-3 py-1 rounded-full">Uygundur</span>
</div>
<div className="flex items-center justify-between p-3 bg-background-light dark:bg-slate-800/50 rounded-lg">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-success">check_circle</span>
<span className="font-medium">No-Index / No-Follow Kontrolü</span>
</div>
<span className="bg-success/10 text-success text-xs font-bold px-3 py-1 rounded-full">Uygundur</span>
</div>
</div>
</div>
{/*  Section 2: Heading Analysis  */}
<div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-[#f0f2f4] dark:border-slate-800">
<h3 className="font-bold text-lg mb-4 border-b pb-2">Bölüm 2: Heading Analizi</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
<div className="p-4 border border-dashed rounded-lg text-center">
<p className="text-2xl font-black text-primary">1</p>
<p className="text-xs font-bold text-gray-500 uppercase">H1 Tag</p>
</div>
<div className="p-4 border border-dashed rounded-lg text-center">
<p className="text-2xl font-black text-primary">4</p>
<p className="text-xs font-bold text-gray-500 uppercase">H2 Tag</p>
</div>
<div className="p-4 border border-dashed rounded-lg text-center">
<p className="text-2xl font-black text-primary">12</p>
<p className="text-xs font-bold text-gray-500 uppercase">H3-H6</p>
</div>
<div className="p-4 border border-dashed rounded-lg text-center bg-primary/5">
<p className="text-2xl font-black text-primary">%2.4</p>
<p className="text-xs font-bold text-gray-500 uppercase">Keyword Yoğunluğu</p>
</div>
</div>
<div className="overflow-hidden rounded-lg border border-[#f0f2f4] dark:border-slate-800">
<table className="w-full text-left text-sm">
<thead className="bg-gray-50 dark:bg-slate-800">
<tr>
<th className="px-4 py-3 font-bold">Etiket</th>
<th className="px-4 py-3 font-bold">İçerik Metni</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 dark:divide-slate-800">
<tr>
<td className="px-4 py-3 font-bold text-primary">H1</td>
<td className="px-4 py-3">2024 Yılında Teknik SEO Stratejileri</td>
</tr>
<tr>
<td className="px-4 py-3 font-bold text-primary">H2</td>
<td className="px-4 py-3">Site Hızı Neden Önemlidir?</td>
</tr>
<tr>
<td className="px-4 py-3 font-bold text-primary">H2</td>
<td className="px-4 py-3">Mobil Uyumluluk Testleri</td>
</tr>
</tbody>
</table>
</div>
</div>
{/*  Section 3: Link & Media  */}
<div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-[#f0f2f4] dark:border-slate-800">
<h3 className="font-bold text-lg mb-4 border-b pb-2">Bölüm 3: Link &amp; Görsel Denetimi</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-4">
<h4 className="text-sm font-bold text-gray-400 uppercase">Görsel Analizi</h4>
<div className="flex items-center justify-between">
<span className="text-sm">Toplam Görsel:</span>
<span className="font-bold">24</span>
</div>
<div className="flex items-center justify-between text-error">
<span className="text-sm">Eksik Alt Etiketi:</span>
<span className="font-bold">6</span>
</div>
<div className="flex items-center justify-between text-error">
<span className="text-sm">Eksik Title Etiketi:</span>
<span className="font-bold">14</span>
</div>
</div>
<div className="space-y-4">
<h4 className="text-sm font-bold text-gray-400 uppercase">Link Yapısı</h4>
<div className="flex items-center justify-between">
<span className="text-sm">İç Linkler:</span>
<span className="font-bold">42</span>
</div>
<div className="flex items-center justify-between">
<span className="text-sm">Dış Linkler:</span>
<span className="font-bold">8</span>
</div>
<div className="flex items-center justify-between text-success">
<span className="text-sm">Kırık Link Sayısı:</span>
<span className="font-bold">0</span>
</div>
</div>
</div>
</div>
{/*  Section 4: Speed & UX  */}
<div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-[#f0f2f4] dark:border-slate-800">
<h3 className="font-bold text-lg mb-4 border-b pb-2">Bölüm 4: PageSpeed &amp; UX</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex items-center gap-4 p-4 border rounded-xl">
<span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">speed</span>
<div>
<p className="text-xs font-bold text-gray-500">LCP (Largest Contentful Paint)</p>
<p className="text-lg font-black">1.2s <span className="text-xs font-normal text-success">(İyi)</span></p>
</div>
</div>
<div className="flex items-center gap-4 p-4 border rounded-xl">
<span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">star</span>
<div>
<p className="text-xs font-bold text-gray-500">Favicon Durumu</p>
<p className="text-lg font-black text-success">Aktif</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 border rounded-xl">
<span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">schema</span>
<div>
<p className="text-xs font-bold text-gray-500">Schema Mark-up</p>
<p className="text-lg font-black text-success">Valid</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 border rounded-xl">
<span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">account_tree</span>
<div>
<p className="text-xs font-bold text-gray-500">Breadcrumb Yapısı</p>
<p className="text-lg font-black text-error">Bulunamadı</p>
</div>
</div>
</div>
</div>
</div>
{/*  Sidebar (Right 4 Columns)  */}
<aside className="lg:col-span-4 space-y-8">
{/*  Google Performance Scores  */}
<div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-[#f0f2f4] dark:border-slate-800 shadow-sm">
<h3 className="font-bold text-lg mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-yellow-500">insights</span>
                        Genel Skorlar
                    </h3>
<div className="flex flex-col items-center gap-8">
{/*  Main SEO Score Radial  */}
<div className="relative size-40 flex items-center justify-center">
<svg className="size-full -rotate-90" viewBox="0 0 36 36">
<circle className="stroke-gray-100 dark:stroke-slate-800" cx="18" cy="18" fill="none" r="16" strokeWidth="3"></circle>
<circle className="stroke-primary" cx="18" cy="18" fill="none" r="16" strokeDasharray="82, 100" strokeLinecap="round" strokeWidth="3"></circle>
</svg>
<div className="absolute text-center">
<span className="text-4xl font-black">82</span>
<p className="text-[10px] font-bold text-gray-400 uppercase">SEO SKORU</p>
</div>
</div>
{/*  Mini Performance Gauges  */}
<div className="grid grid-cols-2 gap-8 w-full">
<div className="flex flex-col items-center gap-2">
<div className="relative size-20 flex items-center justify-center">
<svg className="size-full -rotate-90" viewBox="0 0 36 36">
<circle className="stroke-gray-100 dark:stroke-slate-800" cx="18" cy="18" fill="none" r="16" strokeWidth="3"></circle>
<circle className="stroke-error" cx="18" cy="18" fill="none" r="16" strokeDasharray="45, 100" strokeLinecap="round" strokeWidth="3"></circle>
</svg>
<span className="absolute text-lg font-black">45</span>
</div>
<p className="text-xs font-bold">MOBİL</p>
</div>
<div className="flex flex-col items-center gap-2">
<div className="relative size-20 flex items-center justify-center">
<svg className="size-full -rotate-90" viewBox="0 0 36 36">
<circle className="stroke-gray-100 dark:stroke-slate-800" cx="18" cy="18" fill="none" r="16" strokeWidth="3"></circle>
<circle className="stroke-success" cx="18" cy="18" fill="none" r="16" strokeDasharray="94, 100" strokeLinecap="round" strokeWidth="3"></circle>
</svg>
<span className="absolute text-lg font-black">94</span>
</div>
<p className="text-xs font-bold">MASAÜSTÜ</p>
</div>
</div>
</div>
</div>
{/*  Priority Checklist  */}
<div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-[#f0f2f4] dark:border-slate-800 shadow-sm">
<h3 className="font-bold text-lg mb-4 text-error flex items-center gap-2">
<span className="material-symbols-outlined">warning</span>
                        Düzeltilmesi Gerekenler
                    </h3>
<div className="space-y-4">
<div className="p-3 border-l-4 border-l-error bg-error/5 rounded-r-lg">
<div className="flex justify-between items-start mb-1">
<span className="text-[10px] font-bold bg-error text-white px-2 py-0.5 rounded">KRİTİK</span>
<span className="text-xs text-gray-500">#1</span>
</div>
<p className="text-sm font-semibold">Meta description etiketi bulunamadı veya çok kısa.</p>
</div>
<div className="p-3 border-l-4 border-l-error bg-error/5 rounded-r-lg">
<div className="flex justify-between items-start mb-1">
<span className="text-[10px] font-bold bg-error text-white px-2 py-0.5 rounded">KRİTİK</span>
<span className="text-xs text-gray-500">#2</span>
</div>
<p className="text-sm font-semibold">6 adet görselde 'alt' etiketi eksik.</p>
</div>
<div className="p-3 border-l-4 border-l-yellow-500 bg-yellow-500/5 rounded-r-lg">
<div className="flex justify-between items-start mb-1">
<span className="text-[10px] font-bold bg-yellow-500 text-white px-2 py-0.5 rounded">ORTA</span>
<span className="text-xs text-gray-500">#3</span>
</div>
<p className="text-sm font-semibold">Mobil performans skoru 50'nin altında (Core Web Vitals).</p>
</div>
<div className="p-3 border-l-4 border-l-yellow-500 bg-yellow-500/5 rounded-r-lg">
<div className="flex justify-between items-start mb-1">
<span className="text-[10px] font-bold bg-yellow-500 text-white px-2 py-0.5 rounded">ORTA</span>
<span className="text-xs text-gray-500">#4</span>
</div>
<p className="text-sm font-semibold">Breadcrumb JSON-LD şeması eklenmeli.</p>
</div>
</div>
<button className="w-full mt-6 py-3 border border-gray-200 dark:border-slate-700 rounded-lg text-sm font-bold hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                        Tümünü PDF Olarak İndir
                    </button>
</div>
</aside>
</div>

    </div>
  );
}
