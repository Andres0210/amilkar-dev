"use client";

import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="section-shell pb-10 pt-6" id="contact">
      <div className="glass-panel rounded-[2rem] px-6 py-8 md:px-8 md:py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow">Contacto</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
              Si buscas un desarrollador con foco backend, conversemos.
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Estoy abierto a colaborar en productos web, APIs, integraciones y
              oportunidades donde la calidad tecnica si importa.
            </p>
          </div>

          <Link
            href="mailto:ing_amilkar@hotmail.com"
            className="inline-flex items-center gap-2 self-start rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Escribeme
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="mailto:ing_amilkar@hotmail.com"
            aria-label="Correo"
            className="inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
            Email
          </Link>
          <Link
            href="https://github.com/Andres0210"
            target="_blank"
            aria-label="GitHub"
            className="inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="h-4 w-4" />
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/amilcar-ibarra-221b98115/"
            target="_blank"
            aria-label="LinkedIn"
            className="inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </Link>
        </div>

        <div className="mt-8 border-t border-border/70 pt-5 text-sm text-muted-foreground">
          <p className="font-medium text-foreground">Amilcar Ibarra</p>
          <p className="mt-1">
            &copy; {new Date().getFullYear()} Portafolio personal. Disenado para
            comunicar criterio tecnico y claridad de ejecucion.
          </p>
        </div>
      </div>
    </footer>
  );
}
