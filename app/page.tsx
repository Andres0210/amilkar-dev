import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />    
      <Hero/>
      <Skills />
      <Footer />
    </main>
  );
}
