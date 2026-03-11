"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  TrendingDown,
  Minus,
  Search,
  Filter,
  Download,
  Calendar,
  Globe,
  ArrowUp,
  ArrowDown,
  Plus,
  MoreHorizontal
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine
} from "recharts";

// --- Dummy Data ---
const CHART_DATA = [
  { date: "1 Tem", avgRank: 12.5 },
  { date: "8 Tem", avgRank: 11.2 },
  { date: "15 Tem", avgRank: 9.8 },
  { date: "22 Tem", avgRank: 7.4 },
  { date: "29 Tem", avgRank: 8.1 },
  { date: "5 Ağu", avgRank: 6.5 },
  { date: "12 Ağu", avgRank: 4.2 },
];

const KEYWORDS = [
  {
    id: 1,
    keyword: "seo ajansı",
    url: "/seo-hizmetleri",
    intent: "Commercial",
    volume: "12.5K",
    difficulty: 65,
    rank: 3,
    previousRank: 5,
    bestRank: 2,
    updatedAt: "2 saat önce"
  },
  {
    id: 2,
    keyword: "dijital pazarlama uzmanı",
    url: "/danismanlik",
    intent: "Informational",
    volume: "8.2K",
    difficulty: 54,
    rank: 12,
    previousRank: 12,
    bestRank: 8,
    updatedAt: "4 saat önce"
  },
  {
    id: 3,
    keyword: "e-ticaret seo nasıl yapılır",
    url: "/blog/e-ticaret-seo",
    intent: "Informational",
    volume: "3.4K",
    difficulty: 42,
    rank: 1,
    previousRank: 3,
    bestRank: 1,
    updatedAt: "1 saat önce"
  },
  {
    id: 4,
    keyword: "kurumsal seo",
    url: "/kurumsal-seo",
    intent: "Transactional",
    volume: "5.1K",
    difficulty: 78,
    rank: 8,
    previousRank: 6,
    bestRank: 5,
    updatedAt: "5 saat önce"
  },
  {
    id: 5,
    keyword: "backlink paketleri",
    url: "/hizmetler/backlink",
    intent: "Commercial",
    volume: "4.8K",
    difficulty: 60,
    rank: 15,
    previousRank: 22,
    bestRank: 15,
    updatedAt: "1 gün önce"
  }
];

