"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SopChecklist, SopItem } from "@/components/tasks/sop-checklist";
import { TimeTracker } from "@/components/tasks/time-tracker";
import { ActivityFeed, ActivityItem } from "@/components/tasks/activity-feed";
import {
  CheckCircle2,
  Flag,
  User,
  CalendarDays,
  Tag,
  Paperclip,
  Download,
  FileText,
  Image as ImageIcon,
  X,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────
type Priority = "critical" | "high" | "medium" | "low";
type Status = "todo" | "in_progress" | "review" | "done";

const PRIORITY_CONFIG: Record<Priority, { label: string; color: string }> = {
  critical: { label: "Kritik", color: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400" },
  high: { label: "Yüksek", color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400" },
  medium: { label: "Orta", color: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" },
  low: { label: "Düşük", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" },
};

const STATUS_CONFIG: Record<Status, { label: string; color: string }> = {
  todo: { label: "Yapılacak", color: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300" },
  in_progress: { label: "Devam Ediyor", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" },
  review: { label: "İncelemede", color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" },
  done: { label: "Tamamlandı", color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" },
};

export interface TaskData {
  id: string;
  title: string;
  description?: string;
  status: Status;
  priority: Priority;
  assignee: string;
  dueDate: string;
  tags: string[];
  sopItems: SopItem[];
  activityItems: ActivityItem[];
  attachments: { name: string; size: string; type: "image" | "pdf" | "doc" }[];
}

interface TaskDetailModalProps {
  task: TaskData | null;
  open: boolean;
  onClose: () => void;
  onMarkComplete?: (taskId: string) => void;
}

type Tab = "sop" | "activity" | "attachments";

export function TaskDetailModal({ task, open, onClose, onMarkComplete }: TaskDetailModalProps) {
  const [activeTab, setActiveTab] = useState<Tab>("sop");
  const [isComplete, setIsComplete] = useState(task?.status === "done");

  if (!task) return null;

  const priority = PRIORITY_CONFIG[task.priority];
  const status = STATUS_CONFIG[task.status];

  const handleMarkComplete = () => {
    setIsComplete(true);
    onMarkComplete?.(task.id);
  };

  const TABS: { id: Tab; label: string; count?: number }[] = [
    { id: "sop", label: "SOP Checklist", count: task.sopItems.length },
    { id: "activity", label: "Aktiviteler", count: task.activityItems.length },
    { id: "attachments", label: "Dosyalar", count: task.attachments.length },
  ];

  const FILE_ICON: Record<string, React.ReactNode> = {
    image: <ImageIcon className="h-4 w-4 text-blue-500" />,
    pdf: <FileText className="h-4 w-4 text-rose-500" />,
    doc: <FileText className="h-4 w-4 text-indigo-500" />,
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full h-[85vh] flex flex-col p-0 gap-0 bg-white dark:bg-[#1f2937] rounded-2xl overflow-hidden">
        {/* Header */}
        <DialogHeader className="p-6 pb-4 shrink-0 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <Badge variant="outline" className={`text-[10px] font-bold ${status.color} border-0`}>
                  {status.label}
                </Badge>
                <Badge variant="outline" className={`flex items-center gap-1 text-[10px] font-bold ${priority.color} border-0`}>
                  <Flag className="h-2.5 w-2.5" />
                  {priority.label}
                </Badge>
                {task.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-[10px] font-medium text-muted-foreground">
                    <Tag className="h-2.5 w-2.5 mr-1" />{tag}
                  </Badge>
                ))}
              </div>
              <DialogTitle className="text-xl font-black text-[#111418] dark:text-white leading-snug">
                {task.title}
              </DialogTitle>
              {task.description && (
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{task.description}</p>
              )}
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        {/* Body */}
        <div className="flex flex-1 overflow-hidden">
          {/* Main content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-gray-200 dark:border-gray-800 px-6 shrink-0">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-3 py-3 text-sm font-bold border-b-2 transition-colors -mb-px
                    ${activeTab === tab.id
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {tab.label}
                  {tab.count !== undefined && (
                    <span className={`text-[10px] font-black px-1.5 py-0.5 rounded-full ${activeTab === tab.id ? "bg-primary/10 text-primary" : "bg-gray-200 dark:bg-gray-800 text-muted-foreground"}`}>
                      {tab.count}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="flex-1 overflow-y-auto p-6">
              {activeTab === "sop" && <SopChecklist items={task.sopItems} />}
              {activeTab === "activity" && <ActivityFeed items={task.activityItems} />}
              {activeTab === "attachments" && (
                <div className="flex flex-col gap-2">
                  {task.attachments.length === 0 ? (
                    <p className="text-sm text-muted-foreground text-center py-8">Henüz dosya eklenmemiş.</p>
                  ) : (
                    task.attachments.map((file, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                            {FILE_ICON[file.type]}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-[#111418] dark:text-white">{file.name}</p>
                            <p className="text-xs text-muted-foreground">{file.size}</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right sidebar */}
          <div className="w-64 shrink-0 border-l border-gray-200 dark:border-gray-800 flex flex-col overflow-y-auto p-5 gap-6">
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Görev Bilgileri</h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2.5">
                  <User className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                  <div>
                    <p className="text-[10px] text-muted-foreground font-medium">Atanan</p>
                    <p className="text-xs font-bold text-[#111418] dark:text-white">{task.assignee}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <CalendarDays className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                  <div>
                    <p className="text-[10px] text-muted-foreground font-medium">Son Tarih</p>
                    <p className="text-xs font-bold text-[#111418] dark:text-white">{task.dueDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <Paperclip className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                  <div>
                    <p className="text-[10px] text-muted-foreground font-medium">Dosyalar</p>
                    <p className="text-xs font-bold text-[#111418] dark:text-white">{task.attachments.length} dosya</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Süre Takibi</h3>
              <TimeTracker />
            </div>

            <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-800">
              <Button
                className={`w-full text-sm font-bold ${
                  isComplete
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                    : "bg-[#111418] hover:bg-gray-800 text-white dark:bg-white dark:text-[#111418] dark:hover:bg-gray-100"
                }`}
                onClick={handleMarkComplete}
                disabled={isComplete}
              >
                <CheckCircle2 className="mr-2 h-4 w-4" />
                {isComplete ? "Tamamlandı ✓" : "Tamamlandı Olarak İşaretle"}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
