/*
 * Home Page
 * Design: 台灣藍染美學 × 山林療癒系
 * Sections: Hero, About Brief, Experiences Preview, Partner Feature, CTA
 * NOTE: 移除統計數字、藍染特色區塊；標語改為山林主題
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, Mountain, Leaf, Scissors } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663568449205/P2ndxLnnhT5po55u7Rnd8x/hero-bg-TKVtSh9Uur63Q63yxGXRcG.webp";
const ESSENTIAL_OIL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663568449205/P2ndxLnnhT5po55u7Rnd8x/essential-oil-farm-9fqof8h4gRgiPEn5T3uAGT.webp";
const MOUNTAIN_SEA = "https://d2xsxph8kpxj0f.cloudfront.net/310519663568449205/P2ndxLnnhT5po55u7Rnd8x/mountain-sea-experience-ihdbiQ3soaaNGDdHSy9ncD.webp";
const SANBIAN = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663568449205/DJrlQOFIMLeJXwCq.webp";
const FULELE_FOREST = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663568449205/nqgxxIUhevYZrbkC.webp";

const experiences = [
  {
    icon: <Scissors size={22} />,
    title: "藤編・皮革手工藝",
    subtitle: "Rattan & Leather Craft",
    desc: "走入台東建和部落，跟著山編玩自然工作室的部落師傅學習傳統藤編與皮革手工藝，帶走屬於自己的手作記憶。",
    img: SANBIAN,
    tag: "原住民工藝",
  },
  {
    icon: <Leaf size={22} />,
    title: "精油農場親子手作",
    subtitle: "Essential Oil Farm",
    desc: "在馥樂學田的香草農場，親子一起調配專屬香氣，從台東的土地萃取生活的芬芳與療癒。",
    img: FULELE_FOREST,
    tag: "親子共學",
  },
  {
    icon: <Mountain size={22} />,
    title: "台東瑜珈・身體療癒",
    subtitle: "Yoga & Body Healing",
    desc: "無懈體癒室以「順勢」為核心，透過身體結構調整與順勢瑜珈，溫柔帶領您重新認識自己的身體。",
    img: ESSENTIAL_OIL,
    tag: "身心療癒",
  },
];

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    const elements = ref.current?.querySelectorAll(".fade-up");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Home() {
  const aboutRef = useScrollReveal();
  const expRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.22_0.07_240/0.5)] via-[oklch(0.22_0.07_240/0.3)] to-[oklch(0.22_0.07_240/0.65)]" />

        <div className="relative z-10 container text-center text-white px-4">
          <div className="max-w-3xl mx-auto">
            <p className="font-display italic text-white/80 text-lg md:text-xl mb-5 tracking-widest animate-float-up">
              Taiwan · Taitung
            </p>
            <h1
              className="font-serif-tc font-bold text-5xl md:text-6xl lg:text-7xl leading-tight mb-7 animate-float-up"
              style={{ animationDelay: "0.15s" }}
            >
              山林之間
              <br />
              <span style={{ color: "oklch(0.88 0.05 220)" }}>
                重新感受自己
              </span>
            </h1>
            <p
              className="text-white/85 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto animate-float-up font-sans"
              style={{ animationDelay: "0.3s" }}
            >
              跟著部落職人、在地藝術家與土地工作者，在山海之間，重新感受身體與生活。
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-float-up"
              style={{ animationDelay: "0.45s" }}
            >
              <Link
                href="/experiences"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white font-serif-tc font-semibold text-sm hover:bg-white/90 transition-all shadow-lg hover:shadow-xl btn-ripple"
                style={{ color: "oklch(0.22 0.07 240)" }}
              >
                探索體驗課程
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-white/60 text-white font-serif-tc font-medium text-sm hover:bg-white/15 hover:border-white transition-all"
              >
                認識海可愛
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs font-sans tracking-widest">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
        </div>
      </section>

      {/* About Brief Section */}
      <section ref={aboutRef} className="py-20 md:py-28 overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative fade-up">
              <img
                src={MOUNTAIN_SEA}
                alt="台東山林景色"
                className="w-full h-80 md:h-[480px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-white rounded-2xl shadow-xl p-5 max-w-[200px]">
                <div
                  className="font-serif-tc font-semibold text-sm mb-1"
                  style={{ color: "oklch(0.22 0.07 240)" }}
                >
                  台東 · 後山
                </div>
                <div
                  className="text-xs font-sans leading-relaxed"
                  style={{ color: "oklch(0.52 0.05 230)" }}
                >
                  山林在這裡呼吸，生命在這裡重新連結
                </div>
              </div>
            </div>

            <div className="fade-up" style={{ transitionDelay: "0.2s" }}>
              <p className="font-display italic text-base mb-3 tracking-wide" style={{ color: "oklch(0.55 0.12 230)" }}>
                About Sea-Able-Ai
              </p>
              <h2
                className="font-serif-tc font-bold text-3xl md:text-4xl mb-6 leading-tight"
                style={{ color: "oklch(0.22 0.07 240)" }}
              >
                讓旅行成為
                <br />
                一場療癒的學習
              </h2>
              <div className="space-y-4 font-sans text-base leading-relaxed" style={{ color: "oklch(0.38 0.10 235)" }}>
                <p>
                  海可愛是一家扎根台東的藝文生活創作公司。我們相信，真正的旅行不只是觀光，而是一場與土地、文化、自我的深刻連結。
                </p>
                <p>
                  我們與台東在地的原住民部落、藝術家、農場主人攜手合作，設計出一系列親子共學、自學團體的體驗課程——從精油調配到藤編文化，從山林探索到身體療癒，每一個課程都蘊含著台東山林的智慧與溫度。
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 font-serif-tc font-semibold text-sm hover:gap-3 transition-all group"
                style={{ color: "oklch(0.30 0.09 240)" }}
              >
                了解更多我們的故事
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Preview */}
      <section style={{ backgroundColor: "oklch(0.95 0.02 215)" }} className="py-20 md:py-28">
        <div className="container" ref={expRef}>
          <div className="text-center mb-14 fade-up">
            <p className="font-display italic text-base mb-3" style={{ color: "oklch(0.55 0.12 230)" }}>
              Experiences
            </p>
            <h2
              className="font-serif-tc font-bold text-3xl md:text-4xl mb-4"
              style={{ color: "oklch(0.22 0.07 240)" }}
            >
              精選體驗課程
            </h2>
            <p
              className="font-sans max-w-xl mx-auto text-base"
              style={{ color: "oklch(0.52 0.05 230)" }}
            >
              每一堂課都是限定小班制，讓您在最舒適的環境中深度體驗台東的藝文生活
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 card-hover fade-up"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={exp.img}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.22_0.07_240/0.5)] to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 text-xs font-sans font-medium" style={{ color: "oklch(0.30 0.09 240)" }}>
                      {exp.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2" style={{ color: "oklch(0.55 0.12 230)" }}>
                    {exp.icon}
                    <span className="font-display italic text-sm">
                      {exp.subtitle}
                    </span>
                  </div>
                  <h3
                    className="font-serif-tc font-semibold text-xl mb-2"
                    style={{ color: "oklch(0.22 0.07 240)" }}
                  >
                    {exp.title}
                  </h3>
                  <p
                    className="text-sm font-sans leading-relaxed mb-4"
                    style={{ color: "oklch(0.52 0.05 230)" }}
                  >
                    {exp.desc}
                  </p>
                  <Link
                    href="/experiences"
                    className="inline-flex items-center gap-1.5 text-sm font-serif-tc font-medium hover:gap-2.5 transition-all group/link"
                    style={{ color: "oklch(0.30 0.09 240)" }}
                  >
                    了解詳情
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 fade-up">
            <Link
              href="/experiences"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-serif-tc font-semibold text-sm transition-all shadow-md hover:shadow-lg btn-ripple"
              style={{ backgroundColor: "oklch(0.30 0.09 240)" }}
            >
              查看所有課程
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 relative overflow-hidden" ref={ctaRef}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${MOUNTAIN_SEA})` }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: "oklch(0.22 0.07 240 / 0.75)" }} />
        <div className="relative z-10 container text-center text-white">
          <div className="max-w-2xl mx-auto fade-up">
            <p className="font-display italic text-white/70 text-base mb-4 tracking-wide">
              Join Us
            </p>
            <h2 className="font-serif-tc font-bold text-3xl md:text-5xl mb-6 leading-tight">
              準備好出發了嗎？
            </h2>
            <p className="text-white/80 font-sans text-base leading-relaxed mb-10">
              台東的山林正在等待您。選擇一堂適合您的體驗課程，讓我們一起在自然與文化中找回生命的節奏。
            </p>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-white font-serif-tc font-bold text-base hover:bg-white/90 transition-all shadow-xl hover:shadow-2xl btn-ripple"
              style={{ color: "oklch(0.22 0.07 240)" }}
            >
              立即報名體驗
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
