"use client";

import React from "react";
import { ProjectCard } from "@/components/client-portal/project-card";
import { ServiceCard } from "@/components/client-portal/service-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ClientPortalPage() {
    const accountManager = {
        name: "Selin Kaya",
        title: "Senior Müşteri Yöneticisi",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        phone: "+90 555 123 4567",
        email: "selin@agenciflow.com",
    };

    return (
        <div className="flex-1 flex flex-col bg-gray-50/50 dark:bg-[#0f151c] min-h-screen">
            <div className="p-4 md:p-8 space-y-8 max-w-7xl mx-auto w-full">

                {/* Welcome Header */}
                <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white dark:bg-[#1a2432] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <h1 className="text-2xl font-bold dark:text-white">Hoş Geldiniz, Acme Corp! 👋</h1>
                            <Badge variant="secondary" className="bg-primary/10 text-primary uppercase text-[10px] hidden md:flex">VIP MÜŞTERİ</Badge>
                        </div>
                        <p className="text-sm text-gray-500">AgenciFlow müşteri portalınıza özel yönetim paneli. Tüm hizmetlerinizi ve raporlarınızı buradan takip edebilirsiniz.</p>
                    </div>
                    <div className="flex gap-3 w-full md:w-auto">
                        <Button variant="default" className="relative h-10 w-full md:w-auto">
                            <span className="material-symbols-outlined mr-2">notifications</span>
                            <span className="absolute -top-1 -right-1 flex h-4 w-4">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[9px] text-white justify-center items-center">2</span>
                            </span>
                            Bekleyen Onaylar
                        </Button>
                    </div>
                </section>

                {/* Two Column Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Main Area (Left 2 columns) */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Project Progress Section */}
                        <section>
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-bold flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">analytics</span>
                                    Aktif Projeler
                                </h2>
                                <Button variant="link" className="text-xs text-gray-500 p-0 h-auto">Tümünü Gör →</Button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <ProjectCard
                                    name="E-Ticaret Web Yenileme"
                                    type="Web Geliştirme"
                                    startDate="12 Eyl 2023"
                                    endDate="24 Oca 2024"
                                    progress={75}
                                    status="active"
                                    description="Yeni kurumsal e-ticaret altyapısı ve Next.js UX/UI dönüşümü."
                                />
                                <ProjectCard
                                    name="Q4 Black Friday Kampanyası"
                                    type="Performans Pazarlama"
                                    startDate="01 Eki 2023"
                                    endDate="30 Kas 2023"
                                    progress={100}
                                    status="completed"
                                    description="Instagram, Facebook ve Google Ads entegre kampanya yönetimi."
                                />
                            </div>
                        </section>

                        {/* Active Services Grid */}
                        <section>
                            <h2 className="text-lg font-bold flex items-center gap-2 mb-4">
                                <span className="material-symbols-outlined text-primary">dashboard</span>
                                Hizmet Merkezi
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <ServiceCard
                                    title="Arama Motoru Opt. (SEO)"
                                    icon="travel_explore"
                                    href="/client-portal/seo"
                                    isActive={true}
                                    lastUpdate="Bugün 14:30"
                                    metrics={[
                                        { label: "Organik Trafik", value: "145.2K", trend: "up", trendValue: "+12%" },
                                        { label: "Otorite Skoru", value: "48", trend: "up", trendValue: "+2 Puan" }
                                    ]}
                                />
                                <ServiceCard
                                    title="Performans Pazarlama (SEM)"
                                    icon="ads_click"
                                    href="/client-portal/sem"
                                    isActive={true}
                                    lastUpdate="Dün"
                                    metrics={[
                                        { label: "ROAS", value: "4.2x", trend: "up", trendValue: "1.1x" },
                                        { label: "Aylık Bütçe", value: "₺120K", trend: "neutral" }
                                    ]}
                                />
                                <ServiceCard
                                    title="Sosyal Medya Yönetimi"
                                    icon="thumb_up"
                                    href="/client-portal/social"
                                    isActive={false}
                                    lastUpdate="2 Ay Önce"
                                    metrics={[
                                        { label: "Takipçi", value: "12K", trend: "down", trendValue: "-1%" },
                                        { label: "Etkileşim", value: "3.4%", trend: "down", trendValue: "-0.5%" }
                                    ]}
                                />
                                <ServiceCard
                                    title="Tasarım & UI/UX"
                                    icon="design_services"
                                    href="/client-portal/design"
                                    isActive={true}
                                    lastUpdate="2 Saat Önce"
                                    metrics={[
                                        { label: "Aktif Revizyon", value: "2", trend: "neutral" },
                                        { label: "Teslim Edilen", value: "45 Asset", trend: "up", trendValue: "+5" }
                                    ]}
                                />
                            </div>
                        </section>

                    </div>

                    {/* Sidebar Area (Right 1 column) */}
                    <div className="lg:col-span-1 space-y-8">

                        {/* Account Manager Card */}
                        <section className="bg-white dark:bg-[#1a2432] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-0"></div>
                            <h3 className="font-bold text-sm mb-4 relative z-10 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-xl">support_agent</span>
                                Müşteri Temsilciniz
                            </h3>
                            <div className="flex items-center gap-4 mb-5 relative z-10">
                                <img src={accountManager.avatar} alt="Account Manager" className="w-14 h-14 rounded-full border-2 border-white shadow-sm" />
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-gray-100">{accountManager.name}</h4>
                                    <p className="text-xs text-primary font-medium">{accountManager.title}</p>
                                </div>
                            </div>
                            <div className="space-y-3 relative z-10">
                                <a href={`mailto:${accountManager.email}`} className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400 hover:text-primary transition-colors p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <span className="material-symbols-outlined text-lg">mail</span>
                                    {accountManager.email}
                                </a>
                                <a href={`tel:${accountManager.phone}`} className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400 hover:text-primary transition-colors p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <span className="material-symbols-outlined text-lg">call</span>
                                    {accountManager.phone}
                                </a>
                                <Button className="w-full mt-2 h-9 text-xs flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm">calendar_month</span> Toplantı Planla
                                </Button>
                            </div>
                        </section>

                        {/* Recent Reports Section */}
                        <section className="bg-white dark:bg-[#1a2432] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm p-6">
                            <div className="flex justify-between items-center mb-5">
                                <h3 className="font-bold text-sm flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-xl">description</span>
                                    Son Raporlar
                                </h3>
                            </div>
                            <div className="space-y-3">
                                <div className="group flex items-center justify-between p-3 rounded-lg border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/30 hover:border-primary/30 transition-colors cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-red-100 text-red-600 p-1.5 rounded-md">
                                            <span className="material-symbols-outlined text-sm">picture_as_pdf</span>
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-bold">10/2023 SEO Raporu</h4>
                                            <p className="text-[10px] text-gray-500">2.4 MB • 01 Nısan 2023</p>
                                        </div>
                                    </div>
                                    <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors text-sm">download</span>
                                </div>

                                <div className="group flex items-center justify-between p-3 rounded-lg border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/30 hover:border-primary/30 transition-colors cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-blue-100 text-blue-600 p-1.5 rounded-md">
                                            <span className="material-symbols-outlined text-sm">grid_on</span>
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-bold">SEM Q3 Analizi</h4>
                                            <p className="text-[10px] text-gray-500">1.1 MB • 15 Eyl 2023</p>
                                        </div>
                                    </div>
                                    <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors text-sm">download</span>
                                </div>
                            </div>
                            <Button variant="outline" className="w-full mt-4 h-9 text-xs text-gray-600">
                                Tüm Raporları Arşivde Gör
                            </Button>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
}
