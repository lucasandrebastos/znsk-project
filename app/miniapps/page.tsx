import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import znskshortener from "@/public/znskshortener.png";

export default function MiniappsPage() {
  const projects = [
    {
      id: 1,
      title: "Znsk URL Shortener",
      description: "A URL shortener to share links with friends.",
      image: znskshortener,
      link: "https://znskshortener.vercel.app/",
      tags: ["API", "Java", "Spring Boot", "React", "Vite", "Tailwind CSS"],
    },
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Mini Applications</h1>
        <p className="text-lg text-muted-foreground">Some funny sideprojects</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow"
          >
            <div className="h-48 bg-muted relative">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-muted text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                View project <ExternalLink size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
