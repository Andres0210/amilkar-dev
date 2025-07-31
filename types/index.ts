export interface NavItem {
    label: string;
    href: string;
    icon?: React.ReactNode;
    isActive?: boolean;
}

export interface SkillType {
  name: string;
  logo: string; // URL o ruta local
  category: "Frontend" | "Backend" | "BaseDeDatos" | "Herramientas";
}

export const skills: SkillType[] = [
  {
    name: "HTML",
    logo: "/logos/html.png",
    category: "Frontend",
  },
  {
    name: "CSS",
    logo: "/logos/css.png",
    category: "Frontend",
  },
  {
    name: "JavaScript",
    logo: "/logos/javascript.png",
    category: "Frontend",
  },
  {
    name: "React",
    logo: "/logos/react.png",
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    logo: "/logos/tailwind.png",
    category: "Frontend",
  },
  {
    name: "Java",
    logo: "/logos/java.png",
    category: "Backend",
  },
  {
    name: "Spring Boot",
    logo: "/logos/springboot.png",
    category: "Backend",
  },
  {
    name: "Node.js",
    logo: "/logos/node.png",
    category: "Backend",
  },
    {
    name: "Nest.js",
    logo: "/logos/nest.png",
    category: "Backend",
  },
  {
    name: "Git",
    logo: "/logos/git.png",
    category: "Herramientas",
  },
  {
    name: "GitHub",
    logo: "/logos/github.png",
    category: "Herramientas",
  },
  {
    name: "PostgreSQL",
    logo: "/logos/postgresql.png",
    category: "BaseDeDatos",
  },
  {
    name: "MariaDB",
    logo: "/logos/mariadb.png",
    category: "BaseDeDatos",
  },
  {
    name: "MySQL",
    logo: "/logos/mysql.png",
    category: "BaseDeDatos",
  },
  {
    name: "MongoDB",
    logo: "/logos/mongodb.png",
    category: "BaseDeDatos",
  },
];