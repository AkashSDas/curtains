import "./globals.css";

import Navbar from "@/components/shared/navbar";
import { Urbanist } from "@next/font/google";
import localFont from "@next/font/local";

const urbanist = Urbanist({
  weight: ["400", "500"],
  variable: "--font-urbanist",
  subsets: ["latin"],
  preload: true,
});
const cubano = localFont({
  src: "../../public/cubano.ttf",
  variable: "--font-cubano",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${urbanist.variable} ${cubano.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
