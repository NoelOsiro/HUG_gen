
import Blog from "@/components/Blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page - Solid SaaS Boilerplate",
  description: "This is Blog page for Solid Pro",
  // other metadata
};

const BlogPage = async () => {

  return (
      <section className="relative py-32 lg:py-36 bg-white w-full">
        <div className="container mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
            <Blog />
          </div>
        </div>
      </section>
  );
};

export default BlogPage;
