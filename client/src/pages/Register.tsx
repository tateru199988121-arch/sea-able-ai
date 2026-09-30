/*
 * Register Page
 * Design: 台灣藍染美學 × 海洋療癒系
 * Status: 暫無開放報名，引導訪客寄信詢問或留下 email 等候通知
 */

import { useState } from "react";
import { Mail, Bell, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const HERO_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663568449205/P2ndxLnnhT5po55u7Rnd8x/hero-bg-TKVtSh9Uur63Q63yxGXRcG.webp";

// Google Forms 欄位對應（通知訂閱）
const NOTIFY_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSdUh9-2QkiqjkCiJoKTdph-CU12ocWnxpSmXnflotS000EOMw/formResponse";

export default function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNotify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("請輸入有效的電子郵件");
      return;
    }
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("entry.941540691", name || "（未填姓名）");
      formData.append("entry.708894250", email);
      formData.append("entry.1165391673", "【候補通知訂閱】");
      await fetch(NOTIFY_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });
    } catch (_) {
      // no-cors 模式下 fetch 永遠不會拋出，靜默處理
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Hero */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 ocean-gradient" />
        <div className="relative z-10 container text-center">
          <p className="font-display italic text-[oklch(0.55_0.12_230)] text-base mb-3">
            Registration
          </p>
          <h1 className="font-serif-tc font-bold text-4xl md:text-5xl text-[oklch(0.22_0.07_240)] mb-4">
            立即報名
          </h1>
          <p className="text-[oklch(0.52_0.05_230)] font-sans max-w-xl mx-auto text-base">
            感謝您對海可愛課程的興趣
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto">

            {/* 暫無檔期公告 */}
            <div
              className="rounded-2xl p-8 md:p-12 text-center mb-8 border"
              style={{
                backgroundColor: "oklch(0.97 0.015 220)",
                borderColor: "oklch(0.88 0.05 220)",
              }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "oklch(0.88 0.05 220)" }}
              >
                <Bell size={28} style={{ color: "oklch(0.30 0.09 240)" }} />
              </div>
              <h2
                className="font-serif-tc font-bold text-2xl md:text-3xl mb-4"
                style={{ color: "oklch(0.22 0.07 240)" }}
              >
                目前暫無開放報名
              </h2>
              <p
                className="font-sans leading-relaxed mb-2"
                style={{ color: "oklch(0.42 0.06 230)" }}
              >
                我們正在規劃下一期的體驗課程，近期將公布新的課程檔期。
              </p>
              <p
                className="font-sans leading-relaxed"
                style={{ color: "oklch(0.42 0.06 230)" }}
              >
                如有報名意願或課程詢問，歡迎直接來信，我們將優先回覆並在有新檔期時第一時間通知您。
              </p>
            </div>

            {/* 兩個行動區塊 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

              {/* 直接來信 */}
              <div
                className="rounded-2xl p-6 border flex flex-col"
                style={{
                  backgroundColor: "oklch(0.22 0.07 240)",
                  borderColor: "oklch(0.22 0.07 240)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-white" />
                  </div>
                  <h3 className="font-serif-tc font-semibold text-lg text-white">
                    直接來信詢問
                  </h3>
                </div>
                <p className="font-sans text-sm text-white/75 leading-relaxed mb-6 flex-1">
                  有特定課程想了解，或想為企業、親子團體安排客製化體驗？歡迎直接寫信給我們。
                </p>
                <a
                  href="mailto:info@sea-able-ai.com?subject=課程詢問"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white font-serif-tc font-semibold text-sm transition-all hover:bg-white/90"
                  style={{ color: "oklch(0.22 0.07 240)" }}
                >
                  info@sea-able-ai.com
                  <ArrowRight size={15} />
                </a>
              </div>

              {/* 訂閱通知 */}
              <div
                className="rounded-2xl p-6 border flex flex-col"
                style={{
                  backgroundColor: "white",
                  borderColor: "oklch(0.88 0.05 220)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "oklch(0.88 0.05 220)" }}
                  >
                    <Bell size={18} style={{ color: "oklch(0.30 0.09 240)" }} />
                  </div>
                  <h3
                    className="font-serif-tc font-semibold text-lg"
                    style={{ color: "oklch(0.22 0.07 240)" }}
                  >
                    有新檔期時通知我
                  </h3>
                </div>

                {submitted ? (
                  <div className="flex-1 flex flex-col items-center justify-center text-center py-4">
                    <CheckCircle size={32} style={{ color: "oklch(0.30 0.09 240)" }} className="mb-3" />
                    <p
                      className="font-serif-tc font-semibold text-base mb-1"
                      style={{ color: "oklch(0.22 0.07 240)" }}
                    >
                      已登記成功！
                    </p>
                    <p
                      className="font-sans text-sm"
                      style={{ color: "oklch(0.52 0.05 230)" }}
                    >
                      有新課程開放時，我們會第一時間通知您。
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleNotify} className="flex flex-col flex-1">
                    <p
                      className="font-sans text-sm leading-relaxed mb-4"
                      style={{ color: "oklch(0.52 0.05 230)" }}
                    >
                      留下您的 Email，有新課程開放時我們會第一時間通知您。
                    </p>
                    <div className="space-y-3 mb-4">
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="您的姓名（選填）"
                        className="w-full px-4 py-2.5 rounded-xl border text-sm font-sans focus:outline-none focus:ring-2 transition-all"
                        style={{
                          borderColor: "oklch(0.88 0.03 220)",
                          backgroundColor: "oklch(0.98 0.008 85)",
                          color: "oklch(0.22 0.07 240)",
                        }}
                      />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="您的 Email *"
                        required
                        className="w-full px-4 py-2.5 rounded-xl border text-sm font-sans focus:outline-none focus:ring-2 transition-all"
                        style={{
                          borderColor: "oklch(0.88 0.03 220)",
                          backgroundColor: "oklch(0.98 0.008 85)",
                          color: "oklch(0.22 0.07 240)",
                        }}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-auto w-full py-3 rounded-xl font-serif-tc font-semibold text-sm text-white transition-all disabled:opacity-60"
                      style={{ backgroundColor: "oklch(0.30 0.09 240)" }}
                    >
                      {isSubmitting ? "提交中..." : "訂閱開課通知"}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* 瀏覽課程連結 */}
            <div className="text-center">
              <p
                className="font-sans text-sm mb-4"
                style={{ color: "oklch(0.52 0.05 230)" }}
              >
                想先了解我們提供哪些體驗課程？
              </p>
              <Link
                href="/experiences"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-serif-tc font-semibold text-sm transition-all border"
                style={{
                  color: "oklch(0.30 0.09 240)",
                  borderColor: "oklch(0.30 0.09 240)",
                }}
              >
                瀏覽體驗課程
                <ArrowRight size={15} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
