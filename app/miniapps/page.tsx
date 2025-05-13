import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function MiniappsPage() {
  // Sample projects data - in a real app, this would come from a database or CMS
  // const projects = [
  //   {
  //     id: 1,
  //     title: "Weather Dashboard",
  //     description:
  //       "A real-time weather application built with React and OpenWeather API. Features include current conditions, 5-day forecast, and location search.",
  //     image: "/placeholder.svg?height=200&width=400&text=Weather+App",
  //     link: "https://example.com/weather-app",
  //     tags: ["React", "API", "Tailwind CSS"],
  //   },
  //   {
  //     id: 2,
  //     title: "Task Manager",
  //     description:
  //       "A productivity app for managing daily tasks with drag-and-drop functionality, priority levels, and deadline reminders.",
  //     image: "/placeholder.svg?height=200&width=400&text=Task+Manager",
  //     link: "https://example.com/task-manager",
  //     tags: ["Next.js", "TypeScript", "Supabase"],
  //   },
  //   {
  //     id: 3,
  //     title: "Recipe Finder",
  //     description:
  //       "Search for recipes based on ingredients you have. Includes filtering by dietary restrictions and cooking time.",
  //     image: "/placeholder.svg?height=200&width=400&text=Recipe+Finder",
  //     link: "https://example.com/recipe-finder",
  //     tags: ["React", "Firebase", "Styled Components"],
  //   },
  //   {
  //     id: 4,
  //     title: "Markdown Editor",
  //     description:
  //       "A simple yet powerful markdown editor with live preview, syntax highlighting, and export options.",
  //     image: "/placeholder.svg?height=200&width=400&text=Markdown+Editor",
  //     link: "https://example.com/markdown-editor",
  //     tags: ["JavaScript", "CodeMirror", "HTML/CSS"],
  //   },
  //   {
  //     id: 5,
  //     title: "Budget Tracker",
  //     description:
  //       "Personal finance application for tracking income, expenses, and savings goals with visual charts and reports.",
  //     image: "/placeholder.svg?height=200&width=400&text=Budget+Tracker",
  //     link: "https://example.com/budget-tracker",
  //     tags: ["Next.js", "Chart.js", "MongoDB"],
  //   },
  //   {
  //     id: 6,
  //     title: "Movie Database",
  //     description:
  //       "Browse and search for movies and TV shows, view details, ratings, and save favorites to your watchlist.",
  //     image: "/placeholder.svg?height=200&width=400&text=Movie+Database",
  //     link: "https://example.com/movie-database",
  //     tags: ["React", "TMDB API", "Redux"],
  //   },
  // ];

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Mini Applications</h1>
        <p className="text-lg text-muted-foreground">In development</p>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div> */}
    </main>
  );
}
