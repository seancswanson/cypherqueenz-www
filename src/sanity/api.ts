import { useSanityClient } from "astro-sanity";

export interface BlogPost {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  content: Content[];
  galleryImages: GalleryImages;
  slug: Slug;
  title: string;
  excerpt: string;
  visibleBoolean: boolean;
  _updatedAt: Date;
}

export interface BlogAndEventImages {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
  altTitle: string;
  caption: string;
  imageFile: ImageFile;
  title: string;
}

export interface Slug {
  _type: string;
  current: string;
}

export interface EventPost {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
  blogAndEventImages: BlogAndEventImages;
  content: Content[];
  date: string;
  entryFee: string;
  location: string;
  slug: Slug;
  time: string;
  title: string;
  visibleBoolean: boolean;
}

export interface Child {
  _key: string;
  _type: string;
  marks: any[];
  text: string;
}

export interface Content {
  _key: string;
  _type: string;
  children: Child[];
  markDefs: any[];
  style: string;
}

export interface ImageFile {
  _ref: string;
  _type: string;
}
export interface GalleryImages {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
  altTitle: string;
  caption: string;
  imageFile: ImageFile;
  title: string;
}

export interface Slug {
  _type: string;
  current: string;
}

export async function getAllMedia() {
  const client = useSanityClient();
  const query = "*[_type == 'galleryImages' && galleryBoolean == true]";
  const media = await client.fetch(query);
  return media.sort((a: any, b: any) => {
    return a._createdAt > b._createdAt ? 1 : -1;
  });
}

export async function getAllEventMedia() {
  const client = useSanityClient();
  const query = "*[_type == 'blogAndEventMedia']";
  const media = await client.fetch(query);
  return media;
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const client = useSanityClient();
  const query =
    "*[_type == 'post' && visibleBoolean == true]{title, author, excerpt, slug, _createdAt, slug, content[], galleryImages-> }";
  const media = await client.fetch(query);
  return media.sort((a: any, b: any) => {
    return a._createdAt < b._createdAt ? 1 : -1;
  });
}

export async function getAllBlogSlugs(): Promise<Slug[]> {
  const client = useSanityClient();
  const query = "*[_type == 'post']{slug}";
  const media = await client.fetch(query);
  return media.sort((a: any, b: any) => {
    return a._createdAt > b._createdAt ? 1 : -1;
  });
}

export async function getAllEventPosts(): Promise<EventPost[]> {
  const client = useSanityClient();
  const query =
    "*[_type == 'event' && visibleBoolean == true]{title, slug, _createdAt, slug, time, date, location, entryFee, content[], blogAndEventImages-> }";
  const media = await client.fetch(query);
  return media.sort((a: any, b: any) => {
    return a._createdAt > b._createdAt ? 1 : -1;
  });
}
