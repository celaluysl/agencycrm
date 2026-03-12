"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DndContext,
  DragOverlay,
  closestCorners,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
  DragStartEvent,
  DragEndEvent,
  DragOverEvent,
  useDroppable,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  arrayMove,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  Phone,
  Mail,
  CalendarPlus,
  CheckCircle2,
  XCircle,
  Plus,
  Star,
  TrendingUp,
  Linkedin,
  Globe,
  Users,
  AtSign,
  Megaphone,
  MoreHorizontal,
} from "lucide-react";
import { NewLeadModal } from "@/components/crm/new-lead-modal";
import { SourceFilter } from "@/components/crm/source-filter";

// ─── Types ───────────────────────────────────────────
type ColumnId = "new" | "contacted" | "proposal_sent" | "potential" | "won" | "lost";
type LeadSource = "linkedin" | "referral" | "website" | "email" | "ads";

interface Lead {
  id: string;
  columnId: ColumnId;
  company: string;
  contact: string;
  value: number;
  source: LeadSource;
  avatar: string;
}

// ─── Dummy Data ───────────────────────────────────────
const INITIAL_LEADS: Lead[] = [
  { id: "l-1", columnId: "new", company: "NovaTech A.Ş.", contact: "Ahmet Kaya", value: 28000, source: "linkedin", avatar: "https://i.pravatar.cc/150?u=l1" },
  { id: "l-2", columnId: "new", company: "BlueSky Yazılım", contact: "Selin Yıldız", value: 15000, source: "website", avatar: "https://i.pravatar.cc/150?u=l2" },
  { id: "l-3", columnId: "contacted", company: "Meridian Holding", contact: "Caner Doğan", value: 75000, source: "referral", avatar: "https://i.pravatar.cc/150?u=l3" },
  { id: "l-4", columnId: "contacted", company: "Orion E-ticaret", contact: "Buse Şahin", value: 32000, source: "ads", avatar: "https://i.pravatar.cc/150?u=l4" },
  { id: "l-5", columnId: "proposal_sent", company: "Delta Lojistik", contact: "Cem Türk", value: 55000, source: "email", avatar: "https://i.pravatar.cc/150?u=l5" },
  { id: "l-6", columnId: "potential", company: "Vertex Analytics", contact: "Elif Korkmaz", value: 120000, source: "linkedin", avatar: "https://i.pravatar.cc/150?u=l6" },
  { id: "l-7", columnId: "potential", company: "SkyNet Medya", contact: "Tarık Aydın", value: 48000, source: "referral", avatar: "https://i.pravatar.cc/150?u=l7" },
  { id: "l-8", columnId: "won", company: "Quantum Fintech", contact: "Melis Çelik", value: 95000, source: "linkedin", avatar: "https://i.pravatar.cc/150?u=l8" },
  { id: "l-9", columnId: "lost", company: "Arc Tasarım", contact: "Okan Biçer", value: 20000, source: "ads", avatar: "https://i.pravatar.cc/150?u=l9" },
];

const COLUMNS: { id: ColumnId; label: string; color: string }[] = [
  { id: "new", label: "Yeni Lead", color: "bg-blue-500" },
  { id: "contacted", label: "İletişime Geçildi", color: "bg-indigo-500" },
  { id: "proposal_sent", label: "Teklif Gönderildi", color: "bg-amber-500" },
  { id: "potential", label: "Potansiyel", color: "bg-purple-500" },
  { id: "won", label: "Kazanıldı ✓", color: "bg-emerald-500" },
  { id: "lost", label: "Kaybedildi", color: "bg-gray-400" },
];

const SOURCE_ICON: Record<LeadSource, React.ReactNode> = {
  linkedin: <Linkedin className="h-3 w-3" />,
  referral: <Users className="h-3 w-3" />,
  website: <Globe className="h-3 w-3" />,
  email: <AtSign className="h-3 w-3" />,
  ads: <Megaphone className="h-3 w-3" />,
};

const SOURCE_COLOR: Record<LeadSource, string> = {
  linkedin: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  referral: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  website: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400",
  email: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  ads: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400",
};

