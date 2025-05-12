"use client";
import { use } from "react";
import { PostType } from "../types/postType";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formatDateToBR } from "@/utils/formatDate";

export default function RecentPosts({ posts }: { posts: Promise<PostType[]> }) {
  const allPosts = use(posts);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {allPosts.slice(allPosts.length - 2).map((post) => (
        <div
          key={post.id}
          className="border rounded-lg p-6 bg-card hover:shadow-md transition-shadow"
        >
          <div className="text-sm text-muted-foreground mb-2">
            {formatDateToBR(post.date)}
          </div>
          <h3 className="font-semibold text-xl mb-3">{post.title}</h3>
          <p className="text-muted-foreground mb-4">{post.summary}</p>
          <Link
            href={`/blog/${post.slug}`}
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            Read more <ArrowRight size={16} />
          </Link>
        </div>
      ))}
    </div>
  );
}