export default function RankTrackingPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredKeywords = KEYWORDS.filter(k => 
    k.keyword.toLowerCase().includes(searchTerm.toLowerCase()) ||
    k.url.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col flex-1 h-[calc(100vh-64px)] overflow-hidden bg-gray-50 dark:bg-[#111827]">
      {/* Header */}
      <div className="p-6 md:px-8 bg-white dark:bg-[#1f2937] border-b border-gray-200 dark:border-gray-800 shrink-0">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Proje:</span>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800 flex items-center gap-1.5">
                <Globe className="h-3 w-3" />
                technova.com.tr
              </Badge>
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-[#111418] dark:text-white">Rank Tracking</h1>
            <p className="text-sm text-muted-foreground mt-1">Anahtar kelime sıralamalarını ve trendleri anlık olarak izleyin.</p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 h-10">
              <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
              Son 30 Gün
            </Button>
            <Button className="h-10 bg-primary hover:bg-primary/90">
              <Plus className="mr-2 h-4 w-4" />
              Kelime Ekle
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 md:p-8">
        <div className="max-w-7xl mx-auto space-y-6 pb-12">
          
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-[#1f2937] p-5 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col justify-between">
              <p className="text-sm font-semibold text-muted-foreground mb-1">Ortalama Konum</p>
              <div className="flex items-end justify-between">
                <h3 className="text-3xl font-black text-[#111418] dark:text-white">5.8</h3>
                <div className="flex items-center text-emerald-600 text-sm font-bold bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-md">
                   <TrendingUp className="h-4 w-4 mr-1" />
                   +1.2
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-[#1f2937] p-5 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col justify-between">
              <p className="text-sm font-semibold text-muted-foreground mb-1">Görünürlük (Visibility)</p>
              <div className="flex items-end justify-between">
                <h3 className="text-3xl font-black text-[#111418] dark:text-white">%42</h3>
                <div className="flex items-center text-emerald-600 text-sm font-bold bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-md">
                   <TrendingUp className="h-4 w-4 mr-1" />
                   +%5
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#1f2937] p-5 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col justify-between">
              <p className="text-sm font-semibold text-muted-foreground mb-1">Top 3'te Olanlar</p>
              <div className="flex items-end justify-between">
                <h3 className="text-3xl font-black text-[#111418] dark:text-white">12</h3>
                <div className="flex items-center text-emerald-600 text-sm font-bold bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-md">
                   <TrendingUp className="h-4 w-4 mr-1" />
                   +3
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#1f2937] p-5 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col justify-between">
              <p className="text-sm font-semibold text-muted-foreground mb-1">Düşüş Yaşayanlar</p>
              <div className="flex items-end justify-between">
                <h3 className="text-3xl font-black text-[#111418] dark:text-white">4</h3>
                <div className="flex items-center text-rose-600 text-sm font-bold bg-rose-50 dark:bg-rose-900/20 px-2 py-1 rounded-md">
                   <TrendingDown className="h-4 w-4 mr-1" />
                   -2
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chart Area */}
            <div className="lg:col-span-3 bg-white dark:bg-[#1f2937] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm">
               <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-lg text-[#111418] dark:text-white">Ortalama Sıralama Trendi</h3>
                  <Badge variant="secondary" className="font-semibold bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">Google TR (Masaüstü)</Badge>
               </div>
               <div className="h-[250px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={CHART_DATA} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#374151" opacity={0.2} />
                      <XAxis 
                         dataKey="date" 
                         axisLine={false} 
                         tickLine={false} 
                         tick={{ fontSize: 12, fill: '#6b7280' }} 
                         dy={10}
                      />
                      <YAxis 
                         reversed={true} 
                         domain={[1, 20]} 
                         axisLine={false} 
                         tickLine={false} 
                         tick={{ fontSize: 12, fill: '#6b7280' }}
                      />
                      <Tooltip 
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        itemStyle={{ color: '#111418', fontWeight: 'bold' }}
                        labelStyle={{ color: '#6b7280', fontSize: '12px', marginBottom: '4px' }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="avgRank" 
                        stroke="#6366f1" 
                        strokeWidth={3}
                        dot={{ r: 4, fill: '#6366f1', strokeWidth: 2, stroke: '#fff' }}
                        activeDot={{ r: 6, strokeWidth: 0 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
               </div>
            </div>
          </div>

          {/* Table Container */}
          <div className="bg-white dark:bg-[#1f2937] border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm overflow-hidden flex flex-col">
            {/* Table Toolbar */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50/50 dark:bg-[#1f2937]/50">
               <div className="relative w-full sm:w-80">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input 
                    type="text" 
                    placeholder="Kelime veya URL ara..." 
                    className="w-full pl-9 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
               </div>
               <div className="flex items-center gap-2 w-full sm:w-auto">
                 <Button variant="outline" size="sm" className="bg-white dark:bg-gray-800 h-9 w-full sm:w-auto">
                    <Filter className="mr-2 h-4 w-4" /> Filtrele
                 </Button>
                 <Button variant="outline" size="sm" className="bg-white dark:bg-gray-800 h-9 w-full sm:w-auto">
                    <Download className="mr-2 h-4 w-4" /> Dışa Aktar
                 </Button>
               </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse">
                 <thead>
                    <tr className="bg-gray-50 dark:bg-gray-800/50 text-xs uppercase tracking-wider text-muted-foreground border-b border-gray-200 dark:border-gray-800">
                       <th className="px-6 py-4 font-bold">Anahtar Kelime & URL</th>
                       <th className="px-6 py-4 font-bold text-center">Intent</th>
                       <th className="px-6 py-4 font-bold text-right">Arama Hacmi</th>
                       <th className="px-6 py-4 font-bold text-center">Zorluk (KD)</th>
                       <th className="px-6 py-4 font-bold text-center">Konum (Şu an)</th>
                       <th className="px-6 py-4 font-bold text-right">Değişim</th>
                       <th className="px-6 py-4 font-bold text-center w-12"></th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                    {filteredKeywords.map((item) => {
                       const rankDiff = item.previousRank - item.rank;
                       const isUp = rankDiff > 0;
                       const isDown = rankDiff < 0;
                       const isSame = rankDiff === 0;

                       return (
                         <tr key={item.id} className="hover:bg-gray-50/80 dark:hover:bg-gray-800/40 transition-colors group">
                           <td className="px-6 py-4 whitespace-nowrap">
                             <div className="flex flex-col">
                               <span className="font-bold text-[#111418] dark:text-white text-sm">{item.keyword}</span>
                               <span className="text-xs text-muted-foreground mt-0.5 truncate max-w-[200px] hover:text-primary transition-colors cursor-pointer">{item.url}</span>
                             </div>
                           </td>
                           <td className="px-6 py-4 whitespace-nowrap text-center">
                             <Badge variant="outline" className={`
                               ${item.intent === 'Commercial' ? 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800' : ''}
                               ${item.intent === 'Informational' ? 'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-900/20 dark:text-sky-400 dark:border-sky-800' : ''}
                               ${item.intent === 'Transactional' ? 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800' : ''}
                             `}>
                               {item.intent}
                             </Badge>
                           </td>
                           <td className="px-6 py-4 whitespace-nowrap text-right">
                             <span className="font-medium text-sm text-[#111418] dark:text-gray-200">{item.volume}</span>
                           </td>
                           <td className="px-6 py-4 whitespace-nowrap text-center">
                             <div className="flex items-center justify-center gap-2">
                               <div className={`w-10 h-10 rounded-full border-4 flex items-center justify-center text-xs font-bold
                                  ${item.difficulty > 70 ? 'border-orange-500 text-orange-600' : item.difficulty > 50 ? 'border-yellow-500 text-yellow-600' : 'border-emerald-500 text-emerald-600'}
                               `}>
                                 {item.difficulty}
                               </div>
                             </div>
                           </td>
                           <td className="px-6 py-4 whitespace-nowrap text-center">
                             <div className="flex flex-col items-center">
                               <span className="text-lg font-black text-[#111418] dark:text-white">{item.rank}</span>
                               <span className="text-[10px] text-muted-foreground">En iyi: {item.bestRank}</span>
                             </div>
                           </td>
                           <td className="px-6 py-4 whitespace-nowrap text-right">
                             <div className="flex items-center justify-end gap-1.5">
                                {isUp && (
                                   <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-md text-sm font-bold">
                                      <ArrowUp className="h-3.5 w-3.5" />
                                      {Math.abs(rankDiff)}
                                   </div>
                                )}
                                {isDown && (
                                   <div className="flex items-center gap-1 text-rose-600 bg-rose-50 dark:bg-rose-900/20 px-2 py-1 rounded-md text-sm font-bold">
                                      <ArrowDown className="h-3.5 w-3.5" />
                                      {Math.abs(rankDiff)}
                                   </div>
                                )}
                                {isSame && (
                                   <div className="flex items-center gap-1 text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md text-sm font-bold">
                                      <Minus className="h-3.5 w-3.5" />
                                   </div>
                                )}
                             </div>
                           </td>
                           <td className="px-6 py-4 whitespace-nowrap text-right text-muted-foreground">
                             <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                               <MoreHorizontal className="h-4 w-4" />
                             </Button>
                           </td>
                         </tr>
                       );
                    })}
                 </tbody>
               </table>
               
               {filteredKeywords.length === 0 && (
                 <div className="p-8 text-center text-muted-foreground">
                    Bulunamadı. Farklı bir arama yapmayı deneyin.
                 </div>
               )}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
