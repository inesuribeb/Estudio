# InesUribe Portfolio 📸📐🖥️🧑‍🎨👩‍💻💡

### Español
**InesUribe** es un portfolio personal moderno y dinámico desarrollado con React, que presenta mi trabajo en fotografía, diseño y desarrollo web. Este proyecto ha sido completamente renovado para ofrecer una experiencia de usuario más fluida y moderna, aprovechando las capacidades de React y otras tecnologías web actuales.

## Características Principales ✨

- **Diseño Moderno:** Interface de usuario intuitiva y atractiva desarrollada con React y Tailwind CSS.
- **Galería de Fotografía:** Visualización optimizada de proyectos fotográficos con gestión eficiente de imágenes.
- **Proyectos de Diseño:** Presentación interactiva de trabajos de diseño gráfico y branding.
- **Portafolio de Desarrollo:** Muestra de proyectos web con detalles técnicos y enlaces a repositorios.
- **Diseño Responsivo:** Experiencia fluida en todos los dispositivos gracias a Tailwind CSS.
- **Animaciones Suaves:** Transiciones y efectos visuales para mejorar la interactividad.

## Tecnologías Utilizadas 💻

- **React:** Biblioteca principal para la construcción de la interfaz de usuario.
- **Tailwind CSS:** Framework de CSS para estilización modular y diseño responsivo.
- **Vite:** Herramienta de construcción y desarrollo.
- **React Router:** Navegación y gestión de rutas.
- **React Icons:** Iconografía moderna y versátil.

## Estructura de Rutas y Lógica de Renderizado 📂

La aplicación utiliza **React Router** para gestionar las rutas principales, ofreciendo una experiencia responsiva mediante el uso de `useMediaQuery` y carga diferida con `React.lazy`.

### Rutas Principales
- **`/` (Home):** Página de inicio.
- **`/art` (Photo & Design):** Proyectos de fotografía y diseño gráfico.
- **`/code` (Web Projects):** Proyectos de desarrollo web.
- **`/contact` (Contact):** Página de contacto.

### Lógica Responsiva
Cada ruta emplea el componente `ResponsiveComponent`, que:
- Detecta si el usuario está en un dispositivo móvil (`maxWidth: 768px`).
- Muestra la versión móvil o de escritorio del componente correspondiente.

#### Ejemplo de Configuración
```javascript
{
  path: 'art',
  element: <ResponsiveComponent 
    MobileVersion={PhotoDesignPhone} 
    DesktopVersion={PhotoDesign} 
  />
}
```

### Carga diferida
Cada ruta emplea el componente `ResponsiveComponent`, que:
- Detecta si el usuario está en un dispositivo móvil (`maxWidth: 768px`).
- Muestra la versión móvil o de escritorio del componente correspondiente.

```javascript
const Home = React.lazy(() => import('./pages/home/Home.jsx'));
const HomePhone = React.lazy(() => import('./pages/home/HomePhone.jsx'));
```

### Navegación Anidada
La ruta base (`/`) contiene subrutas como `/art`, `/code` y `/contact`, todas gestionadas como hijos de `RootWrapper`.

## Beneficios
- **Responsividad Automática:** Detecta el dispositivo del usuario y muestra la interfaz adecuada.
- **Optimización de Recursos:** Carga solo los componentes necesarios en el momento adecuado.
- **Estructura Modular:** Cada sección está bien separada, lo que facilita el mantenimiento y la expansión del código.


## Instalación y Desarrollo 🚀

Clona el repositorio:

```bash
git clone git@github.com:inesuribeb/PORTFOLIO.git
```

Navega al directorio del proyecto:

```bash
cd PORTFOLIO
```

Instala las dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Para construir la versión de producción:

```bash
npm run build
```

