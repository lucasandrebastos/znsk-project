import Image from "next/image";
import LayoutSlug from "./layout";

import formatDate from "@/utils/formatDate";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await fetch(
    `https://znsk-blog-production.up.railway.app/blog/${slug}`
  ).then((res) => res.json());

  return (
    <LayoutSlug>
      <div className="relative mb-8 aspect-video border-4 border-primary/20">
        <Image
          fill
          src="https://static.vecteezy.com/system/resources/thumbnails/001/785/195/original/hacker-code-running-down-free-video.jpg"
          alt=""
        />
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-4">{post.title}</h1>
      <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
        {post.sumary}
      </h2>
      <p className="text-muted-foreground mb-4">{formatDate(post.date)}</p>
      <p>{post.content}</p>
    </LayoutSlug>
  );
}
