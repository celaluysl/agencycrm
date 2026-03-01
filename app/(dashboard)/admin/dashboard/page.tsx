
"use client";

import React from "react";

export default function Page() {
  return (
    <div className="flex-1 flex flex-col flex-1 flex flex-col overflow-y-auto custom-scrollbar">
      

<div className="p-8 space-y-6">
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white dark:bg-[#1a2432] p-6 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm flex flex-col gap-1">
<div className="flex justify-between items-start mb-2">
<span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">account_balance_wallet</span>
<span className="text-[#07883b] text-xs font-bold bg-[#07883b]/10 px-2 py-1 rounded">+12.5%</span>
</div>
<p className="text-[#617289] text-xs font-semibold uppercase tracking-wider">Toplam Ciro</p>
<p className="text-2xl font-bold">₺4.280.400</p>
</div>
<div className="bg-white dark:bg-[#1a2432] p-6 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm flex flex-col gap-1">
<div className="flex justify-between items-start mb-2">
<span className="material-symbols-outlined text-orange-500 bg-orange-500/10 p-2 rounded-lg">pending_actions</span>
<span className="text-[#e73908] text-xs font-bold bg-[#e73908]/10 px-2 py-1 rounded">-2.1%</span>
</div>
<p className="text-[#617289] text-xs font-semibold uppercase tracking-wider">Bekleyen Tahsilat</p>
<p className="text-2xl font-bold">₺412.200</p>
</div>
<div className="bg-white dark:bg-[#1a2432] p-6 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm flex flex-col gap-1">
<div className="flex justify-between items-start mb-2">
<span className="material-symbols-outlined text-blue-500 bg-blue-500/10 p-2 rounded-lg">rocket_launch</span>
<span className="text-[#07883b] text-xs font-bold bg-[#07883b]/10 px-2 py-1 rounded">+4</span>
</div>
<p className="text-[#617289] text-xs font-semibold uppercase tracking-wider">Aktif Projeler</p>
<p className="text-2xl font-bold">24</p>
</div>
<div className="bg-white dark:bg-[#1a2432] p-6 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm flex flex-col gap-1">
<div className="flex justify-between items-start mb-2">
<span className="material-symbols-outlined text-green-500 bg-green-500/10 p-2 rounded-lg">trending_up</span>
<span className="text-[#07883b] text-xs font-bold bg-[#07883b]/10 px-2 py-1 rounded">+5.2%</span>
</div>
<p className="text-[#617289] text-xs font-semibold uppercase tracking-wider">Aylık Karlılık</p>
<p className="text-2xl font-bold">28.5%</p>
</div>
</section>
<div className="grid grid-cols-1 gap-6">
<div className="bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 overflow-hidden shadow-sm flex flex-col">
<div className="px-6 py-5 border-b border-[#f0f2f4] dark:border-gray-800 flex justify-between items-center">
<h3 className="font-bold text-base flex items-center gap-2">
<span className="material-symbols-outlined text-primary">filter_alt</span>
                            Satış Hunisi (Sales Funnel)
                        </h3>
<div className="flex gap-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
<button className="px-3 py-1 text-[10px] font-bold bg-white dark:bg-gray-700 rounded-md shadow-sm">Bu Ay</button>
<button className="px-3 py-1 text-[10px] font-bold text-[#617289]">Geçen Ay</button>
</div>
</div>
<div className="p-8">
<div className="flex flex-col md:flex-row items-stretch gap-1">
<div className="flex-1 bg-blue-600 dark:bg-blue-700 p-6 text-white funnel-step relative min-h-[140px] flex flex-col justify-center">
<p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Yeni Adaylar</p>
<p className="text-3xl font-bold mt-1">142</p>
<p className="text-[10px] mt-2 font-medium">100% Toplam</p>
</div>
<div className="flex-1 bg-blue-500 dark:bg-blue-600 p-6 text-white funnel-step relative min-h-[140px] flex flex-col justify-center">
<p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Görüşme</p>
<p className="text-3xl font-bold mt-1">64</p>
<p className="text-[10px] mt-2 font-medium">45% Dönüşüm</p>
</div>
<div className="flex-1 bg-blue-400 dark:bg-blue-500 p-6 text-white funnel-step relative min-h-[140px] flex flex-col justify-center">
<p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Teklif Sunuldu</p>
<p className="text-3xl font-bold mt-1">28</p>
<p className="text-[10px] mt-2 font-medium">43% Dönüşüm</p>
</div>
<div className="flex-1 bg-green-500 dark:bg-green-600 p-6 text-white funnel-step relative min-h-[140px] flex flex-col justify-center">
<p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Anlaşma</p>
<p className="text-3xl font-bold mt-1">12</p>
<p className="text-[10px] mt-2 font-medium">42% Dönüşüm</p>
</div>
</div>
<div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center border-t border-gray-100 dark:border-gray-800 pt-6">
<div>
<p className="text-[10px] text-[#617289] font-bold uppercase">Potansiyel Değer</p>
<p className="text-lg font-bold">₺1.2M</p>
</div>
<div>
<p className="text-[10px] text-[#617289] font-bold uppercase">Ort. Kapanış Süresi</p>
<p className="text-lg font-bold">14 Gün</p>
</div>
<div>
<p className="text-[10px] text-[#617289] font-bold uppercase">Kayıp Oranı</p>
<p className="text-lg font-bold text-red-500">12%</p>
</div>
<div>
<p className="text-[10px] text-[#617289] font-bold uppercase">Genel Verimlilik</p>
<p className="text-lg font-bold text-green-500">8.4%</p>
</div>
</div>
</div>
</div>
<div className="bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 overflow-hidden shadow-sm flex flex-col">
<div className="px-6 py-5 border-b border-[#f0f2f4] dark:border-gray-800 flex justify-between items-center">
<h3 className="font-bold text-base flex items-center gap-2">
<span className="material-symbols-outlined text-primary">groups</span>
                            Satış Ekibi Performans Detayları
                        </h3>
<button className="text-xs font-bold text-primary hover:underline">Tümünü Gör</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50/50 dark:bg-gray-800/50">
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Satış Temsilcisi</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider text-center">Aktif Fırsat</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Toplam Teklif Değeri</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider text-center">Kapanış Oranı</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Hedef Gerçekleşme</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 dark:divide-gray-800">
<tr>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-cover bg-center border border-gray-100 dark:border-gray-700" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuApd7wABpyDAoZ2wYREosRUOP7paHPK49i7HH3a4SnOhyfoS08h6nV9dseWo0cC5iuLq6RnNBv7WRNN0EtJBvM1fPi41rjSrJIUy8dM-LX8KMW8QRqS45WLtuTAxvWionLl-Pp1PW243Sm9JJPUySg1l2WxFjfdaVJkjVvGmQ5NRTu8MpWHCYajAZSj2dnMYwUgygaBR67swbqV_4dQ2hbOGYTZ3ZaBMwH0b9NVw3swqVI2mhN03g3zXNOPBz6nWX-4PxKn4ON4ERYw')" }}></div>
<span className="text-sm font-bold">Burak Yılmaz</span>
</div>
</td>
<td className="px-6 py-4 text-center">
<span className="text-sm font-semibold">18</span>
</td>
<td className="px-6 py-4">
<span className="text-sm font-bold text-[#111418] dark:text-white">₺420.000</span>
</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">%24</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="flex-1 bg-gray-100 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[82%]"></div>
</div>
<span className="text-[11px] font-bold min-w-[30px]">%82</span>
</div>
</td>
</tr>
<tr>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-cover bg-center border border-gray-100 dark:border-gray-700" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAsJqcdiXpE0AqS-1hBrgBufEKFz5H0Ac37geitBCue3FKT6B1S4CZwuYCPlrRrMKzNsrpSC0k1vtVg1XMzaFAZuVHvCAtG8uXdQnbyCB7apB1lH5oczpJG4EEkBan6RhEZA2rRfgC6yi5z1v3dZFwhlzX3l_iPXd9wGyvFxJs59Rqhfym7zPO769HtUg-enTpXXWLez66PLyh9DxDRl1VQC5xojOrwl4LBZHV6gUsUNVlfgHXvVvi_xmqoD1BH_rsNJEgZEByWCZbE')" }}></div>
<span className="text-sm font-bold">Zeynep Aras</span>
</div>
</td>
<td className="px-6 py-4 text-center">
<span className="text-sm font-semibold">12</span>
</td>
<td className="px-6 py-4">
<span className="text-sm font-bold text-[#111418] dark:text-white">₺315.500</span>
</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">%19</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="flex-1 bg-gray-100 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[65%]"></div>
</div>
<span className="text-[11px] font-bold min-w-[30px]">%65</span>
</div>
</td>
</tr>
<tr>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-cover bg-center border border-gray-100 dark:border-gray-700" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBetpMAViHItMGnpjPNucEA0es-uKScwaUzEbDIoN1oq8PkfyYyRi4ShQKGcSo48rTnlbZglMmgET1ygmk0gS1oGW4LZJPmfZ9nSz5CJxPXyQpFNSnEBvVXwZMiKmYI6iE2w2Q__YQjm1BgH4YZFLbidU9HMLqHSBopuwM51EpPztHNc-7hyQFPGKw7AOOysMi3v7pMfRAANxCcMt1V6IQODhi2fJs4twXnNYUt8cLgwJjq_3D7eU16ycymc7I-QojOQDBMBtw7Og3r')" }}></div>
<span className="text-sm font-bold">Ece Demir</span>
</div>
</td>
<td className="px-6 py-4 text-center">
<span className="text-sm font-semibold">22</span>
</td>
<td className="px-6 py-4">
<span className="text-sm font-bold text-[#111418] dark:text-white">₺580.000</span>
</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">%28</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="flex-1 bg-gray-100 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
<div className="bg-green-500 h-full w-[94%]"></div>
</div>
<span className="text-[11px] font-bold min-w-[30px] text-green-500">%94</span>
</div>
</td>
</tr>
<tr>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-cover bg-center border border-gray-100 dark:border-gray-700" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCU0acflHbID_sUaaDqV291O4iAg1TS1jPNRR1uYI5wH4kWRsHp4ElsuAoeuQrsKzwuMc5uFgt6WeYPE1cx5a07sLIDKMrs9dTaHcTqtskKM5dvohBagM9q1mQyDoD_7R16Q81fZ5GaeTaJ45NloPf2QQ22qvZiCxT7XgU97d94Au2MhZKM-qPe_lyAAZFixECEaJNoNCTGRxdWZeunhfmck1tBC91lOW1Sa6-dqwFT1l4OHKxwtIl_GIwDplpZBFy4IqmBE9nrP9iA')" }}></div>
<span className="text-sm font-bold">Kaan Şahin</span>
</div>
</td>
<td className="px-6 py-4 text-center">
<span className="text-sm font-semibold">9</span>
</td>
<td className="px-6 py-4">
<span className="text-sm font-bold text-[#111418] dark:text-white">₺195.000</span>
</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">%12</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="flex-1 bg-gray-100 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
<div className="bg-orange-500 h-full w-[45%]"></div>
</div>
<span className="text-[11px] font-bold min-w-[30px] text-orange-500">%45</span>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
<div className="lg:col-span-8 bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 overflow-hidden shadow-sm flex flex-col">
<div className="px-6 py-5 border-b border-[#f0f2f4] dark:border-gray-800 flex justify-between items-center">
<h3 className="font-bold text-base flex items-center gap-2">
<span className="material-symbols-outlined text-primary">diversity_3</span>
                            Operasyonel İş Yükü
                        </h3>
