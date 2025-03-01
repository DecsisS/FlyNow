import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TemplateLayout from "./(layouts)/templateLayout";
import AntdLayout from "./(layouts)/AntdLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FlyNow",
  description: "Airline booking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AntdLayout>
          <TemplateLayout>
            {children}
          </TemplateLayout>
        </AntdLayout>
      </body>
    </html>
  );
}