// ─── Lead Card ────────────────────────────────────────
function LeadCard({ lead, overlay = false }: { lead: Lead; overlay?: boolean }) {
  const isWon = lead.columnId === "won";
  const isLost = lead.columnId === "lost";

  return (
    <div
      className={`bg-white dark:bg-[#1a2432] rounded-xl border p-4 shadow-sm group relative transition-all
        ${isWon ? "border-emerald-300 dark:border-emerald-800" : "border-gray-200 dark:border-gray-800"}
        ${isLost ? "grayscale opacity-60" : "hover:border-primary/40"}
        ${overlay ? "rotate-2 shadow-xl" : ""}
      `}
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex items-center gap-2.5">
          <Avatar className="h-8 w-8 border-2 border-white dark:border-[#1a2432] shadow-sm shrink-0">
            <AvatarImage src={lead.avatar} />
            <AvatarFallback className="text-xs">{lead.company.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-bold text-sm text-[#111418] dark:text-white leading-tight">{lead.company}</p>
            <p className="text-xs text-muted-foreground">{lead.contact}</p>
          </div>
        </div>
        {isWon && <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />}
        {isLost && <XCircle className="h-4 w-4 text-gray-400 shrink-0" />}
      </div>

      <div className="flex items-center justify-between mb-3">
        <span className="text-base font-black text-[#111418] dark:text-white">
          {lead.value.toLocaleString("tr-TR")} ₺
        </span>
        <span className={`flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded-full ${SOURCE_COLOR[lead.source]}`}>
          {SOURCE_ICON[lead.source]}
          {lead.source}
        </span>
      </div>

      <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button variant="outline" size="icon" className="h-7 w-7 border-gray-200 dark:border-gray-700">
          <Phone className="h-3 w-3" />
        </Button>
        <Button variant="outline" size="icon" className="h-7 w-7 border-gray-200 dark:border-gray-700">
          <Mail className="h-3 w-3" />
        </Button>
        <Button variant="outline" size="icon" className="h-7 w-7 border-gray-200 dark:border-gray-700">
          <CalendarPlus className="h-3 w-3" />
        </Button>
        <Button variant="ghost" size="icon" className="h-7 w-7 ml-auto">
          <MoreHorizontal className="h-3.5 w-3.5" />
        </Button>
      </div>
    </div>
  );
}

// ─── Sortable Lead Card ────────────────────────────────
function SortableLeadCard({ lead }: { lead: Lead }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: lead.id,
    data: { type: "Lead", lead },
  });

  return (
    <div
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      className={`cursor-grab active:cursor-grabbing ${isDragging ? "opacity-30" : ""}`}
      {...attributes}
      {...listeners}
    >
      <LeadCard lead={lead} />
    </div>
  );
}

