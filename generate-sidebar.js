const fs = require('fs');
const nav = fs.readFileSync('generated-nav.txt', 'utf8');

const base = `// components/layout/sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";

${nav}

export function Sidebar() {
    const pathname = usePathname();
    const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
        "Ajans Yönetimi": true,
        "CRM & Satış": true
    });

    const toggleGroup = (name: string) => {
        setOpenGroups(prev => ({ ...prev, [name]: !prev[name] }));
    };

    return (
        <aside className="w-64 flex-shrink-0 flex flex-col bg-white dark:bg-[#1a2432] border-r border-[#dbe0e6] dark:border-gray-800 transition-colors h-full overflow-hidden">
            <div className="p-6 pb-2 shrink-0">
                {/* Logo Section */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-primary rounded-lg size-10 flex items-center justify-center text-white shadow-lg shadow-primary/20 shrink-0">
                        <span className="material-symbols-outlined text-2xl">account_balance</span>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-[#111418] dark:text-white text-base font-bold leading-none">
                            AgenciFlow
                        </h1>
                        <p className="text-[#617289] text-[10px] font-bold uppercase tracking-wider mt-1">
                            Yönetici Paneli
                        </p>
                    </div>
                </div>
            </div>

            {/* Navigation (Scrollable) */}
            <nav className="flex-1 overflow-y-auto px-4 pb-4 space-y-4 relative custom-scrollbar">
                {navigation.map((group) => {
                    const isGroupActive = group.items.some(i => i.href === '/' ? pathname === '/' : (pathname === i.href || pathname.startsWith(`${i.href}/`)));
                    const isOpen = openGroups[group.name] === undefined ? isGroupActive : openGroups[group.name];

                    if (group.name === "Genel Bakış") {
                        const isActive = pathname === '/';
                        return (
                            <Link
                                key={group.name}
                                href={group.href}
                                className={cn(
                                    "flex items-center gap-3 px-2 py-2 rounded-lg transition-colors",
                                    isActive
                                        ? "bg-primary/10 text-primary"
                                        : "text-[#617289] hover:bg-gray-100 dark:hover:bg-gray-800"
                                )}
                            >
                                <span className="material-symbols-outlined text-[20px]">
                                    {group.icon}
                                </span>
                                <span className={cn("text-sm", isActive ? "font-semibold" : "font-medium")}>
                                    {group.name}
                                </span>
                            </Link>
                        );
                    }

                    return (
                        <div key={group.name} className="flex flex-col gap-1">
                            <button 
                                onClick={() => toggleGroup(group.name)}
                                className={cn(
                                    "flex items-center justify-between w-full px-2 py-1.5 rounded-lg transition-colors group",
                                    isGroupActive && !isOpen ? "text-primary bg-primary/5" : "text-[#617289]"
                                )}
                            >
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[18px] opacity-70">
                                        {group.icon}
                                    </span>
                                    <span className="text-xs font-bold uppercase tracking-wide">
                                        {group.name}
                                    </span>
                                </div>
                                <span className="material-symbols-outlined text-sm opacity-50 transition-transform duration-200" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                    expand_more
                                </span>
                            </button>
                            
                            {isOpen && (
                                <div className="flex flex-col gap-0.5 ml-2 pl-3 border-l border-gray-100 dark:border-gray-800 py-1">
                                    {group.items.map((item) => {
                                        const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                                        return (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className={cn(
                                                    "flex items-center gap-2 px-3 py-1.5 text-[13px] rounded-lg transition-all relative",
                                                    isActive
                                                        ? "text-primary font-bold bg-primary/5"
                                                        : "text-[#617289] hover:text-[#111418] dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 font-medium"
                                                )}
                                            >
                                                {isActive && (
                                                    <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-[3px] h-4 bg-primary rounded-r-md" />
                                                )}
                                                <span className="truncate">{item.name}</span>
                                            </Link>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    );
                })}
            </nav>

            {/* Bottom Actions */}
            <div className="p-4 shrink-0 border-t border-[#dbe0e6] dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                <button className="w-full flex items-center justify-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary text-[#617289] hover:text-primary rounded-lg py-2 text-sm font-bold transition-all shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">add_circle</span>
                    Hızlı İşlem
                </button>
            </div>
            
            <style jsx global>{\`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #dbe0e6;
                    border-radius: 4px;
                }
                .dark .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #374151;
                }
            \`}</style>
        </aside>
    );
}

`;
fs.writeFileSync('components/layout/sidebar.tsx', base);
