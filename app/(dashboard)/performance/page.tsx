import type { ReactNode } from "react";
import Link from "next/link";
import { KpiCard } from "@/components/shared/kpi-card";
import { cn } from "@/lib/utils";
import {
  Award,
  Clock3,
  Goal,
  Layers3,
  Sparkles,
  Star,
  Target,
  Trophy,
} from "lucide-react";

type PeriodKey = "7" | "30" | "90";

type PeriodSnapshot = {
  label: string;
  summary: string;
  reportDate: string;
  kpis: Array<{
    title: string;
    value: string;
    changeText: string;
    trend: "up" | "down";
    icon: ReactNode;
  }>;
  chart: Array<{
    label: string;
    timeSpent: number;
    valueProduced: number;
  }>;
  effort: Array<{
    client: string;
    percent: number;
    colorClass: string;
    stroke: string;
  }>;
  badges: Array<{
    name: string;
    description: string;
    icon: ReactNode;
    unlocked: boolean;
    progress: number;
    accentClass: string;
  }>;
  growthAreas: Array<{
    area: string;
    current: number;
    target: number;
    suggestion: string;
  }>;
};

const PERIOD_OPTIONS: Array<{ key: PeriodKey; label: string }> = [
  { key: "7", label: "7 Gün" },
  { key: "30", label: "30 Gün" },
  { key: "90", label: "90 Gün" },
];

