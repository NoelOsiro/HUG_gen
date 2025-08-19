import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import { Kumbh_Sans } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
import ClientOnly from "@/components/ClientOnly";

const kumbh = Kumbh_Sans({ subsets: ['latin'] });


export const metadata: Metadata = {
  title: "Humble Generation - Community Based Organization",
  description: "Cultivating compassion, inspiring change, and serving our generation with unwavering dedication. Join us in making a difference!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`${kumbh.className} bg-white dark:bg-blacksection text-gray-900 dark:text-white antialiased transition-colors duration-300`}>
        <ThemeProvider>
          <Header/>
          {children}
          <ClientOnly>
            <Footer/>
            <ThemeToggle />
          </ClientOnly>
        </ThemeProvider>
        </body>
        
    </html>
  );
}
