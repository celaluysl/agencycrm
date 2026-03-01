
"use client";

import React from "react";

export default function Page() {
  return (
    <div className="flex-1 flex flex-col max-w-[1440px] mx-auto gap-6 p-6">
      
<aside className="w-[320px] flex flex-col gap-6 shrink-0">
<div className="bg-white dark:bg-[#1e293b] rounded-xl p-6 shadow-sm flex flex-col items-center text-center">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-xl size-24 mb-4 border-2 border-primary/10 shadow-inner" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDQv0_Z67oPJvlr0XJBTB-0nrsdUYkDZqoM0Cs4FbJbNABKregQ7yP6-BLsB6OgexgGHfRlIYpke1yOIBBoZ3VwPJhHJbJdSB4eAmOIBvjF2iFxUl_Ag_nucCV75iRWKOiSMK4WZ2rzrTctQzH1-zh1GnU9dcQBLh5B46Hbm_-YrykanZo4C5QscvdjJF610-SW_araLRAOqbfQGiQe4r1nRZ-EFxbekG1F8cbSEYUuRXA1BMoElEpWrLmGqKPps5tDKJClHdQmWbaH')" }}></div>
<h1 className="text-xl font-bold dark:text-white">Acme Corporation</h1>
<p className="text-[#617289] text-sm font-medium mb-1">Global Lojistik Çözümleri</p>
<div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full mb-4">AKTİF MÜŞTERİ</div>
<div className="w-full border-t border-[#f0f2f4] dark:border-gray-700 pt-4 flex flex-col gap-3 items-start text-left">
<p className="text-xs font-bold text-[#617289] uppercase tracking-wider mb-1">İletişim Bilgileri</p>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-xl">alternate_email</span>
<p className="text-sm dark:text-gray-300">contact@acme.com</p>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-xl">call</span>
<p className="text-sm dark:text-gray-300">+90 (212) 555 0123</p>
</div>
</div>
</div>
<div className="bg-white dark:bg-[#1e293b] rounded-xl p-5 shadow-sm border border-[#f0f2f4] dark:border-gray-800">
<p className="text-xs font-bold text-[#617289] uppercase tracking-wider mb-4">Alınan Hizmetler</p>
<div className="flex flex-wrap gap-2">
<div className="flex items-center gap-1.5 px-2.5 py-1 bg-primary/10 text-primary rounded-full text-[11px] font-bold border border-primary/20">
<span className="material-symbols-outlined text-sm">search</span>
                    SEO
                </div>
<div className="flex items-center gap-1.5 px-2.5 py-1 bg-primary/10 text-primary rounded-full text-[11px] font-bold border border-primary/20">
<span className="material-symbols-outlined text-sm">ads_click</span>
                    SEM
                </div>
<div className="flex items-center gap-1.5 px-2.5 py-1 bg-primary/10 text-primary rounded-full text-[11px] font-bold border border-primary/20">
<span className="material-symbols-outlined text-sm">desktop_windows</span>
                    Web Tasarım
                </div>
<div className="flex items-center gap-1.5 px-2.5 py-1 bg-primary/10 text-primary rounded-full text-[11px] font-bold border border-primary/20">
<span className="material-symbols-outlined text-sm">campaign</span>
                    Sosyal Medya
                </div>
