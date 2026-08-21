import quinchoElTata from "../assets/projects/quinchoElTata.webp";
import valorAr from "../assets/projects/valorAr.webp";
import type { Project } from "../types";

export type { Project } from "../types";

export const projects: Project[] = [
  {
    title: "Valor Ar",
    type: "Aplicación web",
    slug: "valor-ar",
    image: valorAr,
    company: "Valor Ar",
    rol: "Desarrollador",
    technologies: ["Angular v17", "TypeScript", "SCSS", "Chart.js", "Netlify"],
    timeline: "2024 - 2025",
    description: `Visualización financiera interactiva sobre dólares, inflación y rendimiento de monedas en Argentina.`,
    context: `ValorAr es una aplicación web pensada para quienes necesitan acceder rápidamente a información económica actualizada y fácil de interpretar. Desarrollada con Angular 17 y gráficos dinámicos con Chart.js, permite comparar valores de distintos tipos de dólar, analizar la evolución de la inflación, consultar tasas de plazos fijos en diferentes bancos y conocer el rendimiento de monedas digitales según entidad. Todo el contenido está organizado en vistas intuitivas, con filtros inteligentes que permiten seleccionar años, monedas o bancos. Fue publicada en Netlify y desarrollada como proyecto personal para reforzar habilidades en visualización de datos, experiencia de usuario y Angular moderno.`,
    link: "https://valorar.netlify.app/",
    github: "https://github.com/DevEzequiel14/ValorAr",
  },
  {
    title: "Quincho el Tata",
    type: "Landing page",
    slug: "quincho-el-tata",
    image: quinchoElTata,
    company: "Quincho el Tata",
    rol: "Desarrollador Frontend",
    technologies: ["Angular 22", "Bootstrap", "TypeScript", "Netlify, SSR, Playwright, Github Actions"],
    timeline: "2025 -2026",
    description: `Landing para alquiler de quincho en Jujuy, con WhatsApp, galería y precios de referencia.`,
    context: `Quincho El Tata es una landing page desarrollada para brindar presencia digital a un espacio físico de eventos. Está pensada para facilitar el contacto rápido y directo con el dueño a través de WhatsApp, e informar de forma clara sobre los servicios disponibles. Incluye secciones como "Nosotros", con detalles del lugar, horarios, capacidad y una imagen del quincho; "Servicios", donde se listan las comodidades principales y adicionales; y "Contacto", con acceso a redes sociales, mapa de ubicación, y datos clave. Fue construida con Angular 19 y Bootstrap, priorizando estructura clara, carga rápida y navegación simple desde cualquier dispositivo.`,
    link: "https://quinchoeltata.netlify.app/",
    github: "https://github.com/DevEzequiel14/Quincho-El-Tata",
  },
];
