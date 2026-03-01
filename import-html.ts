import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';

const fileMap: Record<string, string> = {
    'aday-musteri-detay-sayfasi.html': 'app/(dashboard)/crm/aday-musteri-detay-sayfasi/page.tsx',
    'ai-kategori-icerigi-olusturma-paneli.html': 'app/(dashboard)/projects/ai-kategori-icerigi-olusturma-paneli/page.tsx',
    'atanan-musteriler-ve-durum-takibi.html': 'app/(dashboard)/projects/atanan-musteriler-ve-durum-takibi/page.tsx',
    'banka-ve-kasa-yonetim-merkezi.html': 'app/(dashboard)/finance/banka-ve-kasa-yonetim-merkezi/page.tsx',
    'banka-ve-kasa-yonetimi.html': 'app/(dashboard)/finance/banka-ve-kasa-yonetimi/page.tsx',
    'departman-operasyon-detayi.html': 'app/(dashboard)/admin/departman-operasyon-detayi/page.tsx',
    'destek-talebi-yonetimi.html': 'app/(dashboard)/projects/destek-talebi-yonetimi/page.tsx',
    'fatura-ve-tahsilat-takip-merkezi.html': 'app/(dashboard)/finance/fatura-ve-tahsilat-takip-merkezi/page.tsx',
    'fatura-ve-tahsilat-yonetimi.html': 'app/(dashboard)/finance/fatura-ve-tahsilat-yonetimi/page.tsx',
    'finans-ve-muhasebe-kontrol-paneli.html': 'app/(dashboard)/finance/finans-ve-muhasebe-kontrol-paneli/page.tsx',
    'gelir-ve-gider-yonetim-merkezi.html': 'app/(dashboard)/finance/gelir-ve-gider-yonetim-merkezi/page.tsx',
    'gelismis-gorev-yonetimli-sem-paneli.html': 'app/(dashboard)/sem/gelismis-gorev-yonetimli-sem-paneli/page.tsx',
    'gorev-odakli-calisma-alani.html': 'app/(dashboard)/performance/gorev-odakli-calisma-alani/page.tsx',
    'hizmet-detayli-ortak-musteri-yonetim-merkezi.html': 'app/(dashboard)/crm/hizmet-detayli-ortak-musteri-yonetim-merkezi/page.tsx',
    'ik-verimlilik-ve-kapasite-analizi.html': 'app/(dashboard)/admin/ik-verimlilik-ve-kapasite-analizi/page.tsx',
    'kapasite-analizli-akilli-satis-paneli.html': 'app/(dashboard)/crm/kapasite-analizli-akilli-satis-paneli/page.tsx',
    'kapsamli-seo-teknik-denetim-raporu.html': 'app/(dashboard)/seo/kapsamli-seo-teknik-denetim-raporu/page.tsx',
    'karlilik-ve-butce-analiz-raporu.html': 'app/(dashboard)/finance/karlilik-ve-butce-analiz-raporu/page.tsx',
    'kelime-odakli-backlink-satin-alma-paneli.html': 'app/(dashboard)/seo/kelime-odakli-backlink-satin-alma-paneli/page.tsx',
    'maas-ve-personel-odemeleri-paneli.html': 'app/(dashboard)/admin/maas-ve-personel-odemeleri-paneli/page.tsx',
    'musteri-cari-hesap-takibi.html': 'app/(dashboard)/finance/musteri-cari-hesap-takibi/page.tsx',
    'musteri-cari-ve-risk-yonetimi.html': 'app/(dashboard)/finance/musteri-cari-ve-risk-yonetimi/page.tsx',
    'musteri-onay-merkezi.html': 'app/(dashboard)/client-portal/musteri-onay-merkezi/page.tsx',
    'musteri-portali-kontrol-paneli.html': 'app/(dashboard)/client-portal/musteri-portali-kontrol-paneli/page.tsx',
    'musteri-proje-detay-ekrani.html': 'app/(dashboard)/projects/musteri-proje-detay-ekrani/page.tsx',
    'musteri-rapor-arsivi.html': 'app/(dashboard)/client-portal/musteri-rapor-arsivi/page.tsx',
    'musteri-saglik-ve-karlilik-analizi.html': 'app/(dashboard)/finance/musteri-saglik-ve-karlilik-analizi/page.tsx',
    'raporlama-destekli-sosyal-medya-paneli.html': 'app/(dashboard)/social-media/raporlama-destekli-sosyal-medya-paneli/page.tsx',
    'satis-ekibi-detayli-kokpit-paneli.html': 'app/(dashboard)/crm/satis-ekibi-detayli-kokpit-paneli/page.tsx',
    'satisci-aylik-prim-hakedis-raporu-onaylananlar.html': 'app/(dashboard)/crm/satisci-aylik-prim-hakedis-raporu-onaylananlar/page.tsx',
    'satisci-hakedis-ve-prim-paneli.html': 'app/(dashboard)/crm/satisci-hakedis-ve-prim-paneli/page.tsx',
    'sem-gorev-detay-ve-sop-paneli.html': 'app/(dashboard)/sem/sem-gorev-detay-ve-sop-paneli/page.tsx',
    'sem-musteri-portfoy-yonetimi.html': 'app/(dashboard)/sem/sem-musteri-portfoy-yonetimi/page.tsx',
    'seo-gorev-detay-ve-sop-paneli.html': 'app/(dashboard)/seo/seo-gorev-detay-ve-sop-paneli/page.tsx',
    'seo-musteri-portfoy-takibi.html': 'app/(dashboard)/seo/seo-musteri-portfoy-takibi/page.tsx',
    'seo-operasyon-paneli.html': 'app/(dashboard)/seo/seo-operasyon-paneli/page.tsx',
    'seo-proje-ve-teknik-kanban-panosu.html': 'app/(dashboard)/seo/seo-proje-ve-teknik-kanban-panosu/page.tsx',
    'seo-siralama-takip-merkezi.html': 'app/(dashboard)/seo/seo-siralama-takip-merkezi/page.tsx',
    'sistem-loglari-ve-guvenlik-paneli.html': 'app/(dashboard)/admin/sistem-loglari-ve-guvenlik-paneli/page.tsx',
    'site-bazli-hizmet-yonetim-paneli.html': 'app/(dashboard)/admin/site-bazli-hizmet-yonetim-paneli/page.tsx',
    'sosyal-medya-gorev-detay-ve-sop-paneli.html': 'app/(dashboard)/social-media/sosyal-medya-gorev-detay-ve-sop-paneli/page.tsx',
    'sosyal-medya-musteri-portfoyu.html': 'app/(dashboard)/social-media/sosyal-medya-musteri-portfoyu/page.tsx',
    'sosyal-medya-onay-merkezi.html': 'app/(dashboard)/social-media/sosyal-medya-onay-merkezi/page.tsx',
    'sosyal-medya-proje-ve-icerik-panosu.html': 'app/(dashboard)/social-media/sosyal-medya-proje-ve-icerik-panosu/page.tsx',
    'super-admin-finansal-kokpit.html': 'app/(dashboard)/finance/super-admin-finansal-kokpit/page.tsx',
    'tanitim-yazisi-yayinci-envanteri.html': 'app/(dashboard)/seo/tanitim-yazisi-yayinci-envanteri/page.tsx',
    'tedarikci-bilgili-backlink-paneli.html': 'app/(dashboard)/seo/tedarikci-bilgili-backlink-paneli/page.tsx',
    'teknik-seo-analiz-ve-sorgu-paneli.html': 'app/(dashboard)/seo/teknik-seo-analiz-ve-sorgu-paneli/page.tsx',
    'toplu-odeme-destekli-prim-raporu.html': 'app/(dashboard)/projects/toplu-odeme-destekli-prim-raporu/page.tsx',
    'uzman-performans-paneli.html': 'app/(dashboard)/performance/uzman-performans-paneli/page.tsx',
    'yuksek-deger-odakli-kanban-panosu.html': 'app/(dashboard)/crm/yuksek-deger-odakli-kanban-panosu/page.tsx',
};

