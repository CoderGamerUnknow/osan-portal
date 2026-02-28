import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OSAN Community Portal",
  description: "Official portal for the Odia Samaj Abuja Nigeria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-background text-foreground`}
      >
        <div className="min-h-screen flex flex-col">
          <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
            <div className="w-full max-w-7xl mx-auto flex h-16 items-center justify-between px-6 lg:px-8">
              <div className="flex items-center gap-4">
                <span className="font-heading text-2xl font-bold tracking-tight">OSAN</span>
              </div>
              <nav className="flex items-center gap-6">
                <a href="/login" className="text-sm font-medium hover:text-white/80 transition-colors">
                  Sign In
                </a>
                <a href="/signup" className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-white/90 transition-colors">
                  Join Community
                </a>
              </nav>
            </div>
          </header>

          <main className="flex-1 w-full flex flex-col">
            {children}
          </main>

          <footer className="border-t border-white/10 py-8 mt-auto">
            <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-white/50">
                © {new Date().getFullYear()} Odia Samaj Abuja Nigeria. All rights reserved.
              </div>
              <div className="flex gap-6 text-sm text-white/50">
                <a href="#" className="hover:text-white transition-colors">About</a>
                <a href="#" className="hover:text-white transition-colors">Contact</a>
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
