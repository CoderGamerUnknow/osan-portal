import { createClient } from "@/utils/supabase/server";

export default async function HelpDeskPage() {
    const supabase = await createClient();

    return (
        <div className="space-y-8">
            <header className="mb-6">
                <h1 className="text-4xl font-heading font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">Puja Help Desk</h1>
                <p className="text-white/60">Submit special requests for Pujas or ask Admin questions.</p>
            </header>

            <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 lg:p-8 max-w-2xl">
                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium mb-2 text-white/80">Request Type</label>
                        <select className="w-full bg-[#272727] border border-white/10 text-white rounded-xl px-4 py-3 text-sm focus:border-white outline-none transition-colors appearance-none shadow-inner">
                            <option>Special Puja Booking</option>
                            <option>Event Inquiry</option>
                            <option>Newcomer Support</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2 text-white/80">Message</label>
                        <textarea
                            rows={5}
                            placeholder="Describe your request..."
                            className="w-full bg-[#272727] border border-white/10 text-white rounded-xl px-4 py-3 text-sm focus:border-white outline-none transition-colors resize-none placeholder:text-white/30 shadow-inner"
                        ></textarea>
                        <p className="text-[10px] text-white/40 mt-2 text-right">Rate limited: 1 ticket / hour</p>
                    </div>

                    <button type="submit" className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-white/90 transition-transform active:scale-95 shadow-lg shadow-white/10">
                        Submit Request
                    </button>

                    <div className="pt-4 mt-6 border-t border-white/5 text-center text-xs text-white/40">
                        Admin will contact you via WhatsApp or Email upon review.
                    </div>
                </form>
            </div>
        </div>
    );
}