<div className="flex items-center gap-2">
<span className="size-2 rounded-full bg-green-500"></span>
<span className="text-[10px] font-bold text-[#617289] uppercase">Müsait</span>
</div>
</div>
<div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="p-4 border border-[#f0f2f4] dark:border-gray-800 rounded-xl bg-gray-50/50 dark:bg-gray-800/30">
<div className="flex items-center gap-3 mb-4">
<img alt="Avatar" className="size-10 rounded-full border-2 border-primary/10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApd7wABpyDAoZ2wYREosRUOP7paHPK49i7HH3a4SnOhyfoS08h6nV9dseWo0cC5iuLq6RnNBv7WRNN0EtJBvM1fPi41rjSrJIUy8dM-LX8KMW8QRqS45WLtuTAxvWionLl-Pp1PW243Sm9JJPUySg1l2WxFjfdaVJkjVvGmQ5NRTu8MpWHCYajAZSj2dnMYwUgygaBR67swbqV_4dQ2hbOGYTZ3ZaBMwH0b9NVw3swqVI2mhN03g3zXNOPBz6nWX-4PxKn4ON4ERYw" />
<div>
<p className="text-sm font-bold">Ahmet Y. (Tasarım)</p>
<p className="text-[10px] text-primary font-semibold">Kıdemli Tasarımcı</p>
</div>
<div className="ml-auto text-right">
<span className="text-xs font-bold text-red-500">85%</span>
</div>
</div>
<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-2">
<div className="bg-red-500 h-1.5 rounded-full w-[85%]"></div>
</div>
<p className="text-[10px] text-[#617289] font-medium">3 Aktif Proje • 12 Saat Doluluk</p>
</div>
<div className="p-4 border border-[#f0f2f4] dark:border-gray-800 rounded-xl bg-gray-50/50 dark:bg-gray-800/30">
<div className="flex items-center gap-3 mb-4">
<img alt="Avatar" className="size-10 rounded-full border-2 border-primary/10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsJqcdiXpE0AqS-1hBrgBufEKFz5H0Ac37geitBCue3FKT6B1S4CZwuYCPlrRrMKzNsrpSC0k1vtVg1XMzaFAZuVHvCAtG8uXdQnbyCB7apB1lH5oczpJG4EEkBan6RhEZA2rRfgC6yi5z1v3dZFwhlzX3l_iPXd9wGyvFxJs59Rqhfym7zPO769HtUg-enTpXXWLez66PLyh9DxDRl1VQC5xojOrwl4LBZHV6gUsUNVlfgHXvVvi_xmqoD1BH_rsNJEgZEByWCZbE" />
<div>
<p className="text-sm font-bold">Selin K. (SEO)</p>
<p className="text-[10px] text-primary font-semibold">SEO Uzmanı</p>
</div>
<div className="ml-auto text-right">
<span className="text-xs font-bold text-green-500">40%</span>
</div>
</div>
<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-2">
<div className="bg-green-500 h-1.5 rounded-full w-[40%]"></div>
</div>
<p className="text-[10px] text-[#617289] font-medium">5 Aktif Proje • 6 Saat Doluluk</p>
</div>
<div className="p-4 border border-[#f0f2f4] dark:border-gray-800 rounded-xl bg-gray-50/50 dark:bg-gray-800/30">
<div className="flex items-center gap-3 mb-4">
<img alt="Avatar" className="size-10 rounded-full border-2 border-primary/10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU0acflHbID_sUaaDqV291O4iAg1TS1jPNRR1uYI5wH4kWRsHp4ElsuAoeuQrsKzwuMc5uFgt6WeYPE1cx5a07sLIDKMrs9dTaHcTqtskKM5dvohBagM9q1mQyDoD_7R16Q81fZ5GaeTaJ45NloPf2QQ22qvZiCxT7XgU97d94Au2MhZKM-qPe_lyAAZFixECEaJNoNCTGRxdWZeunhfmck1tBC91lOW1Sa6-dqwFT1l4OHKxwtIl_GIwDplpZBFy4IqmBE9nrP9iA" />
<div>
<p className="text-sm font-bold">Caner D. (Yazılım)</p>
<p className="text-[10px] text-primary font-semibold">Full Stack Dev</p>
</div>
<div className="ml-auto text-right">
<span className="text-xs font-bold text-orange-500">72%</span>
</div>
</div>
<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-2">
<div className="bg-orange-500 h-1.5 rounded-full w-[72%]"></div>
</div>
<p className="text-[10px] text-[#617289] font-medium">2 Aktif Proje • 28 Saat Doluluk</p>
</div>
<div className="p-4 border border-[#f0f2f4] dark:border-gray-800 rounded-xl bg-gray-50/50 dark:bg-gray-800/30">
<div className="flex items-center gap-3 mb-4">
<img alt="Avatar" className="size-10 rounded-full border-2 border-primary/10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBetpMAViHItMGnpjPNucEA0es-uKScwaUzEbDIoN1oq8PkfyYyRi4ShQKGcSo48rTnlbZglMmgET1ygmk0gS1oGW4LZJPmfZ9nSz5CJxPXyQpFNSnEBvVXwZMiKmYI6iE2w2Q__YQjm1BgH4YZFLbidU9HMLqHSBopuwM51EpPztHNc-7hyQFPGKw7AOOysMi3v7pMfRAANxCcMt1V6IQODhi2fJs4twXnNYUt8cLgwJjq_3D7eU16ycymc7I-QojOQDBMBtw7Og3r" />
<div>
<p className="text-sm font-bold">Merve E. (İçerik)</p>
<p className="text-[10px] text-primary font-semibold">İçerik Editörü</p>
</div>
<div className="ml-auto text-right">
<span className="text-xs font-bold text-primary">60%</span>
</div>
</div>
<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-2">
<div className="bg-primary h-1.5 rounded-full w-[60%]"></div>
</div>
<p className="text-[10px] text-[#617289] font-medium">8 Aktif Proje • 15 Saat Doluluk</p>
</div>
</div>
</div>
<div className="lg:col-span-4 bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 overflow-hidden shadow-sm flex flex-col">
<div className="px-6 py-5 border-b border-[#f0f2f4] dark:border-gray-800 flex items-center justify-between">
<h3 className="font-bold text-base flex items-center gap-2 text-red-600">
<span className="material-symbols-outlined">error</span>
                            Kritik Uyarılar
                        </h3>
