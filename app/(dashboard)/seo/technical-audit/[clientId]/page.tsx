"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SeoScore } from "@/components/seo/seo-score";
import { HeadingTree } from "@/components/seo/heading-tree";
import { CoreWebVitals } from "@/components/seo/core-web-vitals";
import {
  Download,
  Globe,
  Image as ImageIcon,
  Code,
  CheckCircle,
  XCircle,
  AlertCircle,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

// --- Dummy Data ---
const AUDIT_DATA = {
  site: "technova.com.tr",
  lastChecked: "12 Mar 2026, 01:00",
  overallScore: 72,
  pagespeedMobile: 61,
  pagespeedDesktop: 88,

  imageAltStats: {
    total: 24,
    missing: 5,
    images: [
      { src: "/images/hero-banner.jpg", alt: "", status: "missing" as const },
      { src: "/images/product-1.png", alt: "Ürün 1 görseli", status: "ok" as const },
      { src: "/images/team-photo.jpg", alt: "", status: "missing" as const },
      { src: "/images/logo.svg", alt: "TechNova Logo", status: "ok" as const },
      { src: "/images/blog-cover.jpg", alt: "", status: "missing" as const },
    ],
  },

  headings: [
    {
      level: 1,
      text: "TechNova — Dijital Çözümler",
      children: [
        {
          level: 2,
          text: "Hizmetlerimiz",
          children: [
            { level: 3, text: "SEO Danışmanlığı", children: [] },
            { level: 3, text: "Web Tasarım", children: [] },
          ],
        },
        {
          level: 2,
          text: "Referanslarımız",
          children: [
            { level: 3, text: "E-ticaret Projeleri", children: [] },
            {
              level: 3,
              text: "Kurumsal Projeler",
              error: "Hiyerarşi hatası: H3 sonrası H5 alanından gelinmiş.",
              children: [],
            },
          ],
        },
        {
          level: 2,
          text: "Referanslarımız",
          error: "Tekrar eden H2: Aynı başlık birden fazla kullanılmış.",
          children: [],
        },
      ],
    },
  ],

  coreWebVitals: [
    {
      key: "lcp" as const,
      label: "Largest Contentful Paint",
      value: "2.4",
      unit: "s",
      status: "good" as const,
      description: "Sayfadaki en büyük içerik ögesinin ne kadar sürede göründüğünü ölçer.",
      good: "< 2.5s",
      poor: "> 4s",
    },
    {
      key: "cls" as const,
      label: "Cumulative Layout Shift",
      value: "0.18",
      unit: "",
      status: "needs_improvement" as const,
      description: "Sayfa yüklenirken içeriklerin ne kadar kaydığını ölçer.",
      good: "< 0.1",
      poor: "> 0.25",
    },
    {
      key: "fid" as const,
      label: "First Input Delay",
      value: "210",
      unit: "ms",
      status: "poor" as const,
      description: "Kullanıcının sayfayla ilk etkileşimine olan gecikmeyi ölçer.",
      good: "< 100ms",
      poor: "> 300ms",
    },
    {
      key: "ttfb" as const,
      label: "Time to First Byte",
      value: "0.6",
      unit: "s",
      status: "good" as const,
      description: "Tarayıcının sunucudan ilk baytı almasının ne kadar sürdüğünü ölçer.",
      good: "< 0.8s",
      poor: "> 1.8s",
    },
    {
      key: "inp" as const,
      label: "Interaction to Next Paint",
      value: "180",
      unit: "ms",
      status: "needs_improvement" as const,
      description: "Kullanıcı etkileşiminden sonra sayfanın yanıt verme gecikmesini ölçer.",
      good: "< 200ms",
      poor: "> 500ms",
    },
  ],

  schemaMarkup: [
    { type: "Organization", valid: true },
    { type: "BreadcrumbList", valid: true },
    { type: "Product", valid: false, error: "\"price\" alanı eksik." },
  ],
};

export default function TechnicalAuditPage({ params }: { params: { clientId: string } }) {
  const missingAlt = AUDIT_DATA.imageAltStats.images.filter((i) => i.status === "missing");

  return (
    <div className="flex flex-col flex-1 h-[calc(100vh-64px)] overflow-hidden bg-gray-50 dark:bg-[#111827]">
      {/* Header */}
      <div className="p-6 md:px-8 bg-white dark:bg-[#1f2937] border-b border-gray-200 dark:border-gray-800 shrink-0">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Link href="/seo" className="text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="h-4 w-4" />
              </Link>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800 flex items-center gap-1.5">
                <Globe className="h-3 w-3" />
                {AUDIT_DATA.site}
              </Badge>
              <span className="text-xs text-muted-foreground">Son kontrol: {AUDIT_DATA.lastChecked}</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-[#111418] dark:text-white">
              Teknik SEO Denetim Raporu
            </h1>
          </div>

          <Button className="h-10 bg-[#111418] hover:bg-gray-800 text-white dark:bg-white dark:text-[#111418] dark:hover:bg-gray-200">
            <Download className="mr-2 h-4 w-4" />
            PDF İndir
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8">
        <div className="max-w-6xl mx-auto space-y-8 pb-12">

          {/* Scores Row */}
          <div className="bg-white dark:bg-[#1f2937] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm">
            <h2 className="font-bold text-lg text-[#111418] dark:text-white mb-6">Genel SEO & PageSpeed Skorları</h2>
            <div className="flex flex-wrap items-center justify-around gap-8">
              <SeoScore score={AUDIT_DATA.overallScore} label="Genel SEO Skoru" size={130} />
              <SeoScore score={AUDIT_DATA.pagespeedMobile} label="PageSpeed (Mobil)" size={130} />
              <SeoScore score={AUDIT_DATA.pagespeedDesktop} label="PageSpeed (Masaüstü)" size={130} />
            </div>
          </div>

          {/* Core Web Vitals */}
          <div className="bg-white dark:bg-[#1f2937] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm">
            <h2 className="font-bold text-lg text-[#111418] dark:text-white mb-4">Core Web Vitals</h2>
            <CoreWebVitals metrics={AUDIT_DATA.coreWebVitals} />
          </div>

          {/* Image Alt Tags */}
          <div className="bg-white dark:bg-[#1f2937] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="font-bold text-lg text-[#111418] dark:text-white">Görsel Alt Etiket Analizi</h2>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {AUDIT_DATA.imageAltStats.total} görselden{" "}
                  <span className="font-bold text-rose-600 dark:text-rose-400">{AUDIT_DATA.imageAltStats.missing} tanesinde</span>{" "}
                  alt etiketi eksik.
                </p>
              </div>
              <div className={`flex items-center gap-1.5 text-sm font-bold px-3 py-1.5 rounded-lg ${missingAlt.length === 0 ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400" : "bg-rose-50 text-rose-700 dark:bg-rose-900/20 dark:text-rose-400"}`}>
                {missingAlt.length === 0 ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                {missingAlt.length === 0 ? "Tümü Tamam" : `${missingAlt.length} Sorun`}
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-800 text-xs uppercase text-muted-foreground">
                    <th className="py-2 pr-4 font-bold">Görsel Yolu</th>
                    <th className="py-2 pr-4 font-bold">Alt Metin</th>
                    <th className="py-2 font-bold text-center">Durum</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {AUDIT_DATA.imageAltStats.images.map((img, i) => (
                    <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors">
                      <td className="py-3 pr-4">
                        <div className="flex items-center gap-2">
                          <ImageIcon className="h-4 w-4 text-muted-foreground shrink-0" />
                          <code className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded font-mono truncate max-w-[200px]">
                            {img.src}
                          </code>
                        </div>
                      </td>
                      <td className="py-3 pr-4">
                        {img.alt ? (
                          <span className="text-[#111418] dark:text-white">{img.alt}</span>
                        ) : (
                          <span className="text-rose-500 italic text-xs">— eksik —</span>
                        )}
                      </td>
                      <td className="py-3 text-center">
                        {img.status === "ok" ? (
                          <CheckCircle className="h-4 w-4 text-emerald-500 mx-auto" />
                        ) : (
                          <XCircle className="h-4 w-4 text-rose-500 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Heading Hierarchy */}
          <div className="bg-white dark:bg-[#1f2937] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm">
            <h2 className="font-bold text-lg text-[#111418] dark:text-white mb-4">Başlık Hiyerarşisi (H1-H3)</h2>
            <HeadingTree nodes={AUDIT_DATA.headings} />
          </div>

          {/* Schema Markup */}
          <div className="bg-white dark:bg-[#1f2937] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm">
            <h2 className="font-bold text-lg text-[#111418] dark:text-white mb-4">Schema Markup Doğrulaması</h2>
            <div className="space-y-3">
              {AUDIT_DATA.schemaMarkup.map((schema, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between p-4 rounded-xl border ${
                    schema.valid
                      ? "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800"
                      : "bg-rose-50 dark:bg-rose-900/20 border-rose-200 dark:border-rose-800"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {schema.valid ? (
                      <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-rose-500 shrink-0" />
                    )}
                    <div>
                      <span className="font-bold text-sm text-[#111418] dark:text-white flex items-center gap-1.5">
                        <Code className="h-3.5 w-3.5 text-muted-foreground" />
                        {schema.type}
                      </span>
                      {!schema.valid && schema.error && (
                        <p className="text-xs text-rose-600 dark:text-rose-400 mt-0.5">{schema.error}</p>
                      )}
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={
                      schema.valid
                        ? "border-emerald-300 text-emerald-700 dark:border-emerald-700 dark:text-emerald-400"
                        : "border-rose-300 text-rose-700 dark:border-rose-700 dark:text-rose-400"
                    }
                  >
                    {schema.valid ? "Geçerli" : "Hatalı"}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
