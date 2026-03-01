
"use client";

import React from "react";

export default function Page() {
  return (
    <div className="flex-1 flex flex-col h-full px-6 py-6">
      
<div className="flex gap-6 h-full overflow-x-auto pb-10 scrollbar-hide">
<div className="flex-none w-[350px] flex flex-col kanban-column">
<div className="flex items-center justify-between mb-4 px-2">
<div className="flex items-center gap-2">
<span className="size-2 rounded-full bg-slate-400"></span>
<h3 className="font-bold text-xs uppercase text-slate-500 tracking-wider">TEKNİK İYİLEŞTİRMELER</h3>
<span className="bg-slate-200 dark:bg-slate-800 text-slate-500 px-1.5 py-0.5 rounded text-[10px] font-bold">4</span>
</div>
<button className="text-slate-400 hover:text-primary"><span className="material-symbols-outlined text-xl">add</span></button>
</div>
<div className="flex-1 overflow-y-auto space-y-4 pr-2 scrollbar-hide">
<div className="task-card bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-all cursor-pointer relative group">
<div className="flex justify-between items-start mb-3">
<span className="bg-rose-100 text-rose-600 text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Kritik</span>
<div className="flex items-center gap-1.5 text-slate-400 text-[10px]">
<span className="material-symbols-outlined text-sm">schedule</span>
<span>Est: 4s</span>
</div>
</div>
<h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 leading-snug mb-4">404 Hata Giderimi ve 301 Yönlendirmeleri</h4>
<div className="flex items-center justify-between pt-3 border-t border-slate-50 dark:border-slate-700/50">
<div className="flex items-center gap-2">
<div className="size-7 rounded-full bg-cover shadow-sm border border-slate-100" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCOt97w2Bl3cWXB0aj0lyvrEaSbXrqyYcO84P2Oa8DnlWX1L5biL4VgcJMnvfCAT3Hsh1H09hwWI2OinVhJiojS73UUhB5a9D_XGx9mTJg2UZzcFHZVBpuL9IPcpwi-FjKaRdBBVx81K5Y7OgCGflzwvDF4jSLjb98cpX6bcTLBav4NXiYyH7lvPUqwOSimmCzOT7ZrQ3d9pBSPltrLjE9CWQr1cZHkguWLnUb8TacfCG_vm4-DmW-aJDJgI8djmJJcQFs3NLIUJ8ZC')" }}></div>
<div className="flex flex-col">
<span className="text-[10px] text-slate-400 leading-none">Atanan</span>
<span className="text-[11px] font-bold text-slate-700 dark:text-slate-300">Caner Demir</span>
</div>
</div>
</div>
</div>
<div className="task-card bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-all cursor-pointer group">
<div className="flex justify-between items-start mb-3">
<span className="bg-amber-100 text-amber-600 text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Orta</span>
<div className="flex items-center gap-1.5 text-slate-400 text-[10px]">
<span className="material-symbols-outlined text-sm">schedule</span>
<span>Est: 2s</span>
</div>
</div>
<h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 leading-snug mb-4">Site Haritası (Sitemap.xml) Optimizasyonu</h4>
<div className="flex items-center justify-between pt-3 border-t border-slate-50 dark:border-slate-700/50">
<div className="flex items-center gap-2">
<div className="size-7 rounded-full bg-cover shadow-sm border border-slate-100" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-ts3OlrVX92KYbdSR-FrolR2OQmA_4nTq5sMTBLhHZUJD3MSJt8lv-anpht8zTKzIChT6sW7P6yLmk24fntnaE0B9S6MO83EogzWfIboEtuPl7RqPTsOD_5Mgv1b3kl0q0WUAe9F-Z4FkwC0N--Am2HUFFmIMtKhjjZDuDohrXK88FLpq2h5bPX_AyN8btPxA_uKaS5iTpBsMa3FLlI445Aa8u1ZM_528x8FopCcdaO63_dFGFTkFryMGHw03E5hGZGt28W5TTDIU')" }}></div>
<div className="flex flex-col">
<span className="text-[10px] text-slate-400 leading-none">Atanan</span>
<span className="text-[11px] font-bold text-slate-700 dark:text-slate-300">Merve Aydın</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="flex-none w-[350px] flex flex-col kanban-column">
<div className="flex items-center justify-between mb-4 px-2">
<div className="flex items-center gap-2">
<span className="size-2 rounded-full bg-primary animate-pulse"></span>
<h3 className="font-bold text-xs uppercase text-slate-500 tracking-wider">İÇERİK PLANLAMA</h3>
<span className="bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded text-[10px] font-bold">3</span>
</div>
</div>
<div className="flex-1 overflow-y-auto space-y-4 pr-2 scrollbar-hide">
<div className="task-card bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border-l-4 border-l-primary border-t border-r border-b border-slate-200 dark:border-slate-700 transition-all cursor-pointer">
<div className="flex justify-between items-start mb-3">
<span className="bg-blue-100 text-blue-600 text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Yüksek</span>
<div className="flex items-center gap-1.5 text-primary text-[10px] font-bold">
<span className="material-symbols-outlined text-sm">schedule</span>
<span>Est: 6s</span>
</div>
</div>
<h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 leading-snug mb-4">Anahtar Kelime Odaklı Blog İçeriği Yazımı</h4>
<div className="flex items-center justify-between pt-3 border-t border-slate-50 dark:border-slate-700/50">
<div className="flex items-center gap-2">
<div className="size-7 rounded-full bg-cover shadow-sm border border-slate-100" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBF_QTHNA7iYkHGc8yGnTGmQixvOYcxW-6vOszZurjfJSWrg8a8yP3V8OGJ1p3OnvDxy6xoWjorMMVZMVlEDUz0Qwq5yf6q9O17QfzTkpFSStWizRnUdBGCHFOSfWp1gdTAG3QElsjb4FVMqWdRz94oLCe7eNO1dZAdI3lWigJPRE26IfnitST-vi6qzP_4zo2geTQrrWAciKWjvM5XFNJICEBxEKdjXCPafLPdaXa9bCgqHeYpdiSldwFXeb1FecNbdwVaFY4gQUZq')" }}></div>
<div className="flex flex-col">
<span className="text-[10px] text-slate-400 leading-none">Atanan</span>
<span className="text-[11px] font-bold text-slate-700 dark:text-slate-300">Selim Kurt</span>
</div>
</div>
<div className="flex items-center gap-1 text-slate-400">
<span className="material-symbols-outlined text-sm">description</span>
<span className="text-[10px] font-bold">2</span>
</div>
</div>
</div>
<div className="task-card bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 transition-all cursor-pointer">
<div className="flex justify-between items-start mb-3">
<span className="bg-amber-100 text-amber-600 text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Orta</span>
<div className="flex items-center gap-1.5 text-slate-400 text-[10px]">
<span className="material-symbols-outlined text-sm">schedule</span>
<span>Est: 3s</span>
</div>
</div>
<h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 leading-snug mb-4">Meta Tag ve Açıklama Optimizasyonu</h4>
<div className="flex items-center justify-between pt-3 border-t border-slate-50 dark:border-slate-700/50">
<div className="flex items-center gap-2">
<div className="size-7 rounded-full bg-cover shadow-sm border border-slate-100" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAap6CLJsaSU8W11dBYS1FsUibLaOlrQlrgo_H6QI5hYrWQfh4NO3_M-SAG8VP6f8-ompd04TRJQJCFpGA2HWlhcnqIGJ4gNROF6JV4KQ-DWnM2053WCbajhssdXXQbyUjEhD5zZdLkRKIs5HI9wRBUwgJ1EK6Ppw1yay8bFVOtyaQZjVgxceL6o32TefDG5bZQDsBYSIoW2NQ-9R4-6-mW99saYpAKThOs1aFmjzL-DHyCZjqwzTIo6jrZVXRPnQixhK5kdKRXD2Tj')" }}></div>
<div className="flex flex-col">
<span className="text-[10px] text-slate-400 leading-none">Atanan</span>
<span className="text-[11px] font-bold text-slate-700 dark:text-slate-300">Ahmet Yılmaz</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="flex-none w-[350px] flex flex-col kanban-column">
<div className="flex items-center justify-between mb-4 px-2">
<div className="flex items-center gap-2">
<span className="size-2 rounded-full bg-amber-500"></span>
<h3 className="font-bold text-xs uppercase text-slate-500 tracking-wider">BACKLINK ÇALIŞMALARI</h3>
<span className="bg-amber-100 text-amber-600 px-1.5 py-0.5 rounded text-[10px] font-bold">2</span>
</div>
</div>
<div className="flex-1 overflow-y-auto space-y-4 pr-2 scrollbar-hide">
<div className="task-card bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 border-l-4 border-l-amber-400 transition-all cursor-pointer">
<div className="flex justify-between items-start mb-3">
<span className="bg-emerald-100 text-emerald-600 text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Haftalık</span>
<div className="flex items-center gap-1.5 text-slate-400 text-[10px]">
<span className="material-symbols-outlined text-sm">link</span>
</div>
</div>
<h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 leading-snug mb-4">Sektörel Portal Tanıtım Yazısı Paylaşımı</h4>
<div className="flex items-center justify-between pt-3 border-t border-slate-50 dark:border-slate-700/50">
<div className="flex items-center gap-2">
<div className="size-7 rounded-full bg-cover shadow-sm border border-slate-100" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCi6y-evVpMMh-Cred_jOWlEh-zSg5rhUD9dI9ca9wp1QagdwDbhRYWbHIRcFY56Jil51IbXyGZk7JPqaON67kOwm-AukkbYrb1-Xoo8A7gMlSPZSJ6_ZD16rRMzD6LLcDjAA8m4UQRoCV_B5dZjOhGKH5Q_mfrizvpuE8RDW5pGLnv5kR9naL1vZdZDXO3FSzz0hzvYww_qhEud3rQgvKH2FxatAyFDBOphsRyXlhzH-MUlSAQ5YG_7NevQZ3MoP1UJNoU2jKESzye')" }}></div>
<div className="flex flex-col">
<span className="text-[10px] text-slate-400 leading-none">Atanan</span>
<span className="text-[11px] font-bold text-slate-700 dark:text-slate-300">Deniz Yalçın</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="flex-none w-[350px] flex flex-col kanban-column">
<div className="flex items-center justify-between mb-4 px-2">
<div className="flex items-center gap-2">
<span className="size-2 rounded-full bg-emerald-500"></span>
<h3 className="font-bold text-xs uppercase text-slate-500 tracking-wider">TAMAMLANDI</h3>
<span className="bg-emerald-100 text-emerald-600 px-1.5 py-0.5 rounded text-[10px] font-bold">18</span>
</div>
</div>
<div className="flex-1 overflow-y-auto space-y-4 pr-2 scrollbar-hide">
<div className="task-card bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer">
<div className="flex justify-between items-start mb-3">
<span className="bg-slate-100 text-slate-600 text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Tamamlandı</span>
<div className="flex items-center gap-1.5 text-emerald-500 text-[10px]">
<span className="material-symbols-outlined text-sm">verified</span>
</div>
</div>
<h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 leading-snug mb-4 line-through">Rakip Analizi Raporu (Ekim 2024)</h4>
<div className="flex items-center justify-between pt-3 border-t border-slate-50 dark:border-slate-700/50">
<div className="flex items-center gap-2">
<div className="size-7 rounded-full bg-cover shadow-sm border border-slate-100" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAIUI4GzOBAgKNtV0zTLXjo_FrSJ6cDRXILmY4mzJI9lrYiDLsYHJYcmE9vI90hrsco1YSQKFlTyU0Z_UJvVl1v_XGXByPKfldkIdtaE4ICbdarBC7ZreDaErXS4JkUJ9YPEKmbi9hxfogP2rGzxpLyQzexu04_nCvBbEIYLhs6n9JWjPtLCo1ziIej7rN2FC-NxeSOXnZ_jrzEejUzpGQFI-eWNI0-P22V-0OdW6vW_-zCYL4MAUJO4zF6d8itbdZc0xunKni0asqF')" }}></div>
<div className="flex flex-col">
<span className="text-[10px] text-slate-400 leading-none">Atanan</span>
<span className="text-[11px] font-bold text-slate-700 dark:text-slate-300">Elif Kaya</span>
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
