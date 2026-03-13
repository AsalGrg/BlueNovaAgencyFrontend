import type { Metadata } from "next";
import {
  Roboto,
  Inter,
  Syne_Tactile,
  Instrument_Serif,
} from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import { AnimationCompleteProvider } from "@/context/animation_complete.context";
import Script from "next/script";

const instrumental_Serif = Instrument_Serif({
  weight: "400",
  variable: "--font-instrumental-serif",
  style: ["italic"],
});

const roboto = Roboto({
  weight: "400",
  variable: "--font-roboto",
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Blue Nova Agency",
  description: "Your next step to growth in the digital world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumental_Serif.variable} ${roboto.variable} antialiased`}
      >
        <AnimationCompleteProvider>
          <Navbar />
          <div className="w-full flex justify-center">
            <main className="w-full">{children}</main>
          </div>
        </AnimationCompleteProvider>



        <Script
          src="https://kit.fontawesome.com/d49d584165.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
