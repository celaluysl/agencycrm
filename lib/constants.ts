export const STATUS_OPTIONS = {
    payment: [
        { value: "paid", label: "Ödendi", color: "success" },
        { value: "pending", label: "Beklemede", color: "warning" },
        { value: "bank_instruction_ready", label: "Talimat Hazır", color: "info" },
        { value: "overdue", label: "Gecikmiş", color: "destructive" },
        { value: "current", label: "Cari", color: "default" },
    ],
    lead: [
        { value: "new", label: "Yeni", color: "info" },
        { value: "contacted", label: "İletişime Geçildi", color: "warning" },
        { value: "proposal_sent", label: "Teklif İletildi", color: "default" },
        { value: "potential", label: "Sıcak/Potansiyel", color: "success" },
        { value: "won", label: "Kazanıldı", color: "success" },
        { value: "lost", label: "Kaybedildi", color: "destructive" },
    ],
    task: [
        { value: "not_started", label: "Başlamadı" },
        { value: "in_progress", label: "Devam Ediyor" },
        { value: "completed", label: "Tamamlandı" },
    ],
    content: [
        { value: "pending", label: "Beklemede" },
        { value: "approved", label: "Onaylandı" },
        { value: "revision_requested", label: "Revizyon İstendi" },
        { value: "rejected", label: "Reddedildi" },
    ]
} as const;

export const ROUTES = {
    auth: {
        login: "/login",
    },
    dashboard: {
        home: "/",
    },
    admin: {
        payroll: "/admin/maas-ve-personel-odemeleri-paneli",
        accounts: "/admin/departman-operasyon-detayi"
    },
} as const;
