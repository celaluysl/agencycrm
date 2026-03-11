"use client";

import React, { useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ContentPreview } from "@/components/social-media/content-preview";
import { RevisionModal } from "@/components/social-media/revision-modal";

// Dummy data
const INVENTORY = [
  {
    id: "1",
    client: "TechNova E-Ticaret",
    title: "Haftalık Bülten - Reels",
    type: "video" as const,
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0hs6WeX3tsjv860nrv_0yFWBsVanpkG7kvlTFxB8TzwkmpUwo-6m_veFk0yq8orHe__sTMMIiTtOJprm53dgtsrcE3Wk_b1qAyL8Gvk_7PKBkyqOoKuEPQxVPwOzkzHog-UqMKiBsPvpIQR9G92oJV5fyx2MTkiQF4FeumE4m7y9gqqNWuCNxOWoZ5gYCsmnt84-sC8js64ggf_uJGEJV5NKwdmzXQctg-o5igmj04qX0H7ku_V9NkHHu3ZAduKYtB48tklxXSkAG",
    scheduledDate: "24 Ekim 2023, 18:00",
    caption: "Bu hafta teknoloji dünyasında neler oldu? 🚀 En yeni yapay zeka güncellemelerini ve ajansımızdaki son gelişmeleri sizler için derledik. Videonun sonundaki sürprizi kaçırmayın! 👇\n\nSizin bu haftaki favori haberiniz hangisi? Yorumlarda buluşalım.",
    hashtags: ["#AgenciFlow", "#TechNews", "#DigitalMarketing", "#AI2023", "#AgencyLife"],
    platforms: ["Instagram", "Facebook", "TikTok"],
    revisionQuota: { used: 0, total: 3 },
    status: "pending_approval",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0hs6WeX3tsjv860nrv_0yFWBsVanpkG7kvlTFxB8TzwkmpUwo-6m_veFk0yq8orHe__sTMMIiTtOJprm53dgtsrcE3Wk_b1qAyL8Gvk_7PKBkyqOoKuEPQxVPwOzkzHog-UqMKiBsPvpIQR9G92oJV5fyx2MTkiQF4FeumE4m7y9gqqNWuCNxOWoZ5gYCsmnt84-sC8js64ggf_uJGEJV5NKwdmzXQctg-o5igmj04qX0H7ku_V9NkHHu3ZAduKYtB48tklxXSkAG"
  },
  {
    id: "2",
    client: "Luxe Otel Grubu",
    title: "Yaz Kampanyası Post",
    type: "image" as const,
    url: "https://images.unsplash.com/photo-1542314831-c6a4d14d837e?w=800&q=80",
    scheduledDate: "27 Ekim 2023, 12:00",
    caption: "Yazın tadını Luxe ile çıkarın! Özel erken rezervasyon indirimleri için bio'daki linke tıklayın. 🏖️📸 #SummerVibes",
    hashtags: ["#Summer2024", "#LuxeHotel", "#Holiday", "#Relax"],
    platforms: ["Instagram", "Facebook"],
    revisionQuota: { used: 2, total: 3 },
    status: "pending_approval",
    thumbnail: "https://images.unsplash.com/photo-1542314831-c6a4d14d837e?w=200&q=80"
  },
  {
    id: "3",
    client: "Global Lojistik A.Ş.",
    title: "Kurumsal Tanıtım",
    type: "image" as const,
    url: "https://images.unsplash.com/photo-1586528116311-ad8ed7c1590a?w=800&q=80",
    scheduledDate: "30 Ekim 2023, 09:00",
    caption: "Dünyanın her noktasına güvenli taşımacılık! Global Lojistik ile gönderileriniz her zaman zamanında. 🌍🚢",
    hashtags: ["#Logistics", "#Shipping", "#GlobalDelivery", "#B2B"],
    platforms: ["LinkedIn", "Twitter"],
    revisionQuota: { used: 1, total: 3 },
    status: "approved",
    thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8ed7c1590a?w=200&q=80"
  }
];

