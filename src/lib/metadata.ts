import { Metadata } from "next";

interface BlogPostMetadata {
  title: string;
  description: string;
  slug: string;
  author?: string;
  publishedAt?: string;
  image?: string;
  tags?: string[];
}

export function generateBlogPostMetadata({
  title,
  description,
  slug,
  author = "Humble Generation",
  publishedAt,
  image = "/img/carousel-4.jpg",
  tags = []
}: BlogPostMetadata): Metadata {
  const siteName = "Humble Generation";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://humblegenerationke.org";
  const fullUrl = `${siteUrl}/blog/${slug}`;
  
  const keywords = [
    "Humble Generation",
    "blog",
    "community",
    "Kenya",
    "Malindi",
    "social impact",
    ...tags
  ];

  return {
    title: `${title} - ${siteName}`,
    description,
    keywords,
    authors: [{ name: author }],
    publisher: siteName,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: `${title} - ${siteName}`,
      description,
      url: fullUrl,
      siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
          type: 'image/jpeg',
        }
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: publishedAt,
      authors: [author],
      tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} - ${siteName}`,
      description,
      images: [image],
      creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE || '@HumbleGenKE',
    },
  };
}

export function generatePageMetadata({
  title,
  description,
  path = "/",
  image = "/img/carousel-4.jpg",
  keywords = []
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
}): Metadata {
  const siteName = "Humble Generation";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://humblegenerationke.org";
  const fullUrl = `${siteUrl}${path}`;
  
  const baseKeywords = [
    "Humble Generation",
    "community",
    "Kenya",
    "Malindi",
    "social impact",
    "NGO",
    "charity"
  ];

  return {
    title: path === "/" ? title : `${title} - ${siteName}`,
    description,
    keywords: [...baseKeywords, ...keywords],
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: path === "/" ? title : `${title} - ${siteName}`,
      description,
      url: fullUrl,
      siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
          type: 'image/jpeg',
        }
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: path === "/" ? title : `${title} - ${siteName}`,
      description,
      images: [image],
      creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE || '@HumbleGenKE',
    },
  };
}
