"use client";

import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

export function PortfolioFilter() {
  const [sector, setSector] = useState<string | undefined>();
  const [channel, setChannel] = useState<string | undefined>();
  const [status, setStatus] = useState<string | undefined>();

  const clearFilters = () => {
    setSector(undefined);
    setChannel(undefined);
    setStatus(undefined);
  };

  const hasFilters = sector || channel || status;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-4 bg-white dark:bg-background-dark border border-[#dbe0e6] rounded-xl p-4 shadow-sm">
        <div className="flex-1 min-w-[200px]">
          <label className="block text-[11px] font-bold text-[#617289] uppercase mb-1">Sektör Filtrele</label>
          <Select value={sector} onValueChange={setSector}>
            <SelectTrigger className="w-full border-[#dbe0e6] rounded-lg text-sm bg-gray-50 dark:bg-gray-800 focus:ring-primary">
              <SelectValue placeholder="Tüm Sektörler" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Tüm Sektörler">Tüm Sektörler</SelectItem>
              <SelectItem value="E-Ticaret">E-Ticaret</SelectItem>
              <SelectItem value="Turizm">Turizm</SelectItem>
              <SelectItem value="Lojistik">Lojistik</SelectItem>
              <SelectItem value="Sağlık">Sağlık</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1 min-w-[200px]">
          <label className="block text-[11px] font-bold text-[#617289] uppercase mb-1">Kanal</label>
          <Select value={channel} onValueChange={setChannel}>
            <SelectTrigger className="w-full border-[#dbe0e6] rounded-lg text-sm bg-gray-50 dark:bg-gray-800 focus:ring-primary">
              <SelectValue placeholder="Tüm Kanallar" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Tüm Kanallar">Tüm Kanallar</SelectItem>
              <SelectItem value="Instagram">Instagram</SelectItem>
              <SelectItem value="Facebook">Facebook</SelectItem>
              <SelectItem value="TikTok">TikTok</SelectItem>
              <SelectItem value="LinkedIn">LinkedIn</SelectItem>
              <SelectItem value="Twitter">Twitter (X)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1 min-w-[200px]">
          <label className="block text-[11px] font-bold text-[#617289] uppercase mb-1">Onay Durumu</label>
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger className="w-full border-[#dbe0e6] rounded-lg text-sm bg-gray-50 dark:bg-gray-800 focus:ring-primary">
              <SelectValue placeholder="Hepsi" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Hepsi">Hepsi</SelectItem>
              <SelectItem value="Aktif İş Ortaklığı">Aktif İş Ortaklığı</SelectItem>
              <SelectItem value="Onay Bekliyor">Onay Bekliyor</SelectItem>
              <SelectItem value="Sözleşme Yenileme">Sözleşme Yenileme</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="pt-4">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={clearFilters}
            className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-[#111418] dark:text-white p-2.5 rounded-lg border-0 transition-colors"
          >
            <span className="material-symbols-outlined text-xl leading-none">filter_list_off</span>
          </Button>
        </div>
      </div>

      {hasFilters && (
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-sm text-muted-foreground mr-2">Aktif Filtreler:</span>
          {sector && sector !== "Tüm Sektörler" && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Sektör: {sector}
              <X className="h-3 w-3 cursor-pointer" onClick={() => setSector(undefined)} />
            </Badge>
          )}
          {channel && channel !== "Tüm Kanallar" && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Kanal: {channel}
              <X className="h-3 w-3 cursor-pointer" onClick={() => setChannel(undefined)} />
            </Badge>
          )}
          {status && status !== "Hepsi" && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Durum: {status}
              <X className="h-3 w-3 cursor-pointer" onClick={() => setStatus(undefined)} />
            </Badge>
          )}
          <Button variant="ghost" size="sm" onClick={clearFilters} className="text-xs h-6 px-2">
            Hepsini Temizle
          </Button>
        </div>
      )}
    </div>
  );
}
