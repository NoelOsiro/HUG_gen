
import Blog from "@/components/Blog";
import { Section, SectionHeader } from "@/components/UI";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Humble Generation",
  description: "Stay updated with our latest news, stories, and insights from our community programs and initiatives.",
  // other metadata
};

const BlogPage = async () => {
  return (
    <Section className="bg-white dark:bg-blacksection transition-colors duration-300 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-meta/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <SectionHeader
          subtitle="Our Blog"
          title="Latest News & Stories"
          description="Discover inspiring stories, community updates, and insights from our ongoing programs and initiatives that are transforming lives."
        />
        
        <div className="mx-auto mt-15 max-w-c-1280">
          <Blog />
        </div>
      </div>
    </Section>
  );
};

export default BlogPage;
