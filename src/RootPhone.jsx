// import { Outlet } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import { LanguageProvider } from './components/contexts/LanguageContext';
// import Header3Phone from './components/header/Header3Phone';
// import { useState, useEffect } from 'react';
// import './RootPhone.css'

// function RootPhone() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isUserScrolling, setIsUserScrolling] = useState(false);
//   const location = useLocation();

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
//       <Header3Phone />
//       <div 
//         className={`root-phone__content ${isMenuOpen ? 'shifted' : ''}`}
//         key={location.pathname} 
//       >
//         <Outlet context={{ isMenuOpen, setIsMenuOpen }} />
//       </div>
//     </LanguageProvider> 
//   );
// }

// export default RootPhone;

import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { LanguageProvider } from './components/contexts/LanguageContext';
import Header3Phone from './components/header/Header3Phone';
import About from './pages/about/About'; // ← Importar el componente About
import { useState, useEffect } from 'react';
import './RootPhone.css'

function RootPhone() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false); // ← Añadir estado para About
  const location = useLocation();

  // ← Añadir función para manejar click en About
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
        onAboutClick={handleAboutClick} // ← Pasar la función al header
      />
      
      <div 
        className={`root-phone__content ${isMenuOpen ? 'shifted' : ''}`}
        key={location.pathname} 
      >
        <Outlet context={{ 
          isMenuOpen, 
          setIsMenuOpen,
          openAbout: () => setIsAboutOpen(true) // ← Pasar función al contexto si la necesitas
        }} />
      </div>

      {/* ← Añadir el modal About */}
      <About
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />
    </LanguageProvider> 
  );
}

export default RootPhone;