"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const dataNavbar = [
    {
      label: "Beranda",
      href: "/",
    },
    {
      label: "Tentang",
      href: "/#about",
    },
    {
      label: "Layanan",
      href: "/#services",
    },
    {
      label: "Produk",
      href: "/products",
    },
    {
      label: "Kontak",
      href: "/#contact",
    },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest("button")
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Handle smooth scroll for anchor links
  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    
    if (href.startsWith("/#")) {
      const hash = href.split("#")[1];
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  // Check if link is active
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    if (href.startsWith("/#")) {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(href);
  };

  const whatsappLink = "https://wa.me/628121892599?text=Halo,%20saya%20ingin%20konsultasi";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/40 shadow-sm"
          : "bg-background/80 backdrop-blur-sm"
      )}
    >
      <nav className="container mx-auto px-4">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo & Brand */}
          <Link
            href="/"
            className="flex items-center space-x-3 group transition-transform hover:scale-105"
            onClick={() => setMenuOpen(false)}
          >
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/logo.png"
                alt="PT Kreasi Nurwidhi Grup Logo"
                fill
                className="object-contain rounded-md"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-sm md:text-base font-bold leading-tight text-foreground group-hover:text-primary transition-colors">
                PT KREASI NURWIDHI GRUP
              </h1>
              <p className="text-xs text-muted-foreground leading-tight">
                Langkah Pasti Menuju Kualitas Hidup yang Lebih Baik
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {dataNavbar.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => handleLinkClick(item.href)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-md transition-all duration-200",
                    active
                      ? "text-primary bg-accent"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  )}
                >
                  {item.label}
                  {active && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Button
                size="sm"
                className="bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Konsultasi
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center space-x-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="lg:hidden"
            >
              <Button
                size="icon"
                variant="ghost"
                className="text-green-600 hover:bg-green-50"
              >
                <MessageCircle className="w-5 h-5" />
              </Button>
            </a>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="w-6 h-6 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="w-6 h-6 transition-transform duration-300" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
            menuOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          )}
        >
          <div className="border-t border-border/40 bg-background/95 backdrop-blur-md py-4 space-y-1">
            {dataNavbar.map((item) => {
            
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => handleLinkClick(item.href)}
                  className={cn(
                    "block px-4 py-3 text-base font-medium rounded-md mx-2 transition-all duration-200",
            
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="px-4 pt-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="block"
              >
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white shadow-md"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Konsultasi via WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
