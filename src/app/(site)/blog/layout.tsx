import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Humble Generation",
  description: "Read inspiring stories, updates, and insights from Humble Generation's community work in Kenya. Discover how we're making a difference together.",
  keywords: [
    "blog",
    "Humble Generation",
    "stories",
    "community impact",
    "Kenya",
    "Malindi",
    "social change",
    "inspiration",
    "volunteer stories",
    "community development"
  ],
  openGraph: {
    title: "Blog - Humble Generation",
    description: "Read inspiring stories, updates, and insights from Humble Generation's community work in Kenya. Discover how we're making a difference together.",
    type: "website",
    images: [
      {
        url: '/img/carousel-4.jpg',
        width: 1200,
        height: 630,
        alt: 'Humble Generation Blog - Stories of Community Impact',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Blog - Humble Generation",
    description: "Read inspiring stories, updates, and insights from Humble Generation's community work in Kenya. Discover how we're making a difference together.",
    images: ['/img/carousel-4.jpg'],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
