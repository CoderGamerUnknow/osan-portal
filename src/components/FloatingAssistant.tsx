"use client";

import { useState } from "react";

export default function FloatingAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: "system" | "user" | "ai", content: string }[]>([
        { role: "ai", content: "Namaskar! How can I help you today? I can answer questions in English or Odia about community guidelines, events, and resources." }
    ]);
    const [input, setInput] = useState("");

    const toggleOpen = () => setIsOpen(!isOpen);

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        // Echo back user input optimistically
        setMessages((prev) => [...prev, { role: "user", content: input }]);
        const currentInput = input;
        setInput("");

        // In a real application, we would send this via Edge Function / `/api/chat` route
        // to an LLM like OpenAI to query the vector DB and tables with RAG.

        // Simulating typing delay and generic response
        setTimeout(() => {
            if (currentInput.toLowerCase().includes("rath yatra")) {
                setMessages((prev) => [...prev, { role: "ai", content: "Rath Yatra 2026 is scheduled for July 14th at the Abuja National Stadium Grounds. You can request 'Abadha' pre-orders on the Calendar page." }]);
            } else if (currentInput.toLowerCase().includes("phone") || currentInput.toLowerCase().includes("number")) {
                setMessages((prev) => [...prev, { role: "system", content: "⚠️ Request blocked: Sharing private phone numbers violates OSAN privacy policy. An alert has been logged." }]);
            } else {
                setMessages((prev) => [...prev, { role: "ai", content: "I am currently running in offline demo mode. My connection to the knowledge base will be established when the backend is fully deployed!" }]);
            }
        }, 1000);
    };

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={toggleOpen}
                className={`fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#272727] text-white rounded-full flex items-center justify-center shadow-2xl shadow-black border border-white/20 transition-all hover:scale-105 active:scale-95 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
                aria-label="Open AI Assistant"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" x2="12" y1="19" y2="22" /><rect width="18" height="6" x="3" y="2" rx="1" ry="1" opacity="0.3" /></svg>
            </button>

            {/* Chat Window Window */}
            {isOpen && (
                <div className="fixed bottom-6 right-6 z-50 w-[90vw] max-w-[400px] h-[600px] max-h-[80vh] bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-300">

                    {/* Header */}
                    <div className="bg-[#272727]/90 px-6 py-4 flex justify-between items-center border-b border-white/5">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500 to-red-500 flex items-center justify-center text-black shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" x2="22" y1="12" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                            </div>
                            <div>
                                <h3 className="font-bold text-sm tracking-wide">OSAN AI Guide</h3>
                                <p className="text-[10px] text-green-400 font-mono flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block"></span>
                                    Listening
                                </p>
                            </div>
                        </div>

                        <button onClick={toggleOpen} className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18" /><line x1="6" x2="18" y1="6" y2="18" /></svg>
                        </button>
                    </div>

                    {/* Messages Log */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 flex flex-col scrollbar-hide">
                        {messages.map((m, i) => (
                            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} max-w-full`}>
                                <div
                                    className={`
                    px-4 py-3 rounded-2xl text-sm leading-relaxed max-w-[85%]
                    ${m.role === 'user' ? 'bg-white text-black rounded-br-sm shadow-md' : ''}
                    ${m.role === 'ai' ? 'bg-[#272727] text-white border border-white/5 rounded-bl-sm' : ''}
                    ${m.role === 'system' ? 'bg-red-500/10 text-red-400 border border-red-500/20 rounded-bl-sm font-mono text-xs w-full' : ''}
                  `}
                                >
                                    {m.content}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* User Input & Audio Controls */}
                    <div className="p-4 border-t border-white/10 bg-[#272727]/50 backdrop-blur-md">
                        <form onSubmit={handleSend} className="flex gap-2 relative">
                            <input
                                autoFocus
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="flex-1 bg-[#1a1a1a] border border-white/10 text-white rounded-full px-5 py-3 pr-12 text-sm focus:border-white outline-none transition-colors placeholder:text-white/30"
                                placeholder="Type or click the mic to speak..."
                            />
                            <button
                                type="button"
                                className={`absolute right-1 top-1 bottom-1 px-3 text-white/50 hover:text-white transition-colors ${input ? 'hidden' : 'block'}`}
                                title="Speak (English / Odia / Hindi)"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" x2="12" y1="19" y2="22" /></svg>
                            </button>
                            <button
                                type="submit"
                                className={`absolute right-1 top-1 bottom-1 px-3 bg-white text-black rounded-full transition-all active:scale-95 ${input ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none'}`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" x2="11" y1="2" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                            </button>
                        </form>
                        <div className="text-[10px] text-white/30 text-center mt-3 mx-4 space-x-2">
                            <span>Powered by RAG</span>
                            <span>•</span>
                            <span>Guardrails Active</span>
                            <span>•</span>
                            <a href="#" className="hover:underline">Clear History</a>
                        </div>
                    </div>

                </div>
            )}
        </>
    );
}
