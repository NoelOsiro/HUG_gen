import React from "react";
import BlogItem from "./BlogItem";
import { sanityFetch } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { POSTS_QUERYResult } from "../../../sanity.types";

const Blog = async () => {
  const posts = await sanityFetch<POSTS_QUERYResult>({
    query: POSTS_QUERY,
  });
  return (
    <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
      {posts.map((post) => (
        <BlogItem
          key={post._id}
          title={post.title || ""}
          body={post.description || ""}
          mainImage={post.mainImage}
          slug={post.slug} />
      ))}
    </div>
  );
};

export default Blog;
