
"use client";

import React from "react";

export default function Page() {
  return (
    <div className="flex-1 flex flex-col max-w-[1200px] mx-auto px-4 py-8">
      
{/*  Breadcrumbs  */}
<div className="flex items-center gap-2 mb-6">
<a className="text-[#617289] text-sm font-medium" href="#">Dashboard</a>
<span className="material-symbols-outlined text-[#617289] text-xs" >chevron_right</span>
<a className="text-[#617289] text-sm font-medium" href="#">Raporlar</a>
<span className="material-symbols-outlined text-[#617289] text-xs" >chevron_right</span>
<span className="text-primary text-sm font-bold">Teknik Denetim</span>
</div>
{/*  Page Heading  */}
<div className="flex flex-wrap justify-between items-end gap-6 mb-8">
<div className="max-w-2xl">
<h1 className="text-4xl font-black tracking-tight mb-2">Kapsamlı SEO Teknik Denetim Raporu</h1>
<p className="text-[#617289] dark:text-gray-400 text-lg">AgenciFlow - SEO Departmanı Detaylı Teknik Analiz Raporu v2.0</p>
</div>
<button className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-[#1e2732] border border-[#dbe0e6] dark:border-[#2a2f35] rounded-xl font-bold shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
<span className="material-symbols-outlined" >refresh</span>
<span>Yeniden Analiz Et</span>
</button>
</div>
{/*  Summary Stats Grid  */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
<div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
{/*  Stat Card 1  */}
<div className="bg-white dark:bg-[#1e2732] p-6 rounded-xl border border-[#dbe0e6] dark:border-[#2a2f35] shadow-sm">
<div className="flex justify-between items-start mb-2">
<p className="text-[#617289] dark:text-gray-400 text-sm font-semibold uppercase tracking-wider">Sorgulanan Kelime</p>
<span className="material-symbols-outlined text-primary" >search</span>
</div>
<p className="text-2xl font-bold">Dijital Pazarlama</p>
<div className="flex items-center gap-1 mt-2 text-[#07883b]">
<span className="material-symbols-outlined text-sm" >trending_up</span>
<span className="text-xs font-bold">+2% Arama Hacmi</span>
</div>
</div>
{/*  Stat Card 2  */}
<div className="bg-white dark:bg-[#1e2732] p-6 rounded-xl border border-[#dbe0e6] dark:border-[#2a2f35] shadow-sm">
<div className="flex justify-between items-start mb-2">
<p className="text-[#617289] dark:text-gray-400 text-sm font-semibold uppercase tracking-wider">Analiz Edilen URL</p>
<span className="material-symbols-outlined text-primary" >link</span>
</div>
<p className="text-sm font-medium truncate text-primary underline">https://agenciflow.com/seo-servisleri</p>
<p className="text-xs text-[#617289] mt-2 italic">Son tarama: 2 saat önce</p>
</div>
</div>
{/*  Global Score  */}
<div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-xl border-2 border-primary/20 flex flex-col items-center justify-center text-center">
<p className="text-primary font-bold uppercase text-xs tracking-widest mb-2">Genel SEO Puanı</p>
<div className="relative size-24 flex items-center justify-center">
<svg className="size-full transform -rotate-90">
<circle className="text-primary/10" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" strokeWidth="8"></circle>
<circle className="text-primary" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" strokeDasharray="251.2" strokeDashoffset="40.2" strokeWidth="8"></circle>
</svg>
<span className="absolute text-3xl font-black text-primary">84</span>
</div>
<p className="mt-2 text-sm text-[#07883b] font-bold">+5% geçen aya göre</p>
</div>
</div>
{/*  2.1 Görsel Alt Etiket Analizi  */}
<section className="mb-8">
<div className="flex items-center gap-3 mb-4">
<div className="bg-primary text-white size-8 flex items-center justify-center rounded-lg font-bold text-sm">2.1</div>
<h2 className="text-xl font-bold">Görsel Alt Etiket Analizi</h2>
</div>
<div className="bg-white dark:bg-[#1e2732] rounded-xl border border-[#dbe0e6] dark:border-[#2a2f35] overflow-hidden shadow-sm">
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x border-b border-[#f0f2f4] dark:border-[#2a2f35]">
<div className="p-6 text-center">
<p className="text-3xl font-bold mb-1">42</p>
<p className="text-[#617289] text-sm">Toplam Görsel</p>
</div>
<div className="p-6 text-center">
<p className="text-3xl font-bold text-[#07883b] mb-1">34</p>
<p className="text-[#617289] text-sm">Etiketi Olan</p>
</div>
<div className="p-6 text-center">
<p className="text-3xl font-bold text-[#d32f2f] mb-1">8</p>
<p className="text-[#617289] text-sm">Eksik Etiket</p>
</div>
</div>
<div className="p-6">
<h3 className="font-bold mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-amber-500" >warning</span>
                        Hatalı Görseller ve Çözüm Önerileri
                    </h3>
<div className="space-y-4">
{/*  Image Error Row  */}
<div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-gray-50 dark:bg-[#151d27] rounded-lg gap-4">
<div className="flex items-center gap-4">
<div className="size-12 bg-gray-200 dark:bg-gray-700 rounded overflow-hidden">
<div className="w-full h-full bg-cover bg-center" data-alt="Screenshot of data visualization dashboard" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCC4TEKvKLAb1w_6YKzxnT2_YkcxbX8AEr-RLxS6APAhN2_rp2Tk_N49DArMw8nDozUy3Ypn-U6ywvaNh5MURieHwpEoAPGUbb73OyjGlx6q3iXjfTea6G35YOv7BTCtki93bw2cg2NpraXMSqJJXdyJfGb4COV85FkBYtQs8b9QxztUAZOAC9DKOzjGSSmNBFvjro6y2fnbLkY0MmHrh7IhTvJjHv7uKNxjqgie9QMJhpiBc8lNok_9ixoL7hMplOMH73C3lZGar6K')" }}></div>
</div>
<div>
<p className="text-sm font-bold truncate max-w-[200px]">hero-banner-v2.png</p>
<p className="text-xs text-red-500 font-medium">Alt etiketi boş bırakılmış</p>
</div>
</div>
<button className="px-4 py-2 bg-primary/10 text-primary text-xs font-bold rounded hover:bg-primary/20 transition-all flex items-center gap-2">
<span className="material-symbols-outlined text-[16px]" >lightbulb</span>
                                Düzeltme Önerisi
                            </button>
</div>
{/*  Image List with Keywords  */}
<div className="mt-6">
<p className="text-sm font-bold text-[#617289] mb-3 uppercase tracking-wider">Anahtar Kelime İçeren Alt Etiketler</p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold rounded-full">dijital pazarlama stratejisi</span>
<span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold rounded-full">seo teknik analiz</span>
<span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold rounded-full">agenciflow hizmetleri</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Heading Hiyerarşisi  */}
<section className="mb-8">
<div className="flex items-center gap-3 mb-4">
<div className="bg-primary text-white size-8 flex items-center justify-center rounded-lg font-bold text-sm">2.2</div>
<h2 className="text-xl font-bold">Heading Hiyerarşi Ağacı</h2>
</div>
<div className="bg-white dark:bg-[#1e2732] rounded-xl border border-[#dbe0e6] dark:border-[#2a2f35] p-6 shadow-sm">
<div className="space-y-3">
{/*  H1  */}
<div className="flex items-center gap-4 group">
<span className="text-xs font-black text-primary bg-primary/10 px-2 py-1 rounded w-10 text-center">H1</span>
<div className="flex-1 p-3 border-l-4 border-primary bg-gray-50 dark:bg-[#151d27] rounded-r-lg">
<p className="font-bold">AgenciFlow SEO Teknik Denetim Servisleri</p>
<p className="text-[10px] text-[#617289] mt-1">42 Karakter | Optimal (20-70)</p>
</div>
</div>
{/*  H2  */}
<div className="ml-8 flex items-center gap-4">
<span className="text-xs font-black text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded w-10 text-center">H2</span>
<div className="flex-1 p-3 border-l-4 border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1e2732] rounded-r-lg border border-gray-100 dark:border-gray-800">
<p className="font-semibold text-sm">Teknik SEO Neden Önemlidir?</p>
</div>
</div>
{/*  H3 (Nested)  */}
<div className="ml-16 flex items-center gap-4">
<span className="text-xs font-black text-gray-400 bg-gray-50 dark:bg-gray-900 px-2 py-1 rounded w-10 text-center">H3</span>
<div className="flex-1 p-3 border-l-4 border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1e2732] rounded-r-lg border border-gray-100 dark:border-gray-800">
<p className="text-sm italic">Site Hızı ve Kullanıcı Deneyimi</p>
</div>
</div>
{/*  H2 Alert  */}
<div className="ml-8 flex items-center gap-4">
<span className="text-xs font-black text-red-500 bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded w-10 text-center">H2</span>
<div className="flex-1 p-3 border-l-4 border-red-500 bg-red-50 dark:bg-red-900/10 rounded-r-lg">
<div className="flex justify-between items-center">
<p className="font-semibold text-sm">Dijital Pazarlama ve SEO</p>
<span className="text-[10px] font-bold text-red-600 bg-white px-2 py-0.5 rounded shadow-sm">H2 Çift Kullanımı!</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  PageSpeed Entegrasyonu  */}
<section className="mb-8">
<div className="flex items-center gap-3 mb-4">
<div className="bg-primary text-white size-8 flex items-center justify-center rounded-lg font-bold text-sm">2.3</div>
<h2 className="text-xl font-bold">Core Web Vitals &amp; PageSpeed</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
{/*  Metric 1: LCP  */}
<div className="bg-white dark:bg-[#1e2732] p-6 rounded-xl border border-[#dbe0e6] dark:border-[#2a2f35]">
<div className="flex justify-between items-center mb-4">
<span className="font-bold text-sm">LCP</span>
<span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 rounded font-bold">Good</span>
</div>
<p className="text-3xl font-black mb-1">1.2 s</p>
<p className="text-xs text-[#617289] mb-4">Largest Contentful Paint</p>
<div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2 overflow-hidden">
<div className="bg-[#07883b] h-full" style={{ "width": "85%" }}></div>
</div>
</div>
{/*  Metric 2: CLS  */}
<div className="bg-white dark:bg-[#1e2732] p-6 rounded-xl border border-[#dbe0e6] dark:border-[#2a2f35]">
<div className="flex justify-between items-center mb-4">
<span className="font-bold text-sm">CLS</span>
<span className="text-xs px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 rounded font-bold">Needs Improvement</span>
</div>
<p className="text-3xl font-black mb-1">0.15</p>
<p className="text-xs text-[#617289] mb-4">Cumulative Layout Shift</p>
<div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2 overflow-hidden">
<div className="bg-amber-500 h-full" style={{ "width": "40%" }}></div>
</div>
</div>
{/*  Metric 3: FID  */}
<div className="bg-white dark:bg-[#1e2732] p-6 rounded-xl border border-[#dbe0e6] dark:border-[#2a2f35]">
<div className="flex justify-between items-center mb-4">
<span className="font-bold text-sm">FID</span>
<span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 rounded font-bold">Good</span>
</div>
<p className="text-3xl font-black mb-1">14 ms</p>
<p className="text-xs text-[#617289] mb-4">First Input Delay</p>
<div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2 overflow-hidden">
<div className="bg-[#07883b] h-full" style={{ "width": "95%" }}></div>
</div>
</div>
</div>
</section>
{/*  Schema & Breadcrumb  */}
<section className="mb-8">
<div className="flex items-center gap-3 mb-4">
<div className="bg-primary text-white size-8 flex items-center justify-center rounded-lg font-bold text-sm">2.4</div>
<h2 className="text-xl font-bold">Schema &amp; Breadcrumb Yapısı</h2>
</div>
<div className="bg-white dark:bg-[#1e2732] rounded-xl border border-[#dbe0e6] dark:border-[#2a2f35] overflow-hidden shadow-sm">
<div className="p-6 bg-gray-50 dark:bg-[#151d27] border-b border-[#f0f2f4] dark:border-[#2a2f35]">
<div className="flex flex-wrap justify-between items-center gap-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-green-500" >check_circle</span>
<span className="font-bold">JSON-LD Yapısı Doğrulandı</span>
</div>
<div className="flex items-center gap-2 text-primary font-bold text-sm cursor-pointer hover:underline">
<span className="material-symbols-outlined" >terminal</span>
                            Tam Kodu Görüntüle
                        </div>
</div>
</div>
<div className="p-6">
<pre className="bg-[#1e2732] text-[#abb2bf] p-4 rounded-lg text-xs overflow-x-auto leading-relaxed"><span className="text-[#c678dd]">&#123;</span>
  <span className="text-[#98c379]">"@context"</span>: <span className="text-[#98c379]">"https://schema.org"</span>,
  <span className="text-[#98c379]">"@type"</span>: <span className="text-[#98c379]">"BreadcrumbList"</span>,
  <span className="text-[#98c379]">"itemListElement"</span>: <span className="text-[#c678dd]">[</span>
    <span className="text-[#c678dd]">&#123;</span>
      <span className="text-[#98c379]">"@type"</span>: <span className="text-[#98c379]">"ListItem"</span>,
      <span className="text-[#98c379]">"position"</span>: <span className="text-[#d19a66]">1</span>,
      <span className="text-[#98c379]">"name"</span>: <span className="text-[#98c379]">"Anasayfa"</span>,
      <span className="text-[#98c379]">"item"</span>: <span className="text-[#98c379]">"https://agenciflow.com"</span>
    <span className="text-[#c678dd]">&#125;</span>
  <span className="text-[#c678dd]">]</span>
<span className="text-[#c678dd]">&#125;</span></pre>
<div className="mt-6 flex items-center justify-between p-4 bg-primary/5 border border-primary/20 rounded-lg">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary" >account_tree</span>
<div>
<p className="text-sm font-bold">Hiyerarşi Uygunluğu</p>
<p className="text-xs text-[#617289]">Google Rich Results uyumlu breadcrumb yapısı tespit edildi.</p>
</div>
</div>
<span className="px-3 py-1 bg-primary text-white text-[10px] font-black uppercase rounded">Onaylandı</span>
</div>
</div>
</div>
</section>

    </div>
  );
}
