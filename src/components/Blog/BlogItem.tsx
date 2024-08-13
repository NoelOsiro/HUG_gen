"use client";
import { urlFor } from "@/sanity/lib/image";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface BlogProps {
  title: string;
  body: any;
  mainImage: any;
  slug: any;
}

const BlogItem = (blog: BlogProps) => {
  const { title, body, mainImage, slug } = blog;

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: -20,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true }}
      className="animate_top rounded-lg bg-white p-1.5 pb-9 shadow-lg border border-gray-200 dark:bg-blacksection dark:border-gray-700 mb-4"
    >
      <Link href={`/blog/${slug?.current}`} className="relative">
        {mainImage && mainImage.asset && (
          <Image
            src={urlFor(mainImage).url()} // Handle image URL properly based on your setup
            alt={mainImage.alt || title || "Blog Image"}
            className="object-contain rounded-lg"
            width={500}
            height={500}
          />
        )}
      </Link>


      <div className="px-4 py-2">
        <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-xl font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
          <Link href={`/blog/${slug?.current}`}>
            {title ? `${title.slice(0, 40)}...` : "Untitled"}
          </Link>
        </h3>
        {body && (
          <p className="line-clamp-3">
            {body.slice(0, 100) + "..."}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default BlogItem;
