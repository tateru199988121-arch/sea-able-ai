/*
 * Footer Component
 * Design: Deep indigo background, wave top divider
 * Content: Links, contact info, social media
 */

import { Link } from "wouter";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-0">
      {/* Wave Divider */}
      <div className="w-full overflow-hidden leading-none" style={{ marginBottom: "-2px" }}>
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-20"
        >
          <path
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
            fill="oklch(0.22 0.07 240)"
          />
        </svg>
      </div>

      <div
        className="py-12 md:py-16"
        style={{ backgroundColor: "oklch(0.22 0.07 240)" }}
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {/* Brand */}
            <div>
              <div className="mb-4">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663568449205/CBoICsNbxjBzXctt.svg"
                  alt="海可愛工作室 Sea-Able-Ai Studio"
                  className="h-12 w-auto brightness-0 invert opacity-90"
                />
              </div>
              <p className="text-white/70 text-sm leading-relaxed font-sans">
                在台東的山林之間，我們與原住民部落、在地藝術家共同創造療癒的生命體驗課程。讓每一次旅行，都成為一場與自然、文化、自我的深刻對話。
              </p>
              <div className="flex gap-3 mt-5">
                <a
                  href="https://www.instagram.com/sea_able_ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-white/80 hover:bg-white/30 hover:text-white transition-all"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61571984893711"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-white/80 hover:bg-white/30 hover:text-white transition-all"
                  aria-label="Facebook"
                >
                  <Facebook size={16} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-serif-tc font-semibold text-base mb-5 tracking-wide">
                快速導覽
              </h4>
              <ul className="space-y-2.5">
                {[
                  { href: "/", label: "首頁" },
                  { href: "/experiences", label: "體驗課程" },
                  { href: "/artists", label: "藝術家介紹" },
                  { href: "/about", label: "關於海可愛" },
                  { href: "/register", label: "立即報名" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/65 hover:text-white text-sm transition-colors font-sans flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-white/40 group-hover:bg-white/80 transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-serif-tc font-semibold text-base mb-5 tracking-wide">
                聯絡我們
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-white/70 text-sm">
                  <MapPin size={15} className="mt-0.5 shrink-0 text-white/50" />
                  <span>台灣台東縣，山海之間</span>
                </li>
                <li className="flex items-center gap-3 text-white/70 text-sm">
                  <Phone size={15} className="shrink-0 text-white/50" />
                  <a href="tel:+886-xxx-xxx-xxx" className="hover:text-white transition-colors">
                    請來信詢問課程時間
                  </a>
                </li>
                <li className="flex items-center gap-3 text-white/70 text-sm">
                  <Mail size={15} className="shrink-0 text-white/50" />
                  <a href="mailto:info@sea-able-ai.com" className="hover:text-white transition-colors">
                    info@sea-able-ai.com
                  </a>
                </li>
              </ul>

              <div className="mt-6 p-4 rounded-xl bg-white/10 border border-white/15">
                <p className="text-white/80 text-xs leading-relaxed font-sans">
                  🌿 每一堂課都是限定名額的小班制，建議提前報名以確保您的名額。
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-white/45 text-xs font-sans">
              © 2026 海可愛工作室 Sea-Able-Ai Studio. All rights reserved.
            </p>
            <p className="text-white/45 text-xs font-sans font-display italic">
              台東 · 山林之間
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
