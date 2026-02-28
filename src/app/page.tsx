import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] lg:flex-row w-full bg-background text-foreground">
      {/* Left Side: Image / Visuals */}
      <div className="relative w-full lg:w-1/2 min-h-[50vh] lg:min-h-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#272727] to-[#111] z-10 opacity-60" />
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}
        />
        <div className="absolute bottom-10 left-10 z-20 text-white p-6 backdrop-blur-sm bg-black/20 rounded-2xl border border-white/10 max-w-md">
          <p className="text-sm tracking-widest uppercase mb-2 text-white/70">Heritage & Unity</p>
          <h2 className="text-3xl font-heading font-semibold mb-2">Connecting Odia Diaspora in Nigeria</h2>
        </div>
      </div>

      {/* Right Side: Content */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16 xl:p-24 bg-background">
        <div className="max-w-xl w-full">
          <h1 className="text-5xl lg:text-7xl font-bold font-heading mb-6 tracking-tight leading-none">
            Welcome to <br />
            <span className="text-white">OSAN.</span>
          </h1>

          <p className="text-lg text-white/60 mb-10 leading-relaxed font-sans">
            The Odia Samaj Abuja Nigeria is a vibrant community celebrating our roots, culture, and traditions away from home. Join us to connect, share, and grow together.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link href="/signup" className="w-full sm:w-auto px-8 py-4 bg-white text-black text-center font-medium rounded-full hover:bg-white/90 transition-all active:scale-95">
              Join the Community
            </Link>
            <Link href="/community-dashboard" className="w-full sm:w-auto px-8 py-4 border border-white/20 text-center font-medium rounded-full hover:bg-white/10 transition-all active:scale-95">
              Access Dashboard
            </Link>
          </div>

          <div className="mt-16 flex items-center gap-6 border-t border-white/10 pt-8">
            <div className="flex-1">
              <h4 className="text-xl font-heading font-semibold mb-1">Upcoming Event</h4>
              <p className="text-white/50 text-sm">Rath Yatra Celebration 2026</p>
            </div>
            <Link href="/events" className="text-sm font-medium hover:text-white/80 transition-colors uppercase tracking-wider">
              Learn More →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
