import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: {
    slug: string;
    title: string;
    description: string;
    previewImage: string;
    stack: string[];
  };
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group glass-panel overflow-hidden rounded-[2rem] border border-border/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      {/* IMAGE PREVIEW */}
      <div className="relative h-56 overflow-hidden md:h-64 bg-gradient-to-br from-zinc-100 to-zinc-200">
        <Image
          src={project.previewImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold tracking-[-0.03em]">
            {project.title}
          </h3>

          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>

        <p className="mt-4 text-sm leading-7 text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border/70 bg-background/60 px-3 py-1 text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 text-sm font-medium text-primary">
          Ver caso de estudio →
        </div>
      </div>
    </Link>
  );
}