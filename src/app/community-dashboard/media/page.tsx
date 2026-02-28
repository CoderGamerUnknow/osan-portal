import { createClient } from "@/utils/supabase/server";

export default async function MediaVaultPage() {
    const supabase = await createClient();

    return (
        <div className="space-y-10">
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-4xl font-heading font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
                        Cultural Media Vault
                    </h1>
                    <p className="text-white/60">An exclusive archive of Odia bhajans, past Rath Yatra streams, and kids&apos; heritage lessons.</p>
                </div>

                {/* Placeholder for live stream indicator. Active only when admin sets stream URL */}
                <button className="bg-red-500 text-white px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    Watch Live: Rath Yatra Preps
                </button>
            </header>

            {/* Categories / Filters */}
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {['All Media', 'Bhajans', 'Festival VODs', 'Kids Odia Lessons', 'Photos'].map((cat, i) => (
                    <button
                        key={cat}
                        className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${i === 0 ? 'bg-white text-black' : 'bg-[#272727] text-white/70 hover:bg-white/10'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid of videos/media */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Media Block 1 */}
                <div className="group cursor-pointer">
                    <div className="relative aspect-video bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/10 mb-3">
                        <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Video cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors flex items-center justify-center">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur backdrop-filter rounded-full flex items-center justify-center border border-white/30 text-white group-hover:scale-110 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                            </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded font-mono">
                            24:15
                        </div>
                    </div>
                    <h3 className="font-bold text-lg mb-1 group-hover:text-blue-400 transition-colors">Jagannath Bhajan Sandhya 2025</h3>
                    <p className="text-sm text-white/50">Recorded at Millennium Park, Abuja</p>
                </div>

                {/* Media Block 2 (Kids Corner) */}
                <div className="group cursor-pointer">
                    <div className="relative aspect-video bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/10 mb-3">
                        <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Video cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" />
                        <div className="absolute top-2 left-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">
                            Jagannath Sanskar
                        </div>
                    </div>
                    <h3 className="font-bold text-lg mb-1 group-hover:text-blue-400 transition-colors">Learn Odia: Alphabets Part 1</h3>
                    <p className="text-sm text-white/50">Interactive flashcard video for kids</p>
                </div>

                {/* Media Block 3 */}
                <div className="group cursor-pointer">
                    <div className="relative aspect-video bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/10 mb-3">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#272727] to-[#1a1a1a] flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white/20"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded font-mono">
                            AUDIO
                        </div>
                    </div>
                    <h3 className="font-bold text-lg mb-1 group-hover:text-blue-400 transition-colors">Namita Agrawal Hit Collection</h3>
                    <p className="text-sm text-white/50">Exclusive community playlist</p>
                </div>

            </div>

        </div>
    );
}
