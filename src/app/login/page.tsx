import Link from "next/link";
import { login } from "../auth/actions";

export default function LoginPage({
    searchParams,
}: {
    searchParams?: { [key: string]: string | undefined };
}) {
    return (
        <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2 mx-auto min-h-[calc(100vh-8rem)]">
            <div className="mb-8">
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
                <h1 className="text-3xl font-heading font-bold mb-2">Welcome Back</h1>
                <p className="text-white/60 mb-8 font-sans">
                    Sign in to access the OSAN Community Dashboard.
                </p>

                {searchParams?.message && (
                    <div className="p-4 mb-6 bg-green-500/10 border border-green-500/20 text-green-400 rounded-lg text-sm">
                        {searchParams.message}
                    </div>
                )}

                {searchParams?.error && (
                    <div className="p-4 mb-6 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-sm">
                        {searchParams.error}
                    </div>
                )}

                <form className="flex-1 flex flex-col w-full gap-4 text-white" action={login}>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-white/80" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="rounded-lg px-4 py-3 bg-[#1a1a1a] border border-white/10 focus:border-white focus:ring-1 focus:ring-white outline-none transition-all placeholder:text-white/30"
                            name="email"
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-1.5 mt-2">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-medium text-white/80" htmlFor="password">
                                Password
                            </label>
                            <Link href="#" className="text-xs text-white/50 hover:text-white transition-colors">
                                Forgot password?
                            </Link>
                        </div>
                        <input
                            className="rounded-lg px-4 py-3 bg-[#1a1a1a] border border-white/10 focus:border-white focus:ring-1 focus:ring-white outline-none transition-all placeholder:text-white/30"
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button className="bg-white text-black rounded-lg px-4 py-3 text-sm font-medium mt-6 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#272727] transition-all active:scale-[0.98]">
                        Sign In
                    </button>
                </form>
            </div>

            <p className="text-center text-sm text-white/50 mt-8">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="text-white hover:underline transition-all">
                    Join the community
                </Link>
            </p>
        </div>
    );
}
