// import { Outlet } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import { LanguageProvider } from './components/contexts/LanguageContext';
// import Header3Phone from './components/header/Header3Phone';
// import About from './pages/about/About'; 
// import { useState, useEffect } from 'react';
// import './RootPhone.css'

// function RootPhone() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isUserScrolling, setIsUserScrolling] = useState(false);
//   const [isAboutOpen, setIsAboutOpen] = useState(false); 
//   const location = useLocation();

//   const handleAboutClick = () => {
//     setIsAboutOpen(true);
//   };

//   useEffect(() => {
//     if (isMenuOpen) {
//       let scrollTimeout;

//       const handleScroll = () => {
//         clearTimeout(scrollTimeout);
//         setIsUserScrolling(true);

//         scrollTimeout = setTimeout(() => {
//           setIsUserScrolling(false);
//           if (window.scrollY > 0) {
//             setIsMenuOpen(false);
//           }
//         }, 150);
//       };

//       window.addEventListener('scroll', handleScroll);
//       return () => {
//         window.removeEventListener('scroll', handleScroll);
//         clearTimeout(scrollTimeout);
//       };
//     }
//   }, [isMenuOpen]);

//   const handleMenuClick = () => {
//     setIsMenuOpen(!isMenuOpen);

//     if (!isMenuOpen) {
//       window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//       });
//     }
//   };

//   return (
//     <LanguageProvider>
//       <Header3Phone 
//         onAboutClick={handleAboutClick} 
//       />
      
//       <div 
//         className={`root-phone__content ${isMenuOpen ? 'shifted' : ''}`}
//         key={location.pathname} 
//       >
//         <Outlet context={{ 
//           isMenuOpen, 
//           setIsMenuOpen,
//           openAbout: () => setIsAboutOpen(true) 
//         }} />
//       </div>


//       <About
//         isOpen={isAboutOpen}
//         onClose={() => setIsAboutOpen(false)}
//       />
//     </LanguageProvider> 
//   );
// }

// export default RootPhone;

import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { LanguageProvider } from './components/contexts/LanguageContext';
import Header3Phone from './components/header/Header3Phone';
import About from './pages/about/About';
import Modal from './pages/art/Modal'; // ← Importar Modal
import { useState, useEffect } from 'react';
import './RootPhone.css'

function RootPhone() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const location = useLocation();

  // ← Añadir estados para Modal (igual que en Root)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [navigationHandlers, setNavigationHandlers] = useState({
    handleNext: () => { },
    handlePrevious: () => { }
  });

  const handleAboutClick = () => {
    setIsAboutOpen(true);
  };

  useEffect(() => {
    if (isMenuOpen) {
      let scrollTimeout;

      const handleScroll = () => {
        clearTimeout(scrollTimeout);
        setIsUserScrolling(true);

        scrollTimeout = setTimeout(() => {
          setIsUserScrolling(false);
          if (window.scrollY > 0) {
            setIsMenuOpen(false);
          }
        }, 150);
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(scrollTimeout);
      };
    }
  }, [isMenuOpen]);

  // ← Añadir useEffect para scroll al cambiar ruta (igual que en Root)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);

    if (!isMenuOpen) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <LanguageProvider>
      <Header3Phone 
        onAboutClick={handleAboutClick}
      />
      
      <div 
        className={`root-phone__content ${isMenuOpen ? 'shifted' : ''}`}
        key={location.pathname} 
      >
        <Outlet context={{ 
          isMenuOpen, 
          setIsMenuOpen,
          // ← Añadir las mismas props que Root pasa
          isModalOpen,
          setIsModalOpen,
          selectedImage,
          setSelectedImage,
          setNavigationHandlers,
          openAbout: () => setIsAboutOpen(true)
        }} />
      </div>

      {/* ← Añadir el modal About */}
      <About
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />

      {/* ← Añadir el Modal (igual que en Root) */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        image={selectedImage}
        onNext={navigationHandlers.handleNext}
        onPrevious={navigationHandlers.handlePrevious}
      />
    </LanguageProvider> 
  );
}

export default RootPhone;