"use client";

import React from "react";
import { Button } from "@/components/ui/button";

type ErrorBoundaryProps = {
  children: React.ReactNode;
  fallbackTitle?: string;
  fallbackDescription?: string;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
    this.props.onError?.(error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <div className="flex min-h-[320px] items-center justify-center rounded-3xl border border-border/60 bg-white/90 p-8 text-center shadow-xl dark:border-white/10 dark:bg-white/5">
        <div className="max-w-md">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-rose-500">
            Hata
          </p>
          <h2 className="mt-4 text-2xl font-black tracking-tight text-foreground">
            {this.props.fallbackTitle ?? "Bir seyler ters gitti"}
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            {this.props.fallbackDescription ??
              "Bu bolum yuklenirken beklenmeyen bir sorun olustu. Tekrar deneyerek devam edebilirsin."}
          </p>
          <Button className="mt-6" onClick={this.handleReset}>
            Tekrar dene
          </Button>
        </div>
      </div>
    );
  }
}
