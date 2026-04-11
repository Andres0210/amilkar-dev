import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  ChartColumn,
  MessageSquareText,
  PackageCheck,
  ShieldCheck,
} from "lucide-react";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import ProjectDetail from "@/components/projects/ProjectDetail";
import FeaturedProjects from "@/components/projects/FeaturedProjects";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <Skills />
      <Footer />
    </main>
  );
}
