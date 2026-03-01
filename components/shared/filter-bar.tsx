"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";

export interface FilterOption {
    id: string;
    label: string;
    value: string;
}

export interface FilterBarProps {
    searchValue?: string;
    onSearchChange?: (value: string) => void;
    activeFilters?: FilterOption[];
    onRemoveFilter?: (id: string) => void;
    onClearAll?: () => void;
    placeholder?: string;
    children?: React.ReactNode;
}

export function FilterBar({
    searchValue,
    onSearchChange,
    activeFilters = [],
    onRemoveFilter,
    onClearAll,
    placeholder = "Ara...",
    children,
}: FilterBarProps) {
    const [internalSearch, setInternalSearch] = useState(searchValue || "");

    useEffect(() => {
        if (searchValue !== undefined) {
            setInternalSearch(searchValue);
        }
    }, [searchValue]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        if (searchValue === undefined) setInternalSearch(val);
        if (onSearchChange) onSearchChange(val);
    };

    const handleClearAll = () => {
        if (searchValue === undefined) setInternalSearch("");
        if (onSearchChange) onSearchChange("");
        if (onClearAll) onClearAll();
    };

    return (
        <div className="flex flex-col gap-4 mb-6">
            <div className="flex flex-wrap items-center gap-3">
                <div className="relative flex-1 min-w-[250px] max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <Input
                        value={searchValue !== undefined ? searchValue : internalSearch}
                        onChange={handleSearch}
                        placeholder={placeholder}
                        className="pl-9 bg-white dark:bg-[#1a2432] dark:border-gray-800"
                    />
                </div>

                {/* Additional custom filters (like selects, date pickers) can be passed as children */}
                <div className="flex items-center gap-2">
                    {children}
                </div>
            </div>

            {activeFilters.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Aktif Filtreler:
                    </span>
                    {activeFilters.map((filter) => (
                        <Badge
                            key={filter.id}
                            variant="secondary"
                            className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm font-normal"
                        >
                            <span className="text-gray-500 dark:text-gray-400 mr-1">
                                {filter.label}:
                            </span>
                            {filter.value}
                            <button
                                onClick={() => onRemoveFilter?.(filter.id)}
                                className="ml-1 rounded-full p-0.5 hover:bg-gray-200 dark:hover:bg-gray-700"
                            >
                                <X className="h-3 w-3" />
                            </button>
                        </Badge>
                    ))}
                    {activeFilters.length > 1 && (
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={handleClearAll}
                            className="h-7 px-2 text-xs text-red-500 hover:text-red-600 dark:hover:text-red-400"
                        >
                            Tümünü Temizle
                        </Button>
                    )}
                </div>
            )}
        </div>
    );
}
