"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const metrics = [
    { value: "Java + Spring", label: "Backend stack principal" },
    { value: "Node + Nest", label: "Experiencia complementaria" },
    { value: "REST APIs", label: "Arquitectura e integraciones" },
  ];

  return (
    <section
      id="about"
      className="section-shell relative overflow-hidden pb-16 pt-10 md:pb-24 md:pt-16"
    >
      <div className="grid-ambient pointer-events-none absolute inset-x-6 top-0 h-[34rem] rounded-[2rem] opacity-45 md:inset-x-10" />
      <div className="relative grid min-h-[calc(100vh-7rem)] items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="space-y-5">
            <p className="eyebrow">Backend developer · Java · Spring Boot</p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-7xl">
              Construyo backends robustos para productos que necesitan escalar
              con claridad.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
              Soy Amilcar Ibarra, desarrollador enfocado en APIs, integraciones y
              sistemas backend bien estructurados. Mi trabajo combina criterio de
              ingenieria, foco en mantenibilidad y una implementacion limpia que
              ayuda a que los productos crezcan sin friccion.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full px-6 text-sm font-semibold"
            >
              <Link href="#projects">
                Ver enfoque
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-border/80 bg-background/50 px-6 text-sm"
            >
              <Link href="mailto:ing_amilkar@hotmail.com">
                Hablemos
                <Mail className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="h-12 rounded-full px-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <Link
                href="https://www.linkedin.com/in/amilcar-ibarra-221b98115/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
                <Linkedin className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="glass-panel rounded-[1.5rem] p-4 transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="text-lg font-semibold tracking-[-0.03em]">{metric.value}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="font-mono uppercase tracking-[0.25em]">Conecta</span>
            <Link
              href="https://github.com/Andres0210"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2 transition-colors hover:border-primary hover:text-foreground"
            >
              <Github className="size-4" />
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/amilcar-ibarra-221b98115/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2 transition-colors hover:border-primary hover:text-foreground"
            >
              <Linkedin className="size-4" />
              LinkedIn
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12 }}
        >
          <div className="absolute -right-5 top-10 hidden h-32 w-32 rounded-full bg-primary/25 blur-3xl md:block" />
          <div className="absolute -left-6 bottom-10 hidden h-40 w-40 rounded-full bg-accent/25 blur-3xl md:block" />
          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-5">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent,rgba(255,255,255,0.08),transparent)]" />
            <div className="relative overflow-hidden rounded-[1.6rem] border border-border/60 bg-secondary/50">
              <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                    Senior-ready presence
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Ingenieria backend con foco en estructura y confianza.
                  </p>
                </div>
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.24em] text-primary">
                  Disponible
                </span>
              </div>

              <div className="relative aspect-[4/5]">
                <Image
                  src="/6x9 digital.jpg.jpeg"
                  alt="Retrato de Amilcar Ibarra"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/35 to-transparent" />
              </div>

              <div className="grid gap-4 px-5 py-5 md:grid-cols-2">
                <div>
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.24em] text-primary">
                    Especialidad
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    APIs REST, diseno de servicios y capas backend pensadas para
                    ser mantenibles.
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.24em] text-primary">
                    Mentalidad
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Arquitectura limpia, seguridad, legibilidad y decisiones que
                    resisten el crecimiento del producto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
