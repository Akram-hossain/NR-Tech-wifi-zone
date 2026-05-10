import { Hind_Siliguri, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import FloatingActions from "@/components/FloatingActions";

const hind = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hind",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("http://nrtechbd.net"),
  title: {
    default: "NR Tech Wifi Zone — বগুড়ার সেরা ইন্টারনেট সেবা",
    template: "%s | NR Tech Wifi Zone",
  },
  description:
    "বগুড়া সদরে ফাইবার অপটিক প্রযুক্তিতে দ্রুত গতির, নিরবিচ্ছিন্ন এবং সাশ্রয়ী ব্রডব্যান্ড ইন্টারনেট সেবা। হোম ও হটস্পট প্যাকেজ, ২৪/৭ গ্রাহক সেবা।",
  keywords: [
    "NR Tech",
    "Wifi Zone",
    "Bogura ISP",
    "Internet Bogura",
    "Broadband Bogura",
    "Matidali internet",
    "BDIX Bogura",
    "fiber optic Bogura",
    "ব্রডব্যান্ড বগুড়া",
  ],
  authors: [{ name: "NR Tech Wifi Zone" }],
  openGraph: {
    title: "NR Tech Wifi Zone — Bogura's Trusted ISP",
    description: "Fiber-fast broadband internet across Bogura Sadar.",
    url: "http://nrtechbd.net",
    siteName: "NR Tech Wifi Zone",
    locale: "bn_BD",
    type: "website",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#08080c" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" data-lang="bn" suppressHydrationWarning className={`${hind.variable} ${jakarta.variable}`}>
      <body className="bg-app text-app">
        <Providers>
          <TopBar />
          <Header />
          <main className="page-enter min-h-[60vh]">{children}</main>
          <Footer />
          <FloatingActions />
        </Providers>
      </body>
    </html>
  );
}
