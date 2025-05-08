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
              Hi, I'm Lucas Bastos, a full-stack developer based in São Paulo
              with over 5 years of experience building web applications. I
              specialize in React, Next.js, Node.js, and TypeScript.
            </p>

            <h2 className="text-2xl font-semibold mb-3">My Journey</h2>
            <p className="mb-6">
              I started my career as a front-end developer at a small agency,
              where I honed my skills in HTML, CSS, and JavaScript. Over time, I
              expanded my expertise to include back-end development, cloud
              services, and DevOps practices. I'm passionate about creating
              clean, efficient, and user-friendly applications that solve
              real-world problems.
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
