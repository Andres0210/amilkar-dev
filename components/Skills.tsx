import { skills } from "@/types";
import Skill from "./Skill";

const categories = [
  "Backend",
  "Frontend",  
  "BaseDeDatos",
  "Herramientas",
] as const;

export default function Skills() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto" id="skills">
      <h2 className="text-3xl font-bold mb-10 text-center">Technical Skills</h2>

      <div className="space-y-12">
        {categories.map((category) => (
          <div key={category}>
            <h3 className="text-lg font-semibold mb-4 text-neutral-700 dark:text-neutral-300">
              {category}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <Skill key={skill.name} {...skill} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
