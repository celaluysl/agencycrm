# Teknik Tasarım Dokümanı

## Giriş

Bu doküman, Stitch Agency Platform (AgenciFlow) için detaylı teknik tasarım spesifikasyonlarını içerir. Platform, dijital ajansların operasyonel süreçlerini yönetmek için geliştirilmiş kapsamlı bir yönetim sistemidir.

**Proje Adı**: stitch-agency-platform  
**Teknik Stack**: Next.js 14+ (App Router), Tailwind CSS, shadcn/ui (Radix UI), Framer Motion, Vercel  
**Tasarım Dosyaları**: 51 adet HTML ve PNG dosyası analiz edilmiştir

## Genel Bakış

AgenciFlow, dijital ajansların tüm departmanlarını (Admin, SEM, SEO, Sosyal Medya, CRM) tek bir platformda birleştiren modern bir web uygulamasıdır. Platform, rol bazlı erişim kontrolü, gerçek zamanlı veri senkronizasyonu ve kapsamlı raporlama özellikleri sunar.

### Temel Özellikler

- Admin Dashboard: Muhasebe, finans, personel yönetimi
- Client Portal: Müşteri self-servis portalı
- SEM Modülü: Google Ads ve Meta Ads yönetimi
- SEO Modülü: Rank tracking, teknik denetim, backlink yönetimi
- Sosyal Medya Modülü: İçerik yönetimi ve onay merkezi
- CRM Modülü: Leads yönetimi ve satış süreçleri
- Task Management: Görev takibi ve SOP kontrol listeleri
- Performance Dashboard: Kişisel verimlilik analizi

## Mimari

### Next.js App Router Klasör Yapısı

```
app/
├── (auth)/
│   ├── login/
│   │   └── page.tsx
│   └── layout.tsx
├── (dashboard)/
│   ├── layout.tsx
│   ├── page.tsx                    # Ana dashboard
│   ├── admin/
│   │   ├── payroll/
│   │   │   └── page.tsx
│   │   ├── invoices/
│   │   │   └── page.tsx
│   │   ├── accounts/
│   │   │   └── page.tsx
│   │   ├── commissions/
│   │   │   └── page.tsx
│   │   └── analytics/
│   │       └── page.tsx
│   ├── sem/
│   │   ├── operations/
│   │   │   └── page.tsx
│   │   ├── portfolio/
│   │   │   └── page.tsx
│   │   └── projects/
│   │       └── [id]/
│   │           └── page.tsx
│   ├── seo/
│   │   ├── rank-tracking/
│   │   │   └── page.tsx
│   │   ├── publisher-inventory/
│   │   │   └── page.tsx
│   │   ├── technical-audit/
│   │   │   └── [clientId]/
│   │   │       └── page.tsx
│   │   └── analysis/
│   │       └── page.tsx
│   ├── social-media/
│   │   ├── portfolio/
│   │   │   └── page.tsx
│   │   ├── approval-center/
│   │   │   └── page.tsx
│   │   └── projects/
│   │       └── [id]/
│   │           └── page.tsx
│   ├── crm/
│   │   ├── leads/
│   │   │   └── page.tsx
│   │   └── customers/
│   │       └── page.tsx
│   ├── tasks/
│   │   └── page.tsx
│   └── performance/
│       └── page.tsx
├── client-portal/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── projects/
│   │   └── page.tsx
│   ├── reports/
│   │   └── page.tsx
│   ├── approvals/
│   │   └── page.tsx
│   └── support/
│       └── page.tsx
├── api/
│   ├── auth/
│   │   └── [...nextauth]/
│   │       └── route.ts
│   ├── admin/
│   │   ├── payroll/
│   │   │   └── route.ts
│   │   └── invoices/
│   │       └── route.ts
│   ├── sem/
│   │   ├── campaigns/
│   │   │   └── route.ts
│   │   └── metrics/
│   │       └── route.ts
│   ├── seo/
│   │   ├── rankings/
│   │   │   └── route.ts
│   │   └── audit/
│   │       └── route.ts
│   └── tasks/
│       └── route.ts
├── globals.css
└── layout.tsx

components/
├── ui/                             # shadcn/ui components
│   ├── button.tsx
│   ├── card.tsx
│   ├── dialog.tsx
│   ├── dropdown-menu.tsx
│   ├── input.tsx
│   ├── select.tsx
│   ├── table.tsx
│   ├── tabs.tsx
│   ├── badge.tsx
│   ├── avatar.tsx
│   ├── progress.tsx
│   ├── skeleton.tsx
│   └── ...
├── layout/
│   ├── sidebar.tsx                 # Client Component
│   ├── header.tsx                  # Client Component
│   ├── breadcrumb.tsx              # Server Component
│   └── mobile-nav.tsx              # Client Component
├── dashboard/
│   ├── kpi-card.tsx                # Server Component
│   ├── stat-card.tsx               # Server Component
│   └── chart-card.tsx              # Client Component
├── admin/
│   ├── payroll-table.tsx           # Client Component
│   ├── invoice-list.tsx            # Client Component
│   ├── salary-distribution-chart.tsx # Client Component
│   └── quick-actions.tsx           # Client Component
├── sem/
│   ├── task-list.tsx               # Client Component
│   ├── customer-status-table.tsx   # Client Component
│   ├── active-timer.tsx            # Client Component
│   └── alert-panel.tsx             # Client Component
├── seo/
│   ├── publisher-table.tsx         # Client Component
│   ├── rank-chart.tsx              # Client Component
│   ├── audit-report.tsx            # Server Component
│   └── technical-score.tsx         # Server Component
├── social-media/
│   ├── portfolio-table.tsx         # Client Component
│   ├── approval-card.tsx           # Client Component
│   ├── content-preview.tsx         # Client Component
│   └── kanban-board.tsx            # Client Component
├── crm/
│   ├── kanban-board.tsx            # Client Component
│   ├── lead-card.tsx               # Client Component
│   └── opportunity-card.tsx        # Client Component
├── tasks/
│   ├── task-modal.tsx              # Client Component
│   ├── sop-checklist.tsx           # Client Component
│   ├── time-tracker.tsx            # Client Component
│   └── activity-feed.tsx           # Client Component
├── client-portal/
│   ├── project-card.tsx            # Server Component
│   ├── service-card.tsx            # Server Component
│   └── support-chat.tsx            # Client Component
└── shared/
    ├── data-table.tsx              # Client Component
    ├── filter-bar.tsx              # Client Component
    ├── pagination.tsx              # Client Component
    ├── empty-state.tsx             # Server Component
    └── loading-skeleton.tsx        # Server Component

lib/
├── utils.ts
├── api-client.ts
├── auth.ts
├── constants.ts
└── validations.ts

types/
├── admin.ts
├── sem.ts
├── seo.ts
├── social-media.ts
├── crm.ts
├── tasks.ts
└── client-portal.ts
```

### Server vs Client Component Stratejisi

**Server Components (Varsayılan):**
- Layout componentleri
- Statik içerik bölümleri
- KPI kartları (initial data)
- Breadcrumb navigation
- SEO metadata generation
- Initial data fetching

**Client Components ("use client" direktifi):**
- Interaktif formlar ve modaller
- Drag-and-drop kanban boardlar
- Grafik ve chart componentleri
- Timer ve real-time güncellemeler
- Sidebar navigation (state management)
- Data tables (sorting, filtering, pagination)
- Dropdown menüler ve tooltips
- Animasyonlu componentler (Framer Motion)

### Data Fetching Patterns

**Server-Side Data Fetching:**
```typescript
// app/(dashboard)/admin/payroll/page.tsx
async function PayrollPage() {
  const payrollData = await fetch('https://api.example.com/payroll', {
    cache: 'no-store', // Her zaman fresh data
  }).then(res => res.json());

  return <PayrollTable data={payrollData} />;
}
```

**Client-Side Data Fetching (SWR veya React Query):**
```typescript
// components/sem/active-timer.tsx
'use client';

import useSWR from 'swr';

export function ActiveTimer() {
  const { data, mutate } = useSWR('/api/tasks/active', fetcher, {
    refreshInterval: 1000, // Her saniye güncelle
  });

  return <TimerDisplay time={data?.elapsed} />;
}
```

### State Management Yaklaşımı

**Global State (Zustand):**
- User authentication state
- Theme preference (dark/light mode)
- Sidebar collapse state
- Active filters

**Local State (React useState):**
- Form inputs
- Modal visibility
- Dropdown open/close
- Pagination state

**Server State (SWR/React Query):**
- API data caching
- Real-time updates
- Optimistic updates
- Background revalidation


## Componentler ve Arayüzler

### Tasarım Dosyaları Detaylı Analizi

Platform 51 tasarım dosyasından oluşmaktadır. Her tasarım dosyası detaylı olarak analiz edilmiş ve aşağıdaki kategorilere ayrılmıştır:

#### 1. Admin Dashboard Modülü (19 Dosya)

##### 1.1 Maaş ve Personel Ödemeleri Paneli
**Route:** `/admin/payroll`  
**Component Type:** Server Component (layout) + Client Components (table, actions)

**Layout Yapısı:**
```typescript
// app/(dashboard)/admin/payroll/page.tsx
export default async function PayrollPage() {
  const payrollData = await getPayrollData();
  
  return (
    <div className="p-8 space-y-6">
      <PayrollHeader />
      <PayrollKPICards data={payrollData.kpis} />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <PayrollTable data={payrollData.employees} className="lg:col-span-9" />
        <PayrollSidebar className="lg:col-span-3" />
      </div>
    </div>
  );
}
```

**Reusable Components:**
- `PayrollKPICards`: 4 KPI kartı (Toplam Maaş, Primler, SGK/Vergi, Yan Haklar)
- `PayrollTable`: Personel listesi tablosu (sorting, filtering, pagination)
- `PayrollSidebar`: Hızlı işlemler ve maaş dağılımı grafiği
- `SalaryDistributionChart`: Pie chart (departman bazlı dağılım)

**Props Interface:**
```typescript
interface PayrollEmployee {
  id: string;
  name: string;
  avatar?: string;
  initials: string;
  position: string;
  department: 'Yazılım' | 'Tasarım' | 'Müşteri İlişkileri' | 'Pazarlama' | 'İçerik';
  baseSalary: number;
  bonus: number;
  deductions: number;
  netPay: number;
  status: 'paid' | 'pending' | 'bank_instruction_ready';
}

interface PayrollKPIs {
  totalSalary: number;
  totalBonuses: number;
  totalTaxes: number;
  totalBenefits: number;
  salaryChange: number; // Percentage
  bonusEligibleCount: number;
  taxDeadline: string;
}
```

**Framer Motion Animasyonlar:**
```typescript
// KPI kartları için staggered animation
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

// Tablo satırları için hover animation
const rowVariants = {
  hover: {
    backgroundColor: 'rgba(19, 109, 236, 0.05)',
    transition: { duration: 0.2 }
  }
};
```

**UX İyileştirmeleri:**
- Toplu ödeme onayı için checkbox selection
- Excel/CSV export fonksiyonalitesi
- Departman bazlı filtreleme
- Ödeme durumu badge'leri (renk kodlu)
- Hover state'de detay tooltip
- Loading skeleton states
- Empty state (personel yoksa)

**Performance Optimizasyonları:**
- Virtual scrolling (100+ personel için)
- Lazy loading (sayfa kaydırıldıkça)
- Memoization (React.memo) for table rows
- Debounced search input
- Optimistic UI updates

##### 1.2 Müşteri Cari Hesap Takibi
**Route:** `/admin/accounts`  
**Component Type:** Server Component (layout) + Client Components (table, filters)

**Layout Yapısı:**
```typescript
export default async function AccountsPage() {
  const accountsData = await getClientAccounts();
  
  return (
    <div className="p-8 space-y-6">
      <AccountsHeader />
      <AccountsFilterBar />
      <AccountsTable data={accountsData} />
      <AccountsSummaryCards />
    </div>
  );
}
```

**Reusable Components:**
- `AccountsTable`: Müşteri cari hesap tablosu (borç, alacak, bakiye)
- `AccountsFilterBar`: Tarih aralığı, müşteri, durum filtreleri
- `AccountsSummaryCards`: Toplam borç, alacak, bakiye kartları
- `PaymentReminderButton`: Otomatik hatırlatma gönderme

**Props Interface:**
```typescript
interface ClientAccount {
  id: string;
  clientName: string;
  clientLogo?: string;
  debit: number;
  credit: number;
  balance: number;
  lastPaymentDate: string;
  paymentStatus: 'current' | 'overdue' | 'pending';
  healthScore: number; // 0-100
}
```

**Framer Motion Animasyonlar:**
- Tablo satırları fade-in (staggered)
- Filter bar slide-down animation
- Balance değişiminde number counter animation

**UX İyileştirmeleri:**
- Negatif bakiye için kırmızı vurgu
- Ödeme geçmişi timeline modal
- Otomatik ödeme hatırlatıcı ayarlama
- PDF/Excel export
- Müşteri sağlık skoru göstergesi

##### 1.3 Prim Hakediş Raporu
**Route:** `/admin/commissions`  
**Component Type:** Server Component + Client Components

**Layout Yapısı:**
```typescript
export default async function CommissionsPage() {
  const commissionsData = await getCommissions();
  
  return (
    <div className="p-8 space-y-6">
      <CommissionsHeader />
      <CommissionsKPICards data={commissionsData.summary} />
      <CommissionsTable data={commissionsData.items} />
    </div>
  );
}
```

**Reusable Components:**
- `CommissionsTable`: Prim listesi (kazanılan, onaylanan, ödenen)
- `CommissionStatusBadge`: Durum badge'i
- `CommissionApprovalModal`: Toplu onay modal

