import type { Metadata } from "next";
import { Playfair_Display, Instrument_Serif } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: ["400"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dhyey | Software Engineer",
  description: "Portfolio of Dhyey, a software engineer who loves to solve problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap" rel="stylesheet" />
      </head>
      <body className={`${instrumentSerif.variable} ${playfair.variable} antialiased bg-background text-foreground font-sans`}>
        {children}
      </body>
    </html>
  );
}
