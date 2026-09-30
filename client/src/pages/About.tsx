/*
 * About Page
 * Design: 台灣藍染美學 × 山林療癒系
 * Content: Company story, values, team, timeline
 * NOTE: 移除藍染/海洋/獵人學校描述，聚焦山林、精油、藤編、身體療癒
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, Heart, Leaf, Users, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MOUNTAIN_SEA = "https://d2xsxph8kpxj0f.cloudfront.net/310519663568449205/P2ndxLnnhT5po55u7Rnd8x/mountain-sea-experience-ihdbiQ3soaaNGDdHSy9ncD.webp";
const SANBIAN = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663568449205/DJrlQOFIMLeJXwCq.webp";
const ESSENTIAL_OIL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663568449205/P2ndxLnnhT5po55u7Rnd8x/essential-oil-farm-9fqof8h4gRgiPEn5T3uAGT.webp";
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663568449205/P2ndxLnnhT5po55u7Rnd8x/hero-bg-TKVtSh9Uur63Q63yxGXRcG.webp";

const values = [
  {
    icon: <Heart size={24} />,
    title: "療癒與連結",
    desc: "我們相信，真正的旅行是一場療癒之旅。透過與自然、文化、人的深刻連結，找回生命的節奏與意義。",
  },
  {
    icon: <Leaf size={24} />,
    title: "尊重土地",
    desc: "台東的山林是我們最重要的夥伴。我們以永續的方式設計課程，尊重自然生態，珍惜每一片土地。",
  },
  {
    icon: <Users size={24} />,
    title: "文化傳承",
    desc: "原住民族的傳統智慧是無價的文化遺產。我們與部落攜手合作，讓這些珍貴的知識得以傳承與分享。",
  },
  {
    icon: <Star size={24} />,
    title: "手作溫度",
    desc: "每一堂課都充滿手作的溫度與誠意。小班制的深度體驗，讓每位學員都能感受到被看見、被珍視。",
  },
];

const milestones = [
  { year: "2026", event: "海可愛工作室正式成立，以台東為基地，致力推廣藝文生活體驗課程" },
  { year: "2026", event: "與山編玩自然工作室展開合作，推出藤編與原住民文化體驗課程" },
  { year: "2026", event: "與馥樂學田合作，推出精油農場親子手作體驗，將香草植物與台東在地文化融合" },
  { year: "2026", event: "與無懈體癒室合作，加入順勢瑜珈與身體療癒課程，帶領學員重新認識自己的身體" },
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

export default function About() {
  const storyRef = useScrollReveal();
  const valuesRef = useScrollReveal();
  const timelineRef = useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Hero */}
      <section className="relative pt-0 overflow-hidden min-h-[60vh] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${MOUNTAIN_SEA})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.22_0.07_240/0.3)] via-[oklch(0.22_0.07_240/0.4)] to-[oklch(0.22_0.07_240/0.75)]" />
        <div className="relative z-10 container pb-16 pt-32">
          <p className="font-display italic text-white/70 text-base mb-3">
            Our Story
          </p>
          <h1 className="font-serif-tc font-bold text-4xl md:text-6xl text-white mb-4 leading-tight">
            關於海可愛
          </h1>
          <p className="text-white/80 font-sans max-w-xl text-base leading-relaxed">
            一個關於台東、關於山林、關於人與土地深刻連結的故事
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="fade-up">
              <p className="font-display italic text-base mb-3" style={{ color: "oklch(0.55 0.12 230)" }}>
                The Beginning
              </p>
              <h2
                className="font-serif-tc font-bold text-3xl md:text-4xl mb-6 leading-tight"
                style={{ color: "oklch(0.22 0.07 240)" }}
              >
                在台東
                <br />
                用體驗說故事
              </h2>
              <div className="space-y-5 font-sans text-base leading-relaxed" style={{ color: "oklch(0.38 0.10 235)" }}>
                <p>
                  海可愛工作室，是一個紮根於台東的藝文生活創作團隊。
                </p>
                <p>
                  我們相信，真正的感受，來自土地、山海與人之間真實的相遇。因此，我們與在地藝術家、原住民工藝師、農場主人、身體工作者共同合作，設計一堂堂讓人慢下來的體驗課程。
                </p>
                <p>
                  從藤編工藝、精油手作，到順勢瑜珈，每一次體驗，都不只是學習一項技藝，更像是一場與自己、與地方、與文化重新建立連結的過程。
                </p>
                <p>
                  「海可愛」這個名字，來自台東面向太平洋的海。那片海遼闊、安靜，有時溫柔，有時充滿力量。而我們也希望，每一位來到台東的人，都能在山與海之間，重新感受生活的節奏，找到屬於自己的觀看方式。
                </p>
              </div>
            </div>

            <div className="fade-up space-y-6" style={{ transitionDelay: "0.2s" }}>
              <blockquote
                className="relative p-8 rounded-2xl border-l-4"
                style={{
                  backgroundColor: "oklch(0.95 0.02 215)",
                  borderColor: "oklch(0.55 0.12 230)",
                }}
              >
                <p className="font-serif-tc text-xl leading-relaxed mb-4"
                  style={{ color: "oklch(0.22 0.07 240)" }}
                >
                  「有些旅行，不是為了離開日常，而是重新回到自己。」
                </p>
                <footer className="font-sans text-sm" style={{ color: "oklch(0.55 0.12 230)" }}>
                  — 海可愛創辦人
                </footer>
              </blockquote>
              <div
                className="p-7 rounded-2xl"
                style={{ backgroundColor: "oklch(0.88 0.05 220 / 0.3)" }}
              >
                <p
                  className="font-display italic text-base mb-4"
                  style={{ color: "oklch(0.38 0.10 235)" }}
                >
                  Our Mission
                </p>
                <p
                  className="font-serif-tc font-semibold text-lg leading-relaxed"
                  style={{ color: "oklch(0.22 0.07 240)" }}
                >
                  在山海之間，重新建立人與土地的連結。
                </p>
                <p
                  className="font-sans text-sm leading-relaxed mt-3"
                  style={{ color: "oklch(0.52 0.05 230)" }}
                >
                  海可愛工作室透過工藝、身體與自然體驗，邀請人們慢下來，感受台東的文化、生活與節奏。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-24" style={{ backgroundColor: "oklch(0.95 0.02 215)" }}>
        <div className="container" ref={valuesRef}>
          <div className="text-center mb-14 fade-up">
            <p className="font-display italic text-base mb-3" style={{ color: "oklch(0.55 0.12 230)" }}>
              Our Values
            </p>
            <h2
              className="font-serif-tc font-bold text-3xl md:text-4xl"
              style={{ color: "oklch(0.22 0.07 240)" }}
            >
              我們的核心價值
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((val, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 shadow-sm border card-hover fade-up"
                style={{
                  borderColor: "oklch(0.92 0.03 220)",
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{
                    backgroundColor: "oklch(0.88 0.05 220)",
                    color: "oklch(0.30 0.09 240)",
                  }}
                >
                  {val.icon}
                </div>
                <h3
                  className="font-serif-tc font-semibold text-xl mb-3"
                  style={{ color: "oklch(0.22 0.07 240)" }}
                >
                  {val.title}
                </h3>
                <p
                  className="font-sans text-sm leading-relaxed"
                  style={{ color: "oklch(0.52 0.05 230)" }}
                >
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28">
        <div className="container" ref={timelineRef}>
          <div className="text-center mb-14 fade-up">
            <p className="font-display italic text-base mb-3" style={{ color: "oklch(0.55 0.12 230)" }}>
              Our Journey
            </p>
            <h2
              className="font-serif-tc font-bold text-3xl md:text-4xl"
              style={{ color: "oklch(0.22 0.07 240)" }}
            >
              海可愛的成長足跡
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            {milestones.map((m, i) => (
              <div
                key={i}
                className="flex gap-6 mb-8 fade-up"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="flex flex-col items-center">
                  <div
                    className="w-12 h-12 rounded-full text-white flex items-center justify-center font-serif-tc font-bold text-xs shrink-0"
                    style={{ backgroundColor: "oklch(0.30 0.09 240)" }}
                  >
                    {m.year}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-px flex-1 mt-2" style={{ backgroundColor: "oklch(0.88 0.03 220)" }} />
                  )}
                </div>
                <div className="pt-2.5 pb-8">
                  <p
                    className="font-sans text-base leading-relaxed"
                    style={{ color: "oklch(0.38 0.10 235)" }}
                  >
                    {m.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: "oklch(0.88 0.05 220 / 0.85)" }} />
        <div className="relative z-10 container text-center">
          <h2
            className="font-serif-tc font-bold text-2xl md:text-3xl mb-4"
            style={{ color: "oklch(0.22 0.07 240)" }}
          >
            加入我們的旅程
          </h2>
          <p
            className="font-sans mb-8 max-w-md mx-auto"
            style={{ color: "oklch(0.38 0.10 235)" }}
          >
            無論您是想體驗台東的山林文化，還是想與我們合作共創課程，我們都歡迎您的到來
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/experiences"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-serif-tc font-semibold text-sm transition-all shadow-md btn-ripple"
              style={{ backgroundColor: "oklch(0.30 0.09 240)" }}
            >
              探索體驗課程
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 font-serif-tc font-semibold text-sm transition-all"
              style={{
                borderColor: "oklch(0.30 0.09 240)",
                color: "oklch(0.30 0.09 240)",
              }}
            >
              立即報名
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
