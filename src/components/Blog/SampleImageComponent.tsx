import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { ImageProps } from "../../app/blog/[slug]/page";

// Sample Image Component
export const SampleImageComponent = ({ value }: ImageProps) => {

  if (!value || !value.asset || !value.asset._ref) {
    return null;
  }
  const imageUrl = urlFor(value).url();

  return (
    <Image
      src={imageUrl || '/fallback-image.png'} // Fallback image in case URL is not valid
      alt={value.alt || ' '}
      loading="lazy"
      width={900}
      height={500}
      className="rounded-md object-cover object-center mb-8" />
  );
};
