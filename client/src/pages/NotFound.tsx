/*
 * NotFound Page
 * Design: 台灣藍染美學 × 海洋療癒系
 */

import { Link } from "wouter";
import { ArrowRight, Waves } from "lucide-react";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-4"
      style={{ backgroundColor: "oklch(0.98 0.008 85)" }}
    >
      <div
        className="mb-6 w-20 h-20 rounded-full flex items-center justify-center"
        style={{ backgroundColor: "oklch(0.88 0.05 220)" }}
      >
        <Waves size={36} style={{ color: "oklch(0.30 0.09 240)" }} />
      </div>
      <p
        className="font-display italic text-base mb-2"
        style={{ color: "oklch(0.55 0.12 230)" }}
      >
        404 · Not Found
      </p>
      <h1
        className="font-serif-tc font-bold text-4xl md:text-5xl mb-4"
        style={{ color: "oklch(0.22 0.07 240)" }}
      >
        迷失在山海之間
      </h1>
      <p
        className="font-sans text-base mb-8 max-w-sm"
        style={{ color: "oklch(0.52 0.05 230)" }}
      >
        您尋訪的頁面似乎隨著海浪漂走了。讓我們帶您回到台東的懷抱。
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-serif-tc font-semibold text-sm transition-all shadow-md btn-ripple"
        style={{ backgroundColor: "oklch(0.30 0.09 240)" }}
      >
        回到首頁
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}
