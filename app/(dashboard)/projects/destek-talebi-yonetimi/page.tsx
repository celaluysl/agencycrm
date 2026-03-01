
"use client";

import React from "react";

export default function Page() {
  return (
    <div className="flex-1 flex flex-col max-w-[1440px] mx-auto flex gap-6 p-6 h-[calc(100vh-100px)]">
      
<aside className="w-[380px] flex flex-col gap-4 shrink-0 bg-white dark:bg-[#1e293b] rounded-xl shadow-sm border border-[#f0f2f4] dark:border-gray-800 overflow-hidden">
<div className="p-4 border-b border-[#f0f2f4] dark:border-gray-700 flex justify-between items-center">
<h3 className="font-bold text-lg dark:text-white">Destek Taleplerim</h3>
<button className="text-primary bg-primary/10 p-2 rounded-lg hover:bg-primary hover:text-white transition-all">
<span className="material-symbols-outlined text-xl">add</span>
</button>
</div>
<div className="flex-1 overflow-y-auto no-scrollbar p-2 space-y-2">
<div className="p-4 rounded-lg bg-primary/5 border-l-4 border-l-primary cursor-pointer hover:bg-primary/10 transition-colors">
<div className="flex justify-between items-start mb-1">
<h4 className="text-sm font-bold dark:text-white truncate pr-2">Web Sitesi Tasarım Güncellemesi</h4>
<span className="bg-blue-100 text-blue-700 text-[10px] px-2 py-0.5 rounded-full font-bold whitespace-nowrap">YANITLANDI</span>
</div>
<p className="text-xs text-[#617289] line-clamp-1 mb-2">Ana sayfa banner alanı için yeni görseller...</p>
<div className="flex justify-between items-center">
<span className="text-[10px] text-[#617289] flex items-center gap-1">
<span className="material-symbols-outlined text-xs">schedule</span> 15 dk önce
                    </span>
</div>
</div>
<div className="p-4 rounded-lg border border-transparent hover:border-[#f0f2f4] dark:hover:border-gray-700 cursor-pointer transition-colors">
<div className="flex justify-between items-start mb-1">
<h4 className="text-sm font-bold dark:text-white truncate pr-2">SEO Performans Raporu Talebi</h4>
<span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full font-bold whitespace-nowrap">AÇIK</span>
</div>
<p className="text-xs text-[#617289] line-clamp-1 mb-2">Kasım ayı Google Search Console verilerini...</p>
<div className="flex justify-between items-center">
<span className="text-[10px] text-[#617289] flex items-center gap-1">
<span className="material-symbols-outlined text-xs">schedule</span> 2 saat önce
                    </span>
</div>
</div>
<div className="p-4 rounded-lg border border-transparent hover:border-[#f0f2f4] dark:hover:border-gray-700 cursor-pointer transition-colors">
<div className="flex justify-between items-start mb-1">
<h4 className="text-sm font-bold dark:text-white truncate pr-2">E-posta Kurulum Sorunu</h4>
<span className="bg-gray-100 text-gray-500 text-[10px] px-2 py-0.5 rounded-full font-bold whitespace-nowrap">KAPALI</span>
</div>
<p className="text-xs text-[#617289] line-clamp-1 mb-2">Outlook üzerinde imza sorunu yaşıyoruz...</p>
<div className="flex justify-between items-center">
<span className="text-[10px] text-[#617289] flex items-center gap-1">
<span className="material-symbols-outlined text-xs">schedule</span> 3 gün önce
                    </span>
</div>
</div>
</div>
</aside>
<div className="flex-1 flex flex-col gap-6">
<div className="flex-1 bg-white dark:bg-[#1e293b] rounded-xl shadow-sm border border-[#f0f2f4] dark:border-gray-800 flex flex-col overflow-hidden">
<div className="p-4 border-b border-[#f0f2f4] dark:border-gray-700 flex justify-between items-center bg-gray-50/50 dark:bg-gray-800/50">
<div>
<h3 className="font-bold text-base dark:text-white">Web Sitesi Tasarım Güncellemesi</h3>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs text-[#617289]">Departman: Tasarım Birimi</span>
<span className="size-1 rounded-full bg-gray-300"></span>
<span className="text-xs text-[#617289]">Talep No: #TK-8821</span>
</div>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-xs font-bold rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">Talebi Kapat</button>
</div>
</div>
<div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#fbfbfc] dark:bg-[#151c27]">
<div className="flex gap-4 max-w-[80%]">
<div className="size-10 rounded-full bg-center bg-cover shrink-0" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBa_AsOGDhMOAC6iu9Nbyvh8t85sowDEuf_xwL6hLln57uIvluylrhgxdLMe9iKVX4UoiihmCUnTk0sO4dARCtM_EbkHnjKvuTCweyLJJxJBbWJaj-RmOWPlsvG_wIsN8NjI0JgBKr-vLhxdpEr2qtmXlilKWQ27s23xmJjAOGor2JuBUnaB0sb4PIzkqJS1M7IF7updlm7UBkwp1lh7eO9joKv5GclIeJHFWyMre6r5BGHAU9R1kFlNiJwmvjfc4bNa09yVV0kih08')" }}></div>
<div className="space-y-1">
<div className="bg-white dark:bg-gray-800 p-4 rounded-2xl rounded-tl-none shadow-sm border border-[#f0f2f4] dark:border-gray-700">
<p className="text-sm dark:text-gray-300">Merhaba, talebinizi aldık. Yeni banner tasarımları üzerinde çalışıyoruz. Alternatif renk seçeneklerini yarın öğlene kadar sizinle paylaşmış olacağız.</p>
</div>
<p className="text-[10px] text-[#617289] ml-1">John Smith (Ajans Uzmanı) • 14:30</p>
</div>
</div>
<div className="flex gap-4 max-w-[80%] flex-row-reverse ml-auto">
<div className="size-10 rounded-full bg-center bg-cover shrink-0 border border-primary/20" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA2p6GObIQvpHtPf4sKM_C9dS0IIXLAV-1l8y_9muc7G9U8dlmKqoEf-9vZWFL9B6pwsUuUH6GwzEPk5u_W_8lAho0w_dstNXWers9ELkIyabIshJub5n0U0DRF3zxAFTZ5_BWSONZ2S4AZyPlliWV-74X-szOqNzJF716cH1i9-b8AxVwQamYP7Isb8-fUZeinZpZ6mWMSJp-_DsqmTPuRUjSY8hDV6M-HBMP1cz0QjNeXhyW9BbwOlw8W1Vsv2RsCZkWnx9YREbU3')" }}></div>
<div className="space-y-1 text-right">
<div className="bg-primary text-white p-4 rounded-2xl rounded-tr-none shadow-md">
<p className="text-sm">Teşekkürler John. Mümkünse mobil görünümdeki buton konumlarını da optimize edebilir miyiz? Ek olarak mevcut fontu biraz daha kalınlaştırmayı düşünebiliriz.</p>
</div>
<p className="text-[10px] text-[#617289] mr-1">Siz • 15:12</p>
</div>
</div>
<div className="flex gap-4 max-w-[80%]">
<div className="size-10 rounded-full bg-center bg-cover shrink-0" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBa_AsOGDhMOAC6iu9Nbyvh8t85sowDEuf_xwL6hLln57uIvluylrhgxdLMe9iKVX4UoiihmCUnTk0sO4dARCtM_EbkHnjKvuTCweyLJJxJBbWJaj-RmOWPlsvG_wIsN8NjI0JgBKr-vLhxdpEr2qtmXlilKWQ27s23xmJjAOGor2JuBUnaB0sb4PIzkqJS1M7IF7updlm7UBkwp1lh7eO9joKv5GclIeJHFWyMre6r5BGHAU9R1kFlNiJwmvjfc4bNa09yVV0kih08')" }}></div>
<div className="space-y-1">
<div className="bg-white dark:bg-gray-800 p-4 rounded-2xl rounded-tl-none shadow-sm border border-[#f0f2f4] dark:border-gray-700">
<p className="text-sm dark:text-gray-300">Tabii ki, mobil optimizasyonları plana ekledim. Font kalınlığı için Medium ve Bold seçeneklerini yan yana getireceğim.</p>
</div>
<p className="text-[10px] text-[#617289] ml-1">John Smith (Ajans Uzmanı) • 15:20</p>
</div>
</div>
</div>
<div className="p-4 border-t border-[#f0f2f4] dark:border-gray-700 bg-white dark:bg-[#1e293b]">
<div className="flex flex-col gap-3">
<textarea className="form-textarea w-full rounded-xl border-[#f0f2f4] dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 focus:ring-primary focus:border-primary text-sm dark:text-white" placeholder="Cevabınızı buraya yazın..." rows={3}></textarea>
<div className="flex justify-between items-center">
<button className="flex items-center gap-2 text-[#617289] hover:text-primary transition-colors">
<span className="material-symbols-outlined text-xl">attach_file</span>
<span className="text-xs font-bold">Dosya Ekle</span>
</button>
<button className="px-6 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
                            Gönder <span className="material-symbols-outlined text-sm">send</span>
</button>
</div>
</div>
</div>
</div>
<div className="bg-white dark:bg-[#1e293b] rounded-xl p-6 shadow-sm border border-[#f0f2f4] dark:border-gray-800">
<div className="flex items-center justify-between mb-6">
<h3 className="font-bold text-lg dark:text-white flex items-center gap-2">
<span className="material-symbols-outlined text-primary">add_circle</span>
                    Yeni Destek Talebi Oluştur
                </h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="flex flex-col gap-1.5">
<label className="text-xs font-bold text-[#617289] uppercase tracking-wider">Konu</label>
<input className="form-input rounded-lg border-[#f0f2f4] dark:border-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white" placeholder="Talebinizin başlığını yazın" type="text" />
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-bold text-[#617289] uppercase tracking-wider">Departman Seçimi</label>
<select className="form-select rounded-lg border-[#f0f2f4] dark:border-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white">
<option>Tasarım Birimi</option>
<option>SEO / SEM Ekibi</option>
<option>Yazılım Desteği</option>
<option>Finans / Fatura</option>
</select>
</div>
<div className="md:col-span-2 flex flex-col gap-1.5">
<label className="text-xs font-bold text-[#617289] uppercase tracking-wider">Mesajınız</label>
<textarea className="form-textarea rounded-lg border-[#f0f2f4] dark:border-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white" placeholder="İhtiyacınızı detaylıca açıklayın..." rows={4}></textarea>
</div>
</div>
<div className="mt-6 flex justify-end">
<button className="bg-primary text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-primary/20 hover:scale-[1.02] transition-all flex items-center gap-2">
<span className="material-symbols-outlined">rocket_launch</span>
                    Talebi Başlat
                </button>
</div>
</div>
</div>

    </div>
  );
}
