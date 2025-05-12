import { use } from "react";
import { PostType } from "@/types/postType";
import { formatDate } from "@/utils/formatDate";
import { CalendarIcon } from "lucide-react";
import Link from "next/link";

export default function Posts({ posts }: { posts: Promise<PostType[]> }) {
  const allPosts = use(posts);

  return (
    <div className="max-w-3xl mx-auto grid gap-8">
      {allPosts.map((post: PostType) => (
        <article
          key={post.slug}
          className="border rounded-lg p-6 bg-card hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <CalendarIcon size={16} />
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
          <h2 className="text-2xl font-semibold mb-3">
            <Link
              href={`/blog/${post.slug}`}
              className="hover:text-primary transition-colors"
            >
              {post.title}
            </Link>
          </h2>
          <p className="text-muted-foreground mb-4">{post.summary}</p>
          <Link
            href={`/blog/${post.slug}`}
            className="text-primary hover:underline inline-flex items-center"
          >
            Read more
          </Link>
        </article>
      ))}
    </div>
  );
}
