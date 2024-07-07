import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import { Kumbh_Sans } from "next/font/google";
import Footer from "@/components/Footer/Footer";

const kumbh = Kumbh_Sans({ subsets: ['latin'] });


export const metadata: Metadata = {
  title: "Humble generation",
  description: "Community Based Organization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kumbh.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
        
    </html>
  );
}
