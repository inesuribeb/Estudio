import React, { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import Root from './Root.jsx';
import RootPhone from './RootPhone.jsx';

import './index.css'

const Home = React.lazy(() => import('./pages/home/Home.jsx'));
const HomePhone = React.lazy(() => import('./pages/home/HomePhone.jsx'));

const PhotoDesign = React.lazy(() => import('./pages/art/PhotoDesign.jsx'));
const PhotoDesignPhone = React.lazy(() => import('./pages/art/PhotoDesignPhone.jsx'));

const WebProjects = React.lazy(() => import('./pages/code/WebProjects.jsx'));
const PortfolioProjectSection = React.lazy(() => import('./pages/code/PortfolioProjectSection.jsx'));

const Contact = React.lazy(() => import('./pages/contact/Contact.jsx'));
const ContactPhone = React.lazy(() => import('./pages/contact/ContactPhone.jsx'));

const Services = React.lazy(() => import('./pages/services/Services.jsx'));
const ServicesPhone = React.lazy(() => import('./pages/services/ServicesPhone.jsx'));

const Portfolio = React.lazy(() => import('./pages/portfolio/Portfolio.jsx'));
const PortfolioPhone = React.lazy(() => import('./pages/portfolio/PortfolioPhone.jsx'));

const About = React.lazy(() => import('./pages/about/About.jsx'));
const AboutPhone = React.lazy(() => import('./pages/about/AboutPhone.jsx'));

const MainMenu2 = React.lazy(() => import('./pages/mainMenu/MainMenu2.jsx'));
const MainMenuPhone = React.lazy(() => import('./pages/mainMenu/MainMenuPhone.jsx'));

const ResponsiveComponent = ({ MobileVersion, DesktopVersion }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {isMobile ? <MobileVersion /> : <DesktopVersion />}
    </Suspense>
  );
};

const RootWrapper = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return isMobile ? <RootPhone /> : <Root />;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <ResponsiveComponent 
      MobileVersion={HomePhone} 
      DesktopVersion={Home} 
    />,
  },
  {
    path: '/',
    element: <RootWrapper />,
    children: [
      // Redirecciones
      {
        path: '/inicio',
        element: <Navigate to="/" replace />
      },
      {
        path: '/home',
        element: <Navigate to="/" replace />
      },
      
      // Rutas en español
      {
        path: 'arte',
        element: <ResponsiveComponent 
          MobileVersion={PhotoDesignPhone} 
          DesktopVersion={PhotoDesign} 
        />
      },
      {
        path: 'codigo',
        element: <ResponsiveComponent 
          MobileVersion={PortfolioProjectSection} 
          DesktopVersion={WebProjects} 
        />
      },
      {
        path: 'contacto',
        element: <ResponsiveComponent 
          MobileVersion={ContactPhone} 
          DesktopVersion={Contact} 
        />
      },
      {
        path: 'servicios',
        element: <ResponsiveComponent 
          MobileVersion={ServicesPhone} 
          DesktopVersion={Services} 
        />
      },
      {
        path: 'portafolio',
        element: <ResponsiveComponent 
          MobileVersion={PortfolioPhone} 
          DesktopVersion={Portfolio} 
        />
      },
      {
        path: 'sobre-mi',
        element: <ResponsiveComponent 
          MobileVersion={AboutPhone} 
          DesktopVersion={About} 
        />
      },
      {
        path: 'menu',
        element: <ResponsiveComponent 
          MobileVersion={MainMenuPhone} 
          DesktopVersion={MainMenu2} 
        />
      },
      
      // Rutas en inglés (mismos componentes, diferentes URLs)
      {
        path: 'art',
        element: <ResponsiveComponent 
          MobileVersion={PhotoDesignPhone} 
          DesktopVersion={PhotoDesign} 
        />
      },
      {
        path: 'code',
        element: <ResponsiveComponent 
          MobileVersion={PortfolioProjectSection} 
          DesktopVersion={WebProjects} 
        />
      },
      {
        path: 'contact',
        element: <ResponsiveComponent 
          MobileVersion={ContactPhone} 
          DesktopVersion={Contact} 
        />
      },
      {
        path: 'services',
        element: <ResponsiveComponent 
          MobileVersion={ServicesPhone} 
          DesktopVersion={Services} 
        />
      },
      {
        path: 'portfolio',
        element: <ResponsiveComponent 
          MobileVersion={PortfolioPhone} 
          DesktopVersion={Portfolio} 
        />
      },
      {
        path: 'about',
        element: <ResponsiveComponent 
          MobileVersion={AboutPhone} 
          DesktopVersion={About} 
        />
      },
      {
        path: 'main-menu',
        element: <ResponsiveComponent 
          MobileVersion={MainMenuPhone} 
          DesktopVersion={MainMenu2} 
        />
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);