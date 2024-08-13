import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import { sanityFetch } from "@/sanity/lib/client";
import { Metadata } from "next";
import Image from "next/image";
import { POST_QUERYResult } from "../../../../sanity.types";
import { POST_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PortableText, PortableTextComponents } from "next-sanity";
import { SampleImageComponent } from "../../../components/Blog/SampleImageComponent";

// Metadata for the page
export const metadata: Metadata = {
  title: "Blog Details Page - Solid SaaS Boilerplate",
  description: "This is Blog details page for Solid Pro",
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
      <h3 className="pt-8 text-xl font-semibold">{children}</h3>
    ),
    normal: ({ children }: BlockProps) => <p className="mb-5">{children}</p>,
  },
};

// Fetch blog post data and render the page
const SingleBlogPage = async ({ params }: { params: { slug: string } }) => {
  const post = await sanityFetch<POST_QUERYResult>({
    query: POST_QUERY,
    params,
  });

  return (
    <>
      <section className="relative py-32 lg:py-36 bg-white w-full">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8">
          <div className="flex flex-col-reverse gap-4 lg:flex-row xl:gap-4">
            <div className="md:w-1/2 lg:w-[22%]">
              {/* Search Form */}
              <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-3.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                <form action="https://formbold.com/s/unique_form_id" method="POST">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search Here..."
                      className="w-full rounded-lg border border-stroke px-6 py-4 shadow-solid-12 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />
                    <button
                      className="absolute right-0 top-0 p-5"
                      aria-label="search-icon"
                    >
                      <svg
                        className="fill-black transition-all duration-300 hover:fill-primary dark:fill-white dark:hover:fill-primary"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>

              {/* Categories */}
              <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
                  Categories
                </h4>
                <ul>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Blog</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Events</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Grids</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">News</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Rounded</a>
                  </li>
                </ul>
              </div>

              {/* Related Posts */}
              <RelatedPost />
            </div>

            <div className="lg:w-[78%]">
              {/* Blog Details */}
              {post && (
                <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-4">
                  <div className="mb-10 w-full overflow-hidden">
                    {post.mainImage && post.title ? (
                      <div className="relative">
                        <Image
                          src={urlFor(post.mainImage).url() || '/fallback-image.png'} // Fallback image
                          alt={post.mainImage.alt || post.title}
                          width={900}
                          height={500}
                          className="rounded-md object-cover object-center"
                        />
                      </div>
                    ) : (
                      <div className="relative bg-gray-200 h-500 rounded-md">
                        <p className="text-center text-gray-500">No Image Available</p>
                      </div>
                    )}
                  </div>

                  <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                    {post.title}
                  </h2>

                  <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5 px-4">
                    <li>
                      <span className="text-black dark:text-white">Author: {post.author?.name}</span>
                    </li>
                    {post.publishedAt ? (
                      <li>
                        <span className="text-black dark:text-white">
                          Published On: {new Date(post.publishedAt).toDateString()}
                        </span>
                      </li>
                    ) : null}
                    {post.categories && post.categories.length > 0 && (
                      <li>
                        <span className="text-black dark:text-white">
                          Category: {post.categories[0]?.title}
                        </span>
                      </li>
                    )}
                  </ul>

                  {post.body && (
                    <div className="blog-details px-4">
                      <PortableText value={post.body} components={components} />
                    </div>
                  )}

                  <SharePost />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
