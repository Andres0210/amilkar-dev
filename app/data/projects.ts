import {
  Bot,
  ChartColumn,
  MessageSquareText,
  PackageCheck,
} from "lucide-react";

export const projects = [
  {
    slug: "fluxen",
    title: "Fluxen Ecommerce Management",
    subtitle: "Proyecto destacado",
    demoUrl: "https://fluxen.store",
    previewImage: "/projects/fluxen/preview.jpeg",
    description:
      "Plataforma administrativa para ecommerce que centraliza ventas, pedidos, clientes y conversación comercial por WhatsApp, con automatización impulsada por inteligencia artificial.",

    stack: [
      "NestJS",
      "PostgreSQL",
      "Prisma ORM",
      "Next.js",
      "Tailwind CSS",
      "AWS EC2",
      "OpenAI API",
      "WhatsApp API",
      "JWT",
    ],

    infoCards: [
      {
        title: "Problema",
        text: "Comercios sin gestion centralizada de ventas, sin categorizacion de clientes y con tiempos de respuesta limitados por atencion manual.",
      },
      {
        title: "Mi rol",
        text: "Desarrollo end-to-end: backend, frontend, autenticacion, integraciones, base de datos y despliegue en AWS.",
      },
      {
        title: "Resultado",
        text: "Operacion comercial mas rapida, pedidos centralizados y mensajeria automatizada desde una sola interfaz.",
      },
    ],

    highlights: [
      {
        icon: MessageSquareText,
        title: "Atencion automatizada por WhatsApp",
        copy: "Recibe y responde mensajes sin depender de WhatsApp Web, con conversaciones centralizadas dentro del panel.",
      },
      {
        icon: Bot,
        title: "Asistente virtual conectado a OpenAI",
        copy: "Interpreta consultas, responde en lenguaje natural y apoya la confirmacion de pedidos con contexto del negocio.",
      },
      {
        icon: PackageCheck,
        title: "Gestion operativa de ventas y ordenes",
        copy: "Administra clientes, pedidos, productos, estados comerciales y actualizaciones desde una sola plataforma.",
      },
    ],

    architecture: [
      {
        label: "Backend core",
        text: "NestJS con modulos de conversaciones, clientes, ordenes, productos y administradores, mas autenticacion JWT con roles admin y superadmin.",
      },
      {
        label: "Persistencia y dominio",
        text: "PostgreSQL y Prisma para modelar clientes por numero de WhatsApp, mensajes, conversaciones, pedidos y catalogo de productos.",
      },
      {
        label: "Integraciones externas",
        text: "WhatsApp API para mensajeria bidireccional y plantillas, mas OpenAI para automatizar respuestas y acelerar la operacion comercial.",
      },
      {
        label: "Infraestructura",
        text: "Frontend en Next.js con Tailwind y despliegue sobre AWS, incluyendo aplicacion y base de datos en la nube.",
      },
    ],

    challenge:
      " Coordinar mensajeria bidireccional por WhatsApp, registrar cada cliente por su numero, y lograr respuestas utiles desde IA sin romper el flujo operativo del ecommerce.\n\nEl resultado fue una plataforma donde los mensajes, pedidos, estados de orden y acciones comerciales conviven en el mismo sistema administrativo.",

    images: [
      "/projects/fluxen/1.jpeg",
      "/projects/fluxen/2.jpeg",
      "/projects/fluxen/3.jpeg",
      "/projects/fluxen/4.jpeg",
      "/projects/fluxen/5.jpeg",
      "/projects/fluxen/6.jpeg",
    ],
  },
];
