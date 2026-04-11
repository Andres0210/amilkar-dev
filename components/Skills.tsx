export default function Skills() {
  const columns = [
    {
      title: "Backend engineering",
      items: ["Java", "Spring Boot", "Node.js", "NestJS"],
      copy: "Diseno de servicios, capas de negocio, autenticacion e integraciones.",
    },
    {
      title: "Frontend con criterio",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      copy: "Interfaces limpias cuando el producto necesita consistencia end-to-end.",
    },
    {
      title: "Data y tooling",
      items: ["PostgreSQL", "MySQL", "Git", "GitHub"],
      copy: "Persistencia, control de cambios y habitos de trabajo sostenibles.",
    },
  ];

  return (
    <section className="section-shell py-16 md:py-24" id="skills">
      <div className="mb-10 max-w-2xl">
        <p className="eyebrow">Stack</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
          Tecnologias que uso para construir productos consistentes.
        </h2>
        <p className="mt-4 text-base leading-8 text-muted-foreground">
          Mas que una lista de logos, este stack refleja como pienso la
          implementacion: claridad, estabilidad y una base tecnica preparada
          para crecer.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {columns.map((column) => (
          <div key={column.title} className="glass-panel rounded-[1.75rem] p-6">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-primary">
              {column.title}
            </p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              {column.copy}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {column.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border/70 bg-background/65 px-3 py-2 text-sm text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
