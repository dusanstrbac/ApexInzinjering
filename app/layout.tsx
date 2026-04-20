import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Apex Inženjering | Projektovanje i Izgradnja",
    template: "%s | Apex Inženjering"
  },
  description: "Specijalizovani za projektovanje i izgradnju infrastrukturnih objekata. Postavljamo standarde u preciznosti i održivoj gradnji u Beogradu i regionu.",
  keywords: ["inženjering", "projektovanje", "izgradnja", "infrastruktura", "Beograd", "Apex Inženjering"],
  authors: [{ name: "ClickApp", url: "https://dusanstrbac.com" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a]">
        {children}
      </body>
    </html>
  );
}