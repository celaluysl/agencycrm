# Requirements Document

## Introduction

Bu doküman, 51 farklı tasarım dosyasını (HTML + PNG) baz alarak geliştirilecek Türkçe dijital ajans yönetim platformu için detaylı gereksinimleri tanımlar. Platform, Next.js App Router, Tailwind CSS, shadcn/ui, ve Framer Motion kullanarak modern, performanslı ve kullanıcı dostu bir deneyim sunacaktır.

**Proje Adı**: stitch-agency-platform  
**Teknik Stack**: Next.js 14+ (App Router), Tailwind CSS, shadcn/ui (Radix UI), Framer Motion, Vercel  
**Tasarım Dosyaları**: stitch_downloads/ klasöründe 51 adet HTML ve PNG dosyası

## Glossary

- **Platform**: AgenciFlow dijital ajans yönetim sistemi
- **Admin_Dashboard**: Ajans yöneticileri için muhasebe, finans, personel yönetimi panelleri
- **Client_Portal**: Müşterilerin projelerini, raporlarını ve onay süreçlerini takip ettiği portal
- **SEM_Module**: Arama motoru reklamcılığı (Google Ads, Meta Ads) yönetim modülü
- **SEO_Module**: Arama motoru optimizasyonu, rank tracking, teknik denetim modülü
- **Social_Media_Module**: Sosyal medya içerik yönetimi, onay merkezi, portföy yönetimi
- **CRM_Module**: Müşteri ilişkileri yönetimi, leads kanban board, satış süreçleri
- **Task_Management**: Görev yönetimi, SOP kontrol listeleri, zaman takibi
- **Approval_Center**: Müşteri onay merkezi, revizyon yönetimi
- **Performance_Dashboard**: Kişisel performans ve verimlilik paneli
- **Server_Component**: Next.js sunucu tarafında render edilen component
- **Client_Component**: Tarayıcıda interaktif olarak çalışan component
- **LCP**: Largest Contentful Paint - Core Web Vitals metriği
- **CLS**: Cumulative Layout Shift - Core Web Vitals metriği
- **Staggered_Animation**: Framer Motion ile sıralı animasyon efekti

---

## Requirements

### Requirement 1: Platform Layout ve Navigation Sistemi

**User Story:** Bir ajans çalışanı olarak, farklı departmanlar ve roller arasında kolayca geçiş yapabilmek istiyorum, böylece iş akışım kesintisiz devam eder.

#### Acceptance Criteria

1. THE Platform SHALL implement a responsive sidebar navigation with collapsible menu items
2. WHEN a user navigates between pages, THE Platform SHALL preserve the sidebar state (expanded/collapsed)
3. THE Platform SHALL display role-based navigation items (Admin, SEO, SEM, Social Media, CRM, Client)
4. WHEN a user is on a specific page, THE Platform SHALL highlight the active navigation item with visual feedback
5. THE Platform SHALL implement a sticky header with user profile, notifications, and quick actions
6. THE Platform SHALL support dark mode toggle with persistent user preference
7. WHEN viewport width is below 768px, THE Platform SHALL convert sidebar to mobile drawer navigation
8. THE Platform SHALL implement breadcrumb navigation for deep page hierarchies

### Requirement 2: Admin Dashboard - Muhasebe ve Finans Modülü

**User Story:** Bir finans müdürü olarak, personel maaşları, faturalar, cari hesaplar ve prim ödemelerini tek bir yerden yönetmek istiyorum.

#### Acceptance Criteria

1. THE Admin_Dashboard SHALL display real-time financial KPI cards (total salary, bonuses, taxes, benefits)
2. WHEN viewing payroll panel, THE Admin_Dashboard SHALL list all employees with salary breakdown (base, bonus, deductions, net)
3. THE Admin_Dashboard SHALL support bulk payment approval with checkbox selection
4. WHEN generating bank payment file, THE Admin_Dashboard SHALL export in Excel and CSV formats
5. THE Admin_Dashboard SHALL display salary distribution pie chart by department
6. THE Admin_Dashboard SHALL implement client account tracking with debit/credit/balance columns
7. WHEN viewing invoice management, THE Admin_Dashboard SHALL show invoice status (paid, pending, overdue)
8. THE Admin_Dashboard SHALL send automatic payment reminders for overdue invoices
9. THE Admin_Dashboard SHALL display commission tracking with earned/approved/paid status
10. WHEN commission payment date arrives, THE Admin_Dashboard SHALL highlight eligible commissions
11. THE Admin_Dashboard SHALL implement client health scoring based on payment history and project performance

