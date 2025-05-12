import Image from "next/image";
import LayoutSlug from "./layout";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

import { formatDate } from "@/utils/formatDate";
import { getOnePostBySlug } from "@/app/service/postsService";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getOnePostBySlug(slug);

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
        {post.summary}
      </h2>
      <p className="text-muted-foreground mb-4">{formatDate(post.date)}</p>
      <div className="prose prose-neutral dark:prose-invert max-w-none prose-pre:bg-transparent prose-code:text-sm">
        <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
          {post.content}
        </ReactMarkdown>
      </div>
    </LayoutSlug>
  );
}
