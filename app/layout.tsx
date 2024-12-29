import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { imageOptimizer } from "next/dist/server/image-optimizer";
import {APP_DESCRIPTION, APP_NAME, APP_SLOGAN} from '@/lib/constants';
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata:Metadata={
  title:{
    template:`%s |${APP_NAME}`,
    default:`${APP_NAME}. ${APP_SLOGAN}`,
  },
  description:APP_DESCRIPTION,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}