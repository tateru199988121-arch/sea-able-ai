/*
 * Navbar Component
 * Design: Glass morphism nav, transparent → frosted glass on scroll
 * Colors: Deep indigo text, ocean blue accents
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "首頁" },
  { href: "/experiences", label: "體驗課程" },
  { href: "/artists", label: "藝術家" },
  { href: "/about", label: "關於我們" },
  { href: "/register", label: "立即報名" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isHome = location === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? "glass-nav shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663568449205/CBoICsNbxjBzXctt.svg"
              alt="海可愛工作室 Sea-Able-Ai Studio"
              className={`h-10 md:h-12 w-auto transition-all ${
                scrolled || !isHome
                  ? "opacity-100"
                  : "brightness-0 invert opacity-90"
              }`}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.slice(0, -1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 font-serif-tc ${
                  location === link.href
                    ? scrolled || !isHome
                      ? "bg-[oklch(0.88_0.05_220)] text-[oklch(0.22_0.07_240)]"
                      : "bg-white/20 text-white"
                    : scrolled || !isHome
                    ? "text-[oklch(0.38_0.10_235)] hover:bg-[oklch(0.92_0.03_220)] hover:text-[oklch(0.22_0.07_240)]"
                    : "text-white/90 hover:bg-white/15 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/register"
              className="ml-3 px-5 py-2 rounded-full text-sm font-semibold font-serif-tc transition-all duration-300 btn-ripple
                bg-[oklch(0.30_0.09_240)] text-white hover:bg-[oklch(0.22_0.07_240)] shadow-md hover:shadow-lg"
            >
              立即報名
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled || !isHome
                ? "text-[oklch(0.22_0.07_240)] hover:bg-[oklch(0.92_0.03_220)]"
                : "text-white hover:bg-white/15"
            }`}
            aria-label="選單"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } glass-nav border-t border-[oklch(0.88_0.03_220)/0.5]`}
      >
        <div className="container py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-3 rounded-xl text-sm font-medium font-serif-tc transition-all ${
                location === link.href
                  ? "bg-[oklch(0.88_0.05_220)] text-[oklch(0.22_0.07_240)]"
                  : "text-[oklch(0.38_0.10_235)] hover:bg-[oklch(0.92_0.03_220)]"
              } ${link.href === "/register" ? "mt-2 bg-[oklch(0.30_0.09_240)] text-white hover:bg-[oklch(0.22_0.07_240)]" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
