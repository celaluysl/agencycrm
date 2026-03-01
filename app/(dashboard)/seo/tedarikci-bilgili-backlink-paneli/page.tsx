
"use client";

import React from "react";

export default function Page() {
  return (
    <div className="flex-1 flex flex-col">
      

<div className="flex-1 flex overflow-hidden">
<div className="flex-1 overflow-y-auto p-8">
<div className="max-w-4xl mx-auto space-y-8">
<div className="step-line">
<div className="step-dot"></div>
<div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
<div className="flex justify-between items-start mb-6">
<h3 className="text-lg font-bold text-gray-900 dark:text-white">Adım 1: Anahtar Kelime &amp; Hedef URL</h3>
<span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs font-bold rounded-full flex items-center gap-1">
<span className="material-symbols-outlined text-xs">check_circle</span> Tamamlandı
                                </span>
</div>
<div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 mb-6 border border-gray-100 dark:border-gray-700 grid grid-cols-2 gap-6">
<div>
<label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Hedef Kelime</label>
<p className="text-sm font-semibold text-gray-900 dark:text-white">SEO Ajansı</p>
</div>
<div>
<label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Hedef URL</label>
<p className="text-sm font-semibold text-primary">teksan.com/seo</p>
</div>
</div>
<label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">SEÇİLEN YAYINCI DETAYLARI</label>
<div className="p-5 border border-primary/20 bg-primary/5 rounded-xl">
<div className="flex items-center gap-4 mb-5 pb-4 border-b border-primary/10">
<div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-3xl">language</span>
</div>
<div>
<h4 className="text-base font-bold text-gray-900 dark:text-white">techinsight.com</h4>
<p className="text-xs text-gray-500">Teknoloji &amp; Yazılım</p>
</div>
<span className="ml-auto material-symbols-outlined text-primary">verified</span>
</div>
<div className="grid grid-cols-4 gap-4">
<div className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-100 dark:border-gray-700 text-center">
<p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Domain Authority</p>
<p className="text-lg font-bold text-primary">54</p>
</div>
<div className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-100 dark:border-gray-700 text-center">
<p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Page Authority</p>
<p className="text-lg font-bold text-primary">48</p>
</div>
<div className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-100 dark:border-gray-700 text-center">
<p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Aylık Trafik</p>
<p className="text-lg font-bold text-green-600">120K+</p>
</div>
<div className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-100 dark:border-gray-700 text-center">
<p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Spam Score</p>
<p className="text-lg font-bold text-orange-500">%1</p>
</div>
</div>
</div>
</div>
</div>
<div className="step-line">
<div className="step-dot"></div>
<div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
<h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Adım 2: Tanıtım Yazısı İçeriği</h3>
<div className="space-y-4">
<div>
<label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Prompt Girişi</label>
<textarea className="w-full bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:ring-primary focus:border-primary" placeholder="İçerik için anahtar kelimeleri ve tonu belirtin..." rows={2}></textarea>
</div>
<button className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-colors shadow-sm">
<span className="material-symbols-outlined text-base">auto_awesome</span>
                                    AI ile Tanıtım Yazısı Yaz
                                </button>
<div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
<div className="bg-gray-50 dark:bg-gray-800 px-4 py-2 border-b border-gray-200 dark:border-gray-700 flex items-center gap-4 text-gray-500">
<span className="material-symbols-outlined text-sm cursor-pointer hover:text-primary">format_bold</span>
<span className="material-symbols-outlined text-sm cursor-pointer hover:text-primary">format_italic</span>
<span className="material-symbols-outlined text-sm cursor-pointer hover:text-primary">format_list_bulleted</span>
<span className="material-symbols-outlined text-sm cursor-pointer hover:text-primary">link</span>
</div>
<div className="p-4 min-h-[150px] text-sm text-gray-700 dark:text-gray-300 content-editable focus:outline-none" contentEditable="true">
                                        Oluşturulan tanıtım yazısı burada görüntülenecek ve düzenlenebilecek...
                                    </div>
</div>
</div>
</div>
</div>
<div className="step-line">
<div className="step-dot bg-primary"></div>
<div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
<div className="flex justify-between items-start mb-6">
<h3 className="text-lg font-bold text-gray-900 dark:text-white">Adım 3: Kontrol ve Onay Süreci</h3>
<span className="px-3 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 text-xs font-bold rounded-full flex items-center gap-1">
<span className="material-symbols-outlined text-xs">hourglass_empty</span> Onay Bekleniyor
                                </span>
</div>
<div className="flex items-stretch justify-between gap-2 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
<div className="flex-1 flex flex-col items-center text-center gap-2">
<div className="size-10 rounded-full bg-green-100 dark:bg-green-900/40 text-green-600 flex items-center justify-center">
<span className="material-symbols-outlined">person_check</span>
</div>
<p className="text-[11px] font-bold text-gray-900 dark:text-white leading-tight">Uzman Hazırladı</p>
<span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded-full">Onaylandı</span>
</div>
<div className="flow-arrow pt-4">
<span className="material-symbols-outlined">trending_flat</span>
</div>
<div className="flex-1 flex flex-col items-center text-center gap-2">
<div className="size-10 rounded-full bg-yellow-100 dark:bg-yellow-900/40 text-yellow-600 flex items-center justify-center border-2 border-yellow-400">
<span className="material-symbols-outlined">manage_accounts</span>
</div>
<p className="text-[11px] font-bold text-gray-900 dark:text-white leading-tight">Departman Yöneticisi</p>
<span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-[10px] font-bold rounded-full">Bekliyor</span>
</div>
<div className="flow-arrow pt-4">
<span className="material-symbols-outlined">trending_flat</span>
</div>
<div className="flex-1 flex flex-col items-center text-center gap-2 opacity-50">
<div className="size-10 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-500 flex items-center justify-center">
<span className="material-symbols-outlined">admin_panel_settings</span>
</div>
<p className="text-[11px] font-bold text-gray-900 dark:text-white leading-tight">Süper Admin</p>
<span className="px-2 py-0.5 bg-gray-200 text-gray-600 text-[10px] font-bold rounded-full">Bekliyor</span>
</div>
</div>
<div className="mt-6 flex gap-3">
<button className="flex-1 py-2.5 bg-primary text-white rounded-lg text-sm font-bold flex items-center justify-center gap-2 shadow-sm">
<span className="material-symbols-outlined text-sm">check_circle</span> Yönetici Olarak Onayla
                                </button>
<button className="px-4 py-2.5 border border-red-200 text-red-600 hover:bg-red-50 rounded-lg text-sm font-bold transition-colors">
                                    Reddet / Revize İste
                                </button>
</div>
</div>
</div>
<div className="step-line">
<div className="step-dot bg-gray-300"></div>
<div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm opacity-50 pointer-events-none">
<div className="flex items-center gap-3 mb-4">
<h3 className="text-lg font-bold text-gray-900 dark:text-white">Adım 4: Yayınlama ve Link İşleme</h3>
<span className="material-symbols-outlined text-gray-400">lock</span>
</div>
<p className="text-xs text-gray-500 mb-6 italic">Bu aşama sadece Süper Admin onayından sonra aktif olacaktır.</p>
<div className="flex gap-2">
<div className="relative flex-1">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">link</span>
<input className="w-full pl-10 bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-lg text-sm" disabled placeholder="Yayınlanan linkin URL'sini girin" type="text" />
</div>
<button className="px-6 py-2 bg-gray-400 text-white rounded-lg text-sm font-bold" disabled>
                                    Sisteme Kaydet
                                </button>
</div>
</div>
</div>
</div>
</div>
<aside className="w-80 bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 p-6 flex flex-col gap-6">
<div>
<h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Bütçe Durumu</h4>
<div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700">
<div className="flex flex-col gap-4">
<div>
<p className="text-xs text-gray-500 mb-1">Mevcut Bütçe</p>
<p className="text-xl font-bold text-gray-900 dark:text-white">₺25.400,00</p>
</div>
<div className="h-px bg-gray-200 dark:bg-gray-700"></div>
<div>
<p className="text-xs text-gray-500 mb-1">Bu İşlem Tahmini Maliyeti</p>
<p className="text-lg font-bold text-red-600">- ₺1.250,00</p>
</div>
<div className="h-px bg-gray-200 dark:bg-gray-700"></div>
<div className="bg-primary/10 p-3 rounded-lg">
<p className="text-xs text-primary font-bold mb-1">İŞLEM SONRASI KALAN</p>
<p className="text-2xl font-bold text-primary">₺24.150,00</p>
</div>
</div>
</div>
</div>
<div>
<h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">ARACI KURUM BİLGİLERİ</h4>
<div className="space-y-4">
<div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-100 dark:border-gray-700">
<div className="flex flex-col gap-3">
<div>
<label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Aracı Kurum Adı</label>
<p className="text-sm font-bold text-gray-900 dark:text-white">Haber Ajansı A.Ş.</p>
</div>
<div className="h-px bg-gray-200 dark:bg-gray-700"></div>
<div>
<label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">İlgili Kişi</label>
<p className="text-sm font-medium text-gray-700 dark:text-gray-300">Ahmet Yılmaz</p>
</div>
<div className="h-px bg-gray-200 dark:bg-gray-700"></div>
<div>
<label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">İletişim Numarası</label>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-sm text-primary">call</span>
<p className="text-sm font-medium text-gray-700 dark:text-gray-300">+90 532 000 00 00</p>
</div>
</div>
<div className="h-px bg-gray-200 dark:bg-gray-700"></div>
<div>
<label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">E-posta Adresi</label>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-sm text-primary">mail</span>
<p className="text-sm font-medium text-gray-700 dark:text-gray-300">ahmet@haberajansi.com</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-auto">
<button className="w-full py-3 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-bold text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        Süreci İptal Et
                    </button>
</div>
</aside>
</div>
<footer className="px-8 py-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-center text-gray-400 text-xs">
            © 2024 AgenciFlow SEO Backlink Satın Alma ve Onay İş Akışı.
        </footer>

    </div>
  );
}