const PERIOD_SNAPSHOTS: Record<PeriodKey, PeriodSnapshot> = {
  "7": {
    label: "Son 7 Gün",
    summary: "Hızlı teslimatlarda yükseliş var, revizyon yükü ise hafta sonunda bir miktar arttı.",
    reportDate: "14 Mart 2026",
    kpis: [
      {
        title: "Tamamlanan Görev",
        value: "31",
        changeText: "%8 artış",
        trend: "up",
        icon: <Layers3 className="h-5 w-5" />,
      },
      {
        title: "Ort. Bitirme Süresi",
        value: "3.8 saat",
        changeText: "0.4 saat daha hızlı",
        trend: "up",
        icon: <Clock3 className="h-5 w-5" />,
      },
      {
        title: "Memnuniyet Skoru",
        value: "4.7 / 5",
        changeText: "0.1 puan artış",
        trend: "up",
        icon: <Star className="h-5 w-5" />,
      },
      {
        title: "Hedef Gerçekleşme",
        value: "%89",
        changeText: "%6 artış",
        trend: "up",
        icon: <Goal className="h-5 w-5" />,
      },
    ],
    chart: [
      { label: "Pzt", timeSpent: 6, valueProduced: 74 },
      { label: "Sal", timeSpent: 5, valueProduced: 68 },
      { label: "Çar", timeSpent: 7, valueProduced: 86 },
      { label: "Per", timeSpent: 5, valueProduced: 79 },
      { label: "Cum", timeSpent: 8, valueProduced: 92 },
      { label: "Cmt", timeSpent: 3, valueProduced: 38 },
      { label: "Paz", timeSpent: 2, valueProduced: 24 },
    ],
    effort: [
      { client: "Acme Corp", percent: 38, colorClass: "bg-primary", stroke: "#136dec" },
      { client: "Global Tech", percent: 27, colorClass: "bg-emerald-500", stroke: "#10b981" },
      { client: "Northwind", percent: 19, colorClass: "bg-amber-500", stroke: "#f59e0b" },
      { client: "Diğer", percent: 16, colorClass: "bg-rose-500", stroke: "#f43f5e" },
    ],
    badges: [
      {
        name: "Hızlı Teslimat",
        description: "7 gün içinde 5 görevi hedef sürenin altında tamamladın.",
        icon: <Sparkles className="h-6 w-6" />,
        unlocked: true,
        progress: 100,
        accentClass: "border-primary/25 bg-primary/5 text-primary",
      },
      {
        name: "SOP Disiplini",
        description: "Checklist tamamlama oranı bu hafta %96 seviyesinde.",
        icon: <Award className="h-6 w-6" />,
        unlocked: true,
        progress: 100,
        accentClass: "border-emerald-200 bg-emerald-50 text-emerald-700",
      },
      {
        name: "Hatasız Kapanış",
        description: "Kilidi açmak için 10 görevi revizyonsuz kapat.",
        icon: <Trophy className="h-6 w-6" />,
        unlocked: false,
        progress: 70,
        accentClass: "border-slate-200 bg-slate-50 text-slate-400",
      },
    ],
    growthAreas: [
      {
        area: "Revizyon yönetimi",
        current: 54,
        target: 78,
        suggestion: "İlk teslimata kısa bir iç kalite kontrol adımı ekleyerek revizyon turunu azalt.",
      },
      {
        area: "Bağlam değiştirme maliyeti",
        current: 61,
        target: 80,
        suggestion: "Benzer müşteri işlerini blok çalışmaya alıp odak pencereleri oluştur.",
      },
      {
        area: "Dokümantasyon derinliği",
        current: 72,
        target: 84,
        suggestion: "Teslim sonrası notları SOP adımı olarak sabitleyip tekrar eden soruları düşür.",
      },
    ],
  },
  "30": {
    label: "Son 30 Gün",
    summary: "Genel verimlilik önceki döneme göre yukarıda; en büyük kaldıraç hâlâ revizyon kaynaklı efor.",
    reportDate: "14 Mart 2026",
    kpis: [
      {
        title: "Tamamlanan Görev",
        value: "124",
        changeText: "%12 artış",
        trend: "up",
        icon: <Layers3 className="h-5 w-5" />,
      },
      {
        title: "Ort. Bitirme Süresi",
        value: "4.2 saat",
        changeText: "0.5 saat daha hızlı",
        trend: "up",
        icon: <Clock3 className="h-5 w-5" />,
      },
      {
        title: "Memnuniyet Skoru",
        value: "4.8 / 5",
        changeText: "0.2 puan artış",
        trend: "up",
        icon: <Star className="h-5 w-5" />,
      },
      {
        title: "Hedef Gerçekleşme",
        value: "%92",
        changeText: "%5 artış",
        trend: "up",
        icon: <Goal className="h-5 w-5" />,
      },
    ],
    chart: [
      { label: "1. hf", timeSpent: 27, valueProduced: 72 },
      { label: "2. hf", timeSpent: 29, valueProduced: 81 },
      { label: "3. hf", timeSpent: 24, valueProduced: 77 },
      { label: "4. hf", timeSpent: 31, valueProduced: 93 },
    ],
    effort: [
      { client: "Acme Corp", percent: 45, colorClass: "bg-primary", stroke: "#136dec" },
      { client: "Global Tech", percent: 25, colorClass: "bg-emerald-500", stroke: "#10b981" },
      { client: "StartupX", percent: 20, colorClass: "bg-amber-500", stroke: "#f59e0b" },
      { client: "Diğer", percent: 10, colorClass: "bg-rose-500", stroke: "#f43f5e" },
    ],
    badges: [
      {
        name: "Hızlı Teslimat",
        description: "Teslim süreleri bu ay planın üzerinde ilerledi.",
        icon: <Sparkles className="h-6 w-6" />,
        unlocked: true,
        progress: 100,
        accentClass: "border-primary/25 bg-primary/5 text-primary",
      },
      {
        name: "SOP Şampiyonu",
        description: "Aylık SOP tamamlama oranı %94.",
        icon: <Award className="h-6 w-6" />,
        unlocked: true,
        progress: 100,
        accentClass: "border-emerald-200 bg-emerald-50 text-emerald-700",
      },
      {
        name: "Ayın Yıldızı",
        description: "Ekip ortalamasının üzerinde 3 hafta üst üste performans.",
        icon: <Star className="h-6 w-6" />,
        unlocked: true,
        progress: 100,
        accentClass: "border-amber-200 bg-amber-50 text-amber-700",
      },
      {
        name: "Analiz Dehası",
        description: "Kilidi açmak için teknik analiz verimliliğini %80'e çıkar.",
        icon: <Target className="h-6 w-6" />,
        unlocked: false,
        progress: 62,
        accentClass: "border-slate-200 bg-slate-50 text-slate-400",
      },
    ],
    growthAreas: [
      {
        area: "Revizyon talepleri",
        current: 40,
        target: 70,
        suggestion: "Müşteri onay formunu sadeleştirip ilk teslimatta kabul oranını yükselt.",
      },
      {
        area: "Teknik analiz verimliliği",
        current: 85,
        target: 90,
        suggestion: "Tekrar eden audit bloklarını template ile hızlandır.",
      },
      {
        area: "İç iletişim süresi",
        current: 67,
        target: 82,
        suggestion: "Task detayında karar notlarını standartlaştırıp ping trafiğini azalt.",
      },
    ],
  },
  "90": {
    label: "Son 90 Gün",
    summary: "Uzun dönem görünüm güçlü; sürdürülebilir büyüme için iç iletişim ve tekrar eden işler otomasyona uygun.",
    reportDate: "14 Mart 2026",
    kpis: [
      {
        title: "Tamamlanan Görev",
        value: "362",
        changeText: "%18 artış",
        trend: "up",
        icon: <Layers3 className="h-5 w-5" />,
      },
      {
        title: "Ort. Bitirme Süresi",
        value: "4.6 saat",
        changeText: "0.7 saat daha hızlı",
        trend: "up",
        icon: <Clock3 className="h-5 w-5" />,
      },
      {
        title: "Memnuniyet Skoru",
        value: "4.9 / 5",
        changeText: "0.3 puan artış",
        trend: "up",
        icon: <Star className="h-5 w-5" />,
      },
      {
        title: "Hedef Gerçekleşme",
        value: "%95",
        changeText: "%9 artış",
        trend: "up",
        icon: <Goal className="h-5 w-5" />,
      },
    ],
    chart: [
      { label: "Ocak", timeSpent: 116, valueProduced: 71 },
      { label: "Şubat", timeSpent: 109, valueProduced: 84 },
      { label: "Mart", timeSpent: 121, valueProduced: 92 },
    ],
    effort: [
      { client: "Acme Corp", percent: 33, colorClass: "bg-primary", stroke: "#136dec" },
      { client: "Global Tech", percent: 24, colorClass: "bg-emerald-500", stroke: "#10b981" },
      { client: "Northwind", percent: 18, colorClass: "bg-cyan-500", stroke: "#06b6d4" },
      { client: "StartupX", percent: 15, colorClass: "bg-amber-500", stroke: "#f59e0b" },
      { client: "Diğer", percent: 10, colorClass: "bg-rose-500", stroke: "#f43f5e" },
    ],
    badges: [
      {
        name: "İstikrar Rozeti",
        description: "90 gün boyunca hedef gerçekleşme çizgisi %90 üstünde kaldı.",
        icon: <Award className="h-6 w-6" />,
        unlocked: true,
        progress: 100,
        accentClass: "border-primary/25 bg-primary/5 text-primary",
      },
      {
        name: "Müşteri Favorisi",
        description: "Satisfaction score son çeyrekte 4.9 seviyesine ulaştı.",
        icon: <Star className="h-6 w-6" />,
        unlocked: true,
        progress: 100,
        accentClass: "border-emerald-200 bg-emerald-50 text-emerald-700",
      },
      {
        name: "Takım Lideri",
        description: "Kilidi açmak için bilgi paylaşım skorunu %85 üzerine taşı.",
        icon: <Trophy className="h-6 w-6" />,
        unlocked: false,
        progress: 58,
        accentClass: "border-slate-200 bg-slate-50 text-slate-400",
      },
    ],
    growthAreas: [
      {
        area: "Bilgi paylaşımı",
        current: 58,
        target: 85,
        suggestion: "Haftalık kazanım notlarını ekip içinde kısa şablonla yayınla.",
      },
      {
        area: "Tekrar eden operasyonlar",
        current: 64,
        target: 82,
        suggestion: "Benzer teslimatları checklist + şablon kombinasyonuyla otomatikleştir.",
      },
      {
        area: "Müşteri cevap bekleme süresi",
        current: 70,
        target: 84,
        suggestion: "Takip görevlerini 24 saatlik SLA uyarılarıyla tetikle.",
      },
    ],
  },
};