function htmlToJsx(html: string): string {
    // Escape user curlies first
    let jsx = html.replace(/\{/g, '&#123;').replace(/\}/g, '&#125;');

    jsx = jsx.replace(/class=/g, 'className=');
    jsx = jsx.replace(/\bfor="/g, 'htmlFor="');
    jsx = jsx.replace(/disabled=""/g, 'disabled');
    jsx = jsx.replace(/checked=""/g, 'defaultChecked');
    jsx = jsx.replace(/open=""/g, 'open');
    jsx = jsx.replace(/contenteditable=/g, 'contentEditable=');
    jsx = jsx.replace(/rows="(\d+)"/g, 'rows={$1}');
    jsx = jsx.replace(/border-l-(\d+)\s+border-([a-zA-Z]+(?:-\d+)?)/g, 'border-l-$1 border-l-$2');
    jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');
    jsx = jsx.replace(/<span([^>]*)data-icon="([^"]+)"([^>]*)>([\s\S]*?)<\/span>/g, '<span$1$3>$2</span>');
    jsx = jsx.replace(/<br>/g, '<br />');
    jsx = jsx.replace(/<hr(.*?)>/g, '<hr$1 />');
    jsx = jsx.replace(/<img(.*?)>/g, (match) => {
        if (match.endsWith('/>')) return match;
        return match.substring(0, match.length - 1) + ' />';
    });
    jsx = jsx.replace(/<input(.*?)>/g, (match) => {
        if (match.endsWith('/>')) return match;
        return match.substring(0, match.length - 1) + ' />';
    });
    jsx = jsx.replace(/style=(['"])(.*?)\1/g, (m, quote, styleContent) => {
        let content = styleContent.replace(/&quot;/g, "'");
        const styles = content.split(';').reduce((acc: string[], rule: string) => {
            const [key, ...valueParts] = rule.split(':');
            if (key && valueParts.length > 0) {
                const camelKey = key.trim().replace(/-([a-z])/g, (g: string) => g[1].toUpperCase());
                let value = valueParts.join(':').trim();
                if (value.includes('url(')) {
                    value = value.replace(/"/g, "'");
                }
                acc.push(`"${camelKey}": "${value}"`);
            }
            return acc;
        }, []);

        if (styles.length > 0) {
            return `style={{ ${styles.join(', ')} }}`;
        }
        return `style={{}}`;
    });

    jsx = jsx.replace(/fill-rule="/g, 'fillRule="');
    jsx = jsx.replace(/clip-rule="/g, 'clipRule="');
    jsx = jsx.replace(/stroke-width="/g, 'strokeWidth="');
    jsx = jsx.replace(/stroke-linecap="/g, 'strokeLinecap="');
    jsx = jsx.replace(/stroke-linejoin="/g, 'strokeLinejoin="');
    jsx = jsx.replace(/stroke-dasharray="/g, 'strokeDasharray="');
    jsx = jsx.replace(/stroke-dashoffset="/g, 'strokeDashoffset="');
    // Avoid errors with unsupported boolean attributes or unescaped characters if any

    return jsx;
}

const htmlDir = path.join(__dirname, 'html');

for (const [filename, targetPath] of Object.entries(fileMap)) {
    const filePath = path.join(htmlDir, filename);
    if (!fs.existsSync(filePath)) {
        console.error(`File ${filename} not found.`);
        continue;
    }

    const htmlContent = fs.readFileSync(filePath, 'utf-8');
    const $ = cheerio.load(htmlContent, { xmlMode: false });

    let mainEl = $('main');
    if (!mainEl.length) {
        mainEl = $('body');
    }

    if (mainEl.length) {
        mainEl.find('header').first().remove();
        let mainContent = mainEl.html();
        let mainClass = mainEl.attr('class') || '';

        // Remove bg and text colors from main class so it doesn't conflict with layout
        mainClass = mainClass.replace(/bg-[a-zA-Z0-9-\[\]]+/g, '').replace(/text-[a-zA-Z0-9-\[\]]+/g, '').replace(/dark:[a-zA-Z0-9-\[\]]+/g, '');

        let jsxContent = htmlToJsx(mainContent || '');

        const absoluteTargetPath = path.join(__dirname, targetPath);
        const targetDir = path.dirname(absoluteTargetPath);

        if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir, { recursive: true });
        }

        const isComponent = targetPath.startsWith('components/');
        const componentName = isComponent ? path.basename(targetPath, '.tsx').split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('') : 'Page';
        const exportStatement = isComponent ? `export function ${componentName}() {` : `export default function Page() {`;

        const wrapperClass = `flex-1 flex flex-col ${mainClass}`.trim().replace(/\s+/g, ' ');

        const finalCode = `
"use client";

import React from "react";

${exportStatement}
  return (
    <div className="${wrapperClass}">
      ${jsxContent}
    </div>
  );
}
`;

        fs.writeFileSync(absoluteTargetPath, finalCode, 'utf-8');
        console.log(`Successfully created ${targetPath}`);
    }
}
