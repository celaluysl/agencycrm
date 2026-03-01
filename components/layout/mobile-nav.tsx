"use client";

import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navigation } from "./sidebar";

export function MobileNav() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
        "Ajans Yönetimi": true,
        "CRM & Satış": true
    });

    const toggleGroup = (name: string) => {
        setOpenGroups(prev => ({ ...prev, [name]: !prev[name] }));
    };

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <button className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-[#617289] transition-colors mr-2">
                    <Menu className="size-6" />
                </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 p-0 bg-white dark:bg-[#1a2432] border-r border-[#dbe0e6] dark:border-gray-800 overflow-hidden flex flex-col">
                <SheetHeader className="p-6 pb-2 shrink-0 text-left">
                    <SheetTitle className="flex items-center gap-3 mb-6">
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
                    </SheetTitle>
                </SheetHeader>

                <nav className="flex-1 overflow-y-auto px-4 pb-4 space-y-4 relative custom-scrollbar">
                    {navigation.map((group) => {
                        const isGroupActive = group.items.length > 0
                            ? group.items.some(i => i.href === '/' ? pathname === '/' : (pathname === i.href || pathname.startsWith(`${i.href}/`)))
                            : pathname === group.href;

                        const isOpen = openGroups[group.name] === undefined ? isGroupActive : openGroups[group.name];

                        if (group.name === "Genel Bakış" || group.items.length === 0) {
                            const isActive = pathname === '/';
                            return (
                                <Link
                                    key={group.name}
                                    href={group.href}
                                    onClick={() => setOpen(false)}
                                    className={cn(
                                        "flex items-center gap-3 px-2 py-2 rounded-lg transition-colors min-h-[44px]",
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
                                        "flex items-center justify-between w-full px-2 py-2 rounded-lg transition-colors group min-h-[44px]",
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
                                                    onClick={() => setOpen(false)}
                                                    className={cn(
                                                        "flex items-center gap-2 px-3 py-2 text-[13px] rounded-lg transition-all relative min-h-[44px]",
                                                        isActive
                                                            ? "text-primary font-bold bg-primary/5"
                                                            : "text-[#617289] hover:text-[#111418] dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 font-medium"
                                                    )}
                                                >
                                                    {isActive && (
                                                        <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-[3px] h-4 bg-primary rounded-r-md" />
                                                    )}
                                                    <span className={cn(
                                                        "w-1.5 h-1.5 rounded-full shrink-0 transition-colors",
                                                        isActive ? "bg-primary" : "bg-gray-300 dark:bg-gray-600 group-hover:bg-gray-400"
                                                    )} />
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
            </SheetContent>
        </Sheet>
    );
}
