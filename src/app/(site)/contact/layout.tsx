import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Humble Generation",
  description: "Get in touch with Humble Generation. We'd love to hear from you and discuss how we can work together to create positive change in our communities.",
  keywords: [
    "contact",
    "Humble Generation", 
    "Kenya",
    "Malindi",
    "volunteer",
    "partnership",
    "community",
    "NGO",
    "get involved",
    "support"
  ],
  openGraph: {
    title: "Contact Us - Humble Generation",
    description: "Get in touch with Humble Generation. We'd love to hear from you and discuss how we can work together to create positive change in our communities.",
    type: "website",
    images: [
      {
        url: '/img/carousel-4.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Humble Generation - Join Our Community Impact Mission',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact Us - Humble Generation",
    description: "Get in touch with Humble Generation. We'd love to hear from you and discuss how we can work together to create positive change in our communities.",
    images: ['/img/carousel-4.jpg'],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
