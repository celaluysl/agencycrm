
"use client";

import React from "react";

export default function Page() {
  return (
    <div className="flex-1 flex flex-col ml-64 p-8">
      

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
<div className="bg-white dark:bg-[#1e293b] p-6 rounded-2xl shadow-sm border border-[#f0f2f4] dark:border-gray-800">
<div className="flex items-center justify-between mb-4">
<span className="p-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-lg">
<span className="material-symbols-outlined">speed</span>
</span>
<span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">+4.2%</span>
</div>
<p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Genel Proje İlerlemesi</p>
<div className="flex items-end gap-2 mt-1">
<h4 className="text-2xl font-bold dark:text-white">%78</h4>
<div className="flex-1 h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full mb-2">
<div className="h-full bg-primary rounded-full" style={{ "width": "78%" }}></div>
</div>
</div>
</div>
<div className="bg-white dark:bg-[#1e293b] p-6 rounded-2xl shadow-sm border border-[#f0f2f4] dark:border-gray-800">
<div className="flex items-center justify-between mb-4">
<span className="p-2 bg-orange-50 dark:bg-orange-900/20 text-orange-600 rounded-lg">
<span className="material-symbols-outlined">payments</span>
</span>
<span className="text-[10px] font-bold text-gray-400">Kasım Ayı</span>
</div>
<p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Aktif Reklam Harcaması</p>
<h4 className="text-2xl font-bold dark:text-white mt-1">₺24.450</h4>
</div>
<div className="bg-white dark:bg-[#1e293b] p-6 rounded-2xl shadow-sm border border-[#f0f2f4] dark:border-gray-800">
<div className="flex items-center justify-between mb-4">
<span className="p-2 bg-green-50 dark:bg-green-900/20 text-green-600 rounded-lg">
<span className="material-symbols-outlined">trending_up</span>
</span>
<span className="text-[10px] font-bold text-green-600">İyi Durumda</span>
</div>
<p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Son SEO Skoru</p>
<h4 className="text-2xl font-bold dark:text-white mt-1">84<span className="text-sm font-normal text-gray-400">/100</span></h4>
</div>
<div className="bg-white dark:bg-[#1e293b] p-6 rounded-2xl shadow-sm border border-[#f0f2f4] dark:border-gray-800">
<div className="flex items-center justify-between mb-4">
<span className="p-2 bg-red-50 dark:bg-red-900/20 text-red-600 rounded-lg">
<span className="material-symbols-outlined">confirmation_number</span>
</span>
</div>
<p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Açık Destek Talepleri</p>
<h4 className="text-2xl font-bold dark:text-white mt-1">3 <span className="text-sm font-normal text-gray-400">Aktif</span></h4>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="lg:col-span-2 space-y-6">
<div className="flex items-center justify-between">
<h3 className="text-lg font-bold dark:text-white">Aktif Hizmetler</h3>
<button className="text-xs font-bold text-primary hover:underline">Tümünü Yönet</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 shadow-sm border border-[#f0f2f4] dark:border-gray-800 hover:shadow-md transition-shadow">
<div className="flex items-start justify-between mb-4">
<div className="size-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-3xl">search</span>
</div>
<span className="text-[10px] font-bold px-2 py-1 bg-green-100 text-green-700 rounded uppercase">Yayında</span>
</div>
<h4 className="text-lg font-bold dark:text-white mb-2">SEO Optimizasyonu</h4>
<p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                            Web sitenizin organik trafiğini artırmak için anahtar kelime ve içerik stratejileri aktif olarak uygulanıyor.
                        </p>
<button className="w-full py-2.5 px-4 bg-gray-50 dark:bg-gray-800 text-primary text-sm font-bold rounded-lg hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2">
                            Detayları Gör <span className="material-symbols-outlined text-lg">arrow_right_alt</span>
</button>
</div>
<div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 shadow-sm border border-[#f0f2f4] dark:border-gray-800 hover:shadow-md transition-shadow">
<div className="flex items-start justify-between mb-4">
<div className="size-12 bg-orange-50 dark:bg-orange-900/20 rounded-xl flex items-center justify-center text-orange-600">
<span className="material-symbols-outlined text-3xl">ads_click</span>
</div>
<span className="text-[10px] font-bold px-2 py-1 bg-green-100 text-green-700 rounded uppercase">Yayında</span>
</div>
<h4 className="text-lg font-bold dark:text-white mb-2">Google Ads (SEM)</h4>
<p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                            Arama ağı ve görüntülü reklam kampanyalarınız hedeflenen dönüşüm maliyetleri dahilinde yönetilmektedir.
                        </p>
<button className="w-full py-2.5 px-4 bg-gray-50 dark:bg-gray-800 text-primary text-sm font-bold rounded-lg hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2">
                            Detayları Gör <span className="material-symbols-outlined text-lg">arrow_right_alt</span>
</button>
</div>
<div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 shadow-sm border border-[#f0f2f4] dark:border-gray-800 hover:shadow-md transition-shadow">
<div className="flex items-start justify-between mb-4">
<div className="size-12 bg-purple-50 dark:bg-purple-900/20 rounded-xl flex items-center justify-center text-purple-600">
<span className="material-symbols-outlined text-3xl">campaign</span>
</div>
<span className="text-[10px] font-bold px-2 py-1 bg-blue-100 text-blue-700 rounded uppercase">Yönetiliyor</span>
</div>
<h4 className="text-lg font-bold dark:text-white mb-2">Sosyal Medya Yönetimi</h4>
<p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                            Aylık içerik planınız dahilinde haftalık 4 paylaşım ve topluluk yönetimi hizmeti devam ediyor.
                        </p>
<button className="w-full py-2.5 px-4 bg-gray-50 dark:bg-gray-800 text-primary text-sm font-bold rounded-lg hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2">
                            Detayları Gör <span className="material-symbols-outlined text-lg">arrow_right_alt</span>
</button>
</div>
<div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 shadow-sm border border-[#f0f2f4] dark:border-gray-800 hover:shadow-md transition-shadow">
<div className="flex items-start justify-between mb-4">
<div className="size-12 bg-cyan-50 dark:bg-cyan-900/20 rounded-xl flex items-center justify-center text-cyan-600">
<span className="material-symbols-outlined text-3xl">desktop_windows</span>
</div>
<span className="text-[10px] font-bold px-2 py-1 bg-orange-100 text-orange-700 rounded uppercase">Bakım Modu</span>
</div>
<h4 className="text-lg font-bold dark:text-white mb-2">Web Tasarım &amp; Bakım</h4>
<p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                            Web sitenizin teknik altyapı güncellemeleri ve yeni landing page tasarımları süreçleri takip ediliyor.
                        </p>
<button className="w-full py-2.5 px-4 bg-gray-50 dark:bg-gray-800 text-primary text-sm font-bold rounded-lg hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2">
                            Detayları Gör <span className="material-symbols-outlined text-lg">arrow_right_alt</span>
</button>
</div>
</div>
</div>
<div className="space-y-8">
<div className="bg-white dark:bg-[#1e293b] rounded-2xl shadow-sm border border-[#f0f2f4] dark:border-gray-800 overflow-hidden">
<div className="p-5 border-b border-[#f0f2f4] dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50 flex justify-between items-center">
<h4 className="font-bold text-sm dark:text-white">Son Paylaşılan Raporlar</h4>
<span className="material-symbols-outlined text-gray-400 text-xl">description</span>
</div>
<div className="p-5 space-y-4">
<div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl hover:border-primary transition-colors">
<div className="flex items-center gap-3">
<div className="size-8 bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center rounded text-blue-600">
<span className="material-symbols-outlined text-lg">analytics</span>
</div>
<div>
<p className="text-xs font-bold dark:text-white">Ekim 2024 SEO Raporu</p>
<p className="text-[10px] text-gray-400">02.11.2024 • 2.4 MB</p>
</div>
</div>
<button className="p-2 text-primary hover:bg-primary/5 rounded-lg">
<span className="material-symbols-outlined text-xl">download</span>
</button>
</div>
<div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl hover:border-primary transition-colors">
<div className="flex items-center gap-3">
<div className="size-8 bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center rounded text-orange-600">
<span className="material-symbols-outlined text-lg">ads_click</span>
</div>
<div>
<p className="text-xs font-bold dark:text-white">Google Ads Performans</p>
<p className="text-[10px] text-gray-400">28.10.2024 • 1.1 MB</p>
</div>
</div>
<button className="p-2 text-primary hover:bg-primary/5 rounded-lg">
<span className="material-symbols-outlined text-xl">download</span>
</button>
</div>
<button className="w-full text-center text-xs font-bold text-gray-400 hover:text-primary transition-colors pt-2">Tüm Raporları Arşivde Gör</button>
</div>
</div>
<div className="bg-white dark:bg-[#1e293b] rounded-2xl shadow-sm border border-[#f0f2f4] dark:border-gray-800 overflow-hidden">
<div className="p-5 border-b border-[#f0f2f4] dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50">
<h4 className="font-bold text-sm dark:text-white">Müşteri Temsilcim</h4>
</div>
<div className="p-6 text-center">
<div className="relative inline-block mb-4">
<div className="size-20 rounded-full bg-cover bg-center border-4 border-white dark:border-gray-800 shadow-lg mx-auto" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBa_AsOGDhMOAC6iu9Nbyvh8t85sowDEuf_xwL6hLln57uIvluylrhgxdLMe9iKVX4UoiihmCUnTk0sO4dARCtM_EbkHnjKvuTCweyLJJxJBbWJaj-RmOWPlsvG_wIsN8NjI0JgBKr-vLhxdpEr2qtmXlilKWQ27s23xmJjAOGor2JuBUnaB0sb4PIzkqJS1M7IF7updlm7UBkwp1lh7eO9joKv5GclIeJHFWyMre6r5BGHAU9R1kFlNiJwmvjfc4bNa09yVV0kih08')" }}></div>
<span className="absolute bottom-1 right-1 size-4 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
</div>
<h5 className="text-base font-bold dark:text-white">John Smith</h5>
<p className="text-xs text-gray-500 mb-6">Kıdemli Müşteri Yöneticisi</p>
<div className="flex gap-2">
<button className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-primary text-white text-xs font-bold rounded-lg hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined text-sm">chat</span>
                                Mesaj Gönder
                            </button>
<button className="flex items-center justify-center size-9 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
<span className="material-symbols-outlined text-lg">call</span>
</button>
</div>
</div>
</div>
</div>
</div>
<div className="mt-12 mb-8 bg-white dark:bg-[#1e293b] p-6 rounded-2xl shadow-sm border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-4">
<div className="size-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
<span className="material-symbols-outlined">bolt</span>
</div>
<div>
<h4 className="font-bold dark:text-white">Hızlı İşlemler</h4>
<p className="text-xs text-gray-500">İhtiyacınız olan her şeye tek tıkla ulaşın.</p>
</div>
</div>
<div className="flex flex-wrap gap-4 w-full md:w-auto">
<button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border border-[#f0f2f4] dark:border-gray-700 rounded-xl text-sm font-bold hover:border-primary hover:text-primary transition-all shadow-sm">
<span className="material-symbols-outlined text-lg">add_circle</span>
                    Destek Talebi Aç
                </button>
<button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-md">
<span className="material-symbols-outlined text-lg">task_alt</span>
                    Onay Bekleyen İşler
                    <span className="bg-white text-primary text-[10px] px-1.5 py-0.5 rounded-full font-black">2</span>
</button>
</div>
</div>
<footer className="mt-8 pt-8 border-t border-[#f0f2f4] dark:border-gray-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-gray-400 text-[10px] font-medium uppercase tracking-widest gap-4">
<p>© 2024 AgenciFlow - Müşteri Portalı. Tüm hakları saklıdır.</p>
<div className="flex items-center gap-6">
<a className="hover:text-primary transition-colors" href="#">Güvenlik</a>
<a className="hover:text-primary transition-colors" href="#">Gizlilik Politikası</a>
<a className="hover:text-primary transition-colors" href="#">Yardım Merkezi</a>
</div>
</footer>

    </div>
  );
}