</div>
</div>
<div className="bg-white dark:bg-[#1e293b] rounded-xl p-5 shadow-sm border border-[#f0f2f4] dark:border-gray-800">
<p className="text-xs font-bold text-[#617289] uppercase tracking-wider mb-4">Müşteri Temsilcisi</p>
<div className="flex items-center gap-4">
<div className="size-12 rounded-full bg-center bg-cover bg-no-repeat border border-gray-100" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBa_AsOGDhMOAC6iu9Nbyvh8t85sowDEuf_xwL6hLln57uIvluylrhgxdLMe9iKVX4UoiihmCUnTk0sO4dARCtM_EbkHnjKvuTCweyLJJxJBbWJaj-RmOWPlsvG_wIsN8NjI0JgBKr-vLhxdpEr2qtmXlilKWQ27s23xmJjAOGor2JuBUnaB0sb4PIzkqJS1M7IF7updlm7UBkwp1lh7eO9joKv5GclIeJHFWyMre6r5BGHAU9R1kFlNiJwmvjfc4bNa09yVV0kih08')" }}></div>
<div className="flex flex-col">
<p className="text-sm font-bold dark:text-white">John Smith</p>
<p className="text-xs text-[#617289]">Kıdemli Müşteri Yöneticisi</p>
</div>
<button className="ml-auto flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors">
<span className="material-symbols-outlined text-lg">chat</span>
</button>
</div>
</div>
</aside>
<div className="flex-1 flex flex-col gap-6">
<div className="bg-white dark:bg-[#1e293b] rounded-xl shadow-sm border border-[#f0f2f4] dark:border-gray-700">
<div className="flex px-6 border-b border-[#f0f2f4] dark:border-gray-800">
<div className="flex gap-8 overflow-x-auto no-scrollbar">
<button className="flex items-center gap-2 border-b-[3px] border-primary text-primary pb-4 pt-5">
<span className="material-symbols-outlined text-lg">all_inclusive</span>
<p className="text-sm font-bold leading-normal tracking-[0.015em]">Tüm Departmanlar</p>
</button>
<button className="flex items-center gap-2 border-b-[3px] border-transparent text-[#617289] hover:text-[#111418] dark:hover:text-white pb-4 pt-5 transition-colors">
<span className="material-symbols-outlined text-lg">search</span>
<p className="text-sm font-bold leading-normal tracking-[0.015em]">SEO</p>
</button>
<button className="flex items-center gap-2 border-b-[3px] border-transparent text-[#617289] hover:text-[#111418] dark:hover:text-white pb-4 pt-5 transition-colors">
<span className="material-symbols-outlined text-lg">ads_click</span>
<p className="text-sm font-bold leading-normal tracking-[0.015em]">SEM</p>
</button>
<button className="flex items-center gap-2 border-b-[3px] border-transparent text-[#617289] hover:text-[#111418] dark:hover:text-white pb-4 pt-5 transition-colors">
<span className="material-symbols-outlined text-lg">campaign</span>
<p className="text-sm font-bold leading-normal tracking-[0.015em]">Sosyal Medya</p>
</button>
</div>
</div>
<div className="p-6 bg-blue-50/50 dark:bg-blue-900/10 border-b border-[#f0f2f4] dark:border-gray-800">
<div className="flex items-center justify-between mb-4">
<div>
<h3 className="text-sm font-bold text-[#617289] uppercase tracking-wider">Son Rapor Özeti</h3>
<p className="text-lg font-bold dark:text-white">Kasım 2023 Performans Raporu</p>
</div>
<span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-lg">ÖNE ÇIKANLAR</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="bg-white dark:bg-[#1e293b] p-4 rounded-xl border border-blue-100 dark:border-blue-900/30">
<p className="text-[10px] font-bold text-[#617289] uppercase">Organik Trafik</p>
<div className="flex items-center gap-1.5">
<h4 className="text-xl font-bold text-green-600">+%24.8</h4>
<span className="material-symbols-outlined text-green-600 text-lg">trending_up</span>
</div>
</div>
<div className="bg-white dark:bg-[#1e293b] p-4 rounded-xl border border-blue-100 dark:border-blue-900/30">
<p className="text-[10px] font-bold text-[#617289] uppercase">Dönüşüm Oranı</p>
<div className="flex items-center gap-1.5">
<h4 className="text-xl font-bold text-green-600">+%12.2</h4>
<span className="material-symbols-outlined text-green-600 text-lg">trending_up</span>
</div>
</div>
<div className="bg-white dark:bg-[#1e293b] p-4 rounded-xl border border-blue-100 dark:border-blue-900/30">
<p className="text-[10px] font-bold text-[#617289] uppercase">Reklam Maliyeti (CPA)</p>
<div className="flex items-center gap-1.5">
<h4 className="text-xl font-bold text-red-500">-%8.4</h4>
<span className="material-symbols-outlined text-red-500 text-lg">trending_down</span>
</div>
</div>
<div className="bg-white dark:bg-[#1e293b] p-4 rounded-xl border border-blue-100 dark:border-blue-900/30">
<p className="text-[10px] font-bold text-[#617289] uppercase">Sosyal Etkileşim</p>
<div className="flex items-center gap-1.5">
<h4 className="text-xl font-bold text-primary">12.5K</h4>
<span className="material-symbols-outlined text-primary text-lg">groups</span>
</div>
</div>
</div>
</div>
<div className="p-0">
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="text-[11px] font-bold text-[#617289] uppercase tracking-wider border-b border-[#f0f2f4] dark:border-gray-800">
<th className="px-6 py-4">Rapor Adı</th>
<th className="px-6 py-4">Departman</th>
<th className="px-6 py-4">Yayın Tarihi</th>
<th className="px-6 py-4">Sorumlu Uzman</th>
<th className="px-6 py-4 text-right">İşlemler</th>
</tr>
</thead>
<tbody className="divide-y divide-[#f0f2f4] dark:divide-gray-800">
<tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-9 bg-red-50 dark:bg-red-900/20 text-red-600 rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-xl">picture_as_pdf</span>
</div>
<div>
<p className="text-sm font-bold dark:text-white">Kasım 2023 Performans Raporu</p>
<p className="text-[10px] text-[#617289]">2.4 MB • PDF</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-[#617289] text-[10px] font-bold rounded uppercase">Genel</span>
</td>
<td className="px-6 py-4">
<p className="text-xs font-medium dark:text-gray-300">12 Ara 2023</p>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="size-6 rounded-full bg-cover" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBp1bV71nBrlMhSFVgMsEXlGOZ7DUJcQj7p649-UTrknmS8pLWL4qEN75gk7cpbjCLWoZTr4Qt3-VdaJnCSXzc5x5b-iNHcTWz1WHhlUWo_ODSep4BCpwox290b5INtqy6cY9cBbSvOlju8UuPdhqknZZbzzpw4Py5xgqRHZZadfDRxhxeUbxe_Jz2hhAuqrgM_V_D50_KdSoamjb_y8OVwEPgxMAO9SOxwYM7dvF3FMDdVJiv4DBRwG5eFw737LPi9OJDV78ZM1z8j')" }}></div>
<p className="text-xs dark:text-gray-300">Ahmet Yılmaz</p>
</div>
</td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-2">
<button className="text-xs font-bold text-primary px-3 py-1.5 rounded-lg bg-primary/5 hover:bg-primary hover:text-white transition-all">Görüntüle</button>
<button className="flex items-center justify-center size-8 rounded-lg border border-gray-200 dark:border-gray-700 text-[#617289] hover:text-primary transition-colors">
<span className="material-symbols-outlined text-lg">download</span>
</button>
</div>
</td>
</tr>
<tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-9 bg-green-50 dark:bg-green-900/20 text-green-600 rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-xl">table_chart</span>
</div>
<div>
<p className="text-sm font-bold dark:text-white">SEO Anahtar Kelime Takibi - Ekim</p>
<p className="text-[10px] text-[#617289]">1.1 MB • XLSX</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="px-2 py-0.5 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-[10px] font-bold rounded uppercase">SEO</span>
</td>
<td className="px-6 py-4">
<p className="text-xs font-medium dark:text-gray-300">05 Kas 2023</p>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="size-6 rounded-full bg-cover" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBp1bV71nBrlMhSFVgMsEXlGOZ7DUJcQj7p649-UTrknmS8pLWL4qEN75gk7cpbjCLWoZTr4Qt3-VdaJnCSXzc5x5b-iNHcTWz1WHhlUWo_ODSep4BCpwox290b5INtqy6cY9cBbSvOlju8UuPdhqknZZbzzpw4Py5xgqRHZZadfDRxhxeUbxe_Jz2hhAuqrgM_V_D50_KdSoamjb_y8OVwEPgxMAO9SOxwYM7dvF3FMDdVJiv4DBRwG5eFw737LPi9OJDV78ZM1z8j')" }}></div>
<p className="text-xs dark:text-gray-300">Ahmet Yılmaz</p>
</div>
</td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-2">
<button className="text-xs font-bold text-primary px-3 py-1.5 rounded-lg bg-primary/5 hover:bg-primary hover:text-white transition-all">Görüntüle</button>
<button className="flex items-center justify-center size-8 rounded-lg border border-gray-200 dark:border-gray-700 text-[#617289] hover:text-primary transition-colors">
<span className="material-symbols-outlined text-lg">download</span>
</button>
</div>
</td>
</tr>
<tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-9 bg-orange-50 dark:bg-orange-900/20 text-orange-600 rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-xl">analytics</span>
</div>
<div>
<p className="text-sm font-bold dark:text-white">Ekim 2023 SEM Performans Analizi</p>
<p className="text-[10px] text-[#617289]">3.5 MB • PDF</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="px-2 py-0.5 bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 text-[10px] font-bold rounded uppercase">SEM</span>
</td>
<td className="px-6 py-4">
<p className="text-xs font-medium dark:text-gray-300">02 Kas 2023</p>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="size-6 rounded-full bg-cover" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCX887zJ9YhLcee7-VqVnqOC7NW2SHH4oLE65fnadwPYCwLRvqncaO2p8xC5uIwUoaKWfRNXEsxVU6px2-1weNhFw_ClT7SwxGQGvfDrfQ2VrbCxmPtgWCpVtxn0rHUeO-ptfEEVTQzc9b0-s-9wxrf1hYK8NdjPCrta8sWheLxkhSWHOUT9Ylt7prAmB5SUYdI-fDLEHfMlPUAi5008ha3FCPXjuCD3V6dbpUPh7lBhYueY8I9K0SzA25g5nHlTqYOSvGUpfjWKzOj')" }}></div>
<p className="text-xs dark:text-gray-300">Ayşe Kaya</p>
</div>
</td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-2">
<button className="text-xs font-bold text-primary px-3 py-1.5 rounded-lg bg-primary/5 hover:bg-primary hover:text-white transition-all">Görüntüle</button>
<button className="flex items-center justify-center size-8 rounded-lg border border-gray-200 dark:border-gray-700 text-[#617289] hover:text-primary transition-colors">
<span className="material-symbols-outlined text-lg">download</span>
</button>
</div>
</td>
</tr>
<tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-9 bg-purple-50 dark:bg-purple-900/20 text-purple-600 rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-xl">share</span>
</div>
<div>
<p className="text-sm font-bold dark:text-white">Sosyal Medya Aylık Rapor - Eylül</p>
<p className="text-[10px] text-[#617289]">5.8 MB • PDF</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="px-2 py-0.5 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 text-[10px] font-bold rounded uppercase">SOSYAL MEDYA</span>
</td>
<td className="px-6 py-4">
<p className="text-xs font-medium dark:text-gray-300">10 Eki 2023</p>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="size-6 rounded-full bg-cover" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDnBYAiKh6HQ1PbFopJkI97XeLKUNZNKVJ9Om5a6rQL6_nnwZiWv6YZIRZRlV0b62tqCf6mm1Zax09gmMVgics8e8hoP_Buh9CLY1bEzloKa3HgEhbdlVifo2Ni01yvmft5e3jAnK98c6SSiSKaIF1-0fLF6WYkMFHudJ0LOyvL0XLgLaI1F8TkymeVwRPG_RDVqyPkMR_p_idjIGLb48JbdTqMADLtiCK2qXQeE2wfCajOUq_fqkxXDmzg-28H0cV-IrZI--_NqLqV')" }}></div>
<p className="text-xs dark:text-gray-300">Mehmet Demir</p>
</div>
</td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-2">
<button className="text-xs font-bold text-primary px-3 py-1.5 rounded-lg bg-primary/5 hover:bg-primary hover:text-white transition-all">Görüntüle</button>
<button className="flex items-center justify-center size-8 rounded-lg border border-gray-200 dark:border-gray-700 text-[#617289] hover:text-primary transition-colors">
<span className="material-symbols-outlined text-lg">download</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="p-6 border-t border-[#f0f2f4] dark:border-gray-800 bg-gray-50/30 dark:bg-gray-800/30 flex items-center justify-between">
<p className="text-xs text-[#617289]">Toplam 4 rapor görüntüleniyor</p>
<div className="flex gap-2">
<button className="px-3 py-1 text-xs font-bold border border-gray-200 dark:border-gray-700 rounded bg-white dark:bg-[#1e293b] dark:text-white hover:bg-gray-50 transition-colors">Önceki</button>
<button className="px-3 py-1 text-xs font-bold bg-primary text-white rounded">1</button>
<button className="px-3 py-1 text-xs font-bold border border-gray-200 dark:border-gray-700 rounded bg-white dark:bg-[#1e293b] dark:text-white hover:bg-gray-50 transition-colors">Sonraki</button>
</div>
</div>
</div>
</div>

    </div>
  );
}
