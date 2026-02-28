import { createClient } from "@/utils/supabase/server";

export default async function DashboardPage() {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return null;
    }

    const { data: profile } = await supabase
        .from("profiles")
        .select("status")
        .eq("id", user.id)
        .single();

    const isPending = profile?.status === "Pending";

    if (isPending) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-center max-w-lg mx-auto">
                <div className="w-20 h-20 bg-[#272727] rounded-full flex items-center justify-center mb-6 border border-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                </div>
                <h1 className="text-3xl font-heading font-bold mb-4">Pending Approval</h1>
                <p className="text-white/60 mb-6 font-sans leading-relaxed">
                    Your account has been created successfully, but it is currently awaiting review by the community administrators. You will gain full access to the dashboard once verified.
                </p>
                <div className="bg-[#272727] border border-white/10 p-6 rounded-xl text-sm text-white/50 w-full text-left">
                    <h3 className="font-semibold text-white/80 mb-2">Why wait?</h3>
                    <p>This is a private community portal for the Odia Samaj in Abuja. We manually verify all members to ensure a safe and secure environment for everyone.</p>
                </div>
            </div>
        );
    }

    // Fetch some "fake" data for the spotlight since we don't have real members yet
    // In production, this would query random members from the `profiles` table

    return (
        <div className="space-y-8">
            <header className="mb-10">
                <h1 className="text-4xl font-heading font-bold mb-2">Community Overview</h1>
                <p className="text-white/60">Welcome to your OSAN dashboard. Here&apos;s what&apos;s happening in the community.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Spotlight Widget */}
                <div className="col-span-1 md:col-span-2 bg-[#272727] border border-white/10 rounded-2xl p-6 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-white/10 transition-colors"></div>

                    <div className="flex justify-between items-start mb-6">
                        <h3 className="text-lg font-heading font-semibold flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                            Member Spotlight
                        </h3>
                        <span className="text-xs bg-white/10 text-white/70 px-2 py-1 rounded">Daily Feature</span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start relative z-10">
                        <div className="w-24 h-24 rounded-full bg-[#1a1a1a] border-4 border-[#272727] shadow-xl overflow-hidden shadow-black/50 flex-shrink-0">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Spotlight Member" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-1">Rajesh Mohanty</h4>
                            <p className="text-sm text-white/50 mb-3">Software Engineer in Abuja</p>
                            <p className="text-sm text-white/80 italic leading-relaxed">
                                &quot;Relocated to Nigeria 5 years ago. Passionate about Odia cuisine and organizing community tech mentorships.&quot;
                            </p>
                            <div className="mt-4 flex gap-2">
                                <span className="text-xs border border-white/20 bg-white/5 px-2 py-1 rounded-full">Blood Donor</span>
                                <span className="text-xs border border-white/20 bg-white/5 px-2 py-1 rounded-full">Tech Mentor</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Actions / Digital Passport */}
                <div className="col-span-1 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
                    <div>
                        <h3 className="text-lg font-heading font-semibold mb-2">Digital Passport</h3>
                        <p className="text-sm text-white/60 mb-6">Use this QR code for quick check-ins at OSAN events and pujas.</p>

                        <div className="w-full aspect-square bg-white rounded-xl p-4 flex items-center justify-center">
                            {/* In a real app, generate a QR code with the user ID here */}
                            <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${user.id}`} alt="QR Code" className="w-full h-full opacity-90" />
                        </div>
                    </div>
                    <button className="w-full mt-6 py-3 border border-white/20 rounded-lg text-sm font-medium hover:bg-white hover:text-black transition-colors">
                        View Full Profile
                    </button>
                </div>
            </div>
        </div>
    );
}
