"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Search,
  Filter,
  ShoppingCart,
  TrendingUp,
  Globe,
  MoreVertical,
  Activity,
  ShieldAlert,
  HelpCircle,
  Hash
} from "lucide-react";

// --- Dummy Data ---
const INVENTORY_DATA = [
  {
    id: "pub-1",
    url: "teknolojioku.com",
    categories: ["Teknoloji", "Haber"],
    dr: 74,
    traffic: "2.4M",
    spamScore: 1,
    deliveryTime: "24 Saat",
    agencyContact: {
      name: "Ahmet Y.",
      role: "Sales Target",
      badge: "Premium Partner"
    },
    price: 4500,
    currency: "₺"
  },
  {
    id: "pub-2",
    url: "shiftdelete.net",
    categories: ["Teknoloji", "Donanım"],
    dr: 82,
    traffic: "8.1M",
    spamScore: 2,
    deliveryTime: "48 Saat",
    agencyContact: {
      name: "Elif K.",
      role: "Account Manager",
      badge: "Exclusive"
    },
    price: 8500,
    currency: "₺"
  },
  {
    id: "pub-3",
    url: "ekonomist.com.tr",
    categories: ["Ekonomi", "İş Dünyası"],
    dr: 68,
    traffic: "450K",
    spamScore: 4,
    deliveryTime: "1-3 Gün",
    agencyContact: {
      name: "Burak M.",
      role: "Media Buyer",
      badge: "Verified"
    },
    price: 3200,
    currency: "₺"
  },
  {
    id: "pub-4",
    url: "sagliklihayat.net",
    categories: ["Sağlık", "Yaşam"],
    dr: 45,
    traffic: "120K",
    spamScore: 1,
    deliveryTime: "24 Saat",
    agencyContact: {
      name: "Buse S.",
      role: "Editor",
      badge: "Verified"
    },
    price: 1500,
    currency: "₺"
  },
  {
    id: "pub-5",
    url: "otomobilkampanyalari.com",
    categories: ["Otomotiv", "Haber"],
    dr: 51,
    traffic: "210K",
    spamScore: 8,
    deliveryTime: "48 Saat",
    agencyContact: {
      name: "Cem T.",
      role: "Sales",
      badge: "Standard"
    },
    price: 1800,
    currency: "₺"
  }
];

