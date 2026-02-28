import { createClient } from "@/utils/supabase/server";

export default async function MemberDirectoryPage() {
    const supabase = await createClient();

    // In a real scenario, this fetches from the secure `business_directory_view`
    // and `profiles` table. Since we don't have db migrations run yet, we'll
    // mock the UI to show the 'Nike x Wild One' aesthetic structure.

    return (
        <div className="space-y-10">
            <header>
                <h1 className="text-4xl font-heading font-bold mb-2">Member Directory & Business</h1>
                <p className="text-white/60">Connect with fellow Odias and support community businesses.</p>
            </header>

            {/* Search & Filter */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <input
                    type="text"
                    placeholder="Search members, skills, or businesses..."
                    className="flex-1 bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-white outline-none transition-colors placeholder:text-white/30"
                />
                <select className="bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-white outline-none appearance-none min-w-[150px]">
                    <option>All Categories</option>
                    <option>IT & Software</option>
                    <option>Healthcare</option>
                    <option>Finance</option>
                    <option>Logistics</option>
                </select>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Business Yellow Pages */}
                <div className="lg:col-span-2 space-y-6">
                    <h2 className="text-2xl font-heading font-semibold border-b border-white/10 pb-4">Community Businesses</h2>

                    <div className="grid sm:grid-cols-2 gap-4">
                        {/* Mock Business Card */}
                        <div className="bg-[#272727] border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-colors group">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-lg font-bold">Kalinga Tech Solutions</h3>
                                <span className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded">IT Services</span>
                            </div>
                            <p className="text-sm text-white/50 mb-4 line-clamp-2">
                                Providing enterprise software development and IT consulting across Abuja and Lagos.
                            </p>
                            <div className="flex items-center gap-3 border-t border-white/10 pt-4 mt-auto">
                                <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center text-xs font-bold">SM</div>
                                <div className="text-sm">
                                    <p className="text-white/80">Sanjay Mishra</p>
                                    <p className="text-white/40 text-xs">Contact for details</p>
                                </div>
                            </div>
                        </div>

                        {/* Mock Business Card 2 */}
                        <div className="bg-[#272727] border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-colors group">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-lg font-bold">Utkal Spices Hub</h3>
                                <span className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded">Food & Retail</span>
                            </div>
                            <p className="text-sm text-white/50 mb-4 line-clamp-2">
                                Authentic Odia spices and ingredients imported directly. Mustard oil, Panch Phutana, and more.
                            </p>
                            <div className="flex items-center gap-3 border-t border-white/10 pt-4 mt-auto">
                                <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center text-xs font-bold">RP</div>
                                <div className="text-sm">
                                    <p className="text-white/80">Rina Parida</p>
                                    <p className="text-white/40 text-xs">Wuse Market, Abuja</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wall of Fame Sidebar */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-heading font-semibold border-b border-white/10 pb-4 text-yellow-500">Wall of Fame</h2>

                    <div className="bg-gradient-to-b from-[#272727] to-[#1a1a1a] border border-yellow-500/20 rounded-2xl p-6">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-500/10 text-yellow-500 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /></svg>
                        </div>
                        <h4 className="font-bold text-lg mb-1">Academic Excellence</h4>
                        <p className="text-sm text-white/60 mb-4">
                            Congratulations to <span className="text-white/90">Aarav Dash</span> for securing top ranks in the National Science Olympiad Nigeria!
                        </p>
                        <p className="text-xs text-white/40 border-t border-white/10 pt-3">Shared by: Subrat Dash</p>
                    </div>

                    <button className="w-full py-3 border border-dashed border-white/30 rounded-xl text-sm text-white/60 hover:text-white hover:border-white/50 transition-colors flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="5" y2="19" /><line x1="5" x2="19" y1="12" y2="12" /></svg>
                        Submit Good News
                    </button>
                </div>
            </div>
        </div>
    );
}