### Requirement 3: Client Portal Dashboard

**User Story:** Bir müşteri olarak, projelerimin durumunu, raporlarımı ve onay bekleyen işleri kolayca görmek istiyorum.

#### Acceptance Criteria

1. THE Client_Portal SHALL display project progress percentage with visual progress bar
2. THE Client_Portal SHALL show active service cards (SEO, SEM, Social Media, Web Design) with status badges
3. WHEN viewing dashboard, THE Client_Portal SHALL display latest shared reports with download links
4. THE Client_Portal SHALL show pending approval count with prominent badge
5. THE Client_Portal SHALL display assigned account manager with contact information
6. WHEN clicking service card, THE Client_Portal SHALL navigate to detailed service page
7. THE Client_Portal SHALL implement support ticket system with chat-like interface
8. THE Client_Portal SHALL display real-time metrics (ad spend, SEO score, follower count)

### Requirement 4: SEM Operasyon Paneli ve Görev Yönetimi

**User Story:** Bir SEM uzmanı olarak, tüm reklam hesaplarımı, görevlerimi ve müşteri durumlarını tek bir panelden yönetmek istiyorum.

#### Acceptance Criteria

1. THE SEM_Module SHALL display aggregated metrics (total ad spend, average CPC, conversions, ROAS)
2. THE SEM_Module SHALL implement task list with priority levels (high, medium, low)
3. WHEN a task is in progress, THE SEM_Module SHALL display active timer with elapsed time
4. THE SEM_Module SHALL show customer ad status table with budget usage percentage
5. THE SEM_Module SHALL implement critical alerts section for high CPA increases or budget issues
6. WHEN viewing customer portfolio, THE SEM_Module SHALL display account health indicators
7. THE SEM_Module SHALL show completed tasks in collapsible section with completion dates
8. THE SEM_Module SHALL integrate with Google Ads API for real-time data sync
9. THE SEM_Module SHALL display report status with overdue warnings

### Requirement 5: Sosyal Medya Portföy ve İçerik Yönetimi

**User Story:** Bir sosyal medya uzmanı olarak, tüm müşteri hesaplarını, içerik hedeflerini ve paylaşım planlarını yönetmek istiyorum.

#### Acceptance Criteria

1. THE Social_Media_Module SHALL display portfolio table with client accounts, platforms, and posting targets
2. THE Social_Media_Module SHALL show posting target progress with percentage and visual bar
3. WHEN viewing portfolio, THE Social_Media_Module SHALL display average engagement rate with trend indicator
4. THE Social_Media_Module SHALL implement health status badges (stable, needs attention, critical)
5. THE Social_Media_Module SHALL show pending approvals section with customer feedback status
6. THE Social_Media_Module SHALL display active task timer for content creation
7. WHEN filtering portfolio, THE Social_Media_Module SHALL support sector, channel, and approval status filters
8. THE Social_Media_Module SHALL show completed tasks archive with completion dates

### Requirement 6: Sosyal Medya Onay Merkezi

**User Story:** Bir müşteri olarak, sosyal medya içeriklerini önizleyip onaylamak veya revize istemek istiyorum.

#### Acceptance Criteria

1. THE Approval_Center SHALL display content preview with full-size image/video player
2. THE Approval_Center SHALL show content metadata (caption, hashtags, scheduled date, platforms)
3. WHEN viewing content, THE Approval_Center SHALL display remaining revision quota (e.g., 3/5)
4. THE Approval_Center SHALL provide approve and request revision buttons with clear visual hierarchy
5. WHEN requesting revision, THE Approval_Center SHALL provide textarea for detailed feedback
6. THE Approval_Center SHALL show content list sidebar with thumbnail previews
7. THE Approval_Center SHALL highlight selected content with border and background color
8. WHEN content is approved, THE Approval_Center SHALL update status and notify creative team
9. THE Approval_Center SHALL display platform icons (Instagram, Facebook, TikTok) for multi-platform posts

### Requirement 7: SEO Rank Tracking ve Yayıncı Envanteri

**User Story:** Bir SEO uzmanı olarak, anahtar kelime sıralamalarını takip etmek ve backlink yayıncı envanterini yönetmek istiyorum.

#### Acceptance Criteria

