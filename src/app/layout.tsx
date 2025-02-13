import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Layout from "./_components/Layout";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300"],
  style: ["normal"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Is it toxic?",
  description: "Plant toxicity checker",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${inter.variable}  antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
