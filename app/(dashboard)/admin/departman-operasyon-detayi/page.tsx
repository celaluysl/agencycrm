
"use client";

import React from "react";

export default function Page() {
  return (
    <div className="flex-1 flex flex-col max-w-[1600px] mx-auto gap-6 p-6">
      
<aside className="w-80 flex flex-col gap-6 shrink-0">
<div className="bg-white dark:bg-[#1e293b] rounded-xl p-5 shadow-sm border border-[#f0f2f4] dark:border-gray-800">
<h3 className="text-sm font-bold mb-4 dark:text-white flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-xl">show_chart</span>
                Organik Trafik
            </h3>
<div className="space-y-4">
<div className="flex items-baseline justify-between">
<span className="text-2xl font-bold dark:text-white">42.5K</span>
<span className="text-xs font-bold text-green-600 flex items-center gap-0.5">
<span className="material-symbols-outlined text-sm">trending_up</span> +12%
                    </span>
</div>
<div className="h-24 w-full flex items-end gap-1 px-1">
<div className="bg-primary/20 hover:bg-primary transition-colors w-full h-[40%] rounded-t-sm"></div>
<div className="bg-primary/20 hover:bg-primary transition-colors w-full h-[55%] rounded-t-sm"></div>
<div className="bg-primary/20 hover:bg-primary transition-colors w-full h-[45%] rounded-t-sm"></div>
<div className="bg-primary/20 hover:bg-primary transition-colors w-full h-[70%] rounded-t-sm"></div>
<div className="bg-primary/20 hover:bg-primary transition-colors w-full h-[60%] rounded-t-sm"></div>
<div className="bg-primary/20 hover:bg-primary transition-colors w-full h-[85%] rounded-t-sm"></div>
<div className="bg-primary/20 hover:bg-primary transition-colors w-full h-[75%] rounded-t-sm"></div>
</div>
<p className="text-[10px] text-[#617289] text-center font-medium">Son 30 Günlük Veri</p>
</div>
</div>
<div className="bg-white dark:bg-[#1e293b] rounded-xl p-5 shadow-sm border border-[#f0f2f4] dark:border-gray-800">
<h3 className="text-sm font-bold mb-4 dark:text-white flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-xl">format_list_numbered</span>
                Mevcut Sıralama
            </h3>
<div className="grid grid-cols-3 gap-2">
<div className="bg-gray-50 dark:bg-gray-800 p-2 rounded-lg text-center">
<p className="text-[10px] text-[#617289] font-bold">TOP 3</p>
<p className="text-base font-bold dark:text-white">12</p>
</div>
<div className="bg-gray-50 dark:bg-gray-800 p-2 rounded-lg text-center">
<p className="text-[10px] text-[#617289] font-bold">TOP 10</p>
<p className="text-base font-bold dark:text-white">45</p>
</div>
<div className="bg-gray-50 dark:bg-gray-800 p-2 rounded-lg text-center">
<p className="text-[10px] text-[#617289] font-bold">TOP 100</p>
<p className="text-base font-bold dark:text-white">218</p>
</div>
</div>
<div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
<div className="flex items-center justify-between text-xs mb-2">
<span className="text-[#617289]">Jeneratör</span>
<span className="font-bold text-green-600">#2 <span className="material-symbols-outlined text-[10px]">arrow_upward</span></span>
</div>
<div className="flex items-center justify-between text-xs mb-2">
<span className="text-[#617289]">Endüstriyel Güç</span>
<span className="font-bold text-[#111418] dark:text-white">#5</span>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-[#617289]">Kesintisiz Güç</span>
<span className="font-bold text-red-600">#12 <span className="material-symbols-outlined text-[10px]">arrow_downward</span></span>
</div>
</div>
</div>
<div className="bg-white dark:bg-[#1e293b] rounded-xl p-5 shadow-sm border border-[#f0f2f4] dark:border-gray-800 text-center">
<h3 className="text-sm font-bold mb-4 dark:text-white text-left flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-xl">health_and_safety</span>
                Teknik Sağlık
            </h3>
<div className="relative inline-flex items-center justify-center">
<svg className="size-32 -rotate-90">
<circle className="text-gray-100 dark:text-gray-800" cx="64" cy="64" fill="transparent" r="56" stroke="currentColor" strokeWidth="8"></circle>
<circle className="text-green-500" cx="64" cy="64" fill="transparent" r="56" stroke="currentColor" strokeDasharray="351.85" strokeDashoffset="35.18" strokeWidth="8"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-2xl font-bold dark:text-white">90</span>
<span className="text-[10px] font-bold text-[#617289]">KUSURSUZ</span>
</div>
</div>
<p className="mt-4 text-[11px] text-[#617289]">Site hızı ve mobil uyumluluk optimize edildi.</p>
</div>
</aside>
<div className="flex-1 overflow-x-auto no-scrollbar pb-6">
<div className="flex gap-6 h-full min-h-[600px]">
<div className="kanban-column flex flex-col gap-4">
<div className="flex items-center justify-between px-1">
<h4 className="text-sm font-bold dark:text-white flex items-center gap-2">Yapılacaklar <span className="bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded text-xs">3</span></h4>
<button className="material-symbols-outlined text-[#617289] hover:text-primary transition-colors">add</button>
</div>
<div className="flex flex-col gap-3">
<div className="bg-white dark:bg-[#1e293b] p-4 rounded-xl shadow-sm border border-[#f0f2f4] dark:border-gray-800 hover:border-primary/30 transition-all cursor-move group">
<div className="flex gap-1 mb-2">
<span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] rounded font-bold uppercase">TEKNİK</span>
</div>
<h5 className="text-sm font-bold dark:text-white mb-2 group-hover:text-primary transition-colors">Sitemap.xml Revizyonu</h5>
<div className="flex items-center justify-between mt-4">
<div className="flex -space-x-2">
<div className="size-6 rounded-full border-2 border-white dark:border-[#1e293b] bg-cover" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDnBYAiKh6HQ1PbFopJkI97XeLKUNZNKVJ9Om5a6rQL6_nnwZiWv6YZIRZRlV0b62tqCf6mm1Zax09gmMVgics8e8hoP_Buh9CLY1bEzloKa3HgEhbdlVifo2Ni01yvmft5e3jAnK98c6SSiSKaIF1-0fLF6WYkMFHudJ0LOyvL0XLgLaI1F8TkymeVwRPG_RDVqyPkMR_p_idjIGLb48JbdTqMADLtiCK2qXQeE2wfCajOUq_fqkxXDmzg-28H0cV-IrZI--_NqLqV')" }}></div>
</div>
<span className="text-[10px] font-bold text-[#617289] flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> 24 Kas</span>
</div>
</div>
<div className="bg-white dark:bg-[#1e293b] p-4 rounded-xl shadow-sm border border-[#f0f2f4] dark:border-gray-800 hover:border-primary/30 transition-all cursor-move group">
<div className="flex gap-1 mb-2">
<span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-[10px] rounded font-bold uppercase">İÇERİK</span>
</div>
<h5 className="text-sm font-bold dark:text-white mb-2 group-hover:text-primary transition-colors">Anahtar Kelime Araştırması (Yeni Ürünler)</h5>
<div className="flex items-center justify-between mt-4">
<div className="flex -space-x-2">
<div className="size-6 rounded-full border-2 border-white dark:border-[#1e293b] bg-cover" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBp1bV71nBrlMhSFVgMsEXlGOZ7DUJcQj7p649-UTrknmS8pLWL4qEN75gk7cpbjCLWoZTr4Qt3-VdaJnCSXzc5x5b-iNHcTWz1WHhlUWo_ODSep4BCpwox290b5INtqy6cY9cBbSvOlju8UuPdhqknZZbzzpw4Py5xgqRHZZadfDRxhxeUbxe_Jz2hhAuqrgM_V_D50_KdSoamjb_y8OVwEPgxMAO9SOxwYM7dvF3FMDdVJiv4DBRwG5eFw737LPi9OJDV78ZM1z8j')" }}></div>
</div>
<span className="text-[10px] font-bold text-red-500 flex items-center gap-1"><span className="material-symbols-outlined text-sm">warning</span> ACİL</span>
</div>
</div>
</div>
</div>
<div className="kanban-column flex flex-col gap-4">
<div className="flex items-center justify-between px-1">
<h4 className="text-sm font-bold dark:text-white flex items-center gap-2">Süreçte <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-xs">2</span></h4>
<button className="material-symbols-outlined text-[#617289] hover:text-primary transition-colors">add</button>
</div>
<div className="flex flex-col gap-3">
<div className="bg-white dark:bg-[#1e293b] p-4 rounded-xl shadow-sm border border-primary/20 dark:border-primary/20 hover:border-primary/40 transition-all cursor-move group">
<div className="flex gap-1 mb-2">
<span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-[10px] rounded font-bold uppercase">BACKLINK</span>
</div>
<h5 className="text-sm font-bold dark:text-white mb-2 group-hover:text-primary transition-colors">Sektörel Blog Tanıtım Yazıları</h5>
<div className="flex items-center justify-between mt-4">
<div className="flex -space-x-2">
<div className="size-6 rounded-full border-2 border-white dark:border-[#1e293b] bg-cover" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBp1bV71nBrlMhSFVgMsEXlGOZ7DUJcQj7p649-UTrknmS8pLWL4qEN75gk7cpbjCLWoZTr4Qt3-VdaJnCSXzc5x5b-iNHcTWz1WHhlUWo_ODSep4BCpwox290b5INtqy6cY9cBbSvOlju8UuPdhqknZZbzzpw4Py5xgqRHZZadfDRxhxeUbxe_Jz2hhAuqrgM_V_D50_KdSoamjb_y8OVwEPgxMAO9SOxwYM7dvF3FMDdVJiv4DBRwG5eFw737LPi9OJDV78ZM1z8j')" }}></div>
</div>
<span className="text-[10px] font-bold text-[#617289] flex items-center gap-1">Devam Ediyor</span>
</div>
</div>
</div>
</div>
<div className="kanban-column flex flex-col gap-4">
<div className="flex items-center justify-between px-1">
<h4 className="text-sm font-bold dark:text-white flex items-center gap-2">Müşteri Onayı <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs">1</span></h4>
<button className="material-symbols-outlined text-[#617289] hover:text-primary transition-colors">add</button>
</div>
<div className="flex flex-col gap-3">
<div className="bg-white dark:bg-[#1e293b] p-4 rounded-xl shadow-sm border border-orange-200 dark:border-orange-900/30 hover:border-orange-400 transition-all cursor-move group">
<div className="flex gap-1 mb-2">
<span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-[10px] rounded font-bold uppercase">STRATEJİ</span>
</div>
<h5 className="text-sm font-bold dark:text-white mb-2 group-hover:text-primary transition-colors">2025 Q1 SEO Yol Haritası</h5>
<div className="flex items-center justify-between mt-4">
<div className="flex -space-x-2">
<div className="size-6 rounded-full border-2 border-white dark:border-[#1e293b] bg-cover" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBa_AsOGDhMOAC6iu9Nbyvh8t85sowDEuf_xwL6hLln57uIvluylrhgxdLMe9iKVX4UoiihmCUnTk0sO4dARCtM_EbkHnjKvuTCweyLJJxJBbWJaj-RmOWPlsvG_wIsN8NjI0JgBKr-vLhxdpEr2qtmXlilKWQ27s23xmJjAOGor2JuBUnaB0sb4PIzkqJS1M7IF7updlm7UBkwp1lh7eO9joKv5GclIeJHFWyMre6r5BGHAU9R1kFlNiJwmvjfc4bNa09yVV0kih08')" }}></div>
</div>
<span className="text-[10px] font-bold text-orange-600 flex items-center gap-1"><span className="material-symbols-outlined text-sm">pending</span> Beklemede</span>
</div>
</div>
</div>
</div>
<div className="kanban-column flex flex-col gap-4">
<div className="flex items-center justify-between px-1">
<h4 className="text-sm font-bold dark:text-white flex items-center gap-2">Bitti <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs">8</span></h4>
<button className="material-symbols-outlined text-[#617289] hover:text-primary transition-colors">add</button>
</div>
<div className="flex flex-col gap-3 opacity-80">
<div className="bg-white dark:bg-[#1e293b] p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 transition-all">
<div className="flex gap-1 mb-2">
<span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] rounded font-bold uppercase">TEKNİK</span>
</div>
<h5 className="text-sm font-bold dark:text-white mb-2 line-through text-gray-400">Core Web Vitals Optimizasyonu</h5>
<div className="flex items-center justify-between mt-4">
<div className="flex items-center gap-1 text-green-600">
<span className="material-symbols-outlined text-sm">check_circle</span>
<span className="text-[10px] font-bold">TAMAMLANDI</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<aside className="w-80 flex flex-col gap-6 shrink-0">
<div className="bg-white dark:bg-[#1e293b] rounded-xl shadow-sm border border-[#f0f2f4] dark:border-gray-800 flex flex-col overflow-hidden">
<div className="p-4 border-b border-[#f0f2f4] dark:border-gray-800 flex justify-between items-center bg-gray-50/50 dark:bg-gray-800/50">
<div className="flex items-center gap-2 text-primary">
<span className="material-symbols-outlined text-xl">key</span>
<h4 className="font-bold text-sm dark:text-white">Şifre Kasası</h4>
</div>
<button className="material-symbols-outlined text-lg text-[#617289] hover:text-primary transition-colors">open_in_new</button>
</div>
<div className="p-4 space-y-3">
<div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg">
<div className="flex items-center gap-3">
<div className="size-8 rounded bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center">
<span className="material-symbols-outlined text-orange-600 text-lg">analytics</span>
</div>
<div>
<p className="text-[11px] font-bold dark:text-white">Search Console</p>
<p className="text-[10px] text-[#617289]">teksan-sc-access</p>
</div>
</div>
<button className="text-primary hover:bg-primary/10 p-1 rounded transition-colors">
<span className="material-symbols-outlined text-lg">visibility</span>
</button>
</div>
<div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg">
<div className="flex items-center gap-3">
<div className="size-8 rounded bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
<span className="material-symbols-outlined text-blue-600 text-lg">public</span>
</div>
<div>
<p className="text-[11px] font-bold dark:text-white">WordPress Paneli</p>
<p className="text-[10px] text-[#617289]">admin-teksan-wp</p>
</div>
</div>
<button className="text-primary hover:bg-primary/10 p-1 rounded transition-colors">
<span className="material-symbols-outlined text-lg">visibility</span>
</button>
</div>
</div>
</div>
<div className="bg-white dark:bg-[#1e293b] rounded-xl shadow-sm border border-[#f0f2f4] dark:border-gray-800 flex flex-col overflow-hidden">
<div className="p-4 border-b border-[#f0f2f4] dark:border-gray-800 flex justify-between items-center bg-gray-50/50 dark:bg-gray-800/50">
<div className="flex items-center gap-2 text-green-600">
<span className="material-symbols-outlined text-xl">description</span>
<h4 className="font-bold text-sm dark:text-white">Son Raporlar</h4>
</div>
</div>
<div className="p-4 space-y-3">
<a className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg hover:border-primary transition-colors group" href="#">
<span className="material-symbols-outlined text-[#617289] group-hover:text-primary">picture_as_pdf</span>
<div className="flex-1">
<p className="text-[11px] font-bold dark:text-white">Ekim 2024 Performans Raporu</p>
<p className="text-[10px] text-[#617289]">Gönderildi: 02 Kas 2024</p>
</div>
<span className="material-symbols-outlined text-lg text-gray-300">download</span>
</a>
<a className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg hover:border-primary transition-colors group" href="#">
<span className="material-symbols-outlined text-[#617289] group-hover:text-primary">picture_as_pdf</span>
<div className="flex-1">
<p className="text-[11px] font-bold dark:text-white">Site Sağlık Analizi (V2)</p>
<p className="text-[10px] text-[#617289]">Gönderildi: 15 Eki 2024</p>
</div>
<span className="material-symbols-outlined text-lg text-gray-300">download</span>
</a>
</div>
<button className="p-3 text-[11px] font-bold text-primary bg-gray-50 dark:bg-gray-800/80 hover:bg-primary/5 transition-colors border-t border-gray-100 dark:border-gray-700">
                TÜM RAPORLARI GÖR
            </button>
</div>
<div className="bg-primary/5 border border-primary/10 rounded-xl p-4">
<h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Hızlı Not</h4>
<p className="text-xs text-[#111418] dark:text-gray-300 leading-relaxed italic">
                "Bir sonraki toplantıda 'Jeneratör Servis' kelimesindeki yükselişi vurgulayalım."
            </p>
</div>
</aside>

    </div>
  );
}