<span className="bg-red-100 text-red-600 px-2 py-0.5 rounded text-[10px] font-bold uppercase">3 Aktif</span>
</div>
<div className="p-4 space-y-3 flex-1 overflow-y-auto">
<div className="p-3 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 rounded-lg flex gap-3">
<span className="material-symbols-outlined text-red-600 text-[20px]">trending_down</span>
<div>
<p className="text-xs font-bold text-red-700 dark:text-red-400">SEO Düşüşü: CyberCore</p>
<p className="text-[10px] text-red-600/70">Ana anahtar kelime 2. sıradan 18. sıraya düştü</p>
</div>
</div>
<div className="p-3 bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/20 rounded-lg flex gap-3">
<span className="material-symbols-outlined text-orange-600 text-[20px]">warning</span>
<div>
<p className="text-xs font-bold text-orange-700 dark:text-orange-400">Bütçe Riski: GreenLeaf</p>
<p className="text-[10px] text-orange-600/70">Kalan bütçe %8 seviyesinde.</p>
</div>
</div>
<div className="p-3 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 rounded-lg flex gap-3">
<span className="material-symbols-outlined text-red-600 text-[20px]">schedule</span>
<div>
<p className="text-xs font-bold text-red-700 dark:text-red-400">Gecikme: Mobil App</p>
<p className="text-[10px] text-red-600/70">3. aşama teslimi 4 gün geçti.</p>
</div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
<div className="lg:col-span-7 bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 overflow-hidden shadow-sm flex flex-col">
<div className="px-6 py-5 border-b border-[#f0f2f4] dark:border-gray-800 flex justify-between items-center">
<h3 className="font-bold text-base flex items-center gap-2">
<span className="material-symbols-outlined text-primary">timer</span>
                            Harcanan Süreler (Departman Bazlı)
                        </h3>
