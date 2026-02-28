import { createClient } from "@/utils/supabase/server";

export default async function VirtualMandapaPage() {
    const supabase = await createClient();

    return (
        <div className="space-y-8">
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-4xl font-heading font-bold mb-2">Virtual Mandapa</h1>
                    <p className="text-white/60">Live interactive video rooms for community meetings and prayers.</p>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* Upcoming Meetings */}
                <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-6">
                    <h2 className="text-xl font-heading font-bold mb-6 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14v-4z"></path><rect x="3" y="6" width="12" height="12" rx="2" ry="2"></rect></svg>
                        Scheduled Sessions
                    </h2>

                    <div className="space-y-4">
                        <div className="bg-[#272727] p-4 rounded-xl border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative z-10 w-full">
                                <h3 className="font-bold text-lg mb-1">Weekly Odia Quiz & Trivia</h3>
                                <p className="text-sm text-yellow-400 font-mono mb-2">Friday, 8:00 PM</p>
                                <p className="text-sm text-white/50 mb-3">Join us for a fun trivia night covering Odia history, food, and culture!</p>
                                <div className="flex items-center gap-2">
                                    <div className="flex -space-x-2">
                                        <div className="w-6 h-6 rounded-full bg-red-500 border border-[#272727]"></div>
                                        <div className="w-6 h-6 rounded-full bg-blue-500 border border-[#272727]"></div>
                                        <div className="w-6 h-6 rounded-full bg-green-500 border border-[#272727]"></div>
                                    </div>
                                    <span className="text-xs text-white/40">+12 Joined</span>
                                </div>
                            </div>
                            <button className="whitespace-nowrap bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-white/10 w-full sm:w-auto relative z-10">
                                RSVP
                            </button>
                        </div>

                        <div className="bg-[#272727] p-4 rounded-xl border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="w-full">
                                <h3 className="font-bold text-lg mb-1">Executive Committee Meeting</h3>
                                <p className="text-sm text-red-400 font-mono mb-2">Admin Only • Saturday, 10:00 AM</p>
                                <p className="text-sm text-white/50">Monthly review of financials and event planning.</p>
                            </div>
                            <button className="whitespace-nowrap bg-red-500/10 text-red-500 px-4 py-2 rounded-lg text-sm font-medium border border-red-500/20 w-full sm:w-auto cursor-not-allowed" disabled>
                                Locked
                            </button>
                        </div>
                    </div>
                </div>

                {/* Polls & Interactive */}
                <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-6">
                    <h2 className="text-xl font-heading font-bold mb-6 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                        Community Poll
                    </h2>

                    <div className="bg-[#272727] p-5 rounded-xl border border-white/5">
                        <h3 className="font-bold mb-4 leading-snug">What special Abadha item should we include for the next major Puja?</h3>

                        <div className="space-y-3">
                            {['Dalma', 'Rasabali', 'Kanika', 'Khaja'].map((item, i) => (
                                <button key={i} className="w-full text-left bg-[#1a1a1a] border border-white/10 hover:border-white/30 rounded-lg p-3 text-sm flex justify-between items-center group transition-colors">
                                    <span>{item}</span>
                                    <span className="w-4 h-4 rounded-full border border-white/30 group-hover:border-white transition-colors"></span>
                                </button>
                            ))}
                        </div>
                        <div className="mt-4 text-xs text-white/40 flex justify-between">
                            <span>142 Votes</span>
                            <span>Ends in 2 days</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