1. THE SEO_Module SHALL display publisher inventory table with DR, traffic, spam score, and price
2. THE SEO_Module SHALL implement advanced filters (DR range, traffic threshold, price scale, agency)
3. WHEN hovering over agency contact, THE SEO_Module SHALL display tooltip with contact information
4. THE SEO_Module SHALL show aggregated stats (total publishers, active orders, monthly spend, average DR)
5. THE SEO_Module SHALL implement pagination with page numbers and navigation buttons
6. THE SEO_Module SHALL provide "Buy" button for each publisher with purchase workflow
7. THE SEO_Module SHALL display category badges for publisher classification
8. THE SEO_Module SHALL support search functionality for publisher name or category

### Requirement 8: SEO Teknik Denetim Raporu

**User Story:** Bir SEO uzmanı olarak, kapsamlı teknik SEO denetim raporu oluşturmak ve müşteriye sunmak istiyorum.

#### Acceptance Criteria

1. THE SEO_Module SHALL display overall SEO score with circular progress indicator
2. THE SEO_Module SHALL analyze image alt tags with total/tagged/missing counts
3. WHEN detecting missing alt tags, THE SEO_Module SHALL list problematic images with thumbnails
4. THE SEO_Module SHALL display heading hierarchy tree (H1, H2, H3) with nesting visualization
5. THE SEO_Module SHALL highlight heading structure errors (duplicate H2, missing hierarchy)
6. THE SEO_Module SHALL show Core Web Vitals metrics (LCP, CLS, FID) with good/needs improvement/poor status
7. THE SEO_Module SHALL display PageSpeed scores with visual progress bars
8. THE SEO_Module SHALL validate Schema.org JSON-LD markup with code preview
9. THE SEO_Module SHALL provide PDF export functionality for client reports
10. THE SEO_Module SHALL display breadcrumb structure validation

### Requirement 9: CRM Leads Kanban Board

**User Story:** Bir satış temsilcisi olarak, potansiyel müşterileri kanban board üzerinde yönetmek ve satış sürecini takip etmek istiyorum.

#### Acceptance Criteria

1. THE CRM_Module SHALL implement drag-and-drop kanban board with columns (new, contacted, proposal sent, potential, won, lost)
2. THE CRM_Module SHALL display high-value opportunities section at top with quick action buttons
3. WHEN viewing lead card, THE CRM_Module SHALL show potential value, source, and status
4. THE CRM_Module SHALL implement column headers with lead count badges
5. THE CRM_Module SHALL support card drag between columns with smooth animation
6. THE CRM_Module SHALL display won leads with green border and verified icon
7. THE CRM_Module SHALL show lost leads with grayscale effect and cancel icon
8. WHEN adding new lead, THE CRM_Module SHALL provide modal form with required fields
9. THE CRM_Module SHALL implement source filter (LinkedIn, referral, website, email, ads)

### Requirement 10: Görev Detay ve SOP Modal

**User Story:** Bir ekip üyesi olarak, görev detaylarını görmek, SOP kontrol listesini takip etmek ve zaman kaydı yapmak istiyorum.

#### Acceptance Criteria

1. THE Task_Management SHALL display task detail modal with full-screen overlay
2. THE Task_Management SHALL show SOP checklist with progress percentage and visual bar
3. WHEN checking SOP item, THE Task_Management SHALL update progress percentage in real-time
4. THE Task_Management SHALL implement active timer with start/pause/stop controls
5. THE Task_Management SHALL display task metadata (assigned to, start date, end date, priority)
6. THE Task_Management SHALL show activity feed with comments and mentions (@username)
7. WHEN adding comment, THE Task_Management SHALL support file attachments
8. THE Task_Management SHALL display task attachments with file name and size
9. THE Task_Management SHALL provide "Mark as Complete" button with confirmation
10. THE Task_Management SHALL support manual time entry for offline work

### Requirement 11: Sosyal Medya Proje Kanban Panosu

**User Story:** Bir sosyal medya uzmanı olarak, içerik üretim sürecini kanban board üzerinde yönetmek istiyorum.

#### Acceptance Criteria