<div className="flex gap-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
<button className="px-3 py-1 text-[10px] font-bold bg-white dark:bg-gray-700 rounded-md shadow-sm">Haftalık</button>
<button className="px-3 py-1 text-[10px] font-bold text-[#617289]">Aylık</button>
</div>
</div>
<div className="p-6 flex-1 flex flex-col justify-between min-h-[300px]">
<div className="space-y-6">
<div className="flex items-center gap-4">
<span className="w-20 text-xs font-bold text-[#617289]">Tasarım</span>
<div className="flex-1 bg-gray-100 dark:bg-gray-800 h-6 rounded-lg overflow-hidden relative">
<div className="absolute inset-0 bg-primary/20 w-[65%]"></div>
<div className="absolute inset-y-0 left-0 bg-primary w-[45%] flex items-center px-3">
<span className="text-[10px] font-bold text-white">124 Saat</span>
</div>
</div>
<span className="text-xs font-bold">+12%</span>
</div>
<div className="flex items-center gap-4">
<span className="w-20 text-xs font-bold text-[#617289]">SEO</span>
<div className="flex-1 bg-gray-100 dark:bg-gray-800 h-6 rounded-lg overflow-hidden relative">
<div className="absolute inset-0 bg-blue-400/20 w-[85%]"></div>
<div className="absolute inset-y-0 left-0 bg-blue-400 w-[72%] flex items-center px-3">
<span className="text-[10px] font-bold text-white">198 Saat</span>
</div>
</div>
<span className="text-xs font-bold text-red-500">-4%</span>
</div>
<div className="flex items-center gap-4">
<span className="w-20 text-xs font-bold text-[#617289]">Yazılım</span>
<div className="flex-1 bg-gray-100 dark:bg-gray-800 h-6 rounded-lg overflow-hidden relative">
<div className="absolute inset-0 bg-indigo-500/20 w-[95%]"></div>
<div className="absolute inset-y-0 left-0 bg-indigo-500 w-[88%] flex items-center px-3">
<span className="text-[10px] font-bold text-white">312 Saat</span>
</div>
</div>
<span className="text-xs font-bold">+28%</span>
</div>
<div className="flex items-center gap-4">
<span className="w-20 text-xs font-bold text-[#617289]">İçerik</span>
<div className="flex-1 bg-gray-100 dark:bg-gray-800 h-6 rounded-lg overflow-hidden relative">
<div className="absolute inset-0 bg-purple-500/20 w-[40%]"></div>
<div className="absolute inset-y-0 left-0 bg-purple-500 w-[35%] flex items-center px-3">
<span className="text-[10px] font-bold text-white">86 Saat</span>
</div>
</div>
<span className="text-xs font-bold">+5%</span>
</div>
</div>
<div className="mt-8 pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-around">
<div className="text-center">
<p className="text-xl font-bold">720</p>
<p className="text-[10px] text-[#617289] font-bold uppercase tracking-widest">Toplam Saat</p>
</div>
<div className="text-center">
<p className="text-xl font-bold">₺185k</p>
<p className="text-[10px] text-[#617289] font-bold uppercase tracking-widest">Tahmini Maliyet</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-5 bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 overflow-hidden shadow-sm flex flex-col">
<div className="px-6 py-5 border-b border-[#f0f2f4] dark:border-gray-800 flex justify-between items-center">
<h3 className="font-bold text-base flex items-center gap-2">
<span className="material-symbols-outlined text-primary">calendar_month</span>
                            Yaklaşan Rapor Tarihleri
                        </h3>
