import React, { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
    /> 
  },
  {
    path: '/',
    element: <RootWrapper />,  
    children: [
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
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);