1. THE Social_Media_Module SHALL implement kanban board with columns (ideas, design/editing, customer approval, scheduled/published)
2. THE Social_Media_Module SHALL display project header with client logo, campaign progress, and team members
3. WHEN viewing task card, THE Social_Media_Module SHALL show content type badge (story, post, reels)
4. THE Social_Media_Module SHALL display estimated time and assigned person on each card
5. THE Social_Media_Module SHALL show active timer widget at bottom-right corner with pause/stop buttons
6. THE Social_Media_Module SHALL implement drag-and-drop between columns with visual feedback
7. THE Social_Media_Module SHALL display completed tasks with strikethrough text and grayscale effect
8. WHEN task is in progress, THE Social_Media_Module SHALL show active timer on card
9. THE Social_Media_Module SHALL show monthly content target progress in header

### Requirement 12: Kişisel Performans ve Verimlilik Paneli

**User Story:** Bir ekip üyesi olarak, kişisel performansımı, verimlilik skorumu ve gelişim alanlarımı görmek istiyorum.

#### Acceptance Criteria

1. THE Performance_Dashboard SHALL display KPI cards (completed tasks, average completion time, satisfaction score, goal achievement)
2. THE Performance_Dashboard SHALL show weekly productivity chart (time spent vs. value produced)
3. THE Performance_Dashboard SHALL display client-based effort distribution with donut chart
4. THE Performance_Dashboard SHALL show badges and achievements with locked/unlocked status
5. THE Performance_Dashboard SHALL implement growth areas table with efficiency ratings
6. WHEN viewing growth areas, THE Performance_Dashboard SHALL provide AI-powered improvement suggestions
7. THE Performance_Dashboard SHALL display comparison with previous period (percentage change)
8. THE Performance_Dashboard SHALL show badge progress with visual indicators
9. THE Performance_Dashboard SHALL support time period filter (last 7 days, 30 days, 90 days)

### Requirement 13: Müşteri Sağlık ve Karlılık Analizi

**User Story:** Bir ajans yöneticisi olarak, müşteri segmentasyonu, sağlık skorları ve karlılık analizini görmek istiyorum.

#### Acceptance Criteria

1. THE Admin_Dashboard SHALL display customer segments (VIP, risky, new acquired) with count and value
2. THE Admin_Dashboard SHALL show customer health score table with payment regularity and operational success
3. THE Admin_Dashboard SHALL implement health score calculation based on service duration, payment, and performance
4. THE Admin_Dashboard SHALL display AI-powered cross-sell opportunity map with match percentage
5. WHEN viewing opportunities, THE Admin_Dashboard SHALL provide "Create Proposal" button
6. THE Admin_Dashboard SHALL show project-based profit/loss analysis with margin percentages
7. THE Admin_Dashboard SHALL highlight highest profit and loss projects with color coding
8. THE Admin_Dashboard SHALL display customer avatars in VIP segment card
9. THE Admin_Dashboard SHALL implement customer search and filter functionality

### Requirement 14: Framer Motion Animasyon Stratejisi

**User Story:** Bir kullanıcı olarak, platformda akıcı ve profesyonel animasyonlar görmek istiyorum, böylece kullanıcı deneyimi gelişir.

#### Acceptance Criteria

1. THE Platform SHALL implement staggered list animations for table rows and card grids
2. WHEN page loads, THE Platform SHALL animate KPI cards with fade-in and slide-up effect
3. THE Platform SHALL implement hover animations for interactive elements (buttons, cards, links)
4. WHEN modal opens, THE Platform SHALL animate with scale and fade effect
5. THE Platform SHALL implement smooth page transitions between routes
6. WHEN sidebar expands/collapses, THE Platform SHALL animate with smooth width transition
7. THE Platform SHALL implement scroll-triggered animations for sections below fold
8. THE Platform SHALL use spring physics for natural-feeling animations
9. WHEN dragging kanban cards, THE Platform SHALL provide visual feedback with scale and shadow
10. THE Platform SHALL implement loading skeletons with shimmer animation

### Requirement 15: Server ve Client Component Ayrımı

**User Story:** Bir geliştirici olarak, performans optimizasyonu için server ve client componentleri doğru şekilde ayırmak istiyorum.

#### Acceptance Criteria

1. THE Platform SHALL implement dashboard layouts as Server_Component for SEO and performance
2. THE Platform SHALL implement interactive forms and modals as Client_Component
3. THE Platform SHALL implement data tables with sorting/filtering as Client_Component
4. THE Platform SHALL fetch initial data in Server_Component and pass to Client_Component
5. THE Platform SHALL implement kanban board as Client_Component for drag-and-drop
6. THE Platform SHALL implement chart components as Client_Component for interactivity
7. THE Platform SHALL use Server_Component for static content sections
8. THE Platform SHALL implement navigation sidebar as Client_Component for state management
9. THE Platform SHALL use Server_Component for metadata generation

