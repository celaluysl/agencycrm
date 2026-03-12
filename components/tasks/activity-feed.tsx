"use client";

import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { GitCommitHorizontal, MessageCircle, UserCheck, RefreshCw, Send } from "lucide-react";

type ActivityType = "comment" | "status_change" | "assignment";

export interface ActivityItem {
  id: string;
  type: ActivityType;
  user: string;
  avatar: string;
  timestamp: string;
  content?: string;
  meta?: string; // e.g. "In Progress → Done"
}

interface ActivityFeedProps {
  items: ActivityItem[];
  onAddComment?: (text: string) => void;
}

const TYPE_CONFIG: Record<ActivityType, { icon: React.ReactNode; color: string }> = {
  comment: {
    icon: <MessageCircle className="h-3.5 w-3.5" />,
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
  },
  status_change: {
    icon: <RefreshCw className="h-3.5 w-3.5" />,
    color: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
  },
  assignment: {
    icon: <UserCheck className="h-3.5 w-3.5" />,
    color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
  },
};

export function ActivityFeed({ items: initialItems, onAddComment }: ActivityFeedProps) {
  const [items, setItems] = useState<ActivityItem[]>(initialItems);
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    const text = comment.trim();
    if (!text) return;
    setSubmitting(true);

    // Optimistic UI: add immediately
    const newItem: ActivityItem = {
      id: `act-${Date.now()}`,
      type: "comment",
      user: "Sen",
      avatar: "https://i.pravatar.cc/150?u=me",
      timestamp: "şimdi",
      content: text,
    };
    setItems((prev) => [newItem, ...prev]);
    setComment("");
    onAddComment?.(text);
    setSubmitting(false);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Comment input */}
      <div className="flex gap-3">
        <Avatar className="h-8 w-8 shrink-0 mt-0.5">
          <AvatarImage src="https://i.pravatar.cc/150?u=me" />
          <AvatarFallback className="text-xs">SN</AvatarFallback>
        </Avatar>
        <div className="flex-1 flex flex-col gap-2">
          <Textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Yorum ekle... (@mention desteklenir)"
            className="min-h-[60px] text-sm resize-none"
            onKeyDown={(e) => {
              if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) handleSubmit();
            }}
          />
          <div className="flex justify-end">
            <Button
              size="sm"
              className="h-7 text-xs"
              onClick={handleSubmit}
              disabled={!comment.trim() || submitting}
            >
              <Send className="mr-1.5 h-3 w-3" />
              Gönder
            </Button>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="flex items-center gap-2">
        <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800" />
        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Aktiviteler</span>
        <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800" />
      </div>

      {/* Activity list */}
      <div className="flex flex-col gap-3">
        {items.map((item) => {
          const cfg = TYPE_CONFIG[item.type];
          return (
            <div key={item.id} className="flex gap-3 group">
              <div className="flex flex-col items-center gap-1 shrink-0">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={item.avatar} />
                  <AvatarFallback className="text-xs">{item.user.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div className="w-px flex-1 bg-gray-200 dark:bg-gray-800 group-last:hidden" />
              </div>

              <div className="flex flex-col gap-1 pb-3 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold text-[#111418] dark:text-white">{item.user}</span>
                  <span className={`flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded-full ${cfg.color}`}>
                    {cfg.icon}
                    {item.type === "comment" ? "yorum" : item.type === "status_change" ? "durum değişikliği" : "atama"}
                  </span>
                  <span className="text-[10px] text-muted-foreground">{item.timestamp}</span>
                </div>

                {item.content && (
                  <p className="text-sm text-[#111418] dark:text-white leading-relaxed bg-gray-50 dark:bg-gray-800/50 rounded-xl px-3 py-2">
                    {item.content}
                  </p>
                )}
                {item.meta && (
                  <p className="text-xs text-muted-foreground font-medium flex items-center gap-1">
                    <GitCommitHorizontal className="h-3 w-3" />
                    {item.meta}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
