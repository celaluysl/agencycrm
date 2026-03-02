"use client";

import React from "react";
import { TicketChat } from "@/components/client-portal/ticket-chat";

export default function SupportTicketPage() {
    return (
        <div className="flex-1 flex flex-col bg-gray-50/50 dark:bg-[#0f151c] min-h-0 h-full">
            <div className="p-4 md:p-8 space-y-6 max-w-7xl mx-auto w-full h-full flex flex-col">

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shrink-0">
                    <div>
                        <h1 className="text-2xl font-bold dark:text-white flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">support</span>
                            Destek ve Talepler
                        </h1>
                        <p className="text-sm text-gray-500 mt-1">İletişimde kalmak ve sorularınıza hızlıca yanıt bulmak için destek alanını kullanın.</p>
                    </div>
                </div>

                <TicketChat />

            </div>
        </div>
    );
}