### Requirement 16: SEO ve Metadata Yönetimi

**User Story:** Bir geliştirici olarak, her sayfa için uygun SEO metadata'sı oluşturmak istiyorum, böylece arama motoru sıralaması iyileşir.

#### Acceptance Criteria

1. THE Platform SHALL implement generateMetadata function for each route
2. THE Platform SHALL generate unique title and description for each page
3. THE Platform SHALL implement Open Graph tags for social media sharing
4. THE Platform SHALL generate Twitter Card metadata
5. THE Platform SHALL implement canonical URLs for duplicate content prevention
6. THE Platform SHALL generate structured data (JSON-LD) for organization and breadcrumbs
7. THE Platform SHALL implement dynamic metadata based on route parameters
8. THE Platform SHALL set appropriate viewport and charset meta tags
9. THE Platform SHALL implement robots meta tag for indexing control

### Requirement 17: Performans Optimizasyonu

**User Story:** Bir kullanıcı olarak, platformun hızlı yüklenmesini ve akıcı çalışmasını istiyorum.

#### Acceptance Criteria

1. THE Platform SHALL achieve LCP score below 2.5 seconds
2. THE Platform SHALL achieve CLS score below 0.1
3. THE Platform SHALL implement image optimization with Next.js Image component
4. THE Platform SHALL use lazy loading for below-fold images
5. THE Platform SHALL implement code splitting for route-based chunks
6. THE Platform SHALL use dynamic imports for heavy components
7. THE Platform SHALL implement font optimization with next/font
8. THE Platform SHALL minimize JavaScript bundle size below 200KB (gzipped)
9. THE Platform SHALL implement caching strategy for static assets
10. THE Platform SHALL use Suspense boundaries for streaming SSR

### Requirement 18: Responsive Design ve Mobile Optimization

**User Story:** Bir kullanıcı olarak, platformu mobil cihazlarda da rahatça kullanmak istiyorum.

#### Acceptance Criteria

1. THE Platform SHALL implement responsive breakpoints (mobile: 640px, tablet: 768px, desktop: 1024px, xl: 1280px)
2. WHEN viewport is mobile, THE Platform SHALL convert sidebar to drawer navigation
3. THE Platform SHALL implement touch-friendly button sizes (minimum 44x44px)
4. THE Platform SHALL optimize table layouts for mobile with horizontal scroll or card view
5. THE Platform SHALL implement responsive grid layouts with Tailwind CSS
6. THE Platform SHALL optimize modal sizes for mobile viewports
7. THE Platform SHALL implement mobile-friendly form inputs with appropriate input types
8. THE Platform SHALL test on iOS Safari and Chrome Android for compatibility
9. THE Platform SHALL implement swipe gestures for mobile kanban board

### Requirement 19: Dark Mode Implementation

**User Story:** Bir kullanıcı olarak, göz yorgunluğunu azaltmak için dark mode kullanmak istiyorum.

#### Acceptance Criteria

1. THE Platform SHALL implement dark mode toggle in header
2. THE Platform SHALL persist dark mode preference in localStorage
3. THE Platform SHALL apply dark mode classes to all components
4. THE Platform SHALL use Tailwind dark: variant for dark mode styles
5. THE Platform SHALL implement smooth transition between light and dark modes
6. THE Platform SHALL ensure sufficient contrast ratios in dark mode (WCAG AA)
7. THE Platform SHALL optimize chart colors for dark mode visibility
8. THE Platform SHALL implement system preference detection on first visit
9. THE Platform SHALL update meta theme-color based on mode

### Requirement 20: Vercel Deployment ve Production Checklist

**User Story:** Bir geliştirici olarak, platformu Vercel'e sorunsuz deploy etmek istiyorum.

#### Acceptance Criteria

1. THE Platform SHALL configure next.config.js for production optimization
2. THE Platform SHALL implement environment variables for API keys and secrets
3. THE Platform SHALL configure Vercel Analytics for performance monitoring
4. THE Platform SHALL implement error boundary components for graceful error handling
5. THE Platform SHALL configure custom 404 and 500 error pages
6. THE Platform SHALL implement security headers (CSP, X-Frame-Options, HSTS)
7. THE Platform SHALL configure image optimization domains in next.config.js
8. THE Platform SHALL implement sitemap.xml generation
9. THE Platform SHALL configure robots.txt for SEO
10. THE Platform SHALL implement monitoring and logging for production errors
11. THE Platform SHALL configure preview deployments for pull requests
12. THE Platform SHALL implement CI/CD pipeline with automated tests

