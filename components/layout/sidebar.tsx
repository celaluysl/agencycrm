"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const navigation = [
    { name: "Genel Bakış", href: "/", icon: "dashboard", items: [] },
    {
        name: "Ajans Yönetimi", href: "#", icon: "admin_panel_settings", items: [
            { name: "Departman Operasyonu", href: "/admin/departman-operasyon-detayi" },
            { name: "İK Verimlilik", href: "/admin/ik-verimlilik-ve-kapasite-analizi" },
            { name: "Maaş & Personel", href: "/admin/payroll" },
            { name: "Sistem Logları", href: "/admin/sistem-loglari-ve-guvenlik-paneli" },
            { name: "Cari Hesaplar", href: "/admin/accounts" },
            { name: "Faturalar", href: "/admin/invoices" },
            { name: "Prim Yönetimi", href: "/admin/commissions" },
            { name: "Müşteri Analitiği", href: "/admin/analytics" },
            { name: "Site Hizmet Yönetimi", href: "/admin/site-bazli-hizmet-yonetim-paneli" },
        ]
    },
    {
        name: "CRM & Satış", href: "#", icon: "view_kanban", items: [
            { name: "Aday Müşteriler", href: "/crm/aday-musteri-detay-sayfasi" },
            { name: "Ortak Müşteriler", href: "/crm/hizmet-detayli-ortak-musteri-yonetim-merkezi" },
            { name: "Akıllı Satış", href: "/crm/kapasite-analizli-akilli-satis-paneli" },
            { name: "Satış Ekibi", href: "/crm/satis-ekibi-detayli-kokpit-paneli" },
            { name: "Prim Hakediş Raporu", href: "/crm/satisci-aylik-prim-hakedis-raporu-onaylananlar" },
            { name: "Prim Paneli", href: "/crm/satisci-hakedis-ve-prim-paneli" },
            { name: "Yüksek Değerli Satış", href: "/crm/yuksek-deger-odakli-kanban-panosu" },
        ]
    },
    {
        name: "Finans & Muhasebe", href: "#", icon: "account_balance", items: [
            { name: "Kasa Yönetimi", href: "/finance/banka-ve-kasa-yonetim-merkezi" },
            { name: "Banka İşlemleri", href: "/finance/banka-ve-kasa-yonetimi" },
            { name: "Tahsilat Takibi", href: "/finance/fatura-ve-tahsilat-takip-merkezi" },
            { name: "Fatura Yönetimi", href: "/finance/fatura-ve-tahsilat-yonetimi" },
            { name: "Finans Kontrol", href: "/finance/finans-ve-muhasebe-kontrol-paneli" },
            { name: "Gelir / Gider", href: "/finance/gelir-ve-gider-yonetim-merkezi" },
            { name: "Karlılık & Bütçe", href: "/finance/karlilik-ve-butce-analiz-raporu" },
            { name: "Cari Hesaplar", href: "/finance/musteri-cari-hesap-takibi" },
            { name: "Cari Risk Yönetimi", href: "/finance/musteri-cari-ve-risk-yonetimi" },
            { name: "Müşteri Sağlığı", href: "/finance/musteri-saglik-ve-karlilik-analizi" },
            { name: "Süper Admin Finans", href: "/finance/super-admin-finansal-kokpit" },
        ]
    },
    {
        name: "SEO Merkezi", href: "#", icon: "query_stats", items: [
            { name: "Teknik Denetim Raporu", href: "/seo/kapsamli-seo-teknik-denetim-raporu" },
            { name: "Backlink Satınalma", href: "/seo/kelime-odakli-backlink-satin-alma-paneli" },
            { name: "SEO Görevleri", href: "/seo/seo-gorev-detay-ve-sop-paneli" },
            { name: "Portföy Takibi", href: "/seo/seo-musteri-portfoy-takibi" },
            { name: "Operasyon Paneli", href: "/seo/seo-operasyon-paneli" },
            { name: "Teknik Kanban", href: "/seo/seo-proje-ve-teknik-kanban-panosu" },
            { name: "Sıralama Takibi", href: "/seo/rank-tracking" },
            { name: "Yayıncı Envanteri", href: "/seo/publisher-inventory" },
            { name: "Tedarikçi Backlink", href: "/seo/tedarikci-bilgili-backlink-paneli" },
            { name: "Teknik SEO Analizi", href: "/seo/teknik-seo-analiz-ve-sorgu-paneli" },
        ]
    },
    {
        name: "SEM Merkezi", href: "#", icon: "campaign", items: [
            { name: "SEM Operasyonları", href: "/sem/operations" },
            { name: "SEM Görevleri", href: "/sem/gelismis-gorev-yonetimli-sem-paneli" },
            { name: "Görev & SOP", href: "/sem/sem-gorev-detay-ve-sop-paneli" },
            { name: "Portföy Yönetimi", href: "/sem/sem-musteri-portfoy-yonetimi" },
        ]
    },
    {
        name: "Sosyal Medya", href: "#", icon: "thumb_up", items: [
            { name: "Raporlama Paneli", href: "/social-media/raporlama-destekli-sosyal-medya-paneli" },
            { name: "Görev & SOP", href: "/social-media/sosyal-medya-gorev-detay-ve-sop-paneli" },
            { name: "Portföy Yönetimi", href: "/social-media/portfolio" },
            { name: "Onay Merkezi", href: "/social-media/approval-center" },
            { name: "Proje & İçerik", href: "/social-media/projects/1" },
        ]
    },
    {
        name: "Müşteri Portalı", href: "#", icon: "person", items: [
            { name: "Portal Anasayfa", href: "/client-portal" },
            { name: "Destek Talepleri", href: "/client-portal/support" },
            { name: "Onay Merkezi", href: "/client-portal/musteri-onay-merkezi" },
            { name: "Portal Kontrol", href: "/client-portal/musteri-portali-kontrol-paneli" },
            { name: "Rapor Arşivi", href: "/client-portal/musteri-rapor-arsivi" },
        ]
    },
    {
        name: "Performans", href: "#", icon: "monitoring", items: [
            { name: "Çalışma Alanı", href: "/performance/gorev-odakli-calisma-alani" },
            { name: "Uzman Performansı", href: "/performance/uzman-performans-paneli" },
        ]
    },
    {
        name: "Proje Yönetimi", href: "#", icon: "business_center", items: [
            { name: "AI İçerik Oluşturma", href: "/projects/ai-kategori-icerigi-olusturma-paneli" },
            { name: "Atanan Müşteriler", href: "/projects/atanan-musteriler-ve-durum-takibi" },
            { name: "Destek Talepleri", href: "/projects/destek-talebi-yonetimi" },
            { name: "Proje Detayları", href: "/projects/musteri-proje-detay-ekrani" },
            { name: "Prim Raporu", href: "/projects/toplu-odeme-destekli-prim-raporu" },
        ]
    },
];

