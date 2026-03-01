
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
<h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Adım 1: Anahtar Kelime &amp; Hedef URL</h3>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Hedef Anahtar Kelime</label>
<input className="w-full bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:ring-primary focus:border-primary" placeholder="Örn: Erkek Ayakkabı" type="text" />
</div>
<div>
<label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Hedef Kategori URL</label>
<input className="w-full bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:ring-primary focus:border-primary" placeholder="Örn: teksan.com/erkek-ayakkabi" type="text" />
</div>
</div>
</div>
</div>
<div className="step-line">
<div className="step-dot"></div>
<div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
<h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Adım 2: Rakip Analizi</h3>
<div className="space-y-4">
<div className="flex gap-4">
<div className="flex-1">
<label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Rakip 1 URL</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">language</span>
<input className="w-full pl-10 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:ring-primary" placeholder="https://rakip1.com/erkek-ayakkabi" type="text" />
</div>
</div>
<div className="flex-1">
<label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Rakip 2 URL</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">language</span>
<input className="w-full pl-10 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:ring-primary" placeholder="https://rakip2.com/erkek-ayakkabi" type="text" />
</div>
</div>
</div>
<p className="text-[11px] text-gray-500 italic">AI, bu rakiplerin içerik yapılarını analiz ederek daha iyi bir versiyon önerecektir.</p>
</div>
</div>
</div>
<div className="step-line">
<div className="step-dot"></div>
<div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
<h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Adım 3: AI Kategori İçeriği Oluşturucu</h3>
<div className="space-y-4">
<div>
<label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Prompt ve Özel Talimatlar</label>
<textarea className="w-full bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:ring-primary focus:border-primary" placeholder="İçerik tonu (örn: samimi, profesyonel) ve dahil edilmesini istediğiniz özel anahtar kelimeleri belirtin..." rows={3}></textarea>
</div>
<button className="ai-gradient-btn w-full py-3 text-white rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-purple-200 dark:shadow-none">
<span className="material-symbols-outlined text-base">auto_awesome</span>
                                    AI ile Kategori İçeriği Yaz
                                </button>
</div>
</div>
</div>
<div className="step-line">
<div className="step-dot bg-primary"></div>
<div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
<div className="flex justify-between items-center mb-4">
<h3 className="text-lg font-bold text-gray-900 dark:text-white">Oluşturulan İçerik Editörü</h3>
<div className="flex gap-2">
<button className="p-2 text-gray-500 hover:text-primary transition-colors">
<span className="material-symbols-outlined text-sm">content_copy</span>
</button>
<button className="p-2 text-gray-500 hover:text-primary transition-colors">
<span className="material-symbols-outlined text-sm">download</span>
</button>
</div>
</div>
<div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
<div className="bg-gray-50 dark:bg-gray-800 px-4 py-2 border-b border-gray-200 dark:border-gray-700 flex items-center gap-4 text-gray-500">
<span className="material-symbols-outlined text-sm cursor-pointer hover:text-primary">format_h1</span>
<span className="material-symbols-outlined text-sm cursor-pointer hover:text-primary">format_bold</span>
<span className="material-symbols-outlined text-sm cursor-pointer hover:text-primary">format_italic</span>
<span className="material-symbols-outlined text-sm cursor-pointer hover:text-primary">format_list_bulleted</span>
<span className="material-symbols-outlined text-sm cursor-pointer hover:text-primary">link</span>
<div className="ml-auto flex items-center gap-2 text-[10px] font-bold uppercase">
<span className="size-2 rounded-full bg-green-500"></span> Otomatik Kaydediliyor
                                    </div>
