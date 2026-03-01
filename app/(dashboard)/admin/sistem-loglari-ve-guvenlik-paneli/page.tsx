
"use client";

import React from "react";

export default function Page() {
  return (
    <div className="flex-1 flex flex-col">
      

<div className="p-8 space-y-6">
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white dark:bg-[#1a2432] p-5 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm">
<div className="flex justify-between items-start mb-3">
<span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">dns</span>
<span className="flex items-center gap-1 text-[#07883b] text-xs font-bold">
<span className="size-2 bg-[#07883b] rounded-full animate-pulse"></span> Çevrimiçi
                        </span>
</div>
<p className="text-[#617289] text-xs font-semibold uppercase tracking-wider">Sunucu Yükü (CPU)</p>
<p className="text-2xl font-bold mt-1">24.2%</p>
<div className="w-full bg-gray-100 dark:bg-gray-800 h-1 mt-3 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[24%]"></div>
</div>
</div>
<div className="bg-white dark:bg-[#1a2432] p-5 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm">
<div className="flex justify-between items-start mb-3">
<span className="material-symbols-outlined text-orange-500 bg-orange-500/10 p-2 rounded-lg">memory</span>
<span className="text-[#617289] text-[10px] font-bold">8.4GB / 32GB</span>
</div>
<p className="text-[#617289] text-xs font-semibold uppercase tracking-wider">Bellek Kullanımı</p>
<p className="text-2xl font-bold mt-1">26.3%</p>
<div className="w-full bg-gray-100 dark:bg-gray-800 h-1 mt-3 rounded-full overflow-hidden">
<div className="bg-orange-500 h-full w-[26%]"></div>
</div>
</div>
<div className="bg-white dark:bg-[#1a2432] p-5 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm">
<div className="flex justify-between items-start mb-3">
<span className="material-symbols-outlined text-green-500 bg-green-500/10 p-2 rounded-lg">link</span>
<span className="text-[#07883b] text-xs font-bold bg-[#07883b]/10 px-2 py-1 rounded">Aktif</span>
</div>
<p className="text-[#617289] text-xs font-semibold uppercase tracking-wider">Google/Meta API</p>
<p className="text-2xl font-bold mt-1">Stabil</p>
<div className="flex gap-1 mt-3">
<div className="h-1 flex-1 bg-green-500 rounded-full"></div>
<div className="h-1 flex-1 bg-green-500 rounded-full"></div>
<div className="h-1 flex-1 bg-green-500 rounded-full"></div>
<div className="h-1 flex-1 bg-green-500 rounded-full"></div>
</div>
</div>
<div className="bg-white dark:bg-[#1a2432] p-5 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm">
<div className="flex justify-between items-start mb-3">
<span className="material-symbols-outlined text-red-500 bg-red-500/10 p-2 rounded-lg">security_update_warning</span>
<span className="text-red-600 text-xs font-bold bg-red-600/10 px-2 py-1 rounded">3 Kritik</span>
</div>
<p className="text-[#617289] text-xs font-semibold uppercase tracking-wider">Güvenlik Olayları</p>
<p className="text-2xl font-bold mt-1">Risk Yok</p>
<div className="w-full bg-gray-100 dark:bg-gray-800 h-1 mt-3 rounded-full overflow-hidden">
<div className="bg-green-500 h-full w-full"></div>
</div>
</div>
</section>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
<div className="lg:col-span-8 space-y-6">
<div className="bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 overflow-hidden shadow-sm flex flex-col">
<div className="px-6 py-5 border-b border-[#f0f2f4] dark:border-gray-800 flex justify-between items-center">
<h3 className="font-bold text-base flex items-center gap-2">
<span className="material-symbols-outlined text-primary">list_alt</span>
                            Aktivite Logları (Kritik İşlemler)
                        </h3>
<div className="flex gap-2">
<div className="relative">
<input className="pl-8 pr-4 py-1.5 text-xs bg-gray-50 dark:bg-gray-800 border-none rounded-lg focus:ring-1 focus:ring-primary w-48" placeholder="Loglarda ara..." type="text" />
<span className="material-symbols-outlined absolute left-2.5 top-1.5 text-sm text-[#617289]">search</span>
</div>
<button className="p-1.5 bg-gray-50 dark:bg-gray-800 rounded-lg">
<span className="material-symbols-outlined text-sm text-[#617289]">filter_list</span>
</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50/50 dark:bg-gray-800/50">
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Kullanıcı</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">İşlem</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Veri/Modül</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider">Tarih</th>
<th className="px-6 py-4 text-[10px] font-bold text-[#617289] uppercase tracking-wider text-right">Durum</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 dark:divide-gray-800">
<tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="size-6 rounded-full bg-blue-100 flex items-center justify-center text-[10px] font-bold text-primary">MY</div>
<span className="text-xs font-bold text-[#111418] dark:text-white">Mert Yılmaz</span>
</div>
</td>
<td className="px-6 py-4 text-xs font-medium">Müşteri Silme</td>
<td className="px-6 py-4 text-xs text-[#617289]">CyberCore A.Ş.</td>
<td className="px-6 py-4 text-xs text-[#617289]">24 Eki, 14:32</td>
<td className="px-6 py-4 text-right">
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Tamamlandı</span>
</td>
</tr>
<tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="size-6 rounded-full bg-orange-100 flex items-center justify-center text-[10px] font-bold text-orange-600">ZA</div>
<span className="text-xs font-bold text-[#111418] dark:text-white">Zeynep Aras</span>
</div>
</td>
<td className="px-6 py-4 text-xs font-medium">Şifre Kasası Erişimi</td>
<td className="px-6 py-4 text-xs text-[#617289]">Meta Ads Manager</td>
<td className="px-6 py-4 text-xs text-[#617289]">24 Eki, 12:15</td>
<td className="px-6 py-4 text-right">
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">Denetlendi</span>
</td>
</tr>
<tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="size-6 rounded-full bg-red-100 flex items-center justify-center text-[10px] font-bold text-red-600">BY</div>
<span className="text-xs font-bold text-[#111418] dark:text-white">Burak Yılmaz</span>
</div>
</td>
<td className="px-6 py-4 text-xs font-medium">Bütçe Değişikliği</td>
<td className="px-6 py-4 text-xs text-[#617289]">EcoStore (+₺45,000)</td>
<td className="px-6 py-4 text-xs text-[#617289]">24 Eki, 11:05</td>
<td className="px-6 py-4 text-right">
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Onaylandı</span>
</td>
</tr>
<tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="size-6 rounded-full bg-purple-100 flex items-center justify-center text-[10px] font-bold text-purple-600">ED</div>
<span className="text-xs font-bold text-[#111418] dark:text-white">Ece Demir</span>
</div>
</td>
<td className="px-6 py-4 text-xs font-medium">API Konfigürasyonu</td>
<td className="px-6 py-4 text-xs text-[#617289]">Google Analytics 4</td>
<td className="px-6 py-4 text-xs text-[#617289]">24 Eki, 09:44</td>
<td className="px-6 py-4 text-right">
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Tamamlandı</span>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-4 border-t border-[#f0f2f4] dark:border-gray-800 flex justify-center">
<button className="text-[11px] font-bold text-primary hover:underline">Tüm Kayıtları Gör (2,450+)</button>
</div>
</div>
</div>
<div className="lg:col-span-4 space-y-6">
<div className="bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 overflow-hidden shadow-sm flex flex-col">
<div className="px-6 py-5 border-b border-[#f0f2f4] dark:border-gray-800">
<h3 className="font-bold text-base flex items-center gap-2">
<span className="material-symbols-outlined text-primary">verified_user</span>
                            Yetki Yönetimi Özeti
                        </h3>
</div>
<div className="p-6 space-y-4">
<div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">engineering</span>
<span className="text-xs font-bold">Adminler</span>
</div>
<span className="text-sm font-bold">4</span>
</div>
<div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-blue-500">psychology</span>
<span className="text-xs font-bold">Uzmanlar</span>
</div>
<span className="text-sm font-bold">18</span>
</div>
<div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-orange-500">handshake</span>
<span className="text-xs font-bold">Satış Ekibi</span>
</div>
<span className="text-sm font-bold">6</span>
</div>
<div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-green-500">gate</span>
<span className="text-xs font-bold">Müşteri Portalları</span>
</div>
<span className="text-sm font-bold">42</span>
</div>
<button className="w-full mt-2 py-2.5 bg-primary text-white rounded-lg text-xs font-bold shadow-md hover:bg-blue-700 transition-all">
                            Yetki Düzenleyiciyi Aç
                        </button>
</div>
</div>
<div className="bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 overflow-hidden shadow-sm flex flex-col">
<div className="px-6 py-5 border-b border-[#f0f2f4] dark:border-gray-800 flex items-center justify-between">
<h3 className="font-bold text-base flex items-center gap-2 text-red-600">
<span className="material-symbols-outlined">gpp_maybe</span>
                            Güvenlik Uyarıları
                        </h3>
<span className="bg-red-100 text-red-600 px-2 py-0.5 rounded text-[10px] font-bold uppercase">Kritik</span>
</div>
<div className="p-4 space-y-3">
<div className="p-3 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 rounded-lg flex gap-3">
<span className="material-symbols-outlined text-red-600 text-[20px]">login</span>
<div>
<p className="text-xs font-bold text-red-700 dark:text-red-400">Şüpheli Giriş Denemesi</p>
<p className="text-[10px] text-red-600/70">IP: 185.12.XX.XX (Amsterdam) - 5 başarısız deneme</p>
</div>
</div>
<div className="p-3 bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/20 rounded-lg flex gap-3">
<span className="material-symbols-outlined text-orange-600 text-[20px]">cached</span>
<div>
<p className="text-xs font-bold text-orange-700 dark:text-orange-400">Olağandışı Kasa Erişimi</p>
<p className="text-[10px] text-orange-600/70">Zeynep A. 10 dk içinde 5 farklı şifre görüntüledi.</p>
</div>
</div>
<div className="p-3 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20 rounded-lg flex gap-3">
<span className="material-symbols-outlined text-blue-600 text-[20px]">key</span>
<div>
<p className="text-xs font-bold text-blue-700 dark:text-blue-400">API Anahtarı Rotasyonu</p>
<p className="text-[10px] text-blue-600/70">Meta API anahtarının süresi 3 gün içinde doluyor.</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
<div className="bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 p-6 shadow-sm">
<div className="flex items-center justify-between mb-6">
<h3 className="font-bold text-base flex items-center gap-2">
<span className="material-symbols-outlined text-primary">bar_chart</span>
                        Sunucu Yanıt Süreleri (ms)
                    </h3>
<span className="text-[10px] font-bold text-[#617289] uppercase tracking-widest">Son 24 Saat</span>
</div>
<div className="flex items-end gap-1.5 h-32">
<div className="flex-1 bg-primary/20 rounded-t-sm h-[40%]"></div>
<div className="flex-1 bg-primary/20 rounded-t-sm h-[45%]"></div>
<div className="flex-1 bg-primary/20 rounded-t-sm h-[38%]"></div>
<div className="flex-1 bg-primary/20 rounded-t-sm h-[52%]"></div>
<div className="flex-1 bg-primary/20 rounded-t-sm h-[60%]"></div>
<div className="flex-1 bg-primary rounded-t-sm h-[42%]"></div>
<div className="flex-1 bg-primary/20 rounded-t-sm h-[35%]"></div>
<div className="flex-1 bg-primary/20 rounded-t-sm h-[48%]"></div>
<div className="flex-1 bg-primary/20 rounded-t-sm h-[55%]"></div>
<div className="flex-1 bg-primary/20 rounded-t-sm h-[62%]"></div>
<div className="flex-1 bg-primary/20 rounded-t-sm h-[50%]"></div>
<div className="flex-1 bg-primary/20 rounded-t-sm h-[45%]"></div>
</div>
<div className="flex justify-between mt-4 border-t border-gray-100 dark:border-gray-800 pt-4">
<div className="text-center">
<p className="text-lg font-bold">124ms</p>
<p className="text-[10px] text-[#617289] font-bold uppercase">Ortalama</p>
</div>
<div className="text-center">
<p className="text-lg font-bold">99.98%</p>
<p className="text-[10px] text-[#617289] font-bold uppercase">Uptime</p>
</div>
<div className="text-center">
<p className="text-lg font-bold">0.02%</p>
<p className="text-[10px] text-[#617289] font-bold uppercase">Hata Oranı</p>
</div>
</div>
</div>
<div className="bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-800 p-6 shadow-sm">
<div className="flex items-center justify-between mb-6">
<h3 className="font-bold text-base flex items-center gap-2">
<span className="material-symbols-outlined text-primary">hub</span>
                        Servis Entegrasyon Durumu
                    </h3>
<span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">Tümü Aktif</span>
</div>
<div className="space-y-4">
<div className="flex items-center gap-4">
<div className="size-8 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-lg">database</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-bold">Veritabanı Cluster (PostgreSQL)</span>
<span className="text-[10px] font-bold text-green-500">SAĞLIKLI</span>
</div>
<div className="w-full bg-gray-100 dark:bg-gray-800 h-1.5 rounded-full overflow-hidden">
<div className="bg-green-500 h-full w-[100%]"></div>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="size-8 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
<span className="material-symbols-outlined text-blue-400 text-lg">mail</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-bold">SMTP Sunucusu (SendGrid)</span>
<span className="text-[10px] font-bold text-green-500">SAĞLIKLI</span>
</div>
<div className="w-full bg-gray-100 dark:bg-gray-800 h-1.5 rounded-full overflow-hidden">
<div className="bg-green-500 h-full w-[100%]"></div>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="size-8 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
<span className="material-symbols-outlined text-orange-400 text-lg">folder_shared</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-bold">S3 Dosya Depolama (AWS)</span>
<span className="text-[10px] font-bold text-orange-500">GECİKMELİ (42ms)</span>
</div>
<div className="w-full bg-gray-100 dark:bg-gray-800 h-1.5 rounded-full overflow-hidden">
<div className="bg-orange-500 h-full w-[85%]"></div>
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
