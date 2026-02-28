import { createClient } from "@/utils/supabase/server";

export default async function ChatPage() {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    // In a real app we'd fetch messages from the `messages` table
    // and use Supabase Realtime to subscribe to new inserts.

    return (
        <div className="flex flex-col h-[calc(100vh-12rem)] md:h-[calc(100vh-8rem)]">
            <header className="mb-6 flex items-center justify-between flex-shrink-0">
                <div>
                    <h1 className="text-3xl font-heading font-bold mb-1">Community Square</h1>
                    <p className="text-white/60 text-sm">General discussion and quick networking.</p>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium bg-green-500/10 text-green-400 px-3 py-1.5 rounded-full border border-green-500/20">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    24 Online
                </div>
            </header>

            <div className="flex-1 bg-[#1a1a1a] border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-2xl relative">

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 flex flex-col">

                    <div className="text-center text-xs text-white/40 mb-4 border-b border-white/5 pb-4">
                        Today
                    </div>

                    <div className="flex gap-4 max-w-[85%]">
                        <div className="w-8 h-8 rounded-full bg-[#272727] flex items-center justify-center flex-shrink-0 text-xs font-bold border border-white/10">MM</div>
                        <div className="flex flex-col gap-1 items-start">
                            <span className="text-xs text-white/50 flex items-center gap-2">Manoj Mishra <span className="text-[10px]">10:23 AM</span></span>
                            <div className="bg-[#272727] text-white px-4 py-3 rounded-2xl rounded-tl-sm text-sm border border-white/5">
                                Namaskar everyone! Does anyone know a good place to buy paneer in Wuse?
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 max-w-[85%] self-end flex-row-reverse">
                        <div className="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center flex-shrink-0 text-xs font-bold border border-blue-500/30 text-blue-200">YOU</div>
                        <div className="flex flex-col gap-1 items-end">
                            <span className="text-xs text-white/50 flex items-center gap-2"><span className="text-[10px]">10:27 AM</span> You</span>
                            <div className="bg-blue-600/20 text-blue-100 px-4 py-3 rounded-2xl rounded-tr-sm text-sm border border-blue-500/30">
                                Yes! Try the supermarket near the old secretariat. They usually stock fresh paneer on Tuesdays.
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 max-w-[85%]">
                        <div className="w-8 h-8 rounded-full bg-[#272727] flex items-center justify-center flex-shrink-0 text-xs font-bold border border-white/10">SM</div>
                        <div className="flex flex-col gap-1 items-start">
                            <span className="text-xs text-white/50 flex items-center gap-2">Sanjay Mishra <span className="text-[10px]">10:35 AM</span> <span className="text-yellow-500">★ Admin</span></span>
                            <div className="bg-[#272727] text-white px-4 py-3 rounded-2xl rounded-tl-sm text-sm border border-white/5">
                                Just a reminder to register for the upcoming blood donation drive this weekend. Let's show up in numbers!
                            </div>
                        </div>
                    </div>
                </div>

                {/* Input Area */}
                <div className="p-4 bg-[#272727] border-t border-white/10">
                    <form className="flex gap-2">
                        <button type="button" className="p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-xl transition-colors shrink-0" title="Audio to Text (Odia Support)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" x2="12" y1="19" y2="22" /></svg>
                        </button>
                        <input
                            type="text"
                            placeholder="Type a message..."
                            className="flex-1 bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-white outline-none transition-colors placeholder:text-white/30"
                        />
                        <button type="submit" className="px-6 py-3 bg-white text-black text-sm font-bold rounded-xl hover:bg-white/90 transition-all active:scale-[0.98] shrink-0">
                            Send
                        </button>
                    </form>
                    <div className="text-[10px] text-white/40 mt-2 px-14 flex justify-between">
                        <span>Rate limited: 1 msg / 5 secs</span>
                        <span className="flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>
                            End-to-End Encrypted
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
