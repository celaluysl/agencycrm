"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-background-light px-6 py-16 text-foreground dark:bg-background-dark">
      <div className="w-full max-w-xl rounded-3xl border border-border/60 bg-white/90 p-8 shadow-xl dark:border-white/10 dark:bg-white/5">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-rose-500">
          500
        </p>
        <h1 className="mt-4 text-3xl font-black tracking-tight">
          Beklenmeyen bir hata olustu
        </h1>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          Sayfa yuklenirken bir sey ters gitti. Tekrar denemeyi deneyebilir ya
          da ana panele donerek akisa kaldigin yerden devam edebilirsin.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button type="button" className="sm:min-w-40" onClick={reset}>
            Tekrar dene
          </Button>
          <Button asChild variant="outline" className="sm:min-w-40">
            <Link href="/admin/dashboard">Panele don</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
