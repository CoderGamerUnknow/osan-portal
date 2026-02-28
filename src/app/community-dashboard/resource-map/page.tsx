import { createClient } from "@/utils/supabase/server";

export default async function ResourceMapPage() {
    const supabase = await createClient();

    return (
        <div className="space-y-8">
            <header className="mb-6">
                <h1 className="text-4xl font-heading font-bold mb-2">Resource Map</h1>
                <p className="text-white/60">Find community-owned businesses, temples, and support hubs across Nigeria.</p>
            </header>

            <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl overflow-hidden h-[600px] relative flex items-center justify-center">
                {/* Mock Map Image Background */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center mix-blend-luminosity"></div>

                <div className="relative z-10 text-center space-y-4">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto border border-white/20 animate-pulse">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                    </div>
                    <h2 className="text-2xl font-bold">Interactive Map Loading</h2>
                    <p className="text-white/50 max-w-sm mx-auto">Integration with Google Maps API and internal business coordinates is pending backend deployment. The interactive map will display here.</p>

                    <div className="pt-4 flex gap-4 justify-center">
                        <span className="flex items-center gap-2 text-xs bg-[#272727] px-3 py-1.5 rounded-full border border-white/10 text-white/70">
                            <span className="w-2 h-2 rounded-full bg-red-500 inline-block"></span>
                            Temples (Pujas)
                        </span>
                        <span className="flex items-center gap-2 text-xs bg-[#272727] px-3 py-1.5 rounded-full border border-white/10 text-white/70">
                            <span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>
                            Odia Businesses
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
