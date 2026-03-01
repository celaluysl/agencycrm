
"use client";

import React from "react";

export default function Page() {
  return (
    <div className="flex-1 flex flex-col flex-1 flex flex-col min-w-0 overflow-hidden">
      

<div className="px-6 py-4 bg-white dark:bg-[#111827] border-b border-[#dbe0e6] dark:border-gray-800 flex flex-wrap items-center justify-between gap-4">
<div className="flex gap-8">
<a className="border-b-2 border-primary pb-2 text-primary font-bold text-sm" href="#">Tüm Aktif Müşteriler</a>
<a className="border-b-2 border-transparent pb-2 text-[#617289] dark:text-gray-400 font-medium text-sm hover:text-[#111418] dark:hover:text-white" href="#">Bekleyen Onaylar</a>
<a className="border-b-2 border-transparent pb-2 text-[#617289] dark:text-gray-400 font-medium text-sm hover:text-[#111418] dark:hover:text-white" href="#">Tamamlananlar</a>
</div>
<div className="flex gap-2">
<div className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-[#617289] uppercase tracking-wider">
                Departman Filtresi:
            </div>
<button className="flex items-center gap-2 rounded-lg bg-[#f0f2f4] dark:bg-gray-800 px-3 py-1.5 text-sm font-medium text-[#111418] dark:text-gray-300 border border-transparent hover:border-primary/30">
<span>SEO</span>
</button>
<button className="flex items-center gap-2 rounded-lg bg-[#f0f2f4] dark:bg-gray-800 px-3 py-1.5 text-sm font-medium text-[#111418] dark:text-gray-300 border border-transparent hover:border-primary/30">
<span>Tasarım</span>
</button>
<button className="flex items-center gap-2 rounded-lg bg-[#f0f2f4] dark:bg-gray-800 px-3 py-1.5 text-sm font-medium text-[#111418] dark:text-gray-300 border border-transparent hover:border-primary/30">
<span>Yazılım</span>
</button>
<button className="flex items-center gap-2 rounded-lg bg-primary/10 text-primary px-3 py-1.5 text-sm font-bold border border-primary/20">
<span>Hepsi</span>
</button>
</div>
</div>
<div className="flex-1 overflow-auto custom-scrollbar p-6">
<div className="bg-white dark:bg-[#111827] rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm overflow-hidden">
<table className="w-full text-left">
<thead>
<tr className="bg-gray-50 dark:bg-gray-800/50 border-b border-[#dbe0e6] dark:border-gray-800">
<th className="px-6 py-4 text-xs font-bold text-[#617289] dark:text-gray-400 uppercase tracking-wider">Müşteri Adı</th>
<th className="px-6 py-4 text-xs font-bold text-[#617289] dark:text-gray-400 uppercase tracking-wider">Departman</th>
<th className="px-6 py-4 text-xs font-bold text-[#617289] dark:text-gray-400 uppercase tracking-wider">Proje Durumu</th>
<th className="px-6 py-4 text-xs font-bold text-[#617289] dark:text-gray-400 uppercase tracking-wider">Son İletişim</th>
<th className="px-6 py-4 text-xs font-bold text-[#617289] dark:text-gray-400 uppercase tracking-wider">Atanan Uzman</th>
<th className="px-6 py-4"></th>
</tr>
</thead>
<tbody className="divide-y divide-[#f0f2f4] dark:divide-gray-800">
<tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
                                    AT
                                </div>
<div>
<div className="font-bold text-[#111418] dark:text-white">Acme Teknoloji</div>
<div className="text-xs text-[#617289] dark:text-gray-500">E-Ticaret Dönüşümü</div>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="px-2.5 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 uppercase">Yazılım</span>
</td>
<td className="px-6 py-4">
<div className="w-full max-w-[160px]">
<div className="flex justify-between items-center mb-1 text-[11px] font-bold">
<span className="text-primary">%60 Tamamlandı</span>
</div>
<div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{ "width": "60%" }}></div>
</div>
</div>
</td>
<td className="px-6 py-4">
<div className="text-sm text-[#111418] dark:text-white font-medium">Bugün, 14:30</div>
<div className="text-[11px] text-[#617289] dark:text-gray-500 italic">E-posta gönderildi</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="size-7 rounded-full bg-gray-200 bg-cover bg-center" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDXaXuCh0iiV_X8hAryYYcgKj9YV-75CfzIohqrdio2bLvFiABZhiKPS8ylxde5KTsh3aSu67B5Xd1HnQz09gHVEenWJaHspTpTElDZbFu7i7UuncgAoC-VlrlKW8yQjVglnZo1GgZtLadew6X3kuYXGwNg3fJo-XNYr1ZuemwZev10TeF-hGzcnApHreuHR3i5NwiB6LpWOAhA-_8f1Dx81zdO3bIevFFDST40oHArb5xpHjRAk5ix91vhbiAsit8s8qww0z0KM53P')" }}></div>
<span className="text-sm font-medium dark:text-gray-300">Can Yılmaz</span>
</div>
</td>
<td className="px-6 py-4 text-right">
<button className="text-[#617289] hover:text-primary transition-colors"><span className="material-symbols-outlined">more_vert</span></button>
</td>
</tr>
<tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 font-bold">
                                    GA
                                </div>
<div>
<div className="font-bold text-[#111418] dark:text-white">Gökyüzü Ajans</div>
<div className="text-xs text-[#617289] dark:text-gray-500">SEO Strateji Paketi</div>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 uppercase">SEO</span>
</td>
<td className="px-6 py-4">
<div className="w-full max-w-[160px]">
<div className="flex justify-between items-center mb-1 text-[11px] font-bold">
<span className="text-green-500">%85 Tamamlandı</span>
</div>
<div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
<div className="bg-green-500 h-full rounded-full" style={{ "width": "85%" }}></div>
</div>
</div>
</td>
<td className="px-6 py-4">
<div className="text-sm text-[#111418] dark:text-white font-medium">Dün, 09:15</div>
<div className="text-[11px] text-[#617289] dark:text-gray-500 italic">WhatsApp araması</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="size-7 rounded-full bg-gray-200 bg-cover bg-center" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAGaGUQX-6yEvVO9sO7vu6tHurgR8JZPP9rNMu_cKH6jDKDfVhxq9IWFICK-Y2Bqqdd65KqcVW1CbHDKymF-4DMQJoWWPd1CxnOnas70XU6tmwtWzU2iED3KGTMW5PicJLXa4-mQtrmjxYUVyjJFZj7i12VHlVgNYfKNApoKtKlEtO3piTzHF9NiEqS3Od9fDsONFED94qD3TDMyVl2y6bw9ssso8ZY8WstTmuoM_hdHJ0b7dJ7fjSCt2EwFHvfU-QUjj46R7gAGAR2')" }}></div>
<span className="text-sm font-medium dark:text-gray-300">Mert Demir</span>
</div>
</td>
<td className="px-6 py-4 text-right">
<button className="text-[#617289] hover:text-primary transition-colors"><span className="material-symbols-outlined">more_vert</span></button>
</td>
</tr>
<tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 font-bold">
                                    HL
                                </div>
<div>
<div className="font-bold text-[#111418] dark:text-white">Hızlı Lojistik</div>
<div className="text-xs text-[#617289] dark:text-gray-500">Logo &amp; Kurumsal Kimlik</div>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="px-2.5 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 uppercase">Tasarım</span>
</td>
<td className="px-6 py-4">
<div className="w-full max-w-[160px]">
<div className="flex justify-between items-center mb-1 text-[11px] font-bold">
<span className="text-primary">%25 Tamamlandı</span>
</div>
<div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{ "width": "25%" }}></div>
</div>
</div>
</td>
<td className="px-6 py-4">
<div className="text-sm text-[#111418] dark:text-white font-medium">3 gün önce</div>
<div className="text-[11px] text-[#617289] dark:text-gray-500 italic">Toplantı notları paylaşıldı</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="size-7 rounded-full bg-gray-200 bg-cover bg-center" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuACxbhqudTzPbZmfLo3DPa_yEoEwQhGjXFHh3PHglnXgi7DUfr6qPkTbblfNp-8dSoP-tjVX2iqP8nGDAaEkqr7c9eofKUe70vYDH0tMftXStyyzZblGhwu7bLEMk2fiI-1VUoVmPhiXrhApS0cuSUDSJMylXgTNVEJM345JR8TSVrk7SIfAkHga3aXqQltR6NXMGix3GO6aEHHE1zleLybfPcCdm0t6zS7A-ZAktXqRjb2frcd4P_ycWBrAl4jUPFCFu6AwmhoUM87')" }}></div>
<span className="text-sm font-medium dark:text-gray-300">Aslı Akın</span>
</div>
</td>
<td className="px-6 py-4 text-right">
<button className="text-[#617289] hover:text-primary transition-colors"><span className="material-symbols-outlined">more_vert</span></button>
</td>
</tr>
<tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold">
                                    TF
                                </div>
<div>
<div className="font-bold text-[#111418] dark:text-white">TechFlow Yazılım</div>
<div className="text-xs text-[#617289] dark:text-gray-500">Mobil Uygulama Arayüzü</div>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="px-2.5 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 uppercase">Tasarım</span>
</td>
<td className="px-6 py-4">
<div className="w-full max-w-[160px]">
<div className="flex justify-between items-center mb-1 text-[11px] font-bold">
<span className="text-green-500">%100 Tamamlandı</span>
</div>
<div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
<div className="bg-green-500 h-full rounded-full" style={{ "width": "100%" }}></div>
</div>
</div>
</td>
<td className="px-6 py-4">
<div className="text-sm text-[#111418] dark:text-white font-medium">1 saat önce</div>
<div className="text-[11px] text-green-600 dark:text-green-500 font-bold">Onaylandı</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="size-7 rounded-full bg-gray-200 bg-cover bg-center" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAAHqrf3nhEPZV9emALCp2ksTPyOVG6LKqByG1kRIhDr9v-aCSQFB4jbzo2mEBhLG0k-KBNxqdbJkerkzhdDs5EmgTMg7JdJCwtv2rmndWTYBd_9vrBIuhp7mRs7310ILeTjou1xSQXuqlGxCo3xz9uMItRbZ-14csDugssBy6yP3N30JxvT_LY-Vklsnw0ECwTmgfTay3e9PimCvvTF3YqP9JN6RoNLe48hrsR6sE5VSVbEZfUs3K18aZx4OCW-X4DyDtVtgGR2i6k')" }}></div>
<span className="text-sm font-medium dark:text-gray-300">Aslı Akın</span>
</div>
</td>
<td className="px-6 py-4 text-right">
<button className="text-[#617289] hover:text-primary transition-colors"><span className="material-symbols-outlined">more_vert</span></button>
</td>
</tr>
</tbody>
</table>
<div className="p-4 border-t border-[#f0f2f4] dark:border-gray-800 flex items-center justify-between">
<span className="text-sm text-[#617289] dark:text-gray-500 font-medium">Toplam 14 müşteriden 4 tanesi gösteriliyor</span>
<div className="flex gap-1">
<button className="px-3 py-1 rounded border border-[#dbe0e6] dark:border-gray-700 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50" disabled>Önceki</button>
<button className="px-3 py-1 rounded bg-primary text-white text-sm font-bold">1</button>
<button className="px-3 py-1 rounded border border-[#dbe0e6] dark:border-gray-700 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800">2</button>
<button className="px-3 py-1 rounded border border-[#dbe0e6] dark:border-gray-700 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800">Sonraki</button>
</div>
</div>
</div>
</div>

    </div>
  );
}