---

## Özel Gereksinimler ve Notlar

### Tasarım Dosyaları Analizi

Platform, 51 farklı tasarım dosyasından oluşmaktadır:

**Admin Dashboard Varyasyonları (19 dosya):**
- Maaş ve Personel Ödemeleri Paneli
- Müşteri Cari Hesap Takibi
- Prim Hakediş Raporu (Toplu Ödeme Destekli)
- Fatura ve Tahsilat Takip Merkezi
- Müşteri Sağlık ve Karlılık Analizi

**Client Portal Varyasyonları (4 dosya):**
- SEM Operasyon Paneli (Görev Yönetimli)
- Sosyal Medya Müşteri Portföyü
- Raporlama Destekli Sosyal Medya Paneli
- Müşteri Portalı Kontrol Paneli

**Client Detail Master Pages (7 dosya):**
- Destek Talebi Yönetimi
- Müşteri Portalı Dashboard
- Müşteri Onay Merkezi

**SEO Modülü (5 dosya):**
- Rank Tracking Center
- Tanıtım Yazısı Yayıncı Envanteri
- Kapsamlı SEO Teknik Denetim Raporu
- Teknik SEO Analiz ve Sorgu Paneli

**CRM Modülü (4 dosya):**
- Leads Kanban Board (Yüksek Değer Odaklı)

**Task Management (3 dosya):**
- Task Detail & SOP Modal
- Sosyal Medya Görev Detay ve SOP Paneli

**SEM Modülü (3 dosya):**
- SEM Müşteri Portföy Yönetimi
- SEM Proje ve Görev Detayı (Kanban)

**Sosyal Medya Modülü (2 dosya):**
- Sosyal Medya Onay Merkezi

**Performans Paneli (1 dosya):**
- Kişisel Performans ve Verimlilik Paneli

### Reusable Component Library

Platform aşağıdaki shadcn/ui componentlerini kullanacaktır:

- Button, Input, Textarea, Select, Checkbox, Radio Group
- Dialog, Sheet, Popover, Tooltip, Dropdown Menu
- Table, Card, Badge, Avatar, Separator
- Tabs, Accordion, Collapsible
- Progress, Skeleton, Spinner
- Calendar, Date Picker
- Command, Combobox
- Toast, Alert, Alert Dialog

### Tailwind CSS Özel Konfigürasyonu

```javascript
colors: {
  primary: "#136dec",
  "background-light": "#f6f7f8",
  "background-dark": "#101822",
  success: "#07883b",
  warning: "#e78b08",
  danger: "#e73908",
}
```

### Framer Motion Animasyon Örnekleri

**Staggered List Animation:**
```javascript
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}
```

**Modal Animation:**
```javascript
const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 }
}
```

### UX İyileştirme Önerileri

1. **Micro-interactions**: Hover, focus, active states için subtle animasyonlar
2. **Loading States**: Skeleton screens ve shimmer effects
3. **Empty States**: Boş liste/tablo durumları için illustrative placeholders
4. **Error States**: User-friendly error messages ve recovery actions
5. **Success Feedback**: Toast notifications ve success animations
6. **Keyboard Navigation**: Tab order ve keyboard shortcuts
7. **Accessibility**: ARIA labels, semantic HTML, focus management

### Performans Hedefleri

- **LCP**: < 2.5s (Good)
- **FID**: < 100ms (Good)
- **CLS**: < 0.1 (Good)
- **TTI**: < 3.5s
- **Bundle Size**: < 200KB (gzipped)
- **Lighthouse Score**: > 90 (Performance, Accessibility, Best Practices, SEO)

### Vercel Deployment Checklist

- [ ] Environment variables configured
- [ ] Image optimization domains added
- [ ] Analytics integrated
- [ ] Error tracking setup (Sentry)
- [ ] Security headers configured
- [ ] Custom domain configured
- [ ] SSL certificate verified
- [ ] Preview deployments tested
- [ ] Production build optimized
- [ ] Sitemap and robots.txt generated
- [ ] SEO metadata verified
- [ ] Performance monitoring active
