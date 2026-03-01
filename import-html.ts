import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';

const fileMap = {
    '86f2661c37764fe1beead2c45d1e4ffc_Client_Detail_Master_Page.html': 'app/(dashboard)/admin/accounts/[id]/page.tsx',
    '0ab212f9aa314189855fde51abf893ae_SEM_Müşteri_Portföy_Yönetimi.html': 'app/(dashboard)/sem/portfolio/page.tsx',
    'e3b92cb3b9784686af5faa9280ebd611_Task_Detail_&_SOP_Modal.html': 'components/tasks/task-modal.tsx',
    '1da6c6e6397c49c8bc4bb6cb9cc4e12f_Client_Approval_Center.html': 'app/(dashboard)/social-media/approval-center/page.tsx',
    '380cace07ac547fa88843017823fc990_SEO_Rank_Tracking_Center.html': 'app/(dashboard)/seo/rank-tracking/page.tsx',
    '44c6594fb1ea4fb5aec530076ba7af35_Kişisel_Performans_ve_Verimlilik_Paneli.html': 'app/(dashboard)/performance/page.tsx',
    '7356768a5e52481db26835175e414095_CRM_Leads_Kanban_Board.html': 'app/(dashboard)/crm/leads/page.tsx',
    '727d3bb9ce654b5b8c1a54034b339f4b_Kapsamlı_SEO_Teknik_Denetim_Raporu.html': 'app/(dashboard)/seo/technical-audit/[clientId]/page.tsx',
    'f68001217e014f96baf5585f5841a227_Client_Portal_Dashboard.html': 'app/(dashboard)/client-portal/page.tsx',
    'fb5280147b0e46e3915d7853457f91f0_SEM_Proje_ve_Görev_Detayı_(Kanban).html': 'app/(dashboard)/sem/projects/[id]/page.tsx'
};

function htmlToJsx(html: string): string {
    // Escape user curlies first
    let jsx = html.replace(/\{/g, '&#123;').replace(/\}/g, '&#125;');

    jsx = jsx.replace(/class=/g, 'className=');
    jsx = jsx.replace(/\bfor="/g, 'htmlFor="');
    jsx = jsx.replace(/disabled=""/g, 'disabled');
    jsx = jsx.replace(/checked=""/g, 'defaultChecked');
    jsx = jsx.replace(/open=""/g, 'open');
    jsx = jsx.replace(/rows="(\d+)"/g, 'rows={$1}');
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

    let mainContent = $('main').html();
    if (!mainContent) {
        mainContent = $('body').html();
    }

    if (mainContent) {
        const $main = cheerio.load(mainContent);
        $main('header').first().remove();
        mainContent = $main('body').html();

        let jsxContent = htmlToJsx(mainContent || '');

        const absoluteTargetPath = path.join(__dirname, targetPath);
        const targetDir = path.dirname(absoluteTargetPath);

        if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir, { recursive: true });
        }

        const isComponent = targetPath.startsWith('components/');
        const componentName = isComponent ? path.basename(targetPath, '.tsx').split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('') : 'Page';
        const exportStatement = isComponent ? `export function ${componentName}() {` : `export default function Page() {`;

        const finalCode = `
"use client";

import React from "react";

${exportStatement}
  return (
    <div className="flex-1 flex flex-col">
      ${jsxContent}
    </div>
  );
}
`;

        fs.writeFileSync(absoluteTargetPath, finalCode, 'utf-8');
        console.log(`Successfully created ${targetPath}`);
    }
}
