"use client";

import {
  useRef,
  useState,
  useCallback,
  type ChangeEvent,
  type KeyboardEvent,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageSquare, Paperclip, X, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

export type ActivityType = "comment" | "status_change" | "assignment";

export interface ActivityAttachment {
  name: string;
  size: string;
}

export interface ActivityItem {
  id: string;
  type: ActivityType;
  author: string;
  authorAvatar?: string;
  content: string;
  createdAt: string;
  attachments?: ActivityAttachment[];
}

interface ActivityFeedProps {
  items: ActivityItem[];
  /** Called when the user submits a new comment. */
  onAddComment?: (content: string, attachments: ActivityAttachment[]) => void;
  /** Initials shown on the current-user compose avatar. */
  currentUserInitials?: string;
  /** Team member names surfaced in the @mention autocomplete. */
  teamMembers?: string[];
  /** How many items to show initially before "load more". Default: 5 */
  pageSize?: number;
  className?: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const ACTIVITY_LABELS: Record<ActivityType, string> = {
  comment: "Yorum",
  status_change: "Durum Güncellemesi",
  assignment: "Atama",
};

const ACTIVITY_BADGE_STYLES: Record<ActivityType, string> = {
  comment: "",
  status_change:
    "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800",
  assignment:
    "bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-900/20 dark:text-violet-300 dark:border-violet-800",
};

const DEFAULT_PAGE_SIZE = 5;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

// Mention token format: spaces replaced by underscores so the token is a
// single unambiguous word — e.g. "Can Özdemir" → stored as @Can_Özdemir.
// \p{L} matches any Unicode letter (includes Turkish ö ı ç ş ü ğ etc.).
const MENTION_TOKEN_RE = /(@[\p{L}\d_]+)/gu;
const MENTION_DETECT_RE = /@([\p{L}\d_]*)$/u;

function nameToToken(name: string): string {
  return name.replace(/\s+/g, "_");
}

function tokenToDisplay(token: string): string {
  // "@Can_Özdemir" → "@Can Özdemir"
  return token.replace(/_/g, " ");
}

function extractMentionQuery(text: string, cursorPos: number): string | null {
  const before = text.slice(0, cursorPos);
  const match = before.match(MENTION_DETECT_RE);
  return match ? match[1] : null;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function ActivityItemCard({ item }: { item: ActivityItem }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="flex gap-3"
    >
      <Avatar className="shrink-0">
        <AvatarImage src={item.authorAvatar} alt={item.author} />
        <AvatarFallback>{item.author.slice(0, 2).toUpperCase()}</AvatarFallback>
      </Avatar>

      <div className="min-w-0 flex-1 rounded-2xl border bg-background p-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-semibold">{item.author}</span>
          <Badge
            variant="outline"
            className={cn("text-xs", ACTIVITY_BADGE_STYLES[item.type])}
          >
            {ACTIVITY_LABELS[item.type]}
          </Badge>
          <span className="text-xs text-muted-foreground">{item.createdAt}</span>
        </div>

        {/* Content with @mention highlights — tokens are @Name_Surname format */}
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {item.content.split(MENTION_TOKEN_RE).map((part, i) =>
            /^@[\p{L}\d_]+$/u.test(part) ? (
              <span key={i} className="font-semibold text-primary">
                {tokenToDisplay(part)}
              </span>
            ) : (
              part
            )
          )}
        </p>

        {/* Inline attachments */}
        {item.attachments && item.attachments.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {item.attachments.map((att) => (
              <span
                key={att.name}
                className="inline-flex items-center gap-1.5 rounded-lg border bg-muted/40 px-2.5 py-1 text-xs font-medium text-muted-foreground"
              >
                <Paperclip className="size-3" />
                {att.name}
                <span className="text-muted-foreground/60">{att.size}</span>
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function ActivityFeed({
  items,
  onAddComment,
  currentUserInitials = "SN",
  teamMembers = [],
  pageSize = DEFAULT_PAGE_SIZE,
  className,
}: ActivityFeedProps) {
  const [comment, setComment] = useState("");
  const [pendingFiles, setPendingFiles] = useState<ActivityAttachment[]>([]);
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const [mentionQuery, setMentionQuery] = useState<string | null>(null);
  const [mentionIndex, setMentionIndex] = useState(0);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const mentionListRef = useRef<HTMLUListElement>(null);

  // No useEffect on `items` here — resetting visibleCount whenever items
  // changes would also fire on every new comment, collapsing the expanded
  // history (see: pagination-reset-on-comment bug).
  // Task-switch resets are handled by key={taskId} in the parent instead.

  // Filtered mention suggestions — normalize query (underscores → spaces) so
  // "@Can_Öz" typed as a token still matches the display name "Can Özdemir".
  const mentionSuggestions = mentionQuery !== null
    ? teamMembers.filter((m) =>
        m.toLowerCase().startsWith(
          mentionQuery.replace(/_/g, " ").toLowerCase()
        )
      )
    : [];

  const closeMention = useCallback(() => {
    setMentionQuery(null);
    setMentionIndex(0);
  }, []);

  const insertMention = useCallback(
    (name: string) => {
      const el = textareaRef.current;
      if (!el) return;
      const cursor = el.selectionStart ?? comment.length;
      const token = nameToToken(name); // "Can Özdemir" → "Can_Özdemir"
      // Replace the partial @query with the full token + trailing space.
      const before = comment.slice(0, cursor).replace(MENTION_DETECT_RE, `@${token} `);
      const after = comment.slice(cursor);
      const next = before + after;
      setComment(next);
      closeMention();
      setTimeout(() => {
        el.focus();
        el.setSelectionRange(before.length, before.length);
      }, 0);
    },
    [comment, closeMention]
  );

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setComment(val);
    const cursor = e.target.selectionStart ?? val.length;
    const query = extractMentionQuery(val, cursor);
    setMentionQuery(query);
    setMentionIndex(0);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (mentionQuery !== null && mentionSuggestions.length > 0) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setMentionIndex((i) => (i + 1) % mentionSuggestions.length);
        return;
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setMentionIndex((i) =>
          (i - 1 + mentionSuggestions.length) % mentionSuggestions.length
        );
        return;
      }
      if (e.key === "Enter" || e.key === "Tab") {
        e.preventDefault();
        insertMention(mentionSuggestions[mentionIndex]);
        return;
      }
      if (e.key === "Escape") {
        closeMention();
        return;
      }
    }

    // Submit on Ctrl+Enter / Cmd+Enter
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    const attachments: ActivityAttachment[] = files.map((f) => ({
      name: f.name,
      size: formatBytes(f.size),
    }));
    setPendingFiles((prev) => [...prev, ...attachments]);
    // Reset input so same file can be re-selected
    e.target.value = "";
  };

  const removePendingFile = (name: string) => {
    setPendingFiles((prev) => prev.filter((f) => f.name !== name));
  };

  const handleSubmit = () => {
    const trimmed = comment.trim();
    if (!trimmed) return;
    onAddComment?.(trimmed, pendingFiles);
    setComment("");
    setPendingFiles([]);
    closeMention();
  };

  const visibleItems = items.slice(0, visibleCount);
  const hiddenCount = items.length - visibleCount;

  return (
    <div className={cn("space-y-4", className)}>
      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
          Aktivite Akışı
        </h3>
        <Badge variant="outline">{items.length} kayıt</Badge>
      </div>

      {/* Compose box */}
      <div className="rounded-2xl border bg-muted/10 p-4">
        <div className="flex gap-3">
          <Avatar className="shrink-0">
            <AvatarFallback>{currentUserInitials}</AvatarFallback>
          </Avatar>

          <div className="relative flex-1 space-y-3">
            <Textarea
              ref={textareaRef}
              value={comment}
              onChange={handleTextChange}
              onKeyDown={handleKeyDown}
              placeholder="Yorum ekle veya @isim ile ekip arkadaşından aksiyon iste…"
              className="min-h-[80px] resize-none"
              aria-label="Yorum yaz"
            />

            {/* @mention autocomplete dropdown */}
            <AnimatePresence>
              {mentionQuery !== null && mentionSuggestions.length > 0 && (
                <motion.ul
                  ref={mentionListRef}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.12 }}
                  role="listbox"
                  aria-label="Mention önerileri"
                  className="absolute left-0 top-full z-50 mt-1 w-56 overflow-hidden rounded-xl border bg-popover shadow-lg"
                >
                  {mentionSuggestions.map((name, idx) => (
                    <li
                      key={name}
                      role="option"
                      aria-selected={idx === mentionIndex}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        insertMention(name);
                      }}
                      className={cn(
                        "flex cursor-pointer items-center gap-2 px-3 py-2 text-sm transition-colors",
                        idx === mentionIndex
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-muted"
                      )}
                    >
                      <Avatar className="size-6">
                        <AvatarFallback className="text-[10px]">
                          {name.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium">@{name}</span>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>

            {/* Pending file chips */}
            {pendingFiles.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {pendingFiles.map((f) => (
                  <span
                    key={f.name}
                    className="inline-flex items-center gap-1.5 rounded-lg border bg-muted/50 px-2.5 py-1 text-xs font-medium"
                  >
                    <Paperclip className="size-3 text-muted-foreground" />
                    {f.name}
                    <button
                      type="button"
                      onClick={() => removePendingFile(f.name)}
                      className="ml-0.5 rounded-sm text-muted-foreground hover:text-foreground"
                      aria-label={`${f.name} dosyasını kaldır`}
                    >
                      <X className="size-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}

            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                {/* Hidden file input */}
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  className="hidden"
                  onChange={handleFileChange}
                  aria-hidden="true"
                />
                <Button
                  type="button"
                  size="icon-sm"
                  variant="ghost"
                  onClick={() => fileInputRef.current?.click()}
                  aria-label="Dosya ekle"
                  title="Dosya ekle"
                >
                  <Paperclip className="size-4" />
                </Button>
                <span className="text-xs text-muted-foreground">
                  Ctrl+Enter ile gönder · @ ile bahset
                </span>
              </div>

              <Button
                size="sm"
                onClick={handleSubmit}
                disabled={!comment.trim()}
                aria-label="Yorum gönder"
              >
                <MessageSquare className="size-4" />
                Yorum Yap
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Activity list */}
      <div className="space-y-4">
        {/* "Load previous" button */}
        <AnimatePresence>
          {hiddenCount > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center"
            >
              <Button
                variant="ghost"
                size="sm"
                className="text-xs text-muted-foreground"
                onClick={() => setVisibleCount((c) => c + pageSize)}
              >
                <ChevronDown className="size-4" />
                {hiddenCount} önceki kaydı göster
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence initial={false}>
          {visibleItems.map((item) => (
            <ActivityItemCard key={item.id} item={item} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
