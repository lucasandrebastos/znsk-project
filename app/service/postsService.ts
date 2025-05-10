import { Post } from "@/types/postType";

const URL = "https://znsk-blog-production.up.railway.app";

export async function getPosts() {
  try {
    const res = await fetch(`${URL}/blog`);

    const data: Post[] = await res.json();
    return data;
  } catch (err) {
    throw Error(`${err}`);
  }
}

export async function getOnePostBySlug(slug: string) {
  try {
    const res = await fetch(`${URL}blog/${slug}`);

    const data: Post[] = await res.json();
    return data;
  } catch (err) {
    throw Error(`${err}`);
  }
}
