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
      className="group bg-white dark:bg-blackho border border-gray-200 dark:border-strokedark rounded-xl overflow-hidden hover:shadow-solid-7 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
    >
      <Link href={`/blog/${slug?.current}`} className="relative block">
        {mainImage && mainImage.asset ? (
          <div className="relative h-64 overflow-hidden">
            <Image
              src={urlFor(mainImage).url()}
              alt={mainImage.alt || title || "Blog Image"}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              width={500}
              height={500}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Read more overlay */}
            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 text-gray-900 font-semibold rounded-full text-sm">
                <i className="fas fa-arrow-right text-primary"></i>
                Read More
              </span>
            </div>
          </div>
        ) : (
          <div className="h-64 bg-gradient-to-br from-primary/10 to-meta/10 flex items-center justify-center">
            <i className="fas fa-image text-gray-400 text-4xl"></i>
          </div>
        )}
      </Link>

      <div className="p-6 space-y-4">
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-waterloo">
          <i className="fas fa-calendar-alt text-primary"></i>
          <span>Latest Post</span>
          <span>•</span>
          <i className="fas fa-clock text-primary"></i>
          <span>5 min read</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300 line-clamp-2">
          <Link href={`/blog/${slug?.current}`}>
            {title || "Untitled"}
          </Link>
        </h3>
        
        {body && (
          <p className="text-gray-700 dark:text-waterloo leading-relaxed line-clamp-3">
            {body.slice(0, 120) + "..."}
          </p>
        )}
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-strokedark">
          <Link 
            href={`/blog/${slug?.current}`}
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
          >
            <span>Read Article</span>
            <i className="fas fa-arrow-right text-sm"></i>
          </Link>
          
          <div className="flex items-center gap-3">
            <button 
              className="text-gray-400 dark:text-waterloo hover:text-primary transition-colors duration-300"
              title="Share"
            >
              <i className="fas fa-share-alt"></i>
            </button>
            <button 
              className="text-gray-400 dark:text-waterloo hover:text-red-500 transition-colors duration-300"
              title="Like"
            >
              <i className="fas fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  );
};

export default BlogItem;
