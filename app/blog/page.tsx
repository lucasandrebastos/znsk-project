import Link from "next/link";
import { CalendarIcon } from "lucide-react";

export default function BlogPage() {
  // Sample blog posts data - in a real app, this would come from a database or CMS
  const posts = [
    {
      id: 1,
      title: "Building a Portfolio Website with Next.js and Tailwind CSS",
      summary:
        "Learn how to create a modern, responsive portfolio website using Next.js 14 and Tailwind CSS with dark mode support.",
      date: "May 10, 2023",
      slug: "building-portfolio-website",
    },
    {
      id: 2,
      title: "Optimizing React Performance: Tips and Tricks",
      summary:
        "Explore various techniques to improve the performance of your React applications, from code splitting to memoization.",
      date: "April 22, 2023",
      slug: "optimizing-react-performance",
    },
    {
      id: 3,
      title: "Introduction to Server Components in Next.js",
      summary:
        "Discover how Server Components work in Next.js and how they can improve your application's performance and user experience.",
      date: "March 15, 2023",
      slug: "server-components-nextjs",
    },
    {
      id: 4,
      title: "Creating a Custom Hook for Dark Mode in React",
      summary:
        "Learn how to implement a custom React hook for managing dark mode in your applications with local storage persistence.",
      date: "February 28, 2023",
      slug: "custom-dark-mode-hook",
    },
    {
      id: 5,
      title: "Responsive Design Patterns with Tailwind CSS",
      summary:
        "Explore common responsive design patterns and how to implement them efficiently using Tailwind CSS utility classes.",
      date: "January 17, 2023",
      slug: "responsive-design-tailwind",
    },
    {
      id: 6,
      title: "Authentication in Next.js Applications",
      summary:
        "A comprehensive guide to implementing authentication in Next.js applications using NextAuth.js and various providers.",
      date: "December 5, 2022",
      slug: "nextjs-authentication",
    },
  ];

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
        {posts.map((post) => (
          <article
            key={post.id}
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
