// src/data/novedades.js

export const novedadesContent = {
  eyebrow: "Novedades",
  title: "Lo último de CGV Pro",
  subtitle:
    "Enterate de nuestros próximos eventos, nuevos equipamientos, alianzas y proyectos destacados.",
};

// Opción A: Novedades en cards simples (sin imágenes)
export const novedadesCards = [
  {
    id: 1,
    title: "Nueva temporada de eventos corporativos",
    body: "Preparamos una nueva temporada de producciones integrales para empresas, ferias y activaciones de marca en Chile.",
    date: "Septiembre 2026",
  },
  {
    id: 2,
    title: "Ampliamos nuestro equipamiento técnico",
    body: "Incorporamos nuevo equipamiento de sonido, iluminación y estructuras para responder a producciones de mayor escala.",
    date: "Agosto 2026",
  },
  {
    id: 3,
    title: "Nuevas alianzas con agencias BTL",
    body: "Seguimos sumando colaboraciones con agencias BTL para desarrollar activaciones y experiencias de marca más impactantes.",
    date: "Julio 2026",
  },
];

// Opción B: Novedades en carrusel (con imágenes)
// Reemplaza las rutas por tus imágenes reales en src/assets/novedades/
import novedad1 from "../assets/novedades/novedad1.webp";
import novedad2 from "../assets/novedades/novedad2.webp";
import novedad3 from "../assets/novedades/novedad3.webp";
import novedad4 from "../assets/novedades/novedad4.webp";

export const novedadesImages = [
  {
    id: 1,
    imageUrl: novedad1,
    altText: "Nuevo montaje técnico CGV Pro",
  },
  {
    id: 2,
    imageUrl: novedad2,
    altText: "Producción de evento corporativo reciente",
  },
  {
    id: 3,
    imageUrl: novedad3,
    altText: "Activación de marca con agencia BTL",
  },
  {
    id: 4,
    imageUrl: novedad4,
    altText: "Equipamiento propio en terreno",
  },
];