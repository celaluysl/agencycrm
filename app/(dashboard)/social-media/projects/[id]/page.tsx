"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { 
  DndContext, 
  DragOverlay, 
  closestCorners, 
  KeyboardSensor, 
  PointerSensor, 
  useSensor, 
  useSensors,
  DragStartEvent,
  DragOverEvent,
  DragEndEvent,
  useDroppable
} from "@dnd-kit/core";
import { 
  SortableContext, 
  arrayMove, 
  sortableKeyboardCoordinates,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Plus, MoreHorizontal, Calendar, Clock } from "lucide-react";

// --- Types ---
type ColumnId = "ideas" | "design" | "approval" | "scheduled";

interface Task {
  id: string;
  columnId: ColumnId;
  title: string;
  type: "story" | "post" | "reels";
  estimatedTime: string;
  assignee: {
    name: string;
    avatar: string;
  };
  dueDate?: string;
  targetPlatform?: "instagram" | "facebook" | "tiktok" | "linkedin" | "multiple";
}

// --- Dummy Data ---
const INITIAL_TASKS: Task[] = [
  {
    id: "task-1",
    columnId: "ideas",
    title: "Yapay Zeka Araçları Serisi",
    type: "reels",
    estimatedTime: "2 saat",
    targetPlatform: "instagram",
    assignee: { name: "Ahmet Y.", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d" }
  },
  {
    id: "task-2",
    columnId: "ideas",
    title: "Müşteri Yorumları Karuseli",
    type: "post",
    estimatedTime: "1.5 saat",
    targetPlatform: "multiple",
    assignee: { name: "Zeynep K.", avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d" }
  },
  {
    id: "task-3",
    columnId: "design",
    title: "Haftalık Sektör Özeti",
    type: "story",
    estimatedTime: "45 dk",
    targetPlatform: "instagram",
    assignee: { name: "Ahmet Y.", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d" }
  },
  {
    id: "task-4",
    columnId: "approval",
    title: "Yeni Ürün Tanıtım Kampanyası",
    type: "reels",
    estimatedTime: "4 saat",
    targetPlatform: "tiktok",
    dueDate: "24 Eki",
    assignee: { name: "Zeynep K.", avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d" }
  },
  {
    id: "task-5",
    columnId: "scheduled",
    title: "Özel Gün Kutlama Postu",
    type: "post",
    estimatedTime: "1 saat",
    targetPlatform: "multiple",
    dueDate: "29 Eki",
    assignee: { name: "Caner D.", avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d" }
  }
];

const COLUMNS = [
  { id: "ideas", title: "Fikirler (Ideas)" },
  { id: "design", title: "Tasarım/Kurgu (Design/Editing)" },
  { id: "approval", title: "Müşteri Onayı (Customer Approval)" },
  { id: "scheduled", title: "Planlandı/Yayınlandı (Scheduled)" }
] as const;

// --- Components ---

function SortableTaskCard({ task }: { task: Task }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`bg-white dark:bg-[#1a2432] p-4 rounded-xl border border-[#dbe0e6] dark:border-gray-800 shadow-sm cursor-grab active:cursor-grabbing group relative ${
        isDragging ? "opacity-30 border-primary" : "hover:border-primary/50"
      }`}
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex gap-2 items-center flex-wrap">
          {task.type === "reels" && <Badge variant="default" className="bg-purple-500 hover:bg-purple-600 text-[10px] px-1.5 py-0 h-5">Reels</Badge>}
          {task.type === "post" && <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-5">Post</Badge>}
          {task.type === "story" && <Badge variant="outline" className="text-[10px] px-1.5 py-0 h-5 border-blue-200 text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-400">Story</Badge>}
        </div>
        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>
      
      <p className="font-semibold text-sm text-[#111418] dark:text-white mb-4 line-clamp-2">
        {task.title}
      </p>

      <div className="flex items-center justify-between mt-auto">
        <div className="flex flex-col gap-1.5 text-xs font-medium text-muted-foreground">
          {task.dueDate && (
             <span className="flex items-center gap-1.5 text-orange-600 dark:text-orange-400">
               <Calendar className="h-3.5 w-3.5" />
               {task.dueDate}
             </span>
          )}
          <span className="flex items-center gap-1.5">
             <Clock className="h-3.5 w-3.5" />
             {task.estimatedTime}
          </span>
        </div>
        <Avatar className="h-7 w-7 border-2 border-white dark:border-[#1a2432] ring-1 ring-gray-100 dark:ring-gray-800 shadow-sm">
          <AvatarImage src={task.assignee.avatar} />
          <AvatarFallback>{task.assignee.name.substring(0,2)}</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

function KanbanColumn({ col, tasks }: { col: { id: string, title: string }, tasks: Task[] }) {
  const { setNodeRef } = useDroppable({
    id: col.id,
    data: {
      type: "Column",
      col
    }
  });

  return (
    <div className="flex flex-col w-80 shrink-0 h-full">
       <div className="flex items-center justify-between mb-4">
         <div className="flex items-center gap-2">
           <h3 className="font-bold text-sm text-[#111418] dark:text-white">{col.title}</h3>
           <span className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-bold px-2 py-0.5 rounded-full">
              {tasks.length}
           </span>
         </div>
         <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground">
            <Plus className="h-4 w-4" />
         </Button>
       </div>

       <div 
         ref={setNodeRef}
         className="flex-1 bg-gray-100/50 dark:bg-gray-900/40 rounded-2xl p-3 border border-transparent flex flex-col gap-3 min-h-[150px]"
       >
         <SortableContext 
           id={col.id}
           items={tasks.map(t => t.id)} 
           strategy={verticalListSortingStrategy}
         >
            {tasks.map((task) => (
              <SortableTaskCard key={task.id} task={task} />
            ))}
         </SortableContext>
       </div>
    </div>
  );
}

// --- Main Page Component ---
export default function SocialMediaProjectKanban() {
  const params = useParams();
  const projectId = params.id;
  
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  const [activeId, setActiveId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const currentMonthContent = tasks.filter(t => t.columnId === 'scheduled').length;
  const targetContent = 15;
  const progressPercent = Math.min(100, Math.round((currentMonthContent / targetContent) * 100));

  const onDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const onDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over) return;
    
    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveTask = active.data.current?.type === "Task";
    const isOverTask = over.data.current?.type === "Task";
    const isOverColumn = over.data.current?.type === "Column";

    // 1. Hovering over another task
    if (isActiveTask && isOverTask) {
       setTasks((prev) => {
         const activeIndex = prev.findIndex((t) => t.id === activeId);
         const overIndex = prev.findIndex((t) => t.id === overId);
         const activeTask = prev[activeIndex];
         const overTask = prev[overIndex];
         
         if (!activeTask || !overTask) return prev;

         if (activeTask.columnId !== overTask.columnId) {
            const updated = [...prev];
            updated[activeIndex] = { ...updated[activeIndex], columnId: overTask.columnId };
            return arrayMove(updated, activeIndex, overIndex);
         }
         return prev;
       });
    }

    // 2. Hovering over an empty column
    if (isActiveTask && isOverColumn) {
      setTasks((prev) => {
        const activeIndex = prev.findIndex((t) => t.id === activeId);
        if (activeIndex === -1) return prev;
        
        const updated = [...prev];
        updated[activeIndex] = { ...updated[activeIndex], columnId: overId as ColumnId };
        return arrayMove(updated, activeIndex, activeIndex);
      });
    }
  };

  const onDragEnd = (event: DragEndEvent) => {
    setActiveId(null);
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveTask = active.data.current?.type === "Task";
    const isOverTask = over.data.current?.type === "Task";

    // Reorder inside same column
    if (isActiveTask && isOverTask) {
      setTasks((prev) => {
        const activeIndex = prev.findIndex((t) => t.id === activeId);
        const overIndex = prev.findIndex((t) => t.id === overId);
        const activeTask = prev[activeIndex];
        const overTask = prev[overIndex];

        if(activeTask && overTask && activeTask.columnId === overTask.columnId) {
          return arrayMove(prev, activeIndex, overIndex);
        }
        return prev;
      });
    }
  };

  const activeTask = activeId ? tasks.find(t => t.id === activeId) : null;

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] overflow-hidden bg-gray-50 dark:bg-background-dark">
      
      {/* Header Area */}
      <div className="p-6 md:px-8 border-b border-[#dbe0e6] dark:border-gray-800 bg-white dark:bg-[#1a2432] shrink-0">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
               <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Proje: #{projectId || "TechNova"}</span>
               <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-0 hover:bg-emerald-100">Aktif Yönetim</Badge>
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-[#111418] dark:text-white">Aylık Sosyal Medya İçerik Planı</h1>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-900/50 p-3 rounded-xl min-w-[280px] border border-[#dbe0e6] dark:border-gray-800">
             <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wide">Aylık Yayın Hedefi</span>
                <span className="text-sm font-black text-primary">{currentMonthContent} / {targetContent}</span>
             </div>
             <Progress value={progressPercent} className="h-2" />
             <p className="text-[10px] text-muted-foreground mt-1.5 font-medium">✨ Hedefe ulaşmak için {Math.max(0, targetContent - currentMonthContent)} gönderi daha planlanmalı.</p>
          </div>
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
          <div className="flex h-full gap-6">
            {COLUMNS.map((col) => {
               const columnTasks = tasks.filter((t) => t.columnId === col.id);
               return <KanbanColumn key={col.id} col={col} tasks={columnTasks} />;
            })}
          </div>

          <DragOverlay>
            {activeTask ? <SortableTaskCard task={activeTask} /> : null}
          </DragOverlay>
        </DndContext>
      </div>
    </div>
  );
}
