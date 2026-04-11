import { projects } from "@/app/data/projects";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  return (
    <section className="section-shell py-16" id="projects">
      <div className="mb-10">
        <p className="eyebrow">Proyectos destacados</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
          Soluciones que he construido
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
