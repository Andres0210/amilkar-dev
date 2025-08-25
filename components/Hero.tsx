'use client';
import { motion } from 'motion/react';
import { Button } from "@/components/ui/button";



import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-8 px-6 md:px-16 py-20 bg-background">
      {/* Texto */}
      <motion.div
        className="flex flex-col gap-6 text-center md:text-left"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-foreground">
          Hola, soy <span className="text-primary">Amilcar</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl">
          Ingeniero Biomédico y desarrollador de software. Apasionado por
          crear soluciones innovadoras que mejoran vidas.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <Button size="lg">Ver proyectos</Button>
          <Button size="lg" variant="outline">
            Descargar CV
          </Button>
        </div>
      </motion.div>

      {/* Imagen */}
      <motion.div
        className="relative w-[260px] h-[260px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden shadow-lg dark:shadow-white/10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Image
          src="/amilcar.jpg"
          alt="Foto de Amilkar"
          fill
          priority
          className="object-cover"
        />
      </motion.div>
    </section>
  );
}
