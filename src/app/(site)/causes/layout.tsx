import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Causes - Humble Generation",
  description: "Explore the causes and projects that Humble Generation supports in Kenya. From education to healthcare, discover how you can make a difference.",
  keywords: [
    "causes",
    "projects",
    "Humble Generation",
    "community support",
    "Kenya",
    "Malindi",
    "education",
    "healthcare",
    "social programs",
    "donate",
    "support"
  ],
  openGraph: {
    title: "Our Causes - Humble Generation",
    description: "Explore the causes and projects that Humble Generation supports in Kenya. From education to healthcare, discover how you can make a difference.",
    type: "website",
    images: [
      {
        url: '/img/carousel-4.jpg',
        width: 1200,
        height: 630,
        alt: 'Humble Generation Causes - Supporting Community Development',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Our Causes - Humble Generation",
    description: "Explore the causes and projects that Humble Generation supports in Kenya. From education to healthcare, discover how you can make a difference.",
    images: ['/img/carousel-4.jpg'],
  },
};

export default function CausesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
