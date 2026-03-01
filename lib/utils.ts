import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { format } from "date-fns"
import { tr } from "date-fns/locale"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value)
}

export function formatDate(date: string | Date | null | undefined): string {
  if (!date) return "-"
  const parsedDate = new Date(date)
  if (isNaN(parsedDate.getTime())) return "-"
  return format(parsedDate, "dd MMM yyyy", { locale: tr })
}
