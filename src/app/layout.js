import Header from "@/components/Header/Header";
import "@/styles/global.css";

import { Inter, Play, Comic_Neue } from "next/font/google";

// Configure Inter
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

// Configure Play
const play = Play({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-play",
  display: "swap",
});

// Configure Comic Neue
const comicNeue = Comic_Neue({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-comic-neue",
});

export const metadata = {
  title: {
    template: "%s - A K Singh",
    default: "A K Singh",
  },
  description:
    "Hello! My name is Ashok and I am a software developer located in India, I have a serious passion for web devlopment, designs and interactive user experiences.",
};

export const viewport = {
  themeColor: "#155e75",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${comicNeue.variable} ${inter.variable} ${play.variable}`}
    >
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
