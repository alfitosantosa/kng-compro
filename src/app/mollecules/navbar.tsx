"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo & Title */}
        <div className="flex items-center space-x-3">
          <Image src="/logo.png" alt="Logo" width={40} height={40} className="rounded-md" />
          <div>
            <h1 className="text-base md:text-lg font-semibold leading-none tracking-tight">
              PT KREASI NURWIDHI GRUP
            </h1>
            <p className="text-[11px] md:text-xs text-muted-foreground">
              Langkah Pasti Menuju Kualitas Hidup yang Lebih Baik
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          <Link
            href="/"
            className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
          >
            Beranda
          </Link>
          <Link
            href="#about"
            className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
          >
            Tentang
          </Link>
          <Link
            href="#services"
            className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
          >
            Layanan
          </Link>
          <Link
            href="/products"
            className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
          >
            Produk
          </Link>
          <Link
            href="#contact"
            className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
          >
            Kontak
          </Link>
          <a href="https://wa.me/628121892599" target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white shadow-sm">
              Konsultasi
            </Button>
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-foreground"
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur shadow-sm">
          <nav className="flex flex-col space-y-2 px-4 py-4 text-sm">
            <Link
              href="/"
              className="py-2 rounded-md hover:bg-accent hover:text-foreground transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Beranda
            </Link>
            <Link
              href="#about"
              className="py-2 rounded-md hover:bg-accent hover:text-foreground transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Tentang
            </Link>
            <Link
              href="#services"
              className="py-2 rounded-md hover:bg-accent hover:text-foreground transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Layanan
            </Link>
            <Link
              href="/products"
              className="py-2 rounded-md hover:bg-accent hover:text-foreground transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Produk
            </Link>
            <Link
              href="#contact"
              className="py-2 rounded-md hover:bg-accent hover:text-foreground transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Kontak
            </Link>
            <a
              href="https://wa.me/628121892599"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white mt-2">
                Konsultasi via WA
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