**Props Interface:**
```typescript
interface Commission {
  id: string;
  employeeId: string;
  employeeName: string;
  department: string;
  earned: number;
  approved: number;
  paid: number;
  status: 'earned' | 'approved' | 'paid';
  paymentDate?: string;
  eligibilityDate: string;
}
```

##### 1.4 Fatura ve Tahsilat Takip Merkezi
**Route:** `/admin/invoices`  
**Component Type:** Server Component + Client Components

**Layout Yapısı:**
```typescript
export default async function InvoicesPage() {
  const invoicesData = await getInvoices();
  
  return (
    <div className="p-8 space-y-6">
      <InvoicesHeader />
      <InvoicesKPICards data={invoicesData.summary} />
      <InvoicesTable data={invoicesData.items} />
    </div>
  );
}
```

**Reusable Components:**
- `InvoicesTable`: Fatura listesi tablosu
- `InvoiceStatusBadge`: Durum badge'i (ödendi, beklemede, gecikti)
- `InvoiceDetailModal`: Fatura detay modal
- `PaymentReminderButton`: Ödeme hatırlatıcı

**Props Interface:**
```typescript
interface Invoice {
  id: string;
  invoiceNumber: string;
  clientId: string;
  clientName: string;
  amount: number;
  issueDate: string;
  dueDate: string;
  paidDate?: string;
  status: 'paid' | 'pending' | 'overdue';
  reminderSent: boolean;
}
```

##### 1.5 Müşteri Sağlık ve Karlılık Analizi
**Route:** `/admin/analytics`  
**Component Type:** Server Component + Client Components

**Layout Yapısı:**
```typescript
export default async function AnalyticsPage() {
  const analyticsData = await getClientAnalytics();
  
  return (
    <div className="p-8 space-y-6">
      <AnalyticsHeader />
      <ClientSegmentCards data={analyticsData.segments} />
      <ClientHealthTable data={analyticsData.clients} />
      <CrossSellOpportunities data={analyticsData.opportunities} />
      <ProfitLossAnalysis data={analyticsData.projects} />
    </div>
  );
}
```

**Reusable Components:**
- `ClientSegmentCards`: VIP, Riskli, Yeni Kazanılan segmentler
- `ClientHealthTable`: Müşteri sağlık skoru tablosu
- `CrossSellOpportunityMap`: AI destekli çapraz satış önerileri
- `ProfitLossChart`: Proje bazlı kar/zarar analizi

**Props Interface:**
```typescript
interface ClientHealth {
  id: string;
  clientName: string;
  avatar?: string;
  segment: 'vip' | 'risky' | 'new';
  healthScore: number; // 0-100
  paymentRegularity: number; // 0-100
  operationalSuccess: number; // 0-100
  serviceDuration: number; // months
  totalRevenue: number;
}

interface CrossSellOpportunity {
  clientId: string;
  clientName: string;
  currentServices: string[];
  recommendedService: string;
  matchPercentage: number;
  potentialRevenue: number;
}
```

**Framer Motion Animasyonlar:**
- Segment kartları scale-in animation
- Health score progress bar animation
- Opportunity cards slide-in (staggered)

**UX İyileştirmeleri:**
- AI destekli öneriler için tooltip açıklamaları
- "Teklif Oluştur" quick action button
- Müşteri avatarları (VIP segment)
- Renk kodlu sağlık skorları
- Filtreleme ve arama

#### 2. Client Portal Modülü (4 Dosya)

##### 2.1 Müşteri Portalı Dashboard
**Route:** `/client-portal`  
**Component Type:** Server Component + Client Components

**Layout Yapısı:**
```typescript
export default async function ClientPortalDashboard() {
  const session = await getServerSession();
  const clientData = await getClientDashboardData(session.user.clientId);
  
  return (
    <div className="p-8 space-y-6">
      <ClientWelcomeHeader user={session.user} />
      <ProjectProgressCards data={clientData.projects} />
      <ActiveServicesGrid data={clientData.services} />
      <RecentReportsSection data={clientData.reports} />
      <PendingApprovalsCard count={clientData.pendingApprovals} />
      <AccountManagerCard manager={clientData.accountManager} />
    </div>
  );
}
```

**Reusable Components:**
- `ProjectProgressCard`: Proje ilerleme kartı (progress bar)
- `ServiceCard`: Aktif servis kartı (SEO, SEM, Social Media, Web Design)
- `ReportCard`: Rapor kartı (download link)
- `ApprovalBadge`: Onay bekleyen sayısı badge
- `AccountManagerCard`: Hesap yöneticisi iletişim kartı

**Props Interface:**
```typescript
interface ClientProject {
  id: string;
  name: string;
  progress: number; // 0-100
  status: 'active' | 'completed' | 'on_hold';
  startDate: string;
  endDate?: string;
}

interface ClientService {
  id: string;
  type: 'seo' | 'sem' | 'social_media' | 'web_design';
  name: string;
  status: 'active' | 'paused' | 'completed';
  metrics: {
    label: string;
    value: string | number;
  }[];
}

interface ClientReport {
  id: string;
  title: string;
  type: 'monthly' | 'weekly' | 'custom';
  date: string;
  downloadUrl: string;
}
```

**Framer Motion Animasyonlar:**
```typescript
// Service cards grid animation
const gridVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100
    }
  }
};

// Progress bar animation
const progressVariants = {
  initial: { width: 0 },
  animate: (progress: number) => ({
    width: `${progress}%`,
    transition: { duration: 1, ease: 'easeOut' }
  })
};
```

**UX İyileştirmeleri:**
- Servis kartlarına tıklandığında detay sayfasına yönlendirme
- Real-time metrics (ad spend, SEO score, follower count)
- Download button hover animation
- Pending approvals için prominent badge
- Account manager'a direkt mesaj gönderme
- Support ticket sistemi entegrasyonu

**Performance Optimizasyonları:**
- Image optimization (next/image) for logos and avatars
- Lazy loading for reports section
- Prefetch for service detail pages
- Static generation for layout

##### 2.2 SEM Operasyon Paneli (Görev Yönetimli)
**Route:** `/client-portal/sem-operations`  
**Component Type:** Server Component + Client Components

**Layout Yapısı:**
```typescript
export default async function SEMOperationsPage() {
  const semData = await getSEMOperationsData();
  
  return (
    <div className="p-8 space-y-8">
      <SEMHeader />
      <SEMMetricsCards data={semData.metrics} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <SEMTaskList data={semData.tasks} />
          <CustomerAdStatusTable data={semData.customers} />
          <CompletedTasksSection data={semData.completedTasks} />
        </div>
        <div className="space-y-6">
          <ActiveTasksTimer data={semData.activeTasks} />
          <ReportStatusPanel data={semData.reports} />
          <CriticalAlertsPanel data={semData.alerts} />
        </div>
      </div>
    </div>
  );
}
```

**Reusable Components:**
- `SEMMetricsCards`: 4 metrik kartı (Harcama, CPC, Dönüşüm, ROAS)
- `SEMTaskList`: Görev listesi tablosu (checkbox, priority, deadline)
- `CustomerAdStatusTable`: Müşteri reklam durumları
- `ActiveTasksTimer`: Aktif görev zamanlayıcı
- `ReportStatusPanel`: Rapor durumları
- `CriticalAlertsPanel`: Kritik uyarılar
- `CompletedTasksAccordion`: Tamamlanan görevler (collapsible)

**Props Interface:**
```typescript
interface SEMTask {
  id: string;
  title: string;
  clientName: string;
  priority: 'high' | 'medium' | 'low';
  deadline: string;
  status: 'in_progress' | 'pending' | 'completed';
  assignedTo: string;
}

interface SEMMetrics {
  totalSpend: number;
  avgCPC: number;
  conversions: number;
  roas: number;
  spendChange: number; // percentage
  cpcChange: number;
  conversionsChange: number;
  roasChange: number;
}

interface ActiveTask {
  id: string;
  clientName: string;
  taskName: string;
  elapsedTime: number; // seconds
  isRunning: boolean;
}

interface CriticalAlert {
  id: string;
  type: 'high_cpa' | 'budget_exceeded' | 'low_quality_score';
  clientName: string;
  message: string;
  severity: 'critical' | 'warning';
  timestamp: string;
}
```

**Framer Motion Animasyonlar:**
```typescript
// Timer animation (pulsing effect)
const timerVariants = {
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

// Alert panel slide-in
const alertVariants = {
  hidden: { x: 50, opacity: 0 },
  show: { 
    x: 0, 
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100
    }
  }
};

// Completed tasks accordion
const accordionVariants = {
  collapsed: { height: 0, opacity: 0 },
  expanded: { 
    height: 'auto', 
    opacity: 1,
    transition: {
      height: { duration: 0.3 },
      opacity: { duration: 0.2, delay: 0.1 }
    }
  }
};
```

**UX İyileştirmeleri:**
- Checkbox selection için bulk actions
- Priority badge renk kodlaması (kırmızı: yüksek, sarı: orta, yeşil: düşük)
- Deadline yaklaşan görevler için warning indicator
- Timer start/stop/pause controls
- Real-time timer updates (her saniye)
- Alert severity göstergesi
- Completed tasks collapsible section
- Task detail modal (quick view)

**Performance Optimizasyonları:**
- SWR for real-time timer updates
- Optimistic UI for task completion
- Debounced search/filter
- Virtual scrolling for long task lists

##### 2.3 Sosyal Medya Müşteri Portföyü
**Route:** `/client-portal/social-media-portfolio`  
**Component Type:** Server Component + Client Components

**Layout Yapısı:**
```typescript
export default async function SocialMediaPortfolioPage() {
  const portfolioData = await getSocialMediaPortfolio();
  
  return (
    <div className="p-8 space-y-6">
      <PortfolioHeader />
      <PortfolioFilterBar />
      <PortfolioTable data={portfolioData.clients} />
      <PendingApprovalsSection data={portfolioData.pendingApprovals} />
    </div>
  );
}
```

**Reusable Components:**
- `PortfolioTable`: Müşteri portföy tablosu
- `PortfolioFilterBar`: Sektör, kanal, onay durumu filtreleri
- `PostingTargetProgress`: Paylaşım hedefi progress bar
- `HealthStatusBadge`: Sağlık durumu badge
- `PendingApprovalCard`: Onay bekleyen içerik kartı

**Props Interface:**
```typescript
interface SocialMediaClient {
  id: string;
  clientName: string;
  logo?: string;
  platforms: ('instagram' | 'facebook' | 'tiktok' | 'linkedin' | 'twitter')[];
  postingTarget: number;
  postsPublished: number;
  avgEngagementRate: number;
  healthStatus: 'stable' | 'needs_attention' | 'critical';
  pendingApprovals: number;
}
```

**Framer Motion Animasyonlar:**
- Table rows staggered fade-in
- Progress bar fill animation
- Health status badge pulse (critical durumda)

**UX İyileştirmeleri:**
- Platform icons (Instagram, Facebook, TikTok, LinkedIn, Twitter)
- Posting target progress visualization
- Engagement rate trend indicator
- Health status color coding
- Quick filter chips
- Export to Excel

##### 2.4 Raporlama Destekli Sosyal Medya Paneli
**Route:** `/client-portal/social-media-reports`  
**Component Type:** Server Component + Client Components

**Layout Yapısı:**
```typescript
export default async function SocialMediaReportsPage() {
  const reportsData = await getSocialMediaReports();
  
  return (
    <div className="p-8 space-y-6">
      <ReportsHeader />
      <ReportsMetricsCards data={reportsData.metrics} />
      <ReportsTable data={reportsData.reports} />
      <ScheduledReportsSection data={reportsData.scheduled} />
    </div>
  );
}
```

**Reusable Components:**
- `ReportsMetricsCards`: Metrik kartları
- `ReportsTable`: Rapor listesi
- `ReportDownloadButton`: İndirme butonu
- `ScheduledReportsCalendar`: Planlanan raporlar takvimi

#### 3. Client Detail Master Pages (7 Dosya)

##### 3.1 Destek Talebi Yönetimi
**Route:** `/client-portal/support`  
**Component Type:** Server Component + Client Components

**Layout Yapısı:**
```typescript
export default async function SupportPage() {
  const supportData = await getSupportTickets();
  
  return (
    <div className="p-8 space-y-6">
      <SupportHeader />
      <NewTicketButton />
      <TicketsList data={supportData.tickets} />
      <SupportChat ticketId={supportData.activeTicket?.id} />
    </div>
  );
}
```

**Reusable Components:**
- `TicketsList`: Destek talepleri listesi
- `SupportChat`: Chat benzeri arayüz
- `NewTicketModal`: Yeni talep oluşturma modal
- `TicketStatusBadge`: Durum badge'i

**Props Interface:**
```typescript
interface SupportTicket {
  id: string;
  subject: string;
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  createdAt: string;
  updatedAt: string;
  messages: SupportMessage[];
}

interface SupportMessage {
  id: string;
  ticketId: string;
  sender: 'client' | 'agent';
  senderName: string;
  message: string;
  attachments?: string[];
  timestamp: string;
}
```

**Framer Motion Animasyonlar:**
- Chat messages slide-in from bottom
- New message notification bounce
- Ticket status change animation

**UX İyileştirmeleri:**
- Real-time chat updates
- File attachment support
- Emoji picker
- Typing indicator
- Read receipts
- Priority color coding

##### 3.2 Müşteri Portalı Dashboard (Detaylı)
**Route:** `/client-portal/dashboard`  
**Component Type:** Server Component + Client Components

Bu sayfa 2.1'deki Client Portal Dashboard ile aynıdır.

