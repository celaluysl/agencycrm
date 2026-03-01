import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email("Geçerli bir e-posta adresi giriniz"),
    password: z.string().min(6, "Şifre en az 6 karakter olmalıdır"),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export const leadSchema = z.object({
    company_name: z.string().min(2, "Firma adı zorunludur"),
    contact_person: z.string().min(2, "Yetkili kişi zorunludur"),
    email: z.string().email("Geçerli bir e-posta adresi giriniz"),
    phone: z.string().optional(),
    potential_value: z.number().min(0).optional(),
    source: z.enum(["linkedin", "referral", "website", "email", "ads"]).default("website"),
    status: z.enum(["new", "contacted", "proposal_sent", "potential", "won", "lost"]).default("new"),
    notes: z.string().optional(),
});

export type LeadFormData = z.infer<typeof leadSchema>;

export const taskSchema = z.object({
    title: z.string().min(3, "Görev adı en az 3 karakter olmalıdır"),
    description: z.string().optional(),
    priority: z.enum(["low", "medium", "high", "urgent"]).default("medium"),
    status: z.enum(["not_started", "in_progress", "completed"]).default("not_started"),
    client_id: z.string().uuid().optional(),
    assigned_to: z.string().uuid().optional(),
    start_date: z.string().optional(),
    end_date: z.string().optional(),
});

export type TaskFormData = z.infer<typeof taskSchema>;
