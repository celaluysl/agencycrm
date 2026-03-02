"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import {
  DndContext,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
import { ActiveTimerWidget } from "@/components/sem/active-timer";
import KanbanColumn from "./KanbanColumn";
import KanbanItem from "./KanbanItem";

export type TaskStatus = "ideas" | "in_progress" | "customer_approval" | "completed";

export interface KanbanTask {
  id: string;
  columnId: TaskStatus;
  content: string;
  tags: string[];
  priority: "low" | "medium" | "high";
  dueDate?: string;
  assignees?: { id: string; name: string; avatar: string }[];
}

const initialTasks: KanbanTask[] = [
  { id: "task-1", columnId: "ideas", content: "Yeni A/B test senaryoları tasarlanacak", tags: ["Optimizasyon", "Test"], priority: "medium", assignees: [{ id: "1", name: "Celal", avatar: "https://i.pravatar.cc/150?u=a" }] },
  { id: "task-2", columnId: "ideas", content: "Rakip analiz raporu oluşturulacak", tags: ["Analiz"], priority: "low" },
  { id: "task-3", columnId: "in_progress", content: "Maksimum Performans kampanyası kurulumu", tags: ["Kurulum", "Google Ads"], priority: "high", dueDate: "Bugün 17:00", assignees: [{ id: "1", name: "Celal", avatar: "https://i.pravatar.cc/150?u=a" }] },
  { id: "task-4", columnId: "customer_approval", content: "Aylık bütçe artış talebi", tags: ["Bütçe", "Onay"], priority: "high" },
  { id: "task-5", columnId: "completed", content: "Eski reklam metinleri güncellendi", tags: ["Optimizasyon"], priority: "medium" },
];

const COLUMNS = [
  { id: "ideas" as TaskStatus, title: "Fikirler", borderClass: "border-gray-200 dark:border-gray-800" },
  { id: "in_progress" as TaskStatus, title: "İşlemde", borderClass: "border-blue-200 dark:border-blue-900/40" },
  { id: "customer_approval" as TaskStatus, title: "Müşteri Onayında", borderClass: "border-purple-200 dark:border-purple-900/40" },
  { id: "completed" as TaskStatus, title: "Tamamlandı", borderClass: "border-green-200 dark:border-green-900/40" }
];

export default function SemProjectKanbanPage() {
  const params = useParams();
  const projectId = params.id as string;

  const [tasks, setTasks] = useState<KanbanTask[]>(initialTasks);
  const [activeTask, setActiveTask] = useState<KanbanTask | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor)
  );

  const getTasksByColumn = (columnId: TaskStatus) => {
    return tasks.filter(task => task.columnId === columnId);
  };

  const handleDragStart = (event: any) => {
    const { active } = event;
    const task = tasks.find(t => t.id === active.id);
    if (task) setActiveTask(task);
  };

  const handleDragOver = (event: any) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const activeTask = tasks.find(t => t.id === activeId);
    const overTask = tasks.find(t => t.id === overId);

    // Check if dragging over a column directly (empty column or not hitting an item)
    const isOverAColumn = COLUMNS.some(col => col.id === overId);

    if (activeTask) {
      if (overTask && activeTask.columnId !== overTask.columnId) {
        setTasks((prev) => {
          const activeIndex = prev.findIndex(t => t.id === activeId);
          const overIndex = prev.findIndex(t => t.id === overId);

          let updated = [...prev];
          updated[activeIndex] = { ...updated[activeIndex], columnId: overTask.columnId };
          return arrayMove(updated, activeIndex, overIndex);
        });
      } else if (isOverAColumn && activeTask.columnId !== overId) {
        setTasks((prev) => {
          const activeIndex = prev.findIndex(t => t.id === activeId);
          let updated = [...prev];
          updated[activeIndex] = { ...updated[activeIndex], columnId: overId as TaskStatus };
          return arrayMove(updated, activeIndex, prev.length - 1);
        });
      }
    }
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    setActiveTask(null);

    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const activeTask = tasks.find(t => t.id === activeId);
    const overTask = tasks.find(t => t.id === overId);

    if (activeTask && overTask && activeTask.columnId === overTask.columnId) {
      setTasks((prev) => {
        const activeIndex = prev.findIndex(t => t.id === activeId);
        const overIndex = prev.findIndex(t => t.id === overId);
        return arrayMove(prev, activeIndex, overIndex);
      });
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] p-4 md:p-6 bg-gray-50/30 dark:bg-transparent overflow-hidden">

      {/* Project Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 shrink-0 bg-white dark:bg-[#1a2432] p-4 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="flex items-center gap-4">
          <Image src="https://i.pravatar.cc/150?u=b" alt="TechNova" width={48} height={48} className="w-12 h-12 rounded-lg border border-gray-200 dark:border-gray-700 object-cover" />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold dark:text-white">TechNova Kampanyası</h1>
              <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded font-bold uppercase tracking-wider">Aktif</span>
            </div>
            <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">calendar_month</span>
              Q4 Dönemi (Ekim - Aralık)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex flex-col items-end gap-1">
            <div className="flex -space-x-2">
              <Image src="https://i.pravatar.cc/150?u=a" width={32} height={32} className="w-8 h-8 rounded-full border-2 border-white dark:border-[#1a2432]" alt="Celal" title="Celal" />
              <Image src="https://i.pravatar.cc/150?u=x" width={32} height={32} className="w-8 h-8 rounded-full border-2 border-white dark:border-[#1a2432]" alt="Ayşe" title="Ayşe" />
              <div className="w-8 h-8 rounded-full border-2 border-white dark:border-[#1a2432] bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[10px] font-bold text-gray-500">+2</div>
            </div>
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Proje Ekibi</span>
          </div>

          <div className="w-32 flex flex-col items-end gap-1.5 hidden sm:flex">
            <span className="text-[10px] font-bold text-gray-500">%35 Bütçe Tüketimi</span>
            <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
              <div className="w-[35%] h-full bg-primary rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Kanban Board Layout */}
      <div className="flex-1 overflow-x-auto overflow-y-hidden pb-4 custom-scrollbar select-none">
        <div className="flex gap-4 h-full min-w-max items-start">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCorners}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDragEnd={handleDragEnd}
          >
            {COLUMNS.map((column) => (
              <KanbanColumn
                key={column.id}
                id={column.id}
                title={column.title}
                borderClass={column.borderClass}
                count={getTasksByColumn(column.id).length}
                tasks={getTasksByColumn(column.id)}
              />
            ))}

            <DragOverlay>
              {activeTask ? <KanbanItem task={activeTask} /> : null}
            </DragOverlay>
          </DndContext>
        </div>
      </div>

      {/* Timer Widget Positioned Bottom Right */}
      <div className="fixed bottom-6 right-6 z-40 w-80 shadow-2xl rounded-xl ring-1 ring-black/5 dark:ring-white/10 opacity-90 hover:opacity-100 transition-opacity">
        <ActiveTimerWidget />
      </div>

    </div>
  );
}