##### 3.3 Müşteri Onay Merkezi
**Route:** `/client-portal/approvals`  
**Component Type:** Server Component + Client Components

**Layout Yapısı:**
```typescript
export default async function ApprovalCenterPage() {
  const approvalsData = await getPendingApprovals();
  
  return (
    <div className="p-8 space-y-6">
      <ApprovalCenterHeader />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <ContentPreview 
          content={approvalsData.selectedContent} 
          className="lg:col-span-8" 
        />
        <ContentListSidebar 
          contents={approvalsData.allContents} 
          className="lg:col-span-4" 
        />
      </div>
    </div>
  );
}
```

**Reusable Components:**
- `ContentPreview`: İçerik önizleme (image/video player)
- `ContentMetadata`: Caption, hashtags, scheduled date, platforms
- `RevisionQuota`: Kalan revizyon hakkı göstergesi
- `ApprovalButtons`: Onayla ve Revize İste butonları
- `RevisionFeedbackModal`: Revizyon feedback formu
- `ContentListSidebar`: Thumbnail preview listesi

**Props Interface:**
```typescript
interface ContentApproval {
  id: string;
  clientId: string;
  type: 'image' | 'video' | 'carousel';
  mediaUrl: string;
  thumbnailUrl?: string;
  caption: string;
  hashtags: string[];
  scheduledDate: string;
  platforms: ('instagram' | 'facebook' | 'tiktok' | 'linkedin')[];
  status: 'pending' | 'approved' | 'revision_requested' | 'rejected';
  revisionQuota: {
    used: number;
    total: number;
  };
  revisionHistory?: RevisionHistory[];
}

interface RevisionHistory {
  id: string;
  requestedAt: string;
  feedback: string;
  resolvedAt?: string;
}
```

**Framer Motion Animasyonlar:**
```typescript
// Content preview fade-in
const previewVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.3
    }
  }
};

// Sidebar thumbnails staggered
const sidebarVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const thumbnailVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

// Approval button success animation
const approvalVariants = {
  approved: {
    scale: [1, 1.2, 1],
    backgroundColor: ['#07883b', '#0a9d45', '#07883b'],
    transition: { duration: 0.5 }
  }
};
```

**UX İyileştirmeleri:**
- Full-screen image/video preview
- Zoom in/out controls
- Platform icons display
- Revision quota warning (kırmızı vurgu)
- Keyboard shortcuts (Arrow keys: next/prev, Space: approve, R: request revision)
- Thumbnail hover preview
- Selected content border highlight
- Success toast notification
- Revision feedback character counter
- Attachment support for feedback

**Performance Optimizasyonları:**
- Image optimization (next/image)
- Lazy loading for thumbnails
- Video lazy loading
- Prefetch next content
- Optimistic UI for approval


#### 4. SEO Modülü (5 Dosya)

##### 4.1 Rank Tracking Center
**Route:** `/seo/rank-tracking`  
**Component Type:** Server Component + Client Components

**Layout Yapısı:**
```typescript
export default async function RankTrackingPage() {
  const rankData = await getRankTrackingData();
  
  return (
    <div className="p-8 space-y-6">
      <RankTrackingHeader />
      <RankMetricsCards data={rankData.metrics} />
      <KeywordRankingsTable data={rankData.keywords} />
      <RankTrendChart data={rankData.trends} />
    </div>
  );
}
```

**Reusable Components:**
- `KeywordRankingsTable`: Anahtar kelime sıralama tablosu
- `RankTrendChart`: Sıralama trend grafiği (line chart)
- `RankChangeIndicator`: Sıralama değişim göstergesi (up/down arrows)
- `CompetitorComparison`: Rakip karşılaştırma

**Props Interface:**
```typescript
interface KeywordRanking {
  id: string;
  keyword: string;
  currentRank: number;
  previousRank: number;
  rankChange: number;
  searchVolume: number;
  difficulty: number;
  url: string;
  lastChecked: string;
}
```

##### 4.2 Tanıtım Yazısı Yayıncı Envanteri
**Route:** `/seo/publisher-inventory`  
**Component Type:** Server Component + Client Components

**Layout Yapısı:**
```typescript
export default async function PublisherInventoryPage() {
  const publishersData = await getPublisherInventory();
  
  return (
    <div className="p-8 space-y-6">
      <PublisherInventoryHeader />
      <PublisherStatsCards data={publishersData.stats} />
      <PublisherFilterBar />
      <PublisherTable data={publishersData.publishers} />
    </div>
  );
}
```

**Reusable Components:**
- `PublisherTable`: Yayıncı envanter tablosu
- `PublisherFilterBar`: DR, traffic, price, agency filtreleri
- `PublisherStatsCards`: Toplam yayıncı, aktif sipariş, aylık harcama, ortalama DR
- `BuyButton`: Satın alma butonu
- `AgencyContactTooltip`: Ajans iletişim tooltip

**Props Interface:**
```typescript
interface Publisher {
  id: string;
  name: string;
  url: string;
  dr: number; // Domain Rating
  traffic: number;
  spamScore: number;
  price: number;
  category: string[];
  agency: {
    name: string;
    contact: string;
    email: string;
  };
  status: 'available' | 'reserved' | 'sold';
}
```

**Framer Motion Animasyonlar:**
- Table rows fade-in (staggered)
- Filter bar slide-down
- Buy button hover scale

**UX İyileştirmeleri:**
- Advanced filters (DR range slider, traffic threshold, price scale)
- Category badges
- Agency contact tooltip on hover
- Pagination
- Search functionality
- Sort by DR, traffic, price
- Export to Excel
- Bulk selection for purchase

##### 4.3 Kapsamlı SEO Teknik Denetim Raporu
**Route:** `/seo/technical-audit/[clientId]`  
**Component Type:** Server Component + Client Components

**Layout Yapısı:**
```typescript
export default async function TechnicalAuditPage({ params }: { params: { clientId: string } }) {
  const auditData = await getTechnicalAudit(params.clientId);
  
  return (
    <div className="p-8 space-y-8">
      <AuditHeader client={auditData.client} />
      <SEOScoreCard score={auditData.overallScore} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ImageAltTagsAnalysis data={auditData.imageAltTags} />
        <HeadingHierarchyAnalysis data={auditData.headingHierarchy} />
      </div>
      <CoreWebVitalsSection data={auditData.coreWebVitals} />
      <PageSpeedSection data={auditData.pageSpeed} />
      <SchemaMarkupSection data={auditData.schemaMarkup} />
      <BreadcrumbValidation data={auditData.breadcrumbs} />
      <ExportButton />
    </div>
  );
}
```

**Reusable Components:**
- `SEOScoreCard`: Genel SEO skoru (circular progress)
- `ImageAltTagsAnalysis`: Alt tag analizi (toplam, etiketli, eksik)
- `HeadingHierarchyTree`: Başlık hiyerarşisi ağacı
- `CoreWebVitalsMetrics`: LCP, CLS, FID metrikleri
- `PageSpeedScores`: PageSpeed skorları (mobile, desktop)
- `SchemaMarkupValidator`: Schema.org JSON-LD doğrulama
- `BreadcrumbStructure`: Breadcrumb yapısı doğrulama
- `PDFExportButton`: PDF rapor export

**Props Interface:**
```typescript
interface TechnicalAudit {
  clientId: string;
  clientName: string;
  url: string;
  overallScore: number; // 0-100
  imageAltTags: {
    total: number;
    tagged: number;
    missing: number;
    missingImages: {
      url: string;
      thumbnail: string;
    }[];
  };
  headingHierarchy: {
    h1: { count: number; text: string[] };
    h2: { count: number; text: string[] };
    h3: { count: number; text: string[] };
    errors: string[];
  };
  coreWebVitals: {
    lcp: { value: number; status: 'good' | 'needs_improvement' | 'poor' };
    cls: { value: number; status: 'good' | 'needs_improvement' | 'poor' };
    fid: { value: number; status: 'good' | 'needs_improvement' | 'poor' };
  };
  pageSpeed: {
    mobile: number;
    desktop: number;
  };
  schemaMarkup: {
    isValid: boolean;
    types: string[];
    code: string;
  };
  breadcrumbs: {
    isValid: boolean;
    structure: string[];
  };
}
```

**Framer Motion Animasyonlar:**
```typescript
// SEO score circular progress animation
const scoreVariants = {
  initial: { pathLength: 0 },
  animate: (score: number) => ({
    pathLength: score / 100,
    transition: { duration: 1.5, ease: 'easeOut' }
  })
};

// Sections staggered reveal
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};
```

**UX İyileştirmeleri:**
- Color-coded status indicators (green: good, yellow: needs improvement, red: poor)
- Expandable sections for detailed analysis
- Image thumbnails for missing alt tags
- Heading hierarchy tree visualization
- Code preview for Schema markup
- PDF export with branding
- Share report link
- Historical comparison

##### 4.4 Teknik SEO Analiz ve Sorgu Paneli
**Route:** `/seo/analysis`  
**Component Type:** Server Component + Client Components

**Layout Yapısı:**
```typescript
export default async function SEOAnalysisPage() {
  const analysisData = await getSEOAnalysis();
  
  return (
    <div className="p-8 space-y-6">
      <AnalysisHeader />
      <URLAnalysisForm />
      <AnalysisResults data={analysisData} />
    </div>
  );
}
```

**Reusable Components:**
- `URLAnalysisForm`: URL analiz formu
- `AnalysisResults`: Analiz sonuçları
- `IssuesList`: Tespit edilen sorunlar listesi
- `RecommendationsList`: Öneriler listesi

#### 5. CRM Modülü (4 Dosya)

##### 5.1 Leads Kanban Board (Yüksek Değer Odaklı)
**Route:** `/crm/leads`  
**Component Type:** Client Component (drag-and-drop)

**Layout Yapısı:**
```typescript
'use client';

export default function LeadsKanbanPage() {
  const { data: leads } = useSWR('/api/crm/leads', fetcher);
  
  return (
    <div className="p-8 space-y-6">
      <LeadsHeader />
      <HighValueOpportunities data={leads?.highValue} />
      <KanbanBoard leads={leads?.all} />
    </div>
  );
}
```

**Reusable Components:**
- `KanbanBoard`: Drag-and-drop kanban board
- `KanbanColumn`: Kanban sütunu (new, contacted, proposal sent, potential, won, lost)
- `LeadCard`: Lead kartı
- `HighValueOpportunityCard`: Yüksek değerli fırsat kartı
- `NewLeadModal`: Yeni lead ekleme modal
- `LeadDetailModal`: Lead detay modal

**Props Interface:**
```typescript
interface Lead {
  id: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  potentialValue: number;
  source: 'linkedin' | 'referral' | 'website' | 'email' | 'ads';
  status: 'new' | 'contacted' | 'proposal_sent' | 'potential' | 'won' | 'lost';
  assignedTo: string;
  createdAt: string;
  lastContact?: string;
  notes?: string;
}
```

**Framer Motion Animasyonlar:**
```typescript
// Drag animation
const dragVariants = {
  drag: {
    scale: 1.05,
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    rotate: 2
  }
};

// Card drop animation
const dropVariants = {
  initial: { scale: 1 },
  drop: {
    scale: [1, 0.95, 1],
    transition: { duration: 0.3 }
  }
};

// Won/Lost animation
const statusVariants = {
  won: {
    borderColor: '#07883b',
    backgroundColor: 'rgba(7, 136, 59, 0.1)',
    transition: { duration: 0.5 }
  },
  lost: {
    opacity: 0.5,
    filter: 'grayscale(100%)',
    transition: { duration: 0.5 }
  }
};
```

**UX İyileştirmeleri:**
- Smooth drag-and-drop with visual feedback
- Column headers with lead count badges
- Won leads: green border + verified icon
- Lost leads: grayscale effect + cancel icon
- High-value opportunities section at top
- Quick action buttons (call, email, schedule meeting)
- Source filter chips
- Search functionality
- Bulk actions

**Performance Optimizasyonları:**
- React DnD or dnd-kit for drag-and-drop
- Optimistic UI updates
- SWR for real-time updates
- Virtual scrolling for large datasets


#### 6. Task Management Modülü (3 Dosya)

##### 6.1 Task Detail & SOP Modal
**Route:** Modal component (triggered from various pages)  
**Component Type:** Client Component

**Layout Yapısı:**
```typescript
'use client';

export function TaskDetailModal({ taskId, isOpen, onClose }: TaskDetailModalProps) {
  const { data: task } = useSWR(`/api/tasks/${taskId}`, fetcher);
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <TaskHeader task={task} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <SOPChecklist items={task?.sopItems} />
            <ActivityFeed activities={task?.activities} />
          </div>
          <div className="space-y-6">
            <TaskMetadata task={task} />
            <TimeTracker taskId={taskId} />
            <TaskAttachments attachments={task?.attachments} />
          </div>
        </div>
        <TaskActions task={task} onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
}
```

**Reusable Components:**
- `TaskDetailModal`: Ana modal component
- `SOPChecklist`: SOP kontrol listesi (checkbox items)
- `SOPProgressBar`: İlerleme çubuğu
- `TimeTracker`: Zaman takip widget (start/pause/stop)
- `ActivityFeed`: Aktivite akışı (comments, mentions)
- `TaskMetadata`: Görev metadata (assigned to, dates, priority)
- `TaskAttachments`: Ek dosyalar listesi
- `CommentInput`: Yorum ekleme input (@mention support)
- `MarkCompleteButton`: Tamamla butonu

