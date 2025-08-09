import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400","500"] });

export const metadata: Metadata = {
  title: "CHRONA",
  description: "Plateforme crypto spéculative — dark-tech premium",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="dark">
      <body className={inter.className}>
        <header className="border-b border-white/10">
          <nav className="container py-4 flex items-center justify-between">
            <div className="text-white font-medium">CHRONA</div>
            <div className="flex items-center gap-3">
              <a href="/" className="text-white/80 hover:text-white">Marketplace</a>
              <a href="/dashboard" className="text-white/80 hover:text-white">Dashboard</a>
              <a href="/about" className="text-white/80 hover:text-white">About</a>
              <a href="/login" className="btn btn-neon">Se connecter</a>
            </div>
          </nav>
        </header>
        <main className="container py-10">{children}</main>
        <footer className="border-t border-white/10">
          <div className="container py-6 text-white/50 text-sm">© {new Date().getFullYear()} CHRONA</div>
        </footer>
      </body>
    </html>
  );
}
