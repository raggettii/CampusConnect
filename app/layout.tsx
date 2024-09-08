import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CampusShuttle",
  description: "Online ticket booking, for colleges",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F4F4f4] h-full`}>
        <span className="ml-[50%] bg-red-800">Currently in development</span>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
