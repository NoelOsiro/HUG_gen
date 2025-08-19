import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Humble Generation",
  description: "Learn about Humble Generation's mission to cultivate compassion and inspire change in Kenya. Discover our story, values, and impact in the community.",
  keywords: [
    "about",
    "Humble Generation",
    "mission",
    "vision",
    "values",
    "Kenya",
    "Malindi",
    "community organization",
    "social impact",
    "team",
    "story"
  ],
  openGraph: {
    title: "About Us - Humble Generation",
    description: "Learn about Humble Generation's mission to cultivate compassion and inspire change in Kenya. Discover our story, values, and impact in the community.",
    type: "website",
    images: [
      {
        url: '/img/carousel-4.jpg',
        width: 1200,
        height: 630,
        alt: 'About Humble Generation - Our Mission and Community Impact',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "About Us - Humble Generation",
    description: "Learn about Humble Generation's mission to cultivate compassion and inspire change in Kenya. Discover our story, values, and impact in the community.",
    images: ['/img/carousel-4.jpg'],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
