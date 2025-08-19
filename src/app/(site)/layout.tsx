import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import { Kumbh_Sans } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
import ClientOnly from "@/components/ClientOnly";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/schema";

const kumbh = Kumbh_Sans({ subsets: ['latin'] });


export const metadata: Metadata = {
  title: "Humble Generation - Community Based Organization",
  description: "Cultivating compassion, inspiring change, and serving our generation with unwavering dedication. Join us in making a difference!",
  keywords: [
    "Humble Generation",
    "Community Organization",
    "Kenya",
    "Malindi",
    "Charity",
    "Volunteer",
    "Social Impact",
    "Community Development",
    "Non-profit",
    "Compassion",
    "Change",
    "Community Service"
  ],
  authors: [{ name: "Humble Generation" }],
  creator: "Humble Generation",
  publisher: "Humble Generation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://humblegenerationke.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Humble Generation - Community Based Organization",
    description: "Cultivating compassion, inspiring change, and serving our generation with unwavering dedication. Join us in making a difference in Malindi, Kenya!",
    url: '/',
    siteName: 'Humble Generation',
    images: [
      {
        url: '/img/carousel-4.jpg',
        width: 1200,
        height: 630,
        alt: 'Humble Generation - Community Impact and Outreach',
        type: 'image/jpeg',
      },
      {
        url: '/img/carousel-4.jpg',
        width: 1080,
        height: 1080,
        alt: 'Humble Generation - Community Impact and Outreach',
        type: 'image/jpeg',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Humble Generation - Community Based Organization",
    description: "Cultivating compassion, inspiring change, and serving our generation with unwavering dedication. Join us in making a difference!",
    images: ['/img/carousel-4.jpg'],
    creator: '@HumbleGenKE',
    site: '@HumbleGenKE',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    // Add other verification codes as needed
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL || 'https://humblegenerationke.org'} />
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
