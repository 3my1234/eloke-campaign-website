"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#home", label: "Vision" },
  { href: "#about", label: "The Man" },
  { href: "#possibilities", label: "Possibilities 2027" },
  { href: "#philanthropy", label: "Leadership in Action" },
  { href: "#news", label: "Campaign Wire" },
  { href: "#volunteer", label: "Join Us" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-emerald flex items-center justify-center">
              <span className="text-white font-serif font-bold text-lg">
                EOV
              </span>
            </div>
            <div className="hidden sm:block">
              <p className="font-serif font-bold text-foreground text-lg leading-tight">
                Eloke O. Victor
              </p>
              <p className="text-xs text-gold font-semibold tracking-wider">
                FRESH IDEAS 2027
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-emerald transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#volunteer">
              <Button className="bg-emerald hover:bg-emerald-dark text-white font-semibold px-6">
                Join Us
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-background border-t border-border shadow-lg animate-fade-in">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-base font-medium text-foreground hover:text-emerald transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a href="#volunteer" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-emerald hover:bg-emerald-dark text-white font-semibold mt-4">
                  Join Us
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
