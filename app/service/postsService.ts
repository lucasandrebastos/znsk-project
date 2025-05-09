import { Post } from "@/types/postType";

export async function getPosts() {
  try {
    const res = await fetch(`http://localhost:3001/blog`);

    const data: Post[] = await res.json();
    return data;
  } catch (err) {
    throw Error(`${err}`);
  }
}

export async function getOnePostBySlug(slug: string) {
  try {
    const res = await fetch(`http://localhost:3001/blog/${slug}`);

    const data: Post[] = await res.json();
    return data;
  } catch (err) {
    throw Error(`${err}`);
  }
}
