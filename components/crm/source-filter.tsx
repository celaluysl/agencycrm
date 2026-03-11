"use client";

import React from "react";
import { Linkedin, Globe, Users, AtSign, Megaphone, X } from "lucide-react";

type LeadSource = "linkedin" | "referral" | "website" | "email" | "ads";

interface SourceFilterProps {
  selected: LeadSource[];
  onChange: (sources: LeadSource[]) => void;
}

const SOURCES: { id: LeadSource; label: string; icon: React.ReactNode; activeClass: string }[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: <Linkedin className="h-3.5 w-3.5" />,
    activeClass: "bg-blue-600 text-white border-blue-700 shadow-blue-200 dark:shadow-blue-900",
  },
  {
    id: "referral",
    label: "Referans",
    icon: <Users className="h-3.5 w-3.5" />,
    activeClass: "bg-purple-600 text-white border-purple-700 shadow-purple-200 dark:shadow-purple-900",
  },
  {
    id: "website",
    label: "Web Sitesi",
    icon: <Globe className="h-3.5 w-3.5" />,
    activeClass: "bg-teal-600 text-white border-teal-700 shadow-teal-200 dark:shadow-teal-900",
  },
  {
    id: "email",
    label: "E-posta",
    icon: <AtSign className="h-3.5 w-3.5" />,
    activeClass: "bg-amber-500 text-white border-amber-600 shadow-amber-200 dark:shadow-amber-900",
  },
  {
    id: "ads",
    label: "Reklam",
    icon: <Megaphone className="h-3.5 w-3.5" />,
    activeClass: "bg-rose-600 text-white border-rose-700 shadow-rose-200 dark:shadow-rose-900",
  },
];

export function SourceFilter({ selected, onChange }: SourceFilterProps) {
  const toggle = (source: LeadSource) => {
    if (selected.includes(source)) {
      onChange(selected.filter((s) => s !== source));
    } else {
      onChange([...selected, source]);
    }
  };

  const clearAll = () => onChange([]);

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {SOURCES.map((src) => {
        const isActive = selected.includes(src.id);
        return (
          <button
            key={src.id}
            onClick={() => toggle(src.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border transition-all shadow-sm
              ${
                isActive
                  ? `${src.activeClass} shadow-md`
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500"
              }`}
          >
            {src.icon}
            {src.label}
          </button>
        );
      })}

      {selected.length > 0 && (
        <button
          onClick={clearAll}
          className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-bold text-muted-foreground hover:text-foreground border border-dashed border-gray-300 dark:border-gray-700 hover:border-gray-500 transition-all"
        >
          <X className="h-3 w-3" />
          Temizle
        </button>
      )}
    </div>
  );
}
