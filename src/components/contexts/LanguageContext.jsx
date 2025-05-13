import { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { headerTranslations } from './headerTranslations';

// Definimos las traducciones
const translations = {
    en: {
      art: "Art",
      code: "Code",
      contact: "Contact",
      services: "Services",
      portfolio: "Portfolio",
      about: "About",
      menu: "Menu", 
      ...headerTranslations.en
    },
    es: {
      art: "Arte",
      code: "Código",
      contact: "Contacto",
      services: "Servicios",
      portfolio: "Portafolio",
      about: "Sobre mí",
      menu: "Menú",
      ...headerTranslations.es
    }
  };
  
  // Definimos las rutas base para cada idioma
  const routes = {
    en: {
      home: "/",
      art: "/art",
      code: "/code",
      contact: "/contact",
      services: "/services",
      portfolio: "/portfolio",
      about: "/about",
      menu: "/main-menu",
    },
    es: {
      home: "/",
      art: "/arte",
      code: "/codigo",
      contact: "/contacto",
      services: "/servicios",
      portfolio: "/portafolio",
      about: "/sobre-mi",
      menu: "/menu",
    }
  };
  
  // Mapa de rutas para conversión entre idiomas
  const routeMap = {
    // Español a inglés
    "/arte": "/art",
    "/codigo": "/code",
    "/contacto": "/contact",
    "/servicios": "/services",
    "/portafolio": "/portfolio",
    "/sobre-mi": "/about",
    "/menu" : "/main-menu",
  
    // Inglés a español
    "/art": "/arte",
    "/code": "/codigo",
    "/contact": "/contacto",
    "/services": "/servicios",
    "/portfolio": "/portafolio",
    "/about": "/sobre-mi",
    "/main-menu" : "/menu",
  };

// Función para detectar el idioma desde la URL
const detectLanguageFromPath = (path) => {
  // Extraer primer segmento de la ruta
  const firstSegment = '/' + path.split('/')[1];

  // Verificar si es una ruta en español
  const isSpanishRoute = Object.values(routes.es).some(route =>
    firstSegment === route || firstSegment.startsWith(route + '/')
  );

  // Verificar si es una ruta en inglés
  const isEnglishRoute = Object.values(routes.en).some(route =>
    firstSegment === route || firstSegment.startsWith(route + '/')
  );

  if (isSpanishRoute && !isEnglishRoute) return 'es';
  if (isEnglishRoute && !isSpanishRoute) return 'en';

  // Por defecto devolvemos español
  return 'es';
};

// Creamos el contexto
const LanguageContext = createContext();

// Proveedor del contexto
export const LanguageProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Inicializar el idioma basado en la URL actual
  const [language, setLanguage] = useState(() => {
    return detectLanguageFromPath(location.pathname);
  });

  // Función para cambiar el idioma y redirigir
  const toggleLanguage = () => {
    const newLanguage = language === 'es' ? 'en' : 'es';

    // Obtener la ruta actual y ver si necesitamos redirigir
    const currentPath = location.pathname;

    // Extraer la ruta base y parámetros
    const segments = currentPath.split('/');
    const basePath = segments.length > 1 ? `/${segments[1]}` : '/home';
    const params = segments.slice(2).join('/');

    // Encontrar la ruta equivalente en el otro idioma
    let newPath = routeMap[basePath];

    // Si no encontramos una equivalencia directa, mantener la misma ruta
    if (!newPath) {
      newPath = basePath;
    }

    // Reconstruir la ruta completa con los parámetros
    const redirectPath = params ? `${newPath}/${params}` : newPath;

    // Primero navegar a la nueva ruta
    navigate(redirectPath);

    // Después actualizar el estado del idioma
    setLanguage(newLanguage);
  };

  // Función para obtener una traducción
  const t = (key) => {
    return translations[language][key] || key;
  };

  // Función para generar rutas según el idioma actual
  const getRoute = (routeName, params = {}) => {
    // Obtenemos la ruta base según el idioma y nombre de ruta
    const baseRoute = routes[language][routeName];

    if (!baseRoute) {
      console.warn(`No existe la ruta '${routeName}' para el idioma '${language}'`);
      return '/home';
    }

    // Si tenemos un ID, lo añadimos a la ruta
    if (params.id !== undefined) {
      return `${baseRoute}/${params.id}`;
    }

    return baseRoute;
  };

  // Efecto para mantener sincronizado el idioma con la URL
  useEffect(() => {
    const detectedLanguage = detectLanguageFromPath(location.pathname);
    if (detectedLanguage !== language) {
      setLanguage(detectedLanguage);
    }
  }, [location.pathname, language]);

  return (
    <LanguageContext.Provider value={{
      language,
      toggleLanguage,
      t,
      getRoute,
      routes
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook para usar el contexto fácilmente
export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;