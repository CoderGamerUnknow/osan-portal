import Link from "next/link";
import { signup } from "../auth/actions";

export default function SignupPage({
    searchParams,
}: {
    searchParams?: { [key: string]: string | undefined };
}) {
    return (
        <div className="flex-1 flex flex-col w-full px-8 sm:max-w-lg justify-center gap-2 mx-auto py-12">
            <div className="mb-6">
                <Link
                    href="/"
                    className="text-white/50 hover:text-white text-sm flex items-center group transition-colors"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
                    >
                        <polyline points="15 18 9 12 15 6" />
                    </svg>{" "}
                    Back to Home
                </Link>
            </div>

            <div className="bg-[#272727] border border-white/10 rounded-2xl p-8 sm:p-10 shadow-2xl">
                <h1 className="text-3xl font-heading font-bold mb-2">Join OSAN</h1>
                <p className="text-white/60 mb-8 font-sans">
                    Create an account to connect with the Odia community in Nigeria.
                </p>

                {searchParams?.error && (
                    <div className="p-4 mb-6 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-sm">
                        {searchParams.error}
                    </div>
                )}

                <form className="flex-1 flex flex-col w-full gap-5 text-white" action={signup}>
                    {/* Honeypot Field for Bots */}
                    <div className="hidden" aria-hidden="true">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" tabIndex={-1} autoComplete="off" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-1.5 border-white/10">
                            <label className="text-sm font-medium text-white/80" htmlFor="name">
                                Full Name
                            </label>
                            <input
                                className="rounded-lg px-4 py-3 bg-[#1a1a1a] border border-white/10 focus:border-white focus:ring-1 focus:ring-white outline-none transition-all placeholder:text-white/30"
                                name="name"
                                placeholder="Sudam Das"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-1.5 border-white/10">
                            <label className="text-sm font-medium text-white/80" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="rounded-lg px-4 py-3 bg-[#1a1a1a] border border-white/10 focus:border-white focus:ring-1 focus:ring-white outline-none transition-all placeholder:text-white/30"
                                name="email"
                                type="email"
                                placeholder="you@example.com"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-1">
                        <div className="flex flex-col gap-1.5 border-white/10">
                            <label className="text-sm font-medium text-white/80" htmlFor="whatsapp">
                                WhatsApp Number
                            </label>
                            <input
                                className="rounded-lg px-4 py-3 bg-[#1a1a1a] border border-white/10 focus:border-white focus:ring-1 focus:ring-white outline-none transition-all placeholder:text-white/30"
                                name="whatsapp"
                                placeholder="+234 XXX XXXX"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-1.5 border-white/10">
                            <label className="text-sm font-medium text-white/80" htmlFor="city">
                                City in Nigeria
                            </label>
                            <select
                                className="rounded-lg px-4 py-3 bg-[#1a1a1a] border border-white/10 focus:border-white focus:ring-1 focus:ring-white outline-none transition-all appearance-none"
                                name="city"
                                required
                                defaultValue=""
                            >
                                <option value="" disabled className="text-white/30">Select your city</option>
                                <option value="Abuja">Abuja</option>
                                <option value="Lagos">Lagos</option>
                                <option value="Port Harcourt">Port Harcourt</option>
                                <option value="Kano">Kano</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-1">
                        <div className="flex flex-col gap-1.5 border-white/10">
                            <label className="text-sm font-medium text-white/80" htmlFor="blood_group">
                                Blood Group (Optional)
                            </label>
                            <select
                                className="rounded-lg px-4 py-3 bg-[#1a1a1a] border border-white/10 focus:border-white focus:ring-1 focus:ring-white outline-none transition-all appearance-none"
                                name="blood_group"
                            >
                                <option value="">Prefer not to say</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-1.5 border-white/10">
                            <label className="text-sm font-medium text-white/80" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="rounded-lg px-4 py-3 bg-[#1a1a1a] border border-white/10 focus:border-white focus:ring-1 focus:ring-white outline-none transition-all placeholder:text-white/30"
                                type="password"
                                name="password"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-3 mt-4">
                        <input
                            type="checkbox"
                            name="is_blood_donor"
                            id="is_blood_donor"
                            className="w-4 h-4 rounded appearance-none border border-white/30 bg-[#1a1a1a] checked:bg-white checked:border-white relative before:absolute before:inset-0 before:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdib3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwb2x5bGluZSBwb2ludHM9IjIwIDYgOSAxNyA0IDEyIj48L3BvbHlsaW5lPjwvc3ZnPg==')] before:bg-no-repeat before:bg-center before:bg-[length:12px] opacity-0 checked:opacity-100 transition-all cursor-pointer"
                            style={{ WebkitAppearance: 'none' }}
                        />
                        <label htmlFor="is_blood_donor" className="text-sm text-white/70 cursor-pointer select-none relative -left-8 hover:text-white transition-colors">
                            Opt-in to emergency blood donation drive
                        </label>
                    </div>

                    <button className="bg-white text-black rounded-lg px-4 py-4 text-sm font-medium mt-4 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#272727] transition-all active:scale-[0.98]">
                        Submit Application
                    </button>

                    <p className="text-xs text-center text-white/40 mt-2">
                        Applications are manually reviewed by community admins before full access is granted.
                    </p>
                </form>
            </div>

            <p className="text-center text-sm text-white/50 mt-6">
                Already have an account?{" "}
                <Link href="/login" className="text-white hover:underline transition-all">
                    Sign in
                </Link>
            </p>
        </div>
    );
}
