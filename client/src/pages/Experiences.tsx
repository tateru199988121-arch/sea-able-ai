/*
 * Experiences Page
 * Design: 台灣藍染美學 × 海洋療癒系
 * Content: 精油農場（馥樂學田）、台東瑜珈（無懈體癒室）、編織原住民文化（山編玩自然工作室）、山海自然藝術
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, Clock, Users, MapPin, Star, ChevronDown, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ESSENTIAL_OIL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663568449205/P2ndxLnnhT5po55u7Rnd8x/essential-oil-farm-9fqof8h4gRgiPEn5T3uAGT.webp";
const MOUNTAIN_SEA = "https://d2xsxph8kpxj0f.cloudfront.net/310519663568449205/P2ndxLnnhT5po55u7Rnd8x/mountain-sea-experience-ihdbiQ3soaaNGDdHSy9ncD.webp";
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663568449205/P2ndxLnnhT5po55u7Rnd8x/hero-bg-TKVtSh9Uur63Q63yxGXRcG.webp";
const SANBIAN = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663568449205/DJrlQOFIMLeJXwCq.webp";
const FULELE_FOREST = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663568449205/nqgxxIUhevYZrbkC.webp";

const categories = ["全部", "原住民文化", "手作工藝", "親子共學", "身心療癒"];

const experiences = [
  {
    id: 1,
    category: "手作工藝",
    tag: "原住民工藝",
    title: "藤編・皮革手工藝體驗",
    subtitle: "Rattan & Leather Craft",
    img: SANBIAN,
    partner: "山編玩自然工作室",
    partnerLink: "https://www.facebook.com/profile.php?id=100064205972811",
    duration: "3 小時",
    groupSize: "小班制",
    location: "台東市建和部落",
    rating: 4.9,
    reviews: 47,
    price: "請洽詢",
    desc: "走入台東市建和部落，跟著山編玩自然工作室的部落工藝師傅學習傳統藤編與皮革手工藝。「編走！編學！編玩！」——每一條藤、每一針線，都是部落智慧的傳承，也是您與土地之間最真實的連結。",
    highlights: ["藤編基礎技法教學", "皮革手工藝入門", "部落文化導覽解說", "帶走自己的手作作品"],
    suitable: "成人、青少年（10歲以上）",
  },
  {
    id: 3,
    category: "親子共學",
    tag: "親子首選",
    title: "精油農場親子手作",
    subtitle: "Essential Oil Family Workshop",
    img: FULELE_FOREST,
    partner: "馥樂學田",
    partnerLink: null,
    duration: "2.5 小時",
    groupSize: "最多 10 組家庭",
    location: "台東縣台東市大學路二段",
    rating: 4.9,
    reviews: 61,
    price: "請洽詢",
    desc: "在馥樂學田（Fullove Farm）的香草農場，由具理工背景轉身香氛探險家的 Tiger 老師帶領，親子一起認識台東在地香草植物，學習精油調配的基礎知識，親手調製屬於家庭的專屬香氣。馥樂學田以「父樂學田」的家族傳承精神為根基，醫藥級（GACP）的種植模式讓每一滴香氣都可追源、可信賴。從土地長出來的療癒，是最自然的親子共學時光。",
    highlights: ["認識台東在地香草植物與香氛成分", "精油調配基礎體驗（可追源種原）", "帶走自製香氛作品", "農場生態導覽與 Tiger 老師分享香草故事"],
    suitable: "親子家庭（3歲以上），尌素者、香氛愛好者均適合",
  },
  {
    id: 4,
    category: "身心療癒",
    tag: "療癒推薦",
    title: "台東瑜珈・身體療癒",
    subtitle: "Taitung Yoga & Body Healing",
    img: MOUNTAIN_SEA,
    partner: "無懈 · 體癒室",
    partnerLink: "https://www.instagram.com/studio.wuhsieh/",
    duration: "1.5 小時",
    groupSize: "小班制",
    location: "台東市馬蘭社區",
    rating: 4.9,
    reviews: 88,
    price: "請洽詢",
    desc: "無懈體癒室由一位練習 Ashtanga 多年的瑜珈老師與一位結構調理師共同經營。以「順勢」為核心，透過身體結構調整與順勢瑜珈練習，提供有別於主流的身體保健觀點，以不強迫、溫柔的風格，帶領您重新認識自己的身體。",
    highlights: ["順勢瑜珈團體課程", "身體結構調整諮詢", "呼吸與走路練習", "身心整合療癒體驗"],
    suitable: "成人（各年齡層皆適合）",
  },

];

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    const elements = ref.current?.querySelectorAll(".fade-up");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Experiences() {
  const [activeCategory, setActiveCategory] = useState("全部");
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const gridRef = useScrollReveal();

  const filtered = activeCategory === "全部"
    ? experiences
    : experiences.filter((e) => e.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Hero */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 ocean-gradient" />
        <div className="relative z-10 container text-center">
          <p className="font-display italic text-base mb-3" style={{ color: "oklch(0.55 0.12 230)" }}>
            Experiences
          </p>
          <h1
            className="font-serif-tc font-bold text-4xl md:text-5xl mb-4"
            style={{ color: "oklch(0.22 0.07 240)" }}
          >
            體驗課程
          </h1>
          <p
            className="font-sans max-w-xl mx-auto text-base"
            style={{ color: "oklch(0.52 0.05 230)" }}
          >
            每一堂課都是小班制的深度體驗，讓您在台東的山林之間，找到屬於自己的節奏與療癒
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section
        className="py-6 border-b sticky top-16 md:top-20 z-30 glass-nav"
        style={{ borderColor: "oklch(0.88 0.03 220 / 0.5)" }}
      >
        <div className="container">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-5 py-2 rounded-full text-sm font-serif-tc font-medium whitespace-nowrap transition-all"
                style={
                  activeCategory === cat
                    ? { backgroundColor: "oklch(0.30 0.09 240)", color: "white" }
                    : { backgroundColor: "oklch(0.92 0.03 220)", color: "oklch(0.38 0.10 235)" }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Grid */}
      <section ref={gridRef} className="py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {filtered.map((exp, i) => (
              <div
                key={exp.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border card-hover fade-up flex flex-col"
                style={{
                  borderColor: "oklch(0.92 0.03 220)",
                  transitionDelay: `${i * 0.08}s`,
                }}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden shrink-0">
                  <img
                    src={exp.img}
                    alt={exp.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.22_0.07_240/0.4)] to-transparent" />
                  <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
                    <span
                      className="px-2.5 py-1 rounded-full bg-white/95 text-xs font-sans font-medium"
                      style={{ color: "oklch(0.30 0.09 240)" }}
                    >
                      {exp.category}
                    </span>
                    <span
                      className="px-2.5 py-1 rounded-full text-white text-xs font-sans font-medium"
                      style={{ backgroundColor: "oklch(0.30 0.09 240)" }}
                    >
                      {exp.tag}
                    </span>
                  </div>
                  {/* Partner badge */}
                  {exp.partner && (
                    <div className="absolute bottom-3 right-3">
                      {exp.partnerLink ? (
                        <a
                          href={exp.partnerLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 text-xs font-sans font-medium hover:bg-white transition-colors"
                          style={{ color: "oklch(0.30 0.09 240)" }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          {exp.partner}
                          <ExternalLink size={10} />
                        </a>
                      ) : (
                        <span
                          className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/90 text-xs font-sans font-medium"
                          style={{ color: "oklch(0.30 0.09 240)" }}
                        >
                          {exp.partner}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-1 mb-2">
                    <Star size={13} className="fill-amber-400 text-amber-400" />
                    <span className="text-sm font-sans font-medium" style={{ color: "oklch(0.38 0.10 235)" }}>
                      {exp.rating}
                    </span>
                    <span className="text-xs font-sans" style={{ color: "oklch(0.52 0.05 230)" }}>
                      ({exp.reviews} 則評價)
                    </span>
                  </div>

                  <h3
                    className="font-serif-tc font-semibold text-lg mb-1"
                    style={{ color: "oklch(0.22 0.07 240)" }}
                  >
                    {exp.title}
                  </h3>
                  <p
                    className="font-display italic text-xs mb-3"
                    style={{ color: "oklch(0.55 0.12 230)" }}
                  >
                    {exp.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-4">
                    {[
                      { icon: <Clock size={12} />, text: exp.duration },
                      { icon: <Users size={12} />, text: exp.groupSize },
                      { icon: <MapPin size={12} />, text: exp.location },
                    ].map((item, j) => (
                      <div
                        key={j}
                        className="flex items-center gap-1.5 text-xs font-sans"
                        style={{ color: "oklch(0.52 0.05 230)" }}
                      >
                        {item.icon}
                        {item.text}
                      </div>
                    ))}
                  </div>

                  <p
                    className="text-sm font-sans leading-relaxed mb-4 line-clamp-3"
                    style={{ color: "oklch(0.52 0.05 230)" }}
                  >
                    {exp.desc}
                  </p>

                  <button
                    onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                    className="flex items-center gap-1.5 text-xs font-sans mb-4 transition-colors"
                    style={{ color: "oklch(0.55 0.12 230)" }}
                  >
                    課程亮點
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${expandedId === exp.id ? "rotate-180" : ""}`}
                    />
                  </button>

                  {expandedId === exp.id && (
                    <div className="mb-4 p-3 rounded-xl" style={{ backgroundColor: "oklch(0.95 0.02 215)" }}>
                      <ul className="space-y-1.5">
                        {exp.highlights.map((h, j) => (
                          <li
                            key={j}
                            className="flex items-center gap-2 text-xs font-sans"
                            style={{ color: "oklch(0.38 0.10 235)" }}
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ backgroundColor: "oklch(0.55 0.12 230)" }}
                            />
                            {h}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-2 text-xs font-sans" style={{ color: "oklch(0.52 0.05 230)" }}>
                        適合：{exp.suitable}
                      </p>
                    </div>
                  )}

                  <div className="flex items-center justify-between mt-auto pt-2">
                    <div>
                      <span
                        className="font-serif-tc font-bold text-lg"
                        style={{ color: "oklch(0.22 0.07 240)" }}
                      >
                        {exp.price}
                      </span>
                    </div>
                    <Link
                      href="/register"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-white text-sm font-serif-tc font-medium transition-all btn-ripple"
                      style={{ backgroundColor: "oklch(0.30 0.09 240)" }}
                    >
                      立即報名
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Course CTA */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.95 0.02 215)" }}>
        <div className="container text-center">
          <h2
            className="font-serif-tc font-bold text-2xl md:text-3xl mb-4"
            style={{ color: "oklch(0.22 0.07 240)" }}
          >
            找不到適合的課程？
          </h2>
          <p
            className="font-sans mb-8 max-w-md mx-auto"
            style={{ color: "oklch(0.52 0.05 230)" }}
          >
            我們也提供客製化的團體課程與企業體驗活動，歡迎聯繫我們討論您的需求
          </p>
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-serif-tc font-semibold text-sm transition-all shadow-md btn-ripple"
            style={{ backgroundColor: "oklch(0.30 0.09 240)" }}
          >
            聯繫我們客製課程
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
