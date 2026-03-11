"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronRight, AlertCircle, CheckCircle } from "lucide-react";

interface HeadingNode {
  level: number;
  text: string;
  error?: string;
  children: HeadingNode[];
}

interface HeadingTreeProps {
  nodes: HeadingNode[];
}

function HeadingItem({ node, depth = 0 }: { node: HeadingNode; depth?: number }) {
  const [isOpen, setIsOpen] = useState(true);
  const hasChildren = node.children.length > 0;

  const levelColors: Record<number, string> = {
    1: "text-indigo-600 dark:text-indigo-400 font-black",
    2: "text-sky-600 dark:text-sky-400 font-bold",
    3: "text-teal-600 dark:text-teal-400 font-semibold",
    4: "text-gray-600 dark:text-gray-400 font-medium",
  };

  const levelBg: Record<number, string> = {
    1: "bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800",
    2: "bg-sky-50 dark:bg-sky-900/20 border-sky-200 dark:border-sky-800",
    3: "bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-800",
    4: "bg-gray-50 dark:bg-gray-900/20 border-gray-200 dark:border-gray-800",
  };

  return (
    <div style={{ paddingLeft: depth > 0 ? `${depth * 16}px` : "0" }} className="w-full">
      <div
        className={`flex items-center gap-2 py-2 px-3 rounded-lg border mb-1 ${node.error ? "bg-rose-50 dark:bg-rose-900/20 border-rose-300 dark:border-rose-800" : levelBg[node.level] || levelBg[4]}`}
      >
        {hasChildren ? (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-muted-foreground hover:text-foreground shrink-0"
          >
            {isOpen ? <ChevronDown className="h-3.5 w-3.5" /> : <ChevronRight className="h-3.5 w-3.5" />}
          </button>
        ) : (
          <div className="w-3.5 h-3.5 shrink-0" />
        )}

        <span className={`text-[10px] font-black uppercase px-1.5 py-0.5 rounded mr-1 ${levelColors[node.level] || levelColors[4]}`}>
          H{node.level}
        </span>
        <span className="text-sm text-[#111418] dark:text-white truncate flex-1">{node.text}</span>

        {node.error ? (
          <div className="group relative shrink-0">
            <AlertCircle className="h-4 w-4 text-rose-500" />
            <div className="absolute right-0 bottom-full mb-1 hidden group-hover:block w-48 bg-gray-900 text-white text-xs p-2 rounded-lg shadow-xl z-10">
              {node.error}
            </div>
          </div>
        ) : (
          <CheckCircle className="h-4 w-4 text-emerald-500 opacity-50 shrink-0" />
        )}
      </div>

      {hasChildren && isOpen && (
        <div className="ml-2 border-l-2 border-gray-200 dark:border-gray-800 pl-2">
          {node.children.map((child, i) => (
            <HeadingItem key={i} node={child} depth={0} />
          ))}
        </div>
      )}
    </div>
  );
}

export function HeadingTree({ nodes }: HeadingTreeProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {nodes.map((node, i) => (
        <HeadingItem key={i} node={node} depth={0} />
      ))}
    </div>
  );
}
