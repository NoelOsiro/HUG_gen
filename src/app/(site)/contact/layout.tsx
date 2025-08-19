import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Humble Generation",
  description: "Get in touch with Humble Generation. We'd love to hear from you and discuss how we can work together to create positive change in our communities.",
  keywords: "contact, Humble Generation, Kenya, Malindi, volunteer, partnership, community, NGO",
  openGraph: {
    title: "Contact Us - Humble Generation",
    description: "Get in touch with Humble Generation. We'd love to hear from you and discuss how we can work together to create positive change in our communities.",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
