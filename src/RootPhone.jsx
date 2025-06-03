// import { Outlet } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import { LanguageProvider } from './components/contexts/LanguageContext';
// import Header3Phone from './components/header/Header3Phone';
// import About from './pages/about/About';
// import Modal from './pages/art/Modal';
// import ModalPhone from './components/modalPhone/ModalPhone';
// import { useState, useEffect } from 'react';
// import './RootPhone.css'

// function RootPhone() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isUserScrolling, setIsUserScrolling] = useState(false);
//   const [isAboutOpen, setIsAboutOpen] = useState(false);
//   const location = useLocation();

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [navigationHandlers, setNavigationHandlers] = useState({
//     handleNext: () => { },
//     handlePrevious: () => { }
//   });

//   const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
//   const [categoryModalData, setCategoryModalData] = useState({
//     categories: {},
//     selectedCategory: 'All',
//     onCategorySelect: () => {},
//     type: 'art'
//   });

//   const handleAboutClick = () => {
//     setIsAboutOpen(true);
//   };

//   const openCategoryModal = (categories, selectedCategory, onCategorySelect, type) => {
//     setCategoryModalData({
//       categories,
//       selectedCategory,
//       onCategorySelect,
//       type
//     });
//     setIsCategoryModalOpen(true);
//   };

//   const closeCategoryModal = () => {
//     setIsCategoryModalOpen(false);
//   };

//   const handleCategorySelect = (category) => {
//     categoryModalData.onCategorySelect(category);
//     setIsCategoryModalOpen(false);
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

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location.pathname]);

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
//           isModalOpen,
//           setIsModalOpen,
//           selectedImage,
//           setSelectedImage,
//           setNavigationHandlers,
//           openAbout: () => setIsAboutOpen(true),
//           openCategoryModal,
//           closeCategoryModal
//         }} />
//       </div>

//       <About
//         isOpen={isAboutOpen}
//         onClose={() => setIsAboutOpen(false)}
//       />

//       <Modal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         image={selectedImage}
//         onNext={navigationHandlers.handleNext}
//         onPrevious={navigationHandlers.handlePrevious}
//       />

//       <ModalPhone
//         isOpen={isCategoryModalOpen}
//         onClose={closeCategoryModal}
//         categories={categoryModalData.categories}
//         selectedCategory={categoryModalData.selectedCategory}
//         onCategorySelect={handleCategorySelect}
//         type={categoryModalData.type}
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
import Modal from './pages/art/Modal';
import ModalPhone from './components/modalPhone/ModalPhone';
import Footer from './components/footer/Footer';
import { useState, useEffect } from 'react';
import './RootPhone.css'

function RootPhone() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const location = useLocation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [navigationHandlers, setNavigationHandlers] = useState({
    handleNext: () => { },
    handlePrevious: () => { }
  });

  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [categoryModalData, setCategoryModalData] = useState({
    categories: {},
    selectedCategory: 'All',
    onCategorySelect: () => {},
    type: 'art'
  });

  const isMenuRoute = location.pathname === '/menu' || location.pathname === '/main-menu';
  const isHomeRoute = location.pathname === '/' || location.pathname === '/home' || location.pathname === '/inicio';
  const isPortfolioRoute = location.pathname === '/portfolio' || location.pathname === '/portafolio';
  const hideFooter = isMenuRoute || isPortfolioRoute || isHomeRoute;

  const handleAboutClick = () => {
    setIsAboutOpen(true);
  };

  const openCategoryModal = (categories, selectedCategory, onCategorySelect, type) => {
    setCategoryModalData({
      categories,
      selectedCategory,
      onCategorySelect,
      type
    });
    setIsCategoryModalOpen(true);
  };

  const closeCategoryModal = () => {
    setIsCategoryModalOpen(false);
  };

  const handleCategorySelect = (category) => {
    categoryModalData.onCategorySelect(category);
    setIsCategoryModalOpen(false);
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
        key={`content-${location.pathname}`}
      >
        <Outlet context={{ 
          isMenuOpen, 
          setIsMenuOpen,
          isModalOpen,
          setIsModalOpen,
          selectedImage,
          setSelectedImage,
          setNavigationHandlers,
          openAbout: () => setIsAboutOpen(true),
          openCategoryModal,
          closeCategoryModal
        }} />
      </div>

      {!hideFooter && (
        <div className="fade-in" key={`footer-${location.pathname}`}>
          <Footer />
        </div>
      )}

      <About
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        image={selectedImage}
        onNext={navigationHandlers.handleNext}
        onPrevious={navigationHandlers.handlePrevious}
      />

      <ModalPhone
        isOpen={isCategoryModalOpen}
        onClose={closeCategoryModal}
        categories={categoryModalData.categories}
        selectedCategory={categoryModalData.selectedCategory}
        onCategorySelect={handleCategorySelect}
        type={categoryModalData.type}
      />
    </LanguageProvider> 
  );
}

export default RootPhone;