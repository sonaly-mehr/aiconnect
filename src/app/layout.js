import { Toaster } from "sonner";
import "./globals.css";
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
  title: "Monitoring Any Process From Anywhere",
  description: "Monitoring Any Process From Anywhere",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geometria.variable} ${bowler.variable}`}>
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