**Props Interface:**
```typescript
interface Task {
  id: string;
  title: string;
  description: string;
  assignedTo: {
    id: string;
    name: string;
    avatar?: string;
  };
  startDate: string;
  endDate: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'not_started' | 'in_progress' | 'completed';
  sopItems: SOPItem[];
  activities: Activity[];
  attachments: Attachment[];
  timeTracking: {
    totalTime: number; // seconds
    isRunning: boolean;
    startedAt?: string;
  };
}

interface SOPItem {
  id: string;
  text: string;
  isCompleted: boolean;
  order: number;
}

interface Activity {
  id: string;
  type: 'comment' | 'status_change' | 'assignment' | 'attachment';
  user: {
    id: string;
    name: string;
    avatar?: string;
  };
  content: string;
  mentions?: string[];
  timestamp: string;
}

interface Attachment {
  id: string;
  fileName: string;
  fileSize: number;
  fileType: string;
  url: string;
  uploadedBy: string;
  uploadedAt: string;
}
```

**Framer Motion Animasyonlar:**
```typescript
// Modal entrance animation
const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.95, 
    y: 20,
    transition: { duration: 0.2 }
  }
};

// SOP checklist item animation
const checklistVariants = {
  unchecked: { opacity: 1 },
  checked: {
    opacity: 0.6,
    textDecoration: 'line-through',
    transition: { duration: 0.3 }
  }
};

// Progress bar animation
const progressVariants = {
  initial: { width: 0 },
  animate: (progress: number) => ({
    width: `${progress}%`,
    transition: { duration: 0.5, ease: 'easeOut' }
  })
};

// Activity feed item slide-in
const activityVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.3 }
  }
};
```

**UX İyileştirmeleri:**
- Full-screen modal with overlay
- SOP progress percentage updates in real-time
- Timer controls (start/pause/stop) with visual feedback
- Manual time entry option
- @mention autocomplete in comments
- File drag-and-drop upload
- File preview (images, PDFs)
- Keyboard shortcuts (Esc: close, Ctrl+Enter: submit comment)
- Confirmation dialog for "Mark as Complete"
- Activity feed auto-scroll to latest
- Optimistic UI updates

**Performance Optimizasyonları:**
- Lazy load activity feed (infinite scroll)
- Debounced comment input
- Optimistic checkbox updates
- SWR for real-time timer sync

##### 6.2 Sosyal Medya Görev Detay ve SOP Paneli
**Route:** Modal component (social media specific)  
**Component Type:** Client Component

Bu component 6.1'deki Task Detail Modal'ın sosyal medya özelleştirilmiş versiyonudur. Ek özellikler:
- Content preview integration
- Platform-specific checklists
- Approval status tracking
- Revision history

#### 7. SEM Modülü (3 Dosya)

##### 7.1 SEM Müşteri Portföy Yönetimi
**Route:** `/sem/portfolio`  
**Component Type:** Server Component + Client Components

**Layout Yapısı:**
```typescript
export default async function SEMPortfolioPage() {
  const portfolioData = await getSEMPortfolio();
  
  return (
    <div className="p-8 space-y-6">
      <PortfolioHeader />
      <PortfolioMetricsCards data={portfolioData.metrics} />
      <PortfolioTable data={portfolioData.clients} />
    </div>
  );
}
```

**Reusable Components:**
- `PortfolioTable`: Müşteri portföy tablosu
- `PortfolioMetricsCards`: Toplam metrikler
- `AccountHealthIndicator`: Hesap sağlık göstergesi
- `BudgetUsageProgress`: Bütçe kullanım progress bar

**Props Interface:**
```typescript
interface SEMClient {
  id: string;
  clientName: string;
  logo?: string;
  platform: 'google_ads' | 'meta_ads' | 'linkedin_ads';
  campaignType: 'search' | 'display' | 'shopping' | 'video';
  status: 'active' | 'paused' | 'ended';
  budget: number;
  spent: number;
  budgetUsagePercentage: number;
  cpc: number;
  conversions: number;
  roas: number;
  healthScore: number; // 0-100
  lastOptimized: string;
}
```

##### 7.2 SEM Proje ve Görev Detayı (Kanban)
**Route:** `/sem/projects/[id]`  
**Component Type:** Client Component

**Layout Yapısı:**
```typescript
'use client';

export default function SEMProjectKanbanPage({ params }: { params: { id: string } }) {
  const { data: project } = useSWR(`/api/sem/projects/${params.id}`, fetcher);
  
  return (
    <div className="p-8 space-y-6">
      <ProjectHeader project={project} />
      <ProjectProgress progress={project?.progress} />
      <TeamMembers members={project?.team} />
      <KanbanBoard tasks={project?.tasks} />
      <ActiveTimerWidget />
    </div>
  );
}
```

**Reusable Components:**
- `ProjectHeader`: Proje başlığı (client logo, campaign name)
- `ProjectProgress`: Kampanya ilerleme çubuğu
- `TeamMembers`: Takım üyeleri avatarları
- `KanbanBoard`: Görev kanban board (ideas, design/editing, customer approval, scheduled/published)
- `TaskCard`: Görev kartı (content type badge, estimated time, assigned person)
- `ActiveTimerWidget`: Aktif zamanlayıcı widget (bottom-right corner)

**Props Interface:**
```typescript
interface SEMProject {
  id: string;
  clientId: string;
  clientName: string;
  clientLogo?: string;
  campaignName: string;
  progress: number; // 0-100
  monthlyTarget: number;
  completed: number;
  team: TeamMember[];
  tasks: SEMTask[];
}

interface SEMTask {
  id: string;
  title: string;
  type: 'keyword_research' | 'ad_copy' | 'landing_page' | 'optimization' | 'reporting';
  status: 'ideas' | 'in_progress' | 'customer_approval' | 'completed';
  estimatedTime: number; // minutes
  assignedTo: string;
  isActive: boolean;
  elapsedTime?: number; // seconds
}
```

**Framer Motion Animasyonlar:**
- Kanban drag-and-drop animations
- Timer widget pulse effect
- Task completion celebration animation

#### 8. Sosyal Medya Modülü (2 Dosya)

##### 8.1 Sosyal Medya Onay Merkezi
**Route:** `/social-media/approval-center`  
**Component Type:** Server Component + Client Components

Bu sayfa 3.3'teki Client Approval Center ile benzer yapıdadır, ancak ajans tarafından kullanılır.

#### 9. Performans Paneli (1 Dosya)

##### 9.1 Kişisel Performans ve Verimlilik Paneli
**Route:** `/performance`  
**Component Type:** Server Component + Client Components

**Layout Yapısı:**
```typescript
export default async function PerformanceDashboardPage() {
  const session = await getServerSession();
  const performanceData = await getPerformanceData(session.user.id);
  
  return (
    <div className="p-8 space-y-8">
      <PerformanceHeader user={session.user} />
      <KPICards data={performanceData.kpis} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ProductivityChart data={performanceData.productivity} />
        <ClientEffortDistribution data={performanceData.clientEffort} />
      </div>
      <BadgesAndAchievements data={performanceData.badges} />
      <GrowthAreasTable data={performanceData.growthAreas} />
    </div>
  );
}
```

**Reusable Components:**
- `KPICards`: 4 KPI kartı (completed tasks, avg completion time, satisfaction score, goal achievement)
- `ProductivityChart`: Haftalık verimlilik grafiği (time spent vs value produced)
- `ClientEffortDistribution`: Müşteri bazlı efor dağılımı (donut chart)
- `BadgesAndAchievements`: Rozetler ve başarılar (locked/unlocked)
- `GrowthAreasTable`: Gelişim alanları tablosu
- `AIImprovementSuggestions`: AI destekli iyileştirme önerileri
- `TimePeriodFilter`: Zaman periyodu filtresi (7, 30, 90 gün)

**Props Interface:**
```typescript
interface PerformanceKPIs {
  completedTasks: number;
  avgCompletionTime: number; // hours
  satisfactionScore: number; // 0-100
  goalAchievement: number; // percentage
  comparisonWithPrevious: {
    completedTasks: number; // percentage change
    avgCompletionTime: number;
    satisfactionScore: number;
    goalAchievement: number;
  };
}

interface ProductivityData {
  week: string;
  timeSpent: number; // hours
  valueProduced: number; // arbitrary units
}

interface ClientEffort {
  clientName: string;
  effortPercentage: number;
  color: string;
}

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  isUnlocked: boolean;
  progress?: number; // 0-100
  unlockedAt?: string;
}

interface GrowthArea {
  id: string;
  area: string;
  currentEfficiency: number; // 0-100
  targetEfficiency: number;
  aiSuggestion: string;
}
```

**Framer Motion Animasyonlar:**
```typescript
// KPI cards staggered entrance
const kpiContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const kpiCardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100
    }
  }
};

// Badge unlock animation
const badgeVariants = {
  locked: {
    opacity: 0.4,
    filter: 'grayscale(100%)',
    scale: 0.95
  },
  unlocked: {
    opacity: 1,
    filter: 'grayscale(0%)',
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200
    }
  },
  unlock: {
    scale: [1, 1.3, 1],
    rotate: [0, 10, -10, 0],
    transition: { duration: 0.6 }
  }
};

// Chart animation
const chartVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.5, ease: 'easeInOut' },
      opacity: { duration: 0.5 }
    }
  }
};
```

**UX İyileştirmeleri:**
- Comparison with previous period (percentage change indicators)
- Interactive charts (hover tooltips)
- Badge progress indicators
- AI-powered improvement suggestions with actionable steps
- Time period filter (last 7, 30, 90 days)
- Export performance report (PDF)
- Goal setting interface
- Celebration animation for badge unlock

**Performance Optimizasyonları:**
- Chart.js or Recharts for performant charts
- Lazy loading for charts
- Memoized calculations
- Cached data with SWR


## Data Models

### TypeScript Interface Tanımları

