"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "Genel Bakış", href: "/", icon: "dashboard" },
    { name: "Maaş & Personel", href: "/admin/payroll", icon: "payments" },
    { name: "CRM Leads (Kanban)", href: "/crm/leads", icon: "view_kanban" },
    { name: "SEM Portföy", href: "/sem/portfolio", icon: "campaign" },
    { name: "SEO Sıra Takibi", href: "/seo/rank-tracking", icon: "query_stats" },
    { name: "Sosyal Medya Onay", href: "/social-media/approval-center", icon: "thumb_up" },
    { name: "Kişisel Performans", href: "/performance", icon: "monitoring" },
    { name: "Müşteri Portalı", href: "/client-portal", icon: "person" },
    { name: "Özel Müşteri Hesabı (Örnek)", href: "/admin/accounts/1", icon: "manage_accounts" },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 flex-shrink-0 flex flex-col bg-white dark:bg-[#1a2432] border-r border-[#dbe0e6] dark:border-gray-800 transition-colors">
            <div className="p-6 flex flex-col h-full">
                {/* Logo Section */}
                <div className="flex items-center gap-3 mb-10">
                    <div className="bg-primary rounded-lg size-10 flex items-center justify-center text-white shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined text-2xl">account_balance</span>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-[#111418] dark:text-white text-base font-bold leading-none">
                            AgenciFlow
                        </h1>
                        <p className="text-[#617289] text-[10px] font-bold uppercase tracking-wider mt-1">
                            Muhasebe &amp; Finans
                        </p>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col gap-1 grow">
                    {navigation.map((item) => {
                        const isActive = item.href === '/'
                            ? pathname === '/'
                            : (pathname === item.href || pathname.startsWith(`${item.href}/`));
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors",
                                    isActive
                                        ? "bg-primary/10 text-primary"
                                        : "text-[#617289] hover:bg-gray-100 dark:hover:bg-gray-800"
                                )}
                            >
                                <span className="material-symbols-outlined text-[22px]">
                                    {item.icon}
                                </span>
                                <span className={cn("text-sm", isActive ? "font-semibold" : "font-medium")}>
                                    {item.name}
                                </span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Bottom Actions */}
                <div className="mt-auto border-t border-gray-100 dark:border-gray-800 pt-6">
                    <button className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-blue-700 text-white rounded-lg py-2.5 text-sm font-bold transition-all shadow-md mb-2">
                        <span className="material-symbols-outlined text-sm">verified_user</span>
                        Toplu Ödeme Onayı
                    </button>
                </div>
            </div>
        </aside>
    );
}
