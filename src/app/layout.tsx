import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HansiCloudSolutions",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer className="h-50px py-3 w-full">
          <p className="text-center tracking-[5px] text-xs font-semibold">©2024 HANSICLOUDSOLUTIONS INC. - HYDERABAD</p>
        </footer>
      </body>
    </html>
  );
}
