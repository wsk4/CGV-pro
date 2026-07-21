# CGV Pro — Landing Page

Sitio web de presentación para **CGV Pro**, productora de eventos corporativos en Chile. Construido como una SPA (Single Page Application) con React + Vite, usando Material UI para componentes interactivos y Tailwind CSS para estilos utilitarios.

> **Frontend puro:** no realiza llamadas a APIs externas. Todo el contenido es estático y vive en `src/data/`.

***

## Stack tecnológico

| Tecnología | Versión | Rol |
|---|---|---|
| React | 19 | UI y componentes |
| Vite | 8 | Bundler y dev server |
| Tailwind CSS | 4 | Estilos utilitarios |
| Material UI (MUI) | 9 | Componentes UI (botones, inputs, Paper) |
| React Router DOM | 7 | Enrutamiento SPA |
| pnpm | — | Gestor de paquetes |

***

## Estructura del proyecto

```
CGV-pro/
├── index.html
├── vite.config.js
├── tailwind.config.js          # Paleta de colores brand.*
├── eslint.config.js
├── package.json
└── src/
    ├── main.jsx                # Entry point (ReactDOM)
    ├── App.jsx                 # Router y rutas principales
    ├── index.css               # Estilos globales + fondo base
    ├── App.css
    ├── assets/                 # Imágenes y recursos estáticos
    ├── data/
    │   ├── blocks.js           # Contenido de texto por sección (hero, about, pagos...)
    │   └── sections.js         # Metadata de secciones (id, title, subtitle)
    ├── hooks/
    │   └── useScrollToSection.js  # Hook para scroll suave a secciones
    ├── theme/
    │   └── AppTheme.jsx        # Tema MUI (modo oscuro, colores primarios)
    ├── components/
    │   ├── common/
    │   │   ├── Navbar.jsx      # Barra de navegación fija (responsive)
    │   │   └── Footer.jsx      # Pie de página
    │   ├── layout/
    │   │   ├── Header.jsx      # Encabezado de página con título y subtítulo
    │   │   └── SectionWrapper.jsx  # Wrapper con padding y max-width para cada sección
    │   └── ui/
    │       ├── HeroBanner.jsx  # Banner principal con CTAs y tarjeta visual
    │       └── Card.jsx        # Tarjeta genérica de servicios
    ├── layouts/
    │   └── MainLayout.jsx      # Layout global: Navbar + main + Footer
    └── pages/
        └── Home.jsx            # Página principal (todas las secciones)
```

***

## Paleta de colores

El tema visual está centralizado en dos archivos: `tailwind.config.js` (clases utilitarias) y `src/theme/AppTheme.jsx` (componentes MUI).

| Token | Hex | Uso |
|---|---|---|
| `brand-black` | `#0A0D14` | Fondo base de toda la página |
| `brand-card` | `#161B26` | Fondo de cards y Paper de MUI |
| `brand-red` | `#B83228` | Color primario: logo, botones CTA, acentos |
| `brand-redDark` | `#8F2620` | Hover del color primario |
| `brand-gray` | `#334155` | Bordes de cards e iconos secundarios |
| `brand-white` | `#FFFFFF` | Texto principal |

Para cambiar la paleta, editar **solo estos dos archivos**:
- `tailwind.config.js` → colores usados como clases `brand-*`
- `src/theme/AppTheme.jsx` → colores de componentes MUI

***

## Contenido editable

Todo el texto del sitio está centralizado en `src/data/`. No es necesario tocar los componentes para cambiar el contenido.

- **`src/data/blocks.js`** — Textos de cada bloque: hero, about, pagos, ubicación, newsletter
- **`src/data/sections.js`** — Títulos y subtítulos de cada sección (usados en el Header y Navbar)

***

## Requisitos previos

- **Node.js** >= 18
- **pnpm** >= 8

```bash
# Instalar pnpm si no lo tienes
npm install -g pnpm
```

***

## Instalación y uso

### 1. Clonar el repositorio

```bash
git clone https://github.com/wsk4/CGV-pro.git
cd CGV-pro
```

### 2. Instalar dependencias

```bash
pnpm install
```

### 3. Iniciar el servidor de desarrollo

```bash
pnpm dev
```

El sitio estará disponible en [http://localhost:5173](http://localhost:5173).

### 4. Build para producción

```bash
pnpm build
```

Los archivos compilados quedan en `dist/`.

### 5. Preview del build

```bash
pnpm preview
```

Sirve el build de producción localmente para verificar antes de desplegar.

### 6. Linter

```bash
pnpm lint
```

***

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `pnpm dev` | Inicia el servidor de desarrollo con HMR |
| `pnpm build` | Genera el build optimizado en `dist/` |
| `pnpm preview` | Sirve el build de producción localmente |
| `pnpm lint` | Ejecuta ESLint en todo el proyecto |

***

## Agregar o editar contenido

### Cambiar texto de una sección

Editar el objeto correspondiente en `src/data/blocks.js`:

```js
// Ejemplo: cambiar el título del hero
export const heroContent = {
  title: "Tu nuevo título aquí",
  description: "Nueva descripción...",
  ctaPrimary: "Ver servicios",
  ctaSecondary: "Hablemos",
};
```

### Agregar una nueva sección

1. Agregar la entrada en `src/data/sections.js`
2. Agregar el contenido en `src/data/blocks.js`
3. Crear un nuevo bloque en `src/pages/Home.jsx` usando `<SectionWrapper>`

### Agregar una nueva página (ruta)

1. Crear el componente en `src/pages/NuevaPagina.jsx`
2. Registrar la ruta en `src/App.jsx`:

```jsx
<Route path="/nueva" element={<NuevaPagina />} />
```

***

## Notas de desarrollo

- **Sin API:** actualmente el sitio no consume endpoints externos. Para integrar una API en el futuro, reemplazar las importaciones de `src/data/` por llamadas con `fetch` o RTK Query en los componentes correspondientes.
- **MUI + Tailwind:** ambos sistemas de estilos coexisten. MUI maneja los componentes interactivos (botones, inputs, Paper); Tailwind maneja el layout, espaciado y tipografía. Evitar mezclar `sx` de MUI con clases Tailwind en el mismo elemento para no generar conflictos de especificidad.
- **Scroll navigation:** el hook `useScrollToSection` en `src/hooks/` gestiona el scroll suave entre secciones. Los IDs de sección deben coincidir entre `sections.js` y los props `id` de cada `<SectionWrapper>`.