import { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { headerTranslations } from './headerTranslations';
import { ServicesTranslations } from './ServicesContext';

const translations = {
    en: {
      art: "Art",
      code: "Code",
      contact: "Contact",
      services: "Services",
      portfolio: "Portfolio",
      about: "About",
      menu: "Menu", 
      categories: "Categories",
      warning: "Desktop only",
      seeOn: "See on",
      notFound: "There is nothing here",
      all: "All",
      soon: "Confidential — Coming Soon",
      ...headerTranslations.en,
      ...ServicesTranslations.en
    },
    es: {
      art: "Arte",
      code: "Código",
      contact: "Contacto",
      services: "Servicios",
      portfolio: "Portafolio",
      about: "Sobre mí",
      menu: "Menú",
      categories: "Categorías",
      warning: "Solo Desktop",
      seeOn: "Ver en",
      notFound: "No hay nada aquí",
      all: "Todos",
      soon: "Confidencial — Próximamente",
      ...headerTranslations.es,
      ...ServicesTranslations.es
    }
  };
  
  const routes = {
    en: {
      home: "/",
      art: "/art",
      code: "/code",
      contact: "/contact",
      // services: "/services",
      services: "/studio",
      portfolio: "/portfolio",
      about: "/about",
      menu: "/main-menu",
      project: "/project/:slug",
    },
    es: {
      home: "/",
      art: "/arte",
      code: "/codigo",
      contact: "/contacto",
      // services: "/servicios",
      services: "/estudio",
      portfolio: "/portafolio",
      about: "/sobre-mi",
      menu: "/menu",
      project: "/proyecto/:slug", 
    }
  };
  
  const routeMap = {
    "/arte": "/art",
    "/codigo": "/code",
    "/contacto": "/contact",
    // "/servicios": "/services",
    "/estudio": "/studio", 
    "/portafolio": "/portfolio",
    "/sobre-mi": "/about",
    "/menu" : "/main-menu",
  
    "/art": "/arte",
    "/code": "/codigo",
    "/contact": "/contacto",
    // "/services": "/servicios",
    "/studio": "/estudio", 
    "/portfolio": "/portafolio",
    "/about": "/sobre-mi",
    "/main-menu" : "/menu",
  };

const detectLanguageFromPath = (path) => {
  const firstSegment = '/' + path.split('/')[1];

  const isSpanishRoute = Object.values(routes.es).some(route =>
    firstSegment === route || firstSegment.startsWith(route + '/')
  );

  const isEnglishRoute = Object.values(routes.en).some(route =>
    firstSegment === route || firstSegment.startsWith(route + '/')
  );

  if (isSpanishRoute && !isEnglishRoute) return 'es';
  if (isEnglishRoute && !isSpanishRoute) return 'en';

  return 'es';
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [language, setLanguage] = useState(() => {
    return detectLanguageFromPath(location.pathname);
  });

  const toggleLanguage = () => {
    const newLanguage = language === 'es' ? 'en' : 'es';

    const currentPath = location.pathname;

    const segments = currentPath.split('/');
    const basePath = segments.length > 1 ? `/${segments[1]}` : '/home';
    const params = segments.slice(2).join('/');

    let newPath = routeMap[basePath];

    if (!newPath) {
      newPath = basePath;
    }

    const redirectPath = params ? `${newPath}/${params}` : newPath;

    navigate(redirectPath);

    setLanguage(newLanguage);
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  const getRoute = (routeName, params = {}) => {
    const baseRoute = routes[language][routeName];

    if (!baseRoute) {
      console.warn(`No existe la ruta '${routeName}' para el idioma '${language}'`);
      return '/home';
    }

    if (params.id !== undefined) {
      return `${baseRoute}/${params.id}`;
    }

    return baseRoute;
  };

  useEffect(() => {
    const detectedLanguage = detectLanguageFromPath(location.pathname);
    if (detectedLanguage !== language) {
      setLanguage(detectedLanguage);
    }
  }, [location.pathname]);

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

export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;