export function Sidebar() {
    const pathname = usePathname();
    const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
        "Ajans Yönetimi": true,
        "CRM & Satış": true
    });

    const toggleGroup = (name: string) => {
        setOpenGroups(prev => ({ ...prev, [name]: !prev[name] }));
    };

    return (
        <aside className="w-64 flex-shrink-0 hidden md:flex flex-col bg-white dark:bg-[#1a2432] border-r border-[#dbe0e6] dark:border-gray-800 transition-colors h-full overflow-hidden">
            <div className="p-6 pb-2 shrink-0">
                {/* Logo Section */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-primary rounded-lg size-10 flex items-center justify-center text-white shadow-lg shadow-primary/20 shrink-0">
                        <span className="material-symbols-outlined text-2xl">account_balance</span>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-[#111418] dark:text-white text-base font-bold leading-none">
                            AgenciFlow
                        </h1>
                        <p className="text-[#617289] text-[10px] font-bold uppercase tracking-wider mt-1">
                            Yönetici Paneli
                        </p>
                    </div>
                </div>
            </div>

            {/* Navigation (Scrollable) */}
            <nav className="flex-1 overflow-y-auto px-4 pb-4 space-y-4 relative custom-scrollbar">
                {navigation.map((group) => {
                    const isGroupActive = group.items.length > 0
                        ? group.items.some(i => i.href === '/' ? pathname === '/' : (pathname === i.href || pathname.startsWith(`${i.href}/`)))
                        : pathname === group.href;

                    const isOpen = openGroups[group.name] === undefined ? isGroupActive : openGroups[group.name];

                    if (group.name === "Genel Bakış" || group.items.length === 0) {
                        const isActive = pathname === '/';
                        return (
                            <Link
                                key={group.name}
                                href={group.href}
                                className={cn(
                                    "flex items-center gap-3 px-2 py-2 rounded-lg transition-colors",
                                    isActive
                                        ? "bg-primary/10 text-primary"
                                        : "text-[#617289] hover:bg-gray-100 dark:hover:bg-gray-800"
                                )}
                            >
                                <span className="material-symbols-outlined text-[20px]">
                                    {group.icon}
                                </span>
                                <span className={cn("text-sm", isActive ? "font-semibold" : "font-medium")}>
                                    {group.name}
                                </span>
                            </Link>
                        );
                    }

                    return (
                        <div key={group.name} className="flex flex-col gap-1">
                            <button
                                onClick={() => toggleGroup(group.name)}
                                className={cn(
                                    "flex items-center justify-between w-full px-2 py-1.5 rounded-lg transition-colors group",
                                    isGroupActive && !isOpen ? "text-primary bg-primary/5" : "text-[#617289]"
                                )}
                            >
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[18px] opacity-70">
                                        {group.icon}
                                    </span>
                                    <span className="text-xs font-bold uppercase tracking-wide">
                                        {group.name}
                                    </span>
                                </div>
                                <span className="material-symbols-outlined text-sm opacity-50 transition-transform duration-200" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                    expand_more
                                </span>
                            </button>

                            {isOpen && (
                                <div className="flex flex-col gap-0.5 ml-2 pl-3 border-l border-gray-100 dark:border-gray-800 py-1">
                                    {group.items.map((item) => {
                                        const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                                        return (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className={cn(
                                                    "flex items-center gap-2 px-3 py-1.5 text-[13px] rounded-lg transition-all relative",
                                                    isActive
                                                        ? "text-primary font-bold bg-primary/5"
                                                        : "text-[#617289] hover:text-[#111418] dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 font-medium"
                                                )}
                                            >
                                                {isActive && (
                                                    <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-[3px] h-4 bg-primary rounded-r-md" />
                                                )}
                                                <span className="truncate block w-full">{item.name}</span>
                                            </Link>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    );
                })}
            </nav>

            {/* Bottom Actions */}
            <div className="p-4 shrink-0 border-t border-[#dbe0e6] dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                <button className="w-full flex items-center justify-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary text-[#617289] hover:text-primary rounded-lg py-2 text-sm font-bold transition-all shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">add_circle</span>
                    Hızlı İşlem
                </button>
            </div>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #dbe0e6;
                    border-radius: 4px;
                }
                .dark .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #374151;
                }
            `}</style>
        </aside>
    );
}
