import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/app/data/projects";
import ProjectDetails from "@/components/projects/ProjectDetail";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    return notFound();
  }

  return (
    <main>
      <Navbar />
      <ProjectDetails project={project} />
      <Footer />
    </main>
  );
}
