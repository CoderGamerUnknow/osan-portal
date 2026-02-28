import { createClient } from "@/utils/supabase/server";

export default async function CalendarPage() {
    const supabase = await createClient();

    // In production, we fetch `pujas` and `events` here.
    // For now, generating a static 'Nike x Wild One' interface block

    return (
        <div className="space-y-10">
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-4xl font-heading font-bold mb-2">Pujas & Events</h1>
                    <p className="text-white/60">Community calendar, RSVP, and Abadha (Prasad) pre-orders.</p>
                </div>
                <button className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-white/90 transition-all">
                    Request to Host a Puja
                </button>
            </header>

            {/* Calendar Grid & List View */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Main Event List */}
                <div className="lg:col-span-2 space-y-4">

                    {/* Locked Event Card (e.g. major festival managed by Admin) */}
                    <div className="bg-[#272727] border border-white/10 rounded-2xl p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4">
                            <span className="flex items-center gap-1 text-xs text-red-400 bg-red-500/10 px-2 py-1 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                Locked by Admin
                            </span>
                        </div>

                        <div className="flex gap-6 items-start">
                            <div className="flex flex-col items-center justify-center min-w-[80px] h-20 bg-[#1a1a1a] rounded-xl border border-white/5">
                                <span className="text-sm text-red-400 font-bold uppercase">JUL</span>
                                <span className="text-2xl font-heading font-bold">14</span>
                            </div>

                            <div className="flex-1">
                                <h3 className="text-2xl font-bold mb-1">Rath Yatra 2026</h3>
                                <p className="text-sm text-white/50 mb-4 flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                    Abuja National Stadium Grounds
                                </p>

                                <div className="flex flex-wrap gap-3 mt-4">
                                    <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                                        RSVP Going
                                    </button>
                                    <button className="border border-yellow-500/50 text-yellow-500 hover:bg-yellow-500/10 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                                        Pre-order Abadha (₦5000)
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* User Hosted Puja Card */}
                    <div className="bg-[#272727] border border-white/10 rounded-2xl p-6 relative overflow-hidden">
                        <div className="flex gap-6 items-start">
                            <div className="flex flex-col items-center justify-center min-w-[80px] h-20 bg-[#1a1a1a] rounded-xl border border-white/5">
                                <span className="text-sm text-white/50 font-bold uppercase">AUG</span>
                                <span className="text-2xl font-heading font-bold">28</span>
                            </div>

                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-1">Ganesh Puja</h3>
                                <p className="text-sm text-white/50 mb-1 flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                    Hosted by: The Mohanty Family
                                </p>
                                <p className="text-sm text-white/60 mt-3 font-sans line-clamp-2">
                                    Join us for the evening aarti starting at 6:30 PM followed by Prasad. All community members are welcome.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Sidebar Mini Calendar & Smart Logistics Preview */}
                <div className="space-y-6">
                    <div className="bg-[#272727] border border-white/10 rounded-2xl p-6">
                        <h3 className="font-heading font-bold mb-4">My Abadha Bookings</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center bg-[#1a1a1a] p-3 rounded-lg border border-white/5">
                                <div>
                                    <p className="text-sm font-medium">Rath Yatra</p>
                                    <p className="text-xs text-white/50">2x Plates</p>
                                </div>
                                <div className="text-sm text-green-400 font-bold">Confirmed</div>
                            </div>
                        </div>

                        <button className="w-full mt-4 text-xs text-white/50 hover:text-white transition-colors">
                            View past bookings →
                        </button>
                    </div>

                    <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-2xl p-6">
                        <div className="flex items-center gap-2 text-blue-400 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                            <h3 className="font-bold text-sm uppercase tracking-wider">Host Resources</h3>
                        </div>
                        <p className="text-sm text-white/70 mb-4">Planning to host a puja? Use our smart inventory calculator to estimate raw materials needed (Rice, Dal, Veggies) based on expected headcounts.</p>
                        <button className="bg-blue-500 text-white w-full py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
                            Open Smart Calculator
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
