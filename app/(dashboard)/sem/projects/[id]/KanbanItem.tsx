import React from 'react';
import Image from 'next/image';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { KanbanTask } from './page';

interface KanbanItemProps {
    task: KanbanTask;
}

export default function KanbanItem({ task }: KanbanItemProps) {
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
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.4 : 1,
        zIndex: isDragging ? 999 : "auto",
    };

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case 'high': return 'bg-red-500';
            case 'medium': return 'bg-yellow-500';
            case 'low': return 'bg-green-500';
            default: return 'bg-gray-500';
        }
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className={`
        bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700 
        hover:border-primary/50 dark:hover:border-primary/50 cursor-grab active:cursor-grabbing 
        shadow-sm flex flex-col gap-2 relative group touch-manipulation
        ${isDragging ? 'ring-2 ring-primary bg-primary/5' : ''}
      `}
        >
            {/* Priority Indicator Line */}
            <div className={`absolute top-0 left-0 bottom-0 w-1 rounded-l-lg ${getPriorityColor(task.priority)}`}></div>

            {/* Task Content */}
            <div className="pl-1">
                <p className="text-sm text-gray-800 dark:text-gray-200 font-medium leading-snug line-clamp-3 mb-2 break-words">
                    {task.content}
                </p>

                {/* Badges/Tags */}
                <div className="flex flex-wrap gap-1.5 mb-2 relative z-0">
                    {task.tags.map(tag => (
                        <span key={tag} className="bg-gray-100 dark:bg-gray-900/50 text-gray-500 dark:text-gray-400 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Footer info */}
                <div className="flex justify-between items-end mt-2 pt-2 border-t border-gray-100 dark:border-gray-800">

                    <div className="flex flex-col gap-1">
                        <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">{task.id}</span>
                        {task.dueDate && (
                            <span className={`text-[10px] font-bold flex items-center gap-1 ${task.dueDate.includes('Bugün') || task.dueDate.includes('Dün') ? 'text-red-500' : 'text-gray-500'}`}>
                                <span className="material-symbols-outlined text-[12px]">schedule</span>
                                {task.dueDate}
                            </span>
                        )}
                    </div>

                    {/* Assignees */}
                    {task.assignees && task.assignees.length > 0 && (
                        <div className="flex -space-x-1.5 relative z-0">
                            {task.assignees.map(user => (
                                <Image
                                    key={user.id}
                                    src={user.avatar}
                                    alt={user.name}
                                    title={user.name}
                                    width={20}
                                    height={20}
                                    className="w-5 h-5 rounded-full ring-1 ring-white dark:ring-gray-800 object-cover"
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
