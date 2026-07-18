# MiSPA React Starter

Plantilla base reutilizable para construir **Single Page Applications (SPA)** con:

- React (componentes funcionales + hooks)
- Vite
- Tailwind CSS (vía `@tailwindcss/vite`)
- React Router DOM

Este proyecto está pensado como tu punto de partida para nuevos frontends en React, evitando repetir la misma configuración en cada proyecto.

---

## Características

- ⚛️ **Estructura SPA con React**
  - Página principal (`Home`) compuesta a partir de componentes reutilizables.
  - Solo componentes funcionales y hooks (sin clases).

- 🧭 **Routing listo para usar**
  - React Router DOM configurado con una ruta raíz `/`.
  - Fácil de extender con nuevas páginas (por ejemplo `/about`, `/dashboard`) sin tocar la base.

- 🎨 **Tailwind CSS integrado**
  - Tailwind v4 integrado con el plugin oficial de Vite (`@tailwindcss/vite`).
  - Estilos globales gestionados desde `src/index.css`.
  - Clases utilitarias usadas directamente en JSX para iterar rápido en el diseño.

- 📐 **Estructura limpia y clara**
  - Separación de responsabilidades:
    - `components/` → piezas de UI reutilizables (Navbar, Footer, Hero, Card, etc.)
    - `layouts/` → layouts de alto nivel (MainLayout)
    - `pages/` → páginas completas (Home)
    - `hooks/` → hooks personalizados (por ejemplo `useScrollToSection`)
    - `data/` → datos estáticos que alimentan la UI

- 📱 **Navegación amigable para SPA**
  - Navbar fija con:
    - Scroll suave a secciones (`Inicio`, `Características`, `Contacto`)
    - Menú hamburguesa en móvil y navegación visible en escritorio.

---

## Stack Tecnológico

- **React** – Librería de UI para SPA
- **Vite** – Dev server y bundler rápido
- **Tailwind CSS** – Framework CSS utility-first
- **React Router DOM** – Routing del lado del cliente

---

## Empezar a usar la plantilla

### 1. Clonar el repositorio

```bash
git clone https://github.com/wsk4/mispa-react-starter.git
cd mispa-react-starter
```

### 2. Instalar dependencias

Usando `pnpm` (recomendado):

```bash
pnpm install
```

O, si prefieres npm/yarn:

```bash
npm install
# o
yarn install
```

### 3. Levantar el servidor de desarrollo

```bash
pnpm dev
# o
npm run dev
# o
yarn dev
```

Abre en el navegador la URL que te muestre la consola (normalmente `http://localhost:5173`).

---

## Estructura del proyecto

```text
.
├── index.html
├── package.json
├── vite.config.js
└── src
    ├── main.jsx           # Punto de entrada de React
    ├── App.jsx            # Componente raíz con React Router
    ├── index.css          # Estilos globales + import de Tailwind
    ├── components
    │   ├── common
    │   │   ├── Navbar.jsx     # Navegación global (escritorio + móvil)
    │   │   └── Footer.jsx     # Footer global
    │   ├── layout
    │   │   ├── Header.jsx         # Header / título principal de la página
    │   │   └── SectionWrapper.jsx # Contenedor de secciones con ancla de scroll
    │   └── ui
    │       ├── HeroBanner.jsx # Bloque principal de contenido
    │       └── Card.jsx       # Componente de tarjeta reutilizable
    ├── layouts
    │   └── MainLayout.jsx  # Envuelve Navbar, contenido principal y Footer
    ├── pages
    │   └── Home.jsx        # Página principal de la SPA
    ├── hooks
    │   └── useScrollToSection.js # Scroll suave a secciones por id
    └── data
        └── sections.js     # Datos estáticos para las secciones de Home
```

---

## Cómo extender esta base

### Crear una nueva página

1. Crea un nuevo componente en `src/pages/`, por ejemplo `About.jsx`:

```jsx
// src/pages/About.jsx
import React from "react";

const About = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold mb-4">About</h1>
      <p className="text-gray-700">
        Esta es una página de ejemplo añadida a partir de la plantilla base.
      </p>
    </div>
  );
};

export default About;
```

2. Registra la ruta en `src/App.jsx`:

```jsx
import About from "./pages/About.jsx";

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
```

3. Añade un enlace en la Navbar si quieres navegar por ruta además de por scroll.

---

### Sustituir datos estáticos por una API

- Mueve los datos de `src/data/sections.js` a tu backend o a un endpoint.
- Crea un hook en `src/hooks/` (por ejemplo `useSections.js`) que haga el fetch.
- Usa ese hook en `Home.jsx` para inyectar los datos a través de props en lugar de importarlos directamente.

Esto mantiene la capa visual desacoplada de la fuente de datos.

---

## Scripts disponibles

En `package.json` encontrarás scripts como:

```bash
pnpm dev       # servidor de desarrollo
pnpm build     # build de producción
pnpm preview   # previsualizar el build
```

(Con npm/yarn puedes usar `npm run dev`, etc.)

---

## Notas personales

Esta plantilla está pensada para:

- Usarse como base en proyectos de clientes, pruebas técnicas y proyectos personales.
- Evitar configurar desde cero Vite, React, Tailwind y React Router en cada nuevo repo.
- Servir como ejemplo de arquitectura limpia de un frontend React SPA listo para escalar.

Cuando empieces un nuevo proyecto:

1. Clona este repo (`mispa-react-starter`).  
2. Cambia textos, branding y secciones según el proyecto.  
3. Añade rutas y páginas que necesites, manteniendo la estructura base.

---

## Licencia

Puedes adaptar y reutilizar esta plantilla libremente en tus propios proyectos.
