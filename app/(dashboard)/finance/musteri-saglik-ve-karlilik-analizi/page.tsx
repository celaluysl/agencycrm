
"use client";

import React from "react";

export default function Page() {
  return (
    <div className="flex-1 flex flex-col">
      

<div className="p-8 space-y-6">
<section className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="segment-card border-l-4 border-l-vip">
<div className="flex justify-between items-center mb-4">
<span className="material-symbols-outlined text-vip bg-vip/10 p-2 rounded-lg">star</span>
<span className="text-vip text-xs font-bold bg-vip/10 px-2 py-1 rounded">24 Müşteri</span>
</div>
<h3 className="text-sm font-bold">En Değerli Müşteriler (VIP)</h3>
<p className="text-2xl font-bold mt-1">₺2.1M <span className="text-xs font-normal text-[#617289]">Yıllık Değer</span></p>
<div className="mt-4 flex -space-x-2">
<div className="size-7 rounded-full border-2 border-white dark:border-[#1a2432] bg-cover bg-center" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuApd7wABpyDAoZ2wYREosRUOP7paHPK49i7HH3a4SnOhyfoS08h6nV9dseWo0cC5iuLq6RnNBv7WRNN0EtJBvM1fPi41rjSrJIUy8dM-LX8KMW8QRqS45WLtuTAxvWionLl-Pp1PW243Sm9JJPUySg1l2WxFjfdaVJkjVvGmQ5NRTu8MpWHCYajAZSj2dnMYwUgygaBR67swbqV_4dQ2hbOGYTZ3ZaBMwH0b9NVw3swqVI2mhN03g3zXNOPBz6nWX-4PxKn4ON4ERYw')" }}></div>
<div className="size-7 rounded-full border-2 border-white dark:border-[#1a2432] bg-cover bg-center" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAsJqcdiXpE0AqS-1hBrgBufEKFz5H0Ac37geitBCue3FKT6B1S4CZwuYCPlrRrMKzNsrpSC0k1vtVg1XMzaFAZuVHvCAtG8uXdQnbyCB7apB1lH5oczpJG4EEkBan6RhEZA2rRfgC6yi5z1v3dZFwhlzX3l_iPXd9wGyvFxJs59Rqhfym7zPO769HtUg-enTpXXWLez66PLyh9DxDRl1VQC5xojOrwl4LBZHV6gUsUNVlfgHXvVvi_xmqoD1BH_rsNJEgZEByWCZbE')" }}></div>
<div className="size-7 rounded-full border-2 border-white dark:border-[#1a2432] bg-cover bg-center" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBetpMAViHItMGnpjPNucEA0es-uKScwaUzEbDIoN1oq8PkfyYyRi4ShQKGcSo48rTnlbZglMmgET1ygmk0gS1oGW4LZJPmfZ9nSz5CJxPXyQpFNSnEBvVXwZMiKmYI6iE2w2Q__YQjm1BgH4YZFLbidU9HMLqHSBopuwM51EpPztHNc-7hyQFPGKw7AOOysMi3v7pMfRAANxCcMt1V6IQODhi2fJs4twXnNYUt8cLgwJjq_3D7eU16ycymc7I-QojOQDBMBtw7Og3r')" }}></div>
<div className="size-7 rounded-full border-2 border-white dark:border-[#1a2432] bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-[10px] font-bold">+21</div>
</div>
</div>
<div className="segment-card border-l-4 border-l-risk">
<div className="flex justify-between items-center mb-4">
<span className="material-symbols-outlined text-risk bg-risk/10 p-2 rounded-lg">warning</span>
<span className="text-risk text-xs font-bold bg-risk/10 px-2 py-1 rounded">8 Müşteri</span>
</div>
<h3 className="text-sm font-bold">Riskli Müşteriler</h3>
<p className="text-2xl font-bold mt-1">12% <span className="text-xs font-normal text-[#617289]">Churn Riski</span></p>
<div className="mt-4 flex items-center gap-2">
<span className="text-[10px] font-bold text-risk uppercase">Düşük Performans / Ödeme Sorunu</span>
</div>
</div>
<div className="segment-card border-l-4 border-l-success">
<div className="flex justify-between items-center mb-4">
<span className="material-symbols-outlined text-success bg-success/10 p-2 rounded-lg">new_releases</span>
<span className="text-success text-xs font-bold bg-success/10 px-2 py-1 rounded">12 Müşteri</span>
</div>
<h3 className="text-sm font-bold">Yeni Kazanılanlar</h3>
<p className="text-2xl font-bold mt-1">₺480k <span className="text-xs font-normal text-[#617289]">Yeni Ciro</span></p>
<div className="mt-4 flex items-center gap-2">
<span className="text-[10px] font-bold text-success uppercase">Son 30 Gün İçinde Aktif</span>
</div>
</div>
</section>
<div className="bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 overflow-hidden shadow-sm">
<div className="px-6 py-5 border-b border-[#f0f2f4] dark:border-gray-800 flex justify-between items-center">
<h3 className="font-bold text-base flex items-center gap-2">
<span className="material-symbols-outlined text-primary">analytics</span>
                        Müşteri Sağlık Skoru Tablosu
                    </h3>
<div className="flex gap-2">
<input className="text-xs border-gray-200 dark:border-gray-700 dark:bg-gray-800 rounded-lg px-3 py-1.5 w-64" placeholder="Müşteri ara..." type="text" />
<button className="bg-gray-100 dark:bg-gray-800 p-1.5 rounded-lg text-[#617289]">
<span className="material-symbols-outlined text-sm">filter_list</span>
</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50/50 dark:bg-gray-800/50">
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Müşteri Adı</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Hizmet Süresi</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Ödeme Düzeni</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Operasyonel Başarı (SEO/SEM)</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider text-center">Sağlık Puanı</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 dark:divide-gray-800">
<tr>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">TC</div>
<div>
<p className="text-sm font-bold">TechCorp Solutions</p>
<p className="text-[10px] text-[#617289]">VIP Segment</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm font-medium">24 Ay</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">DÜZENLİ</span>
</td>
<td className="px-6 py-4">
<div className="flex gap-4">
<div><p className="text-[9px] text-[#617289] font-bold">SEO</p><p className="text-xs font-bold text-green-500">92/100</p></div>
<div><p className="text-[9px] text-[#617289] font-bold">SEM</p><p className="text-xs font-bold text-blue-500">88/100</p></div>
</div>
</td>
<td className="px-6 py-4">
<div className="flex flex-col items-center gap-1">
<div className="w-24 bg-gray-100 dark:bg-gray-800 h-1.5 rounded-full overflow-hidden">
<div className="bg-green-500 h-full w-[94%]"></div>
</div>
<span className="text-xs font-bold">94</span>
</div>
</td>
</tr>
<tr>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-xs">GL</div>
<div>
<p className="text-sm font-bold">GreenLeaf E-Ticaret</p>
<p className="text-[10px] text-[#617289]">Riskli</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm font-medium">6 Ay</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">GECİKMELİ</span>
</td>
<td className="px-6 py-4">
<div className="flex gap-4">
<div><p className="text-[9px] text-[#617289] font-bold">SEO</p><p className="text-xs font-bold text-orange-500">45/100</p></div>
<div><p className="text-[9px] text-[#617289] font-bold">SEM</p><p className="text-xs font-bold text-red-500">32/100</p></div>
</div>
</td>
<td className="px-6 py-4">
<div className="flex flex-col items-center gap-1">
<div className="w-24 bg-gray-100 dark:bg-gray-800 h-1.5 rounded-full overflow-hidden">
<div className="bg-red-500 h-full w-[38%]"></div>
</div>
<span className="text-xs font-bold text-red-500">38</span>
</div>
</td>
</tr>
<tr>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">MM</div>
<div>
<p className="text-sm font-bold">Moda Mania</p>
<p className="text-[10px] text-[#617289]">Yeni Kazanılan</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm font-medium">1 Ay</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">BEKLEMEDE</span>
</td>
<td className="px-6 py-4">
<div className="flex gap-4">
<div><p className="text-[9px] text-[#617289] font-bold">SEO</p><p className="text-xs font-bold text-gray-400">--</p></div>
<div><p className="text-[9px] text-[#617289] font-bold">SEM</p><p className="text-xs font-bold text-blue-500">76/100</p></div>
</div>
</td>
<td className="px-6 py-4">
<div className="flex flex-col items-center gap-1">
<div className="w-24 bg-gray-100 dark:bg-gray-800 h-1.5 rounded-full overflow-hidden">
<div className="bg-blue-500 h-full w-[72%]"></div>
</div>
<span className="text-xs font-bold text-blue-500">72</span>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
<div className="bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 overflow-hidden shadow-sm flex flex-col">
<div className="px-6 py-5 border-b border-[#f0f2f4] dark:border-gray-800 flex justify-between items-center">
<h3 className="font-bold text-base flex items-center gap-2">
<span className="material-symbols-outlined text-primary">psychology</span>
                            Cross-Sell Fırsat Haritası (AI Destekli)
                        </h3>
<span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded">YENİ FIRSATLAR</span>
</div>
<div className="p-4 space-y-4">
<div className="p-4 border border-[#f0f2f4] dark:border-gray-800 rounded-xl bg-gray-50/50 dark:bg-gray-800/30 flex items-center gap-4">
<div className="size-10 rounded-lg bg-white dark:bg-gray-700 flex items-center justify-center border border-gray-100 dark:border-gray-600">
<span className="material-symbols-outlined text-primary">auto_graph</span>
</div>
<div className="flex-1">
<p className="text-sm font-bold">CyberCore Güvenlik</p>
<p className="text-[10px] text-[#617289]">Mevcut: SEO • <span className="text-primary font-bold">Öneri: LinkedIn Ads</span></p>
</div>
<div className="text-right">
<p className="text-xs font-bold text-green-500">88% Uyum</p>
<button className="text-[10px] font-bold text-white bg-primary px-3 py-1 rounded mt-1">Teklif Oluştur</button>
</div>
</div>
<div className="p-4 border border-[#f0f2f4] dark:border-gray-800 rounded-xl bg-gray-50/50 dark:bg-gray-800/30 flex items-center gap-4">
<div className="size-10 rounded-lg bg-white dark:bg-gray-700 flex items-center justify-center border border-gray-100 dark:border-gray-600">
<span className="material-symbols-outlined text-primary">video_library</span>
</div>
<div className="flex-1">
<p className="text-sm font-bold">Artisans Home</p>
<p className="text-[10px] text-[#617289]">Mevcut: SEM • <span className="text-primary font-bold">Öneri: İçerik Üretimi</span></p>
</div>
<div className="text-right">
<p className="text-xs font-bold text-green-500">74% Uyum</p>
<button className="text-[10px] font-bold text-white bg-primary px-3 py-1 rounded mt-1">Teklif Oluştur</button>
</div>
</div>
<div className="p-4 border border-[#f0f2f4] dark:border-gray-800 rounded-xl bg-gray-50/50 dark:bg-gray-800/30 flex items-center gap-4">
<div className="size-10 rounded-lg bg-white dark:bg-gray-700 flex items-center justify-center border border-gray-100 dark:border-gray-600">
<span className="material-symbols-outlined text-primary">shopping_cart</span>
</div>
<div className="flex-1">
<p className="text-sm font-bold">PetLovers Co.</p>
<p className="text-[10px] text-[#617289]">Mevcut: SEO • <span className="text-primary font-bold">Öneri: E-Ticaret Opt.</span></p>
</div>
<div className="text-right">
<p className="text-xs font-bold text-green-500">62% Uyum</p>
<button className="text-[10px] font-bold text-white bg-primary px-3 py-1 rounded mt-1">Teklif Oluştur</button>
</div>
</div>
</div>
</div>
<div className="bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 overflow-hidden shadow-sm flex flex-col">
<div className="px-6 py-5 border-b border-[#f0f2f4] dark:border-gray-800 flex justify-between items-center">
<h3 className="font-bold text-base flex items-center gap-2">
<span className="material-symbols-outlined text-primary">balance</span>
                            Proje Bazlı Kar/Zarar
                        </h3>
<div className="flex gap-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
<button className="px-3 py-1 text-[10px] font-bold bg-white dark:bg-gray-700 rounded-md shadow-sm">Kârlılık</button>
<button className="px-3 py-1 text-[10px] font-bold text-[#617289]">Efor</button>
</div>
</div>
<div className="p-6">
<div className="space-y-6">
<div>
<div className="flex justify-between items-end mb-2">
<div>
<p className="text-xs font-bold">Global SEO Mastery</p>
<p className="text-[10px] text-green-500 font-bold uppercase tracking-widest">En Yüksek Kar</p>
</div>
<p className="text-sm font-bold text-green-500">62% Marj</p>
</div>
<div className="w-full bg-gray-100 dark:bg-gray-800 h-2.5 rounded-full overflow-hidden">
<div className="bg-green-500 h-full w-[62%]"></div>
</div>
</div>
<div>
<div className="flex justify-between items-end mb-2">
<div>
<p className="text-xs font-bold">Fashion App Development</p>
<p className="text-[10px] text-[#617289] font-bold uppercase tracking-widest">Normal Karlılık</p>
</div>
<p className="text-sm font-bold text-[#111418] dark:text-white">28% Marj</p>
</div>
<div className="w-full bg-gray-100 dark:bg-gray-800 h-2.5 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[28%]"></div>
</div>
</div>
<div className="pt-4 border-t border-gray-100 dark:border-gray-800">
<div className="flex justify-between items-end mb-2">
<div>
<p className="text-xs font-bold">TechSupport Portal (L1)</p>
<p className="text-[10px] text-red-500 font-bold uppercase tracking-widest">Zarar / Aşırı Efor</p>
</div>
<p className="text-sm font-bold text-red-500">-8% Marj</p>
</div>
<div className="w-full bg-gray-100 dark:bg-gray-800 h-2.5 rounded-full overflow-hidden">
<div className="bg-red-500 h-full w-[10%]"></div>
</div>
<p className="text-[10px] text-[#617289] mt-2 italic">Aşırı revizyon ve beklenmeyen efor maliyeti.</p>
</div>
</div>
</div>
</div>
</div>
</div>

    </div>
  );
}
