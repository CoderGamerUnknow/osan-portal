import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { logout } from "../auth/actions";

export default async function AdminDashboardPage() {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        redirect("/login");
    }

    // The middleware already checks if the secret key matches (returning 404 if not),
    // but we also double check the db profile role just to be safe.
    const { data: profile } = await supabase
        .from("profiles")
        .select("is_admin")
        .eq("id", user.id)
        .single();

    if (!profile?.is_admin) {
        // Hide existence of the admin page from non-admins
        redirect("/404");
    }

    return (
        <div className="min-h-screen bg-[#111] text-white flex flex-col font-sans">

            {/* Admin Header */}
            <header className="bg-red-900/20 border-b border-red-500/20 px-8 py-4 flex items-center justify-between sticky top-0 z-50 backdrop-blur-md">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center font-bold text-black font-heading">
                        OSAN
                    </div>
                    <div>
                        <h1 className="font-bold text-lg leading-tight flex items-center gap-2">
                            Command Center
                            <span className="bg-red-500 text-black text-[10px] uppercase px-2 py-0.5 rounded font-bold tracking-wider">Restricted</span>
                        </h1>
                        <p className="text-xs text-red-300 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                            Secure Session Active
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/community-dashboard" className="text-sm text-white/50 hover:text-white transition-colors">
                        Exit to Community
                    </Link>
                    <form action={logout}>
                        <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm transition-colors font-medium">
                            Terminate Session
                        </button>
                    </form>
                </div>
            </header>

            <main className="flex-1 p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-full">

                {/* Left Col: Security & Metrics */}
                <div className="space-y-8">

                    <section className="bg-[#1a1a1a] border border-red-500/20 rounded-2xl p-6 shadow-2xl">
                        <h2 className="text-xl font-heading font-bold mb-4 flex items-center gap-2 text-red-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></svg>
                            Security Overview
                        </h2>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center p-3 bg-black/50 rounded-lg border border-white/5">
                                <span className="text-sm text-white/60">Failed Logins (24h)</span>
                                <span className="font-mono text-yellow-500">12</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-red-900/10 rounded-lg border border-red-500/20">
                                <span className="text-sm text-white/60">Hacker Traps Triggered</span>
                                <span className="font-mono text-red-400 font-bold flex items-center gap-2">
                                    3
                                    <button className="text-[10px] bg-red-500 text-black px-2 py-0.5 rounded uppercase hover:bg-red-400">View Logs</button>
                                </span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-black/50 rounded-lg border border-white/5">
                                <span className="text-sm text-white/60">Active Auto-Bans</span>
                                <span className="font-mono text-green-400">1</span>
                            </div>
                        </div>
                    </section>

                    <section className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-6">
                        <h2 className="text-xl font-heading font-bold mb-4 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>
                            Calendar & Logistics
                        </h2>
                        <div className="space-y-3">
                            <button className="w-full text-left p-3 rounded-lg border border-white/10 hover:bg-white/5 transition-colors text-sm flex justify-between items-center">
                                Lock Upcoming Puja Row
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                            </button>
                            <button className="w-full text-left p-3 rounded-lg border border-white/10 hover:bg-white/5 transition-colors text-sm flex justify-between items-center">
                                View Smart Inventory Sheet
                                <span className="bg-yellow-500/20 text-yellow-500 text-xs px-2 py-0.5 rounded">Rath Yatra</span>
                            </button>
                        </div>
                    </section>

                </div>

                {/* Right Col: Approvals & Tools */}
                <div className="lg:col-span-2 space-y-8">

                    <section className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-6">
                        <h2 className="text-xl font-heading font-bold mb-4 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                            Pending Member Approvals
                        </h2>

                        {/* Mock Pending User */}
                        <div className="flex items-center justify-between p-4 bg-black/30 rounded-xl border border-white/5">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#272727] flex items-center justify-center font-bold">AK</div>
                                <div>
                                    <p className="font-bold flex items-center gap-2">Alok Kumar <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-white/70">Abuja</span></p>
                                    <p className="text-xs text-white/50">+234 809 123 4567 • alok@example.com</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button className="bg-red-500/10 text-red-500 hover:bg-red-500/20 px-3 py-1.5 rounded text-sm font-medium transition-colors">Reject</button>
                                <button className="bg-white text-black hover:bg-white/90 px-3 py-1.5 rounded text-sm font-bold transition-colors">Verify & Approve</button>
                            </div>
                        </div>

                        <div className="mt-4 text-center text-sm text-white/30 border-t border-white/5 pt-4">
                            Showing 1 of 1 pending applications.
                        </div>
                    </section>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <section className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-6">
                            <h2 className="text-xl font-heading font-bold mb-4 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" x2="22" y1="12" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Admin AI Tools
                            </h2>
                            <p className="text-sm text-white/60 mb-4 h-10">Use AI with write-access to draft announcements and manage DB records.</p>
                            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 rounded-lg hover:opacity-90 transition-opacity flex justify-center items-center gap-2">
                                Launch AI Command
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" x2="11" y1="2" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                            </button>
                        </section>

                        <section className="bg-red-900/10 border border-red-500/20 rounded-2xl p-6 text-red-100 flex flex-col">
                            <h2 className="text-xl font-heading font-bold mb-4 flex items-center gap-2 text-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><line x1="12" x2="12" y1="9" y2="13" /><line x1="12" x2="12.01" y1="17" y2="17" /></svg>
                                Emergency Broadcast
                            </h2>
                            <p className="text-sm text-red-300/80 mb-4 flex-1">Send an immediate push notification to all users or trigger the 'Blood Buddy' text network.</p>
                            <button className="w-full bg-red-600/80 hover:bg-red-600 text-white font-bold py-3 rounded-lg transition-colors border border-red-500">
                                Activate Alert System
                            </button>
                        </section>
                    </div>

                </div>

            </main>
        </div>
    );
}