</div>
<div className="p-6">
<div className="space-y-6 relative before:absolute before:inset-y-0 before:left-3 before:w-0.5 before:bg-gray-100 dark:before:bg-gray-800">
<div className="relative pl-10">
<div className="absolute left-0 top-1 size-6 rounded-full bg-red-100 dark:bg-red-900/30 border-4 border-white dark:border-[#1a2432] flex items-center justify-center">
<div className="size-2 bg-red-500 rounded-full"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-sm font-bold text-[#111418] dark:text-white">Trendify - SEO Aylık Raporu</h4>
<p className="text-xs text-[#617289]">Müşteri: Trendify A.Ş.</p>
</div>
<span className="text-[10px] font-bold text-red-500 uppercase">Bugün</span>
</div>
</div>
<div className="relative pl-10">
<div className="absolute left-0 top-1 size-6 rounded-full bg-blue-100 dark:bg-blue-900/30 border-4 border-white dark:border-[#1a2432] flex items-center justify-center">
<div className="size-2 bg-blue-500 rounded-full"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-sm font-bold text-[#111418] dark:text-white">EcoStore - Yazılım İlerleme</h4>
<p className="text-xs text-[#617289]">Müşteri: EcoStore Ltd.</p>
</div>
<span className="text-[10px] font-bold text-[#617289] uppercase">Yarın</span>
</div>
</div>
<div className="relative pl-10">
<div className="absolute left-0 top-1 size-6 rounded-full bg-gray-100 dark:bg-gray-800 border-4 border-white dark:border-[#1a2432] flex items-center justify-center">
<div className="size-2 bg-gray-400 rounded-full"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-sm font-bold text-[#111418] dark:text-white">Finansal Çeyrek Analizi</h4>
<p className="text-xs text-[#617289]">Dahili Raporlama</p>
</div>
<span className="text-[10px] font-bold text-[#617289] uppercase">25 Eki</span>
</div>
</div>
<div className="relative pl-10">
<div className="absolute left-0 top-1 size-6 rounded-full bg-gray-100 dark:bg-gray-800 border-4 border-white dark:border-[#1a2432] flex items-center justify-center">
<div className="size-2 bg-gray-400 rounded-full"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-sm font-bold text-[#111418] dark:text-white">SolarEnergy - Reklam Performans</h4>
<p className="text-xs text-[#617289]">Müşteri: SolarEnergy Co.</p>
</div>
<span className="text-[10px] font-bold text-[#617289] uppercase">28 Eki</span>
</div>
</div>
</div>
<button className="w-full mt-8 py-2 border border-dashed border-gray-300 dark:border-gray-700 rounded-lg text-xs font-bold text-[#617289] hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            Tüm Rapor Takvimini Görüntüle
                        </button>
</div>
</div>
</div>
</div>

    </div>
  );
}
