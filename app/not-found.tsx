"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background-light px-6 py-16 text-foreground dark:bg-background-dark">
      <div className="w-full max-w-xl rounded-3xl border border-border/60 bg-white/90 p-8 shadow-xl dark:border-white/10 dark:bg-white/5">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">
          404
        </p>
        <h1 className="mt-4 text-3xl font-black tracking-tight">
          Aradigin sayfa bulunamadi
        </h1>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          Baglanti degismis, sayfa tasinmis ya da hic var olmamis olabilir.
          Ana panele donup devam edebilir veya bir onceki sayfaya gecebilirsin.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild className="sm:min-w-40">
            <Link href="/admin/dashboard">Panele don</Link>
          </Button>
          <Button
            type="button"
            variant="outline"
            className="sm:min-w-40"
            onClick={() => window.history.back()}
          >
            Geri git
          </Button>
        </div>
      </div>
    </main>
  );
}
