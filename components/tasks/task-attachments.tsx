"use client";

import {
  useRef,
  useState,
  type DragEvent,
  type ChangeEvent,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Download,
  FileImage,
  FileText,
  File,
  Paperclip,
  Plus,
  Trash2,
  X,
  ZoomIn,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

export type AttachmentFileType = "pdf" | "image" | "doc" | "other";

export interface TaskAttachmentFile {
  id: string;
  name: string;
  size: string;
  type: AttachmentFileType;
  /** Blob URL or remote URL — used for preview & download. */
  url?: string;
}

interface TaskAttachmentsProps {
  attachments: TaskAttachmentFile[];
  /** Called with the raw File objects the user selected / dropped. */
  onUpload?: (files: File[]) => void;
  /** Called when the user removes an existing attachment. */
  onDelete?: (id: string) => void;
  className?: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function detectType(filename: string): AttachmentFileType {
  const ext = filename.split(".").pop()?.toLowerCase() ?? "";
  if (["png", "jpg", "jpeg", "gif", "webp", "svg", "bmp"].includes(ext)) return "image";
  if (ext === "pdf") return "pdf";
  if (["doc", "docx", "xls", "xlsx", "ppt", "pptx", "txt", "csv"].includes(ext)) return "doc";
  return "other";
}

function FileIcon({ type, className }: { type: AttachmentFileType; className?: string }) {
  switch (type) {
    case "image":
      return <FileImage className={cn("text-blue-500", className)} />;
    case "pdf":
      return <FileText className={cn("text-rose-500", className)} />;
    case "doc":
      return <FileText className={cn("text-indigo-500", className)} />;
    default:
      return <File className={cn("text-slate-400", className)} />;
  }
}

// ─── Image Preview Dialog ─────────────────────────────────────────────────────

function ImagePreviewDialog({
  file,
  onClose,
}: {
  file: TaskAttachmentFile | null;
  onClose: () => void;
}) {
  if (!file || file.type !== "image") return null;

  return (
    <Dialog open={!!file} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden">
        <DialogHeader className="px-5 py-3 border-b">
          <DialogTitle className="text-sm font-semibold truncate">
            {file.name}
          </DialogTitle>
        </DialogHeader>
        <div className="flex items-center justify-center bg-muted/20 min-h-[300px] max-h-[70vh] overflow-auto p-4">
          {file.url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={file.url}
              alt={file.name}
              className="max-w-full max-h-[65vh] rounded-xl object-contain shadow"
            />
          ) : (
            <div className="flex flex-col items-center gap-3 text-muted-foreground py-12">
              <FileImage className="size-12 opacity-30" />
              <p className="text-sm">Önizleme mevcut değil</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

// ─── Single Attachment Row ────────────────────────────────────────────────────

function AttachmentRow({
  file,
  onPreview,
  onDelete,
}: {
  file: TaskAttachmentFile;
  onPreview: (file: TaskAttachmentFile) => void;
  onDelete?: (id: string) => void;
}) {
  const canPreview = file.type === "image" && !!file.url;
  const canOpenPdf = file.type === "pdf" && !!file.url;

  const handlePrimaryAction = () => {
    if (canPreview) {
      onPreview(file);
    } else if (canOpenPdf) {
      window.open(file.url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -12 }}
      transition={{ duration: 0.18 }}
      className="group flex items-center justify-between gap-3 rounded-2xl border bg-background p-3.5 transition-colors hover:border-primary/30"
    >
      {/* Icon + info */}
      <button
        type="button"
        className={cn(
          "flex min-w-0 flex-1 items-center gap-3 text-left",
          (canPreview || canOpenPdf) && "cursor-pointer"
        )}
        onClick={handlePrimaryAction}
        disabled={!canPreview && !canOpenPdf}
        title={
          canPreview
            ? "Önizle"
            : canOpenPdf
            ? "PDF'i yeni sekmede aç"
            : undefined
        }
      >
        <div className="shrink-0 rounded-xl bg-muted p-2">
          <FileIcon type={file.type} className="size-4" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium">{file.name}</p>
          <p className="text-xs text-muted-foreground">{file.size}</p>
        </div>

        {/* Preview hint icon shown on hover */}
        {canPreview && (
          <ZoomIn className="size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-60" />
        )}
      </button>

      {/* Actions */}
      <div className="flex shrink-0 items-center gap-1">
        {file.url && (
          <a
            href={file.url}
            download={file.name}
            className="inline-flex"
            aria-label={`${file.name} indir`}
          >
            <Button size="icon-sm" variant="ghost" tabIndex={-1} asChild>
              <span>
                <Download className="size-4" />
              </span>
            </Button>
          </a>
        )}
        {onDelete && (
          <Button
            size="icon-sm"
            variant="ghost"
            onClick={() => onDelete(file.id)}
            aria-label={`${file.name} sil`}
            className="text-muted-foreground hover:text-destructive"
          >
            <Trash2 className="size-4" />
          </Button>
        )}
      </div>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function TaskAttachments({
  attachments,
  onUpload,
  onDelete,
  className,
}: TaskAttachmentsProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [previewFile, setPreviewFile] = useState<TaskAttachmentFile | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // ── Drag-and-drop handlers ──────────────────────────────────────────────────

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    // Only clear when leaving the drop zone entirely (not a child element)
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
      setIsDragging(false);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) onUpload?.(files);
  };

  // ── File input ──────────────────────────────────────────────────────────────

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    if (files.length > 0) onUpload?.(files);
    e.target.value = "";
  };

  return (
    <div className={cn("space-y-3", className)}>
      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
          Ekler
        </h3>
        <div className="flex items-center gap-2">
          {attachments.length > 0 && (
            <span className="text-xs text-muted-foreground">
              {attachments.length} dosya
            </span>
          )}
          <Button
            size="sm"
            variant="outline"
            onClick={() => fileInputRef.current?.click()}
            aria-label="Dosya ekle"
          >
            <Plus className="size-4" />
            Dosya Ekle
          </Button>
        </div>
      </div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        className="hidden"
        onChange={handleFileChange}
        aria-hidden="true"
      />

      {/* Drop zone */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={cn(
          "rounded-2xl border-2 border-dashed transition-colors duration-150",
          isDragging
            ? "border-primary bg-primary/5"
            : "border-border hover:border-primary/40"
        )}
      >
        <AnimatePresence mode="popLayout">
          {attachments.length === 0 ? (
            /* Empty state — always visible as drop target */
            <motion.button
              key="empty"
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => fileInputRef.current?.click()}
              className="flex w-full flex-col items-center gap-2 py-8 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Paperclip className="size-8 opacity-30" />
              <span className="text-sm font-medium">
                {isDragging ? "Dosyaları bırak" : "Dosya sürükle veya tıkla"}
              </span>
              <span className="text-xs opacity-60">
                PDF, görsel, belge — her türlü dosya
              </span>
            </motion.button>
          ) : (
            /* File list */
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-2 p-3"
            >
              <AnimatePresence initial={false}>
                {attachments.map((file) => (
                  <AttachmentRow
                    key={file.id}
                    file={file}
                    onPreview={setPreviewFile}
                    onDelete={onDelete}
                  />
                ))}
              </AnimatePresence>

              {/* Inline drop hint when list already has files */}
              <AnimatePresence>
                {isDragging && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex items-center justify-center gap-2 rounded-xl border-2 border-dashed border-primary/60 bg-primary/5 py-4 text-sm font-medium text-primary"
                  >
                    <Paperclip className="size-4" />
                    Dosyaları bırak
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Image preview dialog */}
      <ImagePreviewDialog
        file={previewFile}
        onClose={() => setPreviewFile(null)}
      />
    </div>
  );
}

// ─── Utilities (exported for parent use) ─────────────────────────────────────

/**
 * Convert a browser File to a TaskAttachmentFile with a blob URL.
 * Call URL.revokeObjectURL(file.url) when done to avoid memory leaks.
 */
export function fileToAttachment(file: File, id?: string): TaskAttachmentFile {
  return {
    id: id ?? `${Date.now()}-${file.name}`,
    name: file.name,
    size: formatSize(file.size),
    type: detectType(file.name),
    url: URL.createObjectURL(file),
  };
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
