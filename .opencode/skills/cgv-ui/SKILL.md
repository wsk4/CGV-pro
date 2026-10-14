---
name: cgv-ui
description: Directrices técnicas de arquitectura, diseño con Tailwind CSS y componentes React para CGV Produc.
---

# Estándares de Ingeniería - CGV Produc

Aplica estas reglas de forma obligatoria en cualquier modificación o creación de archivos dentro de `src/`:

## 1. Arquitectura y Componentes
- Diseñar componentes funcionales limpios en React (`.jsx`), modulares y reutilizables.
- Utilizar exclusivamente utilidades de Tailwind CSS; evitar estilos inline (`style={{...}}`).
- Mantener la identidad visual de productora de eventos: fondo oscuro principal (`bg-zinc-950` o `bg-slate-900`), tipografía legible y acentos luminosos (violeta, fucsia, ámbar).

## 2. Gestión de Imágenes y Assets
- Las imágenes de catálogo residen en `src/assets/eventos/` en formato `.webp`.
- Incluir obligatoriamente atributos `alt` descriptivos y `loading="lazy"` para optimización de carga.

## 3. Validación y Calidad
- Ejecutar `pnpm run lint` antes de cerrar cualquier tarea para asegurar que no se introduzcan errores de ESLint.
