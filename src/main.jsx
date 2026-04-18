import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import Root from './Root.jsx';
import RootPhone from './RootPhone.jsx';

import './index.css';

import Home from './pages/home/Home.jsx';
import HomePhone from './pages/home/HomePhone.jsx';

import PhotoDesign from './pages/art/PhotoDesign.jsx';
import PhotoDesignPhone from './pages/art/PhotoDesignPhone.jsx';

import WebProjects from './pages/code/WebProjects.jsx';
import PortfolioProjectSection from './pages/code/PortfolioProjectSection.jsx';

import Contact from './pages/contact/Contact.jsx';
import ContactPhone from './pages/contact/ContactPhone.jsx';

import ParentContainer from './pages/services/ParentContainer.jsx';

import Portfolio from './pages/portfolio/Portfolio.jsx';
import PortfolioPhone from './pages/portfolio/PortfolioPhone.jsx';

import About from './pages/about/About.jsx';
import AboutPhone from './pages/about/About.jsx';

import NotFound from './pages/notFound/NotFound.jsx';

import Project from './pages/project/Project.jsx';

const ResponsiveComponent = ({ MobileVersion, DesktopVersion }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return isMobile ? <MobileVersion /> : <DesktopVersion />;
};

const RootWrapper = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return isMobile ? <RootPhone /> : <Root />;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootWrapper />,
    children: [
      {
        index: true,
        element: <ResponsiveComponent MobileVersion={HomePhone} DesktopVersion={Home} />,
      },

      // Redirecciones
      {
        path: '/inicio',
        element: <Navigate to="/" replace />,
      },
      {
        path: '/home',
        element: <Navigate to="/" replace />,
      },

      // Rutas en español
      {
        path: 'arte',
        element: <ResponsiveComponent MobileVersion={PhotoDesignPhone} DesktopVersion={PhotoDesign} />,
      },
      {
        path: 'codigo',
        element: <ResponsiveComponent MobileVersion={PortfolioProjectSection} DesktopVersion={WebProjects} />,
      },
      {
        path: 'contacto',
        element: <ResponsiveComponent MobileVersion={ContactPhone} DesktopVersion={Contact} />,
      },
      // {
      //   path: 'estudio',
      //   element: <ParentContainer />,
      // },
      {
        path: 'servicios',
        element: <ParentContainer initialTab="Services" />,
      },
      {
        path: 'estudio',
        element: null,
      },
      {
        path: 'portafolio',
        element: <ResponsiveComponent MobileVersion={PortfolioPhone} DesktopVersion={Portfolio} />,
      },
      {
        path: 'sobre-mi',
        element: <ResponsiveComponent MobileVersion={AboutPhone} DesktopVersion={About} />,
      },
      {
        path: 'proyecto/:slug',
        element: <Project />,
      },

      // Rutas en inglés (mismos componentes, diferentes URLs)
      {
        path: 'art',
        element: <ResponsiveComponent MobileVersion={PhotoDesignPhone} DesktopVersion={PhotoDesign} />,
      },
      {
        path: 'code',
        element: <ResponsiveComponent MobileVersion={PortfolioProjectSection} DesktopVersion={WebProjects} />,
      },
      {
        path: 'contact',
        element: <ResponsiveComponent MobileVersion={ContactPhone} DesktopVersion={Contact} />,
      },
      // {
      //   path: 'studio',
      //   element: <ParentContainer />,
      // },
      {
        path: 'services',
        element: <ParentContainer initialTab="Services" />,
      },
      {
        path: 'studio',
        element: null,
      },
      {
        path: 'portfolio',
        element: <ResponsiveComponent MobileVersion={PortfolioPhone} DesktopVersion={Portfolio} />,
      },
      {
        path: 'about',
        element: <ResponsiveComponent MobileVersion={AboutPhone} DesktopVersion={About} />,
      },
      {
        path: 'proyecto/:slug',
        element: <Project />,
      },


      {
        path: "*",
        element: <NotFound />
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);