// ─── Kanban Column ─────────────────────────────────────
function KanbanColumn({ col, leads }: { col: typeof COLUMNS[0]; leads: Lead[] }) {
  const { setNodeRef } = useDroppable({ id: col.id, data: { type: "Column", col } });
  const totalValue = leads.reduce((sum, l) => sum + l.value, 0);

  return (
    <div className="flex flex-col w-72 shrink-0">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className={`w-2.5 h-2.5 rounded-full ${col.color}`} />
          <h3 className="font-bold text-sm text-[#111418] dark:text-white">{col.label}</h3>
          <span className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-bold px-2 py-0.5 rounded-full">
            {leads.length}
          </span>
        </div>
        <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground">
          <Plus className="h-3.5 w-3.5" />
        </Button>
      </div>

      <p className="text-xs font-semibold text-muted-foreground mb-3">
        Toplam: <span className="text-[#111418] dark:text-white font-bold">{totalValue.toLocaleString("tr-TR")} ₺</span>
      </p>

      <div
        ref={setNodeRef}
        className="flex-1 bg-gray-100/60 dark:bg-gray-900/40 rounded-2xl p-3 border border-transparent flex flex-col gap-3 min-h-[120px]"
      >
        <SortableContext items={leads.map((l) => l.id)} strategy={verticalListSortingStrategy}>
          {leads.map((lead) => (
            <SortableLeadCard key={lead.id} lead={lead} />
          ))}
        </SortableContext>
      </div>
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────
export default function LeadsKanbanPage() {
  const [leads, setLeads] = useState<Lead[]>(INITIAL_LEADS);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sourceFilter, setSourceFilter] = useState<LeadSource[]>([]);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const highValueLeads = leads.filter((l) => l.value >= 50000 && l.columnId !== "lost");
  const totalPipeline = leads.filter((l) => l.columnId !== "lost").reduce((sum, l) => sum + l.value, 0);

  // Suspend source filter during a drag so the dnd-kit item indices always match
  // the rendered array — otherwise hidden (filtered-out) leads cause index skew.
  const isDragging = activeId !== null;
  const filteredLeads = (sourceFilter.length > 0 && !isDragging)
    ? leads.filter((l) => sourceFilter.includes(l.source))
    : leads;

  const onDragStart = (e: DragStartEvent) => setActiveId(e.active.id as string);

  const onDragOver = (e: DragOverEvent) => {
    const { active, over } = e;
    if (!over || active.id === over.id) return;

    const isActiveLead = active.data.current?.type === "Lead";
    const isOverLead = over.data.current?.type === "Lead";
    const isOverColumn = over.data.current?.type === "Column";

    if (isActiveLead && isOverLead) {
      setLeads((prev) => {
        const activeIdx = prev.findIndex((l) => l.id === active.id);
        const overIdx = prev.findIndex((l) => l.id === over.id);
        const activeLead = prev[activeIdx];
        const overLead = prev[overIdx];
        if (!activeLead || !overLead || activeLead.columnId === overLead.columnId) return prev;
        const updated = [...prev];
        updated[activeIdx] = { ...updated[activeIdx], columnId: overLead.columnId };
        return arrayMove(updated, activeIdx, overIdx);
      });
    }

    if (isActiveLead && isOverColumn) {
      setLeads((prev) => {
        const activeIdx = prev.findIndex((l) => l.id === active.id);
        if (activeIdx === -1) return prev;
        const updated = [...prev];
        updated[activeIdx] = { ...updated[activeIdx], columnId: over.id as ColumnId };
        return arrayMove(updated, activeIdx, activeIdx);
      });
    }
  };

  const onDragEnd = (e: DragEndEvent) => {
    setActiveId(null);
    const { active, over } = e;
    if (!over || active.id === over.id) return;
    const isActiveLead = active.data.current?.type === "Lead";
    const isOverLead = over.data.current?.type === "Lead";
    if (isActiveLead && isOverLead) {
      setLeads((prev) => {
        const activeIdx = prev.findIndex((l) => l.id === active.id);
        const overIdx = prev.findIndex((l) => l.id === over.id);
        if (prev[activeIdx]?.columnId === prev[overIdx]?.columnId) {
          return arrayMove(prev, activeIdx, overIdx);
        }
        return prev;
      });
    }
  };

  const activeLead = activeId ? leads.find((l) => l.id === activeId) : null;

  const handleAddLead = (data: { company: string; contact: string; email: string; phone: string; value: string; source: string }) => {
    const newLead: Lead = {
      id: `l-${Date.now()}`,
      columnId: "new",
      company: data.company,
      contact: data.contact,
      value: Number(data.value),
      source: data.source as LeadSource,
      avatar: `https://i.pravatar.cc/150?u=${Date.now()}`,
    };
    setLeads((prev) => [newLead, ...prev]);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] overflow-hidden bg-gray-50 dark:bg-[#111827]">
      {/* Header */}
      <div className="p-6 md:px-8 bg-white dark:bg-[#1f2937] border-b border-gray-200 dark:border-gray-800 shrink-0">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-[#111418] dark:text-white">Leads Kanban</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Pipeline değeri:{" "}
              <span className="font-bold text-primary">{totalPipeline.toLocaleString("tr-TR")} ₺</span>
            </p>
          </div>
          <Button className="h-10 bg-primary hover:bg-primary/90 self-start md:self-auto" onClick={() => setIsModalOpen(true)}>
            <Plus className="mr-2 h-4 w-4" /> Yeni Lead
          </Button>
        </div>

        {/* High Value Leads Bar */}
        {highValueLeads.length > 0 && (
          <div className="mt-4 flex items-center gap-3 overflow-x-auto pb-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 shrink-0">
              <Star className="h-3.5 w-3.5 fill-amber-500" />
              Yüksek Değerli
            </div>
            {highValueLeads.map((lead) => (
              <div
                key={lead.id}
                className="flex items-center gap-2 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-full px-3 py-1 text-xs font-semibold text-amber-800 dark:text-amber-300 shrink-0"
              >
                <TrendingUp className="h-3 w-3" />
                {lead.company}
                <span className="font-black">{(lead.value / 1000).toFixed(0)}K ₺</span>
              </div>
            ))}
          </div>
        )}
        {/* Source Filter */}
        <div className="mt-3">
          <SourceFilter selected={sourceFilter} onChange={setSourceFilter} />
        </div>
      </div>

      {/* Kanban Board */}
      <div className="flex-1 overflow-x-auto p-6 md:px-8 pb-10">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDragEnd={onDragEnd}
        >
          <div className="flex gap-5 h-full">
            {COLUMNS.map((col) => (
              <KanbanColumn
                key={col.id}
                col={col}
                leads={filteredLeads.filter((l) => l.columnId === col.id)}
              />
            ))}
          </div>

          <DragOverlay>
            {activeLead ? <LeadCard lead={activeLead} overlay /> : null}
          </DragOverlay>
        </DndContext>
      </div>

      <NewLeadModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddLead}
      />
    </div>
  );
}
