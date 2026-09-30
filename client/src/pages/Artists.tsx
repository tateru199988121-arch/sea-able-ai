/*
 * Artists Page
 * Design: 台灣藍染美學 × 山林療癒系
 * Content: 黃正達（藝術家）、李國泰（馥樂學田）、山編玩自然工作室、無懈體癒室
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, Quote, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ESSENTIAL_OIL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663568449205/P2ndxLnnhT5po55u7Rnd8x/essential-oil-farm-9fqof8h4gRgiPEn5T3uAGT.webp";
const YOGA_TEACHER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663568449205/wUVpFruHaRdonLSj.jpg";
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663568449205/P2ndxLnnhT5po55u7Rnd8x/hero-bg-TKVtSh9Uur63Q63yxGXRcG.webp";
const DAGE = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663568449205/UBHaBuPCsQHZpFcQ.jpg";
const FULELE_FOREST = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663568449205/nqgxxIUhevYZrbkC.webp";
const TIGER_PORTRAIT = "/manus-storage/tiger-portrait_5ff46d53.jpeg";

const artists = [
  {
    id: 1,
    name: "山編玩自然工作室 × 黃正達（達哥）",
    nameEn: "Mountain Weaving Studio × Huang Cheng-Da",
    title: "藤編工藝師傅",
    tribe: "藤編合作",
    location: "台東建和部落",
    img: DAGE,
    coverImg: DAGE,
    imgPosition: "center 20%",
    specialty: "藤編・皮革手工藝・山林探索",
    quote: "編走！編學！編玩！每一條藤都是部落智慧的傳承。",
    story: "黃正達（達哥），福貴家的玩皮爸，山編玩自然工作室創辦人之一。來自臺東縣建和部落（Kasavakan），熱愛自然與原民工藝。「巴拉冠的大男孩們」孕育而生，有一個很美的夢想是「打造山野的自然教育，用我們的方式來場戶外教育的冒險」，透過一次次走返山林及編織工藝的操作，也經由文化狩獵日常，傳承藤編、皮革工藝和狩獵文化與山林教育；期望能一步步發展文化創意產業或文化教育課程的可能性。",
    socialLink: "https://www.facebook.com/profile.php?id=100064205972811",
    socialLabel: "Facebook 山編玩自然工作室",
    column: {
      title: "藤編的智慧：用雙手連結土地與文化",
      excerpt: "藤編不只是一門技藝，更是部落與山林之間的對話。每一條藤蔓，都是祖先留下的記憶；每一個編結，都是我們與土地的約定。當你坐下來，拿起藤條，你就開始了一段與自然的深刻連結……",
    },
    courses: ["藤編・皮革手工藝體驗", "山林探索學習營"],
    tags: ["藤編", "皮革", "原住民文化", "山林探索"],
  },
  {
    id: 2,
    name: "馥樂學田 fullovefarm × 李國泰（Tiger）",
    nameEn: "Fullove Farm × Li Guo-Tai (Tiger)",
    title: "御元堂香藥草農場主・香藥草農夫",
    tribe: "精油農場",
    location: "台東縣台東市大學路二段",
    img: TIGER_PORTRAIT,
    coverImg: TIGER_PORTRAIT,
    imgPosition: "center 15%",
    specialty: "香藥草種植・精油提煉・芳香體驗教學",
    quote: "香氛旅程源於對自然與生活的熱愛，在不間斷的探索中，持續記錄、分享、創造屬於自己的生活故事。",
    story: "Tiger（李國泰），來自台東的理工背景香氛探險家。原本沉浸於高壓科技產業，某天在父親的香藥草溫室中找到了另一種生活的可能，從此毅然投入香藥草的世界。他跟隨具農業專長的父親，建立起醫藥級（GACP）的香藥草種植模式，強調師法自然、永續友善環境的生產方式。\n\n在推廣香藥草的過程中，Tiger 深入台灣社區營造工作，融合醫藥級農業、在地文化與生活美學，參與應用植物園規劃、教育訓練與產品開發，累積了完整的香藥草應用經驗。更受國際知名精油專家 D. Gary Young 引導，深入學習精油提煉與芳香成分的奧秘，與世界各地芳療師、藥學專家及分子生物學家長期交流。\n\n目前，Tiger 與父親共同負責亞洲區精油資源的開發與探索，深入偏遠農村與山區發掘珍貴原料。馥樂學田（Fullove Farm）以「父樂學田」的家族傳承精神為根基，致力將香草從原料轉化為可被應用、體驗、流通的生活場景，朝著讓台東成為『東方普羅旺斯・香草療癒聖地』的願景前進。",
    socialLink: null,
    socialLabel: null,
    column: {
      title: "從理工直男到香氛探險家：Tiger 與馥樂學田的故事",
      excerpt: "有一種療癒，是從土地長出來的。Tiger 說，精油不只是香氣，更是土地的語言——每一滴從台東土地萃取的精油，都帶著陽光的溫度、雨水的滋潤、農人代代相傳的心意。從 ICT 產業到芳香產業，從自然科學到人文景觀，他用理工人的嚴謹與農夫的溫柔，在台東的土地上，種下一場場關於香氣、療癒與生命的深刻探索。",
    },
    courses: ["精油農場親子手作"],
    tags: ["精油", "香草農場", "親子", "馥樂學田"],
  },
  {
    id: 3,
    name: "無懈體癒室 × 謝勁崙",
    nameEn: "Studio Wuhsieh × Hsieh Chin-Lun",
    title: "瑜伽帶領者",
    tribe: "瑜伽合作",
    location: "台東市新社三街10巷12號",
    img: YOGA_TEACHER,
    coverImg: YOGA_TEACHER,
    imgPosition: "center 15%",
    specialty: "順勢瑜伽・身體覺察・皮膚滑動感覺",
    quote: "以不強迫、溫柔的風格，帶領你重新認識自己的身體。",
    story: "無懈體癒室帶領者之一，以「順勢」角度看待身體，依循呼吸、站、坐、躺等簡單動作練習帶領身體覺察，以皮膚滑動感覺取代肌肉伸展拉筋，用最日常的方式練習鬆開身體。",
    socialLink: "https://www.facebook.com/studio.wuhsieh",
    socialLabel: "Facebook 無懈體癒室",
    column: {
      title: "順勢練習：以呼吸感受身體",
      excerpt: "以一連串細微身體覺察練習為開始，慢慢感受身體的微小起伏與細節，並藉由感官觀察自己身體是否鬆開，後續加入稍微動態一些的練習，以站立與走路為主要練習方向。順勢練習是以聆聽、順應、不強迫身體的方式來使用身體，透過觀察呼吸、身體擺位以及動態中的發力關係找出符合自己順勢的使用方式。",
    },
    courses: ["台東瑜珈・身體療癒"],
    tags: ["瑜伽", "身體療癒", "順勢", "身體覺察"],
  },
];

const columns = artists.map((a) => ({
  artistName: a.name,
  artistTitle: a.title,
  img: a.img,
  imgPosition: (a as any).imgPosition || "center center",
  ...a.column,
}));

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

export default function Artists() {
  const [selectedArtist, setSelectedArtist] = useState<number | null>(null);
  const artistsRef = useScrollReveal();
  const columnsRef = useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Hero */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 ocean-gradient" />
        <div className="relative z-10 container text-center">
          <p className="font-display italic text-base mb-3" style={{ color: "oklch(0.55 0.12 230)" }}>
            Our Artists & Partners
          </p>
          <h1
            className="font-serif-tc font-bold text-4xl md:text-5xl mb-4"
            style={{ color: "oklch(0.22 0.07 240)" }}
          >
            藝術家與夥伴
          </h1>
          <p
            className="font-sans max-w-xl mx-auto text-base"
            style={{ color: "oklch(0.52 0.05 230)" }}
          >
            每一位與海可愛合作的藝術家與夥伴，都是台東這片土地最動人的故事
          </p>
        </div>
      </section>

      {/* Artists Grid */}
      <section ref={artistsRef} className="py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {artists.map((a, i) => (
              <div
                key={a.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border card-hover fade-up cursor-pointer"
                style={{
                  borderColor: "oklch(0.92 0.03 220)",
                  transitionDelay: `${i * 0.08}s`,
                }}
                onClick={() => setSelectedArtist(selectedArtist === a.id ? null : a.id)}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={a.coverImg}
                    alt={a.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ objectPosition: (a as any).imgPosition || "center center" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.22_0.07_240/0.6)] to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-1.5">
                      {a.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded-full bg-white/20 text-white text-xs font-sans">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3
                        className="font-serif-tc font-semibold text-xl"
                        style={{ color: "oklch(0.22 0.07 240)" }}
                      >
                        {a.name}
                      </h3>
                      <p className="font-display italic text-sm" style={{ color: "oklch(0.55 0.12 230)" }}>
                        {a.nameEn}
                      </p>
                    </div>
                    <span
                      className="px-2.5 py-1 rounded-full text-xs font-sans font-medium shrink-0"
                      style={{
                        backgroundColor: "oklch(0.88 0.05 220)",
                        color: "oklch(0.30 0.09 240)",
                      }}
                    >
                      {a.tribe}
                    </span>
                  </div>

                  <p
                    className="text-sm font-sans font-medium mb-3"
                    style={{ color: "oklch(0.38 0.10 235)" }}
                  >
                    {a.title} · {a.specialty}
                  </p>

                  <div className="relative pl-4 border-l-2 mb-4" style={{ borderColor: "oklch(0.72 0.08 225)" }}>
                    <p
                      className="text-sm font-sans italic leading-relaxed"
                      style={{ color: "oklch(0.52 0.05 230)" }}
                    >
                      「{a.quote}」
                    </p>
                  </div>

                  {selectedArtist === a.id && (
                    <div className="mb-4 animate-float-up">
                      <p
                        className="text-sm font-sans leading-relaxed mb-3"
                        style={{ color: "oklch(0.52 0.05 230)" }}
                      >
                        {a.story}
                      </p>
                      {a.socialLink && (
                        <a
                          href={a.socialLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-sans mb-3 hover:underline"
                          style={{ color: "oklch(0.38 0.10 235)" }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={11} />
                          {a.socialLabel}
                        </a>
                      )}
                      <div className="p-3 rounded-xl" style={{ backgroundColor: "oklch(0.95 0.02 215)" }}>
                        <p className="text-xs font-sans mb-1" style={{ color: "oklch(0.52 0.05 230)" }}>開設課程：</p>
                        <div className="flex flex-wrap gap-1.5">
                          {a.courses.map((c) => (
                            <span
                              key={c}
                              className="px-2 py-0.5 rounded-full text-xs font-sans"
                              style={{
                                backgroundColor: "oklch(0.88 0.05 220)",
                                color: "oklch(0.30 0.09 240)",
                              }}
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  <button
                    className="text-xs font-sans transition-colors"
                    style={{ color: "oklch(0.55 0.12 230)" }}
                  >
                    {selectedArtist === a.id ? "收起故事 ↑" : "閱讀故事 ↓"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artist Columns — 展示式，無閱讀全文按鈕 */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "oklch(0.95 0.02 215)" }}>
        <div className="container" ref={columnsRef}>
          <div className="text-center mb-12 fade-up">
            <p className="font-display italic text-base mb-3" style={{ color: "oklch(0.55 0.12 230)" }}>
              Artist Columns
            </p>
            <h2
              className="font-serif-tc font-bold text-3xl md:text-4xl mb-4"
              style={{ color: "oklch(0.22 0.07 240)" }}
            >
              藝術家專欄
            </h2>
            <p
              className="font-sans max-w-xl mx-auto text-base"
              style={{ color: "oklch(0.52 0.05 230)" }}
            >
              每位藝術家以文字分享他們的創作哲學、生命故事與對台東這片土地的深情
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {columns.map((col, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border fade-up"
                style={{
                  borderColor: "oklch(0.92 0.03 220)",
                  transitionDelay: `${i * 0.08}s`,
                }}
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={col.img}
                    alt={col.title}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: col.imgPosition }}
                  />
                  <div className="absolute inset-0" style={{ backgroundColor: "oklch(0.22 0.07 240 / 0.5)" }} />
                  <div className="absolute top-4 left-4">
                    <Quote size={20} className="text-white/60" />
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs font-sans mb-2" style={{ color: "oklch(0.55 0.12 230)" }}>
                    {col.artistName} · {col.artistTitle}
                  </p>
                  <h3
                    className="font-serif-tc font-semibold text-base mb-3 leading-snug"
                    style={{ color: "oklch(0.22 0.07 240)" }}
                  >
                    {col.title}
                  </h3>
                  <p
                    className="text-sm font-sans leading-relaxed"
                    style={{ color: "oklch(0.52 0.05 230)" }}
                  >
                    {col.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="py-16 md:py-20">
        <div className="container text-center">
          <div className="max-w-xl mx-auto">
            <h2
              className="font-serif-tc font-bold text-2xl md:text-3xl mb-4"
              style={{ color: "oklch(0.22 0.07 240)" }}
            >
              您也是藝術家嗎？
            </h2>
            <p
              className="font-sans mb-8 leading-relaxed"
              style={{ color: "oklch(0.52 0.05 230)" }}
            >
              海可愛持續尋找與台東土地有深厚連結的藝術家與文化傳承者，共同創造更多療癒的生命體驗課程
            </p>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-serif-tc font-semibold text-sm transition-all shadow-md btn-ripple"
              style={{ backgroundColor: "oklch(0.30 0.09 240)" }}
            >
              申請合作
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