export default function PublisherInventoryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [drRange, setDrRange] = useState([0, 100]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [minTraffic, setMinTraffic] = useState<number>(0);

  const parseTraffic = (t: string) => {
    if (t.includes('M')) return parseFloat(t) * 1000000;
    if (t.includes('K')) return parseFloat(t) * 1000;
    return parseFloat(t) || 0;
  };
  
  const filteredData = INVENTORY_DATA.filter(pub => {
    const matchesSearch = pub.url.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          pub.categories.some(c => c.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesDr = pub.dr >= drRange[0] && pub.dr <= drRange[1];
    const matchesCategory = selectedCategories.length === 0 || pub.categories.some(c => selectedCategories.includes(c));
    const matchesTraffic = parseTraffic(pub.traffic) >= minTraffic;

    return matchesSearch && matchesDr && matchesCategory && matchesTraffic;
  });

  const totalPublishers = filteredData.length;
  const avgDr = totalPublishers > 0 ? Math.round(filteredData.reduce((acc, curr) => acc + curr.dr, 0) / totalPublishers) : 0;
  const totalTrafficNum = filteredData.reduce((acc, curr) => acc + parseTraffic(curr.traffic), 0);
  const totalTraffic = totalTrafficNum >= 1000000 
    ? (totalTrafficNum / 1000000).toFixed(1) + 'M' 
    : totalTrafficNum >= 1000 
      ? Math.round(totalTrafficNum / 1000) + 'K' 
      : totalTrafficNum.toString();

  return (
    <div className="flex flex-col flex-1 h-[calc(100vh-64px)] overflow-hidden bg-gray-50 dark:bg-[#111827]">
      {/* Header */}
      <div className="p-6 md:px-8 bg-white dark:bg-[#1f2937] border-b border-gray-200 dark:border-gray-800 shrink-0">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-[#111418] dark:text-white">Yayıncı Envanteri</h1>
            <p className="text-sm text-muted-foreground mt-1">Backlink ve tanıtım yazısı için seçkin yayıncı veri tabanı.</p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800 h-10">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Sepetim (0)
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 md:p-8">
        <div className="max-w-7xl mx-auto space-y-6 pb-12">
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-[#1f2937] p-5 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col justify-between">
              <div className="flex items-center gap-2 mb-2">
                 <div className="p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg text-indigo-600 dark:text-indigo-400">
                    <Globe className="h-4 w-4" />
                 </div>
                 <p className="text-sm font-semibold text-muted-foreground">Toplam Yayıncı</p>
              </div>
              <h3 className="text-3xl font-black text-[#111418] dark:text-white">{totalPublishers}</h3>
            </div>
            
            <div className="bg-white dark:bg-[#1f2937] p-5 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col justify-between">
              <div className="flex items-center gap-2 mb-2">
                 <div className="p-2 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg text-emerald-600 dark:text-emerald-400">
                    <TrendingUp className="h-4 w-4" />
                 </div>
                 <p className="text-sm font-semibold text-muted-foreground">Ortalama DR</p>
              </div>
              <h3 className="text-3xl font-black text-[#111418] dark:text-white">{avgDr}</h3>
            </div>

            <div className="bg-white dark:bg-[#1f2937] p-5 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col justify-between">
               <div className="flex items-center gap-2 mb-2">
                 <div className="p-2 bg-amber-50 dark:bg-amber-900/20 rounded-lg text-amber-600 dark:text-amber-400">
                    <Activity className="h-4 w-4" />
                 </div>
                 <p className="text-sm font-semibold text-muted-foreground">Aylık Toplam Trafik</p>
              </div>
              <h3 className="text-3xl font-black text-[#111418] dark:text-white">{totalTraffic}</h3>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-6">
            {/* Filters Sidebar */}
            <div className="w-full lg:w-72 bg-white dark:bg-[#1f2937] border border-gray-200 dark:border-gray-800 rounded-2xl p-5 shadow-sm shrink-0">
               <div className="flex items-center gap-2 mb-6 text-[#111418] dark:text-white">
                 <Filter className="h-4 w-4" />
                 <h3 className="font-bold">Gelişmiş Filtreler</h3>
               </div>

               <div className="space-y-6">
                 <div>
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3 block">Domain Rating (DR)</label>
                    <Slider 
                      defaultValue={[0, 100]} 
                      max={100} 
                      step={1} 
                      value={drRange}
                      onValueChange={setDrRange}
                      className="mb-2"
                    />
                    <div className="flex items-center justify-between text-xs font-semibold text-[#111418] dark:text-white">
                      <span>{drRange[0]}</span>
                      <span>{drRange[1]}</span>
                    </div>
                 </div>

                 <div>
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 block">Kategoriler</label>
                    <div className="space-y-2">
                       {['Teknoloji', 'Ekonomi', 'Sağlık', 'Otomotiv', 'Yaşam'].map(c => (
                         <label key={c} className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer">
                            <input 
                              type="checkbox" 
                              className="rounded border-gray-300 dark:border-gray-700 w-4 h-4 cursor-pointer text-primary focus:ring-primary/50" 
                              checked={selectedCategories.includes(c)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setSelectedCategories([...selectedCategories, c]);
                                } else {
                                  setSelectedCategories(selectedCategories.filter(cat => cat !== c));
                                }
                              }}
                            />
                            {c}
                         </label>
                       ))}
                    </div>
                 </div>

                 <div>
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 block">Min. Trafik</label>
                    <select 
                      className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm px-3 py-2 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      value={minTraffic}
                      onChange={(e) => setMinTraffic(Number(e.target.value))}
                    >
                      <option value={0}>Farketmez</option>
                      <option value={10000}>10K+</option>
                      <option value={50000}>50K+</option>
                      <option value={100000}>100K+</option>
                      <option value={1000000}>1M+</option>
                    </select>
                 </div>
               </div>
            </div>

            {/* Inventory Table Container */}
            <div className="flex-1 w-full bg-white dark:bg-[#1f2937] border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm overflow-hidden flex flex-col">
              {/* Table Toolbar */}
              <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50/50 dark:bg-[#1f2937]/50">
                 <div className="relative w-full sm:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input 
                      type="text" 
                      placeholder="URL veya Kategori ara..." 
                      className="w-full pl-9 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                 </div>
                 <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
                    <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">{filteredData.length}</span> yayıncı bulundu
                 </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse">
                   <thead>
                      <tr className="bg-gray-50 dark:bg-gray-800/50 text-xs uppercase tracking-wider text-muted-foreground border-b border-gray-200 dark:border-gray-800">
                         <th className="px-6 py-4 font-bold">Yayıncı / URL</th>
                         <th className="px-6 py-4 font-bold text-center">Metrikler</th>
                         <th className="px-6 py-4 font-bold text-center">Kategori</th>
                         <th className="px-6 py-4 font-bold text-center">Spam Skoru</th>
                         <th className="px-6 py-4 font-bold text-right">Fiyat</th>
                         <th className="px-6 py-4 font-bold text-center w-32">İşlem</th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                      {filteredData.map((item) => (
                         <tr key={item.id} className="hover:bg-gray-50/80 dark:hover:bg-gray-800/40 transition-colors group">
                           <td className="px-6 py-4 whitespace-nowrap">
                             <div className="flex flex-col gap-1.5">
                               <a href={`https://${item.url}`} target="_blank" rel="noopener noreferrer" className="font-bold text-primary hover:underline text-sm flex items-center gap-1.5">
                                 {item.url}
                                 <Globe className="h-3 w-3 opacity-50" />
                               </a>
                               <div className="group/tooltip relative w-max cursor-help flex items-center gap-1.5 text-xs font-medium text-gray-500">
                                   <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                   {item.deliveryTime}
                                   
                                   {/* Agency Tooltip */}
                                   <div className="absolute left-0 bottom-full mb-2 hidden group-hover/tooltip:block w-48 bg-gray-900 text-white text-xs p-3 rounded-xl shadow-xl z-10">
                                      <p className="font-bold mb-1 opacity-50 uppercase tracking-wider text-[10px]">Tedarikçi / İletişim</p>
                                      <p className="font-semibold text-sm mb-0.5">{item.agencyContact.name}</p>
                                      <p className="opacity-75">{item.agencyContact.role}</p>
                                      <Badge variant="outline" className="mt-2 border-white/20 bg-white/10 text-white">{item.agencyContact.badge}</Badge>
                                   </div>
                               </div>
                             </div>
                           </td>
                           <td className="px-6 py-4 whitespace-nowrap text-center">
                             <div className="flex items-center justify-center gap-4">
                                <div className="flex flex-col items-center group/tooltip relative cursor-help">
                                  <span className="text-sm font-black text-[#111418] dark:text-white">{item.dr}</span>
                                  <span className="text-[10px] text-muted-foreground uppercase font-bold">DR</span>
                                </div>
                                <div className="w-px h-6 bg-gray-200 dark:bg-gray-800" />
                                <div className="flex flex-col items-center">
                                  <span className="text-sm font-black text-[#111418] dark:text-white">{item.traffic}</span>
                                  <span className="text-[10px] text-muted-foreground uppercase font-bold">Hit</span>
                                </div>
                             </div>
                           </td>
                           <td className="px-6 py-4 whitespace-nowrap text-center">
                             <div className="flex flex-wrap items-center justify-center gap-1.5 max-w-[150px]">
                                {item.categories.map(cat => (
                                   <Badge key={cat} variant="secondary" className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 text-[10px] px-1.5 py-0 h-5">
                                      {cat}
                                   </Badge>
                                ))}
                             </div>
                           </td>
                           <td className="px-6 py-4 whitespace-nowrap text-center">
                              <div className="flex items-center justify-center gap-1">
                                 <ShieldAlert className={`h-4 w-4 ${item.spamScore > 5 ? 'text-rose-500' : 'text-emerald-500'}`} />
                                 <span className={`font-bold text-sm ${item.spamScore > 5 ? 'text-rose-600 dark:text-rose-400' : 'text-emerald-600 dark:text-emerald-400'}`}>
                                    %{item.spamScore}
                                 </span>
                              </div>
                           </td>
                           <td className="px-6 py-4 whitespace-nowrap text-right">
                             <div className="flex flex-col items-end">
                                <span className="text-base font-black text-[#111418] dark:text-white">{item.price.toLocaleString('tr-TR')} {item.currency}</span>
                                <span className="text-[10px] text-muted-foreground uppercase font-bold">+ KDV</span>
                             </div>
                           </td>
                           <td className="px-6 py-4 whitespace-nowrap text-center">
                             <Button size="sm" className="bg-[#111418] hover:bg-gray-800 text-white dark:bg-white dark:text-[#111418] dark:hover:bg-gray-200 h-8 font-bold">
                                Satın Al
                             </Button>
                           </td>
                         </tr>
                      ))}
                   </tbody>
                 </table>
                 
                 {filteredData.length === 0 && (
                   <div className="p-12 text-center flex flex-col items-center text-muted-foreground">
                      <Search className="h-8 w-8 mb-3 opacity-20" />
                      <p className="font-semibold">Böyle bir yayıncı bulunamadı.</p>
                      <p className="text-sm opacity-70">Filtreleri veya arama terimini değiştirin.</p>
                   </div>
                 )}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
