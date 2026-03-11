"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Paperclip, X } from "lucide-react";

interface RevisionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (feedback: string, files: File[]) => void;
}

export function RevisionModal({ isOpen, onClose, onSubmit }: RevisionModalProps) {
  const [feedback, setFeedback] = useState("");
  const [attachments, setAttachments] = useState<File[]>([]);
  const maxLength = 500;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedback.trim()) return;
    onSubmit(feedback, attachments);
    setFeedback("");
    setAttachments([]);
    onClose();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachments(Array.from(e.target.files));
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Revizyon Talebi</DialogTitle>
          <DialogDescription>
            Lütfen içerikte yapılmasını istediğiniz değişiklikleri detaylı bir şekilde açıklayın.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="space-y-2">
            <Textarea
              placeholder="Örn: Görseldeki başlığın fontunu daha okunaklı yapabilir miyiz? Ayrıca..."
              value={feedback}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFeedback(e.target.value)}
              className="min-h-[120px] resize-none"
              maxLength={maxLength}
            />
            <div className="flex justify-between items-center text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <label htmlFor="file-upload" className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors">
                  <Paperclip className="h-4 w-4" />
                  Dosya Ekle
                </label>
                <input 
                  id="file-upload" 
                  type="file" 
                  multiple 
                  className="hidden" 
                  onChange={handleFileChange} 
                />
              </span>
              <span>{feedback.length} / {maxLength}</span>
            </div>
          </div>

          {attachments.length > 0 && (
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase text-muted-foreground">Eklenen Dosyalar</p>
              <div className="flex flex-col gap-2">
                {attachments.map((file, i) => (
                  <div key={i} className="flex items-center justify-between text-xs p-2 bg-secondary rounded-md">
                    <span className="truncate">{file.name}</span>
                    <button 
                      type="button" 
                      onClick={() => setAttachments(prev => prev.filter((_, idx) => idx !== i))}
                      className="text-muted-foreground hover:text-destructive"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <DialogFooter className="pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              İptal
            </Button>
            <Button type="submit" disabled={!feedback.trim()}>
              Revizyon Talebini Gönder
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
