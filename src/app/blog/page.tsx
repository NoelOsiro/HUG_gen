import { sanityFetch } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { POSTS_QUERYResult } from "../../../sanity.types";
import { Metadata } from "next";
import BlogItem from "@/components/Blog/BlogItem";
import { Posts } from "@/components/Posts";

export const metadata: Metadata = {
  title: "Blog Page - Solid SaaS Boilerplate",
  description: "This is Blog page for Solid Pro",
  // other metadata
};

const BlogPage = async () => {
  const posts = await sanityFetch<POSTS_QUERYResult>({
    query: POSTS_QUERY,
  });
  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="relative py-32 lg:py-36 bg-white w-full">
      <div className="container mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
              {posts.map((post) => (
                <BlogItem 
                key={post._id} 
                title={post.title || ""} 
                body={post.description || ""} 
                mainImage={post.mainImage}
                slug={post.slug}  />
              ))}
          </div>
        </div>
      </div>
        
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default BlogPage;