</div>
<div className="p-6 min-h-[400px] text-sm text-gray-700 dark:text-gray-300 content-editable focus:outline-none leading-relaxed" contentEditable="true" data-placeholder="AI tarafından oluşturulan içerik burada görünecek ve düzenlenebilecek...">
<h2 className="text-xl font-bold mb-4">Yeni Sezon Erkek Ayakkabı Koleksiyonu</h2>
<p className="mb-4">Tarzınızı tamamlayacak en şık ve konforlu <strong>erkek ayakkabı modelleri</strong> AgenciFlow farkıyla şimdi yayında. Gündelik yaşamdan özel davetlere kadar her anınıza eşlik edecek geniş ürün yelpazemizi keşfedin.</p>
<h3 className="text-lg font-semibold mb-2">Neden Bizim Ayakkabılarımızı Seçmelisiniz?</h3>
<ul className="list-disc pl-5 mb-4 space-y-2">
<li>Hakiki deri ve nefes alan iç astar yapısı</li>
<li>Ortopedik taban desteği ile gün boyu rahatlık</li>
<li>Dayanıklı malzeme kalitesiyle uzun ömürlü kullanım</li>
</ul>
<p>Hemen şimdi <em>erkek ayakkabı</em> kategorimizi inceleyin, size en uygun modeli sepetinize ekleyin!</p>
</div>
</div>
<div className="mt-6 flex gap-3">
<button className="flex-1 py-2.5 bg-primary text-white rounded-lg text-sm font-bold flex items-center justify-center gap-2 shadow-sm">
<span className="material-symbols-outlined text-sm">publish</span> İçeriği Yayınla
                                </button>
<button className="px-4 py-2.5 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg text-sm font-bold transition-colors">
                                    Taslak Olarak Kaydet
                                </button>
</div>
</div>
</div>
</div>
</div>
<aside className="w-80 bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 p-6 flex flex-col gap-6">
<div>
<h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">İÇERİK SKORU</h4>
<div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 flex flex-col items-center">
<div className="relative size-32 mb-4">
<svg className="size-full" viewBox="0 0 36 36">
<path className="stroke-gray-200 dark:stroke-gray-700" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeDasharray="100, 100" strokeWidth="3"></path>
<path className="stroke-primary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeDasharray="85, 100" strokeLinecap="round" strokeWidth="3"></path>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-2xl font-bold text-gray-900 dark:text-white">%85</span>
<span className="text-[10px] text-gray-500 font-bold uppercase">SEO Skoru</span>
</div>
</div>
<div className="w-full space-y-2">
<div className="flex justify-between text-[11px]">
<span className="text-gray-500">Okunabilirlik</span>
<span className="text-green-600 font-bold">Mükemmel</span>
</div>
<div className="flex justify-between text-[11px]">
<span className="text-gray-500">Anahtar Kelime Yoğunluğu</span>
<span className="text-orange-500 font-bold">Yüksek</span>
</div>
</div>
</div>
</div>
<div>
<h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">HEDEF ANAHTAR KELİMELER</h4>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20">Erkek Ayakkabı</span>
<span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-semibold rounded-full border border-gray-200 dark:border-gray-700">Spor Ayakkabı</span>
<span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-semibold rounded-full border border-gray-200 dark:border-gray-700">Deri Ayakkabı</span>
<span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-semibold rounded-full border border-gray-200 dark:border-gray-700">Yeni Sezon</span>
</div>
</div>
<div>
<h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">BÜTÇE DURUMU (EFOR)</h4>
<div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700">
<div className="flex flex-col gap-4">
<div>
<p className="text-xs text-gray-500 mb-1">Kullanılan AI Token / Limit</p>
<div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[40%]"></div>
</div>
<p className="text-[10px] text-gray-400 mt-1">4.200 / 10.000 Kelime</p>
</div>
<div className="h-px bg-gray-200 dark:bg-gray-700"></div>
<div>
<p className="text-xs text-gray-500 mb-1">Tahmini Maliyet</p>
<p className="text-lg font-bold text-primary">₺45,00 / İçerik</p>
</div>
</div>
</div>
</div>
<div className="mt-auto">
<button className="w-full py-3 border border-red-100 dark:border-red-900/30 rounded-xl text-sm font-bold text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors">
                        Süreci İptal Et
                    </button>
</div>
</aside>
</div>
<footer className="px-8 py-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-center text-gray-400 text-xs">
            © 2024 AgenciFlow SEO Departmanı - AI Kategori İçeriği Oluşturma Sistemi.
        </footer>

    </div>
  );
}
