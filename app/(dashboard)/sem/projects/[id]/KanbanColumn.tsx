import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import KanbanItem from './KanbanItem';
import { KanbanTask, TaskStatus } from './page';

interface KanbanColumnProps {
    id: TaskStatus;
    title: string;
    borderClass: string;
    count: number;
    tasks: KanbanTask[];
}

export default function KanbanColumn({ id, title, borderClass, count, tasks }: KanbanColumnProps) {
    const { setNodeRef } = useDroppable({
        id: id,
    });

    return (
        <div className="w-[320px] bg-white dark:bg-[#1a2432] rounded-xl flex flex-col h-full border border-gray-200 dark:border-gray-800 shadow-sm shrink-0">

            {/* Column Header */}
            <div className={`p-4 border-b-2 flex items-center justify-between sticky top-0 bg-white/50 dark:bg-gray-800/20 backdrop-blur-sm rounded-t-xl z-20 ${borderClass}`}>
                <h3 className="font-bold text-sm text-gray-800 dark:text-gray-200">{title}</h3>
                <span className="text-[10px] font-black w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 uppercase flex items-center justify-center">
                    {count}
                </span>
            </div>

            {/* Column Content Area */}
            <div
                ref={setNodeRef}
                className="flex-1 p-3 overflow-y-auto custom-scrollbar flex flex-col gap-3 min-h-[150px] relative transition-colors duration-200 bg-gray-50/10 dark:bg-gray-800/10"
            >
                <SortableContext
                    items={tasks.map(t => t.id)}
                    strategy={verticalListSortingStrategy}
                >
                    {tasks.map(task => (
                        <KanbanItem key={task.id} task={task} />
                    ))}
                </SortableContext>

                {tasks.length === 0 && (
                    <div className="absolute inset-x-0 inset-y-8 flex flex-col items-center justify-center text-gray-400 pointer-events-none opacity-50">
                        <span className="material-symbols-outlined text-3xl mb-2">inbox</span>
                        <p className="text-xs font-medium">Burası boş</p>
                    </div>
                )}
            </div>

            {/* Add Task Button */}
            <div className="p-3 border-t border-gray-100 dark:border-gray-800 mt-auto shrink-0 bg-white dark:bg-[#1a2432] rounded-b-xl z-10 sticky bottom-0">
                <button className="w-full py-2 flex items-center justify-center gap-1.5 text-xs font-bold text-gray-500 hover:text-primary hover:bg-primary/5 hover:border-primary/20 transition-all rounded-lg border border-dashed border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/30">
                    <span className="material-symbols-outlined text-[16px]">add</span>
                    Görev Ekle
                </button>
            </div>
        </div>
    );
}
