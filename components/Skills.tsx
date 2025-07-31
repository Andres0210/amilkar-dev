import { skills } from "@/types";
import Skill from "./Skill";

const categories = ["Frontend", "Backend", "BaseDeDatos", "Herramientas"] as const;

export default function Skills() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto" id="skills">
      <h2 className="text-3xl font-bold mb-10 text-center">Habilidades</h2>

      <div className="space-y-12">
        {categories.map((category) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-6">{category}</h3>
            <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 gap-4">
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