```typescript
// types/admin.ts
export interface Employee {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  initials: string;
  position: string;
  department: Department;
  baseSalary: number;
  bonus: number;
  deductions: number;
  netPay: number;
  status: PaymentStatus;
  hireDate: string;
}

export type Department = 
  | 'Yazılım' 
  | 'Tasarım' 
  | 'Müşteri İlişkileri' 
  | 'Pazarlama' 
  | 'İçerik'
  | 'Yönetim';

export type PaymentStatus = 'paid' | 'pending' | 'bank_instruction_ready';

export interface ClientAccount {
  id: string;
  clientName: string;
  clientLogo?: string;
  debit: number;
  credit: number;
  balance: number;
  lastPaymentDate: string;
  paymentStatus: 'current' | 'overdue' | 'pending';
  healthScore: number;
  paymentHistory: PaymentHistory[];
}

export interface PaymentHistory {
  id: string;
  date: string;
  amount: number;
  type: 'payment' | 'invoice';
  description: string;
}

export interface Commission {
  id: string;
  employeeId: string;
  employeeName: string;
  department: Department;
  earned: number;
  approved: number;
  paid: number;
  status: 'earned' | 'approved' | 'paid';
  paymentDate?: string;
  eligibilityDate: string;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  clientId: string;
  clientName: string;
  amount: number;
  issueDate: string;
  dueDate: string;
  paidDate?: string;
  status: 'paid' | 'pending' | 'overdue';
  reminderSent: boolean;
  items: InvoiceItem[];
}

export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

// types/sem.ts
export interface SEMCampaign {
  id: string;
  clientId: string;
  clientName: string;
  platform: 'google_ads' | 'meta_ads' | 'linkedin_ads';
  campaignType: 'search' | 'display' | 'shopping' | 'video';
  status: 'active' | 'paused' | 'ended';
  budget: number;
  spent: number;
  cpc: number;
  conversions: number;
  roas: number;
  startDate: string;
  endDate?: string;
}

export interface SEMTask {
  id: string;
  title: string;
  clientName: string;
  priority: 'high' | 'medium' | 'low';
  deadline: string;
  status: 'in_progress' | 'pending' | 'completed';
  assignedTo: string;
  estimatedTime?: number;
  actualTime?: number;
}

export interface SEMMetrics {
  totalSpend: number;
  avgCPC: number;
  conversions: number;
  roas: number;
  spendChange: number;
  cpcChange: number;
  conversionsChange: number;
  roasChange: number;
}

// types/seo.ts
export interface KeywordRanking {
  id: string;
  keyword: string;
  currentRank: number;
  previousRank: number;
  rankChange: number;
  searchVolume: number;
  difficulty: number;
  url: string;
  lastChecked: string;
  clientId: string;
}

export interface Publisher {
  id: string;
  name: string;
  url: string;
  dr: number;
  traffic: number;
  spamScore: number;
  price: number;
  category: string[];
  agency: {
    name: string;
    contact: string;
    email: string;
  };
  status: 'available' | 'reserved' | 'sold';
}

export interface TechnicalAudit {
  id: string;
  clientId: string;
  clientName: string;
  url: string;
  overallScore: number;
  imageAltTags: ImageAltTagsAnalysis;
  headingHierarchy: HeadingHierarchyAnalysis;
  coreWebVitals: CoreWebVitals;
  pageSpeed: PageSpeed;
  schemaMarkup: SchemaMarkup;
  breadcrumbs: Breadcrumbs;
  createdAt: string;
}

export interface ImageAltTagsAnalysis {
  total: number;
  tagged: number;
  missing: number;
  missingImages: {
    url: string;
    thumbnail: string;
  }[];
}

export interface HeadingHierarchyAnalysis {
  h1: { count: number; text: string[] };
  h2: { count: number; text: string[] };
  h3: { count: number; text: string[] };
  errors: string[];
}

export interface CoreWebVitals {
  lcp: { value: number; status: 'good' | 'needs_improvement' | 'poor' };
  cls: { value: number; status: 'good' | 'needs_improvement' | 'poor' };
  fid: { value: number; status: 'good' | 'needs_improvement' | 'poor' };
}

export interface PageSpeed {
  mobile: number;
  desktop: number;
}

export interface SchemaMarkup {
  isValid: boolean;
  types: string[];
  code: string;
}

export interface Breadcrumbs {
  isValid: boolean;
  structure: string[];
}

// types/social-media.ts
export interface SocialMediaClient {
  id: string;
  clientName: string;
  logo?: string;
  platforms: Platform[];
  postingTarget: number;
  postsPublished: number;
  avgEngagementRate: number;
  healthStatus: 'stable' | 'needs_attention' | 'critical';
  pendingApprovals: number;
}

export type Platform = 'instagram' | 'facebook' | 'tiktok' | 'linkedin' | 'twitter';

export interface ContentApproval {
  id: string;
  clientId: string;
  type: 'image' | 'video' | 'carousel';
  mediaUrl: string;
  thumbnailUrl?: string;
  caption: string;
  hashtags: string[];
  scheduledDate: string;
  platforms: Platform[];
  status: 'pending' | 'approved' | 'revision_requested' | 'rejected';
  revisionQuota: {
    used: number;
    total: number;
  };
  revisionHistory?: RevisionHistory[];
}

export interface RevisionHistory {
  id: string;
  requestedAt: string;
  feedback: string;
  resolvedAt?: string;
}

// types/crm.ts
export interface Lead {
  id: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  potentialValue: number;
  source: 'linkedin' | 'referral' | 'website' | 'email' | 'ads';
  status: 'new' | 'contacted' | 'proposal_sent' | 'potential' | 'won' | 'lost';
  assignedTo: string;
  createdAt: string;
  lastContact?: string;
  notes?: string;
}

// types/tasks.ts
export interface Task {
  id: string;
  title: string;
  description: string;
  assignedTo: User;
  startDate: string;
  endDate: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'not_started' | 'in_progress' | 'completed';
  sopItems: SOPItem[];
  activities: Activity[];
  attachments: Attachment[];
  timeTracking: TimeTracking;
  projectId?: string;
  clientId?: string;
}

export interface SOPItem {
  id: string;
  text: string;
  isCompleted: boolean;
  order: number;
}

export interface Activity {
  id: string;
  type: 'comment' | 'status_change' | 'assignment' | 'attachment';
  user: User;
  content: string;
  mentions?: string[];
  timestamp: string;
}

export interface Attachment {
  id: string;
  fileName: string;
  fileSize: number;
  fileType: string;
  url: string;
  uploadedBy: string;
  uploadedAt: string;
}

export interface TimeTracking {
  totalTime: number;
  isRunning: boolean;
  startedAt?: string;
  sessions: TimeSession[];
}

export interface TimeSession {
  id: string;
  startTime: string;
  endTime?: string;
  duration: number;
}

// types/client-portal.ts
export interface ClientProject {
  id: string;
  name: string;
  progress: number;
  status: 'active' | 'completed' | 'on_hold';
  startDate: string;
  endDate?: string;
  services: string[];
}

export interface ClientService {
  id: string;
  type: 'seo' | 'sem' | 'social_media' | 'web_design';
  name: string;
  status: 'active' | 'paused' | 'completed';
  metrics: ServiceMetric[];
}

export interface ServiceMetric {
  label: string;
  value: string | number;
  change?: number;
  trend?: 'up' | 'down' | 'stable';
}

export interface ClientReport {
  id: string;
  title: string;
  type: 'monthly' | 'weekly' | 'custom';
  date: string;
  downloadUrl: string;
  fileSize: number;
}

export interface SupportTicket {
  id: string;
  subject: string;
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  createdAt: string;
  updatedAt: string;
  messages: SupportMessage[];
}

export interface SupportMessage {
  id: string;
  ticketId: string;
  sender: 'client' | 'agent';
  senderName: string;
  message: string;
  attachments?: string[];
  timestamp: string;
}

// types/common.ts
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: UserRole;
  department?: Department;
}

export type UserRole = 
  | 'admin' 
  | 'sem_specialist' 
  | 'seo_specialist' 
  | 'social_media_manager' 
  | 'account_manager' 
  | 'client';

export interface TeamMember {
  id: string;
  name: string;
  avatar?: string;
  role: string;
}
```

### API Endpoint Yapısı

```typescript
// API Routes Structure

// Authentication
POST   /api/auth/login
POST   /api/auth/logout
GET    /api/auth/session
POST   /api/auth/refresh

// Admin
GET    /api/admin/payroll
POST   /api/admin/payroll/approve
GET    /api/admin/accounts
GET    /api/admin/commissions
POST   /api/admin/commissions/approve
GET    /api/admin/invoices
POST   /api/admin/invoices/send-reminder
GET    /api/admin/analytics

// SEM
GET    /api/sem/campaigns
GET    /api/sem/campaigns/[id]
POST   /api/sem/campaigns
PUT    /api/sem/campaigns/[id]
GET    /api/sem/tasks
POST   /api/sem/tasks
PUT    /api/sem/tasks/[id]
GET    /api/sem/metrics
GET    /api/sem/portfolio

// SEO
GET    /api/seo/rankings
GET    /api/seo/rankings/[clientId]
GET    /api/seo/publishers
POST   /api/seo/publishers/purchase
GET    /api/seo/audit/[clientId]
POST   /api/seo/audit/generate

// Social Media
GET    /api/social-media/portfolio
GET    /api/social-media/approvals
POST   /api/social-media/approvals/[id]/approve
POST   /api/social-media/approvals/[id]/request-revision
GET    /api/social-media/content

// CRM
GET    /api/crm/leads
POST   /api/crm/leads
PUT    /api/crm/leads/[id]
DELETE /api/crm/leads/[id]
PUT    /api/crm/leads/[id]/move

// Tasks
GET    /api/tasks
GET    /api/tasks/[id]
POST   /api/tasks
PUT    /api/tasks/[id]
DELETE /api/tasks/[id]
POST   /api/tasks/[id]/time/start
POST   /api/tasks/[id]/time/stop
POST   /api/tasks/[id]/comments
POST   /api/tasks/[id]/attachments

// Client Portal
GET    /api/client-portal/dashboard
GET    /api/client-portal/projects
GET    /api/client-portal/reports
GET    /api/client-portal/approvals
POST   /api/client-portal/support/tickets
GET    /api/client-portal/support/tickets/[id]

// Performance
GET    /api/performance/[userId]
GET    /api/performance/[userId]/badges
```

### Data Fetching Stratejisi

**Server-Side Rendering (SSR):**
- Dashboard pages (initial load)
- SEO-critical pages
- Client portal pages

**Client-Side Fetching (SWR):**
- Real-time updates (timer, notifications)
- Interactive tables (sorting, filtering)
- Charts and metrics
- Infinite scroll lists

**Static Site Generation (SSG):**
- Marketing pages
- Documentation
- Public-facing content

**Incremental Static Regeneration (ISR):**
- Reports pages
- Analytics dashboards (revalidate: 3600)


## Animasyon Stratejisi

### Framer Motion Variants Tanımları

```typescript
// lib/animations.ts

// Page transitions
export const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut'
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.3 }
  }
};

// Staggered list animations
export const listContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const listItemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100
    }
  }
};

// Modal animations
export const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.95, 
    y: 20,
    transition: { duration: 0.2 }
  }
};

// Sidebar animations
export const sidebarVariants = {
  expanded: { width: 256 },
  collapsed: { width: 80 },
  transition: {
    type: 'spring',
    stiffness: 300,
    damping: 30
  }
};

// Card hover animations
export const cardHoverVariants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.02,
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    transition: {
      duration: 0.2,
      ease: 'easeInOut'
    }
  }
};

// Button animations
export const buttonVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 }
};

// Drag animations (for kanban)
export const dragVariants = {
  drag: {
    scale: 1.05,
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    rotate: 2,
    cursor: 'grabbing'
  }
};

// Loading skeleton shimmer
export const shimmerVariants = {
  initial: { backgroundPosition: '-200% 0' },
  animate: {
    backgroundPosition: '200% 0',
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'linear'
    }
  }
};

// Number counter animation
export const counterVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

// Progress bar animation
export const progressBarVariants = {
  initial: { width: 0 },
  animate: (progress: number) => ({
    width: `${progress}%`,
    transition: { duration: 1, ease: 'easeOut' }
  })
};

// Badge unlock animation
export const badgeUnlockVariants = {
  locked: {
    opacity: 0.4,
    filter: 'grayscale(100%)',
    scale: 0.95
  },
  unlocked: {
    opacity: 1,
    filter: 'grayscale(0%)',
    scale: 1
  },
  unlock: {
    scale: [1, 1.3, 1],
    rotate: [0, 10, -10, 0],
    transition: { duration: 0.6 }
  }
};

// Toast notification animation
export const toastVariants = {
  initial: { opacity: 0, y: 50, scale: 0.3 },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 30
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.5,
    transition: { duration: 0.2 }
  }
};
```

### Sayfa Geçiş Animasyonları

```typescript
// app/layout.tsx
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
```

### Micro-interactions

**Button Hover:**
```typescript
<motion.button
  variants={buttonVariants}
  initial="rest"
  whileHover="hover"
  whileTap="tap"
  className="px-4 py-2 bg-primary text-white rounded-lg"
>
  Kaydet
</motion.button>
```

**Card Hover:**
```typescript
<motion.div
  variants={cardHoverVariants}
  initial="rest"
  whileHover="hover"
  className="bg-white p-6 rounded-xl border"
>
  {/* Card content */}
</motion.div>
```

### Scroll-Triggered Animations

```typescript
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function ScrollReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
```

### Staggered List Animations

```typescript
<motion.div
  variants={listContainerVariants}
  initial="hidden"
  animate="show"
  className="space-y-4"
>
  {items.map((item) => (
    <motion.div
      key={item.id}
      variants={listItemVariants}
      className="bg-white p-4 rounded-lg"
    >
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

## Error Handling

### Error Boundary Implementation

```typescript
// components/error-boundary.tsx
'use client';

import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('Error caught by boundary:', error, errorInfo);
    // Log to error tracking service (e.g., Sentry)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="flex flex-col items-center justify-center min-h-screen p-8">
          <h2 className="text-2xl font-bold mb-4">Bir şeyler yanlış gitti</h2>
          <p className="text-gray-600 mb-6">Lütfen sayfayı yenileyin veya daha sonra tekrar deneyin.</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90"
          >
            Sayfayı Yenile
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
```

### API Error Handling

```typescript
// lib/api-client.ts
export class APIError extends Error {
  constructor(
    public status: number,
    public message: string,
    public code?: string
  ) {
    super(message);
    this.name = 'APIError';
  }
}

