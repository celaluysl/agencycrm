
"use client";

import React from "react";

export default function Page() {
  return (
    <div className="flex-1 flex flex-col max-w-7xl mx-auto px-6 py-8">
      
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
<div className="flex flex-col gap-2">
<h1 className="text-[#111418] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">SEM Müşterilerim</h1>
<p className="text-[#617289] dark:text-gray-400 text-base font-normal">Portföyünüzdeki müşterilerin reklam performansı ve bütçe takibi.</p>
</div>
<button className="bg-primary hover:bg-primary/90 text-white font-bold py-2.5 px-6 rounded-lg flex items-center gap-2 transition-all shadow-md">
<span className="material-symbols-outlined text-xl font-bold">add</span>
                Yeni Müşteri Ekle
            </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
<div className="flex flex-col gap-2 rounded-xl p-6 border border-[#dbe0e6] dark:border-gray-800 bg-white dark:bg-[#1a2432] shadow-sm">
<div className="flex items-center gap-3 text-[#617289] dark:text-gray-400">
<span className="material-symbols-outlined">group</span>
<p className="text-sm font-medium">Toplam Müşteri</p>
</div>
<p className="text-[#111418] dark:text-white tracking-tight text-3xl font-bold mt-1">12</p>
<div className="text-xs font-medium text-emerald-500 flex items-center gap-1 mt-1">
<span className="material-symbols-outlined text-sm">trending_up</span> +2 bu ay
                </div>
</div>
<div className="flex flex-col gap-2 rounded-xl p-6 border border-[#dbe0e6] dark:border-gray-800 bg-white dark:bg-[#1a2432] shadow-sm">
<div className="flex items-center gap-3 text-[#617289] dark:text-gray-400">
<span className="material-symbols-outlined">payments</span>
<p className="text-sm font-medium">Yönetilen Aylık Bütçe</p>
</div>
<p className="text-[#111418] dark:text-white tracking-tight text-3xl font-bold mt-1">₺2.450.000</p>
<div className="text-xs font-medium text-[#617289] flex items-center gap-1 mt-1">
                    Bu ayki toplam limit
                </div>
</div>
<div className="flex flex-col gap-2 rounded-xl p-6 border border-[#dbe0e6] dark:border-gray-800 bg-white dark:bg-[#1a2432] shadow-sm border-l-4 border-l-l-primary">
<div className="flex items-center gap-3 text-[#617289] dark:text-gray-400">
<span className="material-symbols-outlined">query_stats</span>
<p className="text-sm font-medium">Portföy ROAS</p>
</div>
<p className="text-primary tracking-tight text-3xl font-bold mt-1">4.8x</p>
<div className="text-xs font-medium text-emerald-500 flex items-center gap-1 mt-1">
<span className="material-symbols-outlined text-sm">arrow_upward</span> %12 artış
                </div>
</div>
</div>
<div className="bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 p-2 mb-6 shadow-sm overflow-x-auto">
<div className="flex gap-3 flex-nowrap md:flex-wrap items-center whitespace-nowrap">
<div className="flex items-center px-4 border-r border-gray-200 dark:border-gray-700 h-8">
<span className="material-symbols-outlined text-[#617289] text-xl">filter_list</span>
<span className="ml-2 text-sm font-bold text-[#111418] dark:text-white">Filtrele:</span>
</div>
<button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-100 dark:bg-gray-800 px-4 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
<p className="text-[#111418] dark:text-white text-sm font-medium">Bütçe: Tümü</p>
<span className="material-symbols-outlined text-lg">expand_more</span>
</button>
<button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-100 dark:bg-gray-800 px-4 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
<p className="text-[#111418] dark:text-white text-sm font-medium">Kanal: Google &amp; TikTok</p>
<span className="material-symbols-outlined text-lg">expand_more</span>
</button>
<button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary/10 border border-primary/20 px-4">
<p className="text-primary text-sm font-semibold">Sağlık: Kritik</p>
<span className="material-symbols-outlined text-lg text-primary">close</span>
</button>
<div className="flex-1"></div>
<button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 px-4">
<span className="material-symbols-outlined text-lg">sort</span>
<p className="text-[#111418] dark:text-white text-sm font-medium">En Yüksek Bütçe</p>
</button>
</div>
</div>
<div className="flex flex-col gap-6">
<div className="bg-white dark:bg-[#1a2432] rounded-xl border-l-4 border-l-l-red-500 border-y border-r border-[#dbe0e6] dark:border-gray-800 shadow-sm overflow-hidden flex flex-col">
<div className="p-6">
<div className="flex flex-col lg:flex-row justify-between items-start gap-6">
<div className="flex items-center gap-4 min-w-[300px]">
<div className="size-14 rounded-xl bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center font-bold text-orange-600 text-xl">TS</div>
<div className="flex flex-col">
<h3 className="text-[#111418] dark:text-white font-bold text-lg leading-tight">Tech Store Online</h3>
<p className="text-sm text-[#617289]">Müşteri ID: 299102 • Sorumlu: <span className="font-medium">Yiğit Can</span></p>
<div className="flex gap-2 mt-2">
<span className="material-symbols-outlined text-lg text-blue-500 bg-blue-50 dark:bg-blue-900/20 p-1 rounded" title="Google Ads">ads_click</span>
<span className="material-symbols-outlined text-lg text-pink-500 bg-pink-50 dark:bg-pink-900/20 p-1 rounded" title="TikTok Ads">music_note</span>
</div>
</div>
</div>
<div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
<div className="flex flex-col gap-2">
<div className="flex justify-between items-end">
<p className="text-xs font-bold uppercase tracking-wider text-[#617289]">Harcama Durumu</p>
<span className="text-sm font-bold text-red-500">%104</span>
</div>
<div className="w-full bg-gray-200 dark:bg-gray-700 h-2.5 rounded-full overflow-hidden">
<div className="bg-red-500 h-full" style={{ "width": "100%" }}></div>
</div>
<div className="flex justify-between text-xs">
<span className="text-[#617289]">Limit: ₺200.000</span>
<span className="font-bold text-[#111418] dark:text-white">₺208.000 Harcandı</span>
</div>
</div>
<div className="flex flex-col justify-center items-center md:items-start border-x border-gray-100 dark:border-gray-800 px-8">
<p className="text-xs font-bold uppercase tracking-wider text-[#617289] mb-1">Mevcut ROAS</p>
<div className="flex items-baseline gap-1">
<span className="text-2xl font-black text-[#111418] dark:text-white">3.2</span>
<span className="text-sm font-bold text-red-500">(-0.4)</span>
</div>
</div>
<div className="flex flex-col justify-center items-center md:items-end">
<p className="text-xs font-bold uppercase tracking-wider text-[#617289] mb-2">Genel Sağlık</p>
<div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-100 dark:border-red-900/30">
<span className="size-2.5 rounded-full bg-red-500 animate-pulse"></span>
<span className="text-sm font-bold uppercase tracking-widest">Kritik</span>
</div>
</div>
</div>
</div>
</div>
<div className="bg-gray-50 dark:bg-gray-800/40 px-6 py-4 border-t border-[#dbe0e6] dark:border-gray-800 flex flex-wrap gap-4 items-center justify-between">
<p className="text-sm text-[#617289] italic">Bütçe aşımı tespit edildi. Kampanya optimizasyonu gerekiyor.</p>
<div className="flex gap-2">
<button className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-[#617289] hover:text-primary transition-colors border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#1a2432]">
<span className="material-symbols-outlined text-lg">sticky_note_2</span> Not Ekle
                        </button>
<button className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-[#617289] hover:text-primary transition-colors border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#1a2432]">
<span className="material-symbols-outlined text-lg">assessment</span> Rapor
                        </button>
<button className="flex items-center gap-2 px-5 py-2 text-sm font-bold text-white bg-primary hover:bg-primary/90 transition-colors rounded-lg">
<span className="material-symbols-outlined text-lg">visibility</span> Detaya Git
                        </button>
</div>
</div>
</div>
<div className="bg-white dark:bg-[#1a2432] rounded-xl border-l-4 border-l-l-amber-500 border-y border-r border-[#dbe0e6] dark:border-gray-800 shadow-sm overflow-hidden flex flex-col">
<div className="p-6">
<div className="flex flex-col lg:flex-row justify-between items-start gap-6">
<div className="flex items-center gap-4 min-w-[300px]">
<div className="size-14 rounded-xl bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center font-bold text-purple-600 text-xl">ED</div>
<div className="flex flex-col">
<h3 className="text-[#111418] dark:text-white font-bold text-lg leading-tight">Ev Dekorasyon Depo</h3>
<p className="text-sm text-[#617289]">Müşteri ID: 882310 • Sorumlu: <span className="font-medium">Yiğit Can</span></p>
<div className="flex gap-2 mt-2">
<span className="material-symbols-outlined text-lg text-blue-500 bg-blue-50 dark:bg-blue-900/20 p-1 rounded">ads_click</span>
</div>
</div>
</div>
<div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
<div className="flex flex-col gap-2">
<div className="flex justify-between items-end">
<p className="text-xs font-bold uppercase tracking-wider text-[#617289]">Harcama Durumu</p>
<span className="text-sm font-bold text-amber-500">%92</span>
</div>
<div className="w-full bg-gray-200 dark:bg-gray-700 h-2.5 rounded-full overflow-hidden">
<div className="bg-amber-500 h-full" style={{ "width": "92%" }}></div>
</div>
<div className="flex justify-between text-xs">
<span className="text-[#617289]">Limit: ₺150.000</span>
<span className="font-bold text-[#111418] dark:text-white">₺138.000 Harcandı</span>
</div>
</div>
<div className="flex flex-col justify-center items-center md:items-start border-x border-gray-100 dark:border-gray-800 px-8">
<p className="text-xs font-bold uppercase tracking-wider text-[#617289] mb-1">Mevcut ROAS</p>
<div className="flex items-baseline gap-1">
<span className="text-2xl font-black text-[#111418] dark:text-white">2.8</span>
<span className="text-sm font-bold text-[#617289]">(0.0)</span>
</div>
</div>
<div className="flex flex-col justify-center items-center md:items-end">
<p className="text-xs font-bold uppercase tracking-wider text-[#617289] mb-2">Genel Sağlık</p>
<div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border border-amber-100 dark:border-amber-900/30">
<span className="size-2.5 rounded-full bg-amber-500"></span>
<span className="text-sm font-bold uppercase tracking-widest">Dikkat</span>
</div>
</div>
</div>
</div>
</div>
<div className="bg-gray-50 dark:bg-gray-800/40 px-6 py-4 border-t border-[#dbe0e6] dark:border-gray-800 flex flex-wrap gap-4 items-center justify-between">
<p className="text-sm text-[#617289] italic">Ay sonu bütçe tükenmek üzere, hız kesme gerekebilir.</p>
<div className="flex gap-2">
<button className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-[#617289] hover:text-primary transition-colors border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#1a2432]">
<span className="material-symbols-outlined text-lg">sticky_note_2</span> Not Ekle
                        </button>
<button className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-[#617289] hover:text-primary transition-colors border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#1a2432]">
<span className="material-symbols-outlined text-lg">assessment</span> Rapor
                        </button>
<button className="flex items-center gap-2 px-5 py-2 text-sm font-bold text-white bg-primary hover:bg-primary/90 transition-colors rounded-lg">
<span className="material-symbols-outlined text-lg">visibility</span> Detaya Git
                        </button>
</div>
</div>
</div>
<div className="bg-white dark:bg-[#1a2432] rounded-xl border-l-4 border-l-l-emerald-500 border-y border-r border-[#dbe0e6] dark:border-gray-800 shadow-sm overflow-hidden flex flex-col">
<div className="p-6">
<div className="flex flex-col lg:flex-row justify-between items-start gap-6">
<div className="flex items-center gap-4 min-w-[300px]">
<div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center font-bold text-primary text-xl">GL</div>
<div className="flex flex-col">
<h3 className="text-[#111418] dark:text-white font-bold text-lg leading-tight">Global Lojistik A.Ş.</h3>
<p className="text-sm text-[#617289]">Müşteri ID: 481023 • Sorumlu: <span className="font-medium">Yiğit Can</span></p>
<div className="flex gap-2 mt-2">
<span className="material-symbols-outlined text-lg text-blue-500 bg-blue-50 dark:bg-blue-900/20 p-1 rounded">ads_click</span>
<span className="material-symbols-outlined text-lg text-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 p-1 rounded">social_leaderboard</span>
<span className="material-symbols-outlined text-lg text-pink-500 bg-pink-50 dark:bg-pink-900/20 p-1 rounded">music_note</span>
</div>
</div>
</div>
<div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
<div className="flex flex-col gap-2">
<div className="flex justify-between items-end">
<p className="text-xs font-bold uppercase tracking-wider text-[#617289]">Harcama Durumu</p>
<span className="text-sm font-bold text-[#617289]">%75</span>
</div>
<div className="w-full bg-gray-200 dark:bg-gray-700 h-2.5 rounded-full overflow-hidden">
<div className="bg-primary h-full" style={{ "width": "75%" }}></div>
</div>
<div className="flex justify-between text-xs">
<span className="text-[#617289]">Limit: ₺450.000</span>
<span className="font-bold text-[#111418] dark:text-white">₺337.500 Harcandı</span>
</div>
</div>
<div className="flex flex-col justify-center items-center md:items-start border-x border-gray-100 dark:border-gray-800 px-8">
<p className="text-xs font-bold uppercase tracking-wider text-[#617289] mb-1">Mevcut ROAS</p>
<div className="flex items-baseline gap-1">
<span className="text-2xl font-black text-[#111418] dark:text-white">4.5</span>
<span className="text-sm font-bold text-emerald-500">(+0.3)</span>
</div>
</div>
<div className="flex flex-col justify-center items-center md:items-end">
<p className="text-xs font-bold uppercase tracking-wider text-[#617289] mb-2">Genel Sağlık</p>
<div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/30">
<span className="size-2.5 rounded-full bg-emerald-500"></span>
<span className="text-sm font-bold uppercase tracking-widest">İyi</span>
</div>
</div>
</div>
</div>
</div>
<div className="bg-gray-50 dark:bg-gray-800/40 px-6 py-4 border-t border-[#dbe0e6] dark:border-gray-800 flex flex-wrap gap-4 items-center justify-between">
<p className="text-sm text-[#617289] italic">Tüm hedefler yolunda gidiyor. ROAS artış eğiliminde.</p>
<div className="flex gap-2">
<button className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-[#617289] hover:text-primary transition-colors border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#1a2432]">
<span className="material-symbols-outlined text-lg">sticky_note_2</span> Not Ekle
                        </button>
<button className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-[#617289] hover:text-primary transition-colors border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#1a2432]">
<span className="material-symbols-outlined text-lg">assessment</span> Rapor
                        </button>
<button className="flex items-center gap-2 px-5 py-2 text-sm font-bold text-white bg-primary hover:bg-primary/90 transition-colors rounded-lg">
<span className="material-symbols-outlined text-lg">visibility</span> Detaya Git
                        </button>
</div>
</div>
</div>
<div className="bg-white dark:bg-[#1a2432] rounded-xl border-l-4 border-l-l-emerald-500 border-y border-r border-[#dbe0e6] dark:border-gray-800 shadow-sm overflow-hidden flex flex-col">
<div className="p-6">
<div className="flex flex-col lg:flex-row justify-between items-start gap-6">
<div className="flex items-center gap-4 min-w-[300px]">
<div className="size-14 rounded-xl bg-emerald-100 dark:bg-emerald-900/20 flex items-center justify-center font-bold text-emerald-600 text-xl">MD</div>
<div className="flex flex-col">
<h3 className="text-[#111418] dark:text-white font-bold text-lg leading-tight">Moda Dünyası Butik</h3>
<p className="text-sm text-[#617289]">Müşteri ID: 110443 • Sorumlu: <span className="font-medium">Yiğit Can</span></p>
<div className="flex gap-2 mt-2">
<span className="material-symbols-outlined text-lg text-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 p-1 rounded">social_leaderboard</span>
<span className="material-symbols-outlined text-lg text-pink-500 bg-pink-50 dark:bg-pink-900/20 p-1 rounded">music_note</span>
</div>
</div>
</div>
<div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
<div className="flex flex-col gap-2">
<div className="flex justify-between items-end">
<p className="text-xs font-bold uppercase tracking-wider text-[#617289]">Harcama Durumu</p>
<span className="text-sm font-bold text-[#617289]">%40</span>
</div>
<div className="w-full bg-gray-200 dark:bg-gray-700 h-2.5 rounded-full overflow-hidden">
<div className="bg-primary h-full" style={{ "width": "40%" }}></div>
</div>
<div className="flex justify-between text-xs">
<span className="text-[#617289]">Limit: ₺350.000</span>
<span className="font-bold text-[#111418] dark:text-white">₺140.000 Harcandı</span>
</div>
</div>
<div className="flex flex-col justify-center items-center md:items-start border-x border-gray-100 dark:border-gray-800 px-8">
<p className="text-xs font-bold uppercase tracking-wider text-[#617289] mb-1">Mevcut ROAS</p>
<div className="flex items-baseline gap-1">
<span className="text-2xl font-black text-[#111418] dark:text-white">5.1</span>
<span className="text-sm font-bold text-emerald-500">(+0.8)</span>
</div>
</div>
<div className="flex flex-col justify-center items-center md:items-end">
<p className="text-xs font-bold uppercase tracking-wider text-[#617289] mb-2">Genel Sağlık</p>
<div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/30">
<span className="size-2.5 rounded-full bg-emerald-500"></span>
<span className="text-sm font-bold uppercase tracking-widest">İyi</span>
</div>
</div>
</div>
</div>
</div>
<div className="bg-gray-50 dark:bg-gray-800/40 px-6 py-4 border-t border-[#dbe0e6] dark:border-gray-800 flex flex-wrap gap-4 items-center justify-between">
<p className="text-sm text-[#617289] italic">Potansiyel yüksek, bütçe artırımı önerilebilir.</p>
<div className="flex gap-2">
<button className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-[#617289] hover:text-primary transition-colors border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#1a2432]">
<span className="material-symbols-outlined text-lg">sticky_note_2</span> Not Ekle
                        </button>
<button className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-[#617289] hover:text-primary transition-colors border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#1a2432]">
<span className="material-symbols-outlined text-lg">assessment</span> Rapor
                        </button>
<button className="flex items-center gap-2 px-5 py-2 text-sm font-bold text-white bg-primary hover:bg-primary/90 transition-colors rounded-lg">
<span className="material-symbols-outlined text-lg">visibility</span> Detaya Git
                        </button>
</div>
</div>
</div>
</div>
<div className="mt-8 flex items-center justify-between">
<p className="text-sm text-[#617289] dark:text-gray-400 font-medium">Toplam 12 müşteriden 1-4 arası gösteriliyor</p>
<div className="flex gap-2">
<button className="flex items-center justify-center size-10 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 disabled:opacity-50" disabled>
<span className="material-symbols-outlined text-xl">chevron_left</span>
</button>
<button className="flex items-center justify-center size-10 rounded-lg border border-primary bg-primary text-white font-bold text-sm">1</button>
<button className="flex items-center justify-center size-10 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-[#111418] dark:text-white font-medium text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">2</button>
<button className="flex items-center justify-center size-10 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-[#111418] dark:text-white font-medium text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">3</button>
<button className="flex items-center justify-center size-10 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-[#111418] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
<span className="material-symbols-outlined text-xl">chevron_right</span>
</button>
</div>
</div>

    </div>
  );
}
