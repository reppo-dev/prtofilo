import type { Metadata } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio website",
  description: "a modern portfolio website built with next.js and gasp.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${spaceGrotesk.className} antialiased`}
      >
        <Header />
        <main className="relative  overflow-x-hidden bg-white z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
