import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import { Section, SectionHeader } from "@/components/UI";
import { sanityFetch } from "@/sanity/lib/client";
import { Metadata } from "next";
import Image from "next/image";
import { POST_QUERYResult } from "../../../../../sanity.types";
import { POST_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PortableText, PortableTextComponents } from "next-sanity";
import { SampleImageComponent } from "../../../../components/Blog/SampleImageComponent";

// Metadata for the page
export const metadata: Metadata = {
  title: "Blog Post - Humble Generation",
  description: "Read our latest community stories and updates",
  // other metadata
};

// Define a type for the custom image component props
export type ImageProps = {
  value: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
};

// Define a type for the block component props
type BlockProps = {
  children?: React.ReactNode;
};

// Define the custom components with correct types
const components: PortableTextComponents = {
  types: {
    image: SampleImageComponent,
  },
  block: {
    h3: ({ children }: BlockProps) => (
      <h3 className="pt-8 text-xl font-semibold text-gray-900 dark:text-white">{children}</h3>
    ),
    normal: ({ children }: BlockProps) => (
      <p className="mb-5 text-gray-700 dark:text-waterloo leading-relaxed">{children}</p>
    ),
  },
};

// Fetch blog post data and render the page
const SingleBlogPage = async ({ params }: { params: { slug: string } }) => {
  const post = await sanityFetch<POST_QUERYResult>({
    query: POST_QUERY,
    params,
  });

  return (
    <Section className="bg-white dark:bg-blacksection transition-colors duration-300 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-meta/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col-reverse gap-8 lg:flex-row xl:gap-12">
          {/* Sidebar */}
          <div className="lg:w-[25%]">
            {/* Search Form */}
            <div className="mb-8 bg-gray-50 dark:bg-blackho border border-gray-200 dark:border-strokedark rounded-xl p-6 hover:shadow-solid-5 transition-all duration-300">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Search Articles</h4>
              <form className="relative">
                <input
                  type="text"
                  placeholder="Search for stories..."
                  className="w-full py-3 px-4 pr-12 bg-white dark:bg-blacksection border border-gray-200 dark:border-strokedark rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-waterloo focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-300"
                />
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors duration-300"
                  aria-label="search"
                  type="submit"
                >
                  <i className="fas fa-search"></i>
                </button>
              </form>
            </div>

            {/* Categories */}
            <div className="mb-8 bg-gray-50 dark:bg-blackho border border-gray-200 dark:border-strokedark rounded-xl p-6 hover:shadow-solid-5 transition-all duration-300">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <i className="fas fa-folder text-primary"></i>
                Categories
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "Community Stories", count: 12 },
                  { name: "Program Updates", count: 8 },
                  { name: "Success Stories", count: 15 },
                  { name: "Events", count: 6 },
                  { name: "News", count: 9 }
                ].map((category, index) => (
                  <li key={category.name}>
                    <a 
                      href="#" 
                      className="flex items-center justify-between text-gray-700 dark:text-waterloo hover:text-primary transition-colors duration-300 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {category.name}
                      </span>
                      <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                        {category.count}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Posts */}
            <RelatedPost />
          </div>

          {/* Main Content */}
          <div className="lg:w-[75%]">
            {post && (
              <article className="bg-white dark:bg-blackho border border-gray-200 dark:border-strokedark rounded-2xl overflow-hidden shadow-solid-5">
                {/* Featured Image */}
                {post.mainImage && post.title && (
                  <div className="relative h-96 lg:h-[500px] overflow-hidden">
                    <Image
                      src={urlFor(post.mainImage).url() || '/fallback-image.png'}
                      alt={post.mainImage.alt || post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 75vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    
                    {/* Article Meta Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <div className="flex items-center gap-4 text-sm mb-4">
                        {post.categories && post.categories.length > 0 && (
                          <span className="px-3 py-1 bg-primary rounded-full font-semibold">
                            {post.categories[0]?.title}
                          </span>
                        )}
                        {post.publishedAt && (
                          <span className="flex items-center gap-2">
                            <i className="fas fa-calendar-alt"></i>
                            {new Date(post.publishedAt).toLocaleDateString()}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Article Content */}
                <div className="p-8 lg:p-12">
                  {/* Title */}
                  <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                    {post.title}
                  </h1>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 pb-8 mb-8 border-b border-gray-200 dark:border-strokedark">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-meta rounded-full flex items-center justify-center text-white font-semibold">
                      {post.author?.name?.charAt(0) || 'A'}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {post.author?.name || 'Humble Generation'}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-waterloo flex items-center gap-2">
                        <i className="fas fa-user-edit text-primary"></i>
                        Author & Community Leader
                      </p>
                    </div>
                  </div>

                  {/* Article Body */}
                  {post.body && (
                    <div className="prose prose-lg max-w-none text-gray-700 dark:text-waterloo">
                      <PortableText value={post.body} components={components} />
                    </div>
                  )}

                  {/* Share Component */}
                  <div className="mt-12 pt-8 border-t border-gray-200 dark:border-strokedark">
                    <SharePost />
                  </div>
                </div>
              </article>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SingleBlogPage;
