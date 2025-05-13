import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getPosts } from "./service/postsService";
import RecentPosts from "./recentPosts";
import { Suspense } from "react";
import Loading from "./loading";

export const revalidate = 60;

export const dynamicParams = true;

export default function Home() {
  const posts = getPosts();

  return (
    <main className="container mx-auto px-4 py-12">
      <section className="flex flex-col items-center justify-center min-h-[70vh] text-center">
        <div className="relative w-32 h-32 mb-8 rounded-full overflow-hidden border-4 border-primary/20">
          <Image
            fill
            src="https://avatars.githubusercontent.com/u/179270870?v=4"
            alt="Profile"
            className="object-cover"
            priority
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">ZNSK PROJECT</h1>
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
          Full Stack Developer
        </h2>
        <p className="max-w-2xl text-lg mb-8">
          I build modern web applications with React, Next.js, TypeScript and
          Java Spring Boot. Passionate about clean code, user experience, and
          performance optimization.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            View My Blog <ArrowRight size={16} />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            About Me
          </Link>
        </div>
      </section>

      {/* <section className="mt-24 mb-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Projects</h2>
          <Link
            href="/miniapps"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            View all <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1].map((i) => (
            <div
              key={i}
              className="border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow"
            >
              <div className="h-48 bg-muted relative">
                {/* <Image
                  src={`/placeholder.svg?height=200&width=400&text=Project+${i}`}
                  alt={`Project ${i}`}
                  fill
                  className="object-cover"
                /> 
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-xl mb-2">Project {i}</h3>
                <p className="text-muted-foreground mb-4">
                  A short description of this amazing project and the
                  technologies used.
                </p>
                <Link
                  href={`/miniapps/project-${i}`}
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  View project <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* RECENT POSTS */}

      <section className="my-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Recent Posts</h2>
          <Link
            href="/blog"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            View all <ArrowRight size={16} />
          </Link>
        </div>
        <Suspense fallback={<Loading />}>
          <RecentPosts posts={posts} />
        </Suspense>
      </section>
    </main>
  );
}
