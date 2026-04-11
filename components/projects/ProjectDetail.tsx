import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

export default function ProjectDetails({ project }: { project: any }) {
  return (
    <section className="section-shell py-16 md:py-24">
      {/* HEADER */}
      <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="eyebrow">{project.subtitle}</p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
            {project.title}
          </h2>

          <p className="mt-4 text-base leading-8 text-muted-foreground">
            {project.description}
          </p>
        </div>

        <Link
          href={project.demoUrl}
          target="_blank"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
        >
          Ver demo
          <ArrowUpRight className="size-4" />
        </Link>
      </div>

      {/* MAIN GRID */}
      <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-panel rounded-[2rem] p-6 md:p-8">
          {/* STACK */}
          <div className="flex flex-wrap gap-2">
            {project.stack.map((item: string) => (
              <span
                key={item}
                className="rounded-full border px-3 py-2 text-sm"
              >
                {item}
              </span>
            ))}
          </div>

          {/* INFO CARDS */}
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {project.infoCards.map((card: any) => (
              <div key={card.title} className="rounded-[1.5rem] border p-5">
                <p className="font-mono text-xs uppercase text-primary">
                  {card.title}
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  {card.text}
                </p>
              </div>
            ))}
          </div>

          {/* HIGHLIGHTS */}
          <div className="mt-8">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-primary">
              Capacidades principales
            </p>
            <div className="mt-5 grid gap-4">
              {project.highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[1.5rem] border border-border/70 bg-background/55 p-5"
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/12 text-primary">
                        <Icon className="size-5" />
                      </span>
                      <h3 className="text-lg font-semibold tracking-[-0.03em]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                      {item.copy}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid gap-5">
          <div className="glass-panel rounded-[2rem] p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-primary">
                  Arquitectura
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                  Sistema pensado para operacion real
                </h3>
              </div>
              <ShieldCheck className="hidden size-6 text-primary md:block" />
            </div>

            <div className="mt-6 grid gap-4">
              {project.architecture.map((area) => (
                <div
                  key={area.label}
                  className="rounded-[1.4rem] border border-border/70 bg-background/55 p-4"
                >
                  <p className="text-sm font-semibold text-foreground">
                    {area.label}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {area.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-panel rounded-[2rem] p-6">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-primary">
              Lo mas retador
            </p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              {project.challenge}
            </p>
          </div>
        </div>
      </div>

      {/* IMAGES */}
      <div className="mt-10">
        <p className="font-mono text-xs uppercase text-primary">
          Capturas del producto
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {project.images.map((image: string, index: number) => (
            <div
              key={index}
              className="overflow-hidden rounded-[1.5rem] border"
            >
              <Image
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
