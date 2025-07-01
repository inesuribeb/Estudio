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
    isModalOpen,
    setIsModalOpen,
    selectedImage,
    setSelectedImage,
    setNavigationHandlers
  } = useOutletContext();
  
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');

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

  const filteredImages = getImagesByCategory(selectedCategory);

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

  useEffect(() => {
    const handleNextImage = () => {
      if (!selectedImage) return;
      
      const currentImages = getImagesByCategory(selectedCategory);
      
      const currentOrder = selectedImage.order;
      const nextImage = currentImages.find(img => img.order > currentOrder) || currentImages[0];
      setSelectedImage(nextImage);
    };

    const handlePreviousImage = () => {
      if (!selectedImage) return;
      
      const currentImages = getImagesByCategory(selectedCategory);
      
      const currentOrder = selectedImage.order;
      const previousImages = currentImages.filter(img => img.order < currentOrder);
      const previousImage = previousImages.length > 0
        ? previousImages[previousImages.length - 1]
        : currentImages[currentImages.length - 1];
      setSelectedImage(previousImage);
    };

    setNavigationHandlers({
      handleNext: handleNextImage,
      handlePrevious: handlePreviousImage
    });
  }, [selectedCategory, selectedImage, setSelectedImage, setNavigationHandlers]);

  return (
    <div className='photo-design-phone' onClick={(e) => {
      e.stopPropagation();
      setIsMenuOpen(false);
    }}>
      <h2 className='titulo-principal-p'>{t('art')}</h2>
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
    </div>
  );
}

export default PhotoDesignPhone;