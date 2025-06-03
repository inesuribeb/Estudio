// import React, { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { useLanguage } from '../../components/contexts/LanguageContext';
// import { useOutletContext } from 'react-router-dom';
// import { allImages, getImagesByCategory } from '../../utils/Pictures';
// import Modal from './Modal';
// import CategoriesPhone from '../../components/categoriesPhone/CategoriesPhone';

// import './PhotoDesignPhone.css'

// function PhotoDesignPhone() {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const { language, t } = useLanguage();
//   const { isMenuOpen, setIsMenuOpen } = useOutletContext();
//   const [searchParams] = useSearchParams();
//   const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');

//   const categories = {
//     all: {
//       es: "Todos",
//       en: "All"
//     },
//     photography: {
//       es: "Fotografía",
//       en: "Photography"
//     },
//     design: {
//       es: "Diseño",
//       en: "Design"
//     }
//   };

//   useEffect(() => {
//     const category = searchParams.get('category');
//     if (category) {
//       setSelectedCategory(category);
//     }
//   }, [searchParams]);

//   const filteredImages = getImagesByCategory(selectedCategory);

//   const leftColumnImages = filteredImages.filter((_, index) => index % 2 === 0);
//   const rightColumnImages = filteredImages.filter((_, index) => index % 2 === 1);

//   const handleImageClick = (image) => {
//     if (isMenuOpen) {
//       setIsMenuOpen(false);
//     } else {
//       setSelectedImage(image);
//       setIsModalOpen(true);
//     }
//   };

//   const handleNextImage = () => {
//     const currentIndex = filteredImages.findIndex(img => img.order === selectedImage.order);
//     const nextImage = filteredImages[currentIndex + 1] || filteredImages[0];
//     setSelectedImage(nextImage);
//   };

//   const handlePreviousImage = () => {
//     const currentIndex = filteredImages.findIndex(img => img.order === selectedImage.order);
//     const previousImage = filteredImages[currentIndex - 1] || filteredImages[filteredImages.length - 1];
//     setSelectedImage(previousImage);
//   };

//   return (
//     <div className='photo-design-phone' onClick={(e) => {
//       e.stopPropagation();
//       setIsMenuOpen(false);
//     }}>
//       <CategoriesPhone
//         categories={categories}
//         selectedCategory={selectedCategory}
//         onCategoryChange={setSelectedCategory}
//         type="art"
//       />
//       <div className='photo-grid-phone'>
//         <div className='photo-column-phone'>
//           {leftColumnImages.map((image) => (
//             <img
//               key={image.order}
//               src={image.src}
//               alt={image.alt}
//               loading="lazy"
//               onClick={() => handleImageClick(image)}
//             />
//           ))}
//         </div>
//         <div className='photo-column-phone'>
//           {rightColumnImages.map((image) => (
//             <img
//               key={image.order}
//               src={image.src}
//               alt={image.alt}
//               loading="lazy"
//               onClick={() => handleImageClick(image)}
//             />
//           ))}
//         </div>
//       </div>

//       <Modal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         image={selectedImage}
//         onNext={handleNextImage}
//         onPrevious={handlePreviousImage}
//       />
//     </div>
//   );
// }

// export default PhotoDesignPhone;

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLanguage } from '../../components/contexts/LanguageContext';
import { useOutletContext } from 'react-router-dom';
import { allImages, getImagesByCategory } from '../../utils/Pictures';
import CategoriesPhone from '../../components/categoriesPhone/CategoriesPhone';

import './PhotoDesignPhone.css'

function PhotoDesignPhone() {
  const { language, t } = useLanguage();
  const { 
    isMenuOpen, 
    setIsMenuOpen,
    // ← Usar el Modal del RootPhone
    isModalOpen,
    setIsModalOpen,
    selectedImage,
    setSelectedImage,
    setNavigationHandlers
  } = useOutletContext();
  
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');

  // Categorías multiidioma como en PhotoDesign
  const categories = {
    all: {
      es: "Todos",
      en: "All"
    },
    photography: {
      es: "Fotografía",
      en: "Photography"
    },
    design: {
      es: "Diseño",
      en: "Design"
    }
  };

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  // Usar getImagesByCategory de Pictures
  const filteredImages = getImagesByCategory(selectedCategory);

  // Dividir en dos columnas para móvil
  const leftColumnImages = filteredImages.filter((_, index) => index % 2 === 0);
  const rightColumnImages = filteredImages.filter((_, index) => index % 2 === 1);

  const handleImageClick = (image) => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setSelectedImage(image);
      setIsModalOpen(true);
    }
  };

  const handleNextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.order === selectedImage.order);
    const nextImage = filteredImages[currentIndex + 1] || filteredImages[0];
    setSelectedImage(nextImage);
  };

  const handlePreviousImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.order === selectedImage.order);
    const previousImage = filteredImages[currentIndex - 1] || filteredImages[filteredImages.length - 1];
    setSelectedImage(previousImage);
  };

  // ← Configurar handlers de navegación
  useEffect(() => {
    setNavigationHandlers({
      handleNext: handleNextImage,
      handlePrevious: handlePreviousImage
    });
  }, [filteredImages, selectedImage]);

  return (
    <div className='photo-design-phone' onClick={(e) => {
      e.stopPropagation();
      setIsMenuOpen(false);
    }}>
      <CategoriesPhone
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        type="art"
      />
      <div className='photo-grid-phone'>
        <div className='photo-column-phone'>
          {leftColumnImages.map((image) => (
            <img
              key={image.order}
              src={image.src}
              alt={image.alt}
              loading="lazy"
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
        <div className='photo-column-phone'>
          {rightColumnImages.map((image) => (
            <img
              key={image.order}
              src={image.src}
              alt={image.alt}
              loading="lazy"
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
      </div>

      {/* ← ELIMINAR el Modal local - ahora se usa el de RootPhone */}
    </div>
  );
}

export default PhotoDesignPhone;