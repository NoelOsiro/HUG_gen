export interface Organization {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  description: string;
  url: string;
  logo: string;
  image: string;
  telephone: string;
  email: string;
  address: {
    "@type": "PostalAddress";
    streetAddress: string;
    addressLocality: string;
    addressCountry: string;
  };
  sameAs: string[];
  foundingDate?: string;
  founders?: Array<{
    "@type": "Person";
    name: string;
  }>;
}

export interface WebSite {
  "@context": "https://schema.org";
  "@type": "WebSite";
  name: string;
  description: string;
  url: string;
  potentialAction: {
    "@type": "SearchAction";
    target: {
      "@type": "EntryPoint";
      urlTemplate: string;
    };
    "query-input": string;
  };
}

export interface BlogPosting {
  "@context": "https://schema.org";
  "@type": "BlogPosting";
  headline: string;
  description: string;
  image: string;
  author: {
    "@type": "Person" | "Organization";
    name: string;
  };
  publisher: {
    "@type": "Organization";
    name: string;
    logo: {
      "@type": "ImageObject";
      url: string;
    };
  };
  datePublished: string;
  dateModified?: string;
  url: string;
  mainEntityOfPage: {
    "@type": "WebPage";
    "@id": string;
  };
}

export function generateOrganizationSchema(): Organization {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://humblegenerationke.org';
  
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Humble Generation",
    description: "Cultivating compassion, inspiring change, and serving our generation with unwavering dedication. Community-based organization in Kenya.",
    url: baseUrl,
    logo: `${baseUrl}/img/logo.png`,
    image: `${baseUrl}/img/carousel-4.jpg`,
    telephone: "+254714956717",
    email: "humblegenerationke@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Malindi Complex Lamu Road",
      addressLocality: "Malindi",
      addressCountry: "Kenya"
    },
    sameAs: [
      "https://facebook.com/humblegenerationke",
      "https://instagram.com/humblegenerationke",
      "https://twitter.com/HumbleGenKE"
    ]
  };
}

export function generateWebSiteSchema(): WebSite {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://humblegenerationke.org';
  
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Humble Generation",
    description: "Cultivating compassion, inspiring change, and serving our generation with unwavering dedication.",
    url: baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/blog?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
}

export function generateBlogPostSchema({
  title,
  description,
  slug,
  author = "Humble Generation",
  publishedAt,
  modifiedAt,
  image
}: {
  title: string;
  description: string;
  slug: string;
  author?: string;
  publishedAt: string;
  modifiedAt?: string;
  image?: string;
}): BlogPosting {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://humblegenerationke.org';
  const postUrl = `${baseUrl}/blog/${slug}`;
  
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image: image || `${baseUrl}/img/carousel-4.jpg`,
    author: {
      "@type": "Organization",
      name: author
    },
    publisher: {
      "@type": "Organization",
      name: "Humble Generation",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/img/logo.png`
      }
    },
    datePublished: publishedAt,
    dateModified: modifiedAt || publishedAt,
    url: postUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl
    }
  };
}
