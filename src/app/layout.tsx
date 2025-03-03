import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import TemplateLayout from "./(layouts)/templateLayout";
import AntdLayout from "./(layouts)/AntdLayout";

const poppins = Poppins({
  weight: ['200', '400', '600', '800'],
  variable: "--font-poppins",
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
      <body className={poppins.className}>
        <AntdLayout>
          <TemplateLayout>
            {children}
          </TemplateLayout>
        </AntdLayout>
      </body>
    </html>
  );
}
