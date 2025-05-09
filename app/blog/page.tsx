"use client";
import Link from "next/link";
import { CalendarIcon } from "lucide-react";

import { useEffect, useState } from "react";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3001/blog")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-muted-foreground">
          Thoughts, tutorials, and insights on web development, design, and
          technology.
        </p>
      </div>

      <div className="max-w-3xl mx-auto grid gap-8">
        {posts.map((post: any) => (
          <article
            key={post.slug}
            className="border rounded-lg p-6 bg-card hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <CalendarIcon size={16} />
              <time dateTime={post.date}>{post.date}</time>
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
    </main>
  );
}