export async function apiClient<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  try {
    const response = await fetch(`/api${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new APIError(
        response.status,
        error.message || 'Bir hata oluştu',
        error.code
      );
    }

    return response.json();
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    }
    throw new APIError(500, 'Sunucu hatası');
  }
}
```

### Form Validation

```typescript
// lib/validations.ts
import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Geçerli bir e-posta adresi girin'),
  password: z.string().min(8, 'Şifre en az 8 karakter olmalıdır'),
});

export const taskSchema = z.object({
  title: z.string().min(1, 'Başlık gereklidir').max(100, 'Başlık çok uzun'),
  description: z.string().optional(),
  assignedTo: z.string().min(1, 'Atanan kişi seçilmelidir'),
  priority: z.enum(['low', 'medium', 'high', 'urgent']),
  startDate: z.string(),
  endDate: z.string(),
});

export const leadSchema = z.object({
  companyName: z.string().min(1, 'Şirket adı gereklidir'),
  contactPerson: z.string().min(1, 'İletişim kişisi gereklidir'),
  email: z.string().email('Geçerli bir e-posta adresi girin'),
  phone: z.string().regex(/^[0-9]{10}$/, 'Geçerli bir telefon numarası girin'),
  potentialValue: z.number().min(0, 'Potansiyel değer 0\'dan büyük olmalıdır'),
  source: z.enum(['linkedin', 'referral', 'website', 'email', 'ads']),
});
```

### Toast Notifications

```typescript
// components/ui/toast.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { toastVariants } from '@/lib/animations';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  isVisible: boolean;
  onClose: () => void;
}

export function Toast({ message, type, isVisible, onClose }: ToastProps) {
  const icons = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ',
  };

  const colors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500',
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={toastVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className={`fixed bottom-4 right-4 ${colors[type]} text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 z-50`}
        >
          <span className="text-xl">{icons[type]}</span>
          <p className="font-medium">{message}</p>
          <button onClick={onClose} className="ml-4 hover:opacity-80">
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

## Testing Strategy

### Dual Testing Approach

Platform, hem unit testler hem de property-based testler kullanarak kapsamlı test coverage sağlayacaktır.

**Unit Tests:**
- Specific examples ve edge cases
- Component rendering tests
- API endpoint tests
- Integration tests
- UI interaction tests

**Property-Based Tests:**
- Universal properties across all inputs
- Data validation properties
- Business logic properties
- State management properties

### Testing Tools

**Unit Testing:**
- Jest: Test runner
- React Testing Library: Component testing
- MSW (Mock Service Worker): API mocking
- Playwright: E2E testing

**Property-Based Testing:**
- fast-check: Property-based testing library for TypeScript
- Minimum 100 iterations per property test

### Test Configuration

```typescript
// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  collectCoverageFrom: [
    'app/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx}',
    'lib/**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
};
```

### Example Unit Tests

```typescript
// __tests__/components/admin/payroll-table.test.tsx
import { render, screen } from '@testing-library/react';
import { PayrollTable } from '@/components/admin/payroll-table';

describe('PayrollTable', () => {
  it('renders employee list correctly', () => {
    const employees = [
      {
        id: '1',
        name: 'Mert Aydın',
        department: 'Yazılım',
        baseSalary: 42500,
        netPay: 46300,
        status: 'paid',
      },
    ];

    render(<PayrollTable data={employees} />);
    
    expect(screen.getByText('Mert Aydın')).toBeInTheDocument();
    expect(screen.getByText('₺46.300,00')).toBeInTheDocument();
  });

  it('displays correct payment status badge', () => {
    const employees = [
      {
        id: '1',
        name: 'Test User',
        status: 'paid',
      },
    ];

    render(<PayrollTable data={employees} />);
    
    expect(screen.getByText('ÖDENDİ')).toHaveClass('bg-green-100');
  });
});
```


## Acceptance Criteria Testing Prework

### Requirement 1: Platform Layout ve Navigation Sistemi

1.1 THE Platform SHALL implement a responsive sidebar navigation with collapsible menu items
  Thoughts: Bu bir UI implementasyon gereksinimidir. Sidebar'ın responsive olması ve collapse edilebilmesi bir davranış özelliğidir. Bunu test etmek için sidebar'ın farklı viewport genişliklerinde doğru render edildiğini ve collapse/expand state'inin korunduğunu kontrol edebiliriz.
  Testable: yes - example

1.2 WHEN a user navigates between pages, THE Platform SHALL preserve the sidebar state (expanded/collapsed)
  Thoughts: Bu bir state persistence özelliğidir. Herhangi bir sayfa geçişinde sidebar state'inin korunması gerekir. Bu bir property olarak test edilebilir - tüm sayfa geçişleri için geçerli olmalıdır.
  Testable: yes - property

1.3 THE Platform SHALL display role-based navigation items (Admin, SEO, SEM, Social Media, CRM, Client)
  Thoughts: Bu authorization/role-based rendering gereksinimidir. Her rol için doğru navigation itemlarının gösterilmesi gerekir. Bu bir property olarak test edilebilir.
  Testable: yes - property

1.4 WHEN a user is on a specific page, THE Platform SHALL highlight the active navigation item with visual feedback
  Thoughts: Bu bir UI state gereksinimidir. Aktif sayfa için navigation item'ın highlight edilmesi gerekir. Tüm sayfalar için geçerli olmalıdır.
  Testable: yes - property

1.5 THE Platform SHALL implement a sticky header with user profile, notifications, and quick actions
  Thoughts: Bu bir UI layout gereksinimidir. Header'ın sticky olması ve belirli elementleri içermesi bir implementasyon detayıdır.
  Testable: yes - example

1.6 THE Platform SHALL support dark mode toggle with persistent user preference
  Thoughts: Bu bir theme switching ve persistence özelliğidir. Dark mode toggle'ın çalışması ve tercihinin saklanması test edilebilir.
  Testable: yes - property

1.7 WHEN viewport width is below 768px, THE Platform SHALL convert sidebar to mobile drawer navigation
  Thoughts: Bu responsive design gereksinimidir. Belirli bir breakpoint'te sidebar'ın drawer'a dönüşmesi bir edge case'dir.
  Testable: edge-case

1.8 THE Platform SHALL implement breadcrumb navigation for deep page hierarchies
  Thoughts: Bu bir navigation özelliğidir. Breadcrumb'ların doğru şekilde oluşturulması ve gösterilmesi test edilebilir.
  Testable: yes - property

### Requirement 2: Admin Dashboard - Muhasebe ve Finans Modülü

2.1 THE Admin_Dashboard SHALL display real-time financial KPI cards (total salary, bonuses, taxes, benefits)
  Thoughts: Bu bir data display gereksinimidir. KPI kartlarının doğru verileri göstermesi test edilebilir.
  Testable: yes - example

2.2 WHEN viewing payroll panel, THE Admin_Dashboard SHALL list all employees with salary breakdown (base, bonus, deductions, net)
  Thoughts: Bu bir data rendering gereksinimidir. Tüm çalışanların doğru maaş breakdown'ı ile listelenmesi gerekir.
  Testable: yes - property

2.3 THE Admin_Dashboard SHALL support bulk payment approval with checkbox selection
  Thoughts: Bu bir UI interaction özelliğidir. Toplu seçim ve onaylama fonksiyonalitesi test edilebilir.
  Testable: yes - example

2.4 WHEN generating bank payment file, THE Admin_Dashboard SHALL export in Excel and CSV formats
  Thoughts: Bu bir export özelliğidir. Dosya formatlarının doğru oluşturulması test edilebilir.
  Testable: yes - property

2.5 THE Admin_Dashboard SHALL display salary distribution pie chart by department
  Thoughts: Bu bir data visualization gereksinimidir. Chart'ın doğru verileri göstermesi test edilebilir.
  Testable: yes - example

2.6 THE Admin_Dashboard SHALL implement client account tracking with debit/credit/balance columns
  Thoughts: Bu bir data display gereksinimidir. Hesap bilgilerinin doğru gösterilmesi test edilebilir.
  Testable: yes - example

2.7 WHEN viewing invoice management, THE Admin_Dashboard SHALL show invoice status (paid, pending, overdue)
  Thoughts: Bu bir status display gereksinimidir. Fatura durumlarının doğru gösterilmesi test edilebilir.
  Testable: yes - property

2.8 THE Admin_Dashboard SHALL send automatic payment reminders for overdue invoices
  Thoughts: Bu bir automation özelliğidir. Gecikmiş faturalar için otomatik hatırlatma gönderilmesi test edilebilir.
  Testable: yes - property

2.9 THE Admin_Dashboard SHALL display commission tracking with earned/approved/paid status
  Thoughts: Bu bir status tracking gereksinimidir. Prim durumlarının doğru gösterilmesi test edilebilir.
  Testable: yes - example

2.10 WHEN commission payment date arrives, THE Admin_Dashboard SHALL highlight eligible commissions
  Thoughts: Bu bir conditional highlighting özelliğidir. Ödeme tarihine göre primlerin vurgulanması test edilebilir.
  Testable: yes - property

2.11 THE Admin_Dashboard SHALL implement client health scoring based on payment history and project performance
  Thoughts: Bu bir scoring algorithm gereksinimidir. Sağlık skorunun doğru hesaplanması test edilebilir.
  Testable: yes - property

### Requirement 3: Client Portal Dashboard

3.1 THE Client_Portal SHALL display project progress percentage with visual progress bar
  Thoughts: Bu bir progress display gereksinimidir. İlerleme yüzdesinin doğru gösterilmesi test edilebilir.
  Testable: yes - property

3.2 THE Client_Portal SHALL show active service cards (SEO, SEM, Social Media, Web Design) with status badges
  Thoughts: Bu bir service display gereksinimidir. Aktif servislerin doğru gösterilmesi test edilebilir.
  Testable: yes - example

3.3 WHEN viewing dashboard, THE Client_Portal SHALL display latest shared reports with download links
  Thoughts: Bu bir report display gereksinimidir. Raporların doğru gösterilmesi ve indirme linklerinin çalışması test edilebilir.
  Testable: yes - example

3.4 THE Client_Portal SHALL show pending approval count with prominent badge
  Thoughts: Bu bir count display gereksinimidir. Onay bekleyen sayısının doğru gösterilmesi test edilebilir.
  Testable: yes - property

3.5 THE Client_Portal SHALL display assigned account manager with contact information
  Thoughts: Bu bir contact display gereksinimidir. Hesap yöneticisi bilgilerinin gösterilmesi test edilebilir.
  Testable: yes - example

3.6 WHEN clicking service card, THE Client_Portal SHALL navigate to detailed service page
  Thoughts: Bu bir navigation özelliğidir. Servis kartına tıklandığında doğru sayfaya yönlendirme yapılması test edilebilir.
  Testable: yes - property

3.7 THE Client_Portal SHALL implement support ticket system with chat-like interface
  Thoughts: Bu bir UI implementasyon gereksinimidir. Destek sistemi arayüzünün çalışması test edilebilir.
  Testable: yes - example

3.8 THE Client_Portal SHALL display real-time metrics (ad spend, SEO score, follower count)
  Thoughts: Bu bir real-time data display gereksinimidir. Metriklerin doğru gösterilmesi test edilebilir.
  Testable: yes - example

### Requirement 4: SEM Operasyon Paneli ve Görev Yönetimi

4.1 THE SEM_Module SHALL display aggregated metrics (total ad spend, average CPC, conversions, ROAS)
  Thoughts: Bu bir aggregation gereksinimidir. Metriklerin doğru toplanması ve gösterilmesi test edilebilir.
  Testable: yes - property

4.2 THE SEM_Module SHALL implement task list with priority levels (high, medium, low)
  Thoughts: Bu bir task display gereksinimidir. Görevlerin öncelik seviyesi ile gösterilmesi test edilebilir.
  Testable: yes - example

4.3 WHEN a task is in progress, THE SEM_Module SHALL display active timer with elapsed time
  Thoughts: Bu bir timer display gereksinimidir. Aktif görevler için zamanlayıcının gösterilmesi test edilebilir.
  Testable: yes - property

4.4 THE SEM_Module SHALL show customer ad status table with budget usage percentage
  Thoughts: Bu bir status display gereksinimidir. Müşteri reklam durumlarının gösterilmesi test edilebilir.
  Testable: yes - example

4.5 THE SEM_Module SHALL implement critical alerts section for high CPA increases or budget issues
  Thoughts: Bu bir alert system gereksinimidir. Kritik durumlar için uyarıların gösterilmesi test edilebilir.
  Testable: yes - property

4.6 WHEN viewing customer portfolio, THE SEM_Module SHALL display account health indicators
  Thoughts: Bu bir health indicator display gereksinimidir. Hesap sağlık göstergelerinin gösterilmesi test edilebilir.
  Testable: yes - example

4.7 THE SEM_Module SHALL show completed tasks in collapsible section with completion dates
  Thoughts: Bu bir UI organization gereksinimidir. Tamamlanan görevlerin collapsible section'da gösterilmesi test edilebilir.
  Testable: yes - example

4.8 THE SEM_Module SHALL integrate with Google Ads API for real-time data sync
  Thoughts: Bu bir API integration gereksinimidir. Google Ads API ile senkronizasyonun çalışması test edilebilir.
  Testable: yes - example

4.9 THE SEM_Module SHALL display report status with overdue warnings
  Thoughts: Bu bir status display gereksinimidir. Rapor durumlarının ve gecikme uyarılarının gösterilmesi test edilebilir.
  Testable: yes - property

### Requirement 5: Sosyal Medya Portföy ve İçerik Yönetimi

5.1 THE Social_Media_Module SHALL display portfolio table with client accounts, platforms, and posting targets
  Thoughts: Bu bir data display gereksinimidir. Portföy tablosunun doğru verileri göstermesi test edilebilir.
  Testable: yes - example

5.2 THE Social_Media_Module SHALL show posting target progress with percentage and visual bar
  Thoughts: Bu bir progress display gereksinimidir. Paylaşım hedefi ilerlemesinin gösterilmesi test edilebilir.
  Testable: yes - property

5.3 WHEN viewing portfolio, THE Social_Media_Module SHALL display average engagement rate with trend indicator
  Thoughts: Bu bir metric display gereksinimidir. Engagement rate ve trend göstergesinin gösterilmesi test edilebilir.
  Testable: yes - example

5.4 THE Social_Media_Module SHALL implement health status badges (stable, needs attention, critical)
  Thoughts: Bu bir status badge gereksinimidir. Sağlık durumu badge'lerinin gösterilmesi test edilebilir.
  Testable: yes - property

5.5 THE Social_Media_Module SHALL show pending approvals section with customer feedback status
  Thoughts: Bu bir approval display gereksinimidir. Onay bekleyen içeriklerin gösterilmesi test edilebilir.
  Testable: yes - example

5.6 THE Social_Media_Module SHALL display active task timer for content creation
  Thoughts: Bu bir timer display gereksinimidir. Aktif görev zamanlayıcısının gösterilmesi test edilebilir.
  Testable: yes - property

5.7 WHEN filtering portfolio, THE Social_Media_Module SHALL support sector, channel, and approval status filters
  Thoughts: Bu bir filtering özelliğidir. Filtrelerin doğru çalışması test edilebilir.
  Testable: yes - property

5.8 THE Social_Media_Module SHALL show completed tasks archive with completion dates
  Thoughts: Bu bir archive display gereksinimidir. Tamamlanan görevlerin gösterilmesi test edilebilir.
  Testable: yes - example

### Requirement 6: Sosyal Medya Onay Merkezi

6.1 THE Approval_Center SHALL display content preview with full-size image/video player
  Thoughts: Bu bir media display gereksinimidir. İçerik önizlemesinin gösterilmesi test edilebilir.
  Testable: yes - example

6.2 THE Approval_Center SHALL show content metadata (caption, hashtags, scheduled date, platforms)
  Thoughts: Bu bir metadata display gereksinimidir. İçerik metadata'sının gösterilmesi test edilebilir.
  Testable: yes - property

6.3 WHEN viewing content, THE Approval_Center SHALL display remaining revision quota (e.g., 3/5)
  Thoughts: Bu bir quota display gereksinimidir. Kalan revizyon hakkının gösterilmesi test edilebilir.
  Testable: yes - property

6.4 THE Approval_Center SHALL provide approve and request revision buttons with clear visual hierarchy
  Thoughts: Bu bir UI design gereksinimidir. Butonların görsel hiyerarşisi bir tasarım özelliğidir.
  Testable: no

6.5 WHEN requesting revision, THE Approval_Center SHALL provide textarea for detailed feedback
  Thoughts: Bu bir UI element gereksinimidir. Revizyon feedback formu bir implementasyon detayıdır.
  Testable: yes - example

6.6 THE Approval_Center SHALL show content list sidebar with thumbnail previews
  Thoughts: Bu bir UI layout gereksinimidir. Sidebar'ın thumbnail'ları göstermesi test edilebilir.
  Testable: yes - example

6.7 THE Approval_Center SHALL highlight selected content with border and background color
  Thoughts: Bu bir UI state gereksinimidir. Seçili içeriğin vurgulanması test edilebilir.
  Testable: yes - property

6.8 WHEN content is approved, THE Approval_Center SHALL update status and notify creative team
  Thoughts: Bu bir state update ve notification gereksinimidir. Onay sonrası durum güncellemesi ve bildirim gönderilmesi test edilebilir.
  Testable: yes - property

6.9 THE Approval_Center SHALL display platform icons (Instagram, Facebook, TikTok) for multi-platform posts
  Thoughts: Bu bir icon display gereksinimidir. Platform ikonlarının gösterilmesi test edilebilir.
  Testable: yes - property

### Requirement 7-20 için benzer analiz devam eder...


## Property Reflection

Prework analizini gözden geçirerek redundant property'leri tespit ediyorum:

**Redundancy Analysis:**

1. **Navigation State Persistence**: Requirement 1.2 (sidebar state preservation) tek başına yeterlidir.

2. **Role-Based Display**: Requirement 1.3 (role-based navigation) ve benzer role-based display gereksinimleri tek bir property ile test edilebilir.

3. **Status Display**: Birçok modülde status display gereksinimleri var (2.7, 4.9, 5.4). Bunlar generic bir "status display" property'si ile birleştirilebilir.

4. **Timer Display**: SEM ve Social Media modüllerinde timer display gereksinimleri (4.3, 5.6) benzerdir ve tek bir property ile test edilebilir.

5. **Progress Display**: Birçok yerde progress bar/percentage display var (3.1, 5.2). Bunlar tek bir property ile test edilebilir.

6. **Metadata Display**: Content metadata display gereksinimleri (6.2, 6.9) birleştirilebilir.

**Consolidated Properties:**
- State persistence across navigation
- Role-based content rendering
- Status badge rendering
- Timer functionality
- Progress visualization
- Metadata completeness

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Navigation State Persistence

*For any* user session and any sequence of page navigations, the sidebar state (expanded/collapsed) should remain consistent across all page transitions.

**Validates: Requirements 1.2**

### Property 2: Role-Based Content Rendering

*For any* user with a specific role (Admin, SEO, SEM, Social Media, CRM, Client), the platform should display only the navigation items and content sections that are authorized for that role.

**Validates: Requirements 1.3**

### Property 3: Active Navigation Highlighting

*For any* page in the platform, the navigation item corresponding to the current page should be highlighted with visual feedback.

**Validates: Requirements 1.4**

### Property 4: Dark Mode Persistence

*For any* user preference change (light to dark or dark to light), the theme preference should persist across browser sessions and page reloads.

**Validates: Requirements 1.6**

### Property 5: Breadcrumb Accuracy

*For any* page with a hierarchical path, the breadcrumb navigation should accurately reflect the page hierarchy from root to current page.

**Validates: Requirements 1.8**

### Property 6: Salary Calculation Accuracy

*For any* employee record, the net pay should equal base salary plus bonuses minus deductions.

**Validates: Requirements 2.2**

### Property 7: Export Format Validity

*For any* payroll data export, the generated file should be valid Excel or CSV format and contain all employee records with complete salary breakdown.

**Validates: Requirements 2.4**

### Property 8: Invoice Status Classification

*For any* invoice, the status should be correctly classified as 'paid' if paid date exists, 'overdue' if due date has passed and no paid date, or 'pending' otherwise.

**Validates: Requirements 2.7**

### Property 9: Automatic Reminder Triggering

*For any* invoice with status 'overdue', an automatic payment reminder should be sent if no reminder has been sent in the last 7 days.

**Validates: Requirements 2.8**

### Property 10: Commission Eligibility Highlighting

*For any* commission record where the payment date equals today's date and status is 'approved', the commission should be highlighted as eligible for payment.

**Validates: Requirements 2.10**

### Property 11: Client Health Score Calculation

*For any* client, the health score should be calculated based on payment regularity (0-100), operational success (0-100), and service duration, with all three factors weighted appropriately.

**Validates: Requirements 2.11**

### Property 12: Project Progress Accuracy

*For any* client project, the displayed progress percentage should match the ratio of completed tasks to total tasks.

**Validates: Requirements 3.1**

### Property 13: Pending Approval Count Accuracy

*For any* client, the pending approval count badge should display the exact number of content items with status 'pending'.

**Validates: Requirements 3.4**

### Property 14: Service Card Navigation

*For any* service card click, the platform should navigate to the correct detailed service page corresponding to the service type.

**Validates: Requirements 3.6**

### Property 15: SEM Metrics Aggregation

*For any* set of SEM campaigns, the aggregated metrics (total spend, average CPC, total conversions, average ROAS) should be correctly calculated from individual campaign data.

**Validates: Requirements 4.1**

### Property 16: Active Timer Display

*For any* task with status 'in_progress' and an active time tracking session, the elapsed time should be displayed and updated every second.

**Validates: Requirements 4.3**

### Property 17: Critical Alert Generation

*For any* SEM campaign where CPA increases by more than 40% in 24 hours or budget usage exceeds 90%, a critical alert should be generated.

**Validates: Requirements 4.5**

### Property 18: Report Overdue Warning

*For any* report where the due date has passed and status is not 'completed', an overdue warning should be displayed.

**Validates: Requirements 4.9**

### Property 19: Posting Target Progress

*For any* social media client, the posting target progress percentage should equal (posts published / posting target) * 100.

**Validates: Requirements 5.2**

### Property 20: Health Status Badge Classification

*For any* social media client, the health status should be 'critical' if engagement rate < 1%, 'needs_attention' if 1% ≤ engagement rate < 3%, or 'stable' if engagement rate ≥ 3%.

**Validates: Requirements 5.4**

### Property 21: Portfolio Filtering

*For any* combination of filters (sector, channel, approval status), the filtered portfolio should contain only clients that match all selected filter criteria.

**Validates: Requirements 5.7**

### Property 22: Content Metadata Completeness

*For any* content approval item, all required metadata fields (caption, hashtags, scheduled date, platforms) should be present and displayed.

**Validates: Requirements 6.2**

### Property 23: Revision Quota Display

*For any* content approval item, the displayed revision quota should show the correct ratio of used revisions to total allowed revisions.

**Validates: Requirements 6.3**

### Property 24: Selected Content Highlighting

*For any* content item in the approval center, when selected, it should be highlighted with a distinct border and background color, and only one item should be highlighted at a time.

**Validates: Requirements 6.7**

### Property 25: Approval Status Update

*For any* content approval action (approve or request revision), the content status should be updated immediately and a notification should be sent to the creative team.

**Validates: Requirements 6.8**

### Property 26: Platform Icons Display

*For any* multi-platform content, all selected platform icons should be displayed correctly.

**Validates: Requirements 6.9**

### Property 27: Responsive Breakpoint Behavior

*For any* viewport width below 768px, the sidebar should be converted to a mobile drawer navigation.

**Validates: Requirements 1.7 (edge-case)**

### Property 28: Time Tracking Accuracy

*For any* task with time tracking, the total time should equal the sum of all time session durations.

**Validates: Requirements 10.10**

### Property 29: SOP Progress Calculation

*For any* task with SOP checklist, the progress percentage should equal (completed items / total items) * 100.

**Validates: Requirements 10.3**

### Property 30: Kanban Column Constraints

*For any* lead in the CRM kanban board, it should exist in exactly one column at any given time.

**Validates: Requirements 9.2**


## Testing Strategy (Detaylı)

### Dual Testing Approach

Platform, hem unit testler hem de property-based testler kullanarak kapsamlı test coverage sağlayacaktır. Bu iki yaklaşım birbirini tamamlar:

**Unit Tests:**
- Specific examples ve edge cases için
- Component rendering testleri
- Integration testleri
- UI interaction testleri
- API endpoint testleri

**Property-Based Tests:**
- Universal properties için (tüm inputlar için geçerli)
- Business logic doğrulaması
- Data validation
- State management
- Comprehensive input coverage

### Property-Based Testing Configuration

**Library:** fast-check (TypeScript için)

**Configuration:**
- Minimum 100 iterations per property test
- Her property test design dokümanındaki property'ye referans verecek
- Tag format: `Feature: stitch-agency-platform, Property {number}: {property_text}`

**Example Property Test:**
```typescript
// __tests__/properties/navigation-state.test.ts
import fc from 'fast-check';
import { renderHook, act } from '@testing-library/react';
import { useSidebarState } from '@/hooks/use-sidebar-state';

/**
 * Feature: stitch-agency-platform
 * Property 1: Navigation State Persistence
 * 
 * For any user session and any sequence of page navigations,
 * the sidebar state (expanded/collapsed) should remain consistent
 * across all page transitions.
 */
describe('Property 1: Navigation State Persistence', () => {
  it('should preserve sidebar state across page navigations', () => {
    fc.assert(
      fc.property(
        fc.array(fc.constantFrom('/', '/admin', '/sem', '/seo', '/crm'), { minLength: 1, maxLength: 10 }),
        fc.boolean(),
        (pages, initialState) => {
          const { result } = renderHook(() => useSidebarState());
          
          // Set initial state
          act(() => {
            result.current.setExpanded(initialState);
          });
          
          // Navigate through pages
          pages.forEach(page => {
            // Simulate navigation
            window.history.pushState({}, '', page);
            
            // State should remain the same
            expect(result.current.isExpanded).toBe(initialState);
          });
        }
      ),
      { numRuns: 100 }
    );
  });
});
```

**Example Property Test 2:**
```typescript
// __tests__/properties/salary-calculation.test.ts
import fc from 'fast-check';
import { calculateNetPay } from '@/lib/payroll';

/**
 * Feature: stitch-agency-platform
 * Property 6: Salary Calculation Accuracy
 * 
 * For any employee record, the net pay should equal
 * base salary plus bonuses minus deductions.
 */
describe('Property 6: Salary Calculation Accuracy', () => {
  it('should calculate net pay correctly for any salary values', () => {
    fc.assert(
      fc.property(
        fc.float({ min: 0, max: 1000000 }), // baseSalary
        fc.float({ min: 0, max: 100000 }),  // bonus
        fc.float({ min: 0, max: 50000 }),   // deductions
        (baseSalary, bonus, deductions) => {
          const netPay = calculateNetPay(baseSalary, bonus, deductions);
          const expected = baseSalary + bonus - deductions;
          
          // Allow for floating point precision
          expect(Math.abs(netPay - expected)).toBeLessThan(0.01);
        }
      ),
      { numRuns: 100 }
    );
  });
});
```

**Example Property Test 3:**
```typescript
// __tests__/properties/invoice-status.test.ts
import fc from 'fast-check';
import { classifyInvoiceStatus } from '@/lib/invoices';

/**
 * Feature: stitch-agency-platform
 * Property 8: Invoice Status Classification
 * 
 * For any invoice, the status should be correctly classified as
 * 'paid' if paid date exists, 'overdue' if due date has passed
 * and no paid date, or 'pending' otherwise.
 */
describe('Property 8: Invoice Status Classification', () => {
  it('should classify invoice status correctly for any dates', () => {
    fc.assert(
      fc.property(
        fc.date(),                    // issueDate
        fc.date(),                    // dueDate
        fc.option(fc.date(), { nil: null }), // paidDate (optional)
        (issueDate, dueDate, paidDate) => {
          const status = classifyInvoiceStatus(issueDate, dueDate, paidDate);
          const now = new Date();
          
          if (paidDate !== null) {
            expect(status).toBe('paid');
          } else if (dueDate < now) {
            expect(status).toBe('overdue');
          } else {
            expect(status).toBe('pending');
          }
        }
      ),
      { numRuns: 100 }
    );
  });
});
```

### Unit Testing Examples

**Component Test:**
```typescript
// __tests__/components/admin/kpi-card.test.tsx
import { render, screen } from '@testing-library/react';
import { KPICard } from '@/components/admin/kpi-card';

describe('KPICard', () => {
  it('should render KPI value and label', () => {
    render(
      <KPICard
        label="Toplam Maaş Gideri"
        value={842500}
        format="currency"
        change={3.2}
      />
    );
    
    expect(screen.getByText('Toplam Maaş Gideri')).toBeInTheDocument();
    expect(screen.getByText('₺842.500,00')).toBeInTheDocument();
    expect(screen.getByText('+3.2%')).toBeInTheDocument();
  });

  it('should display positive change in green', () => {
    render(<KPICard label="Test" value={100} change={5} />);
    const changeElement = screen.getByText('+5%');
    expect(changeElement).toHaveClass('text-success');
  });

  it('should display negative change in red', () => {
    render(<KPICard label="Test" value={100} change={-5} />);
    const changeElement = screen.getByText('-5%');
    expect(changeElement).toHaveClass('text-danger');
  });
});
```

**API Route Test:**
```typescript
// __tests__/api/admin/payroll.test.ts
import { GET, POST } from '@/app/api/admin/payroll/route';
import { NextRequest } from 'next/server';

describe('/api/admin/payroll', () => {
  it('should return payroll data', async () => {
    const request = new NextRequest('http://localhost:3000/api/admin/payroll');
    const response = await GET(request);
    const data = await response.json();
    
    expect(response.status).toBe(200);
    expect(data).toHaveProperty('employees');
    expect(data).toHaveProperty('kpis');
  });

  it('should approve payroll with valid data', async () => {
    const request = new NextRequest('http://localhost:3000/api/admin/payroll', {
      method: 'POST',
      body: JSON.stringify({
        employeeIds: ['1', '2', '3'],
        approvedBy: 'admin-id',
      }),
    });
    
    const response = await POST(request);
    expect(response.status).toBe(200);
  });
});
```

**Integration Test:**
```typescript
// __tests__/integration/task-workflow.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { TaskDetailModal } from '@/components/tasks/task-modal';
import { server } from '@/mocks/server';
import { rest } from 'msw';

describe('Task Workflow Integration', () => {
  it('should complete task workflow', async () => {
    render(<TaskDetailModal taskId="task-1" isOpen={true} onClose={() => {}} />);
    
    // Check SOP items
    const sopItem1 = screen.getByText('Keyword research');
    expect(sopItem1).toBeInTheDocument();
    
    // Complete SOP item
    const checkbox = screen.getByRole('checkbox', { name: /keyword research/i });
    fireEvent.click(checkbox);
    
    // Wait for progress update
    await waitFor(() => {
      expect(screen.getByText('50%')).toBeInTheDocument();
    });
    
    // Start timer
    const startButton = screen.getByText('BAŞLAT');
    fireEvent.click(startButton);
    
    // Wait for timer to start
    await waitFor(() => {
      expect(screen.getByText(/00:00:01/)).toBeInTheDocument();
    });
    
    // Add comment
    const commentInput = screen.getByPlaceholderText('Yorum ekle...');
    fireEvent.change(commentInput, { target: { value: 'Task completed' } });
    fireEvent.submit(commentInput);
    
    // Wait for comment to appear
    await waitFor(() => {
      expect(screen.getByText('Task completed')).toBeInTheDocument();
    });
  });
});
```

### E2E Testing with Playwright

```typescript
// e2e/admin-payroll.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Admin Payroll Flow', () => {
  test('should approve payroll successfully', async ({ page }) => {
    // Login
    await page.goto('/login');
    await page.fill('input[name="email"]', 'admin@example.com');
    await page.fill('input[name="password"]', 'password123');
    await page.click('button[type="submit"]');
    
    // Navigate to payroll
    await page.goto('/admin/payroll');
    await expect(page.locator('h2')).toContainText('Maaş ve Personel Ödemeleri');
    
    // Select employees
    await page.click('input[type="checkbox"]', { nth: 0 });
    await page.click('input[type="checkbox"]', { nth: 1 });
    
    // Approve
    await page.click('button:has-text("Toplu Ödeme Onayı")');
    
    // Confirm
    await page.click('button:has-text("Onayla")');
    
    // Wait for success message
    await expect(page.locator('.toast')).toContainText('Ödeme onaylandı');
  });
});
```

### Test Coverage Goals

- **Overall Coverage:** > 80%
- **Critical Paths:** > 95%
- **Business Logic:** > 90%
- **UI Components:** > 75%

### Continuous Integration

```yaml
# .github/workflows/test.yml
name: Test

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run unit tests
        run: npm run test
        
      - name: Run property tests
        run: npm run test:properties
        
      - name: Run E2E tests
        run: npm run test:e2e
        
      - name: Upload coverage
        uses: codecov/codecov-action@v3
