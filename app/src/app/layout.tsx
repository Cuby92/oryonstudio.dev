import type { Metadata } from "next";
import { Children } from "@/utils/types";
import "./globals.scss";

export const metadata: Metadata = {
  title: "",
  description: "",
};

function RootLayout({ children }: Children) {
  return (
    <html lang="en">
      <body>
        { children }
      </body>
    </html>
  );
}

export default RootLayout;