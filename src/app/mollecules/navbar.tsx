"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-50 text-blue-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo & Title */}
        <div className="flex items-center space-x-3">
          <Image src="/logo.png" alt="Logo" width={50} height={50} className="rounded-md" />
          <div>
            <h1 className="text-lg md:text-xl font-bold leading-none">PT KREASI NURWIDHI GRUP</h1>
            <p className="text-xs md:text-sm text-blue-700">Langkah Pasti Menuju Kualitas Hidup yang Lebih Baik</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Beranda
          </Link>
          <Link href="#about" className="hover:text-blue-600 transition-colors">
            Tentang
          </Link>
          <Link href="#services" className="hover:text-blue-600 transition-colors">
            Layanan
          </Link>
          <Link href="/products" className="hover:text-blue-600 transition-colors">
            Produk
          </Link>
          <Link href="#contact" className="hover:text-blue-600 transition-colors">
            Kontak
          </Link>
          <a href="https://wa.me/628121892599" target="_blank" rel="noopener noreferrer">
            <Button variant="default" className="bg-green-500 hover:bg-green-600 text-white">
              Konsultasi
            </Button>
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <Button variant="ghost" size="icon" onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-blue-900">
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6 " width={100} />}
        </Button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-blue-100 border-t border-blue-200 shadow-inner">
          <nav className="flex flex-col space-y-4 px-4 py-4">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Beranda
            </Link>
            <Link href="/" className="hover:text-blue-700" onClick={() => setMenuOpen(false)}>
              Tentang
            </Link>
            <Link href="/" className="hover:text-blue-700" onClick={() => setMenuOpen(false)}>
              Layanan
            </Link>
            <Link href="/products" className="hover:text-blue-700" onClick={() => setMenuOpen(false)}>
              Produk
            </Link>
            <Link href="/" className="hover:text-blue-700" onClick={() => setMenuOpen(false)}>
              Kontak
            </Link>
            <a href="https://wa.me/628121892599" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Konsultasi via WA</Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
