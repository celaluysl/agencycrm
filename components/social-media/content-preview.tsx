"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Maximize2, ZoomIn, ZoomOut, Volume2 } from "lucide-react";

interface ContentPreviewProps {
  type: "image" | "video";
  url: string;
  onApprove: () => void;
  onRequestRevision: () => void;
  onNext: () => void;
  onPrev: () => void;
  isActive?: boolean;
}

export function ContentPreview({ type, url, onApprove, onRequestRevision, onNext, onPrev, isActive = true }: ContentPreviewProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if component is inactive (e.g., modal is open)
      if (!isActive) return;

      // Don't trigger if user is typing in an input/textarea
      if (document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA") return;

      switch (e.key) {
        case "ArrowRight":
          onNext();
          break;
        case "ArrowLeft":
          onPrev();
          break;
        case " ":
          e.preventDefault();
          onApprove();
          break;
        case "r":
        case "R":
          e.preventDefault();
          onRequestRevision();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onApprove, onRequestRevision, onNext, onPrev, isActive]);

  return (
    <div className="relative w-full aspect-video md:aspect-[16/9] lg:aspect-[1.8/1] rounded-2xl overflow-hidden bg-black shadow-2xl group">
      {type === "video" ? (
        <>
          <div className="absolute inset-0 flex items-center justify-center bg-cover bg-center opacity-80" style={{ backgroundImage: `url('${url}')` }}>
            <div className="size-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-white text-5xl">play_arrow</span>
            </div>
          </div>
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white/80">
            <div className="flex gap-4 items-center">
              <Volume2 className="h-5 w-5 cursor-pointer hover:text-white" />
              <span className="text-sm font-mono">0:00 / 0:45</span>
            </div>
            <Maximize2 className="h-5 w-5 cursor-pointer hover:text-white" />
          </div>
        </>
      ) : (
        <div className="relative w-full h-full flex items-center justify-center bg-gray-900">
           {/* Fallback image as placeholder */}
          <div className="absolute top-4 right-4 flex gap-2">
            <Button variant="secondary" size="icon" className="h-8 w-8 bg-black/50 hover:bg-black/70 text-white border-0">
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="icon" className="h-8 w-8 bg-black/50 hover:bg-black/70 text-white border-0">
              <ZoomOut className="h-4 w-4" />
            </Button>
          </div>
          
          <div 
             className="w-full h-full bg-contain bg-center bg-no-repeat"
             style={{ backgroundImage: `url('${url}')` }}
          />
        </div>
      )}
      
      {/* Keyboard Shortcuts Hint */}
      <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white text-[10px] px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between gap-4">
            <span>Önceki/Sonraki:</span>
            <span className="font-mono bg-white/20 px-1 rounded">← / →</span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span>Onayla:</span>
            <span className="font-mono bg-white/20 px-1 rounded">Space</span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span>Revizyon:</span>
            <span className="font-mono bg-white/20 px-1 rounded">R</span>
          </div>
        </div>
      </div>
    </div>
  );
}
