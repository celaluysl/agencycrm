
"use client";

import React from "react";

export default function Page() {
  return (
    <div className="flex-1 flex flex-col flex-1 flex flex-col overflow-y-auto custom-scrollbar">
      

<div className="p-8 space-y-6">
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white dark:bg-[#1a2432] p-6 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm flex flex-col gap-1">
<p className="text-[#617289] text-[10px] font-bold uppercase tracking-wider">Aylık Toplam Maaş Gideri</p>
<p className="text-2xl font-bold text-[#111418] dark:text-white">₺842.500,00</p>
<div className="mt-2 flex items-center gap-1 text-[10px] text-success font-bold">
<span className="material-symbols-outlined text-xs">trending_up</span> +3.2% geçen aya göre
                    </div>
</div>
<div className="bg-white dark:bg-[#1a2432] p-6 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm flex flex-col gap-1">
<p className="text-[#617289] text-[10px] font-bold uppercase tracking-wider">Prim ve Bonuslar</p>
<p className="text-2xl font-bold text-success">₺64.200,00</p>
<div className="mt-2 flex items-center gap-1 text-[10px] text-[#617289] font-bold">
<span className="material-symbols-outlined text-xs">emoji_events</span> 12 Personel hak kazandı
                    </div>
</div>
<div className="bg-white dark:bg-[#1a2432] p-6 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm flex flex-col gap-1">
<p className="text-[#617289] text-[10px] font-bold uppercase tracking-wider">SGK ve Vergi Yükü</p>
<p className="text-2xl font-bold text-danger">₺218.400,00</p>
<div className="mt-2 flex items-center gap-1 text-[10px] text-danger font-bold">
<span className="material-symbols-outlined text-xs">info</span> Son ödeme: 26 Ekim
                    </div>
</div>
<div className="bg-white dark:bg-[#1a2432] p-6 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm flex flex-col gap-1">
<p className="text-[#617289] text-[10px] font-bold uppercase tracking-wider">Toplam Yan Haklar</p>
<p className="text-2xl font-bold text-primary">₺42.150,00</p>
<div className="mt-2 flex items-center gap-1 text-[10px] text-primary font-bold">
<span className="material-symbols-outlined text-xs">add_home</span> Yemek, Yol ve Özel Sağlık
                    </div>
</div>
</section>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
<div className="lg:col-span-9 bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 overflow-hidden shadow-sm">
<div className="px-6 py-5 border-b border-[#f0f2f4] dark:border-gray-800 flex justify-between items-center">
<h3 className="font-bold text-base flex items-center gap-2">
<span className="material-symbols-outlined text-primary">groups</span>
                            Personel Ödeme Listesi (Ekim 2023)
                        </h3>
<div className="flex gap-2">
<button className="flex items-center gap-1 text-xs font-bold text-[#617289] hover:text-primary transition-colors">
<span className="material-symbols-outlined text-sm">filter_list</span> Filtrele
                            </button>
<button className="flex items-center gap-1 text-xs font-bold text-[#617289] hover:text-primary transition-colors ml-4">
<span className="material-symbols-outlined text-sm">download</span> Excel İndir
                            </button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50/50 dark:bg-gray-800/50">
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Personel İsmi</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Departman</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Temel Maaş</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Prim / Bonus</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Kesintiler</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Net Ödeme</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider text-center">Durum</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 dark:divide-gray-800">
<tr>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary font-bold text-xs">MA</div>
<div>
<p className="text-sm font-bold">Mert Aydın</p>
<p className="text-[10px] text-[#617289]">Senior Developer</p>
</div>
</div>
</td>
<td className="px-6 py-4"><span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded text-[10px] font-bold uppercase">Yazılım</span></td>
<td className="px-6 py-4 text-xs font-semibold">₺42.500,00</td>
<td className="px-6 py-4 text-xs font-semibold text-success">+₺5.000,00</td>
<td className="px-6 py-4 text-xs font-semibold text-danger">-₺1.200,00</td>
<td className="px-6 py-4 text-sm font-bold">₺46.300,00</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">ÖDENDİ</span>
</td>
</tr>
<tr>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-700 font-bold text-xs">SK</div>
<div>
<p className="text-sm font-bold">Selin Kaya</p>
<p className="text-[10px] text-[#617289]">Art Director</p>
</div>
</div>
</td>
<td className="px-6 py-4"><span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded text-[10px] font-bold uppercase">Tasarım</span></td>
<td className="px-6 py-4 text-xs font-semibold">₺38.000,00</td>
<td className="px-6 py-4 text-xs font-semibold text-[#617289]">₺0,00</td>
<td className="px-6 py-4 text-xs font-semibold text-danger">-₺850,00</td>
<td className="px-6 py-4 text-sm font-bold">₺37.150,00</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 uppercase">Banka Talimatı Hazırlandı</span>
</td>
</tr>
<tr>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-700 font-bold text-xs">ÇÖ</div>
<div>
<p className="text-sm font-bold">Can Özkan</p>
<p className="text-[10px] text-[#617289]">Account Manager</p>
</div>
</div>
</td>
<td className="px-6 py-4"><span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded text-[10px] font-bold uppercase">Müşteri İlişkileri</span></td>
<td className="px-6 py-4 text-xs font-semibold">₺32.000,00</td>
<td className="px-6 py-4 text-xs font-semibold text-success">+₺8.500,00</td>
<td className="px-6 py-4 text-xs font-semibold text-[#617289]">₺0,00</td>
<td className="px-6 py-4 text-sm font-bold">₺40.500,00</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex px-2 py-0.5 rounded text-[10px] font-bold bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 uppercase">BEKLEMEDE</span>
</td>
</tr>
<tr>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-700 font-bold text-xs">AD</div>
<div>
<p className="text-sm font-bold">Aslı Demir</p>
<p className="text-[10px] text-[#617289]">SEO Specialist</p>
</div>
</div>
</td>
<td className="px-6 py-4"><span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded text-[10px] font-bold uppercase">Pazarlama</span></td>
<td className="px-6 py-4 text-xs font-semibold">₺28.500,00</td>
<td className="px-6 py-4 text-xs font-semibold text-success">+₺2.000,00</td>
<td className="px-6 py-4 text-xs font-semibold text-danger">-₺400,00</td>
<td className="px-6 py-4 text-sm font-bold">₺30.100,00</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">ÖDENDİ</span>
</td>
</tr>
<tr>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 font-bold text-xs">BK</div>
<div>
<p className="text-sm font-bold">Burak Koç</p>
<p className="text-[10px] text-[#617289]">Copywriter</p>
</div>
</div>
</td>
<td className="px-6 py-4"><span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-[#617289] rounded text-[10px] font-bold uppercase">İçerik</span></td>
<td className="px-6 py-4 text-xs font-semibold">₺24.000,00</td>
<td className="px-6 py-4 text-xs font-semibold text-[#617289]">₺0,00</td>
<td className="px-6 py-4 text-xs font-semibold text-[#617289]">₺0,00</td>
<td className="px-6 py-4 text-sm font-bold">₺24.000,00</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 uppercase">Banka Talimatı Hazırlandı</span>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-4 bg-gray-50/30 dark:bg-gray-800/20 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
<p className="text-xs text-[#617289] font-medium">Toplam 24 personel listeleniyor.</p>
<div className="flex gap-2">
<button className="px-3 py-1 border border-gray-200 dark:border-gray-700 rounded text-xs font-bold hover:bg-gray-50 dark:hover:bg-gray-800">Önceki</button>
<button className="px-3 py-1 border border-gray-200 dark:border-gray-700 rounded text-xs font-bold hover:bg-gray-50 dark:hover:bg-gray-800">Sonraki</button>
</div>
</div>
</div>
<div className="lg:col-span-3 space-y-6">
<div className="bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm p-6">
<h3 className="font-bold text-sm mb-4 flex items-center gap-2 uppercase tracking-wide">
<span className="material-symbols-outlined text-primary text-xl">file_download</span>
                            Hızlı İşlemler
                        </h3>
<div className="space-y-3">
<button className="w-full flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg group hover:bg-primary hover:text-white transition-all">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-xl">description</span>
<span className="text-xs font-bold">Bordro İndir (Zip)</span>
</div>
<span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">chevron_right</span>
</button>
<button className="w-full flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg group hover:bg-success hover:text-white transition-all">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-xl">task_alt</span>
<span className="text-xs font-bold">Toplu Ödeme Onayı</span>
</div>
<span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">chevron_right</span>
</button>
<button className="w-full flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg group hover:bg-primary hover:text-white transition-all">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-xl">send</span>
<span className="text-xs font-bold">Bordroları Gönder</span>
</div>
<span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">chevron_right</span>
</button>
</div>
</div>
<div className="bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm p-6">
<h3 className="font-bold text-sm mb-6 flex items-center gap-2 uppercase tracking-wide">
<span className="material-symbols-outlined text-primary text-xl">pie_chart</span>
                            Maaş Dağılımı
                        </h3>
<div className="flex flex-col items-center">
<div className="relative size-40 mb-6">
<svg className="size-full -rotate-90" viewBox="0 0 36 36">
<circle className="stroke-blue-500 fill-none" cx="18" cy="18" r="15.915" strokeDasharray="45 100" strokeDashoffset="0" strokeWidth="6"></circle>
<circle className="stroke-purple-500 fill-none" cx="18" cy="18" r="15.915" strokeDasharray="20 100" strokeDashoffset="-45" strokeWidth="6"></circle>
<circle className="stroke-orange-500 fill-none" cx="18" cy="18" r="15.915" strokeDasharray="15 100" strokeDashoffset="-65" strokeWidth="6"></circle>
<circle className="stroke-green-500 fill-none" cx="18" cy="18" r="15.915" strokeDasharray="10 100" strokeDashoffset="-80" strokeWidth="6"></circle>
<circle className="stroke-gray-300 fill-none" cx="18" cy="18" r="15.915" strokeDasharray="10 100" strokeDashoffset="-90" strokeWidth="6"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-base font-bold">₺842k</span>
<span className="text-[9px] text-[#617289] font-bold">EKİM</span>
</div>
</div>
<div className="w-full space-y-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="size-2 rounded-full bg-blue-500"></span>
<span className="text-xs font-medium">Yazılım</span>
</div>
<span className="text-xs font-bold">%45</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="size-2 rounded-full bg-purple-500"></span>
<span className="text-xs font-medium">Tasarım</span>
</div>
<span className="text-xs font-bold">%20</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="size-2 rounded-full bg-orange-500"></span>
<span className="text-xs font-medium">Müşteri İlişk.</span>
</div>
<span className="text-xs font-bold">%15</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="size-2 rounded-full bg-green-500"></span>
<span className="text-xs font-medium">Pazarlama</span>
</div>
<span className="text-xs font-bold">%10</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="size-2 rounded-full bg-gray-300"></span>
<span className="text-xs font-medium">Diğer</span>
</div>
<span className="text-xs font-bold">%10</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

    </div>
  );
}
