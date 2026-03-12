"use client";

import { useEffect, useMemo, useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  Download,
  Plus,
  FileImage,
  FileText,
  MessageSquare,
  Paperclip,
  Trash2,
  UserRound,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import {
  SopChecklist,
  type SopChecklistItem,
} from "@/components/tasks/sop-checklist";
import { TimeTracker } from "@/components/tasks/time-tracker";
import { cn } from "@/lib/utils";

type TaskStatus = "todo" | "in_progress" | "review" | "done";
type TaskPriority = "low" | "medium" | "high" | "critical";
type AttachmentType = "pdf" | "image" | "doc";
type ActivityType = "comment" | "status_change" | "assignment";

export interface TaskActivityItem {
  id: string;
  type: ActivityType;
  author: string;
  authorAvatar?: string;
  content: string;
  createdAt: string;
}

export interface TaskAttachmentItem {
  id: string;
  name: string;
  size: string;
  type: AttachmentType;
}

export interface TaskModalData {
  id: string;
  title: string;
  description: string;
  projectName: string;
  status: TaskStatus;
  priority: TaskPriority;
  assignee: {
    name: string;
    avatar?: string;
  };
  startDate: string;
  dueDate: string;
  estimatedMinutes: number;
  trackedMinutes: number;
  tags: string[];
  checklist: SopChecklistItem[];
  activity: TaskActivityItem[];
  attachments: TaskAttachmentItem[];
}

interface TaskModalProps {
  open?: boolean;
  task?: TaskModalData | null;
  onOpenChange?: (open: boolean) => void;
  onMarkComplete?: (taskId: string) => void;
  onDelete?: (taskId: string) => void;
}

const STATUS_STYLES: Record<TaskStatus, string> = {
  todo: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200",
  in_progress: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  review: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  done: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
};

const STATUS_LABELS: Record<TaskStatus, string> = {
  todo: "Yapılacak",
  in_progress: "Devam Ediyor",
  review: "İncelemede",
  done: "Tamamlandı",
};

const PRIORITY_STYLES: Record<TaskPriority, string> = {
  low: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200",
  medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
  high: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
  critical: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300",
};

const PRIORITY_LABELS: Record<TaskPriority, string> = {
  low: "Düşük",
  medium: "Orta",
  high: "Yüksek",
  critical: "Kritik",
};

const ACTIVITY_LABELS: Record<ActivityType, string> = {
  comment: "Yorum",
  status_change: "Durum Güncellemesi",
  assignment: "Atama",
};

const DEFAULT_TASK: TaskModalData = {
  id: "task-seo-audit",
  title: "Teknik SEO denetimi ve hata giderimi",
  description:
    "Search Console ve tarama çıktıları üzerinden kırık linkler, meta eksikleri ve temel sayfa deneyimi problemleri temizlenecek.",
  projectName: "Teksan Global - SEO Hizmeti",
  status: "in_progress",
  priority: "high",
  assignee: {
    name: "Can Özdemir",
    avatar: "https://i.pravatar.cc/100?u=can-ozdemir",
  },
  startDate: "20 Ara 2023",
  dueDate: "22 Ara 2023",
  estimatedMinutes: 180,
  trackedMinutes: 72,
  tags: ["SEO", "Teknik Denetim", "Acil"],
  checklist: [
    { id: "1", label: "404 hataları ve yönlendirmeler kontrol edildi", done: true },
    { id: "2", label: "Eksik title ve description alanları tamamlandı", done: false },
    { id: "3", label: "Görsel alt metin eksikleri listelendi", done: false },
    { id: "4", label: "Sitemap ve robots kuralları gözden geçirildi", done: false },
    { id: "5", label: "LCP ve CLS iyileştirme notları hazırlandı", done: false },
  ],
  activity: [
    {
      id: "activity-1",
      type: "comment",
      author: "Merve Aydın",
      authorAvatar: "https://i.pravatar.cc/100?u=merve-aydin",
      content:
        "Screaming Frog çıktısını ekledim. Özellikle kategori sayfalarındaki canonical alanlarını tekrar kontrol edelim.",
      createdAt: "2 saat önce",
    },
    {
      id: "activity-2",
      type: "status_change",
      author: "Zeynep Kılıç",
      authorAvatar: "https://i.pravatar.cc/100?u=zeynep-kilic",
      content: "Görev durumu Yapılacak aşamasından Devam Ediyor aşamasına alındı.",
      createdAt: "Dün",
    },
  ],
  attachments: [
    { id: "attachment-1", name: "teknik-denetim-raporu.pdf", size: "2.4 MB", type: "pdf" },
    { id: "attachment-2", name: "kirmizi-linkler.png", size: "860 KB", type: "image" },
  ],
};

function getAttachmentIcon(type: AttachmentType) {
  switch (type) {
    case "image":
      return <FileImage className="size-4 text-blue-500" />;
    case "doc":
      return <FileText className="size-4 text-indigo-500" />;
    default:
      return <FileText className="size-4 text-rose-500" />;
  }
}

export function TaskModal({
  open = false,
  task,
  onOpenChange,
  onMarkComplete,
  onDelete,
}: TaskModalProps) {
  const activeTask = task ?? DEFAULT_TASK;
  const [status, setStatus] = useState<TaskStatus>(activeTask.status);
  const [checklist, setChecklist] = useState(activeTask.checklist);
  const [activity, setActivity] = useState(activeTask.activity);
  const [comment, setComment] = useState("");

  useEffect(() => {
    setStatus(activeTask.status);
    setChecklist(activeTask.checklist);
    setActivity(activeTask.activity);
    setComment("");
    // TimeTracker resets automatically via key={activeTask.id} below.
  }, [activeTask]);

  const totalComments = activity.filter((item) => item.type === "comment").length;

  const sidebarFacts = useMemo(
    () => [
      {
        icon: <UserRound className="size-4 text-muted-foreground" />,
        label: "Atanan",
        value: activeTask.assignee.name,
      },
      {
        icon: <CalendarDays className="size-4 text-muted-foreground" />,
        label: "Başlangıç",
        value: activeTask.startDate,
      },
      {
        icon: <CalendarDays className="size-4 text-muted-foreground" />,
        label: "Termin",
        value: activeTask.dueDate,
      },
      {
        icon: <Clock3 className="size-4 text-muted-foreground" />,
        label: "Tahmini Süre",
        value: `${activeTask.estimatedMinutes} dk`,
      },
    ],
    [activeTask]
  );

  const handleAddComment = () => {
    const trimmed = comment.trim();
    if (!trimmed) return;

    setActivity((current) => [
      {
        id: `comment-${Date.now()}`,
        type: "comment",
        author: "Sen",
        content: trimmed,
        createdAt: "Şimdi",
      },
      ...current,
    ]);
    setComment("");
  };

  const handleMarkComplete = () => {
    setStatus("done");
    onMarkComplete?.(activeTask.id);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="flex h-[95vh] max-w-[calc(100vw-1rem)] flex-col gap-0 overflow-hidden rounded-2xl p-0 sm:h-[90vh] sm:max-w-6xl"
      >
        <DialogHeader className="border-b px-5 py-4 sm:px-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="min-w-0 space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className={cn("border-0", STATUS_STYLES[status])}>
                  {STATUS_LABELS[status]}
                </Badge>
                <Badge className={cn("border-0", PRIORITY_STYLES[activeTask.priority])}>
                  {PRIORITY_LABELS[activeTask.priority]}
                </Badge>
                {activeTask.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
              <DialogTitle className="text-left text-2xl font-black tracking-tight">
                {activeTask.title}
              </DialogTitle>
              <DialogDescription className="text-left">
                {activeTask.projectName}
              </DialogDescription>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Button variant="outline" onClick={() => onOpenChange?.(false)}>
                Kapat
              </Button>
              <Button onClick={handleMarkComplete} disabled={status === "done"}>
                <CheckCircle2 className="size-4" />
                {status === "done" ? "Tamamlandı" : "Tamamlandı Olarak İşaretle"}
              </Button>
            </div>
          </div>
        </DialogHeader>

        <div className="grid min-h-0 flex-1 grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="min-h-0 overflow-y-auto border-b lg:border-r lg:border-b-0">
            <div className="space-y-8 px-5 py-5 sm:px-6">
              <section className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
                    Görev Açıklaması
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    {totalComments} yorum
                  </span>
                </div>
                <div className="rounded-2xl border bg-muted/20 p-4 text-sm leading-7 text-muted-foreground">
                  {activeTask.description}
                </div>
              </section>

              <section className="space-y-4">
                <SopChecklist items={checklist} onChange={setChecklist} />
              </section>

              <section className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
                    Aktivite Akışı
                  </h3>
                  <Badge variant="outline">{activity.length} kayıt</Badge>
                </div>

                <div className="rounded-2xl border bg-muted/10 p-4">
                  <div className="flex gap-3">
                    <Avatar>
                      <AvatarFallback>SN</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-3">
                      <Textarea
                        value={comment}
                        onChange={(event) => setComment(event.target.value)}
                        placeholder="Yorum ekle veya ekip arkadaşından aksiyon iste..."
                      />
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs text-muted-foreground">
                          Yorumlar görev geçmişine eklenir.
                        </span>
                        <Button size="sm" onClick={handleAddComment}>
                          <MessageSquare className="size-4" />
                          Yorum Yap
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {activity.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <Avatar>
                        <AvatarImage src={item.authorAvatar} alt={item.author} />
                        <AvatarFallback>{item.author.slice(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div className="min-w-0 flex-1 rounded-2xl border bg-background p-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-sm font-semibold">{item.author}</span>
                          <Badge variant="outline">{ACTIVITY_LABELS[item.type]}</Badge>
                          <span className="text-xs text-muted-foreground">
                            {item.createdAt}
                          </span>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
                    Ekler
                  </h3>
                  <Button size="sm" variant="outline">
                    <Plus className="size-4" />
                    Dosya Ekle
                  </Button>
                </div>

                <div className="space-y-3">
                  {activeTask.attachments.map((attachment) => (
                    <div
                      key={attachment.id}
                      className="flex items-center justify-between gap-3 rounded-2xl border bg-background p-4"
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="rounded-xl bg-muted p-2">
                          {getAttachmentIcon(attachment.type)}
                        </div>
                        <div className="min-w-0">
                          <p className="truncate text-sm font-medium">
                            {attachment.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {attachment.size}
                          </p>
                        </div>
                      </div>
                      <Button size="icon-sm" variant="ghost">
                        <Download className="size-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          <aside className="min-h-0 overflow-y-auto bg-muted/10 px-5 py-5 sm:px-6">
            <div className="space-y-6">
              <section className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
                  Görev Bilgileri
                </h3>

                <div className="rounded-2xl border bg-background p-4">
                  <div className="flex items-center gap-3">
                    <Avatar size="lg">
                      <AvatarImage
                        src={activeTask.assignee.avatar}
                        alt={activeTask.assignee.name}
                      />
                      <AvatarFallback>
                        {activeTask.assignee.name.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">
                        Sorumlu
                      </p>
                      <p className="text-sm font-semibold">
                        {activeTask.assignee.name}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-3">
                    {sidebarFacts.map((fact) => (
                      <div
                        key={fact.label}
                        className="flex items-start gap-3 rounded-xl border bg-muted/20 p-3"
                      >
                        {fact.icon}
                        <div>
                          <p className="text-xs uppercase tracking-wide text-muted-foreground">
                            {fact.label}
                          </p>
                          <p className="text-sm font-medium">{fact.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
                  Zaman Takibi
                </h3>
                {/* key resets TimeTracker when the active task changes. */}
                <TimeTracker
                  key={activeTask.id}
                  initialSeconds={activeTask.trackedMinutes * 60}
                />
              </section>

              <section className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
                  Hızlı İşlemler
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  <Button
                    variant="outline"
                    className="justify-start"
                    onClick={() => onDelete?.(activeTask.id)}
                  >
                    <Trash2 className="size-4" />
                    Görevi Sil
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Paperclip className="size-4" />
                    Dosya İste
                  </Button>
                </div>
              </section>
            </div>
          </aside>
        </div>
      </DialogContent>
    </Dialog>
  );
}
