import { Inter, Michroma, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import localFont from "next/font/local";

const geometria = localFont({
  src: [
    {
      path: "../../public/fonts/Geometria-Light.ttf",
      weight: "300",
    },
    {
      path: "../../public/fonts/Geometria.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Geometria-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/Geometria-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/Geometria-ExtraBold.ttf",
      weight: "800",
    },
  ],
  variable: "--font-geometria",
});

const bowler = localFont({
  src: [
    {
      path: "../../public/fonts/BOWLER.otf",
    },
  ],
  variable: "--font-bowler",
});

export const metadata = {
  title: "AI Connection",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geometria.variable} ${bowler.variable}`}>
        {/* <Navbar/> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
