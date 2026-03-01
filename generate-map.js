const fs = require('fs');

const files = [
"aday-musteri-detay-sayfasi.html", "ai-kategori-icerigi-olusturma-paneli.html", "atanan-musteriler-ve-durum-takibi.html",
"banka-ve-kasa-yonetim-merkezi.html", "banka-ve-kasa-yonetimi.html", "departman-operasyon-detayi.html",
"destek-talebi-yonetimi.html", "fatura-ve-tahsilat-takip-merkezi.html", "fatura-ve-tahsilat-yonetimi.html",
"finans-ve-muhasebe-kontrol-paneli.html", "gelir-ve-gider-yonetim-merkezi.html", "gelismis-gorev-yonetimli-sem-paneli.html",
"gorev-odakli-calisma-alani.html", "hizmet-detayli-ortak-musteri-yonetim-merkezi.html", "ik-verimlilik-ve-kapasite-analizi.html",
"kapasite-analizli-akilli-satis-paneli.html", "kapsamli-seo-teknik-denetim-raporu.html", "karlilik-ve-butce-analiz-raporu.html",
"kelime-odakli-backlink-satin-alma-paneli.html", "maas-ve-personel-odemeleri-paneli.html", "musteri-cari-hesap-takibi.html",
"musteri-cari-ve-risk-yonetimi.html", "musteri-onay-merkezi.html", "musteri-portali-kontrol-paneli.html",
"musteri-proje-detay-ekrani.html", "musteri-rapor-arsivi.html", "musteri-saglik-ve-karlilik-analizi.html",
"raporlama-destekli-sosyal-medya-paneli.html", "satis-ekibi-detayli-kokpit-paneli.html", "satisci-aylik-prim-hakedis-raporu-onaylananlar.html",
"satisci-hakedis-ve-prim-paneli.html", "sem-gorev-detay-ve-sop-paneli.html", "sem-musteri-portfoy-yonetimi.html",
"seo-gorev-detay-ve-sop-paneli.html", "seo-musteri-portfoy-takibi.html", "seo-operasyon-paneli.html",
"seo-proje-ve-teknik-kanban-panosu.html", "seo-siralama-takip-merkezi.html", "sistem-loglari-ve-guvenlik-paneli.html",
"site-bazli-hizmet-yonetim-paneli.html", "sosyal-medya-gorev-detay-ve-sop-paneli.html", "sosyal-medya-musteri-portfoyu.html",
"sosyal-medya-onay-merkezi.html", "sosyal-medya-proje-ve-icerik-panosu.html", "super-admin-finansal-kokpit.html",
"tanitim-yazisi-yayinci-envanteri.html", "tedarikci-bilgili-backlink-paneli.html", "teknik-seo-analiz-ve-sorgu-paneli.html",
"toplu-odeme-destekli-prim-raporu.html", "uzman-performans-paneli.html", "yuksek-deger-odakli-kanban-panosu.html"
];

const getGroup = (name) => {
    if (name.includes('banka') || name.includes('fatura') || name.includes('gelir') || name.includes('karlilik') || name.includes('finans') || name.includes('cari')) return 'finance';
    if (name.includes('seo') || name.includes('siralama') || name.includes('backlink') || name.includes('tanitim')) return 'seo';
    if (name.includes('sem')) return 'sem';
    if (name.includes('sosyal-medya')) return 'social-media';
    if (name.includes('satis') || name.includes('aday') || name.includes('crm') || name.includes('yuksek-deger')) return 'crm';
    if (name.includes('musteri-portali') || name.includes('musteri-onay') || name.includes('musteri-rapor')) return 'client-portal';
    if (name.includes('ik-') || name.includes('maas') || name.includes('sistem-log') || name.includes('departman') || name.includes('super-admin')) return 'admin';
    if (name.includes('performans') || name.includes('gorev-odakli')) return 'performance';
    return 'operations';
};

const getIcon = (group) => {
    switch (group) {
        case 'finance': return 'account_balance';
        case 'seo': return 'query_stats';
        case 'sem': return 'campaign';
        case 'social-media': return 'thumb_up';
        case 'crm': return 'view_kanban';
        case 'client-portal': return 'person';
        case 'admin': return 'admin_panel_settings';
        case 'performance': return 'monitoring';
        default: return 'business_center';
    }
};

let fileMap = {};
let sidebarItems = [];

// Group definitions for sidebar
const navGroups = {
    'admin': { name: 'Ajans Yönetimi', icon: 'admin_panel_settings', items: [] },
    'crm': { name: 'CRM & Satış', icon: 'view_kanban', items: [] },
    'finance': { name: 'Finans & Muhasebe', icon: 'account_balance', items: [] },
    'seo': { name: 'SEO Merkezi', icon: 'query_stats', items: [] },
    'sem': { name: 'SEM Merkezi', icon: 'campaign', items: [] },
    'social-media': { name: 'Sosyal Medya', icon: 'thumb_up', items: [] },
    'client-portal': { name: 'Müşteri Portalı', icon: 'person', items: [] },
    'performance': { name: 'Performans', icon: 'monitoring', items: [] },
    'operations': { name: 'Operasyon', icon: 'business_center', items: [] }
};

files.forEach(file => {
    const slug = file.replace('.html', '');
    const group = getGroup(slug);
    const dest = `app/(dashboard)/${group}/${slug}/page.tsx`;
    fileMap[file] = dest;
    
    const formattedName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    
    // Check if duplicate formatting Name
    let deduplicatedName = formattedName;
    while(navGroups[group].items.find(i => i.name === deduplicatedName)) {
        deduplicatedName += " 2";
    }

    navGroups[group].items.push({
        name: deduplicatedName,
        href: `/${group}/${slug}`
    });
});

console.log("=== FILE MAP ===");
console.log(Object.entries(fileMap).map(([k,v]) => `    '${k}': '${v}',`).join('\n'));

console.log("=== SIDEBAR GROUPS ===");
console.log(JSON.stringify(Object.values(navGroups).filter(g => g.items.length > 0), null, 4));