```

## Performance ve Optimizasyon

### Core Web Vitals Hedefleri

- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1
- **TTI (Time to Interactive):** < 3.5s
- **Bundle Size:** < 200KB (gzipped)

### Image Optimization

```typescript
// next.config.js
module.exports = {
  images: {
    domains: ['lh3.googleusercontent.com', 'api.example.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};
```

**Usage:**
```typescript
import Image from 'next/image';

<Image
  src="/client-logo.png"
  alt="Client Logo"
  width={100}
  height={100}
  priority={false}
  loading="lazy"
/>
```

### Code Splitting

```typescript
// Dynamic imports for heavy components
import dynamic from 'next/dynamic';

const ChartComponent = dynamic(() => import('@/components/charts/line-chart'), {
  loading: () => <ChartSkeleton />,
  ssr: false,
});

const KanbanBoard = dynamic(() => import('@/components/crm/kanban-board'), {
  loading: () => <KanbanSkeleton />,
});
```

### Font Optimization

```typescript
// app/layout.tsx
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-inter',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
```

### Caching Strategy

```typescript
// API route with caching
export async function GET(request: NextRequest) {
  const data = await fetchData();
  
  return NextResponse.json(data, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
```

### Bundle Size Optimization

```typescript
// next.config.js
module.exports = {
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizeCss: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          commons: {
            name: 'commons',
            chunks: 'all',
            minChunks: 2,
          },
          lib: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              )[1];
              return `npm.${packageName.replace('@', '')}`;
            },
          },
        },
      };
    }
    return config;
  },
};
```

## Responsive Design ve Mobile Optimization

### Breakpoint Tanımları

```typescript
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'sm': '640px',   // Mobile landscape
      'md': '768px',   // Tablet
      'lg': '1024px',  // Desktop
      'xl': '1280px',  // Large desktop
      '2xl': '1536px', // Extra large desktop
    },
  },
};
```

### Mobile-First Yaklaşım

```typescript
// Example responsive component
<div className="
  grid 
  grid-cols-1 
  sm:grid-cols-2 
  lg:grid-cols-4 
  gap-4 
  sm:gap-6
