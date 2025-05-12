import { PostType } from "@/types/postType";

const URL = "https://znsk-blog-production.up.railway.app";
// const URL = "http://localhost:3001";

export async function getPosts(): Promise<PostType[]> {
  try {
    const res = await fetch(`${URL}/blog`);

    const data: PostType[] = await res.json();
    return data;
  } catch (err) {
    throw Error(`${err}`);
  }
}

export async function getOnePostBySlug(slug: string): Promise<PostType> {
  try {
    const res = await fetch(`${URL}/blog/${slug}`);

    const data: PostType = await res.json();
    return data;
  } catch (err) {
    throw Error(`${err}`);
  }
}
