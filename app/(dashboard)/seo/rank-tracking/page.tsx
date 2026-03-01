
"use client";

import React from "react";

export default function Page() {
  return (
    <div className="flex-1 flex flex-col">
      
<div className="px-8 py-6 space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
<div className="flex justify-between items-start mb-2">
<p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Toplam Kayıtlı Yayıncı</p>
<span className="material-symbols-outlined text-primary">public</span>
</div>
<div className="flex items-end gap-2">
<span className="text-2xl font-bold text-gray-900 dark:text-white">1,420</span>
<span className="text-green-600 dark:text-green-400 text-sm font-bold pb-1">+12 bu hafta</span>
</div>
</div>
<div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
<div className="flex justify-between items-start mb-2">
<p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Aktif Siparişler</p>
<span className="material-symbols-outlined text-orange-500">pending_actions</span>
</div>
<div className="flex items-end gap-2">
<span className="text-2xl font-bold text-gray-900 dark:text-white">48</span>
<span className="text-gray-400 text-xs pb-1">İşlemde olan</span>
</div>
</div>
<div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
<div className="flex justify-between items-start mb-2">
<p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Aylık Toplam Harcama</p>
<span className="material-symbols-outlined text-green-600">payments</span>
</div>
<div className="flex items-end gap-2">
<span className="text-2xl font-bold text-gray-900 dark:text-white">₺84.250</span>
<span className="text-red-500 text-sm font-bold pb-1">↑ 8%</span>
</div>
</div>
<div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
<div className="flex justify-between items-start mb-2">
<p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Ortalama DR Skoru</p>
<span className="material-symbols-outlined text-purple-500">grade</span>
</div>
<div className="flex items-end gap-2">
<span className="text-2xl font-bold text-gray-900 dark:text-white">42.8</span>
<span className="text-blue-500 text-sm font-bold pb-1">Genel Kalite</span>
</div>
</div>
</div>
<div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-bold text-gray-500 uppercase">DR Aralığı (0-100)</label>
<div className="flex items-center gap-2">
<input className="w-full text-sm rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-primary h-9" placeholder="Min" type="number" />
<span className="text-gray-400">-</span>
<input className="w-full text-sm rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-primary h-9" placeholder="Max" type="number" />
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-bold text-gray-500 uppercase">Trafik Eşiği (Min)</label>
<select className="w-full text-sm rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-primary h-9">
<option>Tümü</option>
<option>5,000+</option>
<option>10,000+</option>
<option>50,000+</option>
<option>100,000+</option>
</select>
</div>
<div className="space-y-1.5">
<label className="text-xs font-bold text-gray-500 uppercase">Fiyat Skalası</label>
<div className="flex items-center gap-2">
<input className="w-full text-sm rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-primary h-9" placeholder="Min ₺" type="number" />
<input className="w-full text-sm rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-primary h-9" placeholder="Max ₺" type="number" />
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-bold text-gray-500 uppercase">Aracı Kurum / Kişi</label>
<select className="w-full text-sm rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-primary h-9">
<option>Tüm Aracılar</option>
<option>Doğrudan Yayıncı</option>
<option>Medya Ajansı X</option>
<option>Bireysel Freelancer</option>
</select>
</div>
</div>
</div>
<div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50 dark:bg-gray-800/50">
<th className="px-6 py-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Yayıncı Adı</th>
<th className="px-6 py-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Aracı Kurum/Kişi</th>
<th className="px-6 py-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Kategori</th>
<th className="px-6 py-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-center">DR</th>
<th className="px-6 py-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-center">Aylık Trafik</th>
<th className="px-6 py-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-center">Spam Score</th>
<th className="px-6 py-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-center">Fiyat</th>
<th className="px-6 py-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-right">İşlem</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 dark:divide-gray-800">
<tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors group">
<td className="px-6 py-4">
<div className="flex flex-col">
<span className="text-sm font-bold text-gray-900 dark:text-white">hurriyet.com.tr</span>
<span className="text-xs text-blue-500 font-medium">Ulusal Haber</span>
</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<span className="text-sm text-gray-700 dark:text-gray-300">Demirören Medya</span>
<div className="tooltip-container">
<span className="material-symbols-outlined text-gray-400 text-lg cursor-help hover:text-primary">contact_support</span>
<div className="tooltip-content">
<p className="font-bold text-xs mb-1">İletişim Bilgileri</p>
<p className="text-xs flex items-center gap-1"><span className="material-symbols-outlined text-xs">call</span> +90 212 555 0000</p>
<p className="text-xs flex items-center gap-1"><span className="material-symbols-outlined text-xs">mail</span> reklam@demiroren.com</p>
</div>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-medium text-gray-600 dark:text-gray-400">Haber &amp; Magazin</span>
</td>
<td className="px-6 py-4 text-center">
<span className="text-sm font-bold text-gray-900 dark:text-white">92</span>
</td>
<td className="px-6 py-4 text-center">
<span className="text-sm text-gray-600 dark:text-gray-400">18.5M</span>
</td>
<td className="px-6 py-4 text-center">
<span className="text-xs font-bold text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded">1%</span>
</td>
<td className="px-6 py-4 text-center">
<span className="text-sm font-bold text-gray-900 dark:text-white">₺12.500</span>
</td>
<td className="px-6 py-4 text-right">
<button className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded hover:bg-blue-700 transition-colors">
                                    Satın Al
                                </button>
</td>
</tr>
<tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors group">
<td className="px-6 py-4">
<div className="flex flex-col">
<span className="text-sm font-bold text-gray-900 dark:text-white">webtekno.com</span>
<span className="text-xs text-blue-500 font-medium">Teknoloji</span>
</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<span className="text-sm text-gray-700 dark:text-gray-300">İzmo Bilişim</span>
<div className="tooltip-container">
<span className="material-symbols-outlined text-gray-400 text-lg cursor-help hover:text-primary">contact_support</span>
<div className="tooltip-content">
<p className="font-bold text-xs mb-1">İletişim Bilgileri</p>
<p className="text-xs">Ahmet Yılmaz (Satış Müdürü)</p>
<p className="text-xs">ahmet@izmo.com.tr</p>
</div>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-medium text-gray-600 dark:text-gray-400">Teknoloji, Oyun</span>
</td>
<td className="px-6 py-4 text-center">
<span className="text-sm font-bold text-gray-900 dark:text-white">78</span>
</td>
<td className="px-6 py-4 text-center">
<span className="text-sm text-gray-600 dark:text-gray-400">4.2M</span>
</td>
<td className="px-6 py-4 text-center">
<span className="text-xs font-bold text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20 px-2 py-0.5 rounded">4%</span>
</td>
<td className="px-6 py-4 text-center">
<span className="text-sm font-bold text-gray-900 dark:text-white">₺5.750</span>
</td>
<td className="px-6 py-4 text-right">
<button className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded hover:bg-blue-700 transition-colors">
                                    Satın Al
                                </button>
</td>
</tr>
<tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors group">
<td className="px-6 py-4">
<div className="flex flex-col">
<span className="text-sm font-bold text-gray-900 dark:text-white">donanimhaber.com</span>
<span className="text-xs text-blue-500 font-medium">Donanım</span>
</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<span className="text-sm text-gray-700 dark:text-gray-300">DH Medya</span>
<div className="tooltip-container">
<span className="material-symbols-outlined text-gray-400 text-lg cursor-help hover:text-primary">contact_support</span>
<div className="tooltip-content">
<p className="font-bold text-xs mb-1">İletişim Bilgileri</p>
<p className="text-xs">info@donanimhaber.com</p>
</div>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-medium text-gray-600 dark:text-gray-400">Teknoloji, İnceleme</span>
</td>
<td className="px-6 py-4 text-center">
<span className="text-sm font-bold text-gray-900 dark:text-white">81</span>
</td>
<td className="px-6 py-4 text-center">
<span className="text-sm text-gray-600 dark:text-gray-400">9.1M</span>
</td>
<td className="px-6 py-4 text-center">
<span className="text-xs font-bold text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded">2%</span>
</td>
<td className="px-6 py-4 text-center">
<span className="text-sm font-bold text-gray-900 dark:text-white">₺8.200</span>
</td>
<td className="px-6 py-4 text-right">
<button className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded hover:bg-blue-700 transition-colors">
                                    Satın Al
                                </button>
</td>
</tr>
<tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors group">
<td className="px-6 py-4">
<div className="flex flex-col">
<span className="text-sm font-bold text-gray-900 dark:text-white">shiftdelete.net</span>
<span className="text-xs text-blue-500 font-medium">Teknoloji</span>
</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<span className="text-sm text-gray-700 dark:text-gray-300">Hakkı Alkan (Direct)</span>
<div className="tooltip-container">
<span className="material-symbols-outlined text-gray-400 text-lg cursor-help hover:text-primary">contact_support</span>
<div className="tooltip-content">
<p className="font-bold text-xs mb-1">Doğrudan İletişim</p>
<p className="text-xs">hakki@shiftdelete.net</p>
<p className="text-xs">Whatsapp üzerinden ulaşılabilir.</p>
</div>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-medium text-gray-600 dark:text-gray-400">Teknoloji, Rehber</span>
</td>
<td className="px-6 py-4 text-center">
<span className="text-sm font-bold text-gray-900 dark:text-white">74</span>
</td>
<td className="px-6 py-4 text-center">
<span className="text-sm text-gray-600 dark:text-gray-400">3.8M</span>
</td>
<td className="px-6 py-4 text-center">
<span className="text-xs font-bold text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded">1%</span>
</td>
<td className="px-6 py-4 text-center">
<span className="text-sm font-bold text-gray-900 dark:text-white">₺4.500</span>
</td>
<td className="px-6 py-4 text-right">
<button className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded hover:bg-blue-700 transition-colors">
                                    Satın Al
                                </button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-4 bg-gray-50 dark:bg-gray-800/50 flex items-center justify-between border-t border-gray-200 dark:border-gray-800">
<p className="text-sm text-gray-500 dark:text-gray-400">Toplam <span className="font-bold text-gray-900 dark:text-white">1,420</span> yayıncıdan 1-50 arası listeleniyor.</p>
<div className="flex items-center gap-2">
<button className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-900 text-gray-600 dark:text-gray-400 disabled:opacity-50" disabled>
<span className="material-symbols-outlined text-sm">chevron_left</span>
</button>
<button className="px-3 py-1 rounded-lg bg-primary text-white text-sm font-bold">1</button>
<button className="px-3 py-1 rounded-lg hover:bg-white dark:hover:bg-gray-900 text-sm font-medium text-gray-600 dark:text-gray-400">2</button>
<button className="px-3 py-1 rounded-lg hover:bg-white dark:hover:bg-gray-900 text-sm font-medium text-gray-600 dark:text-gray-400">3</button>
<span className="text-gray-400 px-1">...</span>
<button className="px-3 py-1 rounded-lg hover:bg-white dark:hover:bg-gray-900 text-sm font-medium text-gray-600 dark:text-gray-400">29</button>
<button className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-900 text-gray-600 dark:text-gray-400">
<span className="material-symbols-outlined text-sm">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
<footer className="mt-auto px-8 py-6 text-center text-gray-400 text-xs">
            © 2024 AgenciFlow ERP/CRM - SEO Departmanı Tanıtım Yazısı ve Yayıncı Envanter Yönetimi. Tüm veriler günlük olarak güncellenmektedir.
        </footer>

    </div>
  );
}
