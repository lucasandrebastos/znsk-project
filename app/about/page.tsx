import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src="https://avatars.githubusercontent.com/u/179270870?v=4"
                alt="Lucas Bastos"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-lg mb-6">
              Hi, I'm Lucas Bastos, a Fullstack Developer with strong experience
              in frontend development using React, Next.js, TypeScript, and
              Tailwind CSS, combined with backend skills in Java (Spring Boot)
              and Node.js. Proficient in building scalable web applications and
              integrating RESTful and GraphQL APIs using tools like Axios and
              Apollo Client. Experienced in relational databases such as MySQL
              and PostgreSQL, and in applying clean architecture principles with
              domain-driven design (DDD). Skilled in implementing reusable UI
              components, maintaining design systems with Storybook, and writing
              automated tests with Jest and React Testing Library. Comfortable
              with Git-based workflows (Git Flow, Trunk-Based, PRs, rebases),
              CI/CD pipelines, and agile methodologies. Focused on code quality,
              accessibility, and delivering consistent, production-ready
              solutions.
            </p>

            <h2 className="text-2xl font-semibold mb-3">My Journey</h2>
            <p className="mb-6">
              I started my career as an intern at Quasar Flash, where I worked
              on frontend development using Next.js and helped implement
              features integrated with REST APIs. This experience gave me the
              opportunity to collaborate closely with UX and product teams,
              building user-friendly, SEO-optimized interfaces with performance
              in mind. Later, I joined Ouribank as a Frontend Developer, where I
              deepened my expertise in React, TypeScript, and Tailwind, while
              working with GraphQL (Apollo Client) for backend integration. I
              contributed to the creation of a scalable internal design system
              using Storybook, participated actively in Agile routines, and
              worked with Git Flow, pull requests, and automated testing using
              Jest and React Testing Library. To expand my skills as a Fullstack
              Developer, I started working with backend technologies like Java
              with Spring Boot, and relational databases such as PostgreSQL and
              MySQL, combining strong frontend knowledge with backend and system
              design practices. In parallel, I contributed to impactful personal
              and open-source projects, including Casa da Lauau, a pet service
              management platform built with React and TypeScript, and my SSR
              portfolio using Next.js + NestJS, focusing on performance, SEO,
              and clean architecture. Currently, I’m also part of a volunteer
              project (Pipoca Ágil), helping develop a mobile-first application
              to support health management for diabetes patients, using React,
              TypeScript, and Firebase Auth. Through these diverse experiences,
              I’ve evolved into a Fullstack Developer passionate about building
              accessible, high-quality digital products that deliver real value.
            </p>

            <h2 className="text-2xl font-semibold mb-3">Skills</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "Express",
                "MongoDB",
                "PostgreSQL",
                "AWS",
                "Docker",
                "Git",
                "Tailwind CSS",
                "Redux",
                "GraphQL",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-muted rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            <h2 className="text-2xl font-semibold mb-3">Contact</h2>
            <p className="mb-4">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="https://github.com/lucasandrebastos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-accent transition-colors"
              >
                <Github size={18} />
                <span>GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/lucasandrebastos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-accent transition-colors"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </Link>

              <Link
                href="mailto:andrebastoslucas@gmail.com"
                className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-accent transition-colors"
              >
                <Mail size={18} />
                <span>Email</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
