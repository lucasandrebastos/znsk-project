import { Suspense } from "react";
import Loading from "./loading";
import Posts from "./posts";
import { getPosts } from "../service/postsService";

export const revalidate = 60;

export const dynamicParams = true;
export default function BlogPage() {
  const posts = getPosts();

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-muted-foreground">
          Thoughts, tutorials, and insights on web development, design, and
          technology.
        </p>
      </div>
      <Suspense fallback={<Loading />}>
        <Posts posts={posts} />
      </Suspense>
    </main>
  );
}
