import type { Metadata } from "next";
import { Play, Inter } from "next/font/google"; // Import Inter
import ".//styles/main.css";
import Header from "@/components/Header/Header";
import React from "react";
import Footer from "@/components/Footer/Footer";

// Load Play font
const play = Play({
  variable: "--font-play",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Load Inter font
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s - A K Singh",
    default: "A K Singh",
  },
  description:
    "Hello! My name is Ashok and I am a software developer located in India, I have a serious passion for web development, designs and interactive user experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>): React.ReactElement {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      {/* Apply both font variables to the body */}
      <body className={`${play.variable} ${inter.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}