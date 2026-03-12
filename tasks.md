# İmplementasyon Planı: Stitch Agency Platform

## Genel Bakış

Bu doküman, Stitch Agency Platform (AgenciFlow) için detaylı implementasyon görevlerini içerir. Platform, Next.js 14+ App Router, TypeScript, Tailwind CSS, shadcn/ui ve Framer Motion kullanarak geliştirilecektir.

**Teknik Stack:**
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui (Radix UI)
- Framer Motion
- SWR/React Query
- Zustand (state management)
- NextAuth.js (authentication)
- Vercel (deployment)

**Toplam Modül:** 51 sayfa tasarımı
**Toplam Gereksinim:** 20 ana modül, 186 acceptance criteria

---

## Görevler

### 1. Proje Kurulumu ve Temel Konfigürasyon

- [x] 1.1 Next.js projesi oluştur ve temel yapılandırmayı yap
  - `npx create-next-app@latest` ile proje oluştur (App Router, TypeScript, Tailwind CSS, ESLint seçenekleri ile)
  - `next.config.js` dosyasını production optimizasyonları için yapılandır
  - `.env.local` dosyası oluştur ve environment variables tanımla
  - _Gereksinimler: 20.1, 20.2_

- [x] 1.2 Tailwind CSS özel konfigürasyonunu yap
  - `tailwind.config.ts` dosyasında özel renkleri tanımla (primary: #136dec, success: #07883b, vb.)
  - Dark mode için class stratejisi yapılandır
  - Responsive breakpoints ayarla (mobile: 640px, tablet: 768px, desktop: 1024px, xl: 1280px)
  - _Gereksinimler: 18.1, 19.4_

- [x] 1.3 shadcn/ui component library'yi entegre et
  - `npx shadcn-ui@latest init` komutu ile kurulum yap
  - Temel componentleri ekle: Button, Input, Card, Dialog, Table, Badge, Avatar
  - `components/ui/` klasör yapısını oluştur
  - _Gereksinimler: 1.1, 15.2_


- [ ] 1.4 TypeScript konfigürasyonunu optimize et
  - `tsconfig.json` dosyasında path aliases ayarla (@/ için)
  - Strict mode'u aktif et
  - `types/` klasörü oluştur ve temel interface'leri tanımla
  - _Gereksinimler: 15.1_

- [ ] 1.5 ESLint ve Prettier yapılandırması yap
  - `.eslintrc.json` dosyasını Next.js best practices için yapılandır
  - `.prettierrc` dosyası oluştur
  - Pre-commit hooks için Husky kurulumu yap (opsiyonel)
  - _Gereksinimler: 20.12_

- [x] 1.6 Git repository kurulumu ve initial commit
  - `.gitignore` dosyasını kontrol et (.env.local, node_modules, .next dahil)
  - README.md dosyası oluştur (proje açıklaması, kurulum adımları)
  - İlk commit'i yap
  - _Gereksinimler: 20.11_

- [x] 1.7 Framer Motion kurulumu ve animasyon utilities oluştur
  - `npm install framer-motion` komutu ile kurulum yap
  - `lib/animations.ts` dosyası oluştur ve temel animation variants tanımla
  - Staggered list, modal, page transition variants ekle
  - _Gereksinimler: 14.1, 14.2, 14.4_


### 2. Temel Mimari ve Type Definitions

- [x] 2.1 TypeScript type definitions oluştur
  - `types/database.types.ts` - Supabase üzerinden generate edildi ve tüm proje için Database modelleme sağlandı
  - _Gereksinimler: 2.2, 4.1, 5.1, 6.2, 7.1, 9.3, 10.2_

- [x] 2.2 API client ve utilities oluştur
  - `lib/api-client.ts` - Fetch wrapper ve error handling eklendi
  - `lib/supabase/client.ts` ve `server.ts` eklendi Supabase için
  - `lib/utils.ts` - Helper functions (cn, formatCurrency, formatDate) eklendi
  - `lib/constants.ts` - Sabitler (API endpoints, status options) eklendi
  - `lib/validations.ts` - Zod schemas eklendi
  - _Gereksinimler: 15.4, 20.4_


- [x] 2.3 App Router klasör yapısını oluştur
  - `app/(auth)/` - Login sayfası için route group
  - `app/(dashboard)/` - Dashboard sayfaları için route group
  - `app/client-portal/` - Müşteri portalı sayfaları
  - `app/api/` - API routes klasörü
  - Her route için `page.tsx` ve `layout.tsx` placeholder dosyaları oluştur
  - _Gereksinimler: 1.1, 15.1_

- [x] 2.4 Root layout ve global styles oluştur
  - `app/layout.tsx` - Root layout component (metadata, fonts, providers)
  - `app/globals.css` - Global CSS ve Tailwind directives
  - Font optimization için `next/font` kullan (Inter font)
  - _Gereksinimler: 16.1, 17.7_


### 3. Layout ve Navigation Sistemi

- [x] 3.1 Sidebar navigation component oluştur
  - `components/layout/sidebar.tsx` - Client Component olarak oluştur
  - Collapsible menu items implementasyonu
  - Rol bazlı navigation items (Admin, SEO, SEM, Social Media, CRM, Client)
  - Active navigation item highlighting
  - Zustand ile sidebar state management (expanded/collapsed)
  - _Gereksinimler: 1.1, 1.2, 1.3, 1.4, 15.8_

- [x] 3.2 Header component oluştur
  - `components/layout/header.tsx` - Client Component olarak oluştur
  - Sticky header implementasyonu
  - User profile dropdown
  - Notifications icon ve dropdown
  - Quick actions menu
  - Dark mode toggle button
  - _Gereksinimler: 1.5, 19.1_

- [x] 3.3 Mobile navigation drawer oluştur
  - `components/layout/mobile-nav.tsx` - Client Component olarak oluştur
  - Sheet component kullanarak drawer implementasyonu
  - 768px altında sidebar'ı drawer'a dönüştür
  - Touch-friendly button sizes (minimum 44x44px)
  - Swipe gesture support (opsiyonel)
  - _Gereksinimler: 1.7, 18.2, 18.3, 18.9_


- [x] 3.4 Breadcrumb navigation component oluştur
  - `components/layout/breadcrumb.tsx` - Server Component olarak oluştur
  - Dynamic breadcrumb generation (route params'a göre)
  - Hierarchical path display
  - _Gereksinimler: 1.8_

- [x] 3.5 Dashboard layout oluştur
  - `app/(dashboard)/layout.tsx` - Sidebar ve Header'ı içeren layout
  - Responsive grid layout (sidebar + main content)
  - Page transition animations (Framer Motion)
  - _Gereksinimler: 1.1, 14.5, 15.1_

- [x] 3.6 Dark mode provider ve theme management
  - `components/providers/theme-provider.tsx` - Theme context provider
  - localStorage'da theme preference saklama
  - System preference detection (ilk ziyaret)
  - Smooth transition between light/dark modes
  - Meta theme-color güncelleme
  - _Gereksinimler: 1.6, 19.2, 19.3, 19.5, 19.8, 19.9_


### 4. Shared Components ve UI Elements

- [x] 4.1 KPI Card component oluştur
  - `components/shared/kpi-card.tsx` - Server Component olarak oluştur
  - Value, label, change percentage, trend indicator props
  - Responsive design (mobile'da stack layout)
  - _Gereksinimler: 2.1, 4.1, 12.1_

- [x] 4.2 Data Table component oluştur
  - `components/shared/data-table.tsx` - Client Component olarak oluştur
  - Sorting, filtering, pagination support
  - shadcn/ui Table component kullan
  - Column configuration prop interface
  - Empty state ve loading skeleton
  - _Gereksinimler: 2.2, 5.1, 7.1, 15.3_

- [x] 4.3 Filter Bar component oluştur
  - `components/shared/filter-bar.tsx` - Client Component olarak oluştur
  - Multiple filter types (select, date range, search)
  - Filter chips display
  - Clear all filters button
  - _Gereksinimler: 5.7, 7.2, 9.9_


- [x] 4.4 Status Badge component oluştur
  - `components/shared/status-badge.tsx` - Server Component olarak oluştur
  - Renk kodlu status variants (success, warning, danger, info)
  - Size variants (sm, md, lg)
  - _Gereksinimler: 2.7, 3.2, 4.4, 5.4_

- [x] 4.5 Loading Skeleton component oluştur
  - `components/shared/loading-skeleton.tsx` - Server Component olarak oluştur
  - Shimmer animation effect
  - Multiple variants (card, table, list)
  - _Gereksinimler: 14.10, 17.10_

- [x] 4.6 Empty State component oluştur
  - `components/shared/empty-state.tsx` - Server Component olarak oluştur
  - Icon, title, description, action button props
  - Illustrative placeholders
  - _Gereksinimler: 2.2_

- [x] 4.7 Toast Notification component oluştur
  - Yeni versiyona uygun olarak shadcn *sonner* (toaster) kullanıldı.
  - Toaster global layout`a veya sayfalara eklenebilir.
  - _Gereksinimler: 14.4, 20.4_


### 5. Admin Dashboard - Maaş ve Personel Modülü

- [x] 5.1 Payroll sayfası oluştur
  - `app/(dashboard)/admin/payroll/page.tsx` - Server Component
  - KPI cards (Toplam Maaş, Primler, SGK/Vergi, Yan Haklar)
  - Personel listesi tablosu (isim, departman, maaş breakdown, durum)
  - Sidebar (hızlı işlemler, maaş dağılımı grafiği)
  - _Gereksinimler: 2.1, 2.2_

- [x] 5.2 Payroll Table component oluştur
  - `components/admin/payroll-table.tsx` - Client Component
  - Checkbox selection (toplu ödeme onayı için)
  - Departman bazlı filtreleme
  - Ödeme durumu badge'leri (ödendi, beklemede, banka talimatı hazır)
  - Excel/CSV export butonu
  - _Gereksinimler: 2.3, 2.4_

- [x] 5.3 Salary Distribution Chart component oluştur
  - `components/admin/salary-distribution-chart.tsx` - Client Component
  - Pie chart (departman bazlı dağılım)
  - Recharts veya Chart.js kullan
  - Dark mode uyumlu renkler
  - _Gereksinimler: 2.5, 19.7_


### 6. Admin Dashboard - Cari Hesap ve Fatura Modülü

- [x] 6.1 Accounts sayfası oluştur
  - `app/(dashboard)/admin/accounts/page.tsx` - Server Component
  - Müşteri cari hesap tablosu (borç, alacak, bakiye)
  - Filter bar (tarih aralığı, müşteri, durum)
  - Summary cards (toplam borç, alacak, bakiye)
  - _Gereksinimler: 2.6_

- [x] 6.2 Invoices sayfası oluştur
  - `app/(dashboard)/admin/invoices/page.tsx` - Server Component
  - Fatura listesi tablosu
  - Status badges (paid, pending, overdue)
  - Otomatik ödeme hatırlatıcı butonu
  - _Gereksinimler: 2.7, 2.8_

- [x] 6.3 Commissions sayfası oluştur
  - `app/(dashboard)/admin/commissions/page.tsx` - Server Component
  - Prim listesi tablosu (kazanılan, onaylanan, ödenen)
  - Ödeme tarihi gelenleri highlight et
  - Toplu onay modal
  - _Gereksinimler: 2.9, 2.10_


- [x] 6.4 Client Analytics sayfası oluştur
  - `app/(dashboard)/admin/analytics/page.tsx` - Server Component
  - Müşteri segmentleri (VIP, Riskli, Yeni Kazanılan)
  - Müşteri sağlık skoru tablosu
  - AI destekli çapraz satış önerileri
  - Proje bazlı kar/zarar analizi
  - _Gereksinimler: 2.11, 13.1, 13.2, 13.3, 13.4, 13.6_

- [x] 6.5 Client Health Score hesaplama logic'i
  - `lib/calculations/client-health.ts` - Utility function
  - Payment regularity, operational success, service duration faktörleri
  - 0-100 arası skor hesaplama
  - _Gereksinimler: 2.11, 13.3_

### 7. Client Portal Dashboard

- [x] 7.1 Client Portal ana sayfası oluştur
  - `app/client-portal/page.tsx` - Server Component
  - Welcome header (user bilgisi)
  - Project progress cards
  - Active services grid (SEO, SEM, Social Media, Web Design)
  - Recent reports section
  - Pending approvals badge
  - Account manager card
  - _Gereksinimler: 3.1, 3.2, 3.3, 3.4, 3.5_


- [x] 7.2 Project Progress Card component oluştur
  - `components/client-portal/project-card.tsx` - Server Component
  - Progress bar animation (Framer Motion)
  - Status badge (active, completed, on_hold)
  - Start/end date display
  - _Gereksinimler: 3.1, 14.2_

- [x] 7.3 Service Card component oluştur
  - `components/client-portal/service-card.tsx` - Server Component
  - Service type icons (SEO, SEM, Social Media, Web Design)
  - Real-time metrics display
  - Click navigation to detail page
  - _Gereksinimler: 3.2, 3.6, 3.8_

- [x] 7.4 Support Ticket sayfası oluştur
  - `app/client-portal/support/page.tsx` - Server Component + Client Component
  - Ticket listesi
  - Chat-like interface
  - New ticket modal
  - File attachment support
  - _Gereksinimler: 3.7_


### 8. SEM Modülü

- [x] 8.1 SEM Operations sayfası oluştur
  - `app/(dashboard)/sem/operations/page.tsx` - Server Component
  - Metrics cards (Total Spend, Avg CPC, Conversions, ROAS)
  - Task list tablosu (priority, deadline, status)
  - Customer ad status table
  - Active timer widget
  - Critical alerts panel
  - _Gereksinimler: 4.1, 4.2, 4.3, 4.4, 4.5_

- [x] 8.2 SEM Task List component oluştur
  - `components/sem/task-list.tsx` - Client Component
  - Checkbox selection
  - Priority badge (high: kırmızı, medium: sarı, low: yeşil)
  - Deadline warning indicator
  - Completed tasks collapsible section
  - _Gereksinimler: 4.2, 4.7_

- [x] 8.3 Active Timer Widget component oluştur
  - `components/sem/active-timer.tsx` - Client Component
  - Real-time timer (her saniye güncelleme)
  - Start/pause/stop controls
  - SWR ile data fetching (refreshInterval: 1000ms)
  - Pulse animation (Framer Motion)
  - _Gereksinimler: 4.3, 14.3_


- [x] 8.4 SEM Portfolio sayfası oluştur
  - `app/(dashboard)/sem/portfolio/page.tsx` - Server Component
  - Müşteri portföy tablosu
  - Account health indicators
  - Budget usage progress bars
  - Platform badges (Google Ads, Meta Ads, LinkedIn Ads)
  - _Gereksinimler: 4.6_

- [x] 8.5 SEM Project Kanban sayfası oluştur
  - `app/(dashboard)/sem/projects/[id]/page.tsx` - Client Component
  - Project header (client logo, campaign name, progress)
  - Team members avatars
  - Kanban board (ideas, in_progress, customer_approval, completed)
  - Drag-and-drop functionality (dnd-kit kullan)
  - Active timer widget (bottom-right corner)
  - _Gereksinimler: 11.1, 11.2, 11.3, 11.4, 11.5, 11.6_

- [x] 8.6 Critical Alerts Panel component oluştur
  - `components/sem/alert-panel.tsx` - Client Component
  - Alert types (high_cpa, budget_exceeded, low_quality_score)
  - Severity indicators (critical: kırmızı, warning: sarı)
  - Slide-in animation (Framer Motion)
  - _Gereksinimler: 4.5, 14.3_


### 9. Sosyal Medya Modülü

- [x] 9.1 Social Media Portfolio sayfası oluştur
  - `app/(dashboard)/social-media/portfolio/page.tsx` - Server Component
  - Portfolio tablosu (client, platforms, posting targets)
  - Posting target progress bars
  - Average engagement rate with trend indicator
  - Health status badges (stable, needs_attention, critical)
  - Pending approvals section
  - _Gereksinimler: 5.1, 5.2, 5.3, 5.4, 5.5_

- [x] 9.2 Portfolio Filter Bar component oluştur
  - `components/social-media/portfolio-filter.tsx` - Client Component
  - Sector filter
  - Channel filter (Instagram, Facebook, TikTok, LinkedIn, Twitter)
  - Approval status filter
  - Filter chips display
  - _Gereksinimler: 5.7_

- [x] 9.3 Approval Center sayfası oluştur
  - `app/(dashboard)/social-media/approval-center/page.tsx` - Client Component
  - Content preview (full-size image/video player)
  - Content metadata (caption, hashtags, scheduled date, platforms)
  - Revision quota display (e.g., 3/5)
  - Approve ve Request Revision butonları
  - Content list sidebar (thumbnail previews)
  - _Gereksinimler: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6_


- [x] 9.4 Content Preview component oluştur
  - `components/social-media/content-preview.tsx` - Client Component
  - Image/video player (next/image ve HTML5 video)
  - Zoom in/out controls
  - Platform icons display
  - Keyboard shortcuts (Arrow keys: next/prev, Space: approve, R: request revision)
  - _Gereksinimler: 6.1, 6.9_

- [x] 9.5 Revision Feedback Modal component oluştur
  - `components/social-media/revision-modal.tsx` - Client Component
  - Textarea for detailed feedback
  - Character counter
  - File attachment support
  - Submit button
  - _Gereksinimler: 6.5_

- [x] 9.6 Social Media Project Kanban sayfası oluştur
  - `app/(dashboard)/social-media/projects/[id]/page.tsx` - Client Component
  - Kanban board (ideas, design/editing, customer_approval, scheduled/published)
  - Content type badges (story, post, reels)
  - Estimated time ve assigned person display
  - Drag-and-drop functionality
  - Monthly content target progress
  - _Gereksinimler: 11.1, 11.3, 11.4, 11.6, 11.9_


### 10. SEO Modülü

- [x] 10.1 Rank Tracking sayfası oluştur
  - `app/(dashboard)/seo/rank-tracking/page.tsx` - Server Component
  - Keyword rankings tablosu
  - Rank change indicators (up/down arrows)
  - Rank trend chart (line chart)
  - Search volume ve difficulty columns
  - _Gereksinimler: 7.1_

- [x] 10.2 Publisher Inventory sayfası oluştur
  - `app/(dashboard)/seo/publisher-inventory/page.tsx` - Server Component
  - Publisher tablosu (DR, traffic, spam score, price)
  - Advanced filters (DR range slider, traffic threshold, price scale)
  - Agency contact tooltip
  - Aggregated stats cards
  - Buy button with purchase workflow
  - Category badges
  - _Gereksinimler: 7.1, 7.2, 7.3, 7.4, 7.6, 7.7_

- [x] 10.3 Technical Audit sayfası oluştur
  - `app/(dashboard)/seo/technical-audit/[clientId]/page.tsx` - Server Component
  - Overall SEO score (circular progress)
  - Image alt tags analysis
  - Heading hierarchy tree
  - Core Web Vitals metrics (LCP, CLS, FID)
  - PageSpeed scores
  - Schema markup validation
  - Breadcrumb structure validation
  - PDF export button
  - _Gereksinimler: 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 8.7, 8.8, 8.9, 8.10_


- [x] 10.4 SEO Score Circular Progress component oluştur
  - `components/seo/seo-score.tsx` - Client Component
  - SVG circular progress bar
  - Framer Motion path animation
  - Color coding (green: >80, yellow: 50-80, red: <50)
  - _Gereksinimler: 8.1, 14.2_

- [x] 10.5 Heading Hierarchy Tree component oluştur
  - `components/seo/heading-tree.tsx` - Server Component
  - H1, H2, H3 nesting visualization
  - Error highlighting (duplicate H2, missing hierarchy)
  - Collapsible sections
  - _Gereksinimler: 8.4, 8.5_

- [x] 10.6 Core Web Vitals component oluştur
  - `components/seo/core-web-vitals.tsx` - Server Component
  - LCP, CLS, FID metrics display
  - Status indicators (good: yeşil, needs_improvement: sarı, poor: kırmızı)
  - Tooltip açıklamaları
  - _Gereksinimler: 8.6_


### 11. CRM Modülü

- [x] 11.1 Leads Kanban Board sayfası oluştur
  - `app/(dashboard)/crm/leads/page.tsx` - Client Component
  - Kanban board (new, contacted, proposal_sent, potential, won, lost)
  - High-value opportunities section (üstte)
  - Drag-and-drop functionality (dnd-kit)
  - Column headers with lead count badges
  - Won leads: green border + verified icon
  - Lost leads: grayscale effect + cancel icon
  - _Gereksinimler: 9.1, 9.2, 9.4, 9.6, 9.7_

- [x] 11.2 Lead Card component oluştur
  - `components/crm/lead-card.tsx` - Client Component
  - Company name, contact person
  - Potential value display
  - Source badge (LinkedIn, referral, website, email, ads)
  - Quick action buttons (call, email, schedule meeting)
  - Drag animation (Framer Motion)
  - _Gereksinimler: 9.3, 14.9_

- [x] 11.3 New Lead Modal component oluştur
  - `components/crm/new-lead-modal.tsx` - Client Component
  - Form fields (company name, contact person, email, phone, potential value, source)
  - Zod validation (leadSchema)
  - Submit button
  - _Gereksinimler: 9.8_


- [x] 11.4 Source Filter component oluştur
  - `components/crm/source-filter.tsx` - Client Component
  - Filter chips (LinkedIn, referral, website, email, ads)
  - Active filter highlighting
  - Clear filters button
  - _Gereksinimler: 9.9_

### 12. Task Management Modülü

- [ ] 12.1 Task Detail Modal component oluştur
  - `components/tasks/task-modal.tsx` - Client Component
  - Full-screen modal (Dialog component)
  - Task header (title, status, priority)
  - SOP checklist section
  - Activity feed section
  - Task metadata sidebar
  - Time tracker widget
  - Attachments section
  - Mark as Complete button
  - _Gereksinimler: 10.1, 10.2, 10.5, 10.6, 10.8, 10.9_

- [ ] 12.2 SOP Checklist component oluştur
  - `components/tasks/sop-checklist.tsx` - Client Component
  - Checkbox items
  - Progress percentage calculation
  - Progress bar animation
  - Real-time updates (optimistic UI)
  - Strikethrough animation for completed items
  - _Gereksinimler: 10.2, 10.3, 14.2_


- [ ] 12.3 Time Tracker Widget component oluştur
  - `components/tasks/time-tracker.tsx` - Client Component
  - Start/pause/stop controls
  - Elapsed time display (real-time updates)
  - Manual time entry option
  - SWR ile data sync
  - _Gereksinimler: 10.4, 10.10_

- [ ] 12.4 Activity Feed component oluştur
  - `components/tasks/activity-feed.tsx` - Client Component
  - Activity items (comments, status changes, assignments)
  - @mention support (autocomplete)
  - File attachments
  - Timestamp display
  - Infinite scroll (lazy loading)
  - Slide-in animation (Framer Motion)
  - _Gereksinimler: 10.6, 10.7, 14.3_

- [ ] 12.5 Task Attachments component oluştur
  - `components/tasks/task-attachments.tsx` - Client Component
  - File list (name, size, type)
  - Drag-and-drop upload
  - File preview (images, PDFs)
  - Download button
  - _Gereksinimler: 10.7, 10.8_


### 13. Performance Dashboard

- [ ] 13.1 Performance Dashboard sayfası oluştur
  - `app/(dashboard)/performance/page.tsx` - Server Component
  - KPI cards (completed tasks, avg completion time, satisfaction score, goal achievement)
  - Productivity chart (weekly time spent vs value produced)
  - Client effort distribution (donut chart)
  - Badges and achievements section
  - Growth areas table
  - Time period filter (7, 30, 90 days)
  - _Gereksinimler: 12.1, 12.2, 12.3, 12.4, 12.5, 12.9_

- [ ] 13.2 Productivity Chart component oluştur
  - `components/performance/productivity-chart.tsx` - Client Component
  - Line chart (Recharts veya Chart.js)
  - Time spent vs value produced
  - Interactive tooltips
  - Chart animation (Framer Motion)
  - _Gereksinimler: 12.2, 14.2_

- [ ] 13.3 Badges and Achievements component oluştur
  - `components/performance/badges.tsx` - Client Component
  - Badge grid (locked/unlocked)
  - Progress indicators
  - Unlock animation (scale + rotate)
  - Grayscale effect for locked badges
  - _Gereksinimler: 12.4, 12.8, 14.2_


- [ ] 13.4 Growth Areas Table component oluştur
  - `components/performance/growth-areas.tsx` - Server Component
  - Current efficiency vs target efficiency
  - AI-powered improvement suggestions
  - Progress bars
  - _Gereksinimler: 12.5, 12.6_

- [ ] 13.5 Comparison Indicators component oluştur
  - `components/performance/comparison.tsx` - Server Component
  - Percentage change display (vs previous period)
  - Up/down arrows with color coding
  - _Gereksinimler: 12.7_

### 14. API Routes

- [ ] 14.1 Authentication API routes oluştur
  - `app/api/auth/[...nextauth]/route.ts` - NextAuth.js configuration
  - Login, logout, session endpoints
  - JWT token management
  - _Gereksinimler: 1.3_

- [ ] 14.2 Admin API routes oluştur
  - `app/api/admin/payroll/route.ts` - GET payroll data
  - `app/api/admin/accounts/route.ts` - GET client accounts
  - `app/api/admin/invoices/route.ts` - GET invoices, POST send reminder
  - `app/api/admin/commissions/route.ts` - GET commissions, POST approve
  - `app/api/admin/analytics/route.ts` - GET client analytics
  - _Gereksinimler: 2.1, 2.6, 2.7, 2.8, 2.9, 13.1_


- [ ] 14.3 SEM API routes oluştur
  - `app/api/sem/campaigns/route.ts` - GET, POST campaigns
  - `app/api/sem/campaigns/[id]/route.ts` - GET, PUT, DELETE campaign
  - `app/api/sem/tasks/route.ts` - GET, POST tasks
  - `app/api/sem/tasks/[id]/route.ts` - PUT, DELETE task
  - `app/api/sem/metrics/route.ts` - GET aggregated metrics
  - _Gereksinimler: 4.1, 4.2_

- [ ] 14.4 SEO API routes oluştur
  - `app/api/seo/rankings/route.ts` - GET keyword rankings
  - `app/api/seo/publishers/route.ts` - GET publishers, POST purchase
  - `app/api/seo/audit/[clientId]/route.ts` - GET, POST audit
  - _Gereksinimler: 7.1, 8.1_

- [ ] 14.5 Social Media API routes oluştur
  - `app/api/social-media/portfolio/route.ts` - GET portfolio
  - `app/api/social-media/approvals/route.ts` - GET approvals
  - `app/api/social-media/approvals/[id]/approve/route.ts` - POST approve
  - `app/api/social-media/approvals/[id]/revision/route.ts` - POST request revision
  - _Gereksinimler: 5.1, 6.1, 6.8_

- [ ] 14.6 CRM API routes oluştur
  - `app/api/crm/leads/route.ts` - GET, POST leads
  - `app/api/crm/leads/[id]/route.ts` - GET, PUT, DELETE lead
  - `app/api/crm/leads/[id]/move/route.ts` - PUT move lead to column
  - _Gereksinimler: 9.1, 9.8_


- [ ] 14.7 Tasks API routes oluştur
  - `app/api/tasks/route.ts` - GET, POST tasks
  - `app/api/tasks/[id]/route.ts` - GET, PUT, DELETE task
  - `app/api/tasks/[id]/time/start/route.ts` - POST start timer
  - `app/api/tasks/[id]/time/stop/route.ts` - POST stop timer
  - `app/api/tasks/[id]/comments/route.ts` - POST comment
  - `app/api/tasks/[id]/attachments/route.ts` - POST attachment
  - _Gereksinimler: 10.1, 10.4, 10.6, 10.7_

- [ ] 14.8 Client Portal API routes oluştur
  - `app/api/client-portal/dashboard/route.ts` - GET dashboard data
  - `app/api/client-portal/projects/route.ts` - GET projects
  - `app/api/client-portal/reports/route.ts` - GET reports
  - `app/api/client-portal/support/tickets/route.ts` - GET, POST tickets
  - _Gereksinimler: 3.1, 3.3, 3.7_

- [ ] 14.9 Performance API routes oluştur
  - `app/api/performance/[userId]/route.ts` - GET performance data
  - `app/api/performance/[userId]/badges/route.ts` - GET badges
  - _Gereksinimler: 12.1, 12.4_


### 15. State Management ve Data Fetching

- [ ] 15.1 Zustand store'ları oluştur
  - `lib/stores/sidebar-store.ts` - Sidebar state (expanded/collapsed)
  - `lib/stores/theme-store.ts` - Theme state (light/dark)
  - `lib/stores/filter-store.ts` - Active filters state
  - _Gereksinimler: 1.2, 1.6_

- [ ] 15.2 SWR configuration ve hooks oluştur
  - `lib/swr-config.ts` - Global SWR configuration
  - `lib/hooks/use-tasks.ts` - Tasks data fetching hook
  - `lib/hooks/use-timer.ts` - Timer data fetching hook (refreshInterval: 1000ms)
  - `lib/hooks/use-metrics.ts` - Metrics data fetching hook
  - _Gereksinimler: 4.3, 10.4_

- [ ] 15.3 Optimistic UI updates implementasyonu
  - Task completion optimistic update
  - SOP checklist optimistic update
  - Lead kanban move optimistic update
  - _Gereksinimler: 10.3, 11.1_


### 16. Animasyonlar ve Micro-interactions

- [ ] 16.1 Page transition animations implementasyonu
  - `components/providers/page-transition.tsx` - AnimatePresence wrapper
  - Fade-in ve slide-up effect
  - Route değişimlerinde smooth transitions
  - _Gereksinimler: 14.5_

- [ ] 16.2 Staggered list animations implementasyonu
  - KPI cards staggered animation
  - Table rows staggered animation
  - Card grids staggered animation
  - _Gereksinimler: 14.1, 14.2_

- [ ] 16.3 Hover ve interaction animations
  - Button hover/tap animations
  - Card hover animations (scale + shadow)
  - Link hover animations
  - _Gereksinimler: 14.3_

- [ ] 16.4 Modal animations implementasyonu
  - Scale ve fade effect
  - Backdrop blur animation
  - Exit animations
  - _Gereksinimler: 14.4_


- [ ] 16.5 Drag-and-drop animations
  - Kanban card drag animation (scale + shadow + rotate)
  - Drop animation (scale bounce)
  - Visual feedback during drag
  - _Gereksinimler: 14.9_

- [ ] 16.6 Loading skeleton animations
  - Shimmer effect animation
  - Multiple variants (card, table, list)
  - _Gereksinimler: 14.10_

- [ ] 16.7 Scroll-triggered animations
  - Sections below fold fade-in
  - useInView hook kullanımı
  - _Gereksinimler: 14.7_

- [ ] 16.8 Number counter animations
  - KPI values counter animation
  - Smooth number transitions
  - _Gereksinimler: 14.2_


### 17. SEO ve Metadata

- [ ] 17.1 generateMetadata functions oluştur
  - Her route için unique title ve description
  - Dynamic metadata (route params'a göre)
  - _Gereksinimler: 16.1, 16.2, 16.7_

- [ ] 17.2 Open Graph ve Twitter Card metadata
  - og:title, og:description, og:image tags
  - twitter:card, twitter:title, twitter:description tags
  - _Gereksinimler: 16.3, 16.4_

- [ ] 17.3 Structured data (JSON-LD) implementasyonu
  - Organization schema
  - Breadcrumb schema
  - _Gereksinimler: 16.6_

- [ ] 17.4 Sitemap ve robots.txt oluştur
  - `app/sitemap.ts` - Dynamic sitemap generation
  - `app/robots.ts` - Robots.txt configuration
  - _Gereksinimler: 20.8, 20.9_

- [ ] 17.5 Canonical URLs ve meta tags
  - Canonical URL her sayfa için
  - Viewport ve charset meta tags
  - Robots meta tag (indexing control)
  - _Gereksinimler: 16.5, 16.8, 16.9_


### 18. Performance Optimizasyonu

- [ ] 18.1 Image optimization implementasyonu
  - next/image component kullanımı (tüm görseller için)
  - Lazy loading (below-fold images)
  - Image optimization domains (next.config.js)
  - _Gereksinimler: 17.3, 17.4, 20.7_

- [ ] 18.2 Code splitting ve dynamic imports
  - Route-based code splitting (otomatik)
  - Heavy components için dynamic imports
  - _Gereksinimler: 17.5, 17.6_

- [ ] 18.3 Font optimization
  - next/font kullanımı (Inter font)
  - Font preloading
  - _Gereksinimler: 17.7_

- [ ] 18.4 Bundle size optimization
  - Tree shaking verification
  - Unused dependencies temizleme
  - Bundle analyzer kullanımı
  - Target: <200KB gzipped
  - _Gereksinimler: 17.8_


- [ ] 18.5 Caching strategy implementasyonu
  - Static assets caching
  - API response caching (SWR)
  - _Gereksinimler: 17.9_

- [ ] 18.6 Suspense boundaries implementasyonu
  - Streaming SSR için Suspense boundaries
  - Loading states
  - _Gereksinimler: 17.10_

- [ ] 18.7 Core Web Vitals optimization
  - LCP optimization (<2.5s target)
  - CLS optimization (<0.1 target)
  - Layout shift prevention
  - _Gereksinimler: 17.1, 17.2_

### 19. Responsive Design

- [ ] 19.1 Responsive breakpoints implementasyonu
  - Tailwind breakpoints kullanımı (sm, md, lg, xl)
  - Mobile-first approach
  - _Gereksinimler: 18.1_

- [ ] 19.2 Mobile navigation implementasyonu
  - Drawer navigation (768px altı)
  - Touch-friendly button sizes (44x44px minimum)
  - _Gereksinimler: 18.2, 18.3_


- [ ] 19.3 Responsive table layouts
  - Mobile'da horizontal scroll veya card view
  - Tablet'te optimized column display
  - _Gereksinimler: 18.4_

- [ ] 19.4 Responsive grid layouts
  - Tailwind grid classes kullanımı
  - Breakpoint-specific column counts
  - _Gereksinimler: 18.5_

- [ ] 19.5 Mobile-optimized modals
  - Full-screen modals on mobile
  - Responsive padding ve spacing
  - _Gereksinimler: 18.6_

- [ ] 19.6 Mobile-friendly form inputs
  - Appropriate input types (tel, email, number)
  - Large touch targets
  - _Gereksinimler: 18.7_

- [ ] 19.7 Mobile testing
  - iOS Safari testing
  - Chrome Android testing
  - Responsive design verification
  - _Gereksinimler: 18.8_


### 20. Error Handling ve Accessibility

- [ ] 20.1 Error Boundary implementasyonu
  - `components/error-boundary.tsx` - React Error Boundary
  - Graceful error handling
  - Error logging (Sentry entegrasyonu hazırlığı)
  - _Gereksinimler: 20.4_

- [ ] 20.2 Custom error pages
  - `app/not-found.tsx` - 404 page
  - `app/error.tsx` - 500 page
  - User-friendly error messages
  - _Gereksinimler: 20.5_

- [ ] 20.3 Form validation ve error messages
  - Zod schemas kullanımı
  - User-friendly validation messages (Türkçe)
  - Error state styling
  - _Gereksinimler: 2.3, 9.8, 10.7_

- [ ] 20.4 ARIA labels ve semantic HTML
  - Semantic HTML elements kullanımı
  - ARIA labels (buttons, inputs, navigation)
  - Focus management
  - _Gereksinimler: 19.6_


- [ ] 20.5 Keyboard navigation
  - Tab order optimization
  - Keyboard shortcuts (opsiyonel)
  - Focus visible states
  - _Gereksinimler: 6.4_

- [ ] 20.6 Dark mode contrast ratios
  - WCAG AA compliance (4.5:1 minimum)
  - Color contrast verification
  - _Gereksinimler: 19.6_

### 21. Testing

- [ ] 21.1 Jest ve React Testing Library kurulumu
  - `jest.config.js` oluştur
  - `jest.setup.ts` oluştur
  - Test utilities ve mocks
  - _Gereksinimler: 20.12_

- [ ]* 21.2 Component unit tests
  - PayrollTable component tests
  - KPI Card component tests
  - Status Badge component tests
  - Button component tests
  - _Gereksinimler: 2.2, 2.7_


- [ ]* 21.3 API route tests
  - Payroll API tests
  - Tasks API tests
  - Leads API tests
  - _Gereksinimler: 2.1, 10.1, 9.1_

- [ ]* 21.4 Integration tests
  - Task creation flow test
  - Lead kanban move test
  - Content approval flow test
  - _Gereksinimler: 10.1, 11.1, 6.8_

- [ ]* 21.5 E2E tests (Playwright)
  - Login flow test
  - Dashboard navigation test
  - Task management flow test
  - _Gereksinimler: 1.1, 10.1_

- [ ]* 21.6 Property-based tests (fast-check)
  - Salary calculation property test
  - Client health score property test
  - Progress percentage property test
  - _Gereksinimler: 2.2, 2.11, 3.1_


### 22. Vercel Deployment ve Production

- [ ] 22.1 next.config.js production optimization
  - Image optimization domains
  - Compression enable
  - Security headers configuration
  - _Gereksinimler: 20.1, 20.6, 20.7_

- [ ] 22.2 Environment variables configuration
  - `.env.example` dosyası oluştur
  - Vercel dashboard'da environment variables ayarla
  - API keys ve secrets yönetimi
  - _Gereksinimler: 20.2_

- [ ] 22.3 Security headers implementasyonu
  - Content Security Policy (CSP)
  - X-Frame-Options
  - HSTS (HTTP Strict Transport Security)
  - X-Content-Type-Options
  - _Gereksinimler: 20.6_

- [ ] 22.4 Vercel Analytics entegrasyonu
  - `@vercel/analytics` paketi kurulumu
  - Analytics component ekleme
  - Performance monitoring
  - _Gereksinimler: 20.3_


- [ ] 22.5 Error tracking setup (Sentry hazırlığı)
  - Error boundary'lerde error logging
  - Production error monitoring hazırlığı
  - _Gereksinimler: 20.10_

- [ ] 22.6 CI/CD pipeline configuration
  - GitHub Actions workflow (opsiyonel)
  - Automated tests on PR
  - Preview deployments
  - _Gereksinimler: 20.11, 20.12_

- [ ] 22.7 Production checklist verification
  - Environment variables kontrol
  - Image optimization domains kontrol
  - Security headers kontrol
  - SSL certificate kontrol
  - Sitemap ve robots.txt kontrol
  - SEO metadata kontrol
  - Performance monitoring aktif
  - _Gereksinimler: 20.1-20.12_

- [ ] 22.8 İlk production deployment
  - Vercel'e deploy
  - Custom domain configuration (opsiyonel)
  - Production build test
  - Lighthouse audit (>90 target)
  - _Gereksinimler: 20.1_


### 23. Checkpoint - Tüm testlerin geçtiğinden emin ol

- [ ] 23.1 Tüm testlerin başarılı olduğunu doğrula
  - Unit tests çalıştır ve sonuçları kontrol et
  - Integration tests çalıştır
  - E2E tests çalıştır (opsiyonel)
  - Kullanıcıya sorular varsa sor

### 24. Final Integration ve Wiring

- [ ] 24.1 Tüm componentleri birbirine bağla
  - Navigation links'leri doğru route'lara bağla
  - API endpoints'leri componentlere bağla
  - State management'ı tüm componentlere entegre et
  - _Gereksinimler: 1.1, 15.1_

- [ ] 24.2 Mock data oluştur (development için)
  - `lib/mock-data/` klasörü oluştur
  - Her modül için sample data
  - API routes'larda mock data kullanımı
  - _Gereksinimler: 2.1, 4.1, 5.1_

- [ ] 24.3 Authentication flow tamamla
  - Login sayfası
  - Protected routes
  - Session management
  - Logout functionality
  - _Gereksinimler: 1.3_


- [ ] 24.4 Real-time features entegrasyonu
  - Timer updates (SWR refreshInterval)
  - Notification system
  - Live metrics updates
  - _Gereksinimler: 4.3, 10.4_

- [ ] 24.5 Export functionality implementasyonu
  - Excel export (payroll, invoices)
  - CSV export
  - PDF export (SEO audit reports)
  - _Gereksinimler: 2.4, 8.9_

### 25. Final Checkpoint - Production Hazırlık

- [ ] 25.1 Tüm sayfaların çalıştığını doğrula
  - Her route'u test et
  - Responsive design kontrol et
  - Dark mode kontrol et
  - Animasyonları kontrol et

- [ ] 25.2 Performance audit yap
  - Lighthouse audit çalıştır (target: >90)
  - Core Web Vitals kontrol et
  - Bundle size kontrol et (<200KB gzipped)

- [ ] 25.3 Accessibility audit yap
  - WCAG AA compliance kontrol et
  - Keyboard navigation test et
  - Screen reader compatibility (opsiyonel)


- [ ] 25.4 SEO audit yap
  - Metadata kontrol et
  - Sitemap kontrol et
  - Robots.txt kontrol et
  - Structured data kontrol et

- [ ] 25.5 Security audit yap
  - Security headers kontrol et
  - Environment variables güvenliği
  - API endpoint security
  - XSS ve CSRF koruması

- [ ] 25.6 Kullanıcıya sorular varsa sor
  - Tüm özellikler tamamlandı mı?
  - Ek gereksinimler var mı?
  - Production'a deploy edilebilir mi?

---

## Notlar

- `*` ile işaretli görevler opsiyoneldir ve daha hızlı MVP için atlanabilir
- Her görev, ilgili gereksinimlere referans verir (traceability için)
- Checkpoint görevleri, incremental validation sağlar
- Tüm görevler Türkçe olarak yazılmıştır
- TypeScript ve Next.js 14+ App Router kullanılacaktır
- Toplam 51 sayfa tasarımı kapsanmaktadır

