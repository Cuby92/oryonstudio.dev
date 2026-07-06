import type { Metadata } from "next";
import { Children } from "@/utils/types";
import "./globals.scss";
import Navbar from "@/components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "ORYON STUDIO | Premium Next.js Web Design & Development",
  description: "We craft high-performance, visually stunning websites using Next.js. Tailored digital experiences for ambitious brands looking to stand out.",
};

function RootLayout({ children }: Children) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        { children }
      </body>
    </html>
  );
}

export default RootLayout;