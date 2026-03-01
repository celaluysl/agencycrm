"use client";

import { ThemeToggle } from "./theme-toggle";
import { MobileNav } from "./mobile-nav";
import { Breadcrumbs } from "./breadcrumb";

export function Header() {
    return (
        <header className="sticky top-0 z-10 flex items-center justify-between bg-white/80 dark:bg-[#1a2432]/80 backdrop-blur-md border-b border-[#f0f2f4] dark:border-gray-800 px-4 md:px-8 py-4 transition-colors">
            <div className="flex items-center">
                <MobileNav />
                <div className="flex flex-col">
                    <Breadcrumbs />
                </div>
            </div>

            <div className="flex items-center gap-4">
                {/* Actions */}
                <div className="flex gap-2 mr-4 border-r dark:border-gray-700 pr-4">
                    <ThemeToggle />
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-[#617289] relative transition-colors">
                        <span className="material-symbols-outlined text-[22px]">notifications</span>
                        <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-[#1a2432]"></span>
                    </button>
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-[#617289] transition-colors">
                        <span className="material-symbols-outlined text-[22px]">settings</span>
                    </button>
                </div>

                {/* Profile */}
                <div className="flex items-center gap-3">
                    <div className="text-right hidden sm:block">
                        <p className="text-xs font-bold leading-tight text-[#111418] dark:text-white">
                            Deniz Aksoy
                        </p>
                        <p className="text-[10px] text-[#617289] font-medium">Finans Müdürü</p>
                    </div>
                    <div
                        className="size-10 rounded-full bg-cover bg-center border-2 border-primary/20"
                        style={{
                            backgroundImage:
                                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCum4COz_JUijqvzw6G9PFAwG5P7Wjcm2U3KizTQimJ4vMworO2vGVHnbwWS-bW-j6vYfHVAZROC3AD3CHVQteSHLWRI_iWPmtM7SgDROXWHum5otWuLpgW_D8ZPX4lR4N6FVtlOeD2bWzxO80MIsPovDwNwAAMP0vevMj9bn7tnJI-1oPCw4FPTrzZnUcwx43kV_ly0lz_qU3N6SxnZfa-qZMbXfWjHmItHN6hTF1fRK_0kd1D6T526vOw92i1S-34JTn7RSeHPOLg")',
                        }}
                    />
                </div>
            </div>
        </header>
    );
}
