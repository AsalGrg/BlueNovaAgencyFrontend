
import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const instrumental_Serif = Instrument_Serif({
  weight: "400",
  variable: "--font-instrumental-serif",
  style: ["italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
        className={`${instrumental_Serif.variable} ${inter.variable} antialiased`}
      >
        <div className="w-full flex justify-center">
          <main className="layout">{children}</main>
        </div>
      </body>
    </html>
  );
}