export default function ApprovalCenterPage() {
  const [items, setItems] = useState(INVENTORY);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isRevisionModalOpen, setRevisionModalOpen] = useState(false);

  const selectedItem = items[selectedIndex];

  const handleNext = () => setSelectedIndex((prev) => (prev + 1) % items.length);
  const handlePrev = () => setSelectedIndex((prev) => (prev - 1 + items.length) % items.length);

  const handleApprove = () => {
    if (selectedItem.status === "approved") return;
    toast.success("İçerik başarıyla onaylandı!");
    setItems((prev) => prev.map((item, i) => i === selectedIndex ? { ...item, status: "approved" } : item));
  };

  const handleRequestRevision = () => {
    if (selectedItem.status === "revision_requested") return;
    if (selectedItem.revisionQuota.used >= selectedItem.revisionQuota.total) {
      toast.error("Revizyon hakkı dolmuştur.");
      return;
    }
    setRevisionModalOpen(true);
  };

  const submitRevision = (feedback: string, files: File[]) => {
    toast.success("Revizyon talebi başarıyla iletildi!");
    setItems((prev) => prev.map((item, i) => i === selectedIndex ? { 
      ...item, 
      status: "revision_requested",
      revisionQuota: { ...item.revisionQuota, used: item.revisionQuota.used + 1 } 
    } : item));
  };

  return (
    <div className="flex-1 flex flex-col md:flex-row h-[calc(100vh-64px)] overflow-hidden bg-gray-50 dark:bg-background-dark">
      
      {/* Sidebar: Content List */}
      <aside className="w-full md:w-80 h-full border-r border-[#dbe0e6] dark:border-gray-800 bg-white dark:bg-[#1a2432] overflow-y-auto flex-shrink-0 flex flex-col">
        <div className="p-4 border-b border-[#dbe0e6] dark:border-gray-800 shrink-0 sticky top-0 bg-white/95 dark:bg-[#1a2432]/95 backdrop-blur z-10">
          <h2 className="text-lg font-bold">Onay Bekleyenler</h2>
        </div>
        
        <div className="p-2 flex-1 space-y-2">
          {items.map((item, idx) => (
            <div 
              key={item.id}
              onClick={() => setSelectedIndex(idx)}
              className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-colors ${selectedIndex === idx ? "bg-primary/10 border-primary block border" : "bg-transparent border border-transparent hover:bg-gray-100 dark:hover:bg-gray-800"}`}
            >
              <div 
                className="w-16 h-16 rounded-lg bg-cover bg-center shrink-0 shadow-sm"
                style={{ backgroundImage: `url('${item.thumbnail}')` }}
              />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-primary mb-1">{item.client}</p>
                <p className="text-sm font-bold text-[#111418] dark:text-white truncate">{item.title}</p>
                <div className="flex items-center gap-2 mt-2">
                  {item.status === 'approved' && <Badge className="text-[10px] uppercase bg-green-500 hover:bg-green-600">Onaylandı</Badge>}
                  {item.status === 'revision_requested' && <Badge variant="destructive" className="text-[10px] uppercase">Revizyon</Badge>}
                  {item.status === 'pending_approval' && <Badge variant="secondary" className="text-[10px] uppercase">Bekliyor</Badge>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col items-center">
         <div className="max-w-4xl w-full flex flex-col gap-6 pb-20">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-black tracking-tight leading-tight">{selectedItem.title}</h2>
                <div className="flex items-center gap-3 mt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase">
                    <span className="material-symbols-outlined text-sm">{selectedItem.type === "video" ? "movie_filter" : "image"}</span> {selectedItem.type === "video" ? "Reels / Video" : "Görsel / Post"}
                  </span>
                  <span className="text-[#617289] dark:text-gray-400 text-sm font-medium">Planlanan: {selectedItem.scheduledDate}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                 <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <span className="text-[#617289] text-xs font-semibold uppercase">Revizyon Hakkı</span>
                    <span className={`font-mono font-bold text-sm ${selectedItem.revisionQuota.used >= selectedItem.revisionQuota.total ? 'text-red-500' : 'text-primary'}`}>
                       {selectedItem.revisionQuota.used} / {selectedItem.revisionQuota.total}
                    </span>
                 </div>
              </div>
            </div>

            {/* Content Preview */}
            <ContentPreview 
              type={selectedItem.type} 
              url={selectedItem.url} 
              onNext={handleNext}
              onPrev={handlePrev}
              onApprove={handleApprove}
              onRequestRevision={handleRequestRevision}
              isActive={!isRevisionModalOpen}
            />

            {/* Actions Panel */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-white dark:bg-[#1a222c] border border-[#e5e7eb] dark:border-[#2d3748] rounded-xl shadow-sm">
               <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm font-medium text-muted-foreground">
                  <span className="flex items-center gap-1 font-bold text-[#111418] dark:text-white"><span className="material-symbols-outlined">keyboard</span> Kısayollar: </span>
                  <div><span className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-1.5 py-0.5 rounded mr-1">Space</span> Onayla</div>
                  <div><span className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-1.5 py-0.5 rounded mr-1">R</span> Revizyon</div>
                  <div><span className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-1.5 py-0.5 rounded mr-1">←/→</span> Geçiş</div>
               </div>
               <div className="flex items-center gap-3 shrink-0">
                 <Button 
                    variant="outline" 
                    className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
                    onClick={handleRequestRevision}
                    disabled={selectedItem.revisionQuota.used >= selectedItem.revisionQuota.total || selectedItem.status === 'revision_requested'}
                  >
                    <span className="material-symbols-outlined mr-2 text-sm">edit_note</span>
                    Revizyon İste
                 </Button>
                 <Button 
                    className="bg-green-600 hover:bg-green-700 text-white border-0"
                    onClick={handleApprove}
                    disabled={selectedItem.status === 'approved'}
                  >
                    <span className="material-symbols-outlined mr-2 text-sm">thumb_up</span>
                    {selectedItem.status === 'approved' ? 'Onaylandı' : 'İçeriği Onayla'}
                 </Button>
               </div>
            </div>

            {/* Metadata (Caption & Hashtags) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
              <div className="bg-white dark:bg-[#1a222c] p-6 rounded-2xl border border-[#e5e7eb] dark:border-[#2d3748] shadow-sm">
                <div className="flex items-center gap-2 mb-4 text-[#111418] dark:text-white">
                  <span className="material-symbols-outlined text-primary">notes</span>
                  <h3 className="font-bold">İçerik Metni (Caption)</h3>
                </div>
                <p className="text-[#617289] dark:text-gray-300 leading-relaxed text-sm whitespace-pre-wrap">
                  {selectedItem.caption}
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <div className="bg-white dark:bg-[#1a222c] p-6 rounded-2xl border border-[#e5e7eb] dark:border-[#2d3748] shadow-sm flex-1">
                  <div className="flex items-center gap-2 mb-4 text-[#111418] dark:text-white">
                    <span className="material-symbols-outlined text-primary">tag</span>
                    <h3 className="font-bold">Hashtagler</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.hashtags.map((tag) => (
                       <span key={tag} className="text-primary text-sm font-medium hover:underline cursor-pointer">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="bg-white dark:bg-[#1a222c] p-6 rounded-2xl border border-[#e5e7eb] dark:border-[#2d3748] shadow-sm">
                    <p className="text-sm font-bold text-[#111418] dark:text-white mb-3">Paylaşılacak Platformlar</p>
                    <div className="flex flex-wrap gap-3">
                      {selectedItem.platforms.map((plat) => (
                        <div key={plat} className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#e5e7eb] dark:border-[#2d3748]">
                          <span className="text-xs font-bold text-[#617289]">{plat}</span>
                        </div>
                      ))}
                    </div>
                </div>
              </div>
            </div>
            
         </div>
      </main>

      <RevisionModal 
         isOpen={isRevisionModalOpen} 
         onClose={() => setRevisionModalOpen(false)} 
         onSubmit={submitRevision} 
      />
    </div>
  );
}
