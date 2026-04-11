import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/app/data/projects";
import ProjectDetails from "@/components/projects/ProjectDetail";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <Navbar />
      <ProjectDetails project={project} />
      <Footer />
    </main>
  );
}