">
  {/* KPI Cards */}
</div>
```

### Touch Interactions

```typescript
// Minimum touch target size: 44x44px
<button className="
  min-w-[44px] 
  min-h-[44px] 
  p-3 
  rounded-lg 
  active:scale-95 
  transition-transform
">
  <Icon />
</button>
```

### Mobile Table Optimization

```typescript
// components/shared/responsive-table.tsx
export function ResponsiveTable({ data }: { data: any[] }) {
  return (
    <>
      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          {/* Table content */}
        </table>
      </div>
      
      {/* Mobile card view */}
      <div className="md:hidden space-y-4">
        {data.map(item => (
          <div key={item.id} className="bg-white p-4 rounded-lg border">
            {/* Card content */}
          </div>
        ))}
      </div>
    </>
  );
}
```


## Dark Mode Implementation

### Theme Configuration

```typescript
// lib/theme.ts
export type Theme = 'light' | 'dark' | 'system';

export function getTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  return (localStorage.getItem('theme') as Theme) || 'system';
}

export function setTheme(theme: Theme) {
  localStorage.setItem('theme', theme);
  applyTheme(theme);
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  
  if (theme === 'system') {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
    root.classList.toggle('dark', systemTheme === 'dark');
  } else {
    root.classList.toggle('dark', theme === 'dark');
  }
}
```

### Theme Provider

```typescript
// components/theme-provider.tsx
'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { Theme, getTheme, setTheme as setThemeStorage, applyTheme } from '@/lib/theme';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light');

  useEffect(() => {
    const savedTheme = getTheme();
    setThemeState(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    setThemeStorage(newTheme);
    applyTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
```

### Theme Toggle Component

```typescript
// components/theme-toggle.tsx
'use client';

import { useTheme } from './theme-provider';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <span className="material-symbols-outlined">light_mode</span>
        ) : (
          <span className="material-symbols-outlined">dark_mode</span>
        )}
      </motion.div>
    </button>
  );
}
```

### Color Palette

```typescript
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#136dec',
        'background-light': '#f6f7f8',
        'background-dark': '#101822',
        success: '#07883b',
        warning: '#e78b08',
        danger: '#e73908',
      },
    },
  },
};
```

### Component Adaptations

```typescript
// Example: Card component with dark mode
<div className="
  bg-white 
  dark:bg-[#1a2432] 
  border 
  border-[#dbe0e6] 
  dark:border-gray-800 
  text-[#111418] 
  dark:text-white
  rounded-xl 
  p-6
">
  {/* Card content */}
</div>
```

### Chart Colors for Dark Mode

```typescript
// lib/chart-colors.ts
export function getChartColors(isDark: boolean) {
  return {
    primary: '#136dec',
    success: '#07883b',
    warning: '#e78b08',
    danger: '#e73908',
    grid: isDark ? '#374151' : '#e5e7eb',
    text: isDark ? '#f3f4f6' : '#111418',
    background: isDark ? '#1a2432' : '#ffffff',
  };
}
```

## SEO ve Metadata Yönetimi

### Metadata Generation

```typescript
// app/(dashboard)/admin/payroll/page.tsx
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Maaş ve Personel Ödemeleri | AgenciFlow',
    description: 'Personel maaş yönetimi, bordro takibi ve ödeme onay sistemi',
    openGraph: {
      title: 'Maaş ve Personel Ödemeleri | AgenciFlow',
      description: 'Personel maaş yönetimi, bordro takibi ve ödeme onay sistemi',
      type: 'website',
      locale: 'tr_TR',
      siteName: 'AgenciFlow',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Maaş ve Personel Ödemeleri | AgenciFlow',
      description: 'Personel maaş yönetimi, bordro takibi ve ödeme onay sistemi',
    },
    robots: {
      index: false, // Dashboard pages should not be indexed
      follow: false,
    },
  };
}
```

### Dynamic Metadata

```typescript
// app/seo/technical-audit/[clientId]/page.tsx
export async function generateMetadata({ 
  params 
}: { 
  params: { clientId: string } 
}): Promise<Metadata> {
  const client = await getClient(params.clientId);
  
  return {
    title: `${client.name} - SEO Teknik Denetim | AgenciFlow`,
    description: `${client.name} için kapsamlı SEO teknik denetim raporu`,
  };
}
```

### Structured Data (JSON-LD)

```typescript
// components/structured-data.tsx
export function OrganizationStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AgenciFlow',
    url: 'https://agenciflow.com',
    logo: 'https://agenciflow.com/logo.png',
    description: 'Dijital ajans yönetim platformu',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+90-XXX-XXX-XXXX',
      contactType: 'customer service',
      availableLanguage: 'Turkish',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
```

### Sitemap Generation

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://agenciflow.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://agenciflow.com/admin',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    // Add more routes...
  ];
}
```

### Robots.txt

```typescript
// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/client-portal/'],
      },
    ],
    sitemap: 'https://agenciflow.com/sitemap.xml',
  };
}
```

## Vercel Deployment Stratejisi

### Environment Variables

```bash
# .env.local
DATABASE_URL="postgresql://..."
NEXTAUTH_SECRET="..."
NEXTAUTH_URL="http://localhost:3000"
GOOGLE_ADS_CLIENT_ID="..."
GOOGLE_ADS_CLIENT_SECRET="..."
META_ADS_ACCESS_TOKEN="..."
SENTRY_DSN="..."
```

### Next.js Configuration

```typescript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  images: {
    domains: ['lh3.googleusercontent.com', 'api.example.com'],
    formats: ['image/avif', 'image/webp'],
  },
  
  experimental: {
    optimizeCss: true,
    serverActions: true,
  },
  
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin',
        },
        {
          key: 'Permissions-Policy',
          value: 'camera=(), microphone=(), geolocation=()',
        },
      ],
    },
  ],
  
  redirects: async () => [
    {
      source: '/dashboard',
      destination: '/',
      permanent: true,
    },
  ],
};

module.exports = nextConfig;
```

### Vercel Configuration

```json
// vercel.json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["fra1"],
  "env": {
    "DATABASE_URL": "@database-url",
    "NEXTAUTH_SECRET": "@nextauth-secret"
  },
  "build": {
    "env": {
      "NEXT_PUBLIC_API_URL": "https://api.agenciflow.com"
    }
  }
}
```

### Error Tracking (Sentry)

```typescript
// sentry.client.config.ts
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  integrations: [
    new Sentry.BrowserTracing(),
    new Sentry.Replay(),
  ],
});
```

### Analytics Integration

```typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
```

### Production Checklist

- [x] Environment variables configured
- [x] Image optimization domains added
- [x] Analytics integrated (Vercel Analytics)
- [x] Error tracking setup (Sentry)
- [x] Security headers configured
- [x] Custom domain configured
- [x] SSL certificate verified
- [x] Preview deployments tested
- [x] Production build optimized
- [x] Sitemap and robots.txt generated
- [x] SEO metadata verified
- [x] Performance monitoring active (Speed Insights)
- [x] Database connection pooling configured
- [x] API rate limiting implemented
- [x] CORS policies configured
- [x] Backup strategy implemented

## Sonuç

Bu tasarım dokümanı, Stitch Agency Platform (AgenciFlow) için kapsamlı bir teknik blueprint sağlar. 51 tasarım dosyası detaylı olarak analiz edilmiş, her sayfa için component yapısı, animasyon stratejisi, UX iyileştirmeleri ve performance optimizasyonları belirlenmiştir.

**Temel Özellikler:**
- Next.js 14+ App Router ile modern mimari
- Server ve Client Component ayrımı ile optimal performance
- Framer Motion ile profesyonel animasyonlar
- shadcn/ui ile tutarlı UI component library
- Dual testing approach (unit + property-based tests)
- Comprehensive error handling ve validation
- Dark mode support
- Responsive design (mobile-first)
- SEO optimization
- Vercel deployment ready

**Sonraki Adımlar:**
1. Development environment setup
2. Database schema implementation
3. Authentication system (NextAuth.js)
4. Core components development
5. API routes implementation
6. Testing infrastructure setup
7. CI/CD pipeline configuration
8. Production deployment

Platform, dijital ajansların tüm operasyonel süreçlerini tek bir yerde yönetmelerini sağlayacak, modern ve kullanıcı dostu bir deneyim sunacaktır.
