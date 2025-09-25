// import React, { StrictMode, Suspense } from 'react'
// import { createRoot } from 'react-dom/client'
// import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
// import { useMediaQuery } from 'react-responsive';

// import Root from './Root.jsx';
// import RootPhone from './RootPhone.jsx';

// import './index.css'

// const Home = React.lazy(() => import('./pages/home/Home.jsx'));
// const HomePhone = React.lazy(() => import('./pages/home/HomePhone.jsx'));

// const PhotoDesign = React.lazy(() => import('./pages/art/PhotoDesign.jsx'));
// const PhotoDesignPhone = React.lazy(() => import('./pages/art/PhotoDesignPhone.jsx'));

// const WebProjects = React.lazy(() => import('./pages/code/WebProjects.jsx'));
// const PortfolioProjectSection = React.lazy(() => import('./pages/code/PortfolioProjectSection.jsx'));

// const Contact = React.lazy(() => import('./pages/contact/Contact.jsx'));
// const ContactPhone = React.lazy(() => import('./pages/contact/ContactPhone.jsx'));


// const ParentContainer = React.lazy(() => import('./pages/services/ParentContainer.jsx'));

// const Portfolio = React.lazy(() => import('./pages/portfolio/Portfolio.jsx'));
// const PortfolioPhone = React.lazy(() => import('./pages/portfolio/PortfolioPhone.jsx'));

// const About = React.lazy(() => import('./pages/about/About.jsx'));
// const AboutPhone = React.lazy(() => import('./pages/about/About.jsx'));


// const ResponsiveComponent = ({ MobileVersion, DesktopVersion }) => {
//   const isMobile = useMediaQuery({ maxWidth: 768 });

//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       {isMobile ? <MobileVersion /> : <DesktopVersion />}
//     </Suspense>
//   );
// };

// const RootWrapper = () => {
//   const isMobile = useMediaQuery({ maxWidth: 768 });
//   return isMobile ? <RootPhone /> : <Root />;
// };

// const router = createBrowserRouter([


//   {
//     path: '/',
//     element: <RootWrapper />,
//     children: [
//       {
//         index: true,
//         element: <ResponsiveComponent
//           MobileVersion={HomePhone}
//           DesktopVersion={Home}
//         />,
//       },


//       {
//         path: '/inicio',
//         element: <Navigate to="/" replace />
//       },
//       {
//         path: '/home',
//         element: <Navigate to="/" replace />
//       },

//       {
//         path: 'arte',
//         element: <ResponsiveComponent
//           MobileVersion={PhotoDesignPhone}
//           DesktopVersion={PhotoDesign}
//         />
//       },
//       {
//         path: 'codigo',
//         element: <ResponsiveComponent
//           MobileVersion={PortfolioProjectSection}
//           DesktopVersion={WebProjects}
//         />
//       },
//       {
//         path: 'contacto',
//         element: <ResponsiveComponent
//           MobileVersion={ContactPhone}
//           DesktopVersion={Contact}
//         />
//       },
//       {
//         path: 'servicios',
//         element: <ParentContainer />
//       },
//       {
//         path: 'portafolio',
//         element: <ResponsiveComponent
//           MobileVersion={PortfolioPhone}
//           DesktopVersion={Portfolio}
//         />
//       },
//       {
//         path: 'sobre-mi',
//         element: <ResponsiveComponent
//           MobileVersion={AboutPhone}
//           DesktopVersion={About}
//         />
//       },

//       {
//         path: 'art',
//         element: <ResponsiveComponent
//           MobileVersion={PhotoDesignPhone}
//           DesktopVersion={PhotoDesign}
//         />
//       },
//       {
//         path: 'code',
//         element: <ResponsiveComponent
//           MobileVersion={PortfolioProjectSection}
//           DesktopVersion={WebProjects}
//         />
//       },
//       {
//         path: 'contact',
//         element: <ResponsiveComponent
//           MobileVersion={ContactPhone}
//           DesktopVersion={Contact}
//         />
//       },
//       {
//         path: 'services',
//         element: <ParentContainer />


//       },
//       {
//         path: 'portfolio',
//         element:
//           <Suspense fallback={<div>Loading...</div>}>
//             <ResponsiveComponent
//               MobileVersion={PortfolioPhone}
//               DesktopVersion={Portfolio}
//             />
//           </Suspense>
//       },
//       {
//         path: 'about',
//         element: <ResponsiveComponent
//           MobileVersion={AboutPhone}
//           DesktopVersion={About}
//         />
//       },

//     ]
//   }
// ]);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// );

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
      {
        path: 'servicios',
        element: <ParentContainer />,
      },
      {
        path: 'portafolio',
        element: <ResponsiveComponent MobileVersion={PortfolioPhone} DesktopVersion={Portfolio} />,
      },
      {
        path: 'sobre-mi',
        element: <ResponsiveComponent MobileVersion={AboutPhone} DesktopVersion={About} />,
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
      {
        path: 'services',
        element: <ParentContainer />,
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