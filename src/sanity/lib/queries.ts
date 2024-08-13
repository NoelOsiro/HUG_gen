// ./src/sanity/lib/queries.ts

import { groq } from "next-sanity";

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)][0...12]{
  _id, title, slug, mainImage, description
}`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{
  _id, title, slug, title, body, mainImage, description, author->{name, image}, publishedAt, categories[]->{title}
}`;