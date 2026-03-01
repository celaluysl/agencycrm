"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <button className="p-2 w-[38px] h-[38px]" />;
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-[#617289] transition-colors"
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{ rotate: theme === "dark" ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center"
            >
                {theme === "dark" ? (
                    <span className="material-symbols-outlined text-[22px]">light_mode</span>
                ) : (
                    <span className="material-symbols-outlined text-[22px]">dark_mode</span>
                )}
            </motion.div>
        </button>
    );
}
