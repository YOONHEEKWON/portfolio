import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "윤희권 | UI 개발자",
  description:
    "8년+ 경력의 프론트엔드 개발자 윤희권의 포트폴리오. Next.js, React, TypeScript, Tailwind CSS 기반 웹 개발 및 웹 접근성·반응형 UI 전문.",
  openGraph: {
    title: "윤희권 | UI 개발자",
    description:
      "이커머스, 웹에이전시, 스타트업 경험의 프론트엔드 개발자 포트폴리오",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSansKR.variable} h-full`}>
      <body className="min-h-full bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
