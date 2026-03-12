"use client";

import React, { useState, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";

// ─── Zod-like schema validation (no extra deps) ────────
interface LeadFormData {
  company: string;
  contact: string;
  email: string;
  phone: string;
  value: string;
  source: string;
}

interface FieldError {
  company?: string;
  contact?: string;
  email?: string;
  phone?: string;
  value?: string;
  source?: string;
}

function validateLeadForm(data: LeadFormData): FieldError {
  const errors: FieldError = {};
  if (!data.company.trim()) errors.company = "Şirket adı zorunludur.";
  if (!data.contact.trim()) errors.contact = "Yetkili kişi zorunludur.";
  if (!data.email.trim()) {
    errors.email = "E-posta zorunludur.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Geçerli bir e-posta adresi giriniz.";
  }
  if (!data.phone.trim()) errors.phone = "Telefon numarası zorunludur.";
  if (!data.value.trim()) {
    errors.value = "Potansiyel değer zorunludur.";
  } else if (isNaN(Number(data.value)) || Number(data.value) <= 0) {
    errors.value = "Geçerli bir sayı giriniz.";
  }
  if (!data.source) errors.source = "Kaynak seçimi zorunludur.";
  return errors;
}

interface NewLeadModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit?: (data: LeadFormData) => void;
}

const EMPTY_FORM: LeadFormData = {
  company: "",
  contact: "",
  email: "",
  phone: "",
  value: "",
  source: "",
};

export function NewLeadModal({ open, onClose, onSubmit }: NewLeadModalProps) {
  const [form, setForm] = useState<LeadFormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<FieldError>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Tracks whether the user closed the modal mid-flight to prevent ghost submission
  const cancelledRef = useRef(false);

  const handleChange = (field: keyof LeadFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateLeadForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    cancelledRef.current = false;
    setIsSubmitting(true);
    // Simulate async submit
    await new Promise((r) => setTimeout(r, 800));
    // If user closed the modal during submission, abort — do not add lead
    if (cancelledRef.current) {
      setIsSubmitting(false);
      return;
    }
    onSubmit?.(form);
    setIsSubmitting(false);
    setForm(EMPTY_FORM);
    setErrors({});
    onClose();
  };

  const handleClose = () => {
    // Signal any in-flight submission to abort
    cancelledRef.current = true;
    setIsSubmitting(false);
    setForm(EMPTY_FORM);
    setErrors({});
    onClose();
  };

  return (
    // Prevent Dialog from closing via Escape/overlay while submission is in-flight
    <Dialog open={open} onOpenChange={(isOpen) => { if (!isOpen && !isSubmitting) handleClose(); }}>
      <DialogContent className="sm:max-w-[520px] bg-white dark:bg-[#1f2937] gap-0 p-0 overflow-hidden rounded-2xl">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-xl font-black text-[#111418] dark:text-white">
            Yeni Lead Ekle
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground mt-1">
            Yeni potansiyel müşteriyi kanban panosuna ekleyin.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} noValidate>
          <div className="p-6 pt-4 space-y-4">
            {/* Company + Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="company" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Şirket Adı *
                </Label>
                <Input
                  id="company"
                  placeholder="Örn: NovaTech A.Ş."
                  value={form.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                  className={errors.company ? "border-rose-400 focus-visible:ring-rose-400" : ""}
                />
                {errors.company && <p className="text-xs text-rose-500 font-medium">{errors.company}</p>}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="contact" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Yetkili Kişi *
                </Label>
                <Input
                  id="contact"
                  placeholder="Örn: Ahmet Kaya"
                  value={form.contact}
                  onChange={(e) => handleChange("contact", e.target.value)}
                  className={errors.contact ? "border-rose-400 focus-visible:ring-rose-400" : ""}
                />
                {errors.contact && <p className="text-xs text-rose-500 font-medium">{errors.contact}</p>}
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  E-posta *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="ahmet@novatech.com"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={errors.email ? "border-rose-400 focus-visible:ring-rose-400" : ""}
                />
                {errors.email && <p className="text-xs text-rose-500 font-medium">{errors.email}</p>}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Telefon *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+90 555 000 00 00"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className={errors.phone ? "border-rose-400 focus-visible:ring-rose-400" : ""}
                />
                {errors.phone && <p className="text-xs text-rose-500 font-medium">{errors.phone}</p>}
              </div>
            </div>

            {/* Value + Source */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="value" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Potansiyel Değer (₺) *
                </Label>
                <Input
                  id="value"
                  type="number"
                  placeholder="Örn: 50000"
                  value={form.value}
                  onChange={(e) => handleChange("value", e.target.value)}
                  className={errors.value ? "border-rose-400 focus-visible:ring-rose-400" : ""}
                />
                {errors.value && <p className="text-xs text-rose-500 font-medium">{errors.value}</p>}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="source" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Kaynak *
                </Label>
                <Select value={form.source} onValueChange={(v) => handleChange("source", v)}>
                  <SelectTrigger id="source" className={errors.source ? "border-rose-400 focus:ring-rose-400" : ""}>
                    <SelectValue placeholder="Kaynak seç..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="linkedin">LinkedIn</SelectItem>
                    <SelectItem value="referral">Referans</SelectItem>
                    <SelectItem value="website">Web Sitesi</SelectItem>
                    <SelectItem value="email">E-posta</SelectItem>
                    <SelectItem value="ads">Reklam</SelectItem>
                  </SelectContent>
                </Select>
                {errors.source && <p className="text-xs text-rose-500 font-medium">{errors.source}</p>}
              </div>
            </div>
          </div>

          <DialogFooter className="p-6 pt-0 gap-2 flex-row justify-end">
            <Button type="button" variant="outline" onClick={handleClose} disabled={isSubmitting}>
              İptal
            </Button>
            <Button type="submit" disabled={isSubmitting} className="min-w-[130px]">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Kaydediliyor...
                </>
              ) : (
                "Lead Ekle"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
