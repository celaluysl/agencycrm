"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export type Ticket = {
    id: string;
    title: string;
    status: "open" | "closed" | "in_progress";
    priority: "high" | "normal" | "low";
    lastMessage: string;
    updatedAt: string;
};

export type Message = {
    id: string;
    sender: "client" | "agent";
    text: string;
    timestamp: string;
    attachments?: string[];
};

export function TicketChat() {
    const [tickets, setTickets] = useState<Ticket[]>([
        {
            id: "TKT-001",
            title: "Sitemap Hatası Hakkında",
            status: "open",
            priority: "high",
            lastMessage: "Sorunu inceliyoruz, en kısa sürede dönüş yapacağız.",
            updatedAt: "10:45",
        },
        {
            id: "TKT-002",
            title: "Mayıs Ayı SEO Raporu Eksik Veri",
            status: "closed",
            priority: "normal",
            lastMessage: "Ekli dosyada güncel raporu bulabilirsiniz.",
            updatedAt: "Dün",
        },
    ]);

    const [activeTicketId, setActiveTicketId] = useState<string>("TKT-001");
    const [message, setMessage] = useState("");

    const activeTicket = tickets.find((t) => t.id === activeTicketId);

    const mockMessages: Record<string, Message[]> = {
        "TKT-001": [
            { id: "m1", sender: "client", text: "Merhaba, Google Search Console'da sitemap okuma hatası alıyoruz. Düzeltilmesi için destek rica ediyorum.", timestamp: "10:30" },
            { id: "m2", sender: "agent", text: "Merhaba, sorunu inceliyoruz, en kısa sürede dönüş yapacağız.", timestamp: "10:45" },
        ],
        "TKT-002": [
            { id: "m3", sender: "client", text: "Mayıs raporunda SEM harcamaları 0 görünüyor.", timestamp: "Dün 14:00" },
            { id: "m4", sender: "agent", text: "Kontrol sağlandı. İlgili veri güncellendi, ekli dosyada bulabilirsiniz.", timestamp: "Dün 15:30", attachments: ["Guncel_Mayis_Raporu.pdf"] },
        ]
    };

    const [messages, setMessages] = useState<Record<string, Message[]>>(mockMessages);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Form states for new ticket
    const [newTicketTitle, setNewTicketTitle] = useState("");
    const [newTicketCategory, setNewTicketCategory] = useState("Teknik Destek");
    const [newTicketPriority, setNewTicketPriority] = useState<"normal" | "high">("normal");
    const [newTicketDescription, setNewTicketDescription] = useState("");
    const [newTicketFile, setNewTicketFile] = useState<File | null>(null);

    const handleCreateTicket = () => {
        if (!newTicketTitle.trim()) return;

        const newId = `TKT-00${tickets.length + 1}`;
        const newTicket: Ticket = {
            id: newId,
            title: newTicketTitle,
            status: "open",
            priority: newTicketPriority,
            lastMessage: newTicketDescription || "Yeni destek talebi oluşturuldu.",
            updatedAt: "Şimdi"
        };

        setTickets(prev => [newTicket, ...prev]);

        if (newTicketDescription.trim()) {
            setMessages(prev => ({
                ...prev,
                [newId]: [{
                    id: Date.now().toString(),
                    sender: "client",
                    text: newTicketDescription,
                    timestamp: "Şimdi",
                    attachments: newTicketFile ? [newTicketFile.name] : undefined
                }]
            }));
        } else {
            setMessages(prev => ({ ...prev, [newId]: [] }));
        }

        setActiveTicketId(newId);
        setIsModalOpen(false);
        setNewTicketTitle("");
        setNewTicketCategory("Teknik Destek");
        setNewTicketPriority("normal");
        setNewTicketDescription("");
        setNewTicketFile(null);
    };

    const handleCloseTicket = () => {
        setTickets(prev => prev.map(t => t.id === activeTicketId ? { ...t, status: "closed" } : t));
    };

    const handleSendMessage = () => {
        if (!message.trim() || !activeTicketId) return;

        const newMessage: Message = {
            id: Date.now().toString(),
            sender: "client",
            text: message,
            timestamp: "Şimdi",
        };
        setMessages(prev => ({
            ...prev,
            [activeTicketId]: [...(prev[activeTicketId] || []), newMessage]
        }));
        setMessage("");
    };

    return (
        <div className="flex flex-col lg:flex-row gap-6 flex-1 min-h-[500px] w-full pb-4">

            {/* TICKET LIST */}
            <div className="w-full lg:w-1/3 bg-white dark:bg-[#1a2432] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col overflow-hidden">
                <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-gray-50/50 dark:bg-gray-800/30">
                    <h3 className="font-bold text-base flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">forum</span>
                        Destek Talepleri
                    </h3>
                    <Button onClick={() => setIsModalOpen(true)} size="sm" className="h-8 text-xs bg-primary hover:bg-primary/90">
                        <span className="material-symbols-outlined text-sm mr-1">add</span> Yeni
                    </Button>
                </div>

                <div className="flex-1 overflow-y-auto p-2 space-y-2">
                    {tickets.map((ticket) => (
                        <div
                            key={ticket.id}
                            onClick={() => setActiveTicketId(ticket.id)}
                            className={`p-3 rounded-lg cursor-pointer transition-all border ${activeTicketId === ticket.id
                                ? "bg-primary/5 border-primary/30"
                                : "bg-white dark:bg-gray-800/50 border-gray-100 dark:border-gray-800 hover:border-primary/20"
                                }`}
                        >
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-[10px] font-bold text-gray-500 uppercase">{ticket.id}</span>
                                <span className="text-[10px] text-gray-400">{ticket.updatedAt}</span>
                            </div>
                            <h4 className="font-bold text-sm text-gray-900 dark:text-gray-100 mb-1">{ticket.title}</h4>
                            <p className="text-xs text-gray-500 line-clamp-1">{ticket.lastMessage}</p>

                            <div className="flex items-center gap-2 mt-3">
                                <Badge variant="outline" className={`text-[9px] px-1.5 py-0 rounded ${ticket.status === 'open' ? 'border-primary text-primary' :
                                    ticket.status === 'in_progress' ? 'border-yellow-500 text-yellow-600' : 'border-gray-400 text-gray-500'
                                    }`}>
                                    {ticket.status === 'open' ? 'Açık' : ticket.status === 'in_progress' ? 'İşlemde' : 'Kapalı'}
                                </Badge>

                                {ticket.priority === 'high' && (
                                    <Badge variant="outline" className="text-[9px] px-1.5 py-0 rounded border-red-200 text-red-500 bg-red-50 dark:bg-red-900/10">Acil</Badge>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CHAT AREA */}
            <div className="w-full lg:w-2/3 bg-white dark:bg-[#1a2432] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col overflow-hidden relative">
                {activeTicket ? (
                    <>
                        <div className="p-4 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/30 flex justify-between items-center z-10">
                            <div>
                                <h3 className="font-bold text-base text-gray-900 dark:text-gray-100">{activeTicket.title}</h3>
                                <p className="text-xs text-gray-500">{activeTicket.id} • {activeTicket.status === 'open' ? 'Açık' : activeTicket.status === 'in_progress' ? 'İşlemde' : 'Kapalı'}</p>
                            </div>
                            {activeTicket.status !== 'closed' && (
                                <Button onClick={handleCloseTicket} variant="outline" size="sm" className="h-8 text-xs text-red-500 hover:text-red-700 hover:bg-red-50 border-red-200">
                                    Talebi Kapat
                                </Button>
                            )}
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50 dark:bg-slate-900/20 z-0 relative pb-4">
                            {messages[activeTicketId]?.map((msg) => (
                                <div key={msg.id} className={`flex ${msg.sender === "client" ? "justify-end" : "justify-start"}`}>
                                    <div className={`max-w-[75%] rounded-2xl p-3 ${msg.sender === "client"
                                        ? "bg-primary text-white rounded-br-none"
                                        : "bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-bl-none text-gray-800 dark:text-gray-200"
                                        }`}>
                                        <div className="flex items-center gap-2 mb-1 opacity-70">
                                            <span className="material-symbols-outlined text-[12px]">{msg.sender === "client" ? "person" : "support_agent"}</span>
                                            <span className="text-[9px] uppercase tracking-wider font-bold">
                                                {msg.sender === "client" ? "Siz" : "Müşteri Temsilcisi"}
                                            </span>
                                            <span className="text-[9px] ml-auto">{msg.timestamp}</span>
                                        </div>
                                        <p className="text-sm whitespace-pre-wrap">{msg.text}</p>

                                        {msg.attachments && msg.attachments.length > 0 && (
                                            <div className="mt-2 space-y-1">
                                                {msg.attachments.map((file, idx) => (
                                                    <div key={idx} className="flex items-center gap-2 p-1.5 bg-black/10 dark:bg-white/10 rounded border border-black/20 dark:border-white/20 cursor-pointer hover:bg-black/20 transition-colors">
                                                        <span className="material-symbols-outlined text-sm">attach_file</span>
                                                        <span className="text-xs font-semibold">{file}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-3 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-[#1a2432] z-10 w-full">
                            <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 p-2 focus-within:ring-1 focus-within:ring-primary/50 transition-all">
                                <button className="text-gray-400 hover:text-primary transition-colors p-1" title="Dosya Ekle">
                                    <span className="material-symbols-outlined">attach_file</span>
                                </button>
                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                                    placeholder="Mesajınızı yazın..."
                                    className="flex-1 bg-transparent border-none focus:outline-none text-sm px-2 text-gray-800 dark:text-gray-200"
                                    disabled={activeTicket.status === 'closed'}
                                />
                                <button
                                    onClick={handleSendMessage}
                                    disabled={!message.trim() || activeTicket.status === 'closed'}
                                    className="bg-primary hover:bg-primary/90 text-white p-2 rounded-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    <span className="material-symbols-outlined text-sm font-bold">send</span>
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
                        <span className="material-symbols-outlined text-4xl mb-2 opacity-50">forum</span>
                        <p className="text-sm">Görüntülemek için bir destek talebi seçin.</p>
                    </div>
                )}
            </div>

            {/* NEW TICKET MODAL */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white dark:bg-[#1a2432] rounded-2xl w-full max-w-md shadow-xl overflow-hidden border border-gray-200 dark:border-gray-800">
                        <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-gray-50/50 dark:bg-gray-800/30">
                            <h3 className="font-bold text-lg">Yeni Destek Talebi</h3>
                            <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <div className="p-5 space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Konu Başlığı</label>
                                <input
                                    type="text"
                                    value={newTicketTitle}
                                    onChange={e => setNewTicketTitle(e.target.value)}
                                    className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 text-sm focus:ring-1 focus:ring-primary dark:bg-gray-800 bg-white dark:bg-[#1a2432]"
                                    placeholder="Örn: Fatura Hakkında"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Kategori</label>
                                    <select
                                        value={newTicketCategory}
                                        onChange={e => setNewTicketCategory(e.target.value)}
                                        className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 text-sm focus:ring-1 focus:ring-primary dark:bg-gray-800 bg-white dark:bg-[#1a2432]"
                                    >
                                        <option value="Teknik Destek">Teknik Destek</option>
                                        <option value="Muhasebe">Muhasebe</option>
                                        <option value="Öneri / Şikayet">Öneri / Şikayet</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Öncelik</label>
                                    <select
                                        value={newTicketPriority}
                                        onChange={e => setNewTicketPriority(e.target.value as "normal" | "high")}
                                        className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 text-sm focus:ring-1 focus:ring-primary dark:bg-gray-800 bg-white dark:bg-[#1a2432]"
                                    >
                                        <option value="normal">Normal</option>
                                        <option value="high">Acil</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Detaylı Açıklama</label>
                                <textarea
                                    rows={4}
                                    value={newTicketDescription}
                                    onChange={e => setNewTicketDescription(e.target.value)}
                                    className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 text-sm focus:ring-1 focus:ring-primary dark:bg-gray-800 bg-white dark:bg-[#1a2432]"
                                    placeholder="Sorununuzu veya talebinizi detaylıca açıklayın..."
                                />
                            </div>
                            <div>
                                <button className="flex items-center gap-2 text-primary text-xs font-bold border border-primary/30 bg-primary/5 hover:bg-primary/10 px-3 py-2 rounded-lg w-full justify-center transition-colors border-dashed relative overflow-hidden">
                                    <span className="material-symbols-outlined text-base">upload_file</span> {newTicketFile ? newTicketFile.name : "Dosya Yükle"}
                                    <input
                                        type="file"
                                        onChange={e => e.target.files && setNewTicketFile(e.target.files[0])}
                                        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="p-4 border-t border-gray-100 dark:border-gray-800 flex justify-end gap-2 bg-gray-50/50 dark:bg-gray-800/30">
                            <Button variant="outline" onClick={() => setIsModalOpen(false)}>İptal</Button>
                            <Button onClick={handleCreateTicket} disabled={!newTicketTitle.trim()}>Talebi Oluştur</Button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