type PageProps = {
  searchParams?: Promise<{
    period?: string;
  }>;
};

function getSelectedPeriod(period?: string): PeriodKey {
  if (period === "7" || period === "30" || period === "90") {
    return period;
  }

  return "30";
}

function buildLinePath(values: number[], maxValue: number, width: number, height: number) {
  return values
    .map((value, index) => {
      const x = values.length === 1 ? width / 2 : (index / (values.length - 1)) * width;
      const y = height - (value / maxValue) * height;
      return `${index === 0 ? "M" : "L"}${x},${y}`;
    })
    .join(" ");
}

function buildAreaPath(values: number[], maxValue: number, width: number, height: number) {
  const linePath = buildLinePath(values, maxValue, width, height);
  return `${linePath} L${width},${height} L0,${height} Z`;
}

function describeTrend(current: number, target: number) {
  const delta = target - current;
  const positive = delta <= 10;

  return {
    label: positive ? "yakın hedef" : "öncelikli alan",
    className: positive
      ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
      : "bg-amber-50 text-amber-700 ring-amber-200",
  };
}

function ComparisonPill({ value }: { value: string }) {
  return (
    <div className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
      {value}
    </div>
  );
}

export default async function PerformancePage({ searchParams }: PageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const selectedPeriod = getSelectedPeriod(resolvedSearchParams?.period);
  const snapshot = PERIOD_SNAPSHOTS[selectedPeriod];

  const chartValues = snapshot.chart.map((item) => item.valueProduced);
  const timeValues = snapshot.chart.map((item) => item.timeSpent);
  const chartMax = Math.max(...chartValues, ...timeValues);
  const chartWidth = 1000;
  const chartHeight = 240;
  const valuePath = buildLinePath(chartValues, chartMax, chartWidth, chartHeight);
  const timePath = buildLinePath(timeValues, chartMax, chartWidth, chartHeight);
  const areaPath = buildAreaPath(chartValues, chartMax, chartWidth, chartHeight);

  let donutOffset = 0;

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <section className="flex flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#0f1724] md:p-8">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                {snapshot.label} performans özeti
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-black tracking-tight text-slate-950 dark:text-white md:text-4xl">
                  Kişisel Performans Paneli
                </h1>
                <p className="max-w-3xl text-sm text-slate-600 dark:text-slate-300 md:text-base">
                  {snapshot.summary}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="inline-flex rounded-2xl border border-slate-200 bg-slate-50 p-1 dark:border-slate-700 dark:bg-slate-900/70">
                {PERIOD_OPTIONS.map((option) => (
                  <Link
                    key={option.key}
                    href={`/performance?period=${option.key}`}
                    className={cn(
                      "rounded-xl px-4 py-2 text-sm font-semibold transition-colors",
                      selectedPeriod === option.key
                        ? "bg-white text-slate-950 shadow-sm dark:bg-slate-800 dark:text-white"
                        : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                    )}
                  >
                    {option.label}
                  </Link>
                ))}
              </div>
              <div className="rounded-2xl border border-slate-200 px-4 py-2 text-sm text-slate-600 dark:border-slate-700 dark:text-slate-300">
                Rapor tarihi: <span className="font-semibold">{snapshot.reportDate}</span>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {snapshot.kpis.map((kpi) => (
              <KpiCard
                key={kpi.title}
                title={kpi.title}
                value={kpi.value}
                changeText={kpi.changeText}
                trend={kpi.trend}
                icon={kpi.icon}
              />
            ))}
          </div>
        </section>

        <section className="grid gap-8 xl:grid-cols-[1.8fr_1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#0f1724]">
            <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <h2 className="text-xl font-bold tracking-tight text-slate-950 dark:text-white">
                  Verimlilik görünümü
                </h2>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Haftalık harcanan süre ile üretilen değer aynı eksende okunur.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 text-xs font-semibold text-slate-500 dark:text-slate-400">
                <div className="inline-flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                  Üretilen değer
                </div>
                <div className="inline-flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
                  Harcanan süre
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900/70">
              <svg className="h-72 w-full" preserveAspectRatio="none" viewBox={`0 0 ${chartWidth} ${chartHeight}`}>
                <defs>
                  <linearGradient id="performance-value-fill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#136dec" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#136dec" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d={areaPath} fill="url(#performance-value-fill)" />
                <path d={valuePath} fill="none" stroke="#136dec" strokeWidth="5" strokeLinecap="round" />
                <path
                  d={timePath}
                  fill="none"
                  stroke="#94a3b8"
                  strokeDasharray="10 8"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
              <div
                className={cn(
                  "mt-4 grid gap-3 text-xs font-semibold text-slate-500 dark:text-slate-400",
                  snapshot.chart.length === 3 ? "grid-cols-3" : "grid-cols-4 sm:grid-cols-7"
                )}
              >
                {snapshot.chart.map((item) => (
                  <div key={item.label} className="text-center">
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#0f1724]">
              <div className="mb-5">
                <h2 className="text-xl font-bold tracking-tight text-slate-950 dark:text-white">
                  Müşteri bazlı efor dağılımı
                </h2>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Toplam eforun hangi müşteri grubunda yoğunlaştığını gösterir.
                </p>
              </div>

              <div className="flex flex-col gap-6 md:flex-row md:items-center">
                <div className="relative mx-auto h-44 w-44 shrink-0">
                  <svg className="-rotate-90 h-full w-full" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="16" fill="transparent" stroke="#e2e8f0" strokeWidth="4" />
                    {snapshot.effort.map((item) => {
                      const circle = (
                        <circle
                          key={item.client}
                          cx="18"
                          cy="18"
                          r="16"
                          fill="transparent"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeDasharray={`${item.percent} ${100 - item.percent}`}
                          strokeDashoffset={-donutOffset}
                          stroke={item.stroke}
                        />
                      );
                      donutOffset += item.percent;
                      return circle;
                    })}
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-black text-slate-950 dark:text-white">
                      %{snapshot.effort.reduce((total, item) => total + item.percent, 0)}
                    </span>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">toplam dağılım</span>
                  </div>
                </div>

                <div className="flex-1 space-y-3">
                  {snapshot.effort.map((item) => (
                    <div key={item.client} className="space-y-1.5">
                      <div className="flex items-center justify-between text-sm font-semibold text-slate-700 dark:text-slate-200">
                        <div className="inline-flex items-center gap-2">
                          <span className={cn("h-2.5 w-2.5 rounded-full", item.colorClass)} />
                          {item.client}
                        </div>
                        <span>%{item.percent}</span>
                      </div>
                      <div className="h-2.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                        <div className={cn("h-full rounded-full", item.colorClass)} style={{ width: `${item.percent}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#0f1724]">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold tracking-tight text-slate-950 dark:text-white">
                    Rozetler ve başarılar
                  </h2>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Açılan rozetler güçlü alışkanlıklarını, kilitli olanlar büyüme fırsatlarını gösterir.
                  </p>
                </div>
                <ComparisonPill value={`${snapshot.badges.filter((item) => item.unlocked).length} açık rozet`} />
              </div>

              <div className={cn("grid gap-4", snapshot.badges.length > 3 ? "sm:grid-cols-2" : "grid-cols-1")}>
                {snapshot.badges.map((badge) => (
                  <div
                    key={badge.name}
                    className={cn(
                      "rounded-2xl border p-4 transition-transform",
                      badge.accentClass,
                      badge.unlocked ? "shadow-sm" : "grayscale"
                    )}
                  >
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 shadow-sm dark:bg-slate-900/60">
                        {badge.icon}
                      </div>
                      <span className="rounded-full bg-white/80 px-2 py-1 text-[11px] font-bold uppercase tracking-wide text-slate-600 dark:bg-slate-900/60 dark:text-slate-300">
                        {badge.unlocked ? "Açık" : `%${badge.progress}`}
                      </span>
                    </div>
                    <h3 className="text-base font-bold">{badge.name}</h3>
                    <p className="mt-1 text-sm leading-6 opacity-80">{badge.description}</p>
                    {!badge.unlocked && (
                      <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/70 dark:bg-slate-900/60">
                        <div className="h-full rounded-full bg-slate-500" style={{ width: `${badge.progress}%` }} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-[#0f1724]">
          <div className="flex flex-col gap-3 border-b border-slate-200 p-6 dark:border-slate-800 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-slate-950 dark:text-white">
                Gelişim alanları
              </h2>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Mevcut verimlilik ile hedef seviye arasındaki boşluğu ve önerilen aksiyonu özetler.
              </p>
            </div>
            <ComparisonPill value={`${snapshot.growthAreas.length} odak alanı`} />
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-[760px] w-full text-left">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:border-slate-800 dark:text-slate-400">
                  <th className="px-6 py-4">Alan</th>
                  <th className="px-6 py-4">Mevcut</th>
                  <th className="px-6 py-4">Hedef</th>
                  <th className="px-6 py-4">Durum</th>
                  <th className="px-6 py-4">AI önerisi</th>
                </tr>
              </thead>
              <tbody>
                {snapshot.growthAreas.map((item) => {
                  const trend = describeTrend(item.current, item.target);

                  return (
                    <tr
                      key={item.area}
                      className="border-b border-slate-100 align-top last:border-b-0 dark:border-slate-800/70"
                    >
                      <td className="px-6 py-5">
                        <div className="font-semibold text-slate-900 dark:text-white">{item.area}</div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="space-y-2">
                          <div className="text-sm font-semibold text-slate-900 dark:text-white">%{item.current}</div>
                          <div className="h-2.5 w-36 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                            <div className="h-full rounded-full bg-primary" style={{ width: `${item.current}%` }} />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="text-sm font-semibold text-slate-900 dark:text-white">%{item.target}</div>
                      </td>
                      <td className="px-6 py-5">
                        <span
                          className={cn(
                            "inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset",
                            trend.className
                          )}
                        >
                          {trend.label}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <p className="max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-300">
                          {item.suggestion}
                        </p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
